import { Outlet } from "react-router";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = () => {
  return (
    <div>
      <div>
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};
