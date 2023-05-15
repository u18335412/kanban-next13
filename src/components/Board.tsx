"use client";

import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Column } from "./Column";

// const reorderList = (
//   list: string[],
//   startIndex: number,
//   endIndex: number
// ): string[] => {
//   const result = Array.from(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed || "");

//   return result;
// };

export const Board = ({ columns }: { columns: any }) => {
  const onDragEnd = (result: any) => {
    if (!result.destination) return;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="all-droppables"
        direction="horizontal"
        type="column"
      >
        {(provided) => (
          <ol
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex overflow-hidden overflow-x-scroll scroll-smooth gap-y-10 max-h-[calc(100vh-5.875rem)] gap-x-6 h-[calc(100vh-5.875rem)] p-6"
          >
            {columns.map((column: any, index: number) => {
              return (
                <Column
                  id={column.id}
                  index={index}
                  key={column.id}
                  title={column.title}
                  task={column.task}
                />
              );
            })}
            {provided.placeholder}
          </ol>
        )}
      </Droppable>
    </DragDropContext>
  );
};
