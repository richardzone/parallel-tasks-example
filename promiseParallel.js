var P = require('bluebird');

var instances = ['instance1', 'instance2', 'instance3', 'instance4'];

var itemToPromise = function(instance) {
  var deferred = P.pending();
  setTimeout(function () {
    if (instance === 'instance3') {
      deferred.reject('error tagging ' + instance + ' : permission denied');
    } else {
      console.log('done tagging:', instance);
      deferred.resolve(instance);
    }
  }, Math.random() * 2000);
  return deferred.promise;
};

var tasksParallelExecutionWithPromises = function () {
  P
    .settle(instances.map(itemToPromise))
    .then(function (results) {
      console.log('all done with instances:');
      var errorsCount = results
        .map(function (r) {
          console.log(r.isFulfilled() ? r.value() : r.reason());
          return r;
        })
        .reduce(countErrors, 0);
      console.log('Total success:', instances.length - errorsCount, ', total errors:', errorsCount);

    })
    .catch(function(err) {
      console.error('error:', err);
    });
};

var countErrors = function (errorsCount, r) {
  return r.isRejected() ? errorsCount + 1 : errorsCount;
}

tasksParallelExecutionWithPromises();