


function handleRes(res, statusCode, message){
    res.status(statusCode).json({message})
}
export default handleRes;