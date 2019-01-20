import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/clicks.actions';
import Loader from './Loader';


class Clicks extends Component {

  constructor(props){
    super(props);

  }


  async componentDidMount(){
    await this.props.actions.beforeFetchResult();
    this.props.actions.getClicksAnalytics(this.props.bitlink);
  }


  render() {
    return (
      <div className="col-md-4"  style={{textAlign:'center'}}>
          <h2>Clicks Analytics</h2>
          
          {this.props.clicks.loading && <Loader />}

          {(!this.props.clicks.loading) &&
            <div>
              <h4>Clicks Today</h4>
              <h1>{this.props.clicks.analytics.total_clicks}</h1>
            </div>
          }
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
    return {
        home: state.home,
        clicks: state.clicks
    }
}


const mapDispatchToProps = (dispatch) =>{
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Clicks);