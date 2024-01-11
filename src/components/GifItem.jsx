import Swal from "sweetalert2";

export default function GifItem({ title, url }) {
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
      <div className="card" onClick={handleClick}>
        <p>{title}</p>
        <img src={url} alt="Img GIFS" />
      </div>
    </>
  );
}
