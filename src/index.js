const Koa = require('koa');
require('dotenv').config({path: 'src/.env'})
const app = new Koa();
var Router = require('koa-router');

var router = new Router();


require('./bootstrap');

// app.use(async ctx => {
//     var response = await db.query('SELECT * FROM user');
//     ctx.body = response;
//   });

router.get('/users',async ctx => {
//    await db.query('SELECT * FROM user',(err, res) => {
//         if(err) {
//             console.log(err)
//         }else{
//             ctx.body = res;
//         }
//     });
        var response = await db.query('SELECT * FROM user')
        ctx.body = response;
    

})
  
  app.listen(process.env.PORT,()=>{
    console.log('Server started at : '+ process.env.PORT);
  });

  app
.use(router.routes())
.use(router.allowedMethods());
