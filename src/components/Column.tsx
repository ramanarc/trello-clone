import { CardContainer, ColumnContainer, ColumnTitle } from "../styles"
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
      </ColumnContainer>
    </>
  )
}

export default Column
