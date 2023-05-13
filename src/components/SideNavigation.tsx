import prisma from "@/lib/prisma";
import { Logo } from "./Logo";
import Image from "next/image";
import boardImage from "@/assets/icon-board.svg";
import { SideNavigationLink } from "./SideNavigationLink";
import { ThemeToggle } from "./ThemeToggle";

export const SideNavigation = async () => {
  const boards = await prisma.board.findMany();
  return (
    <div className="h-full w-[18.75rem] bg-dark-grey border-r border-lines-dark flex flex-col">
      <nav>
        <div className=" px-[2.125rem] py-8">
          <Logo />
        </div>
        <div className="mt-4 ">
          <p className=" text-medium-grey tracking-[0.15rem] text-xs font-bold px-8 uppercase">
            All boards ({boards.length})
          </p>
          <ul className="mt-5 ">
            {boards.map((board: any) => {
              return (
                <li key={board.id}>
                  <SideNavigationLink href={board.id}>
                    <Image
                      className="object-cover w-4 h-4"
                      src={boardImage}
                      alt=""
                      width={16}
                      height={16}
                      aria-hidden
                    />
                    {board.title}
                  </SideNavigationLink>
                </li>
              );
            })}
            <button className="flex items-center px-8 py-4 mr-6 font-bold transition-all rounded-r-full text-md gap-x-4 text-main-purple">
              <Image
                className="object-cover w-4 h-4"
                src={boardImage}
                alt=""
                width={16}
                height={16}
                aria-hidden
              />{" "}
              + Create New Board
            </button>
          </ul>
        </div>
      </nav>
      <div className="px-6 mt-auto">
        <ThemeToggle />
      </div>
    </div>
  );
};
