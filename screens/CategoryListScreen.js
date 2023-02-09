import { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { Image, ListItem } from 'react-native-elements';
import { CATEGORIES} from '../shared/categories';
import ApiClient from '../shared/ApiClient';

const CategoryListScreen = ({navigation}) => {
    
    const[categories, setCategories] = useState([]);

    useEffect(() => {
        ApiClient.getCatergories()
                .then(function (response) {
                        console.log(response.data);
                        setCategories(response.data);
                })
                .catch(function (error) {
                        console.log(error);
                });
      }, []);
 
    const renderCategoryListItem = ({item : category}) => {
        //console.log(category.name);
        return (
            <View>
                <Image style={{width: '100%', height: 250}} source={{uri:category.photo_url}} />
                <ListItem 
                    onPress={() => 
                        navigation.navigate('Recipe List', {screen: 'RecipeList', categoryId : category._id, params: {screen: 'DetailedRecipe', initial: false}})
                    }
                >
                    <ListItem.Content>
                        <ListItem.Title>{category.name}</ListItem.Title>
                        <ListItem.Subtitle>{category.description}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </View>
        );
    };


    return (
        <FlatList
            data = {categories}
            renderItem = {renderCategoryListItem}
            keyExtractor = {(item) => item._id.toString()}
        />
    );
};


export default CategoryListScreen;