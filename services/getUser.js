const Users = require('../model/user');


module.exports = class User {
    
    UserGetAll = async () => {
            try {
        const UserGetAll = await Users.findAll()

        return UserGetAll   
    
        
    } catch (error) {
        console.log(error);
        res.json({ error: true, users: null });
        
    }
}
     
UserGet = async (id) => {
        try {
        
            const UserGetID = await Users.findByPk(id)
    
            return UserGetID  
        
            
        } catch (error) {
            console.log(error);
            res.json({ error: true, users: null });
            
        }
    }
    }

