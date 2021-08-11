import React from "react";
import { View, Text, Image } from 'react-native';
import { Icons } from './../constant/index'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from './../components/Home/Home'
import Cart from './../components/Cart/Cart'
const Tab = createBottomTabNavigator();
const tabOptions = {
    showLabel: false,
    style: {
        height: "9%",
    },
};
const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? '#15a085' : '#8B8B98';
                    switch (route.name) {
                        case "Home":
                            return (
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Image
                                        source={Icons.Home}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 25,
                                            height: 25
                                        }}
                                    />
                                </View>
                            );
                        // case "Square":
                        //     return (
                        //         <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        //             <Image
                        //                 source={Icons.Menu}
                        //                 resizeMode="contain"
                        //                 style={{
                        //                     tintColor: tintColor,
                        //                     width: 25,
                        //                     height: 25
                        //                 }}
                        //             />
                        //         </View>
                        //     );
                        case "Cart":
                            return (
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Image
                                        source={Icons.Shopping}
                                        resizeMode="contain"
                                        style={{
                                            tintColor: tintColor,
                                            width: 25,
                                            height: 25
                                        }}
                                    />
                                </View>
                            );


                    }
                }
            })}

        >
            <Tab.Screen
                name="Home"
                component={Home}
            />
            {/* <Tab.Screen
                name="Square"
                component={Cart}
            /> */}
            <Tab.Screen
                name="Cart"
                component={Cart}
            />
        </Tab.Navigator>
    );
};

export default Tabs;