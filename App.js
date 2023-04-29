import { useState } from 'react'
import { 
  Button,
  Text,
  View 
} 
from "react-native";

export default function App() {
  
  const [texto, setTexto] = useState(0)
  
  return(
    <View style={{width: '100%', alignItems: 'center', padding: 20}}>
      <Text style={{width: '80%', borderColor: '#CCC', borderWidth: 1, textAlign: 'center',             backgroundColor: "#DDD", padding: 8, borderRadius: 8}}>
          {texto}
      </Text>
      <Button style={{width: '100%'}}
        title="OK"
        onPress={() => setTexto(texto + 1)}
      />
      <Button style={{width: '100%'}}
        title="Resetar"
        onPress={() => setTexto(0)}
      />
    </View>
  )
}

