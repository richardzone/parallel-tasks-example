# parallel-tasks-example
Parallel tasks execution sample code using generators(with [co](https://github.com/tj/co) library) or promises(with [bluebird](https://github.com/petkaantonov/bluebird)).


## Explanation
The sample code firstly convert task array to array of functions using [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map), then the array is `[settled](https://github.com/petkaantonov/bluebird/blob/master/API.md#settle---promise)` using [bluebird](https://github.com/petkaantonov/bluebird)(promise library) or`yielded using [co](https://github.com/tj/co).

## Installation

```sh
$ git clone https://github.com/richardzone/parallel-tasks-example.git
$ cd parallel-tasks-example
$ npm install
```

## Usage
```sh
$ node promiseParallel.js
```
Or
```sh
$ node --harmony generatorParallel.js
```
Sample output =>

```
done tagging: instance1
done tagging: instance4
done tagging: instance2
all done with instances:
instance1
instance2
instance 3 permission denied
instance4
Total success: 3 , total errors: 1
```

# License

  MIT