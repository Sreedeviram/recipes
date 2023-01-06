import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const RenderRecipe = ({ recipe }) => {
    if(recipe) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={{uri:recipe.photo_url}}>
                    <View style={{ justifyContent: 'center', flex: 1 }}>
                        <Text 
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {recipe.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{recipe.description}</Text>
            </Card>
        );
    }
    return <View />;
};

export default RenderRecipe;