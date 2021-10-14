import styled from '@emotion/styled'

export const PaymentContainer = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray1};
  cursor: pointer;
`

export const StyledSum = styled.p`
  margin: 0 5px 0 11px;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.black};
`

export const StyledIndex = styled(StyledSum)`
  margin: 0;
  color: ${({ theme }) => theme.colors.gray4};
`
