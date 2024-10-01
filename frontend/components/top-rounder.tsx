import { cn } from "@/lib/utils";

export function TopRounder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative lg:hidden bg-background rounded-t-3xl mt-[-27px] -mx-5 col-span-12 h-[33px] w-auto row-span-1",
        className
      )}
    ></div>
  );
}
