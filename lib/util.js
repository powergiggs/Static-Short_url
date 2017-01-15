fs = require('fs');

exports.debug = (title, obj, status, date) => {
  // date variable for timestamp
  const time = '\n' + new Date().toLocaleString();
  // formatting variables
  const lineBreak = '\n\n';
  const divider = '\n******************************\n';
  const dividerTwo = '++++++++++++++++++++++++++++++\n';
  const output = lineBreak + divider + title + divider;
  const format = obj + '\n' + dividerTwo;

  // color variables
  const red = '\x1B[31m';
  const blue = '\x1B[34m';

  // set console color base on status return
  if (status !== 'success!') {
    status = 'Error!';
    const data = red + [output, format, status, time];

    } else {
      data = blue + [output, format, status, time];
      }
  if (process.env.DEBUG === 'true') {
    // create log file
    fs.appendFile ('./logs/debug.log', data, (err) => {
      if (err) {
        return console.log(err);
      }

    });
    console.log(data);
  }

};
