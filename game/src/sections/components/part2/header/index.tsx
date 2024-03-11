import React from 'react'
import Item from './headreItem'
import { Container } from './style'
import * as Icons from '@/core/config/import/icons'
import { UseSelector, useSelector } from 'react-redux'
import * as selectors from '@/core/config/import/selectors'

const ChartHeader = () => {
    const name=useSelector(selectors.name)
    const time = new Date(Date.now()).getHours() +
    ":" +
    new Date(Date.now()).getMinutes()

  return (
    <Container>
        <Item title={name ? '1.000':''} icon={<Icons.MilitaryTechIcon className='icon'/>}/>
        <Item title={name ? name:''} icon={<Icons.PersonIcon className='icon'/>}/>
        <Item title={name ? time:''} icon={<Icons.AccessTimeIcon className='icon'/>}/>
    </Container>
  )
}

export default ChartHeader