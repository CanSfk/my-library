import { Outlet } from "react-router";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = () => {
  return (
    <div className="bg-bg w-full h-full">
      <div className="max-w-7xl mx-auto py-4 px-8 flex flex-col gap-8">
        <Header />

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};
