import PropTypes from "prop-types"

Game.propTypes = {
  title: PropTypes.string,
  time: PropTypes.string,
  cover: PropTypes.string,
  historyTime: PropTypes.string,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func
}

export default function Game({ title, time, cover, historyTime, onRemove, onEdit }) {
  
  return(
    <div>
      <img src={cover} alt="" />
      <div>
        <h2>{title}</h2>
        <p>{time}</p>
        <p>{historyTime} Horas jogadas</p>
        <div style={{display: "flex", gap: "1rem"}}>
          <button onClick={onRemove}>Remover</button>
          <button onClick={onEdit}>Editar</button>
        </div>
      </div>
    </div>
  )
}