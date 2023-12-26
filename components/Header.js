import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = () => {
  return (
    <Appbar.Header style={styles.header}>
      <Appbar.Content
        title="Rock Paper Scissors"
        titleStyle={styles.title}
      />
    </Appbar.Header>
  );
};

const styles = {
  header: {
    backgroundColor: '#34495e', 
    elevation: 0, 
    borderBottomWidth: 2, 
    borderBottomColor: '#2c3e50', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ecf0f1',
  },
};

export default Header;





