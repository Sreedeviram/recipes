import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { RECIPES } from '../shared/recipes';

const FeaturedItem = ({ item }) => {
    if (item.featured) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image style={{width: '100%', height:500}} source={{uri: item.photo_url}}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {item.title}
                        </Text>
                    </View>
                </Card.Image>
            </Card>
        );
    }
    return <View />;
};

const HomeScreen = () => {
    const[recipes, setRecipes] = useState(RECIPES);

    //const featRecipe = recipes.find((item) => item.featured);
    return (
        <FlatList
            data = {recipes}
            renderItem = {FeaturedItem}
            keyExtractor = {(item) => item.id.toString()}
        />
    );
};

export default HomeScreen;