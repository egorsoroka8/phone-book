const Router = require('express');
const router = new Router();
const phoneController = require('../controllers/phoneController');

router.post('/add-phone', phoneController.addNumber);
router.get('/get-phones', phoneController.getNumbers);
router.delete('/remove-phone', phoneController.removeNumber);

module.exports = router;