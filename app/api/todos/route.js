import connectMongoDB from '@/libs/mongodb';
import Todo from '@/models/todo';
import { NextResponse } from 'next/server';

export async function POST(request) {
  await connectMongoDB();
  const { title, description } = await request.json();

  const newTodo = await Todo.create({
    title: title || '',
    description: description || '',
  });

  return NextResponse.json(newTodo);
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page')) || 1;
  const limit = parseInt(searchParams.get('limit')) || 5;

  await connectMongoDB();

  const todos = await Todo.find()
    .sort({ createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(limit);

  const totalTodos = await Todo.countDocuments();
  const totalPages = Math.ceil(totalTodos / limit);

  return NextResponse.json({ todos, totalPages });
}

export async function DELETE(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  await connectMongoDB();
  await Todo.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Deleted' });
}
