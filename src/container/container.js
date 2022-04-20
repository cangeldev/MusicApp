import React from "react";
import { FlatList, SafeAreaView } from "react-native"
import HeaderComp from "../header/headerComp";
import style from "./style";
import products from "../assets/music-data.json"
import Product from "../products/product";

function Container() {
  const renderProduct = ({ item }) => <Product product={item} />;
  const { container } = style
  return (
    <SafeAreaView style={container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        ListHeaderComponent={<HeaderComp />}>
      </FlatList>
    </SafeAreaView>
  )
}
export default Container