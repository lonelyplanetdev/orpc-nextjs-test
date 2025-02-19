import { NextRequest } from "next/server";

export type ORPCContext = {
  auth: { user: { id: string }; session: { id: string } } | null;
  headers: Request["headers"];
  cookies: NextRequest["cookies"];
};
