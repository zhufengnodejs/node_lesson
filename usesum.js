//var sum  = require('sum');
//会在当前目录的node_modules目录中查找sum文件夹
//console.log(sum(1,2));
//console.log(__filename);
//console.log(__dirname);
/*function(exports,require,module,__filename,__dirname){
var sum = function(a,b){
return a+b;
}
exports.sum = sum;
return module.exports;
}*/
//exports 默认导出对象
//require是加载其它模块的方法
//module代表当前的模块对象 module.exports
//__filename是当前模块的绝对路径
//__dirname是当前模块所有的绝对目录
var uuid = require('uuid');
console.log(uuid.v4());