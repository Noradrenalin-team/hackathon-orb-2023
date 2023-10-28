import "./Header.scss";
import { Link, Button, Icon, Text } from "@gravity-ui/uikit";
import { NavLink, Link as LinkRouter, useNavigate } from "react-router-dom";
import { PencilToLine } from "@gravity-ui/icons";

const Header = () => {
  const navigate = useNavigate()

  return (
    <header>
      <LinkRouter to={'/'}>
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
        <Button size="l" className="header-button-link" onClick={() => {
          navigate('/create')
        }}>
          <Icon data={PencilToLine} />
          Зарегистрировать новую школу
        </Button>
        <Button size="l" className="header-button-link" onClick={() => {
          navigate('/login')
        }}>Войти</Button>
      </nav>
    </header>
  );
};

export default Header;
