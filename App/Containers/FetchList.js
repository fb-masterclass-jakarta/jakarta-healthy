import React from 'react';
import { ListView } from 'react-native';
import { Container, Content } from 'native-base';
import { Actions as NavigationActions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  fetchDataFasksesRsUmum,
  fetchDataFasksesRsKhusus,
  fetchDataFasksesPuskesmas,
  resetState
} from '../Actions/faskes';
import Spinner from 'react-native-loading-spinner-overlay';
import CardFaskes from '../Components/CardFaskes';
import API from '../Config/Api';



class FetchList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.api = API.create();
  }

  componentWillMount() {
    if (this.props.paramKey) {
      switch (this.props.paramKey) {
        case 'rsumum':
          NavigationActions.refresh({ title: 'Rumah Sakit Umum' });
          this.props.getFaskesUmum();
          break;
        case 'rskhusus':
          NavigationActions.refresh({ title: 'Rumah Sakit Khusus' });
          this.props.getFaskesKhusus();
          break;
        case 'puskesmas':
          NavigationActions.refresh({ title: 'Puskesmas' });
          this.props.getFaskesPuskesmas();
          break;
      }
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.faskes.open) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.faskes.dataFaskes.data)
      });
    }
  }


  componentWillUnmount(){
    this.props.faskesReset();
  }

  render() {
    return (
      <Container >
        <Spinner visible={this.props.general.loadingScreen} textStyle={{ color: '#FFF' }} />
        <Content padder>
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