import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CarCountComponent () {
    const { carros } = useContext(CarContext)
    const {carCount, setCarCount } = useState[0]
    
    useEffect ( () => {
        setCarCount(carros.length);
    }, [carros])

    return (
        <View>
            <Text style={estilo.titulo}>{ carCount }</Text>
        </View>
    )
}

const estilo = StyleSheet.create({
    titulo: {
        fontSize: 20
    }
})