const path=require('path');
const fs=require('fs');
const cheerio = require('cheerio');
let $;
function testa(){
     $ = cheerio.load(`
<div id="container">
<a href="/">ssge</a>
</div>
        `,{
	   xmlMode: true,
	   lowerCaseTags: false
	 });
     let div=$("#container");
     changeA(div);
     console.log(div.html());
}
function changeA(soup){
    let styles=soup.find("a");
    for (var i=0;i<styles.length;i++){
        let pre= $(styles[i]);

        let href=pre.attr("href");
        let cls=pre.attr("class");
        console.log(pre.attr);
        if (!href) href="";
        if (!cls) cls="";
        let title=pre.text();

        pre.replaceWith(`<Link class="${cls}" to="${href}">${title}</Link>`);
    }
}
testa();