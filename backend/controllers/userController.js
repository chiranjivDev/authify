

// @desc    Get All Users
// @route   GET /api/users/
// @access  PUBLIC
export const getUsers = (req, res, next) => {
    res.json({msg:'success', users:'Get all users'})
};

// @desc    Create User
// @route   POST /api/users/
// @access  PRIVATE
export const getUser = (req, res, next) => {
    res.json({msg:'success', users:'Get single user'})
};

// @desc    Create User
// @route   POST /api/users/
// @access  PRIVATE
export const createUser = (req, res, next) => {
    res.json({msg:'success', users:'Add a user'})
};

// @desc    Create User
// @route   POST /api/users/
// @access  PRIVATE
export const updateUser = (req, res, next) => {
    res.json({msg:'success', users:'Update user'})
};


// @desc    Create User
// @route   POST /api/users/
// @access  PRIVATE
export const deleteUser = (req, res, next) => {
    res.json({msg:'success', users:'Delete user'})
};

