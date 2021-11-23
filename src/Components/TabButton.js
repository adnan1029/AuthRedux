import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';



const TabButton = ({ label, click, mycolor,image }) => {

    return (
        <View style={{ flex: 1, backgroundColor: mycolor, height: 100,width:100, borderRadius: 100, flexDirection: 'column', justifyContent: 'center' }}>

            <TouchableOpacity
                onPress={click}
            >

                <Image
                    style={{ height: 30, width: 30, alignSelf: 'center', borderRadius: 15, marginBottom: 7 ,tintColor: mycolor == "darksalmon" ? "#FFFFFF" : "gray"}}
                    source={image}
                />
                <Text style={{ fontSize: 15, fontWeight: 'bold', alignSelf: 'center', color: mycolor == "gray" ? "#FFFFFF" : "darkcyan", padding: 5 }}>{label}</Text>
            </TouchableOpacity>


        </View>



    )
}


export default TabButton;                                                           