import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';
import { User } from './schema/index';

const resolvers = {
    Quert: {
        user: async (_, { id, provider}) =>{
            return await User.findOne({id, provider});
        },
    },
    Mutation: {
        login: async (_, { id, name, provider }) => {
            const user = await User.findOne({ id, provider });
            if(!user) {
                const date = new Date();
                const new_user = new User({
                    id,
                    name,
                    provider,
                    createdAt: date.getTime() + (3600000*9) // KST
                });
                return new_user.save();
            }
            return user;
        }
    }
}

export default resolvers;