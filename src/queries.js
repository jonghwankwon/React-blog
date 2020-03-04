import qql from 'graphql-tag';

//sign up
export const login = qql`
    mutation login($id: String!, $name: String!, $provider: String!){
        login(id: $id, name: $name, provider: $provider) {
            id,
            name,
            provider,
        }
    }
    `;