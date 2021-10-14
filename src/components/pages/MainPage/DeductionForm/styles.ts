import styled from '@emotion/styled'
import { media } from '../../../../theme/theme'

export const DeductionFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 488px;
  padding: 32px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 30px;

  ${media.sm} {
    width: 389px;
  }

  ${media.xs} {
    position: absolute;
    top: 0;
    bottom: 0;
    width: auto;
    padding: 32px 16px 16px;
    border-radius: 0;
  }
`

export const StyledHeader = styled.p`
  margin: 0 0 16px;
  color: ${({ theme }) => theme.colors.black};
  font-size: 28px;
  line-height: 40px;
  font-weight: 500;

  ${media.xs} {
    font-size: 18px;
    line-height: 24px;
  }
`

export const StyledHint = styled.p`
  margin: 0 0 24px;
  color: ${({ theme }) => theme.colors.gray4};
  font-size: 14px;
  line-height: 24px;

  ${media.xs} {
    font-size: 12px;
    line-height: 16px;
  }
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

  ${media.xs} {
    margin-right: 0;
    margin-bottom: 24px;
  }
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

  ${media.xs} {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const SubStyledRow = styled.div`
  display: flex;
`

export const PaymentsContainer = styled.div`
  margin-top: -8px;
  margin-bottom: 12px;
`

export const ButtonContainer = styled.div`
  ${media.xs} {
    margin-top: auto;
  }
`
