
import React from 'react'
import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import categories from './../../constant/data'


const { width, height } = Dimensions.get("window");

const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#49c874"
                barStyle="light-content"
            />
            <SafeAreaView>
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <View>
                                <Text style={{ color: '#fff', fontSize: 18 }}>Deliver To</Text>
                                <Text style={{ color: '#fff' }}>Jubli Road Chittagong</Text>
                            </View>
                        </View>
                        <View>
                            <Image style={{ width: 50, height: 50, borderRadius: 60, borderColor: '#fff', borderWidth: 2 }} source={require('./../../assets/images/raaz.jpg')} />
                        </View>
                    </View>
                </View>
                <View style={styles.search}>
                    <View style={styles.searchWrapper}>
                        <Icon name="search" size={20} style={styles.searchIcon} />
                        <TextInput keyboardType="name-phone-pad" placeholderTextColor="#b0b0b0" placeholder="Search" style={styles.searchInput} />
                    </View>
                </View>
                <ScrollView style={{ marginTop: 15, marginLeft: 15 }} horizontal showsHorizontalScrollIndicator={false}>
                    <View style={[styles.specialOfferWrapper, { backgroundColor: '#15a085' }]}>
                        <View style={styles.TopArea}>
                            <TouchableOpacity style={styles.textWrapper}>
                                <Text style={styles.SpecialButton}>Special</Text>
                            </TouchableOpacity>
                            <Image style={styles.ProductImage} source={require('./../../assets/images/vagitable2.png')} />
                        </View>
                        <View style={styles.footerArea}>
                            <Text style={styles.titleText}>Shop Healthy</Text>
                            <Text style={styles.subTitle}>Organic Vegetables In Stock</Text>
                        </View>
                    </View>
                    <View style={[styles.specialOfferWrapper, { backgroundColor: '#eeb96c' }]}>
                        <View style={styles.TopArea}>
                            <TouchableOpacity style={styles.textWrapper}>
                                <Text style={styles.SpecialButton}>Special</Text>
                            </TouchableOpacity>
                            <Image style={styles.ProductImage} source={require('./../../assets/images/vagitable1.png')} />
                        </View>
                        <View style={styles.footerArea}>
                            <Text style={styles.titleText}>Shop Healthy</Text>
                            <Text style={styles.subTitle}>Organic Vegetables In Stock</Text>
                        </View>
                    </View>
                    <View style={[styles.specialOfferWrapper, { backgroundColor: '#15a085' }]}>
                        <View style={styles.TopArea}>
                            <TouchableOpacity style={styles.textWrapper}>
                                <Text style={styles.SpecialButton}>Special</Text>
                            </TouchableOpacity>
                            <Image style={styles.ProductImage} source={require('./../../assets/images/minarel.png')} />
                        </View>
                        <View style={styles.footerArea}>
                            <Text style={styles.titleText}>Minarel Water</Text>
                            <Text style={styles.subTitle}>Natural Mineral Water

                            </Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={{ marginHorizontal: 15, marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>Products</Text>
                    <Text>See all</Text>
                </View>
            </SafeAreaView>
            <ScrollView style={{ marginTop: 15 }}>
                {
                    categories.map((chunk, index) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginTop: 10,
                                }}>
                                {
                                    chunk.map((Category) => {
                                        return (
                                            <TouchableOpacity onPress={() => navigation.navigate('Details', { Category })} key={Category.id} style={{
                                                width: width / 3 - 30,
                                                marginHorizontal: 10,
                                                justifyContent: 'center',
                                                marginBottom: 20
                                            }}>
                                                <View
                                                    style={{
                                                        position: 'absolute',
                                                        top: 0,
                                                        backgroundColor: '#def6e6',
                                                        borderRadius: 10,
                                                        width: width / 3 - 30,
                                                        height: width / 3 - 60
                                                    }}
                                                />
                                                <View>
                                                    <Image source={Category.image} style={{
                                                        width: width / 3 - 30,
                                                        height: width / 3 - 30,
                                                    }} />
                                                    <Text>{Category.title}</Text>
                                                </View>
                                                <View style={{
                                                    width: 28,
                                                    height: 28,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: 28,
                                                    backgroundColor: '#49c874',
                                                    position: 'absolute',
                                                    top: -10,
                                                    right: -10
                                                }}>
                                                    <Text style={{color:'#fff',fontSize:12}}>${Category.price}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    footerArea: {
        marginTop: 5,
        paddingHorizontal: 15,
    },
    titleText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase'
    },
    subTitle: {
        color: '#fff',
        fontSize: 11,
    },
    specialOfferWrapper: {
        width: 200,
        borderRadius: 10,
        marginRight: 10,
        height: 120,
    },
    specialBg: {
        backgroundColor: '#15a085'
    },
    TopArea: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    textWrapper: {
        width: '60%',
        alignItems: 'center'
    },
    SpecialButton: {
        textAlign: 'center',
        width: 90,
        padding: 5,
        backgroundColor: '#f76f1d',
        borderRadius: 15,
        fontSize: 12,
        color: '#fff',
        textTransform: 'uppercase'
    },
    ProductImage: {
        height: 70,
        alignItems: "flex-end",
        width: '40%'
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        backgroundColor: "#49c874",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        height: 100,
        paddingHorizontal: 15,
        paddingTop: 20
    },
    search: {
        marginHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 20,
        paddingHorizontal: 15,
        marginTop: -28,
        shadowColor: '#000',
        shadowOffset: {
            height: 5,
            width: 0
        },
        shadowRadius: 5,
        shadowOpacity: 0.1,
        elevation: 1
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchIcon: {
        color: '#b0b0b0',
        marginRight: 10,
        fontSize: 16,
    },
    searchInput: {
        fontSize: 14,
        color: '#b0b0b0',
    }
});

export default Home;
