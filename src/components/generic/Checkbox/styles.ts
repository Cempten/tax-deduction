import styled from '@emotion/styled'

export const StyledLabel = styled.label`
  input:checked + div {
    background: ${({ theme }) => theme.gradients[0]};
    svg {
      display: block;
    }
  }

  input:disabled + div {
    background: ${({ theme }) => theme.colors.gray};
  }

  background: black;
`

export const StyledCheckbox = styled.input`
  display: none;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border: 1px solid ${({ theme }) => theme.colors.gray1};
  border-radius: 6px;
  cursor: pointer;

  svg {
    display: none;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`
