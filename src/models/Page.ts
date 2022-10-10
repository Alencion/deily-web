export interface PageHierarchyRootModel {
  nodes: PageHierarchyNodeModel[]
}

export interface PageHierarchyNodeModel {
  pageId: string
  title?: string
  depth: number
  parentId?: string
  children: PageHierarchyNodeModel[]
}

export interface PageDetailModel {
  id: string
  title?: string
  type?: string
  categories?: string[]
}

export interface BlockModel {
  id: string
  type?: 'paragraph'
  content: string
}
