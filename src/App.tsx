// importing core
import { Text, View } from 'react-native';

// importing styles
import { styles } from './styles';

// importing hooks
import {useState,useEffect} from 'react'

//importing helpers
import {checkWinner} from './helpers/checkWinner'

//importing handlers

export default function App() {
  const [matrix,setMatrix] = useState([
    ['_','_','_'],
    ['_','_','_'],
    ['_','_','_'],
  ])

  const alterMatrix = (row: number, col: number, setMatrix: React.Dispatch<React.SetStateAction<string[][]>>) =>{
    let copyMatrix = matrix
    copyMatrix[row][col] = currentPlayer
    setMatrix(copyMatrix)
  }

  const changeCurrentPlayer = (currentPlayer: string, setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>) =>{
    if (currentPlayer == 'X'){
      setCurrentPlayer('O')
    }
    else{
      setCurrentPlayer('X')
    }
  }

  const handlePress = (row: number, col: number, setMatrix: React.Dispatch<React.SetStateAction<string[][]>>, changeCurrentPlayer: (setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>) => void ) =>{
    alterMatrix(row,col,setMatrix)
    changeCurrentPlayer(setCurrentPlayer)
  }

  const [currentPlayer,setCurrentPlayer] = useState('X')
  
  useEffect(() =>{
    checkWinner(matrix)
  },matrix)
  return (
    <View style={styles.container}>
      <View style={styles.top}>Tic Tac Toe</View>
      <View style={styles.row}>
        <Text style={styles.cel} onPress={() =>{handlePress(0,0,setMatrix,changeCurrentPlayer)}}>
          {matrix[0][0]}
        </Text>
        <Text style={styles.cel} onPress={() =>{handlePress(0,1,setMatrix,changeCurrentPlayer)}}>
          {matrix[0][1]}
        </Text>
        <Text style={styles.cel} onPress={() =>{handlePress(0,2,setMatrix,changeCurrentPlayer)}}>
          {matrix[0][2]}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cel} onPress={() =>{handlePress(1,0,setMatrix,changeCurrentPlayer)}}>
          {matrix[1][0]}
        </Text>
        <Text style={styles.cel} onPress={() =>{handlePress(1,1,setMatrix,changeCurrentPlayer)}}>
          {matrix[1][1]}
        </Text>
        <Text style={styles.cel} onPress={() =>{handlePress(1,2,setMatrix,changeCurrentPlayer)}}>
          {matrix[1][2]}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cel} onPress={() =>{handlePress(2,0,setMatrix,changeCurrentPlayer)}}>
          {matrix[2][0]}
        </Text>
        <Text style={styles.cel} onPress={() =>{handlePress(2,1,setMatrix,changeCurrentPlayer)}}>
          {matrix[2][1]}
        </Text>
        <Text style={styles.cel} onPress={() =>{handlePress(2,2,setMatrix,changeCurrentPlayer)}}>
          {matrix[2][2]}
        </Text>
      </View>
    </View>
  );
}


