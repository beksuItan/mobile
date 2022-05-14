import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View, Button } from 'react-native';


export default function DetailedPost( {navigation, route }) {
    const { item, content } = route.params;

    return (
        <View style={styles.item}>
            
            <Text style={styles.itemText}>
                    {item}
            </Text>
            <Text style={styles.contentText}>
                {content}
            </Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.goBack()}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    item :{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 50,
    },
    itemText: {
        maxWidth: '80%',
        fontSize: 36
    },
    contentText: {
        maxWidth: '80%',
        fontSize: 24
    },
    

})

