import { ReactNode } from "react";
import clsx from "clsx";

export const Button = ({
  children,
  props,
  className,
}: {
  children?: ReactNode;
  className?: string;
  props?: any;
}) => {
  return (
    <button
      {...props}
      className={clsx(
        "px-[1.125rem] py-[0.9375rem] text-md font-bold rounded-full text-white bg-main-purple",
        className
      )}
    >
      {children}
    </button>
  );
};
