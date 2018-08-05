import { transform } from 'babel-core';
import * as babel from 'babel-core';
import fs from 'fs';
import path from 'path';
// import util from 'util';
// import makeDebug from 'debug';
// import postcss from 'postcss';
// import loadConfig from 'postcss-load-config';
import {
  dirname,
  extname,
  resolve,
  join,
} from 'path';


const extensions = ['.css'];

const getStylesFromStylesheet = function(stylesheetPath: string, file: any,
  config: any): any {
  console.log("getStylesFromStylesheet");
  const stylesheetExtension = extname(stylesheetPath);

  if (extensions.indexOf(stylesheetExtension) !== -1) {
    // let tokens, cache;
    const requiringFile = file.opts.filename;
    const cssFile = resolve(dirname(requiringFile), stylesheetPath);
    // const data = JSON.stringify({ cssFile, config });
    link(cssFile);
    // const source =   fs.readFileSync(cssFile, 'utf8');
    // const extractModules = (_, resultTokens: any) => {
    //   console.log("extractModules=====================");
    //   // console.log(arguments);
    //   // console.log(resultTokens);
    //     tokens = resultTokens;
    // };

    // let configPath = path.dirname(cssFile);

    // if (config) {
    //   configPath = path.resolve(config);
    // }
    // // console.log(config);
    // // console.log(configPath);

    // const { plugins, options } =    await loadConfig({ extractModules }, configPath);
    // // // const config_r =    await loadConfig({ extractModules }, configPath);    
    // // // console.log(config_r);
    // // console.log(plugins);
    // // console.log(options);
    // console.log(postcss);

    // const runner = postcss(plugins);


    // await runner.process(source, Object.assign({
    //   from: cssFile,
    //   to: cssFile, // eslint-disable-line id-length
    // }, options));
    // // console.log(cssFile);
    // // console.log(source);
    // // console.log(tokens);
    // const result=JSON.stringify(tokens);
    // console.log(result);
    // console.log("before return 2")

    return true;
  }
  // console.log("before return")
  return false;
};
function link(file1) {
  // body...
  var thelink=document.createElement('link');
  thelink.setAttribute("rel","stylesheet");
  thelink.setAttribute("href",file1);
  console.log(file1);
  document.head.appendChild(thelink);
}
export default function transformPostCSS({ types: t }: any): any {

  return {
    visitor: {
      CallExpression(path: any, { file }: any) {
        const { callee: { name: calleeName }, arguments: args } = path.node;

        if (calleeName !== 'require' ||
            !args.length ||
            !t.isStringLiteral(args[0])) {
          return;
        }

        const [{ value: stylesheetPath }] = args;
        const { config } = this.opts;
        const tokens = getStylesFromStylesheet(stylesheetPath, file, config);

        console.log("===getStylesFromStylesheet finish===");
        if (tokens) {
          // const styles=tokens;
          // console.log(t);
          // window.t=t;
          // const styles=t.StringLiteral('');
          // const styles = t.objectExpression(
          //   Object.keys(tokens).map(
          //     (token) => t.objectProperty(
          //       t.stringLiteral(token),
          //       t.stringLiteral(tokens[token])
          //     )
          //   )
          // );
          /* eslint-disable new-cap */

          // const variableDeclaration = t.VariableDeclaration('var',
          //   [t.VariableDeclarator(path.node.specifiers[0].local, styles)]);
          const variableDeclaration=t.EmptyStatement();
          /* eslint-enable new-cap */
          path.addComment('trailing', ` @related-file ${stylesheetPath}`, true);
          path.replaceWith(variableDeclaration);
        }
      },
      ImportDeclaration(path: any, { file }: any) {
        const stylesheetPath = path.node.source.value;
        // console.log(path.node.specifiers);
        // console.log(path.node);
        
        if (path.node.specifiers.length !== 1) {
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
          // const styles = t.objectExpression(
          //   Object.keys(tokens).map(
          //     (token) => t.objectProperty(
          //       t.stringLiteral(token),
          //       t.stringLiteral(tokens[token])
          //     )
          //   )
          // );
          /* eslint-disable new-cap */

          // const variableDeclaration = t.VariableDeclaration('var',
          //   [t.VariableDeclarator(path.node.specifiers[0].local, styles)]);
          const variableDeclaration=t.EmptyStatement();
          /* eslint-enable new-cap */
          path.addComment('trailing', ` @related-file ${stylesheetPath}`, true);
          path.replaceWith(variableDeclaration);
        }
      },
    },
  };
}