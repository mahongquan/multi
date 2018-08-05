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
    changeCode(div)
    #return
    styles=getstyles(div)
    

    appname=getAppname(f)

    #print(appname)
    imports.append("import %s from './csslayout/out/%s';" %(appname,appname))
    routes.append('<Route path="/%s" component={%s} />' %(f,appname))
    
    file=open("out/"+appname+".js","w")
    # stylestr=""
    # styles=tranStyle(styles)
    # for style in styles:
    #     stylestr=stylestr +str(style)+"\n"
    # lines=stylestr.split("\n")
    # stylestr=""
    # for l in lines:
    #     stylestr += "// "+l+"\n"
    outstr=str(div)
    outstr=outstr.replace('<a class="nav prev" href','<Link class="nav prev" to')
    outstr=outstr.replace('<a class="nav next" href','<Link class="nav next" to')
    outstr=outstr.replace('<a class="nav start" href','<Link class="nav start" to')
    outstr=outstr.replace('Get Started</a>','Get Started</Link>')

    outstr=outstr.replace('Previous</a>','Previous</Link>')
    outstr=outstr.replace('Next</a>','Next</Link>')
    outstr=outstr.replace("class","className")
    #outstr=translateStr(outstr)
    outstr="""import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Highlight from 'react-highlight';
export default class %s extends Component<Props> {
  render() {
    return (
    %s
    );
  }
}
"""  % (appname,outstr)
    file.write(outstr)
    file.close()
    return
def tosoup():
    content=open("position-example.html").read()
    soup = BeautifulSoup(content,"html.parser")
    return soup
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
def tranStyleOne(style):
    return style
def tranStyle(styles):
    r=[]
    for s in styles:
        r.append(tranStyleOne(s))
    return r
def getstyles(soup):
    styles=soup.find_all("style");
    for pre in styles:
        pre.attrs["jsx"]="true"
        text=pre.text
        pre.clear()
        pre.append("""{`%s`}""" % text)
def changeCode(soup):
    pres=soup.find_all("pre")
    for pre in pres:
        pre.name="Highlight"
        lang=pre.code.attrs["data-lang"]
        pre.attrs["class"]=lang
        text=pre.text
        pre.clear()
        pre.append("""{`%s`}""" % text)
def teste():
    markup = '<a href="http://example.com/">I linked to <i>example.com</i></a><i>example.com</i>'
    soup = BeautifulSoup(markup,"lxml")
    a_tag = soup.a
    r=[]
    while True:
        if soup.i != None:
            i_tag = soup.i.extract()
            r.append(i_tag)
        else:
            break
    print(a_tag)
    print(i_tag)
    print(i_tag.parent) 
    print(str(soup))
    print(r)
if __name__=="__main__":
  main()
  #teste()