import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const recipes = [
    {
        id: 1,
        title: 'Spaghetti Carbonara',
        ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"],
        image: require('../assets/spaghetti-carbonara.png')
    },
    {
        id: 2,
        title: 'steamed eggs',
        ingredients: ["Eggs", "Water", "Salt"],
        image: require('../assets/steamed-eggs.png')
    },
    {
        id: 3,
        title: 'Omelette',
        ingredients: ["Eggs", "Salt", "Cheese"],
        image: require('../assets/omelette.png')
    },
    {
        id: 4,
        title: 'Grilled Cheese',
        ingredients: ["Bread", "Cheese", "Butter"],
        image: require('../assets/grilled-cheese.png')
    },
    {
        id: 5,
        title: 'Pancakes',
        ingredients: ["Flour", "Milk", "Sugar"],
        image: require('../assets/pancakes.png')
    },
];

// Define the RecipeGallery component
const RecipeGallery = () => {
  // Define a function to render a single recipe item
  const renderItem = ({ item }) => (
    // Use a View component to wrap the recipe's content
    <View style={styles.card}>
      {/* Display the recipe's image */}
      <Image source={item.image} style={styles.image} />
      
      {/* Display the recipe's title */}
      <Text style={styles.title}>{item.title}</Text>
      
      {/* Display the recipe's subtitle */}
      <Text style={styles.subtitle}>ingredients:</Text>
      
      {/* Map over the recipe's ingredients and display each one */}
      {item.ingredients.map((ingredient, index) => (
        // Use a Text component to display each ingredient
        <Text key={index} style={styles.ingredient}>
          {ingredient}
        </Text>
      ))}
    </View>
  );

  return (
    <FlatList 
    data={recipes}
    keyExtractor={(item)=> item.id.toString()}
    renderItem={renderItem}
    contentContainerStyle = {styles.container}
    />
  );
};

const styles = StyleSheet.create({
  // Container styles
  container: {
    padding: 16,
  },

  // Card styles
  card: {
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10,
    elevation: 3,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  // Image styles
  image: {
    width: '100%',
    height: 180,
    borderRadius: 8,
  },

  // Text styles
  title: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 8,
    fontWeight: '600',
  },
  ingredient: {
    marginLeft: 8,
  },
});

export default RecipeGallery;