const { 
  GraphQLObjectType,
  GraphWLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLString
} = require('graphql');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    task: {
      type: TaskType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return { id: args.id, title: 'Sample Task', weight: 1, description: 'This is a sample task.' };
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
