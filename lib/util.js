exports.debug = (title, obj, status)=>{
  const divider = '\n++++++++++++++++++++++++++++++++++++++\n'
  const output = divider + title + divider;
  if(!status){
    status = true;
  }
  if(process.env.DEBUG){
    console.log(output, obj, status);
  }

};
