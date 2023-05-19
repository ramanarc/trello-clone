import styled from 'styled-components'

export const ScreenContainer = styled.div`
  align-items: flex-start;
  // background-color: #0F172A;
  background: linear-gradient(109.6deg, rgb(20, 30, 48) 11.2%, rgb(36, 59, 85) 91.1%);
  color: #fff;
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  overflow: hidden;
  padding: 28px;
  width: 100%;
`

export const ColumnContainer = styled.div`
  width: 300px;
  background-color: #1E293B;
  min-height: 52px;
  border-radius: 12px;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  margin-right: 24px;
`

export const ColumnTitle = styled.div`
  color: #F8FAFC;
  font-weight: bold;
  margin-bottom: 12px;
  font-size: 18px;
`

export const CardContainer = styled.div`
  background-color: #334155;
  color: #F1F5F9;
  padding: 12px 14px;
  border-radius: 6px;
  margin: 16px 0px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

export const AddItemButton = styled.button`
  background-color: #581C87;
  color: #F8FAFC;
  border: transparent;
  border-radius: 6px;
  cursor: pointer;
  padding: 12px 14px;
  width: 100%;
  max-width: 280px;
  transition: background 85ms ease-in;
  &:hover {
    background-color: #7E22CE;
  }
`

export const NewItemFormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`

export const NewItemButton = styled.button`
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-aign: center;
`

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  margin-bottom: 0.5rem;
  box-shadow: #091e4240 0px 1px 0px 0px;
  padding: 0.5rem 1rem;
  width: 100%;
`