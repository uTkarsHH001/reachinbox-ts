import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function DeleteMail({isDeleting, setIsDeleting}) { 
    
    const closeModal = () => setIsDeleting(false);
    const handleDelete = () => {
        closeModal();
    };

    return (
        <> 
            <div className={`w-screen ${!isDeleting && `hidden`} h-screen bg-slate-400 opacity-50 fixed top-0 left-0 filter blur-lg`}></div>
            <Modal
                isOpen={isDeleting}
                onRequestClose={closeModal}
                contentLabel="Delete Email Modal"
                className="w-screen h-screen fixed top-0 flex justify-center items-center" 
                overlayClassName="overlay"
            >
                <div className="bg-dark-bg text-dark-text p-4 lg:p-8 text-center rounded-lg">
                    <p className="text-2xl my-2 font-semibold">Are you sure?</p>
                    <p className="text-lg my-2">Your selected email will be deleted.</p>
                    <div className="my-2">
                        <button onClick={closeModal} className="px-4 py-2 bg-dark-main mx-2">
                            Cancel
                        </button>
                        <button onClick={handleDelete} className="px-4 py-2 bg-[#A91919] mx-2">
                            Delete
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
