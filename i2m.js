//we need some heavy sedatives to escape ES5
(function(airplane){
  var dreams = {};

  function hash(text){
    return text.replace(/[A-Z][a-z][A-Z]/g,'')
               .replace(/([a-z])[a-z]+/g, '$1')
               .replace(/[A-Z][A-Z]+/g, '')
               .replace(/[a-z][a-z]+/g, '')
               .replace(/\./g,'') + text.length.toString(36);
  }

  function kick(name){
    for(var tn, i = name.length; i--;)
      dreams[hash(tn = name.slice(-i).join('.'))] = tn;
  }

  for(var yusuf in airplane){
    var rain = airplane[yusuf];
    kick([yusuf]);
    for(var arthur in rain){
      var hotel = rain[arthur]; //charlie!
      kick([yusuf, arthur]);
      for(var eames in hotel){
        kick([yusuf, arthur, eames]);
      }
    }
  }
  airplane.maxify = function(str){
    return str.replace(/\$(\w+)/g, function(c,d){
      return dreams[d]
    })
  }
})(this)
