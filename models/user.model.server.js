const mongoose = require('mongoose')
const userSchema = require('./user.schema.server')
const userModel = mongoose.model('UserModel', userSchema)

users =[
    {'username': 'alice',
     'password': 'alice'}
]

findAllUsers = () => {
    return userModel.find();
    //return users;
}

findUserByCredentials = (username, password) => {
    /*
    for (var i=0; i<users.length; i++) {
        if (users[i].username === username)
            return users[i];
    }

    return null;
    */

    return userModel.findOne({username: username, password: password}); 
}


findUserById = userId => {
    return userModel.findById(userId)
    //return users;
}

findUserByIdExpanded = userId => {
    return users;
}
/*
userModel
    .findById(userId)
    .populate('sections')
    .exec()
*/

createUser = (user) => {
    //users.push(user);
    return userModel.create(user);
}

findUserByUsername = (username) =>
{
    return userModel.findOne({username: username});
}

deleteUser = (userId) => {
    return userModel.deleteOne({_id: userId}, (err) => {
        if (err) {
            console.log(err)
        }
    })
}

updateUser = (userId, user) =>{
    return userModel.findOneAndUpdate({_id: userId}, user, {new: true, useFindAndModify: false})
}

/*
updateProfile = () => {

}
*/

/*
removeProfile = (profile) =>{
    return users;
}
*/
//userModel.find(profile).remove().exec();

module.exports = {
    findUserByIdExpanded,
    findUserById,
    findAllUsers,
    findUserByCredentials,
    createUser,
    findUserByUsername,
    updateUser,
    //removeProfile
};
