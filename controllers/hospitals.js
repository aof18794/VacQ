const Hospital = require('../models/Hospital');
//@desc Get all hospitals
//@route GET /api/v1/hospitals
//@access Public
exports.getHospitals = async (req,res,next) => {
    try {
        const hospital = await Hospital.find();
        res.status(200).json({success:true,count:hospital.length,data:hospital});
    } catch (error) {
        res.status(400).json({success:false});
    }
}

//@desc Get one hospitals
//@route GET /api/v1/hospitals/:id
//@access Public
exports.getHospital = async (req,res,next) => {
    try {
        const hospital = await Hospital.findById(req.params.id);

        if (!hospital) {
            return res.status(400).json({success:false});
        }
        
        res.status(200).json({success:true,data:hospital});
    } catch (error) {
        res.status(400).json({success:false});
    }
}

//@desc Create a hospital
//@route POST /api/v1/hospitals
//@access Private
exports.createHospitals = async (req,res,next) => {
    const hospital = await Hospital.create(req.body);
    res.status(201).json({
        success:true,
        data:hospital
    });
    // console.log(req.body);
    // res.status(200).json({success:true,msg:`Create hospitals`});

}

//@desc Put one hospitals
//@route PUT /api/v1/hospitals/:id
//@access Private
exports.updateHospital = async (req,res,next) => {
    try {
        const hospital = await Hospital.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        })

        if (!hospital) {
            return res.status(400).json({success:false});
        }
        res.status(200).json({success:true,data:hospital});
    } catch (error) {
        res.status(400).json({success:false});
    }
}

//@desc Delete one hospitals
//@route DELETE /api/v1/hospitals/:id
//@access Private
exports.deleteHospital = async (req,res,next) => {
    try {
        const hospital = await Hospital.findByIdAndDelete(req.params.id);

        if (!hospital) {
            return res.status(400).json({success:false});
        }
        res.status(200).json({success:true,data:{}});
    } catch (error) {
        res.status(400).json({success:false});
    }

}

