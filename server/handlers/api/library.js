const service = require('../../services/library');
const router = new(require('koa-router'));

router.get('/library',
  async (ctx) => {
    ctx.response.body = await service.get();
  });

router.patch('/library',
  async (ctx) => {
    ctx.response.body = await service.patch(ctx.body);
  });

module.exports = router.routes();
