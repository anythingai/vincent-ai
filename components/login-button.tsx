"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

function LoginButton() {
  return <Button onClick={() => signIn()}>Sign in</Button>;
}

export { LoginButton };
