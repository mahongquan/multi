// // -*- coding: utf-8 -*-
// import requests
// from bs4 import BeautifulSoup
// import time
// import os
// import re
const path=require('path');
const fs=require('fs');
const cheerio = require('./cheerio');

let imports=[]
let routes=[]
let dic={}
dic["{"]="{'{'}"
dic["}"]="{'}'}"
// pattern = re.compile(r"""   (//[^\r\n]*) // match a single line comment
//                             | (/\*.*?\*/)      // match a multi line comment
//                             | ("[^"]*")        // match a string literal
//                             | ({|}) //identifier
//                         """
//                            , re.X | re.S)
function print(a){
    console.log(a);
}
function path_isdir(p){
    var stat=fs.statSync(p);
    if(stat.isDirectory()){
      return true;
    }
    return false;
}
function mylistdir(p,f){
    var children = fs.readdirSync(p);
    var files=children.map((one, idx) =>{
        var p1=p+"/"+one;
        if (path_isdir(p1)){
            return ;
        }
        else{
            var at=one.search(f)
            // console.log(one);
            // console.log(at);
            if(at!=-1){
                return p1;
            }
        }
    });
    console.log(files);
    return(files)
}
// function getAppname(f){
//     rs=f.split(".")[0].split("-")
//     if(len(rs)==1):
//         return rs[0]
//     elif len(rs)==2:
//         return rs[0]+rs[1][:1].upper()+rs[1][1:]
//     else:
//         return rs[0]+rs[1][:1].upper()+rs[1][1:]+rs[2][:1].upper()+rs[2][1:]
// }
function change(f){
     content=fs.readFileSync(f, {encoding:"utf-8",flag:"r"});
     const $ = cheerio.load(content);
     div=$("#container");
     changeCode(div);
//     //return
//     styles=getstyles(div)
    

//     appname=getAppname(f)

//     //print(appname)
//     imports.append("import %s from './csslayout/out/%s';" %(appname,appname))
//     routes.append('<Route path="/%s" component={%s} />' %(f,appname))
    
//     file=open("out/"+appname+".js","w")
//     // stylestr=""
//     // styles=tranStyle(styles)
//     // for style in styles:
//     //     stylestr=stylestr +str(style)+"\n"
//     // lines=stylestr.split("\n")
//     // stylestr=""
//     // for l in lines:
//     //     stylestr += "// "+l+"\n"
//     outstr=str(div)
//     outstr=outstr.replace('<a class="nav prev" href','<Link class="nav prev" to')
//     outstr=outstr.replace('<a class="nav next" href','<Link class="nav next" to')
//     outstr=outstr.replace('<a class="nav start" href','<Link class="nav start" to')
//     outstr=outstr.replace('Get Started</a>','Get Started</Link>')

//     outstr=outstr.replace('Previous</a>','Previous</Link>')
//     outstr=outstr.replace('Next</a>','Next</Link>')
//     outstr=outstr.replace("class","className")
//     //outstr=translateStr(outstr)
//     outstr="""import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import Highlight from 'react-highlight';
// export functionault class %s extends Component<Props> {
//   render() {
//     return (
//     %s
//     );
//   }
// }
// """  % (appname,outstr)
//     file.write(outstr)
//     file.close()
//     return
}
// function tosoup(){
//     content=open("position-example.html").read()
//     soup = BeautifulSoup(content,"html.parser")
//     return soup
// }

// function translateValue(old){
//     print("translateValue======")
//     print(old)
//     new=dic.get(old)
//     if new!=None:
//         return new
//     return old
// }
// function func(match){
//     print("match======",match)
//     if match.group(1) or match.group(2) or match.group(3):
//         return match.group()
//     if match.group(4):
//         return  translateValue(match.group())//
//         //raw_input()
//     else:
//       return match.group()
// }
// function translateStr(source){
//   return re.sub(pattern,func,source)
// }
// function tranStyleOne(style){
//     return style
// }
// function tranStyle(styles){
//     r=[]
//     for s in styles:
//         r.append(tranStyleOne(s))
//     return r
// }
// function getstyles(soup){
//     styles=soup.find_all("style");
//     for pre in styles:
//         pre.attrs["jsx"]="true"
//         text=pre.text
//         pre.clear()
//         pre.append("""{`%s`}""" % text)
// }
function changeCode(soup){
    console.log(soup);
    // pres=soup.find_all("pre")
    // for pre in pres:
    //     pre.name="Highlight"
    //     lang=pre.code.attrs["data-lang"]
    //     pre.attrs["class"]=lang
    //     text=pre.text
    //     pre.clear()
    //     pre.append("""{`%s`}""" % text)
}
// function teste(){
//     markup = '<a href="http://example.com/">I linked to <i>example.com</i></a><i>example.com</i>'
//     soup = BeautifulSoup(markup,"lxml")
//     a_tag = soup.a
//     r=[]
//     while True:
//         if soup.i != None:
//             i_tag = soup.i.extract()
//             r.append(i_tag)
//         else:
//             break
//     print(a_tag)
//     print(i_tag)
//     print(i_tag.parent) 
//     print(str(soup))
//     print(r)
// }
function main(){
    var files=mylistdir("./csslayout",/.*.html/);
    for(var i=0;i<files.length;i++)
    {
        let f=files[i];
        change(f);
        break;
    }
    // print(imports)
    // print(routes)
    // f=open("out.txt","w")
    // for i in imports:
    //     f.write(i+"\n")
    // for i in routes:
    //     f.write(i+"\n")
    // f.close()
}
main();
