import React from 'react';
import { StyleSheet, View, FlatList, Text} from 'react-native';
import ProductListItem from '../components/ProductListItem';

export default class Category extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('categoryName', 'Category')
    };
  };
  
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          image: [
            {
              url: 'https://imgur.com/TPji24F.jpg'
            }
          ],
          name: 'Cúc',
          price: '50000'
        },
        {
          id: 2,
          image: [
            {
              url: 'https://imgur.com/iRldAlv.jpg'
            }
          ],
          name: 'Mai',
          price: '100000'
        },
        {
          id: 3,
          image: [
            {
              url: 'https://imgur.com/C5ZWHFB.jpg'
            }
          ],
          name: 'Sen',
          price: '150000'
        },
      ]
    }
  };
  
  render() {
    return (
      // <FlatList 
      //   data = {this.state.products}
      //   numColumns= {2}
      //   renderItem = {({item}) => <ProductListItem product = {item} />}
      //   keyExtractor = {item => '${item.id}'}
      // />

      <View><Text>abc</Text></View>
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
