import { useReducer } from 'react'

interface TopHeaderTabNavItems {
  [index: string]: TabNavItem
  profile: TabNavItem
  social: TabNavItem
  timeline: TabNavItem
  calendar: TabNavItem
}

interface TabNavItem {
  name: string
  isSelect: boolean
}

const defaultNavItems: TopHeaderTabNavItems = {
  profile: { name: '프로필', isSelect: true },
  social: { name: '소셜', isSelect: false },
  timeline: { name: '타임라인', isSelect: false },
  calendar: { name: '캘린더', isSelect: false }
}

interface TopHeaderTabNavItemsAction {
  type: string
}

const setUnSelect = (navItems: TopHeaderTabNavItems): void => {
  for (const key of Object.keys(navItems)) {
    navItems[key].isSelect = false
  }
}

const reducer = (navItems: TopHeaderTabNavItems, action: TopHeaderTabNavItemsAction): TopHeaderTabNavItems => {
  setUnSelect(navItems)
  switch (action.type) {
    case 'profile':
      navItems.profile.isSelect = true
      return { ...navItems }
    case 'social':
      navItems.social.isSelect = true
      return { ...navItems }
    case 'timeline':
      navItems.timeline.isSelect = true
      return { ...navItems }
    case 'calendar':
      navItems.calendar.isSelect = true
      return { ...navItems }
    default:
      return defaultNavItems
  }
}

interface TopHeaderTavNavItems {
  tabNavItems: TopHeaderTabNavItems
  dispatch: React.Dispatch<TopHeaderTabNavItemsAction>
}

export default function useTopHeaderTabNavItems (): TopHeaderTavNavItems {
  const [tabNavItems, dispatch] = useReducer(reducer, defaultNavItems)

  return { tabNavItems, dispatch }
}
