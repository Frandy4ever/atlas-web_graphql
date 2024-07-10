const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: String,
  weight: Number,
  description: String,
  projectId: {
    type: Schema.Types.ObjectId,
    ref: 'Project'
  }
});

module.exports = mongoose.model('Task', taskSchema);
