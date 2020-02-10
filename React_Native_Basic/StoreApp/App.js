import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList} from 'react-native';
import CategoryListItem from './components/CategoryListItem.js';
import Cuc from './assets/Cuc.png';
import Mai from './assets/Mai.png';
import Sen from './assets/Sen.png';
import { render } from 'react-dom';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: 'Hoa cúc', image: Cuc},
        { id: 2, name: 'Hoa mai', image: Mai},
        { id: 3, name: 'Hoa sen', image: Sen}
      ]
    };
  }

  render() {
    const {categories} = this.state;
    return (
      <ScrollView contentContainerStyle = {{paddingLeft: 16, paddingRight: 16}}>
        {categories.map(category =>(
          <CategoryListItem category = {category} key = {category.id}  />
        ))}
        {categories.map(category =>(
          <CategoryListItem category = {category} key = {category.id}  />
        ))}
      </ScrollView>
      // Use FlatList to display categories
      // <FlatList 
      //   data = {categories}
      //   renderItem = {({ item }) => <CategoryListItem category = {item} />} 
      //   keyExtractor = {item => "${item.id}" } 
      //   contentContainerStyle = {{paddingLeft: 16, paddingRight: 16}}
      // />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
});
