var express = require('express');
var router = express.Router();



router.get("/:name", function(req, res) {
    res.render('vc/api/index', { title: req.params.name });
});
router.post('/bind', function(req, res) {
    res.json({
        retCode:"0000",
        retMsg:"操作完成",
        sign:"0000000-256"
    });
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
