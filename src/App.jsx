// estilo
import "./App.css";

//bibliotecas&hooks
import { useState } from "react";
import { BtnDeletar } from "./components/BtnDeletar";
import { BtnAdicionar } from "./components/BtnAdicionar";
import { adicionarItem, deletarItem, atualizarItem } from "./utils/listaLogica";

function App() {
  const [list, setList] = useState([{ id: crypto.randomUUID(), value: "" }]);

  // Funções que ligam a lógica ao estado do React
  const handleAdd = (index) => setList(adicionarItem(list, index));
  const handleDelet = (id) => setList(deletarItem(list, id));
  const handleChange = (id, val) => setList(atualizarItem(list, id, val));

  return (
    <main className="p-10 space-y-2 bg-slate-700">
      <h1>Valores</h1>
      {list.map((item, index) => (
        <section key={item.id} className="flex gap-2 justify-center">
          <input 
            value={item.value} 
            onChange={(e) => handleChange(item.id, e.target.value)}
            className="border rounded-lg p-2 bg-sky-100"
          />

          
          
          <BtnAdicionar onClick={() => handleAdd(index)} />
          <BtnDeletar onClick={() => {list.length>1 && handleDelet(item.id)}} />
        </section>
      ))}
    </main>
  );
}

export default App;