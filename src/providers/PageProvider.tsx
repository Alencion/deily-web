import { createContext, ReactNode } from 'react'
import useFetchMyPages, { PageAction, PageActionBuilder, pageInitState, PageState } from '@hooks/useFetchMyPages'

interface PageContextType {
  pageState: PageState
  pageDispatcher?: React.Dispatch<PageAction>
  pageActionBuilder?: PageActionBuilder
}

export const PageContext = createContext<PageContextType>({ pageState: pageInitState })

interface Props {
  children?: ReactNode
}

export default function PageProvider ({ children }: Props): JSX.Element {
  const memberId = 'afcec722-b86f-487a-8ac3-a6614d18882d'
  const fetchMyPages = useFetchMyPages(memberId)

  return (<PageContext.Provider value={fetchMyPages}>{children}</PageContext.Provider>)
}
