import React from 'react';
import { Linking } from 'react-native';
import { Card, CardItem, Text, View, Container, Header, Content, Title, Button,Left, Right, Body, Icon } from 'native-base';
import { Actions as NavigationActions } from 'react-native-router-flux';
import styles from '../Styles/FetchListStyles';
import { connect } from 'react-redux';
import {
  fetchDataFasksesRsUmum,
  fetchDataFasksesRsKhusus,
  fetchDataFasksesPuskesmas,
  resetState
} from '../Actions/faskes';
import API from '../Config/Api';

class FetchList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      fetchData: [],
      bgHeader: '#028090',
      open: false
    };
    this.api = API.create();
  }

  componentWillMount() {
    let title;
    let bgHeader;
    if (this.props.paramKey) {
      switch (this.props.paramKey) {
        case 'rsumum':
          title = 'Rumah Sakit Umum';
          bgHeader = '#02C39A';
          this.props.getFaskesUmum();
          break;
        case 'rskhusus':
          title = 'Rumah Sakit Khusus';
          bgHeader = '#02C39A';
          this.props.getFaskesKhusus();
          break;
        case 'puskesmas':
          title = 'Puskesmas';
          bgHeader = '#00A896';
          this.props.getFaskesPuskesmas();
          break;
      }

      this.setState({
        title: title,
        bgHeader: bgHeader
      });
    }
  }

  loadContent() {
    if (this.props.faskes.open) {
      return this.props.faskes.dataFaskes.data.map((result) => {
        let longlat = result.location.latitude + ',' + result.location.longitude;
        return (
          <Card key={result.id} style={{ flex: 0 }}>
            <CardItem header>
              <View>
                <Text style={styles.nameHospital}>
                  {result.nama_rsu}
                  {result.nama_rsk}
                  {result.nama_Puskesmas}
                </Text>
                <Text style={styles.descHospital}>
                  {result.jenis_rsu}
                  {result.jenis_rsk}
                </Text>
              </View>
            </CardItem>
            <CardItem>
              <Text note style={styles.address}>
                {result.location.alamat}
              </Text>
            </CardItem>
            <CardItem footer style={styles.footer}>
              <Left>
                <Icon name='call' style={styles.phoneIcon} />
                <Text style={styles.phone}>{result.telepon[0]}</Text>
              </Left>
              <Right>
                <Button onPress={() => {
                  Linking.openURL('https://www.google.co.id/maps/place/' + longlat);
                }} title='Get Directions' transparent >
                  <Icon name='pin' style={styles.pinIcon} />
                </Button>
              </Right>
            </CardItem>
          </Card>
        );
      });
    } 
      
    return (
      <View style={{
        alignItems: 'center'
      }}>
        <Text>Loading...</Text>
      </View>
    );
    
  }

  render() {
    return (
      <Container >
        <Header style={{ backgroundColor: this.state.bgHeader }}>
          <Left>
            <Button transparent onPress={() => {
              this.props.faskesReset();              
              NavigationActions.home();
            }}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title>{this.state.title}</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          {this.loadContent()}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = store => {
  return store;
};

const mapDispatchToProps = dispatch => {
  return {
    getFaskesUmum: () => dispatch(fetchDataFasksesRsUmum()),
    getFaskesKhusus: () => dispatch(fetchDataFasksesRsKhusus()),
    getFaskesPuskesmas: () => dispatch(fetchDataFasksesPuskesmas()),
    faskesReset: () => dispatch(resetState()) 
  };
};


export default connect(mapStateToProps,mapDispatchToProps)(FetchList);