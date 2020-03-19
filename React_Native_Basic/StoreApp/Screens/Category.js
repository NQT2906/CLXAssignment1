import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ProductListItem from '../components/ProductListItem.js';
import axios from 'axios';
import { connect } from 'react-redux'

axios.defaults.baseURL = "https://my-json-server.typicode.com/nqt2906/demo/";

export default class Category extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('categoryName', 'Category')
    };
  };
  
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  };
  
  componentDidMount() {
    // const { navigation } = this.props;
    // const { categorySpecies } = navigation.getParam("categorySpecies", "0");
    // const s = 'products?species=${categorySpecies}';
    // console.log(s);
    //axios.get('products?species=1')
    axios.get('products')
      .then(res => {
        this.setState({
          products: res.data
          //product: res.data
        })
      })
      .catch(error => {
        console.error(error)
      });
  }

  render() {
    const { products } = this.state;
    return (
      <View>
        <View>
          <FlatList 
            data = {products}
            numColumns = {2}
            renderItem = {({item}) => 
              <View style = {styles.wrapper}>
                <ProductListItem product = {item}
                  onPress = {() => this.props.onPress(item)} />
              </View> }
            keyExtractor = {item => JSON.stringify(item)}
            contentContainerStyle ={styles.container} />
        </View>
      </View>
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
