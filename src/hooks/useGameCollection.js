import { useState } from "react"

export default function useGameCollection() {
  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem("obc-game-lib")
    if(!storedGames) return []
    return JSON.parse(storedGames)
  })
  
  // Adicionar um novo jogo
  const addGame = ({ title, cover, historyTime }) => {
    const today =  new Date()
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

    const id = Math.floor(Math.random() * 1000000)
    const game = { 
      id, 
      title,
      historyTime,
      time: today.toLocaleDateString('pt-BR', options), 
      cover 
    }

    // setGames está pegando o state anterior para adicionar seu valor anterior e o ultimo jogo adicionado ao localStorage
    setGames(state => {
      const newState = [...state, game]
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  } 

  const removeGame = (id) => {
    setGames(state => {
      const newState = state.filter(game => game.id !== id)
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  }

  const editGame = (id) => {
    console.log(id)
  }

  return { games, addGame, removeGame, editGame }
}