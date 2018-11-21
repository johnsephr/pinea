import { StackNavigator } from 'react-navigation'
// import HelpScreen from '../Containers/HelpScreen'
import ProductListScreen from '../Containers/ProductListScreen'
import ScanScreen from '../Containers/ScanScreen'
// import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    Products: { screen: ProductListScreen },
    Scan: { screen: ScanScreen },
    // Help: { screen: HelpScreen },
    // LaunchScreen: { screen: LaunchScreen }
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'Scan',
    navigationOptions: {
      headerStyle: styles.header
    }
  })

export default PrimaryNav
