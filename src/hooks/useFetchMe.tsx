import { useLayoutEffect, useState } from 'react'
import MemberApis from '@apis/memberApis'

export default function useFetchMe (): [any, any, React.Dispatch<any>] {
  const [meInfo, setMeInfo] = useState<any>({})
  const [memberInfo, setMemberInfo] = useState<any>({})

  useLayoutEffect(() => {
    void MemberApis.getMemberInfo().then(data => {
      setMeInfo(data)
      setMemberInfo(data)
    })
  }, [])

  return [meInfo, memberInfo, setMemberInfo]
}
