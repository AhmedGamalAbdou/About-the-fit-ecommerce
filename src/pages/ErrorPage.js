import { useRouteError, useNavigate } from "react-router-dom";
import React from "react";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();
  return (
    <div id="error-page" className="text-center text-2xl">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <button
        className="text-sm"
        onClick={() => navigate("/", { replace: true })}
      >
        back to home
      </button>
    </div>
  );
}
