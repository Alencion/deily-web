import { BlockModel, PageDetailModel, PageHierarchyRootModel } from '@/models/Page'

interface PageApisInterface {
  getPages: (memberId: string) => Promise<PageHierarchyRootModel>
  getPageDetail: (pageId: string) => Promise<PageDetailModel>
  getPageBlocksByPageId: (pageId: string) => Promise<BlockModel[]>
}

const fakePageApis: PageApisInterface = {
  getPages: async (memberId: string) => await new Promise<PageHierarchyRootModel>((resolve) => {
    setTimeout(() => {
      resolve({
        nodes: [
          {
            pageId: '7ec15ff7-7536-4cef-8f4e-6777c231bbfb',
            depth: 1,
            children: []
          }
        ]
      })
    }, 1000)
  }),
  getPageDetail: async (pageId: string) => await new Promise<PageDetailModel>((resolve) => {
    setTimeout(() => {
      resolve({
        id: '7ec15ff7-7536-4cef-8f4e-6777c231bbfb'
      })
    }, 1000)
  }),
  getPageBlocksByPageId: async (pageId: string) => await new Promise<BlockModel[]>((resolve) => {
    setTimeout(() => {
      if (pageId === '7ec15ff7-7536-4cef-8f4e-6777c231bbfb') {
        resolve([
          { id: '3471deab-ed3d-4adf-a630-e8e1cfcec6f5', type: 'paragraph', content: 'hello-world' },
          { id: '2862eacd-dfe2-4d43-a3a0-ee832f4434d2', type: 'paragraph', content: '' },
          { id: '9aedd255-4a7e-4227-a6bc-4116b94ee850', type: 'paragraph', content: 'hello-world2' }
        ])
      }
      resolve([])
    }, 1000)
  })
}

const PageApis = fakePageApis
export default PageApis
