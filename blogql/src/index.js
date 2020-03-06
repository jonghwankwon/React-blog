import { GraphQLServer } from 'graphql-yoga';
import resolvers from './resolver';
import typeDefs from './typeDefs';
import mongoose from 'mongoose';
require('dotenv').config();

const { MONGODB_ID, MONGGODB_PW } = process.env;

// 
mongoose.connect(`mongodb://${MONGODB_ID}: ${MONGGODB_PW}@ds052827.mlab.com:52827/react-blog_db`, {useNewUrlParser:true});
mongoose.connection.once('open', () => {
  console.log('MongoDB Connected...');
});

// Graphql-yoga를 이용하여 graphql server를 생성하고 연결

//GraphQL Server connect
const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log(`Server is running at http://localhost:4000`));

