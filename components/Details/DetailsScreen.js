import React ,{useState} from 'react'
import { View, Text, StatusBar, Image, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


const { width, height } = Dimensions.get("window")


const Onboard = ({ navigation, route }) => {
    const getData = route.params.Category;
    const [value, setValue] = useState(1);

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.header}>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={()=>navigation.goBack()} style={{width:100}} ><Icon name="angle-left" style={styles.iconHeader} size={30} /></TouchableOpacity>
                    <Icon name="heart" style={styles.iconHeader} size={24} />
                </View>
            </SafeAreaView>
            <View style={styles.contentWrapper}>
                <Text style={styles.contentTitle}>{getData.title}</Text>
                {/* <Text style={styles.contentSubTitle} >(Nimbu)</Text> */}
                <View style={styles.ratting}>
                    <Icon name="star" size={20} style={styles.rattingStart} />
                    <Icon name="star" size={20} style={styles.rattingStart} />
                    <Icon name="star" size={20} style={styles.rattingStart} />
                    <Icon name="star" size={20} style={styles.rattingStart} />
                </View>
                <View style={styles.contentImageWrapper}>
                    <Image source={getData.image} style={styles.contentImg} resizeMode="center" />
                </View>
            </View>
            <View style={styles.qtyIncrementWrapper}>
                <View style={styles.qtyIncrement} >
                    <TouchableOpacity onPress={()=>{setValue(value-1)}} style={styles.buttonQty}>
                        <Icon name="minus" size={20} style={styles.iconHeader} />
                    </TouchableOpacity> 
                   <View style={styles.qtyWrapper}><Text style={styles.qty}>{value}</Text></View>
                    <TouchableOpacity onPress={()=>{setValue(value+1)}} style={styles.buttonQty}>
                        <Icon name="plus" size={20} style={styles.iconHeader} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.contentDetailsWrapper}>
                <View style={styles.description}>
                    <View>
                        <Text style={styles.textDescriptionTitle}>Description</Text>
                    </View>
                    <View>
                        <Text style={styles.textDescriptionTitle}>${getData.price}</Text>
                    </View>
                </View>
                <View style={styles.descriptionText}>
                    <Text> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five </Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => console.log('ok')}>
                    <Text style={styles.textButton}>Add to basket</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        backgroundColor: '#49c874',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
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
    contentWrapper: {
        backgroundColor: '#ecfbf1',
        marginHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        marginTop: -30,
    },
    contentTitle: {
        color: '#00312d',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    contentSubTitle: {
        color: '#585a58',
        fontSize: 16,
        textAlign: 'center'
    },
    ratting: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 30
    },
    rattingStart: {
        color: '#f36040',
        marginLeft: 10
    },
    contentImageWrapper: {
        alignItems: 'center'
    },
    contentImg: {
        height: height / 3,
        overflow: 'hidden',
    },
    qtyIncrementWrapper: {
        alignSelf: 'center',
        marginTop: -25,
    },
    qtyIncrement: {
        flexDirection: 'row',
        alignSelf: 'baseline',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 30,
    },
    buttonQty: {
        backgroundColor: '#49c074',
        width: 40,
        height: 40,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    qtyWrapper: {
        marginHorizontal: 20,
        justifyContent: 'center'
    },
    qty: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    contentDetailsWrapper: {
        paddingHorizontal: 20,
        marginTop: 30
    },
    description: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    textDescriptionTitle: {
        color: '#00312d',
        fontSize: 18,
        fontWeight: 'bold'
    },
    descriptionText: {
        color: '#666666',
        fontSize: 18
    },
    button: {
        backgroundColor: '#346473',
        padding: 15,
        borderRadius: 20,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: .5,
        elevation: 1
    },
    textButton: {
        color: '#fff',
        fontFamily: 'Montserrat-bold',
        textAlign: 'center'
    }
});

export default Onboard;
