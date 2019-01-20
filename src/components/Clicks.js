import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/clicks.actions';


class Clicks extends Component {

  constructor(props){
    super(props);

  }


  componentDidMount(){
    console.log('Clicks', this.props.bitlink);
  }

 

  render() {
    return (
      <div className="col-md-4">
          <h2>Clicks Analytics</h2>
          <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
          <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
    return {
        home: state.home
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Clicks);
