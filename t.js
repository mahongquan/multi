import { transform } from '@babel/core';
import * as babel from '@babel/core';
import fs from 'fs';
import path from 'path';
// import myImportCss from './myImportCss';
var myplugin=function({ types: t }) {
  return {
    visitor: {
      Identifier(path, state) {},
      BinaryExpression(path,state) {
          if (path.node.operator !== "===") {
            return;
          }

          path.node.left = t.identifier("sebmck");
          path.node.right = t.identifier("dork");
      }
    }
  };
};
var options={
  babelrc:false,
  plugins: [
      '@babel/plugin-syntax-jsx',
      '@babel/plugin-transform-react-jsx',
      '@babel/plugin-transform-react-display-name',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-react-jsx-self',
      '@babel/plugin-transform-react-jsx-source',
      '@babel/plugin-transform-flow-strip-types',
      "@babel/plugin-proposal-export-default-from",
      '@babel/plugin-proposal-export-namespace-from',
      "@babel/plugin-proposal-logical-assignment-operators",
      ["@babel/plugin-proposal-optional-chaining", { "loose": false }],
      ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }],
      ["@babel/plugin-proposal-nullish-coalescing-operator", { "loose": false }],
      "@babel/plugin-proposal-do-expressions",
      ],
  parserOpts: {
    "plugins": ["jsx", "flow"]
  }
};
function tFile(){
    babel.transformFile("./tryBabel/src/worker.js", options, function (err, result) {
      //console.log(result); // => { code, map, ast }
      if(err){
        console.log(err);
      }
      else{
         console.log("after transform");
         fs.writeFileSync("./worker.js", result.code);
         console.log("finish");
      }
    });
}
// babel.transform("import a from './app.css';", options,(err,result)=>{
//      console.log("transform finish=======");
//      if(err){
//         console.log(err);
//       }
//       else{
//          console.log(result.code);
//       }
// });
// console.log("=============")
// console.log(result.code);
tFile();
// console.log(result);
// var a=require("babylon").parse("i=1;b=2;console.log(i+b);", {
//   // parse in strict mode and allow module declarations
//   sourceType: "module",

//   plugins: [
//     // enable jsx and flow syntax
//     "jsx",
//     "flow"
//   ]
// });
// var a=result.ast;
// var out_str="";
// for(var i in a.tokens){
//     if(a.tokens[i].value){
//             out_str +=a.tokens[i].value;
//     }
// }
// console.log(out_str);