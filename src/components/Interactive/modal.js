//~ DEPENDENCIES
import React, { useEffect } from 'react'
import ReactModal from 'react-modal' // https://reactcommunity.org/react-modal/

//~ COMPONENTS

//~ MEDIA

//~ MISCELLANEOUS

ReactModal.setAppElement('#___gatsby')

const Modal = ({ isOpen, setClose, children, className, customStyles }) => {
  //? VARIABLES - STATES - PROPS - REFS

  //? CONTEXT

  //? SANITY DATA

  //? FUNCTIONS

  //? EFFECTS
    useEffect(() => {
      if (isOpen) document.body.style.overflow = 'hidden'
      else document.body.style.overflow = 'unset'
    })

  return (
      <ReactModal
        className={className}
        isOpen={isOpen}
        onRequestClose={() => setClose()}
        style={{
          overlay: { overflow: 'auto', backgroundColor: 'rgba(0, 0, 0, 0.50)', zIndex: '99999' },
          content: customStyles,
        }}
      >
        {children}
      </ReactModal>
  )
}
export default Modal

// <Modal isOpen={true} setClose={() => setModal(false)} customStyles={modalStyles}> </Modal>
// const modalStyles = {
//   border: 'none',
//   padding: '0',
//   overflow: 'hidden',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   background: 'none',
// }