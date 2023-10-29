import "./Header.scss";
import { Link, Button, Icon, Text, Persona } from "@gravity-ui/uikit";
import { NavLink, Link as LinkRouter, useNavigate } from "react-router-dom";
import { PencilToLine } from "@gravity-ui/icons";
import { isSecondLevelDomain } from "shared/utils";
import { Context } from "app/contexts";
import { useContext, Fragment } from "react";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useContext(Context);

  // const headerContent =
  //   isSecondLevelDomain(location.href) && user.isLogin === 'false' ? (
  //     <>
  //       <LinkRouter to={"/"}>
  //         <div className="logo">
  //           <img src="/images/logo.svg" alt="logo" />
  //           <Text variant="header-1">ПрофТестиум</Text>
  //         </div>
  //       </LinkRouter>
  //       <nav>
  //         <Link>
  //           <NavLink to={"/"}>Возможности</NavLink>
  //         </Link>
  //         <Link>
  //           <NavLink to={"/pricing"}>Тарифы</NavLink>
  //         </Link>
  //         <Link>
  //           <NavLink to={"/integration"}>Внедрение</NavLink>
  //         </Link>
  //         <Link>
  //           <NavLink to={"/reviews"}>Отзывы</NavLink>
  //         </Link>
  //         <Link>
  //           <NavLink to={"/support"}>Поддержка</NavLink>
  //         </Link>
  //       </nav>
  //       <nav>
  //         <Button
  //           size="l"
  //           className="header-button-link"
  //           onClick={() => {
  //             navigate("/create");
  //           }}
  //         >
  //           <Icon data={PencilToLine} />
  //           Зарегистрировать новую школу
  //         </Button>
  //         <Button
  //           size="l"
  //           className="header-button-link"
  //           onClick={() => {
  //             navigate("/login");
  //           }}
  //         >
  //           Войти
  //         </Button>
  //       </nav>
  //     </>
  //   ) : user.isLogin === 'true' ? (
  //     <Fragment>
  //       <LinkRouter to={"/"}>
  //         <div className="logo">
  //           <img src="/images/logo.svg" alt="logo" />
  //           <Text variant="header-1">ПрофТестиум</Text>
  //         </div>
  //       </LinkRouter>
  //       <nav>
  //         <Button
  //           size="l"
  //           className="header-button-link"
  //           onClick={() => {
  //             navigate("/create");
  //           }}
  //         >
  //           <Icon data={PencilToLine} />
  //           Зарегистрировать новую школу
  //         </Button>
  //         <Persona text={user.name} image="/images/logo.svg" />
  //       </nav>
  //     </Fragment>
  //   ) : (
  //     <Fragment>
  //       <LinkRouter to={"/"}>
  //         <div className="logo">
  //           <img src="/images/logo.svg" alt="logo" />
  //           <Text variant="header-1">ПрофТестиум</Text>
  //         </div>
  //       </LinkRouter>
  //       <nav>
  //         <Button
  //           size="l"
  //           className="header-button-link"
  //           onClick={() => {
  //             navigate("/create");
  //           }}
  //         >
  //           <Icon data={PencilToLine} />
  //           Зарегистрировать новую школу
  //         </Button>
  //         <Button
  //           size="l"
  //           className="header-button-link"
  //           onClick={() => {
  //             navigate("/login");
  //           }}
  //         >
  //           Войти
  //         </Button>
  //       </nav>
  //     </Fragment>
  //   );

  const secondLevelDomain = user.isLogin === 'false' ? (
    <>
      <LinkRouter to={"/"}>
        <div className="logo">
          <img src="/images/logo.svg" alt="logo" />
          <Text variant="header-1">ПрофТестиум</Text>
        </div>
      </LinkRouter>
      <nav>
        <Link>
          <NavLink to={"/"}>Возможности</NavLink>
        </Link>
        <Link>
          <NavLink to={"/pricing"}>Тарифы</NavLink>
        </Link>
        <Link>
          <NavLink to={"/integration"}>Внедрение</NavLink>
        </Link>
        <Link>
          <NavLink to={"/reviews"}>Отзывы</NavLink>
        </Link>
        <Link>
          <NavLink to={"/support"}>Поддержка</NavLink>
        </Link>
      </nav>
      <nav>
        <Button
          size="l"
          className="header-button-link"
          onClick={() => {
            navigate("/create");
          }}
        >
          <Icon data={PencilToLine} />
          Зарегистрировать новую школу
        </Button>
        <Button
          size="l"
          className="header-button-link"
          onClick={() => {
            navigate("/login");
          }}
        >
          Войти
        </Button>
      </nav>
    </>
  ) : (
    <Fragment>
      <LinkRouter to={"/"}>
        <div className="logo">
          <img src="/images/logo.svg" alt="logo" />
          <Text variant="header-1">ПрофТестиум</Text>
        </div>
      </LinkRouter>
      <nav>
        <Button
          size="l"
          className="header-button-link"
          onClick={() => {
            navigate("/create");
          }}
        >
          <Icon data={PencilToLine} />
          Зарегистрировать новую школу
        </Button>
        <Persona text={user.name} image={user.avatar} />
      </nav>
    </Fragment>
  )

  const thierdLevelDomain = user.isLogin === 'false' ? (
    <>
      <LinkRouter to={"/"}>
        <div className="logo">
          <img src="/images/logo.svg" alt="logo" />
          <Text variant="header-1">ПрофТестиум</Text>
        </div>
      </LinkRouter>
      <nav>
        <Button
          size="l"
          className="header-button-link"
          onClick={() => {
            navigate("/create");
          }}
        >
          <Icon data={PencilToLine} />
          Зарегистрировать новую школу
        </Button>
        <Button
          size="l"
          className="header-button-link"
          onClick={() => {
            navigate("/login");
          }}
        >
          Войти
        </Button>
      </nav>
    </>
  ) : (
    <Fragment>
      <LinkRouter to={"/"}>
        <div className="logo">
          <img src="/images/logo.svg" alt="logo" />
          <Text variant="header-1">ПрофТестиум</Text>
        </div>
      </LinkRouter>
      <nav>
        <Button
          size="l"
          className="header-button-link"
          onClick={() => {
            navigate("/create");
          }}
        >
          <Icon data={PencilToLine} />
          Зарегистрировать новую школу
        </Button>
        <Persona text={user.name} image={user.avatar} />
      </nav>
    </Fragment>
  )
  

  if (isSecondLevelDomain(location.href)) {
    return <header className="header">{secondLevelDomain}</header>;
  } else {
    return <header className="header">{thierdLevelDomain}</header>;
  }
};

export default Header;
