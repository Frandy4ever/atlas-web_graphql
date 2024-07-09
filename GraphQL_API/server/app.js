const express = require('express');
const { graphqlHTTP } = require('express-graphql');
require('dotenv').config();
const schema = require('./schema/schema');

const app = express();
const port = process.env.PORT || 4000;

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development'
}));

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}/graphql`);
});
