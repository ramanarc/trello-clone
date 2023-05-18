import { CardContainer, ColumnContainer, ColumnTitle, ScreenContainer } from "./styles"



function App() {
  return (
    <>
      <ScreenContainer>
        <ColumnContainer>
          <ColumnTitle>Todo:</ColumnTitle>
          <CardContainer>First Item</CardContainer>
          <CardContainer>Second Item</CardContainer>
          <CardContainer>Third Item</CardContainer>
        </ColumnContainer>
      </ScreenContainer >
    </>
  )
}

export default App
