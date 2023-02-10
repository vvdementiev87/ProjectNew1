import React from 'react'
import ReduxToastrLib from 'react-redux-toastr'

type Props = {}

const ReduxToast = (props: Props) => {
  return (
    <ReduxToastrLib newestOnTop={false}
    preventDuplicates
    progressBar
    closeOnToastrClick
    timeOut={4000}
    transitionIn='fadeIn'
    transitionOut='fadeOut'/>
  )
}