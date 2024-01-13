import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";

export default function GifItem({ title, url, id }) {
  const handleClick = () => {
    Swal.fire({
      title: "Felicidades!",
      text: "Enlace Al GIF copiado Correctamente",
      icon: "success",
      confirmButtonText: "Aceptar",
      timer: 1200,
      showConfirmButton: false,
    });
    navigator.clipboard.writeText(url);
  };

  return (
    <>
      <div
        className="card"
        onClick={handleClick}
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Click Para Copiar El URL del GIF!"
      >
        <Tooltip id="my-tooltip" />
        <p>{title}</p>
        <img src={url} alt="Img GIFS" />
      </div>
    </>
  );
}
