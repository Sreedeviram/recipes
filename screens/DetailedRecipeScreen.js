import React, { useState } from 'react';
import { View, FlatList, Modal, StyleSheet , Text} from 'react-native';
import { Image, ListItem, Button,Icon } from 'react-native-elements';
import { RECIPES} from '../shared/recipes';
import { INGREDIENTS } from '../shared/ingredients';

const DetailedRecipeScreen = ({navigation, route}) => {
    const [detailedRecipe, setDetailedRecipe] = useState(route.params.recipe)
    const [ingredients, setIngredients] = useState(INGREDIENTS);
    const [favorites, setFavorites] = useState(false);
    const [showModal, setShowModal] = useState(false);


    detailedRecipe.recipeIngredients
    .map( ingredients => console.log("detailed recipe ="+ingredients.ingredient.name));

    const addFavorite = () => {
        setFavorites(!favorites);
      };

    const renderDetailedRecipe = ({item : detailedRecipe}) => {
        return (
          <View>
                <Image style={{width: '100%', height: 250}} source={{uri:detailedRecipe.photo_url}}/>
                <View>
                   <View>
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
                    <Button
                        icon={
                            <Icon
                                //onPress={() => addFavorite(detailedRecipe)}
                                onPress={() => setShowModal(true)}
                                name= {favorites?'heart': 'heart-o'}
                                type='font-awesome'
                                color='#F1DABF'
                                iconStyle={{ marginRight: 10 }}
                            />
                        }
                        buttonStyle={{ 
                            backgroundColor: '#92817A',
                        }}
                        titleStyle={{ 
                            color: '#F1DABF',
                            fontWeight: 'bold'
                        }}
                    />
            </View>
                </View>
                <ListItem>
                    <ListItem.Content>
                        <ListItem.Title>{detailedRecipe.name}{'\n'}</ListItem.Title>
                        {
                            
                        detailedRecipe.recipeIngredients.map(
                            (ingredients, key) => {
                        return (
                            <ListItem.Subtitle>{
                                ingredients.ingredient.name + '  - ' 
                                + ingredients.quantity + ' ' + ingredients.ingredient.quantityType} {'\n'}
                            </ListItem.Subtitle>
                        )})
                        }
                        <ListItem.Subtitle>{detailedRecipe.description}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
           </View>
        );
    };
    return (
        <FlatList
            data = {[detailedRecipe]}
            renderItem = {renderDetailedRecipe}
            keyExtractor = {(item) => item._id.toString()}
        />
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


export default DetailedRecipeScreen;