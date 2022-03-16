const express = require('express');
const router = express.Router(); 
const {getHospitals,getHospital,createHospitals,updateHospital,deleteHospital} = require('../controllers/hospitals');

const appointmentRouter = require('./appointments');


const {protect,authorize} = require('../middleware/auth');

router.use('/:hospitalId/appointments/',appointmentRouter);

router.route('/').get(getHospitals).post(protect,authorize('admin'),createHospitals);
router.route('/:id').get(getHospital).put(protect,authorize('admin'),updateHospital).delete(protect,authorize('admin'),deleteHospital);

module.exports = router;