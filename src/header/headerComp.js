import React from "react";
import { View, TextInput } from "react-native"
import style from "./style";

function HeaderComp() {
    const { HeaderTextInput } = style
    return (
        <View>
            <TextInput
                style={HeaderTextInput}
                placeholder={"Search..."}
                placeholderTextColor={"#ccd0d3"}
                onChangeText={(text) => (console.log(text))}>
            </TextInput>
        </View>
    )
}
export default HeaderComp