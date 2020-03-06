import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';
import { User } from './Schema/index';

const resolvers = {
    Query: {
        user: async (_, { id, provider }) => {
            return await User.findOne({ id, provider });
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
                    createdAt: date.getTime() + (3600000*9) // KSF,
                });
                return new_user.save();
            }
            return user;
        }
    }
}

export default resolvers;