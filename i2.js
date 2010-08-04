//we need some heavy sedatives to escape ES5
var inception = document.createElement('iframe');
document.body.appendChild(inception); //you plant the inception and it grows
var airplane = inception.contentWindow; //what's the most resiliant parasite?
var dreams = {};
var dreamlist = [];
var reverse_dream = {};

function hash(text){
  return '`'+text.replace(/[A-Z][a-z][A-Z]/g,'')
             .replace(/([a-z])[a-z]+/g, '$1')
             .replace(/[A-Z][A-Z]+/g, '')
             .replace(/[a-z][a-z]+/g, '')
             .replace(/\./g,'') + text.length.toString(36);
}

function kick(name){
  for(var tn, i = name.length; i--;){
    //reverse_dream[tn = name.slice(-i).join('.')] = hash(tn);
    //dreams[hash(tn = name.slice(-i).join('.'))] = tn
    if(!reverse_dream[tn = name.slice(-i).join('.')] && tn.length > 3 && /^[a-zA-Z\.]+$/.test(tn)){
      reverse_dream[tn] = hash(tn);
      dreamlist.push(tn);
    }
  }
}



for(var yusuf in airplane){
  var rain = airplane[yusuf];
  kick([yusuf]);
  if(rain == window || rain == document) continue;
  for(var arthur in rain){
    var hotel = rain[arthur]; //charlie!
    if(hotel == window || hotel == document) continue;
    kick([yusuf, arthur]);
    for(var eames in hotel){
      kick([yusuf, arthur, eames]);
      //var mountain = hotel[eames];
      //3 levels in. Don't want the time dilation effect to trap us in limbo
    }
  }
}
document.body.removeChild(inception); //the dream is collapsing!

var dl = dreamlist.sort(function(a,b){
  return a.length - b.length;
});

for(var l = dl.length; l--;){
  dreams[hash(dl[l])] = dl[l];
}

/*
dreams: {
  hash: value
}
*/
