var express = require('express');
var router = express.Router();
var crypto=require("crypto");

function paramsCheck(paramsObject,res,fnDecode){
    var params=[];
    for(var key in paramsObject){
        //过滤掉安全参数
        if(paramsObject.hasOwnProperty(key)){
           // continue;
        }

        if(key=="sign"||key=="etc")
            continue;

        if(fnDecode){
            paramsObject[key]=fnDecode(paramsObject[key]);
        }

        params.push({
            key:key,
            value:paramsObject[key]
        });
    }
    //升序排列
    params =params.sort(function (a, b) {
        return a.key>b.key?1:-1;
    });

    console.log(params);
    var sign="";
    for(var i=0;i<params.length;i++){
        sign+=params[i].key+"="+params[i].value+"&";
    }
    sign=sign.substring(0,sign.length-1);
    console.log(sign);
    sign+="123456789112345678911234567891";
    console.log(sign);

    var md5 = crypto.createHash('md5');
    md5.update(sign);
    sign=md5.digest("hex");
    console.log(sign);

    if(sign!=paramsObject["sign"]){
        res.json({
            retCode:"0001",
            retMsg:"sign error",
            sign:"0000000-256"
        });
    }else{
        res.json({
            retCode:"0000",
            retMsg:"sucess",
            sign:"0000000-256"
        });
    }
}

router.get("/:name", function(req, res) {

    if(req.query["sign"]){
        paramsCheck(req.query,res,req.decodeURIComponent);
    }
    else{
        res.render('vc/api/index', { title: req.params.name });
    }

});
router.post('/:name', function(req, res) {

    paramsCheck(req.body,res);

    //res.render('index', { title: 'Express' });
});





router.post('/unbind', function(req, res) {
    res.json({
        retCode:"0000",
        retMsg:"操作完成",
        sign:"0000000-256"
    });
    //res.render('index', { title: 'Express' });
});

module.exports = router;
/**
 * Created by Administrator on 2014/5/25.
 */
