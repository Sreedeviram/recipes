import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Image, ListItem, Button,Icon } from 'react-native-elements';
import { RECIPES} from '../shared/recipes';
import { INGREDIENTS } from '../shared/ingredients';

const DetailedRecipeScreen = ({route}) => {
    const [detailedRecipe, setDetailedRecipe] = useState(RECIPES.filter(recipe => route.params.recipeId === recipe.id))
    const [ingredients, setIngredients] = useState(INGREDIENTS);

    function getIngredientsNameById (ingredientId){
        console.log('ingredientId' + ingredientId);
        return INGREDIENTS.filter(ingredient => ingredient.ingredientId === ingredientId)
        .map(ingredient => ingredient.name)[0];
    }

    const renderDetailedRecipe = ({item : detailedRecipe}) => {
        return (
          <View>
                <Image style={{width: '100%', height: 400}} source={{uri:detailedRecipe.photo_url}}/>
                <View>
                <View>
                <Button
                    onPress={() => navigation.navigate('Favorite')}
                    icon={
                        <Icon
                            name='heart'
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
                        <ListItem.Title>{detailedRecipe.title}</ListItem.Title>
                        {
                        detailedRecipe.ingredients.map(
                            (ingredients, key) => {
                        return <ListItem.Subtitle>{
                            getIngredientsNameById(ingredients[0]) + '  - ' + ingredients[1]}
                            </ListItem.Subtitle>
                        })
                        }
                        <ListItem.Subtitle>{detailedRecipe.description}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
           </View>
        );
    };
    return (
        <FlatList
            data = {detailedRecipe}
            renderItem = {renderDetailedRecipe}
            keyExtractor = {(item) => item.id.toString()}
        />
      ); 
};



export default DetailedRecipeScreen;