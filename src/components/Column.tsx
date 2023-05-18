import { CardContainer, ColumnContainer, ColumnTitle } from "../styles"

interface ColumnProps {
  text: string;
}


const Column = ({ text }: ColumnProps) => {
  return (
    <>
      <ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
        <CardContainer>Build trello app clone</CardContainer>
        <CardContainer>Build ecommerce sword project</CardContainer>
        <CardContainer>Build other react projects</CardContainer>
      </ColumnContainer>
    </>
  )
}

export default Column
