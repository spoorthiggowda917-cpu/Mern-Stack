import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>Header Here</header>
      <Outlet /> {/* Nested route content renders here */}
    </div>
  );
}

export default Layout;
