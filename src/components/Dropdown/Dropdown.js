import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { useStores } from "Hooks/useHooks";

const friendOptions = [
  {
    key: 'Cases',
    text: 'Cases',
    value: 'Cases',
  },
  {
    key: 'Deaths',
    text: 'Deaths',
    value: 'Deaths',
  },
  {
    key: 'Recovered',
    text: 'Recovered',
    value: 'Recovered',
  },
]

const DropdownType = () => {
  const { selectTypeStore } = useStores();

console.log(selectTypeStore.selectType)
  return ( 
    <Dropdown
      placeholder='Select Friend'
      fluid
      selection
      options={friendOptions}
      onChange={( e , { value })=>{selectTypeStore.handleChange(value)}}
    />
  )
}
 
export default DropdownType
