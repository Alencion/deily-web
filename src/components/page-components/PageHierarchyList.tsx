import { useContext } from 'react'
import styled, { ThemeProps } from 'styled-components'

import addIcon from '@assets/add-primaryDark-512.png'
import { IconTextButton } from '@components/buttons/IconButton'
import PageHierarchyNode from '@components/page-components/PageHierarchyNode'
import { Theme } from '@constants/themes'
import { PageContext } from '@providers/PageProvider'

interface Props {}

export default function PageHierarchyList (props: Props): JSX.Element {
  const { pageState, pageDispatcher, pageActionBuilder } = useContext(PageContext)

  const createNewPage = (): void => pageActionBuilder && pageDispatcher?.(pageActionBuilder.createNewPage())

  return (
    <PageHierarchyListStyledContainer>
      <NavSectionTitle>페이지</NavSectionTitle>
      <CreateNewPageStyledButton iconProps={{ src: addIcon, alt: '추가기능 아이콘' }} buttonProps={{ onClick: createNewPage }}>새로운 페이지 추가</CreateNewPageStyledButton>
      {pageState.pageHierarchy?.nodes.map((node) => <PageHierarchyNode key={node.pageId} node={node} />)}
    </PageHierarchyListStyledContainer>
  )
}

const PageHierarchyListStyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`

const NavSectionTitle = styled.div`
  ${({ theme }: ThemeProps<Theme>) => theme.font({ size: theme.fontSizes.paragraph, family: 'Jua', color: theme.colors.black.light })}
`

const CreateNewPageStyledButton = styled(IconTextButton)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 35px;
  border-radius: 3px;
  margin-top: 16px;
  margin-bottom: 8px;

  background-color: ${({ theme }: ThemeProps<Theme>) => theme.colors.primary.background};

  ${({ theme }: ThemeProps<Theme>) => theme.font({ size: theme.fontSizes.small, color: theme.colors.primary.dark, weight: '700' })}

  &:hover {
    background-color: ${({ theme }: ThemeProps<Theme>) => theme.colors.primary.backgroundHover};
  }

  & > img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`
