import React from "react";
import { View, TextInput, Button, StyleSheet } from 'react-native'

export default function CarInputComponent() {
    return (
        <View>
            <TextInput placeholder="Marca do Carro"></TextInput>
            <TextInput placeholder="Modelo do Carro"></TextInput>
            <Button title="Adicionar"></Button>
        </View >
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1
    }
});