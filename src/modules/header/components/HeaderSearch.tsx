
import { TextInput } from '../../../components/ui'
import { SearchIcon } from '../../../components/icons'

export const HeaderSearch = () => {
  return (
    <div>
      <TextInput placeholder='поиск' icon={<SearchIcon></SearchIcon>}/>
    </div>
  )
}
