import { FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const FeaturedRecipesScreen = (props) => {

    const renderFeaturedRecipesItem = ({item : category}) => {
        return (
            <ListItem>
                <Avatar source={{uri:category.photo_url}} />
                <ListItem.Content>
                    <ListItem.Title>{category.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        {category.description}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };


      return (
        <FlatList
            data = {props.categories}
            renderItem = {renderFeaturedRecipesItem}
            keyExtractor = {(item) => item.id.toString()}
        />
      )
};

export default FeaturedRecipesScreen;