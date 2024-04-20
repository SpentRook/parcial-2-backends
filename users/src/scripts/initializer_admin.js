const User = require('../models/user');

const initializeAdmin = async () => {
    const admin = await User.findOne({ role: 'admin' });
    if (!admin) {
        const user = new User({
            email: 'admin@localhost.com',
            password: 'admin123',
            name: 'admin',
            role: 'admin'
        });
        await user.save();
        console.log('Admin Created');
    }
}

module.exports = initializeAdmin;