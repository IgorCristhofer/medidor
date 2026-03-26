import { ListPlus } from "lucide-react";


export const BtnAdicionar = ({ onClick }) => (
  <button onClick={onClick} className="bg-green-500 btnconf">
     <ListPlus size={16}/>
  </button>
);