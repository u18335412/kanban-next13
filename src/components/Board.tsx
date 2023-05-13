"use client";

export const Board = ({ columns }: { columns: any }) => {
  return (
    <ol className="flex overflow-hidden overflow-x-scroll scroll-smooth gap-y-10 max-h-[calc(100vh-5.875rem)] gap-x-6 h-[calc(100vh-5.875rem)] p-6">
      {columns.map((column: any) => {
        return (
          <li
            key={column.id}
            className="min-w-[17.5rem] w-[17.5rem] overflow-y-scroll"
          >
            <h3 className="sticky top-0 text-xs font-bold uppercase text-medium-grey">
              {column.title}
            </h3>
            <div>
              <ol className="flex flex-col mt-6 gap-y-5">
                {column.task.map((task: any) => {
                  return (
                    <li
                      key={task.id}
                      className="px-4 py-6 text-white [box-shadow:_0px_4px_6px_0px_#364E7E1A] rounded-lg bg-dark-grey"
                    >
                      <p className="font-bold text-white text-md">
                        {task.title}
                      </p>
                      <span className="text-xs font-bold text-medium-grey">
                        {
                          task.Sub_Task.filter((sub: any) => sub.complete)
                            .length
                        }{" "}
                        of {task.Sub_Task.length} subtasks
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
          </li>
        );
      })}
    </ol>
  );
};
