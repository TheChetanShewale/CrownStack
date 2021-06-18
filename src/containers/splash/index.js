import React, {Component} from 'react';
import {SafeAreaView, Image, StyleSheet} from 'react-native';

import {APP_ICON} from '../../../assets/images';

class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('home');
    }, 3000);
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.icon} source={APP_ICON} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  icon: {
    width: 80,
    height: 80,
  },
});

export default Splash;
