import { useEffect, useState } from "react";

function RelogioNamoro() {
  const dataInicio = new Date("2022-08-08T00:00:00"); // data do início do namoro
  const [tempoJuntos, setTempoJuntos] = useState({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

  useEffect(() => {
    const intervalo = setInterval(() => {
      const agora = new Date();
      const diff = agora - dataInicio;

      const segundosTotais = Math.floor(diff / 1000);

      const dias = Math.floor(segundosTotais / (3600 * 24));
      const horas = Math.floor((segundosTotais % (3600 * 24)) / 3600);
      const minutos = Math.floor((segundosTotais % 3600) / 60);
      const segundos = segundosTotais % 60;

      setTempoJuntos({ dias, horas, minutos, segundos });
    }, 1000);

    return () => clearInterval(intervalo); // limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div style={{ marginTop: "40px", fontSize: "2rem", color: "black" }}>
      Estamos há <strong>{tempoJuntos.dias}</strong> dias,{" "}
      <strong>{tempoJuntos.horas}</strong> horas,{" "}
      <strong>{tempoJuntos.minutos}</strong> minutos e{" "}
      <strong>{tempoJuntos.segundos}</strong> segundos juntos 💖
    </div>
  );
}

export default RelogioNamoro;
