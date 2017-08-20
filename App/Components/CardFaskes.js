import React from 'react';
import { Card, CardItem, Text, View, Left, Right, Icon } from 'native-base';
import styles from '../Styles/FetchListStyles';
import PinMap from './PinMap';

class CardFaskes extends React.Component {
  render () {
    return (
      <Card key={this.props.result.id} style={{ flex: 0 }}>
        <CardItem header>
          <View>
            <Text style={styles.nameHospital}>
              {this.props.result.nama_rsu}
              {this.props.result.nama_rsk}
              {this.props.result.nama_Puskesmas}
            </Text>
            <Text style={styles.descHospital}>
              {this.props.result.jenis_rsu}
              {this.props.result.jenis_rsk}
            </Text>
          </View>
        </CardItem>
        <CardItem>
          <Text note style={styles.address}>
            {this.props.result.location.alamat}
          </Text>
        </CardItem>
        <CardItem footer style={styles.footer}>
          <Left>
            <Icon name='call' style={styles.phoneIcon} />
            <Text style={styles.phone}>{this.props.result.telepon[0]}</Text>
          </Left>
          <Right>
            <PinMap location={this.props.result.location} />
          </Right>
        </CardItem>
      </Card>
    );
  }
}

export default CardFaskes;