import connectMongoDB from '@/libs/mongodb';
import Todo from '@/models/todo';
import { NextResponse } from 'next/server';

export async function PUT(req, context) {
  const { id } = await context.params;

  await connectMongoDB();
  const { title, description } = await req.json();

  const existingTodo = await Todo.findById(id);
  if (!existingTodo) {
    return NextResponse.json({ error: 'Todo not found' }, { status: 404 });
  }

  if (title !== undefined) existingTodo.title = title;
  if (description !== undefined) existingTodo.description = description;

  await existingTodo.save();
  return NextResponse.json(existingTodo);
}
