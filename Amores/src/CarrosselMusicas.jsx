import { useState } from "react";

export default function CarrosselMusicas() {
  const musicas = [
    { titulo: "Die With A Smile", src: "https://www.youtube.com/embed/kPa7bsKwL-c?si=mJ6VG6i4R-dhmdmr", comentario: "Amo essa musica e gosto de cantar essa para voce" },
    { titulo: "New West - Those Eyes", src: "https://www.youtube.com/embed/b_CpWmkhwq0?si=x-L3jWYXdli0PqZ3", comentario:"Essa daqui eu escuto pensando em voce" },
    { titulo: "Red Hot Chili Peppers - Dark Necessities [Official Music Video]", src: "https://www.youtube.com/embed/Q0oIoR9mLwc?si=8aXXMkbrcCeBBa7r", comentario: "Essa daqui é pelas voltinhas de patinete" }
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % musicas.length);
  const prev = () => setIndex((index - 1 + musicas.length) % musicas.length);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2 style={{ color: "Black" }}>{musicas[index].titulo}</h2>
      
      <iframe
        width="320"
        height="180"
        src={musicas[index].src}
        title={musicas[index].titulo}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          border: "4px solid #ff80ab",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.4)"
        }}
      ></iframe>
      <div style={{ marginTop: "1rem" }}>
        <button onClick={prev} style={{ marginRight: "10px" }}>⬅️</button>
        <button onClick={next}>➡️</button>
      </div>
      <h2 style={{ color: "Black" }}>{musicas[index].comentario}</h2>
    </div>
  );
}
