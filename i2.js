//we need some heavy sedatives to escape ES5
var inception = document.createElement('iframe');
document.body.appendChild(inception); //you plant the inception and it grows
var airplane = inception.contentWindow; //what's the most resiliant parasite?
var dreams = {};
var reverse_dream = {};

function hash(text){
  return text.replace(/([a-z])[a-z]+/g, '$1').replace(/[A-Z][A-Z]+/g, '');
}

function kick(name){
  for(var tn, i = name.length; i--;){
    reverse_dream[tn = name.slice(-i).join('.')] = hash(tn);
    dreams[hash(tn = name.slice(-i).join('.'))] = tn
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
