let render=(element,tag)=>{
    tag.innerHTML=element.html();
    console.log(tag);
}
export default {render:render};