import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/LogoUnity3dB.png";
import styles from "./styles.module.scss";
import { Menu } from "../Menu";

interface LogoProps {
  onMenuToggle: () => void;
}

export const Logo: React.FC<LogoProps> = () => {
  const navigate = useNavigate();
  const [isMoved, setIsMoved] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Move o logo após 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMoved(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Função para abrir o menu
  const handleLogoClick = () => {
    console.log("Logo clicado, isMoved:", isMoved); // Verifique se a função é chamada
    setIsMenuOpen(true); // Abrir o menu
  };

  // Função para fechar o menu
  const handleCloseMenu = () => {
    console.log("Fechar menu");
    setIsMenuOpen(false);
  };

  // Função para navegar para uma rota e fechar o menu
  const handleMenuItemClick = (route: string) => {
    navigate(route);
    setIsMenuOpen(false); // Fechar o menu após clicar em um item
  };

  return (
    <>
      <div
        className={`${styles.logoContainer} ${isMoved ? styles.moved : ""}`}
        onClick={handleLogoClick}
      >
        <img
          src={logo}
          alt="Logo Unity"
          className={`animate__animated animate__fadeInUp ${styles.logo}`}
        />
      </div>
      <Menu
        isOpen={isMenuOpen}
        onClose={handleCloseMenu}
        onMenuItemClick={handleMenuItemClick}
      />
    </>
  );
};
