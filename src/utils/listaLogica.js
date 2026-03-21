//adiciona um item
export const adicionarItem = (lista, index) => {
  const newItem = { id: crypto.randomUUID(), value: "" };
  const novaLista = [...lista];
  novaLista.splice(index + 1, 0, newItem);
  return novaLista;
};

//deleta um item
export const deletarItem = (lista, id) => {
  return lista.filter((item) => item.id !== id);
};

//alualiza um item
export const atualizarItem = (lista, id, novoValor) => {
  return lista.map((item) => 
    item.id === id ? { ...item, value: novoValor } : item
  );
};