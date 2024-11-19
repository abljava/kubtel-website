import { Button } from "../ui/button";

interface CounterButtonsProps {
  isDisabled?: boolean;
  handleChange: (update: 1 | -1) => void;
  counter: number;
}

export function CounterButtons({
  isDisabled,
  handleChange,
  counter,
}: CounterButtonsProps) {
  return (
    <div className="flex justify-between items-center w-24 h-12 px-1 border rounded-lg">
      <Button
        className="w-7 h-7 p-0"
        variant="outline"
        aria-label="minus"
        disabled={isDisabled}
        onClick={() => handleChange(-1)}
      >
        -
      </Button>
      <p>{counter}</p>
      <Button
        className="w-7 h-7 p-0"
        variant="outline"
        disabled={isDisabled}
        onClick={() => handleChange(1)}
      >
        +
      </Button>
    </div>
  );
}
