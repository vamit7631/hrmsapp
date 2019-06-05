const express = require('express')
const router = express.Router();

const userregistration = require('../controllers/registercontroller')
const loginusers = require('../controllers/logincontroller')

/**
 * @swagger
 * definition:
 *   Register:
 *     properties:
 *       firstname:
 *         type: string
 *       lastname:
 *         type: string
 *       mobileNo:
 *         type: string
 *       emailId:
 *         type: string
 *       username:
 *         type: string
 *       password:
 *         type: string
 *       dob:
 *         type: string
 *       gender:
 *         type: string
 *       address:
 *         type: string
 *       city:
 *         type: string
 *       state:
 *         type: string
 *       pincode: 
 *         type: string
 *       country:
 *         type: string
 */



/**
 * @swagger
 * /registration/register:
 *   post:
 *     tags:
 *       - Register
 *     description: Creates Registration
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Register
 *         description: Register object
 *         in: body
 *         required: true
 *         schema:
 *           type: object
 *           $ref: '#/definitions/Register'
 *     responses:
 *       200:
 *         description: Successfully created
 */


router.post('/registration/register/', userregistration.registerDetails);



/**
 * @swagger
 * /registration/getalldetails:
 *   get:
 *     tags:
 *       - Register
 *     description: GetDetails Registration
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: List of Registration Details
 *         schema:
 *           $ref: '#/definitions/Register'
 * 
 */
 
router.get('/registration/getalldetails/',userregistration.getAllDetails); 


/**
 * @swagger
 * /loginusers/details:
 *   get:
 *     tags:
 *       - LognUsers
 *     description: Login GetDetails 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userAuth
 *         description: email and username Details
 *         in: query
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: List of Registration Details
 *         schema:
 *           $ref: '#/definitions/LoginUsers'
 * 
 */

router.get('/loginusers/details/',loginusers.loginDetails);

module.exports = router;