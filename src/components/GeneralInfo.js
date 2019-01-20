import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/generalinfo.actions';
import Loader from './Loader';



class GeneralInfo extends Component {

  constructor(props){
    super(props);

  }


  async componentDidMount(){
    await this.props.actions.beforeFetchResult();
    this.props.actions.getGeneralAnalytics(this.props.bitlink);
  }


  render() {
    return (
      <div className="col-md-4">
        <h2>General Info</h2>
        {this.props.general.loading && <Loader />}

        {(this.props.general.analytics.id && !this.props.general.loading) &&
          <div>
            <p><b>Created At: </b> {this.props.general.analytics.created_at} </p>
            <p><b>Id: </b> {this.props.general.analytics.id} </p>
            <p><b>Link: </b> {this.props.general.analytics.link} </p>
            <p><b>Long URL: </b> {this.props.general.analytics.long_url} </p>
          </div>
        }
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
    return {
        home: state.home,
        general: state.general
    }
}


const mapDispatchToProps = (dispatch) =>{
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralInfo);