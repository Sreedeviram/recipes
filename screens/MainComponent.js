import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryListScreen from './CategoryListScreen';
import RecipeListScreen from "./RecipeListScreen";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#F1DABF',
    headerStyle: { backgroundColor: '#49111C' }
}

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
        </Stack.Navigator>
    );
};

const CategoryListNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Categories'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Category List'
                component={CategoryListScreen}
                options={{ title: 'Category List' }}
            />
            <Stack.Screen
                name='Recipe List'
                component={RecipeListScreen}
               // options={({ route }) => ({
                    //title: route.params
                //})}
            />
        </Stack.Navigator>
    );
};

const Main = () => {
    return (
        <View 
            style={{ 
                flex: 1, 
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight 
            }}
        >
            <Drawer.Navigator
                initialRouteName='Home'
                drawerStyle={{ backgroundColor: '#F1DABF'}}
            >
                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{ title: 'Home' }}
                />
                <Drawer.Screen
                    name='Categories'
                    component={CategoryListNavigator}
                    options={{ title: 'Categories' }}
                />
            </Drawer.Navigator> 
        </View>
    );
};

export default Main;