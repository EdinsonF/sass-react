import React from 'react'

function AddNewEntry() {
  return (
    <div className="entries_box">
        <div className="entries_title">
          <h3>Add new entry</h3>
        </div>
        <form className="entries_form">
        
          <input 
          type="text" 
          placeholder="Photo URL" 
          className="entries_input mt-10"
        />
        <input 
          type="text" 
          placeholder="Title" 
          className="entries_input mt-10"
        />
        <textarea name="description" id=""  className="entries_textarea"></textarea>
        <button type="submit" className="btn_add mt-10">Add entry</button>
        </form>

      
      </div>
  )
}

export default AddNewEntry
