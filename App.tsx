// importing core
import { Text, View } from 'react-native';

// importing styles
import { styles } from './styles';

// importing hooks
import {useState} from 'react'

//importing rows and columns
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default function App() {
  const [matrix,setMatrix] = useState([
    [' 1','2 ','3 '],
    [' ',' ',' '],
    [' ',' ',' '],
  ])
  return (
    <View>
        <Text>Tic-Tac-Toe</Text>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Rows data={matrix}/>
        </Table>
    </View>
  );
}


