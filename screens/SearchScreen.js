import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
import { RECIPES} from '../shared/recipes';


const SearchScreen = ({navigation}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState('');

  const handleSearch = (text) => {
    setSearchTerm(text);
    const searchRecipes = RECIPES.filter((recipe) =>
      recipe.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredRecipes(searchRecipes);
  };

  const onPressRecipe = (id) => {
      navigation.navigate("Detailed Recipe", {recipeId : id});
  };
  
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Search for a recipe"
        value={searchTerm}
        onChangeText={handleSearch}
        
      />
      <FlatList
        data={filteredRecipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text onPress={() => onPressRecipe(item.id)}>{item.name}</Text>
        )}
        
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
  
export default SearchScreen;