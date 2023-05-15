"use client";

import { Task as TType } from "@prisma/client";
import { Task } from "./Task";
import { Draggable, Droppable } from "react-beautiful-dnd";

export const Column = ({
  title,
  task,
  id,
  index,
}: {
  id: string;
  title: string;
  task: TType[];
  index: number;
}) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <li>
          <div className="min-w-[17.5rem] w-[17.5rem] overflow-y-scroll">
            <h3
              className="sticky top-0 text-xs font-bold uppercase text-medium-grey"
              {...provided.draggableProps}
              ref={provided.innerRef}
            >
              {title}
            </h3>
            <div>
              <Droppable droppableId={id}>
                {(provided) => (
                  <ol
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="flex flex-col mt-6 gap-y-5"
                  >
                    {task.map((task: any, index: number) => {
                      return (
                        <Task
                          key={task.id}
                          totalSubtasks={task.Sub_Task.length}
                          completedSubtasks={
                            task.Sub_Task.filter((sub: any) => sub.complete)
                              .length
                          }
                          title={task.title}
                          index={index}
                          id={task.id}
                        />
                      );
                    })}
                    {provided.placeholder}
                  </ol>
                )}
              </Droppable>
            </div>
          </div>
        </li>
      )}
    </Draggable>
  );
};
