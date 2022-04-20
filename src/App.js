import React from "react";
import {SafeAreaView} from "react-native"
import Container from "./container/container";
import style from "./container/style"

function App(){
  return(
    <SafeAreaView style={style.container}>
      <Container></Container>
    </SafeAreaView>
  )
}
export default App