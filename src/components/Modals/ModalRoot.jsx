import React from 'react'
import { useSelector } from 'react-redux'
import { getCurrentModal } from '../../redux/getters/modals.getters'

import ModalDelete from './ModalDelete'

const MODALS = {
  SIMPLE_DELETE: ModalDelete
}

const ModalRoot = () => {
  const currentModal = useSelector(getCurrentModal)

  if (!currentModal) return <></>

  const CurrentModal = MODALS[currentModal.name]

  if (!CurrentModal) {
    console.error(`Not found modal with name "${currentModal.name}"`)
    return <></>
  }

  return <CurrentModal {...currentModal.props} />
}

export default ModalRoot;