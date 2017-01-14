fs = require('fs');
const chalk = require('chalk');
exports.debug = (title, obj, status, date)=>{
  // date variable for timestamp
  const time = new Date().toLocaleString();
  // formatting variables
  const lineBreak = '\n\n'
  const divider = '\n******************************\n'
  const dividerTwo = '++++++++++++++++++++++++++++++\n'
  const output = lineBreak + divider + title + divider;
  const format =  obj + '\n' + dividerTwo;

  // color variable for console.log
  var error = chalk.bold.red;
  var success = chalk.green;
  var body = chalk.yellow;

  if(!status){
    status = "";
  }
  if(process.env.DEBUG === "true"){

    // create log file
    fs.appendFile('./logs/debug.log', [,output, format, status, time], (err, data) =>{
      if(err){
        return console.log(error(err));
      }


    });
    console.log(success(output), body(format), status, time);
  }

};
