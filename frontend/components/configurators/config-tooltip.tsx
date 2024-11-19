import { HoverCardContent } from "@radix-ui/react-hover-card";
import { Button } from "../ui/button";
import { HoverCardTrigger } from "../ui/hover-card";

interface ConfigTooltipPrpos {
  title: string;
  content: React.ReactNode;
}

export function ConfigTooltip({ title, content }: ConfigTooltipPrpos) {
  return (
    <>
      <HoverCardTrigger asChild>
        <Button
          className="text-base text-primary-magenta p-0 h-auto rounded-none underline decoration-dotted hover:decoration-solid"
          variant="link"
        >
          {title}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent
        className="max-w-80 sm:max-w-[500px] lg:max-w-auto relative z-50 bg-white p-5 border rounded-lg shadow-basic"
        align="start"
      >
        {content}
      </HoverCardContent>
    </>
  );
}
