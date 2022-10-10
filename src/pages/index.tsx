import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import TopHeader from '@components/headers/TopHeader'

interface Props {}

export const TabPages = (props: Props): JSX.Element => {
  return (
    <PageStyledContainer>
      <TopHeader />
      <Outlet />
    </PageStyledContainer>
  )
}

const PageStyledContainer = styled.div`
  width: 100%;
  height: 100%;
`
