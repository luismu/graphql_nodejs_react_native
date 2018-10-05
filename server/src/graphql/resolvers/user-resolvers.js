import User from '../../models/User';

export default{
    signup: (_, {fullname, ...rest}) => {
        const [firstName, ...lastName] = fullname.split(' '); // 'Luis Murillo' = ["Luis", "Alberto", "Murillo"]
        return User.create({
            firstName,
            lastName,
            ...rest //email, avatar, password, username
        })
    }
}