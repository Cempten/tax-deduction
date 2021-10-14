import styled from '@emotion/styled'

export const DeductionFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 488px;
  padding: 32px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 30px;
`

export const StyledHeader = styled.p`
  margin: 0 0 16px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 28px;
  line-height: 40px;
  font-weight: 500;
`

export const StyledHint = styled.p`
  margin: 0 0 24px;
  color: ${({ theme }) => theme.colors.gray4};
  font-size: 14px;
  line-height: 24px;
`

export const StyledLabel = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  margin: 0;
`

export const StyledText = styled(StyledLabel)`
  margin-right: 32px;
`

export const CalculateButton = styled.div`
  width: 76px;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.red};
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }

  &:active {
    color: ${({ theme }) => theme.colors.red};
  }
`

export const StyledRow = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0 40px;
`

export const PaymentsContainer = styled.div`
  margin-top: -8px;
  margin-bottom: 12px;
`
