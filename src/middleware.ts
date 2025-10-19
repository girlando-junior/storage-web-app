// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

import { redirect } from "next/dist/server/api-utils";
import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get('auth_token')?.value
//   const isPrivate = request.nextUrl.pathname.startsWith('/(private)')

//   if (isPrivate && !token) {
//   return NextResponse.redirect(new URL('/login', request.url))
// }

//   return NextResponse.next()
// }

// export const config = {
//   matcher: ['/((private).*)'],
// }

const publicRoutes = [
  {
    path: "/login",
    whenAutenticated: "redirect",
  },
  {
    path: "/cadastro",
    whenAutenticated: "redirect",
  },
] as const;

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/login";

export default function MiddlewareNotFoundError(request: NextRequest) {
  console.log("funcionou");

  const path = request.nextUrl.pathname;
  const publicRoute = publicRoutes.find((route) => route.path === path);
  const authToken = request.cookies.get("token");

  if (!authToken && publicRoute) {
    return NextResponse.next();
  }

  if (!authToken && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();

    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;

    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && publicRoute && publicRoute.whenAutenticated === "redirect") {
    const redirectUrl = request.nextUrl.clone();

    redirectUrl.pathname = "/";

    return NextResponse.redirect(redirectUrl);
  }

  if (authToken && !publicRoute) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
