import { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Image, ListItem } from 'react-native-elements';
import { CATEGORIES} from '../shared/categories';
import { RECIPES} from '../shared/recipes';

const CategoryListScreen = ({navigation}) => {
    const[categories, setCategories] = useState(CATEGORIES);
    const[recipes, setRecipes] = useState(RECIPES);

    const renderCategoryListItem = ({item : category}) => {
        return (
            <View>
                <Image style={{width: '100%', height: 250}} source={{uri:category.photo_url}} />
                <ListItem 
                    onPress={() => 
                        navigation.navigate('Recipe List', {screen: 'RecipeList'})
                    }
                >
                    <ListItem.Content>
                        <ListItem.Title>{category.name}</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </View>
        );
    };


    return (
        <FlatList
            data = {categories}
            renderItem = {renderCategoryListItem}
            keyExtractor = {(item) => item.id.toString()}
        />
    );
};


export default CategoryListScreen;