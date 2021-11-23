import React from "react";
import { Button, Text, View, } from "react-native";
import axios from "axios";

const List = ({ navigation }) => {


    const baseUrl = 'https://jsonplaceholder.typicode.com/users';

    axios({
        method: 'get',
        url: `${baseUrl}`,
    }).then((response) => {
        console.log(response.data);
    });


    return (
        <View style={{
            flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#eaeaea",
        }}>
            <Text style={{ fontSize: 35, fontWeight: "bold" }}>List</Text>
            <Button
                title={'button me'}
            >



            </Button>
        </View>
    )
};


export default List;