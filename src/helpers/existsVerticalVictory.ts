export const existsVerticalVictory = (matrix: string[][], player: string) =>{
    if ((matrix[0][0] == matrix[1][0] && matrix[0][0] == matrix[2][0] && matrix[0][0] != '_') || (matrix[0][1] == matrix[1][1] && matrix[0][1] == matrix[2][1] && matrix[0][1] != '_') || (matrix[0][2] == matrix[1][2] && matrix[0][2] == matrix[2][2] && matrix[0][2] != '_') ){
      return true
    }
    else{
      return false
    }
  }