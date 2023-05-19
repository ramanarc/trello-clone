import { useState } from "react";
import { AddItemButton } from "../styles";
import NewItemForm from "./NewItemForm";

type AddNewItemProps = {
  onAdd(text: string): void;
  toggleButtonText: string;
}


const AddNewItem = ({ onAdd, toggleButtonText }: AddNewItemProps) => {

  const [showForm, setShowForm] = useState(false);

  { showForm && <NewItemForm onAdd={(text) => { onAdd(text); setShowForm(false) }} /> }

  return <AddItemButton onClick={() => setShowForm(true)}>{toggleButtonText}</AddItemButton>
}

export default AddNewItem
