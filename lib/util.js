fs = require('fs');
const chalk = require('chalk');
exports.debug = (title, obj, status)=>{
  const divider = '\n\n******************************\n'
  const dividerTwo = '++++++++++++++++++++++++++++++\n'
  const output = divider + title + divider;
  const format =  obj + '\n' + dividerTwo;
  var error = chalk.bold.red;
  var success = chalk.green;
  var body = chalk.yellow;
  if(!status){
    status = "";
  }
  if(process.env.DEBUG ==="true"){
    var data = (output, obj, status);
    fs.appendFile('./logs/debug.log', [output, format, status], (err, data) =>{
      if(err){
        return console.log(error(err));
      }

    });
    console.log(success(output), body(format), status);
  }

};
