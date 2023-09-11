import styled from 'styled-components'

export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  > :nth-child(2) {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

  > :nth-child(2) img {
    width: 100%;
    height: auto;
  }
`

export const StyledForm = styled.form`
  width: 50%;
  min-width: 400px;
  margin: auto;
  transform: translateY(50%);
`
