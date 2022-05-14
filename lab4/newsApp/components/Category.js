import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View, Button } from 'react-native';
let json = require('../metadata.json');
import Task from './Task'


export default function Category( {navigation}) {

    return (
        <View styles={styles.items}>
            {
            json.category.map((item, index) => {
                return (
                <TouchableOpacity key={index}  onPress={() => navigation.navigate('Category', { name: "Name1" })}>
                    <Task text={item.name} /> 
                </TouchableOpacity>
                )
            })
            }
        </View>
        
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    taskWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    items: {
      marginTop: 30
    },
    writeTaskWrapper: {
      position: 'absolute',
      bottom: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addText: {}
  });
