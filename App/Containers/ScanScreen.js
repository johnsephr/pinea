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
import NfcManager, { NdefParser } from 'react-native-nfc-manager';
import Video from 'react-native-video';
import * as Animatable from 'react-native-animatable';

import BgVideo from '../Images/bg.mov';
import WhiteLogoImage from '../Images/pinea-logo-white.png';

// Styles
import styles from './Styles/ScanScreenStyle'

class ScanScreen extends Component {

  constructor(props) {
    super(props);

    this.onClickScanButton = this.onClickScanButton.bind(this);
  }

  static navigationOptions = {
    tabBarLabel: 'Scan',
    tabBarIcon: ({ tintColor, focused }) => <Icon name="wifi" size={21} color={focused ? '#272727' : '#999999'} />,
  };

  onClickScanButton() {
    NfcManager.registerTagEvent(tag => {
      try {
        let uri = NdefParser.parseUri(tag.ndefMessage[0]).uri;
        console.log('parseUri: ' + uri);
        Linking.openURL(uri)
      } catch (e) {
        Alert.alert(
          'Error',
          'Please make sure you are scanning a valid tag and try again.',
          [
            // { text: 'View Products', onPress: () => { this.props.navigation.navigate('Products') } },
            { text: 'OK', onPress: () => console.log('OK Pressed') }
          ],
          {
            cancelable: false
          }
        )
      }
    }, 'Hold your device over the tag', true)

    NfcManager.start({
      onSessionClosedIOS: () => {
        console.log('ios session closed');
        NfcManager.unregisterTagEvent()
      }
    })
      .then(result => {
        console.log('start OK', result);
      })
      .catch(error => {
        console.warn('device does not support nfc!');
        Alert.alert(
          'Error',
          'Device does not support NFC.',
          [
            // { text: 'View Products', onPress: () => { this.props.navigation.navigate('Products') } },
            { text: 'OK', onPress: () => console.log('OK Pressed') }
          ],
          {
            cancelable: false
          }
        )
      })
  }

  render() {
    return (
      <Container style={{ alignItems: 'center' }}>
        <StatusBar barStyle="light-content" />
        <Video
          source={BgVideo}
          resizeMode="cover"
          playWhenInactive={true}
          muted={true}
          repeat={true}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            backgroundColor: '#000000',
            opacity: 0.4
          }}
        />
        <Content padder contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
          <Button transparent onPress={this.onClickScanButton} style={{ flexDirection: 'column', height: 210 }}>
            <Image source={WhiteLogoImage} resizeMode="contain" style={{ width: 240, height: 130 }} />
            <Animatable.Text
              animation="pulse"
              easing="ease-out"
              iterationCount="infinite"
              duration={5000}
              style={{
                color: 'white',
                fontSize: 30,
                fontWeight: '300',
                marginTop: 20,
                lineHeight: 30,
                letterSpacing: 2
              }}
            >
              Tap to scan
              </Animatable.Text>
          </Button>
        </Content>
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
