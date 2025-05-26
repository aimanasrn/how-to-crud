import React from 'react'

const ModalForm = ({isOpen, onClose, mode, OnSubmit}) => {
  return (
    <>
    {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
    <dialog id="my_modal_3" className="modal" open={isOpen}>
      <div className="modal-box">
        <h3 className='font-bold text-lg py-4'>{mode === 'edit' ? 'Edit Client' : 'Client Delete'}</h3>
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <label className='input input-bordered my-4 flex items-center gap-2 w-full'>
            Name
            <input type="text" className='grow' placeholder='Daisy'/>
          </label>
          <label className='input input-bordered my-4 flex items-center gap-2 w-full'>
            Email
            <input type="email" className='grow' placeholder='Daisy'/>
          </label>
          <label className='input input-bordered my-4 flex items-center gap-2 w-full'>
            Job
            <input type="text" className='grow' placeholder='Daisy'/>
          </label>
          <div className="flex mb-4 justify-between gap-2">
            <label className='input input-bordered my-4 flex items-center gap-2 w-full'>
              Number
              <input type="number" className='grow' placeholder='Daisy'/>
            </label>
            <select className='select select-bordered mt-4 w-full max-w-xs'>
              <option value="">Inactive</option>
              <option value="">Active</option>
            </select>
          </div>

          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
          <button className="btn btn-success">{mode === 'edit' ? 'Save Changes' : 'Add Client'}</button>
        </form>
      </div>
    </dialog>
    </>
  )
}

export default ModalForm