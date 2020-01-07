const express = require('express')
const router = express.Router();

const userregistration = require('../controllers/registercontroller')

/**
 * @swagger
 * definition:
 *   Register:
 *     properties:
 *       firstname:
 *         type: string
 *         example: Amit
 *       lastname:
 *         type: string
 *         example: Verma
 *       mobileNo:
 *         type: string
 *         example: 9893273970
 *       emailId:
 *         type: string
 *         example: vamit7631@gmail.com
 *       username:
 *         type: string
 *         example: vamit7631
 *       password:
 *         type: string
 *         example: abc123
 *       dob:
 *         type: string
 *         example: 19-June-1990
 *       gender:
 *         type: string
 *         example: male
 *       address:
 *         type: string
 *         example: test address
 *       city:
 *         type: string
 *         example: bhopal
 *       state:
 *         type: string
 *         example: Madhya Pradesh
 *       pincode: 
 *         type: string
 *         example: 462023
 *       country:
 *         type: string
 *         example: India
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
 * /loginusers/details/{userAuth}/{password}:
 *   get:
 *     tags:
 *       - LognUsers
 *     description: Login GetDetails 
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userAuth
 *         description: email and username Details
 *         in: path
 *         required: true
 *         type: string
 *       - name: password
 *         description: password Details
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: List of Registration Details
 * 
 */



router.get('/loginusers/details/:userAuth/:password',userregistration.loginDetails);

module.exports = router;