import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RecipeGallery from './components/RecipeGallery'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f4f4f4' }}>
      <StatusBar barStyle="dark-content" />
      <RecipeGallery />
    </SafeAreaView>
    
  );
}

