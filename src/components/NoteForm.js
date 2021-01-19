import React, {useEffect, useRef} from 'react'

const NoteForm = ({note, setNote, save}) => {

  const textArea = useRef();

  useEffect(() => {
    if (textArea.current) {
      textArea.current.focus()
    }
  }, [note.id]);

  return (
    <form className="row" onSubmit={(e) => {
      e.preventDefault();
      if (note.note) {
        save()
      }
    }}>
      <div className="col-12 form-group">
        <textarea
          className="form-control border-secondary"
          autoFocus={true}
          name="note"
          cols="30"
          rows="5"
          ref={textArea}
          value={note.note || ""}
          onChange={(e) => {setNote({...note, note: e.target.value})}}
          onMouseOver={(e) => {e.target.focus()}}
        />
      </div>
      <div className="col-12 form-group text-right">
        <button className="btn btn-outline-secondary">Save</button>
      </div>
    </form>
  )
};

export default NoteForm