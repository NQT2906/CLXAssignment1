import React from 'react';
import { StyleSheet, Text, ScrollView, View, FlatList, Navigator} from 'react-native';
//import CategoryListItem from './components/CategoryListItem.js';
import Cuc from './assets/Cuc.png';
import Mai from './assets/Mai.png';
import Sen from './assets/Sen.png';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './AppNavigator.js';
import { Provider } from 'react-redux'
import store from './store'


const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     categories: [
  //       {id: 1, name: 'Cúc', image: Cuc},
  //       {id: 2, name: 'Mai', image: Mai},
  //       {id: 3, name: 'Sen', image: Sen}
  //     ]
  //   }
  // };

  // render() {
  //   const { categories } = this.state;
  //   return (
  //     <ScrollView style = {{paddingLeft: 16, paddingRight: 16}}>
  //       {categories.map( category => (
  //         <CategoryListItem key = {category.id} category = {category} />
  //       ))}
  //     </ScrollView>
  //     // Use FlatList to display list item of category 
  //     // <FlatList 
  //     //   data = {categories}
  //     //   renderItem= {({ item }) => <CategoryListItem category = {item} />}
  //     //   keyExtractor = {item => '${item.id}'}
  //     //   contentContainerStyle ={{paddingLeft: 16, paddingRight: 16}}
  //     // />
  //   );
  // }

  render() {
    return (
      <Provider store = {store}>
        <AppContainer />
      </Provider>
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
