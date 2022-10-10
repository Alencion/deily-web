import { PageHierarchyNodeModel } from '@/models/Page'
import { useContext, useState } from 'react'
import styled, { ThemeProps } from 'styled-components'

import DropDownIcon from '@assets/dropDown-blackLight-512.png'
import DropRightIcon from '@assets/dropRight-blackLight-512.png'
import AddSubPageIcon from '@assets/add-black-512.png'
import DocsIcon from '@assets/docs-blackDefault-512.png'
import { IconButton, IconTextButton } from '@components/buttons/IconButton'
import { Theme } from '@constants/themes'
import { PageContext } from '@providers/PageProvider'

interface Props {
  node: PageHierarchyNodeModel
}

export default function PageHierarchyNode ({ node }: Props): JSX.Element {
  const { pageDispatcher, pageActionBuilder } = useContext(PageContext)
  const [showChildren, setShowChildren] = useState<boolean>(false)
  const [showAddSubPageButton, setShowAddPageButton] = useState<boolean>(false)

  const clickDropDownButton = (): void => setShowChildren((prev) => !prev)
  const clickPageNode = (): void => pageActionBuilder && pageDispatcher?.(pageActionBuilder.selectPage(node))

  const mouseOverPageNodeContainer = (): void => setShowAddPageButton(true)
  const mouseOutPageNodeContiner = (): void => setShowAddPageButton(false)

  return (
    <PageHierarchyNodeStyledContainer>
      <PageNodeStyledContainer onMouseOver={mouseOverPageNodeContainer} onMouseOut={mouseOutPageNodeContiner}>
        <PageHierarchyDropDownStyledButton
          iconProps={{ src: showChildren ? DropDownIcon : DropRightIcon }}
          buttonProps={{ onClick: clickDropDownButton }} />
        <PageNodeStyledButton iconProps={{ src: DocsIcon, alt: '문서 아이콘' }} buttonProps={{ onClick: clickPageNode }}>{node.title && node.title.length !== 0 ? node.title : '제목 없음'}</PageNodeStyledButton>
        {showAddSubPageButton && <CreateNewSubPageStyeldButton iconProps={{ src: AddSubPageIcon, alt: ' 하위 페이지 추가 아이콘' }}/>}
      </PageNodeStyledContainer>
      {showChildren && (node.children.length !== 0 ? node.children.map((child) => <PageHierarchyNode key={child.pageId} node={child} />) : <EmptyPageParagraph>하위 페이지가 없습니다.</EmptyPageParagraph>)}
    </PageHierarchyNodeStyledContainer>
  )
}

const PageHierarchyNodeStyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const PageNodeStyledContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  width: 100%;
  padding: 4px 4px;
  border-radius: 4px;
  margin-top: 4px;

  &:hover {
    background-color: ${({ theme }: ThemeProps<Theme>) => theme.colors.background.overlay};
  }
`

const PageHierarchyDropDownStyledButton = styled(IconButton)`
  display: flex;
  flex: 0 0 28px;

  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }: ThemeProps<Theme>) => theme.colors.background.overlay};
  }

  & > img {
    width: 100%;
    height: 100%;
    padding: 4px;
  }
`

const PageNodeStyledButton = styled(IconTextButton)`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  margin-left: 2px;
  overflow: hidden;

  & > p {
    width: 100%;

    font-weight: 700;
    text-align: start;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  ${({ theme }: ThemeProps<Theme>) => theme.font({ size: theme.fontSizes.medium, color: theme.colors.black.default })}

  & > img {
    width: 20px;
    margin-right: 4px;
  }
`

const EmptyPageParagraph = styled.div`
  padding: 5px;
  border-radius: 3px;
  margin: 5px 0;

  text-align: center;

  background-color: ${({ theme }: ThemeProps<Theme>) => theme.colors.background.overlay};
  ${({ theme }: ThemeProps<Theme>) => theme.font({ size: theme.fontSizes.medium, color: theme.colors.black.default })}
`

const CreateNewSubPageStyeldButton = styled(IconButton)`
  display: flex;
  align-items: center;

  border-radius: 4px;
  margin-left: auto;

  &:hover {
    background-color: ${({ theme }: ThemeProps<Theme>) => theme.colors.background.overlay};
  }

  & > img {
    width: 28px;
    height: 28px;
    padding: 4px;
  }
`
