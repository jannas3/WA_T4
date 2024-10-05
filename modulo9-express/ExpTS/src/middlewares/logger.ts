import { Request,Response,NextFunction } from "express";

type LogType ='complete' | 'simple';

function logger(type: LogType){
    if(type === 'simple'){
        return(req:Request,res:Response,next:NextFunction)=>{
            console.log('log simple');
            next()
        }
    
} else{
    return(req:Request,res:Response,next:NextFunction)=>{
        console.log('log complete');
        next()
};
}
}
export default logger;
