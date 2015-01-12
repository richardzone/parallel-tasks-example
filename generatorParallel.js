var co = require('co');
var R = require('ramda');


co(function* () {

  var tagInstance = R.curry(function(el, i, all, done) {
    setTimeout(function() {
      if(el === 'instance4') {
        done('error tagging ' + el + ' : Permission denied');
      } else {
        console.log('done tagging', el);
        done(null,el);
      }
    }, Math.random() * 2000);
  });

  var instances = [
    'instance-windows-1', 'instance-linux-1', 'instance3', 'instance4'
  ];
  try {
    var testReturn = yield instances.map(tagInstance);
    console.log('all instances have been tagged: ' + testReturn);
  } catch(err) {
    console.error(err);
  }

});