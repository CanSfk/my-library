import { useMedia } from "../../hooks";
import { Desktop } from "./desktop";
import { Mobile } from "./mobile";

export const Header = () => {
  const use_media_768 = useMedia(768);

  return <header>{use_media_768 ? <Mobile /> : <Desktop />}</header>;
};
