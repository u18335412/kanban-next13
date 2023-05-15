import { cache } from 'react';
import prisma from "@/lib/prisma";

export const getAllBoards = cache(async () => {
    const boards = await prisma.board.findMany();
    return boards;
});