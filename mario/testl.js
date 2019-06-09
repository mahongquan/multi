var toned = require('./toned.js');
tonedClass = toned.TonedJS();
var window=require("./myglobal.js");
var l=require("./library.js")
var spritemod = require('./sprites.js');
var fs = require('fs');
function Thing(type) {
  console.log(type)
  if(arguments.length == 0 || !type) return;
  console.log(this===window);
  var self;
  if(this === window){
    self= new Thing()
  }
  else{
    self=this
  }
  console.log(self==this);
  var args = self.args = tonedClass.arrayMake(arguments);
  console.log(args);
  args[0] = self;
  console.log(args);
  type.apply(self, args);
  self.alive = true;
  self.placed = this.outerok = 0;
  self.xvel = this.xvel || 0;
  self.yvel = this.yvel || 0;
  self.collide = self.collide || function() {}; // To do: why does taking this out mess things up?
  
  self.overlaps = [];
  
  self.title = "Water";
  self.spritewidth = self.spritewidth || self.width;
  self.spriteheight = self.spriteheight || self.height;
  self.sprite = "";
  self.libtype="scenery";
  return self;
}
function Goomba(me) {
  me.width = me.height = 8;
  me.moveleft = me.noflip = true;
  me.smart = false;
  me.group = "enemy";
}
var mygoomb = new Thing(Goomba);
//spritemod.setThingSprite(mygoomb)
function getbmp(mygoomb){
    var arr=mygoomb.sprite

    var s=""
    for(var i=0;i<arr.length;i++)
    {
        s+=arr[i]
    }
    fs.writeFile("water.out",s,function(err){if(err!=null)console.log(err);});
}
getbmp(mygoomb)