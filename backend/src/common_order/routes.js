const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.get);
router.post('/', controller.add);
router.put('/:id', controller.update);

module.exports = router;