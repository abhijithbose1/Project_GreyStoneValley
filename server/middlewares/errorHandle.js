const errorHandle=(error, req, res, next)=>{
    let status = error.status || 500;
    let message = error.message || 'something went wrong try again';

    // if(error.code==11000){       //custom error messages
    //     return res.status(400).json({
    //         messageTest: parse(error.message)
    //     })       
    // }
    
    res.status(status).json({
        message:message
    });

}

module.exports = { errorHandle}