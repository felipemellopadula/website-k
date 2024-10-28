import styles from "./styles.module.scss";
import { FaTimes } from "react-icons/fa";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMenuItemClick: (route: string) => void;
}

export const Menu = ({ isOpen, onClose, onMenuItemClick }: MenuProps) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
      <div className={styles.header}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
      </div>
      <div className={styles.content}>
        <ul>
          <li onClick={() => onMenuItemClick("/")}>Home</li>
          <li onClick={() => onMenuItemClick("/agencia")}>Agência</li>
          <li onClick={() => onMenuItemClick("/portfolio")}>Portfólio</li>
          <li onClick={() => onMenuItemClick("/contato")}>Contato</li>
        </ul>
      </div>
    </div>
  );
};
