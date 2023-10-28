import "./Page404.scss";
import { Link } from "react-router-dom";
import { Text } from "@gravity-ui/uikit";

const Page404 = () => {
  return (
    <main className="page404">
      <Text variant="header-2">404 | Not Found</Text>
      <span>
        <Text variant="subheader-3">
          На {" "}
          <Link to={"/"} className="home-link-404">главную</Link>
        </Text>
      </span>
    </main>
  );
};

export default Page404;
