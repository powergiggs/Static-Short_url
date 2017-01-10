const db = require('./db');

// add urls to db
exports.create = (payload, err, success) =>{

  db.urls.create(payload).then(success).catch(err);
}

//get all urls from db
exports.findAll = (err, success)=>{
  db.urls.findAll().then(success).catch(err);


}

// get db urls by id

exports.find = (payload, err, success) =>{
  db.urls.find({
    where:{
      id:payload.id,
    },

    include:[{
      all:true,
      nested:true,

    }]

  }).then(success).catch(err);


}

// update db record
exports.update = (payload, err, success) =>{
  db.urls.find({
    where:{
      id: payload.id,
    },


  }).then((existingData)=>{
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
}

// delete db record by id

exports.destroy = (payload, err, success) =>{
  db.urls.destroy({
    where:{
      id: payload.id,
    },
  }).then(success).catch(err);


}
