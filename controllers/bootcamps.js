//@desc Get all bootcamps
//@route GET /api/v1/bootcamps
//@access pubilc
exports.getBootcamps =(req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamps' });
}

//@desc Get single bootcamp
//@route  GET/api/v1/bootcamps/:id
//@access pubilc
exports.getBootcamps =(req, res, next) => {
    res.status(200).json({ success: true, msg: `Show bootcamp ${req.params.id}` });
}


//@desc  single  create bootcamp
//@route POST/api/v1/bootcamps
//@access Private
exports.createBootcamps =(req, res, next) => {
    res.status(200).json({ success: true, msg: 'Create new bootcamp' });
}
    
    
//@desc update new bootcamp
//@route  put/api/v1/bootcamps/:id
//@access pubilc
exports.updateBootcamps =(req, res, next) => {
    res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
}
    
//@desc  delete bootcamp
//@route DELETE/api/v1/bootcamps/:id
//@access pubilc
exports.DeleteBootcamps =(req, res, next) => {
    res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
}
    