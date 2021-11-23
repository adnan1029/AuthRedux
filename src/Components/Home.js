import React from "react";
import {
    StyleSheet, Text, TextInput, View, Image
    , TouchableOpacity
} from "react-native";


const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../assets/birthday.png')}
            />
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea",
        justifyContent: "center",
        alignItems: "center"
    },
    tinyLogo: {
        width: 150,
        height: 150,
    }
});

export default Home;