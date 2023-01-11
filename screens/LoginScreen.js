import { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';


const LoginScreen = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('username:', username);
        console.log('password:', password);
    };

    return (
        <View style={styles.container}>
            <Input
                placeholder='Username'
                leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                onChangeText={(text) => setUsername(text)}
                value={username}
                containerStyle={styles.formInput}
                leftIconContainerStyle={styles.formIcon}
            />
            <Input
                placeholder='Password'
                leftIcon={{ type: 'font-awesome', name: 'key' }}
                onChangeText={(text) => setPassword(text)}
                value={password}
                containerStyle={styles.formInput}
                leftIconContainerStyle={styles.formIcon}
            />
            <View style={styles.formButton}>
                <Button
                    onPress={() => handleLogin()}
                    title='Login'
                    icon={
                        <Icon
                            name='sign-in'
                            type='font-awesome'
                            color='#F1DABF'
                            iconStyle={{ marginRight: 10 }}
                        />
                    }
                    buttonStyle={{ 
                        backgroundColor: '#49111C',
                        borderRadius: 10
                    }}
                    titleStyle={{ 
                        color: '#F1DABF',
                        fontWeight: 'bold'
                    }}
                />
            </View>
            <View style={styles.formButton}>
                <Button
                    onPress={() => navigation.navigate('Register')}
                    title='Register'
                    type='clear'
                    icon={
                        <Icon
                            name='user-plus'
                            type='font-awesome'
                            color='#49111C'
                            iconStyle={{ marginRight: 10 }}
                        />
                    }
                    titleStyle={{ 
                        color: '#49111C',
                        fontWeight: 'bold'
                    }}
                />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 20
    },
    formIcon: {
        marginRight: 10
    },
    formInput: {
        padding: 10
    },
    formButton: {
        margin: 10
    }
});

export default LoginScreen;