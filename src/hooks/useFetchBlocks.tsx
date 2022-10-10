import { useLayoutEffect, useState } from 'react'
import { v4 } from 'uuid'

import PageApis from '@apis/pageApis'
import { BlockModel } from '@models/Page'

interface useFetchBlocksReturnType {
  loading: Boolean
  blocks: BlockModel[]
  focusBlockId: string | undefined
  setFocusBlockId: React.Dispatch<React.SetStateAction<string | undefined>>
  createInitBlock: () => void
  deleteBlock: (id: string) => void
  changeContent: (id: string, content: string) => void
  createNewBlock: (id: string) => void
  focusPrevBlock: (id: string) => void
  focusNextBlock: (id: string) => void
}

export default function useFetchBlocks (pageId: string): useFetchBlocksReturnType {
  const uuid = v4()
  const [loading, setLoading] = useState<Boolean>(true)
  const [blocks, setBlocks] = useState<BlockModel[]>([])
  const [focusBlockId, setFocusBlockId] = useState<string | undefined>(uuid)

  useLayoutEffect(() => {
    setLoading(true)
    void PageApis.getPageBlocksByPageId(pageId).then(data => {
      setBlocks(data)
      setLoading(false)
    })
  }, [pageId])

  const createInitBlock = (): void => {
    const newInitBlock = { id: v4(), content: '' }
    setBlocks([newInitBlock, ...blocks])
    setFocusBlockId(newInitBlock.id)
  }

  const createNewBlock = (id: string): void => {
    const findIndex = blocks.findIndex(block => block.id === id)
    const blocksCopy = [...blocks]
    const newBlock = { id: v4(), content: '' }

    blocksCopy.splice(findIndex + 1, 0, newBlock)
    setBlocks([...blocksCopy])
    setFocusBlockId(newBlock.id)
  }

  const deleteBlock = (id: string): void => {
    const findIndex = blocks.findIndex(block => block.id === id)
    const blocksCopy = [...blocks]
    blocksCopy.splice(findIndex, 1)
    setBlocks([...blocksCopy])
    findIndex - 1 >= 0 && setFocusBlockId(blocksCopy[findIndex - 1].id)
  }

  const focusPrevBlock = (id: string): void => {
    const prevIndex = blocks.findIndex(block => block.id === id) - 1
    if (prevIndex >= 0) {
      setFocusBlockId(blocks[prevIndex].id)
    }
  }

  const focusNextBlock = (id: string): void => {
    const nextIndex = blocks.findIndex(block => block.id === id) + 1
    if (nextIndex < blocks.length) {
      setFocusBlockId(blocks[nextIndex].id)
    }
  }

  const changeContent = (id: string, content: string): void => {
    const findIndex = blocks.findIndex(block => block.id === id)
    blocks[findIndex].content = content
    setBlocks([...blocks])
  }

  return {
    loading,
    blocks,
    focusBlockId,
    setFocusBlockId,
    createInitBlock,
    createNewBlock,
    changeContent,
    deleteBlock,
    focusPrevBlock,
    focusNextBlock
  }
}
