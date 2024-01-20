
import { TextInput } from '../../../shared/components/ui'
import { SearchIcon } from '../../../shared/components/icons'

export const HeaderSearch = () => {
  return (
    <div>
      <TextInput placeholder='поиск' icon={<SearchIcon></SearchIcon>}/>
    </div>
  )
}
