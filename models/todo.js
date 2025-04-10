// models/Todo.js
import mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

// This prevents model recompilation issues in development.
export default mongoose.models.Todo || mongoose.model('Todo', TodoSchema);
