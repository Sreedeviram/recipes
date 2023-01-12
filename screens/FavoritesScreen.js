import { useState } from "react";
import { Text, View, StyleSheet, Button, Modal, TouchableOpacity } from "react-native";

const FavoritesScreen = ({navigation}) => {
    const [showModal, setShowModal] = useState(false);


    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={() => setShowModal(true)}>
                <Text style={styles.textStyle}>
                    Add Favorites
                </Text>
            </TouchableOpacity>
            <Modal 
                animationType='slide'
                transparent={true}
                visible={showModal}
                onRequestClose={() => setShowModal(!showModal)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            Login or Create an account to add your favorite recipes.
                        </Text>
                        <Button
                                onPress={() => {setShowModal(!showModal); navigation.navigate('Login')}}
                                color='#92817A'
                                title='Login'
                                style={styles.button}
                            />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    },
    modalView: {
        margin: 0,
        backgroundColor: "#F1DABF",
        borderRadius: 30,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 40,
        padding: 10,
        elevation: 2,
        marginTop: 20,
        color: '#92817A'
    },
    textStyle: {
        color: "#49111C",
        fontWeight: "bold",
        textAlign: "center"
    },
});

export default FavoritesScreen;
