const express = require('express');
const {
    getBootcamps,
   
    createBootcamps,
    updateBootcamps,
    DeleteBootcamps
} = require('../controllers/bootcamps');
const router = express.Router();

router
.route('/') 
.get(getBootcamps)
.post(createBootcamps);

router.route('/:id')
.get(getBootcamps)
.put(updateBootcamps)
.delete(DeleteBootcamps);

module.exports = router;
