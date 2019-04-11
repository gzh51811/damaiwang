var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var multipart = require('connect-multiparty');
var {
    connect,
    add,
    find,
    remove,
    update
} = require("../lib/sever")

/* GET home page. */
router.get('/', function (req, res, next) {
        res.render('index', {
            title: 'Express'
        });
    });
//所有商品
router.get('/all', async (req, res, next) => {
    let data = await find("dmw");
    res.send({
        status: "调用成功",
        info: data
    })
// 发布商品的上传图片
// router.post("/ToUpload", multipart(), function (req, res){
//         //获得文件名
//   var filename = req.files.files.originalFilename || path.basename(req.files.files.path);
//   //复制文件到指定路径
//   var targetPath = '../public/uploads/' + filename;
//   //复制文件流
//   fs.createReadStream(req.files.files.path).pipe(fs.createWriteStream(targetPath));
//   //响应ajax请求，告诉它图片传到哪了
//   res.json({ code: 200, data: { url: 'http://' + req.headers.host + '/public/uploads/' + filename } });
//     })
});


module.exports = router;