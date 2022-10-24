import { existsHorizontalVictory } from "./existsHorizontalVictory"
import { existsVerticalVictory } from "./existsVerticalVictory"
import { existsDiagonalVictory } from "./existsDiagonalVictory"

export const xWon = (matrix: string[][]) =>{
    if(existsHorizontalVictory(matrix,'X')){
      return true
    }
    else if(existsVerticalVictory(matrix,'X')){
      return true
    }
    else if(existsDiagonalVictory(matrix,'X')){
      return true
    }
    else{
      return false
    }
  }