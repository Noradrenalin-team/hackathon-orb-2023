import "./Header.scss";
import { Link, Button, Icon, Text, Persona, Modal } from "@gravity-ui/uikit";
import { NavLink, Link as LinkRouter, useNavigate } from "react-router-dom";
import { PencilToLine } from "@gravity-ui/icons";
import { Context } from "app/contexts";
import { useContext, Fragment, useState, useEffect } from "react";
import { isSecondLevelDomain } from "shared/utils";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [orgs, setOrgs] = useState([]);
  const { user } = useContext(Context);

  const handlePersonaClick = () => {
    setIsOpen(true)
  };

  useEffect(() => {
    if (user.isLogin) {
      fetch('organizations/get/id').then((res) => {
        if (res.status === 200) {
          return res.json()
        }
      }).then((res) => {
        if (res.success) {
          console.log(res)
          setOrgs(res.organizations)
        }
      })
    }
  }, [])

  useEffect(() => {
    if (user.isLogin) {
      fetch('api/organizations/get').then((res) => {
        if (res.status === 200) {
          return res.json()
        }
      }).then((res) => {
        if (res.success) {
          setOrgs(res.organizations)
          console.log(res.organizations)
        }
      })
    }
  }, [])

  const headerContent = (
    <Fragment>
      <LinkRouter to={"/"}>
        <div className="logo">
          <img src="/images/logo.svg" alt="logo" />
          <Text variant="header-1">ПрофТестиум</Text>
        </div>
      </LinkRouter>

      {isSecondLevelDomain(location.href) ? (
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
        ) : (null)}
      
        <nav>
        {user && user.isLogin ? (
          <Fragment>
            <Persona
              image={user.avatar}
              text={`${user.first_name} ${user.last_name}`}
              onClick={handlePersonaClick}
              className="persona"
            />
            <Modal className="modal" open={isOpen} onClose={() => setIsOpen(false)}
            contentClassName="modalContent"
            >
              {orgs && orgs.map((org) => {
                return (
                  <Button key={org.id}
                  onClick={() => {
                    setIsOpen(false)
                    let href = 'http://' + (org.domain || location.href) + (org.domain ? ':' + location.port : '')
                    document.location.assign(href)
                  }}
                  >{org.name}</Button>
                )
              })}
              <Button
          size="l"
          className="header-button-link"
          onClick={() => {
            setIsOpen(false)
            navigate("/create");
          }}
        >
          <Icon data={PencilToLine} />
          Зарегистрировать новую школу
        </Button>
        <Button
         onClick={() => {
          navigate('/exit')
         }}
        >Выйти</Button>
            </Modal>
          </Fragment>
        ) : (
          <>
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
          </>
        )}
      </nav>
    </Fragment>
  );

  return <header>{headerContent}</header>;
};

export default Header;
