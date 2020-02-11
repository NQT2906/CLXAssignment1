import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList} from 'react-native';
import CategoryListItem from './components/CategoryListItem.js';
import Cuc from './assets/Cuc.png';
import Mai from './assets/Mai.png';
import Sen from './assets/Sen.png';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {id: 1, name: 'Cúc', image: Cuc},
        {id: 2, name: 'Mai', image: Mai},
        {id: 3, name: 'Sen', image: Sen}
      ]
    }
  };

  render() {
    const { categories } = this.state;
    return (
      <ScrollView style = {{paddingLeft: 16, paddingRight: 16}}>
        {categories.map( category => (
          <CategoryListItem key = {category.id} category = {category} />
        ))}
      </ScrollView>
      // Use FlatList
      // <FlatList
      //     data= {categories}
      //     renderItem = {({item}) => <CategoryListItem  category = {item} />}
      //     keyExtractor={(item) => '${item.id}'} />
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
