import { useContext } from 'react'
import styled from 'styled-components'

import SideNav from '@components/side-navs/SideNav'
import PageDetail from '@components/page-components/PageDetail'
import { PageContext } from '@providers/PageProvider'

export default function TimelineTabPage (): JSX.Element {
  const { pageState } = useContext(PageContext)

  return (
    <TimelineTabPageStyledContainer className='scroll'>
      <SideNav />
      {pageState.selectPage && <PageDetail page={pageState.selectPage}/>}
    </TimelineTabPageStyledContainer>
  )
}

const TimelineTabPageStyledContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
`
