// estilo
import "./App.css";
import { useState } from "react";
import { BtnDeletar } from "./components/BtnDeletar";
import { BtnAdicionar } from "./components/BtnAdicionar";
import { adicionarItem, deletarItem, atualizarItem } from "./utils/listaLogica";

export function App() {
  const [list, setList] = useState([{ id: crypto.randomUUID(), value: "" }]);

  // Funções que ligam a lógica ao estado do React
  const handleAdd = (index) => setList(adicionarItem(list, index));
  const handleDelet = (id) => setList(deletarItem(list, id));
  const handleChange = (id, val) => setList(atualizarItem(list, id, val));

  return (
    <div className="p-10 space-y-2">
      {list.map((item, index) => (
        <div key={item.id} className="flex gap-2">
          <input 
            value={item.value} 
            onChange={(e) => handleChange(item.id, e.target.value)}
            className="border p-2"
          />
          
          <BtnAdicionar onClick={() => handleAdd(index)} />
          <BtnDeletar onClick={() => handleDelet(item.id)} />
        </div>
      ))}
    </div>
  );
}
