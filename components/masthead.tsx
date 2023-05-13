import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

function Masthead() {
  return (
    <nav className="sticky top-0 z-10">
      <div className="border-b bg-background">
        <div className="mx-auto max-w-7xl px-2">
          <div className="container flex h-16 items-center justify-between">
            <div className="justify-start"></div>
            <div className="justify-center"></div>
            <div className="justify-end space-x-2 flex items-center">
              <ModeToggle />
              <Button>Sign in</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Masthead };
