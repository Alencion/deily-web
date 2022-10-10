import styled, { ThemeProps } from 'styled-components'

import deilyLogo from '@assets/deily-logo-512.png'
import signOutIcon from '@assets/sign-out-512.png'
import { IconButton, IconTextButton } from '@components/buttons/IconButton'
import { Theme } from '@constants/themes'
import useTopHeaderTabNavItems from '@hooks/useTopHeaderTavNavItems'
import { useNavigate } from 'react-router-dom'

interface Props { }

export default function TopHeader (props: Props): JSX.Element {
  const { tabNavItems, dispatch } = useTopHeaderTabNavItems()
  const naviate = useNavigate()

  const redirect = (name: string): void => {
    dispatch({ type: name })
    naviate(name)
  }

  return (
    <TopHeaderStyledContainer>
      <DeilyLogoSyledButton buttonProps={{}} iconProps={{ src: deilyLogo, alt: 'deily-logo 아이콘' }} />

      <TabNavItemsStyledContainer>
        {Object.keys(tabNavItems).map(key =>
          <TabNavItemStyledText key={key} isSelect={tabNavItems[key].isSelect} onClick={() => redirect(key)}>
            {tabNavItems[key].name}
          </TabNavItemStyledText>
        )}
      </TabNavItemsStyledContainer>

      <SignOutButton buttonProps={{}} iconProps={{ src: signOutIcon, alt: '로그아웃' }} textProps={{}} >로그아웃</SignOutButton>
    </TopHeaderStyledContainer>
  )
}

const DeilyLogoSyledButton = styled(IconButton)`
  && {
    margin-left: 56px;

    & > img {
      width: 34px;
    }
  }
`

const TopHeaderStyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 60px;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);

  position: fixed;
  top: 0;
  
  z-index: 1000;

  background-color: ${({ theme }: ThemeProps<Theme>) => theme.colors.white};

  & > img {
    margin-left: 56px;
    width: 34px;
    height: 34px;
  }
`

const TabNavItemsStyledContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 450px;
`

const TabNavItemStyledText = styled.button<{ isSelect: boolean }>`
  ${({ theme }: ThemeProps<Theme>) => theme.font({ size: theme.fontSizes.paragraph, family: theme.fontFamilies.Jua })}

  ${props => props.isSelect && 'text-decoration: underline;'}
  ${(props: ThemeProps<Theme> & { isSelect: boolean }) => props.isSelect && `color: ${props.theme.colors.primary.light}`}
`

const SignOutButton = styled(IconTextButton)`
  && {
    display: flex;
    flex-direction: row;
    align-items: center;

    height: 24px;
    margin-right: 46px;

    & > img {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }

    & > p {
      ${({ theme }: ThemeProps<Theme>) => theme.font({ size: theme.fontSizes.paragraph, family: theme.fontFamilies.Jua })}
    }
  }
`
