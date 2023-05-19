import AddNewItem from "./components/AddNewItem"
import Column from "./components/Column"
import { CardContainer, ColumnContainer, ColumnTitle, ScreenContainer } from "./styles"


function App() {

  return (
    <>
      <ScreenContainer>
        <Column text='React now' />
        <AddNewItem toggleButtonText="+Add new item" onAdd={() => console.log('Column created')} />
      </ScreenContainer >
    </>
  )
}

export default App
