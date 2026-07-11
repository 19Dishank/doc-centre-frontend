import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Error404 from "@/components/ErrorPage/Error404";
import UnknownError from "@/components/ErrorPage/UnknownError";
import useSEO from "@/hooks/useSEO";

export default function ErrorPage() {
  const error = useRouteError();

  const is404 = isRouteErrorResponse(error) && error.status === 404;

  useSEO({
    title: is404 ? "Page Not Found" : "Application Error",
    description: "An error occurred while loading this page on DocCenter.",
  });

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <Error404 />;
    }
  }

  return <UnknownError error={error} />;
}