//biblioteca
import { useState } from "react";

const Lista = () => {
  // cria a atualização de estado
  const [list, setList] = useState([
    // a atribuição de um  valor randomico ao id e valor vazio
    { id: crypto.randomUUID, value: "" },
  ]);

  const handleChange = () => {
    setList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value } : item)),
    );
  };
};

export default Lista;
