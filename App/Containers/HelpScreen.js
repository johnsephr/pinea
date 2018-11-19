import React, { Component } from 'react'
import { connect } from "react-redux";
import { Image, Linking } from "react-native";
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
} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';

// Styles
import styles from './Styles/HelpScreenStyle'

class HelpScreen extends Component {

  static navigationOptions = {
    tabBarLabel: 'Support',
    tabBarIcon: ({ tintColor, focused }) => <Icon name="envelope" size={21} color={focused ? '#272727' : '#999999'} />,
    tabBarOnPress: (arg) => { Linking.openURL('mailto:help@veritasbioactives.com?Subject=Veritas%20Bioactives%20Support%20Ticket&body=Phone*:%0AMessage*:') }
  };

  render() {
    return (
      <Container style={{ alignItems: 'center' }}>
        <Content padder contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
          <H1>help@veritasbioactives.com</H1>
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

export default connect(mapStateToProps, mapDispatchToProps)(HelpScreen)
