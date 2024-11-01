"use server";
import { CreateBoard } from './schema';
import { create } from 'zustand';

import { auth } from "@clerk/nextjs/server";
import { InputType, ReturnType } from "./types";
import { db } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { createSafeAction } from '@/lib/create-safe-action';
import { error } from 'console';

const handler = async(data: InputType): Promise<ReturnType>=>{
  const { userId } = auth();

  if(!userId){
    return {
      error: "Unauthorized",
    }
  }

  const { title } = data;

  let board;

  try{
    board = await db.board.create({
      data: {
        title,
      }
    })
  }catch{
    return {
      error: "Failed to create"
    }
  }

  revalidatePath(`/board/${board.id}`);
  return { data: board };
};

export const createBoard = createSafeAction(CreateBoard, handler);