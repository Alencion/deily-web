import { useContext } from 'react'
import styled, { ThemeProps } from 'styled-components'

import { HorizonDivider } from '@components/divider'
import NavProfile from '@components/profiles/NavProfile'
import PageHierarchyList from '@components/page-components/PageHierarchyList'
import { Theme } from '@constants/themes'
import useFetchMe from '@hooks/useFetchMe'
import { ThemeContext } from '@providers/ThemeProvider'

interface Props {}

export default function SideNav (props: Props): JSX.Element {
  const [meInfo, memberInfo] = useFetchMe()
  const { theme } = useContext(ThemeContext)

  return (
    <SideNavStyledContainer>
      <NavProfile isMe={meInfo === memberInfo} memberInfo={memberInfo}/>
      <StyledHorizonDivider height='1px' color={theme.colors.primary.background}/>
      <PageHierarchyList/>
    </SideNavStyledContainer>
  )
}

const SideNavStyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 260px;
  height: 100%;
  padding: 85px 20px 0;
  border-right: 1px solid ${({ theme }: ThemeProps<Theme>) => theme.colors.border.default};

  position: fixed;
  left: 0;

  z-index: 100;

  background-color: ${({ theme }: ThemeProps<Theme>) => theme.colors.white};
`

const StyledHorizonDivider = styled(HorizonDivider)`
  margin: 30px 0 20px;
`
