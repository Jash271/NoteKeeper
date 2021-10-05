import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, makeCall } from 'react-native';
import styles from '../styles/Component.style';

import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ item, pressHandler, makeCall }) {
    return (
        <TouchableOpacity >
            <View style={styles.Todo}>
                <MaterialIcons name='delete' size={18} onPress={() => { pressHandler(item.key) }} />
                <Text style={styles.TodoText}>
                    {item.text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}