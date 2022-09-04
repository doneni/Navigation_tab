import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const UploadScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>UploadScreen</Text>
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

export default UploadScreen;