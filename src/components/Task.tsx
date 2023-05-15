"use client";

import { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import { areEqual } from "react-window";

export const Task = ({
  id,
  index,
  title,
  totalSubtasks,
  completedSubtasks,
}: {
  index: number;
  id: string;
  title: string;
  totalSubtasks: number;
  completedSubtasks: number;
}) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="px-4 py-6 text-white [box-shadow:_0px_4px_6px_0px_#364E7E1A] rounded-lg bg-dark-grey">
            <p className="font-bold text-white text-md">{title}</p>
            <span className="text-xs font-bold text-medium-grey">
              {totalSubtasks} of {completedSubtasks} subtasks
            </span>
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default memo(Task, areEqual);
