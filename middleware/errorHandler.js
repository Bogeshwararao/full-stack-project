const errorHandler=(err, req,res,next)=>{
const {constants}= require("./constants")
    const statusCode = res.statusCode ? statusCode:500;
switch (statusCode){
    case constants.VALIDATION_ERROR:
        res.json({title:"Not found" ,
        message: err.message,
         stackTrace:err.stack});
    case constants.UNAUTHARISED:
            res.json({title:"validation" ,
            message: err.message,
            stackTrace:err.stack});
    case constants.FORBIDEN:
            res.json({title:"FORBIDEN" ,
            message: err.message,
            stackTrace:err.stack});
    case constants.SERVER_ERROR:
            res.json({title:"SERVER_ERROR" ,
            message: err.message,
            stackTrace:err.stack});
            default:
                console.log("all are good")
                break;
}

   
    
};



module.exports= errorHandler;