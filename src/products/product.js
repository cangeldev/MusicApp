import React from "react";
import { View, Text, Image } from "react-native"
import style from "./style"
function Product({ product }) {
    const { image, container, title, view, artist, year, textView, isSoldOut, innerContainer } = style
    return (
        <View style={container}>
            <Image style={image} source={{ uri: product.imageUrl }} />
            <View style={view}>
                <Text style={title}>{product.title}</Text>
                <View style={innerContainer}>
                    <View style={textView}>
                        <Text style={artist}>{product.artist}</Text>
                        <Text style={year}>{product.year}</Text>
                    </View>
                    {product.isSoldOut && (
                        <Text style={isSoldOut}>TÜKENDİ</Text>
                    )}
                </View>

            </View>
        </View >
    )
}
export default Product