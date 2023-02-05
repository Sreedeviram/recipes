import { Platform, View, StyleSheet, ImageBackground, Text } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator} from '@react-navigation/stack';
import CategoryListScreen from './CategoryListScreen';
import RecipeListScreen from "./RecipeListScreen";
import { 
    createDrawerNavigator, 
    DrawerContentScrollView,
    DrawerItemList 
} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import FavoritesScreen from './FavoritesScreen';
import SearchScreen from './SearchScreen';
import { Icon } from 'react-native-elements';


const Drawer = createDrawerNavigator();
const image = {uri: 'https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'};

const screenOptions = {
    headerTintColor: '#F1DABF',
    headerStyle: { backgroundColor: '#49111C' },
    headerTitleStyle: {fontWeight: 'bold'},
    headerTitleAlign: 'center'
}

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={({ navigation }) => ({
                    title: 'Hot Pot',
                    headerLeft: () => (
                        <Icon
                            name='bars'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const LoginNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={({ navigation }) => ({
                    headerLeft: () => (
                        <Icon
                            name='sign-in'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
            <Stack.Screen
                name='Register'
                component={RegisterScreen}
            />
        </Stack.Navigator>
    );
};

const FavoritesNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Favorites'
                component={FavoritesScreen}
                options={({ navigation }) => ({
                    title: 'Favorite Recipes',
                    headerLeft: () => (
                        <Icon
                            name='heart'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const SearchNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Search Recipes'
                component={SearchScreen}
                options={({ navigation }) => ({
                    title: 'Search',
                    headerLeft: () => (
                        <Icon
                            name='search'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
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
                options={({ navigation }) => ({
                    title: 'Category List',
                    headerLeft: () => (
                        <Icon
                            name='list'
                            type='font-awesome'
                            iconStyle={styles.stackIcon}
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}
            />
            <Stack.Screen
                name='Recipe List'
                component={RecipeListScreen}
                options={({ route }) => ({
                    //title: route.params
                })}
            />
        </Stack.Navigator>
    );
};


const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
            <View style={{ flex: 1 }}>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.drawerHeaderText}>Hot Pot</Text>
                </ImageBackground>
            </View>
        </View>
        <DrawerItemList {...props} labelStyle={{ fontWeight: 'bold' }} />
    </DrawerContentScrollView>
);

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
                drawerContent={CustomDrawerContent}
                drawerStyle={{ backgroundColor: '#F1DABF'}}
                screenOptions={{headerShown: false}}
            >
                <Drawer.Screen
                    name='Search'
                    component={SearchNavigator}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='search'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />

                <Drawer.Screen
                    name='Login'
                    component={LoginNavigator}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='sign-in'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{ title: 'Home',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='home'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Categories'
                    component={CategoryListNavigator}
                    options={{ title: 'Categories',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='list'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen
                    name='Favorites'
                    component={FavoritesNavigator}
                    options={{
                        title: 'My Favorites',
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='heart'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 24 }}
                                color={color}
                            />
                        )
                    }}
                />
            </Drawer.Navigator> 
        </View>
    );
};

const styles = StyleSheet.create({
    drawerHeader: {
        backgroundColor: '#49111C',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#F1DABF',
        marginLeft: 30,
        fontSize: 40,
        fontWeight: 'bold'
    },
    stackIcon: {
        marginLeft: 10,
        color: '#F1DABF',
        fontSize: 24
    },
    image: {
        flex: 1,
        justifyContent: "center"
    }
});

export default Main;