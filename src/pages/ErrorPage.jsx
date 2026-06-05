import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import Error404 from "@/components/ErrorPage/Error404";
import UnknownError from "@/components/ErrorPage/UnknownError";

export default function ErrorPage() {
  const error = useRouteError();

  console.log("ErrorPage caught error:", error);

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <Error404 />;
    }
  }

  return <UnknownError error={error} />;
}