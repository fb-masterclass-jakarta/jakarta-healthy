import React from 'react';
import { Linking } from 'react-native';
import { Button, Icon } from 'native-base';
import styles from '../Styles/FetchListStyles';

class PinMap extends React.Component {
  render() {
    let longlat = this.props.location.latitude + ',' + this.props.location.longitude;
    return (
      <Button onPress={() => {
        Linking.openURL('https://www.google.co.id/maps/place/' + longlat);
      }} title='Get Directions' transparent >
        <Icon name='pin' style={styles.pinIcon} />
      </Button>
    );
  }
}

export default PinMap;