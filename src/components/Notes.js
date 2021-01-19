import React        from 'react'
import { NoteForm } from "./index";
import { useNotes, useButton } from "../hooks";

const Notes = () => {

  const {notes, note, setNote, save, deleteNote, clearNotes, inUse, setInUse} = useNotes();

  const {buttonRegister} = useButton();

  return (
    <div className="row m-0">

      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <NoteForm note={note} setNote={(value) => {setInUse(previous => ({...previous, setNote: true})); setNote(value)}} save={save}/>
        <div className="row pb-4 overflow-auto" style={{maxHeight: "64vh"}}>
          <code className="color-transition pr-2 col-12 p-0">
            <span className="text-warning">const</span> <span className="text-secondary">{"{"}</span>
            <br/><span className={notes.length > 0 ? "text-primary" : ""}>notes</span>
            , <span className={note.note ? "text-primary" : ""}>note</span>
            , <span className={inUse.setNote ? "text-primary" : ""}>setNote</span>
            , <span className={inUse.save ? "text-primary" : ""}>save</span>
            , <span className={inUse.deleteNote ? "text-primary" : ""}>deleteNote</span>
            <br/><span className="text-secondary">{"}"}</span> = <span className="text-info">useNotes();</span>
            <br/>
            {notes.length > 0 && <span><br/>console.log(notes);<br/>{JSON.stringify(notes)};<br/></span>}
            {note.note && <span><br/>console.log(note);<br/>{JSON.stringify(note)};<br/></span>}
          </code>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-md-8 col-lg-9 border">
        <h4 className="text-primary">Notes <span className="btn btn-sm btn-outline-warning" onClick={() => {clearNotes()}}>Clear</span></h4>
        <div className="row m-0 overflow-auto" style={{maxHeight: "80vh"}}>
          {notes.map((n, index) => (
            <div className="col-12 mt-3 mb-2 text-secondary border-bottom" style={{minHeight: "40px"}} key={index}>
              <button
                className="font-weight-bold position-absolute btn btn-outline-danger all-transition"
                style={{top: "-4px", right: "15px", transform: "rotate(45deg)", padding: "4px 12px 7px"}}
                onClick={() => {
                  if (n.id === note.id) {
                    setInUse(previous => ({...previous, setNote: false}));
                    setNote({});
                  }
                  deleteNote(n.id)
                }}
                ref={buttonRegister}>
                D
              </button>
              <button
                className="font-weight-bold position-absolute btn btn-outline-secondary all-transition"
                style={{top: "-4px", right: "55px", transform: "rotate(45deg)", padding: "4px 13px 7px"}}
                onClick={() => {
                  setInUse(previous => ({...previous, setNote: true}));
                  setNote(n)
                }}
                ref={buttonRegister}>
                E
              </button>
              <div style={{maxWidth: "85%"}} dangerouslySetInnerHTML={{__html: n?.note.replace(/\n/g, "<br>").trim().replace(/^\w/, v => v.toUpperCase())}}/>
              <small className="text-info">{new Date(n.id).toLocaleString()}</small>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
};

export default Notes