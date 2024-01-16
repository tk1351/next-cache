import { Route } from "@/types/routes";

export const BASE_ROUTES = [
  { href: "/albums", label: "Albums" },
  { href: "/comments", label: "Comments" },
  { href: "/posts", label: "Posts" },
  { href: "/todos", label: "Todos" },
  { href: "/users", label: "Users" },
] as const satisfies Route[];
