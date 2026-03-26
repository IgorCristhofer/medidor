import { ListMinus } from "lucide-react";


export const BtnDeletar = ({ onClick }) => (
  <button onClick={onClick} className="bg-red-500 btnconf">
    <ListMinus size={16}/>
  </button>
);