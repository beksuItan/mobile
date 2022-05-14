import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';


const Post = (props) => {


    return (
        <View style={styles.item}>
            <View style={styles.circular}></View>

            <Text style={styles.itemText}>
                    {props.text}
            </Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    item :{
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
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
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5
    }

})

export default Post;
