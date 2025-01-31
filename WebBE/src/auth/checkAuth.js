'use strict'

const { findById } = require("../services/apiKey.service");

const HEADER = {
    API_KEY : 'x-api-key',
    AUTHORIZATION: 'authorization'
}

const apiKey = async ( req, res, next) => {
    try {
        const key = req.headers[HEADER.API_KEY]?.toString();
        if(!key){
            return res.status(403).json({
                message: 'Forbidden Error'
            })
        }
        const objKey = await findById(key);
        if(!objKey){
            return res.status(403).json({
                message: 'Forbidden Error'
            })
        }
        req.objKey = objKey;
        return next()
    } catch (error) {
        return error
    }
}

const permission = ( permission ) => {
    return (req, res, next) => {
        if(!req.objKey.permissions)
        return res.status(403).json({
            message: 'Permission Denied'
        })
        // console.log(req.objKey.permissions)
        const validPermission = req.objKey.permissions.includes(permission)
        if(!validPermission){
            return res.status(403).json({
                message: 'Permission Denied'
            })
        }
        return next()
    }
}


// xu ly cac ham bat dong bo tranh viec dung lap lai try/catch nhieu lan
//utility function
const asyncHandler = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(next)
    }
}
module.exports = {
    apiKey,
    permission,
    asyncHandler
}