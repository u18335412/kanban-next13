import prisma from "@/lib/prisma";
import { Board } from "@/components/Board";
import { Button } from "@/components/Button";

export default async function Page({ params }: { params: { slug: string } }) {
  const board = await prisma.board.findUnique({
    where: {
      id: params.slug,
    },
    include: {
      Column: {
        include: {
          task: {
            include: {
              Sub_Task: true,
            }
          }
        },
      },
    },
  });

  return (
    <div className="h-full w-full max-w-[calc(100vw-300px)]">
      <div className="flex items-center w-full px-6 py-5 border-b border-l border-lines-dark bg-dark-grey">
        <h2 className="text-xl font-bold text-white">{board.title}</h2>
        <div className="ml-auto ">
          <Button className="px-6">+ Add New Task</Button>
        </div>
      </div>
      <div className="w-full bg-very-dark-grey">
        <Board columns={board.Column} />
      </div>
    </div>
  );
}
