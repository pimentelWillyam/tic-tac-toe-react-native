import { xWon } from "./xWon"
import { yWon } from "./yWon"

export const checkWinner = (matrix: string[][]) =>{
    if (xWon(matrix)){
      alert('Player X has won!')
      return true
    }
    else if (yWon(matrix)){
      alert('Player Y has won!')
      return true
    }
    else{
      return false
    }
  }