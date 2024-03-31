// App.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Employee from './pages/Employee'; // Import the Employee component from the appropriate path

const App = () => {
  return (
    <View style={styles.container}>
      {/* Render the Employee component */}
      <Employee />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure that the container occupies the full screen
  },
});

export default App;
