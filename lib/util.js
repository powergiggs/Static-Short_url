fs = require('fs');
exports.debug = (title, obj, status)=>{
  const divider = '\n++++++++++++++++++++++++++++++++++++++\n'
  const output = divider + title + divider;
  const format = '||' + obj + '||'
  if(!status){
    status = "";
  }
  if(process.env.DEBUG ==="true"){
    var data = (output, obj, status);
    fs.appendFile('./logs/debug.log', [output, format, status], function(err){
      if(err){
        return console.log(err);
      }

    });
    console.log(output, format, status);
  }

};
