const express = require('express');
const router = express.Router(); 
const {getHospitals,getHospital,createHospitals,updateHospital,deleteHospital} = require('../controllers/hospitals');

router.route('/').get(getHospitals).post(createHospitals);
router.route('/:id').get(getHospital).put(updateHospital).delete(deleteHospital);

module.exports = router;