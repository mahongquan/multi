import { transform } from 'babel-core';
import * as babel from 'babel-core';
import fs from 'fs';
import path from 'path';
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
  plugins: [__dirname+"/myImportCss.js"],
  babelrc:false,
  parserOpts: {
    "plugins": ["jsx", "flow"]
  }
};
function tFile(){
    babel.transformFile("./Pant/src/index_local.js", options, function (err, result) {
      //console.log(result); // => { code, map, ast }
      if(err){
        console.log(err);
      }
      else{
         console.log("after transform");
         console.log(result.code);
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