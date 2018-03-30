const Router = require('koa-router');

const handlers = [
    require('./library'),
];

const router = new Router();
router.prefix('/api');

handlers.forEach(handler =>
    router.use(handler)
);

module.exports = router.routes();
