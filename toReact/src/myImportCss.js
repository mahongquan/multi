import { transform } from 'babel-core';
import * as babel from 'babel-core';
import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import postcssJs from 'postcss-js';
var isString = require('lodash.isstring');
import {
  dirname,
  extname,
  resolve,
  join,
} from 'path';


const extensions = ['.css'];
function toBabelObject(t,tokens){
  const styles = t.objectExpression(
            Object.keys(tokens).map(
              (token) =>{ 
                if(isString(tokens[token])){
                  return t.objectProperty(
                    t.stringLiteral(token),
                    t.stringLiteral(tokens[token])
                  )
                }
                else{
                  return t.objectProperty(
                    t.stringLiteral(token),
                    toBabelObject(t,tokens[token])
                  )
                }
              }
            )
          );
  return styles;
}

const getStylesFromStylesheet = function(stylesheetPath: string, file: any,
  config: any): any {
  // console.log("getStylesFromStylesheet");
  if(!stylesheetPath) return undefined;
  const stylesheetExtension = extname(stylesheetPath);

  if (extensions.indexOf(stylesheetExtension) !== -1) {
    // let tokens, cache;
    const requiringFile = file.opts.filename;
    const cssFile = resolve(dirname(requiringFile), stylesheetPath);
    
    const source =   fs.readFileSync(cssFile, 'utf8');
    console.log(source);

    let root = postcss.parse(source);
    var r=postcssJs.objectify(root);
    return r;
  }
  return undefined;
};
export default function transformPostCSS({ types: t }: any): any {

  return {
    visitor: {
      CallExpression(path: any, { file }: any) {
       const { callee: { name: calleeName }, arguments: args } = path.node;
       console.log(path.node);
       console.log(args);

        if (calleeName !== 'require' || !args.length || 'StringLiteral'===args[0].type) {
          return;
        }

        const [{ value: stylesheetPath }] = args;
        const { config } = this.opts;
        const tokens = getStylesFromStylesheet(stylesheetPath, file, config);

        if (tokens !== undefined) {
          const expression = path.findParent(test => test.isVariableDeclaration() || test.isExpressionStatement());
          const styles = toBabelObject(t,tokens);
          expression.addComment('trailing', ` @related-file ${stylesheetPath}`, true);

          path.replaceWith(         styles        );
        }
        console.log("CallExpression finish");
      },
      ImportDeclaration(path: any, { file }: any) {
        const stylesheetPath = path.node.source.value;
        console.log("here=========="+stylesheetPath);
        console.log(path.node.specifiers);
        // console.log(path.node);
        
        if (path.node.specifiers.length != 1 && path.node.specifiers.length != 0) {
          return;
        }
        if(path.node.specifiers.length == 0){
          path.addComment('trailing', ` @related-file ${stylesheetPath}`, true);
          path.replaceWith(t.EmptyStatement());
          return;
        }
        const { config } = this.opts;
        const tokens = getStylesFromStylesheet(stylesheetPath, file, config);
        // console.log("===getStylesFromStylesheet finish===");
        // console.log(document)
        if (tokens) {
          // const styles=tokens;
          // console.log(t);
          // window.t=t;
          // const styles=t.StringLiteral('');
          const styles = toBabelObject(t,tokens);
          /* eslint-disable new-cap */

          const variableDeclaration = t.VariableDeclaration('var',  [t.VariableDeclarator(path.node.specifiers[0].local, styles)]);
          /* eslint-enable new-cap */
          path.addComment('trailing', ` @related-file ${stylesheetPath}`, true);
          path.replaceWith(variableDeclaration);
        }
      },
    },
  };
}