import React from 'react';
import Modal from 'react-modal';

// Set this to your app's root element
Modal.setAppElement('#root');

const ContactModal = ({ modalIsOpen, setIsOpen }) => {

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      className='w-full h-full'
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel='Contact Me Modal'
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
      }}
    >
      <div className='relative flex flex-col items-center justify-center max-w-lg gap-4 bg-base shadow-xl text-white rounded-lg font-sans p-6 w-5/6 mx-auto my-4'>
        <button onClick={closeModal} className='absolute top-2 right-2'>
          <img src='/x.svg' alt="Close" className='flex-shrink h-6 w-6'/>
        </button>
          <form className='w-5/6'>
            <div className='flex flex-col'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input id='email' type='email' placeholder='Email' className='flex-shrink appearance-none h-12 pl-4 pr-4 text-base leading-6 border border-transparent rounded-lg' required />
            </div>
            <div className='flex flex-col'>
              <label className='label'>
                <span className='label-text'>Subject</span>
              </label>
              <input id='subject' type='subject' placeholder='Subject' className='flex-shrink appearance-none h-12 pl-4 pr-4 text-base leading-6 border border-transparent rounded-lg' required />
            </div>
            <div className='flex flex-col'>
              <label className='label'>
                <span className='label-text'>Message</span>
              </label>
              <textarea id='message' placeholder='Write something here...' className='flex-shrink appearance-none h-40 pl-4 pr-4 text-base leading-6 border border-transparent rounded-lg' required />
            </div>
            <div className='flex flex-col mt-6'>
            <button type="button" className="px-8 py-3 font-semibold rounded-full bg-primary text-white">Send</button>
            </div>
          </form>
      </div>
    </Modal>
  );
}

export default ContactModal;
