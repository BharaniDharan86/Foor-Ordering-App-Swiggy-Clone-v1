import { Outlet } from "react-router-dom";
import Header from "./features/navigation-bar/Header";

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default AppLayout;
