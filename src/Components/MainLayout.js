import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity, TouchableWithoutFeedback, Image, FlatList, Touchable, image
} from 'react-native';
import TabButton from './TabButton';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Map from './Map';
import Account from './Account';
import List from './List';




const MainLayout = ({ drawerAnimationStyle, setSelectedTab, selectedTab, navigation }) => {

    const [component, setcomponet] = useState(<Home />)


    const [homeColor1, setHomeColor1] = useState('#FFFFFF')
    const [homeColor2, setHomeColor2] = useState('#FFFFFF')
    const [homeColor3, setHomeColor3] = useState('#FFFFFF')
    const [homeColor4, setHomeColor4] = useState('#FFFFFF')


    return (
        < View style={{ flex: 1, justifyContent: 'flex-end' }}>
            {component}
            {/* Bottom tab */}
            <View style={{
                height: 130, flexDirection: 'row', justifyContent: 'space-around', 
            }}>
                <TabButton
                    label='HOME'
                    click={() => { setcomponet(<Home />), setHomeColor1('darksalmon'), setHomeColor2('#FFFFFF'), setHomeColor3('#FFFFFF'), setHomeColor4('#FFFFFF') }}
                    isFocuced={true}
                    mycolor={homeColor1}
                    image={require('../assets/home.png')}
                />
                <TabButton
                    label='MAP'
                    click={() => { setcomponet(<Map />), setHomeColor2('darksalmon'), setHomeColor3('#FFFFFF'), setHomeColor1('#FFFFFF'), setHomeColor4('#FFFFFF') }}
                    isFocuced={false}
                    mycolor={homeColor2}
                    image={require('../assets/list.png')}
                />
                <TabButton
                    label='LIST'
                    click={() => { setcomponet(<List />), setHomeColor3('darksalmon'), setHomeColor4('#FFFFFF'), setHomeColor2('#FFFFFF'), setHomeColor1('#FFFFFF') }}
                    isFocuced={false}
                    mycolor={homeColor3}
                    image={require('../assets/map.png')}
                />
                <TabButton
                    label='ACCOUNT'
                    click={() => { setcomponet(<Account />), setHomeColor4('darksalmon'), setHomeColor3('#FFFFFF'), setHomeColor2('#FFFFFF'), setHomeColor1('#FFFFFF') }}
                    isFocuced={false}
                    mycolor={homeColor4}
                    image={require('../assets/account.png')}
                />
            </View>

        </View>
    )
};


export default MainLayout;