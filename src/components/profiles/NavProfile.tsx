import styled, { ThemeProps } from 'styled-components'

import avartarEmptyIcon from '@assets/avatar-empty-512.png'
import editIcon from '@assets/edit-512.png'
import { IconTextButton } from '@components/buttons/IconButton'
import Skeleton from '@components/skeletons'
// import { IconText } from '@components/texts/IconText'
import { Theme } from '@constants/themes'

interface Props {
  isMe: boolean
  memberInfo?: any
}

export default function NavProfile ({ isMe, memberInfo }: Props): JSX.Element {
  return (
    <ProfileStyledContainer>
      {memberInfo.avartarUrl ? <img src={memberInfo.avartarUrl} alt={avartarEmptyIcon} /> : <Skeleton width={'140px'} height={'140px'} isRound={true} />}
      <ProfileInfoStyledContainer>
        <NameStyledContainer>
          {memberInfo.username ?
            <>
              <h3 className='profile-username'>{memberInfo.username}</h3>
              {/* <FolloweeCountStyledContainer iconProps={{ src: userIcon, alt: '유저 아이콘' }} >{memberInfo.followeeCount}</FolloweeCountStyledContainer> */}
            </>
            : <Skeleton width={'200px'} height={'20px'} />}
        </NameStyledContainer>
        {isMe && <EditStyledButton iconProps={{ src: editIcon, alt: '수정 아이콘' }} >프로필 수정</EditStyledButton>}
        <DescriptionStyledContainer>{memberInfo.description || <Skeleton width='200px' height='40px'/>}</DescriptionStyledContainer>
      </ProfileInfoStyledContainer>
    </ProfileStyledContainer>
  )
}

const ProfileStyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  & > img {
    width: 140px;
    border-radius: 50%;
  }
`

const ProfileInfoStyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
`

const NameStyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;

  width: 100%;
  margin-bottom: 16px;

  & > .profile-username {
    ${({ theme }: ThemeProps<Theme>) => theme.font({ size: theme.fontSizes.header3, weight: '700', color: theme.colors.black.light })}
  }
`

// const FolloweeCountStyledContainer = styled(IconText)`
//   && {
//     display: flex;
//     align-items: center;

//     line-height: ${({ theme }: ThemeProps<Theme>) => theme.fontSizes.small};
//     ${({ theme }: ThemeProps<Theme>) => theme.font({ size: theme.fontSizes.small, family: theme.fontFamilies.Jua, color: theme.colors.grey })}

//     & > img {
//       width: 14px;
//       height: 14px;
//     }
//   }
// `

const EditStyledButton = styled(IconTextButton)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 35px;
    border: 1px solid #77AAD2;
    border-radius: 3px;

    background: ${({ theme }: ThemeProps<Theme>) => theme.colors.white};
    
    ${({ theme }: ThemeProps<Theme>) => theme.font({ size: theme.fontSizes.small, family: theme.fontFamilies.NanumGothic, weight: '700', color: theme.colors.primary.light })};

    & > img {
      width: 20px;
      height: 20px;
    }
  }
`

const DescriptionStyledContainer = styled.div`
  margin-top: 12px;

  ${({ theme }: ThemeProps<Theme>) => theme.font({ size: theme.fontSizes.small, family: theme.fontFamilies.NanumGothic, color: theme.colors.black.light })};
`
