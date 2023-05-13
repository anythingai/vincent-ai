import { ModeToggle } from "@/components/mode-toggle";
import { LoginButton } from "@/components/login-button";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { NavAvatarDropdown } from "@/components/nav-avatar-dropdown";

async function Masthead() {
  const session = await getServerSession(authOptions);

  return (
    <nav className="sticky top-0 z-10">
      <div className="border-b bg-background">
        <div className="mx-auto max-w-full px-2">
          <div className="container flex h-16 items-center justify-between">
            <div className="justify-start">
              <p className="font-semibold">vincent.ai</p>
            </div>
            <div className="justify-center"></div>
            <div className="justify-end space-x-2 flex items-center">
              <ModeToggle />
              {session ? (
                <NavAvatarDropdown
                  image={session.user?.image ?? ""}
                  name={session.user?.name ?? ""}
                />
              ) : (
                <LoginButton />
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Masthead };
