const express =  require('express');
const pool = require('../pool');
const router = express.Router();
router.get('/',(req,res)=>{
  var output = {pageSize:8}; //每页条数
   output.pno = req.query.pno; // 页码
  var sql = 'select * from xu_products';
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    output.count = result.length;//总记录数
    output.pageCount = Math.ceil(output.count/output.pageSize);//总页数
    output.products = result.slice(output.pno*8,output.pno*8+8)
    res.send(output);
  })
});
module.exports = router;