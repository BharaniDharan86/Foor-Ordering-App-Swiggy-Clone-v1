import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div>
      <p> {err.status} Not Found</p>
      <span>{err.data}</span>
    </div>
  );
};

export default ErrorPage;
