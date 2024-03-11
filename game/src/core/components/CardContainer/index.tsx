import {ReactNode} from 'react'
import { CardContainer } from './style'

type PropsType={
    children:ReactNode,
    width:string
}

const index = ({children,width}:PropsType) => {
  return (
    <CardContainer sx={{width:width}}>
        {children}
    </CardContainer>
  )
}

export default index