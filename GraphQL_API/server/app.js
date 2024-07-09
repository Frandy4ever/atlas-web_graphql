const express = require('express');
const { graphqlHTTP } = require('express-graphql');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 4000;

app.use('/graphql', graphqlHTTP({

}));
app.listen(4000, () => {
  console.log(`now listening for request on port ${port}`);
});
