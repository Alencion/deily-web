interface MemberApisInterface {
  getMemberInfo: () => Promise<any>
}

const fakeMemberApis: MemberApisInterface = {
  getMemberInfo: async (): Promise<any> => await new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve({ avartarUrl: 'https://avatars.githubusercontent.com/u/15667978?v=4', username: '이밍고', description: 'Be 개발하기 좋아하고 토이 프로젝트를 즐겨하는 개발자입니다.', followeeCount: 123456, pages: [{ title: 'JVM OOME 삽질기#1' }] })
    }, 1000)
  })
}

const MemberApis = fakeMemberApis
export default MemberApis
