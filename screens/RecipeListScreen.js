//import RenderRecipe from '../features/recipes/RenderRecipe';
import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import { RECIPES} from '../shared/recipes';

const RecipeListScreen = () => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);
  
    const handleSelect = (recipe) => {
      setSelectedRecipe(recipe);
    };
  
    return (
      <View>
        {RECIPES.map((recipe) => (
          <TouchableOpacity
            key={recipe.id}
            onPress={() => handleSelect(recipe)}
          >
            <Text>{recipe.title}</Text>
          </TouchableOpacity>
        ))}
        {selectedRecipe && (
          <ScrollView>
            <Image style={{width: '100%', height: 250}} source={{uri:selectedRecipe.photo_url}} />
            <Text>{selectedRecipe.title}</Text>
            <Text>{selectedRecipe.time}</Text>
            <Text>{selectedRecipe.description}</Text>
          </ScrollView>
        )}
      </View>
    );
  };
  
  export default RecipeListScreen;
//const RecipeListScreen = ({route}) => {
    //const {recipe} = route.params;
    //return <RenderRecipe recipe={recipe} />;
//};

