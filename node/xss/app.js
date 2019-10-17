const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const router = require('koa-router')();
router.use(views(__dirname + '/views'));
router.get('/', async (ctx, next) => {
    await ctx.render('index');
});
app.use('/', router.routes);
app.listen(3000);