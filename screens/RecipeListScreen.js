import { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { Image, ListItem } from 'react-native-elements';
import { RECIPES} from '../shared/recipes';
import ApiClient from '../shared/ApiClient';

const RecipeListScreen = ({navigation, route}) => {
  const[recipes, setRecipes] = useState(RECIPES.filter(recipe => recipe.categoryId === route.params.categoryId));

  const categoryId = route.params.categoryId;

  useEffect(() => {
    ApiClient.getRecipes()
            .then(function (response) {
                    console.log(response.data);
                    setRecipes(response.data);
            })
            .catch(function (error) {
                    console.log(error);
            });
  }, []);
  
  const renderRecipeList = ({item : recipe}) => {
    return (
      <View>
        <Image style={{width: '100%', height: 400}} source={{uri:recipe.photo_url}} />
        <ListItem 
            onPress={() => 
                navigation.navigate('Detailed Recipe', {screen: 'DetailedRecipe', recipeId : recipe._id})
            }
        >
            <ListItem.Content>
                <ListItem.Title>{recipe.name}</ListItem.Title>
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
        keyExtractor = {(item) => item._id.toString()}
    />
  );
};
  
export default RecipeListScreen;

