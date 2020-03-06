// User type : 유저 관련 데이터
// user Query : id 와 provider를 넣으면 유저를 변환
// login Mutation : id, name, provider를 넣으면 유저를 변환
const typeDefs = `
    type User {
        id: String!
        name: String!
        provider: String!
    },
    type Query {
        user(id: String, provider: String) : user
    },
    type Mutation { 
        login(id: String!, name: String!, provider: String!) : User
    }`

export default typeDefs;