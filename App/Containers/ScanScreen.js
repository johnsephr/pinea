import React, { Component } from 'react'
import { Image, Linking, Alert, StatusBar } from "react-native";
import { connect } from 'react-redux'
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
import NfcManager, {NdefParser} from 'react-native-nfc-manager';
import Video from 'react-native-video';
import * as Animatable from 'react-native-animatable';

import BgVideo from '../Images/bg.mov';
import WhiteLogoImage from '../Images/pinea-logo-white.png';

// Styles
import styles from './Styles/ScanScreenStyle'

class ScanScreen extends Component {
  render () {
    return (
      <Container style={styles.container}>
        {/* <KeyboardAvoidingView behavior='position'> */}
          <Text>ScanScreen</Text>
        {/* </KeyboardAvoidingView> */}
      </Container>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(ScanScreen)
