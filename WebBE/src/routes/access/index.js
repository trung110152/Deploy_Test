'use strict'

const express = require('express');
const accessController = require('../../controllers/access.controller');
const { asyncHandler } = require('../../auth/checkAuth');
const { authentication } = require('../../auth/authUtils');
const router = express.Router();

//signup
router.post('/signup', asyncHandler(accessController.signUp))
router.post('/login', asyncHandler(accessController.login))


// authentication
router.use(authentication)
router.post('/logout', asyncHandler(accessController.logout))
router.post('/handlerRefreshToken', asyncHandler(accessController.handlerRefreshToken))
module.exports = router