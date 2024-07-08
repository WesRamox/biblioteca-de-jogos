import PropTypes from "prop-types"

Game.propTypes = {
  title: PropTypes.string,
  time: PropTypes.string,
  cover: PropTypes.string,
  onRemove: PropTypes.func
}

export default function Game({ title, time, cover, onRemove }) {
  
  return(
    <div>
      <img src={cover} alt="" />
      <div>
        <h2>{title}</h2>
        <p>{time}</p>
        <button onClick={onRemove}>Remover</button>
      </div>
    </div>
  )
}