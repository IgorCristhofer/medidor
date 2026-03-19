// bibliotecas
import React from "react";
import { useState, useEffect } from "react";

const Contador = () => {
  const [tempo, setTempo] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTempo(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const horaFormatada = tempo.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit", // Opcional
  });

  return <div className="text-2xl font-bold">Hora atual: {horaFormatada}</div>;
};

export default Contador;
