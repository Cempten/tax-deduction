import styled from '@emotion/styled'

export const DeductionFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 476px;
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

export const StyledText = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  line-height: 24px;
  font-weight: 500;
  margin: 0;
`
