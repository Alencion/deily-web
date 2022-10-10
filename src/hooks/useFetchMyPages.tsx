import { useEffect, useReducer } from 'react'
import { v4 } from 'uuid'

import PageApis from '@apis/pageApis'
import { PageHierarchyNodeModel, PageHierarchyRootModel } from '@models/Page'

export interface PageAction {
  type: 'init' | 'change-title' | 'create-new-page' | 'create-new-sub-page' | 'select-page'
  payload: any
}

interface PageInitAction extends PageAction {
  type: 'init'
  payload: PageState
}

interface PageChangeTitleAction extends PageAction {
  type: 'change-title'
  payload: string
}

interface PageSelectAction extends PageAction {
  type: 'select-page'
  payload: PageHierarchyNodeModel
}

export interface PageState {
  pageHierarchy: PageHierarchyRootModel
  selectPage?: PageHierarchyNodeModel
}

export const pageInitState: PageState = { pageHierarchy: { nodes: [] }, selectPage: undefined }

const reducer = (pageState: PageState, action: PageAction): PageState => {
  switch (action.type) {
    case 'init': {
      const initAction = action as PageInitAction
      return { ...initAction.payload }
    }
    case 'change-title': {
      const chagneTitleAction = action as PageChangeTitleAction
      if (pageState.selectPage) {
        pageState.selectPage.title = chagneTitleAction.payload
      }
      return { ...pageState }
    }
    case 'create-new-page': {
      const newPage: PageHierarchyNodeModel = {
        pageId: v4(),
        depth: 1,
        children: []
      }
      return { pageHierarchy: { nodes: [...pageState.pageHierarchy?.nodes, newPage] }, selectPage: newPage }
    }
    case 'create-new-sub-page':
      return { ...pageState }
    case 'select-page': {
      const selectPageAction = action as PageSelectAction
      return { ...pageState, selectPage: selectPageAction.payload }
    }
    default:
      return { ...pageState }
  }
}

export interface PageActionBuilder {
  init: (payload: PageInitAction['payload']) => PageInitAction
  changeTitle: (payload: PageChangeTitleAction['payload']) => PageChangeTitleAction
  createNewPage: () => PageAction
  createNewSubPage: () => PageAction
  selectPage: (payload: PageHierarchyNodeModel) => PageSelectAction
}

const pageActionBuilder: PageActionBuilder = {
  init: (payload: PageInitAction['payload']): PageInitAction => ({ type: 'init', payload }),
  changeTitle: (payload: PageChangeTitleAction['payload']): PageChangeTitleAction => ({ type: 'change-title', payload }),
  createNewPage: (): PageAction => ({ type: 'create-new-page', payload: undefined }),
  createNewSubPage: (): PageAction => ({ type: 'create-new-sub-page', payload: undefined }),
  selectPage: (payload: PageHierarchyNodeModel): PageSelectAction => ({ type: 'select-page', payload })
}

interface useFetchMyPagesReturnType {
  pageState: PageState
  pageDispatcher: React.Dispatch<PageAction>
  pageActionBuilder: PageActionBuilder
}

export default function useFetchMyPages (memberId: string): useFetchMyPagesReturnType {
  const [pageState, pageDispatcher] = useReducer<(state: PageState, action: PageAction) => PageState>(reducer, pageInitState)

  useEffect(() => {
    void PageApis.getPages(memberId).then((data) => {
      pageDispatcher(pageActionBuilder.init({ pageHierarchy: data, selectPage: data.nodes[0] }))
    })
  }, [])

  return { pageState, pageDispatcher, pageActionBuilder }
}
