import Game from "./components/Game"
import NewGameForm from "./components/NewGameForm"
import useGameCollection from "./hooks/useGameCollection"

export default function App() {
  const { games, addGame, removeGame, editGame } = useGameCollection()

  return(
    <div id="app">
      <h1>Biblioteca de Jogos</h1>
      <NewGameForm addGame={addGame} />
      <div className="games">
        {games.length > 0
         ? games.map((game) => (
            <Game 
              key={game.id}
              title={game.title}
              time={game.time}
              cover={game.cover}
              historyTime={game.historyTime}
              onRemove={() => removeGame(game.id)}
              onEdit={() => editGame(game.id)}
            />
        )) 
        : (
           <h2 style={{marginTop: "2rem"}}>Nenhum jogo cadastrado na biblioteca!</h2>
          )}
      </div>
    </div>
  )
}