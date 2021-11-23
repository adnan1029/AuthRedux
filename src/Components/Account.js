import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { AuthContext } from "./context";




const Account = ({ navigation }) => {


    const { signOut } = React.useContext(AuthContext);


    return (
        <View style={{
            flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#eaeaea",
        }}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => { signOut() }}
            >
                <Text style={{ fontSize: 25 }}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
};




export default Account;

const styles = StyleSheet.create({

    button: {
        marginTop: 30,
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 15,
        width: '70%',
        alignSelf: "center",
        borderRadius: 30
    }

});
