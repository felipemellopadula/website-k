import { useState, useRef, useEffect } from "react";
import videoBg from "../../assets/Comercial_ Site_ institucional_trilha_E.mp4";
import styles from "./styles.module.scss";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export const Main: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false); // Começa com som habilitado
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.muted = isMuted;
      const playVideo = () => {
        video.play().catch((error) => {
          // Aqui está o erro
          console.log("Autoplay falhou:", error);
        });
      };

      // Tenta reproduzir o vídeo automaticamente com som
      playVideo();

      // Adiciona um evento de interação do usuário para garantir que o som seja habilitado
      window.addEventListener("click", playVideo);

      return () => {
        window.removeEventListener("click", playVideo);
      };
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className={styles.main} onClick={toggleMute}>
      <video ref={videoRef} src={videoBg} autoPlay loop playsInline />
      <div className={styles.content}>
        <h1>Bem-Vindo a</h1>
        <p>Unity Comunicação</p>
      </div>
      <div className={styles.soundIcon}>
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </div>
    </div>
  );
};
