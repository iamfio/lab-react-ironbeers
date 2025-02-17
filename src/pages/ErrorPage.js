import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <h1>Oooops!</h1>
      <p>Sorry, but this page does not exist 😒</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
