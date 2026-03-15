// Partials
import { Hero } from "./hero";
import { List } from "./list";

export const Home = () => {
  return (
    <div className="flex flex-col gap-12">
      <Hero />

      <List />
    </div>
  );
};
