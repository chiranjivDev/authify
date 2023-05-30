// @desc    User Login
// @route   GET /api/auth/
// @access  PUBLIC
export const login = (req, res, next) => {
    const {username, password}=req.body;
    if(!username || !password){
        return res.status(400).json({success:false, msg:'Please provide username and password!'})
    }

    res.status(200).json({success:true, msg:{username}})
};


// @desc    User Registration
// @route   POST /api/users/
// @access  PUBLIC
export const register = (req, res, next) => {
    const {name, username, password}=req.body;
    if(!name, !username || !password){
        return res.status(400).json({success:false, msg:'Please provide name, username and password!'})
    }

    res.status(201).json({success:true, msg:{name, username}})
};
