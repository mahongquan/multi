var todos=[];
console.log("document ready");
function clearall(){
    $("[one]").remove();
}
function button_edit_click(event){
    console.log("button_edit clicked");
    
}
function button_remove_click(event){
    console.log("button_remove clicked");
    console.log(event.data);
    console.log(event.data.row);
    event.data.row.remove();
    let rowid=event.data.rowid;
    todos[rowid]=undefined;//=todos.slice(rowid);
}        
function showall(){
    clearall();
    var todolist=$("#todo-list");
    for(var i in todos){
        if(todos[i]){
            var one = $('<tr one="true"></tr>');
            var rowid = $('<td>'+i+'</td>');
            var newEl = $('<td>'+todos[i]+'</td>');
            var btn_remove = $('<td><button type="button">remove</button></td>');
            //btn.click(button_remove_click);
            btn_remove.bind("click", { row:one,rowid:i},button_remove_click );
            //var btnedit = $('<td><button type="button">edit</button></td>');
            //btnedit.click(button_edit_click);
            one.append(rowid);
            one.append(newEl); 
            //one.append(btnedit);
            one.append(btn_remove);
            todolist.append(one);
        }
    }            
}
function button_add_click(){
    console.log("button_add clicked");
    var newtodo=$("#new-todo");
    todos.push(newtodo[0].value);
    showall();
}
function button_clear_click(){
    todos=[];
    clearall();
}        
$("#root").html(`
<div id="todoapp">
    <header>
        <h1>Todos</h1>
        <div class="input-group">
          <input id="new-todo" class="form-control" type="text" placeholder="What needs to be done?"  aria-label="" aria-describedby="basic-addon1">
          <div class="input-group-prepend">
            <button id="button_add"  class="btn btn-primary" type="button">add</button>
          </div>
        </div>
    </header>
    <section id="main">
      <table id="todo-list"></table>
    </section>
    <button id="button_clear" type="button">clear</button>    
</div>
`);
$("#button_add").click(button_add_click);
$("#button_clear").click(button_clear_click);
showall();