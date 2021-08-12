import { useStorage } from '@vueuse/core'

type typePerson = 'PF' | 'PJ'

export const typePersonSelected = useStorage<typePerson>(
  'type-person-selected',
  'PF'
)
