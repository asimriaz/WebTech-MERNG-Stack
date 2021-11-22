const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    fullname: String,
    username: String,
    password: String
});

// fire a function after doc is saved to db
// userSchema.post('save', function(doc, next){
//     console.log('new user was created and saved', doc);
//     next()
// })

// fire a function after doc is saved to db
userSchema.pre('save', async function (next) {
    //console.log('user about to be created and saved', this);
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt);
    next()
})

userSchema.statics.login = async function (username, password) {
    const user = await this.findOne({ username });

    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            return user;
        }
        throw { message: 'Incorrect Password' }
    }
    throw { message: 'Incorrect User Name' }
}

const User = mongoose.model('user', userSchema);
module.exports = User
