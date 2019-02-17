import User from '../../models/User';
import {requireAuth} from '../../services/auth';

export default{
    signup: async (_, {fullname, ...rest}) => {
        const [firstName, ...lastName] = fullname.split(' '); // 'Luis Murillo' = ["Luis", "Alberto", "Murillo"]
        try {
            const user = await User.create({
                firstName,
                lastName,
                ...rest //email, avatar, password, username
            });
            return {
                token: user.createToken(),
            };
        }catch(error){
            throw error
        }
        
    },
    login: async (_, {email, password}) => {
        try {
            const user = await User.findOne({email});
            if (!user){
                throw new Error('User not exist!');
            }
            if(!user.authenticateUser(password)){
                throw new Error('PAssword not match!');
            }
            return {
                token: user.createToken(),
            };
        } catch (error) {
            throw error;    
        }
    },
    me: async (_, args, {user}) => {
        try {
            await requireAuth(user);
            return User.findById(user._id)
            
        } catch (error) {
            throw error;
        }
    },
    updateMe: async (_, {_id, ...rest}, {user}) => {
        try {
            console.log("USERR to update -->"+ user)
            await requireAuth(user);
            return User.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
}