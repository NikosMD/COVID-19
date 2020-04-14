import React from 'react'
import { Dropdown } from 'semantic-ui-react'

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

const DropdownType = () => (
  <Dropdown
    placeholder='Select Friend'
    fluid
    selection
    options={friendOptions}
  />
)

export default DropdownType
