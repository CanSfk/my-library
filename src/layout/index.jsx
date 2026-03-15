import { Outlet } from "react-router";
import { Header } from "./header";
import { Footer } from "./footer";
import Modals from "../modals/modal";

export const Layout = () => {
  return (
    <>
      <Modals />

      <div className="bg-bg w-full h-full flex-1">
        <div className="max-w-7xl mx-auto py-4 px-8 flex flex-col gap-8">
          <Header />

          <main className="flex-1">
            <Outlet />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
};
