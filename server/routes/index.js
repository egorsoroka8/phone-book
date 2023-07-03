const Router = require('express');
const router = new Router();
const phoneRouter = require('./phoneRouter');

router.use('/', phoneRouter);

module.exports = router;