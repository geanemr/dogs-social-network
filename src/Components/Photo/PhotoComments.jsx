import React from 'react'
import { UserContext } from '../../UserContext'
import PhotoCommentsForm from './FotoCommentsForm'

export const PhotoComments = (props) => {
  const {login} = React.useContext(UserContext)
  
  return <div>
    { login && <PhotoCommentsForm id={props.id}/>}
  </div>
  
}

