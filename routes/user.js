const express =  require('express');
const pool = require('../pool');
const router = express.Router();
router.post('/',(req,res)=>{
  var uname = req.body.uname;
  var upwd = req.body.upwd;
  if(uname && upwd){
    var sql = 'select * from user where uname = ? and upwd = ?'
    pool.query(sql,[uname,upwd],(err,result)=>{
      if(err)throw err;
      if(result.length >= 1){
        console.log(result[0].uname)
        req.session['uid'] = result[0].uname;
        console.log(req.session['uid'])
        res.send({ok:1});
      }else{
        res.send({ok:0});
      }
    })
  }else{
    res.send({ok:0,msg:"请输入账号密码"});
  }
});
//
router.get('/islogin',(req,res)=>{
  if(req.session['uid'] != undefined){
    var uname = req.session['uid']
    console.log(uname)
    res.send({ok:1,msg:uname})
  }else{
    res.send({ok:0});
  }
})
//
router.get('/siginout',(req,res)=>{
  req.session['uid'] = undefined;
  res.end();
})
module.exports = router;