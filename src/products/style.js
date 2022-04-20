import { StyleSheet, Dimensions } from "react-native"
export default StyleSheet.create({
    container: {
        height: Dimensions.get('window').height / 7,
        borderBottomWidth: 1,
        borderColor: "#eaeeef",
        margin: 8,
        flexDirection: "row"
    },
    image: {
        width: Dimensions.get('window').width / 3.9,
        height: Dimensions.get('window').height / 8,
        borderRadius: 50,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black"
    },
    view: {

        marginLeft: 15,
        justifyContent: "center",
        width: "70%"
    },
    artist: {
        color: "black",
        fontSize: 12
    },
    textView: {
        flexDirection: "row",
    },
    year: {
        marginLeft: 11,
        fontSize: 10,
        marginTop: 2,
        color: "grey"
    },
    isSoldOut: {
        marginRight: 10,
        fontSize: 12,
        color: "red",
        borderWidth: 1,
        borderColor: "red"
    },
    innerContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    }
})