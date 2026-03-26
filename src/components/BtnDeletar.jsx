import { Trash } from "lucide";

export const BtnDeletar = ({ onClick }) => (
  <button onClick={onClick} className="bg-red-500 btnconf">
    <Trash size={48} color="red" strokeWidth={1}/>
  </button>
);