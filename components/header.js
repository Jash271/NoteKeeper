import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import styles from '../styles/Component.style';

export default function Header() {
    return (

        <View style={styles.header}>
            <Text style={styles.title}>My Todos </Text>
        </View>
    )
}