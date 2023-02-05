import React, { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import { RECIPES} from '../shared/recipes';


const SearchScreen = ({navigation}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState(RECIPES);
  
    const handleSearch = (text) => {
      setSearchTerm(text);
      const searchRecipes = RECIPES.filter((recipe) =>
        recipe.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredRecipes(searchRecipes);
    };

    const onPressRecipe = (item) => {
        navigation.navigate("Recipe List", { item });
    };
  
    return (
      <View>
        <TextInput
          placeholder="Search for a recipe"
          value={searchTerm}
          onChangeText={handleSearch}
          
        />
        <FlatList
          data={filteredRecipes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Text>{item.title}</Text>
          )}
          onPress={() => onPressRecipe(item)}
          
        />
      </View>
    );
  };
  
  export default SearchScreen;