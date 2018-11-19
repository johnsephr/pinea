import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { Image, Linking, StatusBar, TouchableOpacity, PixelRatio } from "react-native";
import {
  Text,
  View,
  Container,
  Content,
  Title,
  Button,
  Left,
  Right,
  Body,
  H1,
  H2,
  H3,
} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';

// Styles
import styles from './Styles/ProductListScreenStyle'

let WhiteLogoImage = require('../Images/Products/Flawless_line_cleanser_0_2048x.jpg');

let PRODUCTS = [
  {
    title: 'Sulfate-Free Cleanser',
    line: 'Flawless',
    url: 'http://bit.ly/2FVAs1h',
    productImage: require('../Images/Products/Flawless_line_cleanser_0_2048x.jpg'),
    collectionImage: require('../Images/Collections/Flawless-Collection.png'),
    price: 32.00
  },
  {
    title: 'Pore Perfecting Polish',
    line: 'Flawless',
    url: 'http://bit.ly/fpppvb2018',
    productImage: require('../Images/Products/Flawless_line_pore_1_2048x.jpg'),
    collectionImage: require('../Images/Collections/Flawless-Collection.png'),
    price: 32.00
  },
  {
    title: 'Brightening Complex',
    line: 'Flawless',
    url: 'http://bit.ly/fbcvb2018',
    productImage: require('../Images/Products/Flawless_line_bright_0_2048x.jpg'),
    collectionImage: require('../Images/Collections/Flawless-Collection.png'),
    price: 36.00
  },
  {
    title: 'Corrective C3 Peptide Complex',
    line: 'Iconic',
    url: 'http://bit.ly/iccpcvb2018',
    productImage: require('../Images/Products/Iconic_line_C_2048x.jpg'),
    collectionImage: require('../Images/Collections/Iconic-Collection.png'),
    price: 70.00
  },
  {
    title: 'Corrective Cleanser',
    line: 'Iconic',
    url: 'http://bit.ly/iccvb2018',
    productImage: require('../Images/Products/Iconic_line_cleanser_2048x.jpg'),
    collectionImage: require('../Images/Collections/Iconic-Collection.png'),
    price: 32.00
  },
  {
    title: 'Corrective-A Complex',
    line: 'Iconic',
    url: 'http://bit.ly/icac2018',
    productImage: require('../Images/Products/Iconic_line_A_0_2048x.jpg'),
    collectionImage: require('../Images/Collections/Iconic-Collection.png'),
    price: 88.00
  },
  {
    title: 'Date Night (Corrective Repair Crème)',
    line: 'Iconic',
    url: 'http://bit.ly/idncrc2018',
    productImage: require('../Images/Products/Date_Night_White_reflect_2048x.jpg'),
    collectionImage: require('../Images/Collections/Iconic-Collection.png'),
    price: 54.00
  },
  {
    title: 'Aqua Vitae - Youth Recovery Crème',
    line: 'Honour',
    url: 'http://bit.ly/havyrc2018',
    productImage: require('../Images/Products/Honour_line_A_2048x.jpg'),
    collectionImage: require('../Images/Collections/Honour-Collection.png'),
    price: 160.00
  },
  {
    title: 'Ultimate DNA Defense - Antioxidant SPF 30',
    line: 'Honour',
    url: 'http://bit.ly/hudda3018',
    productImage: require('../Images/Products/Honour_line_SPF_1_2048x.jpg'),
    collectionImage: require('../Images/Collections/Honour-Collection.png'),
    price: 36.00
  },
];

class ProductListScreen extends Component {

  constructor(props) {
    super(props);

    this.renderProduct = this.renderProduct.bind(this);
  }

  static navigationOptions = {
    tabBarLabel: 'Products',
    tabBarIcon: ({ tintColor, focused }) => <Icon name="bars" size={21} color={focused ? '#272727' : '#999999'} />
  };

  renderProduct(product, index) {
    const { title, line, url, productImage, collectionImage, price } = product;

    return (
      <View key={index} style={{
        borderBottomWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)),
        borderColor: '#e0e0e0',
        position: 'relative'
      }}>
        <TouchableOpacity onPress={() => { Linking.openURL(url) }}>
          <Image source={collectionImage} resizeMode="cover" style={{ position: 'absolute', right: -60, top: 0, height: '100%', width: 260 }} />
          <View key={index} style={{
            paddingLeft: 18,
            paddingRight: 18,
            flexDirection: 'row'
          }}>
            <Image source={productImage} resizeMode="contain" style={{ width: 80, height: 110, flex: 0, marginTop: 20, marginRight: 5 }} />
            <View style={{ flex: 1, flexDirection: 'column', padding: 18 }}>
              <H3 style={{ marginTop: 0, fontWeight: '300', fontSize: 21, lineHeight: 26, color: '#272727', flex: 0, letterSpacing: 1 }}>{line}: {title}</H3>
              <Button light style={{ backgroundColor: '#eeeeee', height: 40, borderRadius: 0, marginTop: 14 }}>
                <Text style={{ fontWeight: '300', fontSize: 18, letterSpacing: 1 }}>{`$${price.toFixed(2)}`}</Text>
                <Text style={{ fontWeight: '300', fontSize: 14, marginLeft: 10, marginBottom: 2 }}>▶</Text>
              </Button>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <Container>
        <StatusBar barStyle="dark-content" />
        <Content style={{ paddingTop: 0, paddingBottom: 30 }}>
          {PRODUCTS.map(this.renderProduct)}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListScreen)
