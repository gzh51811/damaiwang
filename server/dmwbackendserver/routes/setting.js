// var express = require('express');
// var router = express.Router();
// var {
//     connect,
//     add,
//     find,
//     remove,
//     update
// }=require("../lib/sever")

// /* GET home page. */
// router.get('/', function (req, res, next) {
//     res.render('index', {
//         title: 'Express'
//     });
// });
// router.get('/all', async (req, res, next) => {
//     let data = await find("dmw");
//     console.log(data)
//     res.send({
//         status:"调用成功",
//         info:data
//     })
// });


// module.exports = router;