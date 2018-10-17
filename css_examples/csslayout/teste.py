# -*- coding: utf-8 -*-
import requests
from bs4 import BeautifulSoup
import time
import os
import re
imports=[]
routes=[]
dic={}
dic["{"]="{'{'}"
dic["}"]="{'}'}"
pattern = re.compile(r"""   (//[^\r\n]*) # match a single line comment
                            | (/\*.*?\*/)      # match a multi line comment
                            | ("[^"]*")        # match a string literal
                            | ({|}) #identifier
                        """
                           , re.X | re.S)

def mylistdir(p,f):
    a=os.listdir(p)
    fs=myfind(a,f)
    return(fs)
def myfind(l,p):
    lr=[];
    #print p
    p1=p.replace(".",r"\.")
    p2=p1.replace("*",".*")
    p2=p2+"$"
    p2="^"+p2
    for a in l:
        #print a
        if  re.search(p2,a,re.IGNORECASE)==None :
           pass
           #print "pass"
        else:
           lr.append(a)
       #print "append"
    return lr
def change(f):
    changedir(f)
def getAppname(f):
    rs=f.split(".")[0].split("-")
    if(len(rs)==1):
        return rs[0]
    elif len(rs)==2:
        return rs[0]+rs[1][:1].upper()+rs[1][1:]
    else:
        return rs[0]+rs[1][:1].upper()+rs[1][1:]+rs[2][:1].upper()+rs[2][1:]
def changedir(f):
    content=open(f).read()
    soup = BeautifulSoup(content,"html.parser")
    div=soup.find(id="container")
    styles=div.findall("style")
    
    appname=getAppname(f)
    if appname in ["index","display","noLayout","toc","about"]:
        return 
    #print(appname)
    imports.append("import %s from './csslayout/out/%s';" %(appname,appname))
    routes.append('<Route path="/%s" component={%s} />' %(f,appname))
    
    file=open("out/"+appname+".js","w")
    outstr=str(div)
    outstr=outstr.replace('<a class="nav prev" href','<Link class="nav prev" to')
    outstr=outstr.replace('<a class="nav next" href','<Link class="nav next" to')
    outstr=outstr.replace('Previous</a>','Previous</Link>')
    outstr=outstr.replace('Next</a>','Next</Link>')
    outstr=outstr.replace("class","className")
    outstr=translateStr(outstr)
    outstr="""import React, { Component } from 'react';
import {Link} from 'react-router-dom';
export default class Root extends Component<Props> {
  render() {
    return (
    %s
    );
  }
}
"""  % outstr
    file.write(outstr)
    file.close()
    return
def main():
    fs=mylistdir(".","*.html")
    for f in fs:
        change(f)
    print(imports)
    print(routes)
    f=open("out.txt","w")
    for i in imports:
        f.write(i+"\n")
    for i in routes:
        f.write(i+"\n")
    f.close()
def translateValue(old):
    print("translateValue======")
    print(old)
    new=dic.get(old)
    if new!=None:
        return new
    return old
def func(match):
    print("match======",match)
    if match.group(1) or match.group(2) or match.group(3):
        return match.group()
    if match.group(4):
        return  translateValue(match.group())#
        #raw_input()
    else:
      return match.group()
def translateStr(source):
  return re.sub(pattern,func,source)
if __name__=="__main__":
  main()