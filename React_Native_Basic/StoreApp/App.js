import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import CategoryListItem from './components/CategoryListItem';
import Cuc from './assets/Cuc.png';
import Mai from './assets/Mai.png';
import Sen from './assets/Sen.png';

export default function App() {
  return (
    <View style={styles.container}>
      <CategoryListItem title = {'Hoa cúc'} Image = {Cuc} />
      <CategoryListItem title = {'Hoa mai'} Image = {Mai} />
      <CategoryListItem title = {'Hoa sen'} Image = {Sen} />
      <CategoryListItem title = {'Hoa cúc'} Image = {Cuc} />
      <CategoryListItem title = {'Hoa mai'} Image = {Mai} />
      <CategoryListItem title = {'Hoa sen'} Image = {Sen} />
      <CategoryListItem title = {'Hoa cúc'} Image = {Cuc} />
      <CategoryListItem title = {'Hoa mai'} Image = {Mai} />
      <CategoryListItem title = {'Hoa sen'} Image = {Sen} />
    </View>
  );
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
