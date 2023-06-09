const notFound = (req, res, next) =>{
    const error = new Error(`Not Found: ${req.originalUrl}`);
    res.status(404);
    next(error)
}

const errorHandler = (err, req, res, next) =>{
    const statuscode = res.statusCode == 200 ? 500 : res.statusCode;
    req.status(statuscode);
    
}