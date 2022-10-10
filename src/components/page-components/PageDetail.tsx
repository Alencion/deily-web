import React from 'react'
import styled, { ThemeProps } from 'styled-components'

import { Theme } from '@constants/themes'
import DateDisplayer from '@components/date-displayer/DateDisplayer'
import PageTitle from '@components/page-components/title/PageTitle'
import PageBlock from '@components/page-components/block/PageBlock'
import Loading from '@components/loading/Loading'
import useFetchBlocks from '@hooks/useFetchBlocks'
import { PageHierarchyNodeModel } from '@models/Page'

interface Props {
  page: PageHierarchyNodeModel
}

export default function PageDetail ({ page }: Props): JSX.Element {
  const { loading, blocks, focusBlockId, setFocusBlockId, createInitBlock, createNewBlock, changeContent, focusPrevBlock, focusNextBlock, deleteBlock } = useFetchBlocks(page.pageId)
  const isOwner = true

  const onClickBlockWrapper: React.MouseEventHandler<HTMLDivElement> = () => {
    (blocks.length - 1 >= 0) && setFocusBlockId(blocks[blocks.length - 1].id)
  }

  const renderPageDetail = (): JSX.Element => {
    if (loading) return <Loading/>
    return (
      <>
        <PageTitle isOwner={isOwner} createInitBlock={createInitBlock}/>
        <PageBlocksStyledContainer onClick={onClickBlockWrapper}>

          {renderPageBlocks()}

        </PageBlocksStyledContainer>
      </>
    )
  }

  const renderPageBlocks = (): JSX.Element | JSX.Element[] => {
    if (loading) return <Loading/>
    if (blocks.length === 0) return <EmptyPageBlocksStyledContainder onClick={createInitBlock}>본문이 비어있습니다! 이 곳을 클릭해서 글을 작성해보세요!!</EmptyPageBlocksStyledContainder>
    return blocks.map(block => <PageBlock key={block.id}
      isOwner={isOwner}
      block={block}
      focusBlockId={focusBlockId}
      setFocusBlockId={setFocusBlockId}
      createNewBlock={createNewBlock}
      changeContent={changeContent}
      deleteBlock={deleteBlock}
      focusPrevBlock={focusPrevBlock}
      focusNextBlock={focusNextBlock}
    />)
  }

  return (
    <PageWrapper>
      <StyledDateDisplayer date='20220930' />
      <PageStyledContainer>

        {renderPageDetail()}

      </PageStyledContainer>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 1100px;
  margin-top: 80px;

  transition: 0.5s;
  @media (max-width: 1800px) {
    margin-left: 200px;
  }
`

const StyledDateDisplayer = styled(DateDisplayer)`
  margin: 20px 0;
`

const PageStyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 800px;
  padding: 40px 30px;
  border: 1px solid ${({ theme }: ThemeProps<Theme>) => theme.colors.border.default};
  border-radius: 1px;
  margin-bottom: 100px;

  background-color: ${({ theme }: ThemeProps<Theme>) => theme.colors.white};
`

const PageBlocksStyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  height: 100%;
  margin-top: 20px;
`

const EmptyPageBlocksStyledContainder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  ${({ theme }: ThemeProps<Theme>) => theme.font({ size: theme.fontSizes.paragraph, color: theme.colors.grey })}
`
