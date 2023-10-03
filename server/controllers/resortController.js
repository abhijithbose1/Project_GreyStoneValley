const { Resort } = require("../models/resortModel");

const getResorts = async (req, res, next) => {
    try {
        const dbResponse = await Resort.find();
        res.json(dbResponse)

    } catch (error) {
        next(error);
    }
}

const addResort = async (req, res, next) => {
    const { ...data } = req.body;
    try {
        const dbResponse = await Resort.create(data);
        res.json(dbResponse);
    } catch (error) {
        next(error);
    }
}

const updateResort = async (req, res, next) => {
    try {
        const { _id, ...rest } = req.body;

        const dbResponse = await Resort.findByIdAndUpdate(_id,  rest , {new:true});
        res.json(dbResponse)
        
    } catch (error) {
        next(error);
    }
}




module.exports = { getResorts, addResort, updateResort };