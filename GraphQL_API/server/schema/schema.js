const { 
  GraphQLObjectType,
  GraphWLString,
  GraphQLInt
} = require('graphql');

const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: {
    id: { Type: GraphQLString },
    title: { Type: GraphQLString },
    weight: { Type: GraphQLInt },
    description: { Type: GraphWLString }
  }
});

module.exports = TaskType;
