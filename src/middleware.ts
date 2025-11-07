import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

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
