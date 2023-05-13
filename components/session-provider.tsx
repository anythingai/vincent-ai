"use client";

import { SessionProvider } from "next-auth/react";
import * as React from "react";

function NextSessionProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export { NextSessionProvider };
