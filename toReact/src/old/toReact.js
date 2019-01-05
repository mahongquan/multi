const path=require('path');
const fs=require('fs');
const cheerio = require('cheerio');
let $;
let imports=[]
let routes=[]
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
                return one;
            }
        }
    });
    console.log(files);
    return(files)
}
function getAppname(f){
	let rs;
    rs=f.split(".");
    console.log(rs);
    rs=rs[0].split("-");
    console.log(rs);
    if(rs.length==1){
        return rs[0]
    }
    else if (rs.length==2){
        return rs[0]+"_"+rs[1]
    }
    else{
        return rs[0]+"_"+rs[1]+"_"+rs[2];
    }
}
function change(dir,f){
     let content=fs.readFileSync(dir+"/"+f, {encoding:"utf-8",flag:"r"});
     $ = cheerio.load(content,{
	   xmlMode: true,
	   lowerCaseTags: false
	 });
     let div=$("#container");
     // window.div=div;
     // return;
     changeCode(div);
     changeStyles(div);
     if(f==="toc.html"){changeA_all(div)}
     else{changeA(div);}
     changeClass(div);
     //console.log(div.html());
     let appname=getAppname(f);
     //console.log(appname);
//     //print(appname)
     imports.push(`import ${appname} from './${appname}';`); //%(appname,appname))
     routes.push(`<Route path="/${f}" component={${appname}} />`); //%(f,appname))
    
     //file=open("out/"+appname+".js","w")
     let outstr=div.html();
    outstr=`import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Highlight from 'react-highlight';
export default class ${appname} extends Component<Props> {
  render() {
    return (<React.Fragment>
    ${outstr}
    </React.Fragment>);
  }
}
`;
   fs.writeFileSync("csslayout2/src/"+appname+".js", outstr);
}
function has_nav(a){
    var cs=a.attr("class")
    if(! cs) return false;
    cs=cs.split(" ");
    console.log(cs);
    var findv=cs.find(function(a)
        {
            console.log(a);if(a==="nav")return true;
        }
    );
    console.log(findv);

    if(findv) {return true;}
    else{return false;} 
}
function changeA_all(soup){
    let styles=soup.find("a");

    for (var i=0;i<styles.length;i++){
        let pre= $(styles[i]);

        let attrs=pre[0].attribs;

        let title=pre.html();
        
        let attr_str="";
        for (var j in attrs){
            if(j==="href"){
                attr_str +=` to='${attrs[j]}'`
            }
            else{
                attr_str +=` ${j}='${attrs[j]}'`
            }
        }
        pre.replaceWith(`<Link ${attr_str}>${title}</Link>`);
    }
}
function changeA(soup){
    let styles=soup.find("a");

    for (var i=0;i<styles.length;i++){
        let pre= $(styles[i]);
        if (!has_nav(pre)) continue;

        let attrs=pre[0].attribs;

        let title=pre.html();
        
        let attr_str="";
        for (var j in attrs){
            if(j==="href"){
                attr_str +=` to='${attrs[j]}'`
            }
            else{
                attr_str +=` ${j}='${attrs[j]}'`
            }
        }
        pre.replaceWith(`<Link ${attr_str}>${title}</Link>`);
    }
}

function changeClass(soup){
    let styles=soup.find("[class]");
    for (var i=0;i<styles.length;i++){
        let pre= $(styles[i]);

        let text=pre.attr("class");
        pre.removeAttr("class");
        pre.attr("className",text)
    }
}
function changeStyles(soup){
    let styles=soup.find("style");
    for (var i=0;i<styles.length;i++){
    	let pre= $(styles[i]);
        let text=pre.text();
        pre.empty();
        pre.attr("jsx","true");
        pre.append("{`"+text+"`}")
    }
}
function changeCode(soup){
    let pres=soup.find("pre");//.replaceWith((data)=>{
    for(var i=0;i<pres.length;i++){
    	let pre=$(pres[i]);
        pre.name="Highlight";
        let lang=pre.first("code").attr["data-lang"]
        pre.attr["class"]=lang
        let text=pre.text();
        pre.replaceWith("<Highlight>{`"+text+"`}</Highlight>");
    }
}
function main(){
    var dir="./csslayout";
    var files=mylistdir(dir,/.*.html/);
    for(var i=0;i<files.length;i++)
    {
        let f=files[i];
        if(f!=undefined){
            console.log(f);
            change(dir,f);
        }
    }
    //change("./csslayout/","display.html");
    print(imports)
    print(routes)
    let outstr=""
    for(var i=0;i<imports.length;i++){
        outstr +=imports[i]+"\n";
    }
    imports=routes;
    for(var i=0;i<imports.length;i++){
        outstr +=imports[i]+"\n";
    }
    fs.writeFileSync("out.txt", outstr);
}
main();
