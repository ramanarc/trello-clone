import { AddItemButton, CardContainer, ColumnContainer, ColumnTitle, NewItemButton, NewItemFormContainer, NewItemInput } from "../styles"
import AddNewItem from "./AddNewItem";
import Card from "./Card";

interface ColumnProps {
  text: string;
}


const Column = ({ text }: ColumnProps) => {
  return (
    <>
      <ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
        <Card text="Build trello clone" />
        <Card text="Build using styled components" />
        <Card text="How to make responsive" />
        <AddNewItem toggleButtonText="+Add new item" onAdd={(text) => console.log(text)} />
      </ColumnContainer>
    </>
  )
}

export default Column
