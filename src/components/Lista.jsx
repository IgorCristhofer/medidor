//biblioteca
import { useState } from "react";

const Lista = () => {
  // cria a atualização de estado
  const [list, setList] = useState([
    // a atribuição de um  valor randomico ao id e valor vazio
    { id: crypto.randomUUID(), value: "" },
  ]);

  //erifica se o id já existe
  const handleChange = () => {
    setList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value } : item)),
    );
  };

  //deleta o item
  const handleDelet = () => {
    setList((prev) => prev.filter((item) => item.id !== id));
  };

  //add item
  const handleAdd = () => {
    //adiciona o item
    const newItem = { id: crypto.randomUUID(), value: "" };

    //define a posição do item
    setList((prev) => [
      ...prev.slice(0, index + 1),
      newItem,
      ...prev.slice(index + 1),
    ]);
  };
};

export default Lista;
