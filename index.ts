import { ApolloServer } from 'apollo-server';

import resolvers from './src/resolvers';
import typeDefs from './src/schemas';
import './src/model'

import User from './src/User/model';

if (process.env.NODE_ENV !== 'production') {
    require('dotenv');
}

const server = new ApolloServer({ 
    resolvers, 
    typeDefs,
});

server.listen()
  .then(({ url }) => console.log(`Server ready at ${url}. `));

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.stop());
}
