import React from "react";
import { NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Feed from "../../Assets/feed.svg";
import  Estatisticas  from "../../Assets/estatisticas.svg";
import Adicionar from "../../Assets/adicionar.svg";
import Sair  from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/conta" end>
        <img src={Feed} alt="Feed" />
          {mobile && "Minhas fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
        <img src={Estatisticas} alt="Estatisticas" />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
        <img src={Adicionar} alt="Adicionar" />
          {mobile && "Adicionar foto"}
        </NavLink>
        <button onClick={handleLogout}>
        <img src={Sair} alt="Sair" />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
