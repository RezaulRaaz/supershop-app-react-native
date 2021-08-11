import React,{useState} from 'react'
import { View, Image, Text, ScrollView, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


const { width, height } = Dimensions.get("window")


const Cart = ({ navigation }) => {
    const [value, setValue] = useState(1);
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.header}>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: 100 }}><Icon name="angle-left" style={styles.iconHeader} size={30} /></TouchableOpacity>
                    {/* <Icon name="heart" style={styles.iconHeader} size={24} /> */}
                </View>
            </SafeAreaView>
            <ScrollView style={{ marginTop: -25}}>
                <View style={styles.contentWrapper}>
                    <View style={{ width: width / 5, height: 100 }}>
                        <Image style={{ width: '100%', height: 100, alignItems: "center" }} source={require('./../../assets/images/horlicks.png')} resizeMode="center" />
                    </View>
                    <View style={{ width: (width / 2) + 20, height: 100, paddingTop: 5,justifyContent:'center' }}>
                        <Text style={{fontSize:14}}>Carnations Milk 379ml Carnations Milk 379ml</Text>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>$30</Text>
                    </View>
                    <View style={{ width: (width / 8), height: 100,justifyContent:'space-around'}}>
                        <TouchableOpacity onPress={()=>{setValue(value-1)}}  style={styles.buttonQty}>
                            <Icon name="minus" size={14} style={styles.iconHeader} />
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.qtyWrapper}>{value}</Text>
                        </View>
                        <TouchableOpacity onPress={()=>{setValue(value+1)}}  style={styles.buttonQty}>
                            <Icon name="plus" size={14} style={styles.iconHeader} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.contentWrapper}>
                    <View style={{ width: width / 5, height: 100 }}>
                        <Image style={{ width: '100%', height: 100, alignItems: "center" }} source={require('./../../assets/images/milk.png')} resizeMode="center" />
                    </View>
                    <View style={{ width: (width / 2) + 20, height: 100, paddingTop: 5,justifyContent:'center' }}>
                        <Text style={{fontSize:14}}>Carnations Milk 379ml</Text>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>$5</Text>
                    </View>
                    <View style={{ width: (width / 8), height: 100,justifyContent:'space-around'}}>
                        <View style={styles.buttonQty}>
                            <Icon name="minus" size={14} style={styles.iconHeader} />
                        </View>
                        <View>
                            <Text style={styles.qtyWrapper}>1</Text>
                        </View>
                        <View style={styles.buttonQty}>
                            <Icon name="plus" size={14} style={styles.iconHeader} />
                        </View>
                    </View>
                </View>
                <View style={styles.contentWrapper}>
                    <View style={{ width: width / 5, height: 100 }}>
                        <Image style={{ width: '100%', height: 100, alignItems: "center" }} source={require('./../../assets/images/p1.png')} resizeMode="center" />
                    </View>
                    <View style={{ width: (width / 2) + 20, height: 100, paddingTop: 5,justifyContent:'center' }}>
                        <Text style={{fontSize:14}}>Apple</Text>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>$2</Text>
                    </View>
                    <View style={{ width: (width / 8), height: 100,justifyContent:'space-around'}}>
                        <TouchableOpacity style={styles.buttonQty}>
                            <Icon name="minus" size={14} style={styles.iconHeader} />
                        </TouchableOpacity>
                        <View>
                            <Text style={styles.qtyWrapper}>1</Text>
                        </View>
                        <TouchableOpacity style={styles.buttonQty}>
                            <Icon name="plus" size={14} style={styles.iconHeader} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.contentWrapper}>
                    <View style={{ width: width / 5, height: 100 }}>
                        <Image style={{ width: '100%', height: 100, alignItems: "center" }} source={require('./../../assets/images/minarel.png')} resizeMode="center" />
                    </View>
                    <View style={{ width: (width / 2) + 20, height: 100, paddingTop: 5,justifyContent:'center' }}>
                        <Text style={{fontSize:14}}>Mineral  Water</Text>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>$1</Text>
                    </View>
                    <View style={{ width: (width / 8), height: 100,justifyContent:'space-around'}}>
                        <View style={styles.buttonQty}>
                            <Icon name="minus" size={14} style={styles.iconHeader} />
                        </View>
                        <View>
                            <Text style={styles.qtyWrapper}>1</Text>
                        </View>
                        <View style={styles.buttonQty}>
                            <Icon name="plus" size={14} style={styles.iconHeader} />
                        </View>
                    </View>
                </View>
                <View style={styles.contentWrapper}>
                    <View style={{ width: width / 5, height: 100 }}>
                        <Image style={{ width: '100%', height: 100, alignItems: "center" }} source={require('./../../assets/images/p3.png')} resizeMode="center" />
                    </View>
                    <View style={{ width: (width / 2) + 20, height: 100, paddingTop: 5,justifyContent:'center' }}>
                        <Text style={{fontSize:14}}>Meat</Text>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>$6</Text>
                    </View>
                    <View style={{ width: (width / 8), height: 100,justifyContent:'space-around'}}>
                        <View style={styles.buttonQty}>
                            <Icon name="minus" size={14} style={styles.iconHeader} />
                        </View>
                        <View>
                            <Text style={styles.qtyWrapper}>1</Text>
                        </View>
                        <View style={styles.buttonQty}>
                            <Icon name="plus" size={14} style={styles.iconHeader} />
                        </View>
                    </View>
                </View>
                <View style={styles.contentWrapper}>
                    <View style={{ width: width / 5, height: 100 }}>
                        <Image style={{ width: '100%', height: 100, alignItems: "center" }} source={require('./../../assets/images/p2.png')} resizeMode="center" />
                    </View>
                    <View style={{ width: (width / 2) + 20, height: 100, paddingTop: 5,justifyContent:'center' }}>
                        <Text style={{fontSize:14}}>Rice</Text>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>$1</Text>
                    </View>
                    <View style={{ width: (width / 8), height: 100,justifyContent:'space-around'}}>
                        <View style={styles.buttonQty}>
                            <Icon name="minus" size={14} style={styles.iconHeader} />
                        </View>
                        <View>
                            <Text style={styles.qtyWrapper}>1</Text>
                        </View>
                        <View style={styles.buttonQty}>
                            <Icon name="plus" size={14} style={styles.iconHeader} />
                        </View>
                    </View>
                </View>
                <View style={styles.contentWrapper}>
                    <View style={{ width: width / 5, height: 100 }}>
                        <Image style={{ width: '100%', height: 100, alignItems: "center" }} source={require('./../../assets/images/p4.png')} resizeMode="center" />
                    </View>
                    <View style={{ width: (width / 2) + 20, height: 100, paddingTop: 5,justifyContent:'center' }}>
                        <Text style={{fontSize:14}}>Bread,Loaf</Text>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>$1</Text>
                    </View>
                    <View style={{ width: (width / 8), height: 100,justifyContent:'space-around'}}>
                        <View style={styles.buttonQty}>
                            <Icon name="minus" size={14} style={styles.iconHeader} />
                        </View>
                        <View>
                            <Text style={styles.qtyWrapper}>1</Text>
                        </View>
                        <View style={styles.buttonQty}>
                            <Icon name="plus" size={14} style={styles.iconHeader} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex:1
    },
    header: {
        backgroundColor: '#49c874',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    contentWrapper: {
        flex: 100,
        backgroundColor: '#ecfbf1',
        marginHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'flex-end'
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 30,
        paddingHorizontal: 15
    },
    iconHeader: {
        color: '#fff'
    },
    buttonQty: {
        backgroundColor: '#49c074',
        width: 20,
        height: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    qtyWrapper: {
        marginLeft:5,
        justifyContent: 'center',
    },
});

export default Cart;
