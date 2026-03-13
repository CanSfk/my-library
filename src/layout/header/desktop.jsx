import { DesktopNavLink } from "../../components/layout/desktop-nav-link";
import { navMenu } from "../../data";

export const Desktop = () => {
  return (
    <nav className="bg-bg-surface px-6 py-2 rounded-xl">
      <ul className="flex gap-8">
        {navMenu.map((mn, i) => {
          return (
            <li key={i}>
              <DesktopNavLink name={mn.name} to={mn.path} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
