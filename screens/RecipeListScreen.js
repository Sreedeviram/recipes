import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Image, ListItem } from 'react-native-elements';
import { RECIPES} from '../shared/recipes';

const RecipeListScreen = ({navigation, route}) => {
  const[recipes, setRecipes] = useState(RECIPES.filter(recipe => recipe.categoryId === route.params.categoryId));

  const categoryId = route.params.categoryId;
  //if (categoryId) {
    //setRecipes = RECIPES.filter(recipe => recipe.categoryId === categoryId);
  //}

  const renderRecipeList = ({item : recipe}) => {
    return (
      <View>
        <Image style={{width: '100%', height: 400}} source={{uri:recipe.photo_url}} />
        <ListItem 
            onPress={() => 
                navigation.navigate('Detailed Recipe', {screen: 'DetailedRecipe', recipeId : recipe.id})
            }
        >
            <ListItem.Content>
                <ListItem.Title>{recipe.title}</ListItem.Title>
                <ListItem.Subtitle>Time:{recipe.time} minutes</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    </View>
    );
  };
  
  return (
    <FlatList
        data = {recipes}
        renderItem = {renderRecipeList}
        keyExtractor = {(item) => item.id.toString()}
    />
  );
};
  
export default RecipeListScreen;

