import { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';

const RegisterScreen = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = () => {
        const userInfo = {
            username,
            password,
            firstName,
            lastName,
            email
        };
        console.log(JSON.stringify(userInfo));
    };
    
    return (
        <ScrollView>
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
                <Input
                    placeholder='First Name'
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(text) => setFirstName(text)}
                    value={firstName}
                    containerStyle={styles.formInput}
                    leftIconContainerStyle={styles.formIcon}
                />
                <Input
                    placeholder='Last Name'
                    leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                    onChangeText={(text) => setLastName(text)}
                    value={lastName}
                    containerStyle={styles.formInput}
                    leftIconContainerStyle={styles.formIcon}
                />
                <Input
                    placeholder='Email'
                    leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    containerStyle={styles.formInput}
                    leftIconContainerStyle={styles.formIcon}
                />
                <View style={styles.formButton}>
                    <Button
                        onPress={() => handleRegister()}
                        title='Register'
                        icon={
                            <Icon
                                name='user-plus'
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
            </View>
        </ScrollView>
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

export default RegisterScreen;