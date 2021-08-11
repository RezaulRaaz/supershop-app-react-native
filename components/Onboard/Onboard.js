import React from 'react'
import { View, Text ,StatusBar,Image,StyleSheet,Dimensions,TouchableOpacity} from 'react-native'


const {width,height} = Dimensions.get("window")


const Onboard = ({navigation}) => {

    const navigateHomeScreen = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#49c874"
                barStyle="light-content"
            />
            <View style={styles.splash}>
                <Image source={require('./../../assets/images/delivery-boy.png')}/>
            </View>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Welcome {'\n'} To E-Super Shop</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigateHomeScreen()}>
                    <Text style={styles.textButton}>Get Start</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#49c874',
        justifyContent:'flex-end',
        paddingHorizontal:50,
        paddingBottom:'20%'
    },
    splash:{
        position:'absolute',
        top:0,
        justifyContent:'flex-end',
        alignItems:'flex-start',
        backgroundColor:'#ffd6a6',
        overflow:'hidden',
        width:height/1.5,
        height:height/1.5,
        borderRadius:width,
        left:width/3.5
    },
    wrapper:{
        width:'100%'
    },
    title:{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        color:'#ffffff'
    },
    button:{
        backgroundColor:'#346473',
        padding:15,
        borderRadius:20,
        marginTop:20,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:3
        },
        shadowRadius:5,
        shadowOpacity:.5,
        elevation:1
    },
    textButton:{
        color:'#fff',
        fontFamily:'Montserrat-bold',
        textAlign:'center'
    }
});

export default Onboard;
