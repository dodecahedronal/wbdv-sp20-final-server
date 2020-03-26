
//const userModel = mongoose.model('UserModel', userSchema);

users =[
    {'username': 'alice',
     'password': 'alice'}
]

findAllUsers = () => {
    return users;
}
//userModel.find();

findUserByCredentials = (username, password) => {
    for (var i=0; i<users.length; i++) {
        if (users[i].username === username)
            return users[i];
    }

    return null;
}
//userModel.findOne({username: username, password: password});

findUserById = userId => {
    return users;
}
//userModel.findById(userId)

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
    users.push(user);
}
//userModel.create(user);


findUserByUsername = (username) =>
{
    return users;
}
//userModel.findOne({username: username});

updateUser = (user, userId) =>{
    return users
}
/*
    userModel.update({
        _id: userId
    }, {
        $set: user
    });
*/

removeProfile = (profile) =>{
    return users;
}
//userModel.find(profile).remove().exec();

module.exports = {
    findUserByIdExpanded,
    findUserById,
    findAllUsers,
    findUserByCredentials,
    createUser,
    findUserByUsername,
    updateUser,
    removeProfile
};
