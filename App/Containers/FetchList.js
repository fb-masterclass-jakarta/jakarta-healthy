import React from 'react';
import { ListView } from 'react-native';
import { Text, View, Container, Header, Content, Title, Button,Left, Right, Body, Icon } from 'native-base';
import { Actions as NavigationActions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  fetchDataFasksesRsUmum,
  fetchDataFasksesRsKhusus,
  fetchDataFasksesPuskesmas,
  resetState
} from '../Actions/faskes';
import CardFaskes from '../Components/CardFaskes';
import API from '../Config/Api';


class FetchList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
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

  componentWillReceiveProps(nextProps){
    if (nextProps.faskes.open) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.faskes.dataFaskes.data)
      });
    }
  }

  backToDashboard(){
    this.props.faskesReset();
    NavigationActions.home();
  }

  render() {
    return (
      <Container >
        <Header style={{ backgroundColor: this.state.bgHeader }}>
          <Left>
            <Button transparent onPress={() => this.backToDashboard() }>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title>{this.state.title}</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          {
            !this.props.faskes.open &&
            <View style={{
              alignItems: 'center'
            }}>
              <Text>Loading...</Text>
            </View>
          }
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData)=><CardFaskes result={rowData} />}
          />
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