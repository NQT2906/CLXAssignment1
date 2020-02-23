import React from 'react';
<<<<<<< HEAD
import { StyleSheet, View, FlatList } from 'react-native';
import ProductListItem from '../components/ProductListItem.js';
=======
import { StyleSheet, View, FlatList, Text, Image} from 'react-native';
import ProductListItem from '../components/ProductListItem';
>>>>>>> d28d95df60daf5c337e25cd6078f255eb334f7b0

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
          image: 'https://imgur.com/TPji24F.jpg',
          name: 'Cúc',
          price: '50000'
        },
        {
          id: 2,
          image: 'https://imgur.com/iRldAlv.jpg',
          name: 'Mai',
          price: '100000'
        },
        {
          id: 3,
          image: 'https://imgur.com/C5ZWHFB.jpg',
          name: 'Sen',
          price: '150000'
        },
        {
          id: 4,
          image: 'https://imgur.com/TPji24F.jpg',
          name: 'Cúc',
          price: '50000'
        },
        {
          id: 5,
          image: 'https://imgur.com/iRldAlv.jpg',
          name: 'Mai',
          price: '100000'
        },
        {
          id: 6,
          image: 'https://imgur.com/C5ZWHFB.jpg',
          name: 'Sen',
          price: '150000'
        },
        {
          id: 7,
          image: 'https://imgur.com/TPji24F.jpg',
          name: 'Cúc',
          price: '50000'
        },
        {
          id: 8,
          image: 'https://imgur.com/iRldAlv.jpg',
          name: 'Mai',
          price: '100000'
        },
        {
          id: 9,
          image: 'https://imgur.com/C5ZWHFB.jpg',
          name: 'Sen',
          price: '150000'
        },
      ]
    }
  };
  
  render() {
    const { products } = this.state;
    return (
<<<<<<< HEAD
      <View>
        <View>
          <FlatList 
            data = {products}
            numColumns = {2}
            renderItem = {({item}) => 
              <View style = {styles.wrapper}>
                <ProductListItem product = {item} />
              </View> }
            keyExtractor = {item => '${item.id}'}
            contentContainerStyle ={styles.container} />
        </View>
      </View>
=======
      // <FlatList 
      //   data = {this.state.products}
      //   numColumns= {2}
      //   renderItem = {({item}) => <ProductListItem product = {item} />}
      //   keyExtractor = {item => '${item.id}'}
      // />

     <View>
        <View><Text>{this.props.navigation.getParam('categoryName')}</Text></View>
        <Text>{this.props.navigation.getParam('image')}</Text>
        <Image style={{
          width:300,
          height:300
        }} source={{
          uri: this.props.navigation.getParam('image')
        }} />
      </View>

>>>>>>> d28d95df60daf5c337e25cd6078f255eb334f7b0
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 16
  },
  wrapper: {
    flex: 0.5,
    paddingHorizontal: 8
  }
});
