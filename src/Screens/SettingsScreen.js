import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>SettingsScreen</Text>
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

export default SettingsScreen;