import styled from 'styled-components'

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  > :nth-child(1) {
    flex: 1;
  }
  > :nth-child(2) {
    flex: 1;
    padding: 0;
    margin: 0;
    background-color: #039be5;
  }
`

export const StyledForm = styled.form`
  width: 50%;
  min-width: 400px;
  margin: auto;
  transform: translateY(50%);
`
