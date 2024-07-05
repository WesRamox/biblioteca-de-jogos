import { useState } from "react"
import PropTypes from "prop-types"
import TextInput from "./TextInput"

NewGameForm.propTypes = {
  addGame: PropTypes.func
}

export default function NewGameForm({ addGame }) {
  const [title, setTitle] = useState("")
  const [cover, setCover] = useState("")

  // handleSubmit é a função que adiciona as funcionalidades ao enviar o formulario.
  const handleSubmit = (ev) => {
    ev.preventDefault()
    addGame({ title, cover })
    setTitle("")
    setCover("")
  }

  return(
    <form onSubmit={handleSubmit}>
      <TextInput id="title" label="Titulo: " value={title} setValue={setTitle}/>
      <TextInput id="cover" label="Capa: " value={cover} setValue={setCover}/>
      <button type="submit">Adicionar a biblioteca</button>
    </form>
  )
}