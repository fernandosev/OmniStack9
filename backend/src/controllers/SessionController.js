const User = require('./../models/User');

module.exports = {
    async store(require, response) {
        const { email } = require.body;

        let user = await User.findOne({ email });

        if(!user)
            user = await User.create({email});
        
        return response.json(user);
    }
}