const ErrorResponse = require('../utils/ErrorResponse');

const errorHandler =(err,req,res,next) => {
 let error = {...err}

 error.message = err .message;
    //log to console for dev
    console.log(err.stack.red);



    // mongoose bad object id
    if(err.name === 'CastError') {
        const message ='Bootcamp not found with id of ${err.value}';
        error = new ErrorResponse(message,404);

    }

    res.status(error.statusCode || 500).json({
        success:false,
        error:err.message || 'server Error'
    });

};

module.exports = errorHandler;