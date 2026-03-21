//adiciona um item
export const adicionarItem = (list, index) => {
  const newItem = { id: crypto.randomUUID(), value: "" };
  const novaLista = [...list];
  novaLista.splice(index + 1, 0, newItem);
  return novaLista;
};

//deleta um item
export const deletarItem = (list, id) => {
  return list.filter((item) => item.id !== id);
};

//alualiza um item
export const atualizarItem = (list, id, novoValor) => {
  return list.map((item) => 
    item.id === id ? { ...item, value: novoValor } : item
  );
};