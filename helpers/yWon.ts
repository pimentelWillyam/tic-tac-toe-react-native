import { existsHorizontalVictory } from "./existsHorizontalVictory"
import { existsVerticalVictory } from "./existsVerticalVictory"
import { existsDiagonalVictory } from "./existsDiagonalVictory"

export const yWon = (matrix: string[][]) =>{
    if(existsHorizontalVictory(matrix,'Y')){
      return true
    }
    else if(existsVerticalVictory(matrix,'Y')){
      return true
    }
    else if(existsDiagonalVictory(matrix,'Y')){
      return true
    }
    else{
      return false
    }
  } 