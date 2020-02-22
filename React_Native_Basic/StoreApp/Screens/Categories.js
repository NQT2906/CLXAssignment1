import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList} from 'react-native';
import CategoryListItem from '../components/CategoryListItem.js';
import { createStackNavigator } from 'react-navigation-stack';

import Cuc from '../assets/Cuc.png';
import Mai from '../assets/Mai.png';
import Sen from '../assets/Sen.png';

export default class Categories extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {id: 1, name: 'Cúc', image: Cuc},
        {id: 2, name: 'Mai', image: Mai},
        {id: 3, name: 'Sen', image: Sen},
      ]
    }
  };

  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
    return (
      <FlatList 
        data = {categories}
        renderItem= {({ item }) => 
        <CategoryListItem 
          category = {item} 
          onPress = {() => 
            navigation.navigate('Category', {
              categoryName: item.name,
            })
          } />}
        keyExtractor = {(item) => '${item.id}'}
        contentContainerStyle ={styles.container}
      />
    );
  // const { categories } = this.state;
  // const { navigation } = this.props;
  //   return (
  //     <ScrollView style = {{paddingLeft: 16, paddingRight: 16}}>
  //       {categories.map( category => (
  //         <CategoryListItem 
  //           key = {category.id} 
  //           category = {category}
  //           onPress = {() =>
  //           navigation.navigate('Category', {
  //               categoryName: category.name
  //           })} />
  //       ))}
  //     </ScrollView>   
  //   )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
