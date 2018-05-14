const service = require('../../services/library');
const router = new (require('koa-router'));

router.get('/library',
  async (ctx) => {
    ctx.response.body = await service.get();
  });

router.post('/library/markWordsRevised',
  async (ctx) => {
    await service.markWordsRevised(ctx.request.body.ids);
    ctx.response.status = 200;
  });

router.post('/library/incWordPriority/:id',
  async (ctx) => {
    console.log(ctx.params.id)
    await service.incWordPriority(ctx.params.id);
    ctx.response.status = 200;
  });

router.post('/library/decWordPriority/:id',
  async (ctx) => {
    await service.decWordPriority(ctx.params.id);
    ctx.response.status = 200;
  });

router.patch('/library',
  async (ctx) => {
    ctx.response.body = await service.patch(ctx.body);
  });

module.exports = router.routes();
