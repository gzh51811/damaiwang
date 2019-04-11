const { MongoClient } = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017/DMW';
// Database Name
const dbName = 'aa';
// Use connect method to connect to the server


let connect = () => {
  return new Promise(async (resolve, reject) => {
    MongoClient.connect(url,{ useNewUrlParser: true } ,(err, client) => {
      if (err) {
        reject(err);
      } else {
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        resolve({
          db,
          client
        })
      }
    });
  })
}
// 添加
let add = (col, arr) => {
  return new Promise(async (resolve, reject) => {
    let {
      db,
      client
    } = await connect();
    const collection = db.collection(col);
    collection.insertMany(arr, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
        client.close();
      }
    })
  })
}

// 查询
let find = (col, obj) => {
  return new Promise(async (resolve, reject) => {
    let {
      db,
      client
    } = await connect();
    const collection = db.collection(col);
    collection.find({
      ...obj
    }).toArray(function (err, docs) {
      if (err) {
        reject(err)
      } else {
        resolve(docs);
        client.close();
      }
    })
  })
}
// 更新
let update = (col, obj1, obj2) => {
  return new Promise(async (resolve, reject) => {
    let {
      db,
      client
    } = await connect();
    // Get the documents collection
    const collection = db.collection(col);
    // Update document where a is 2, set b equal to 1
    collection.updateMany({ ...obj1 }
      , { $set: { ...obj2 } }, function (err, result) {
        if (err) {
          reject(err);
        } else {
          resolve(result);
          client.close();
        }
      });
  })
}
// 删除
let remove = (col, obj) => {
  return new Promise(async (resolve, reject) => {
    let {
      db,
      client
    } = await connect();
    const collection = db.collection(col);
    // Delete document where a is 3
    collection.deleteOne(obj, function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
        console.log("Removed the document with the field a equal to 3");
        client.close();
      }
    });
  })
}
module.exports = {
  connect,
  add,
  find,
  remove,
  update
}
