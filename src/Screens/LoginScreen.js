import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native';
import CategoryScreen from './CategoryScreen';

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>LoginScreen</Text>
            <Button
                title="Go to Category"
                onPress={() => navigation.navigate('Category')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 30,
    },
});

export default LoginScreen;