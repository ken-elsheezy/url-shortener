import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/list.actions';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import Loader from './Loader';
import Placeholder from './Placeholder';


/**
 * This is the component that displays all
 * the saved bitlinks as a list
 */
class List extends Component {

  constructor(props){
    super(props);

  }


  async componentDidMount(){
    //go query list of saved items
    await this.props.actions.beforeFetchResult();
    this.props.actions.retrieveResources();
  }


  render() {
    return (
      <div>
        <Header />
          <div className="container col-md-offset-2 col-md-8" style={{marginTop:100}}>
              <h2>Saved Links</h2>
              {(this.props.list.array.length === 0) &&
              <Placeholder text="You do not have any saved links at the moment" />}
              
              {this.props.list.loading && <Loader />}

              {this.props.list.array.map((item, index) => (
                <Card key={index} item={item}/>
              ))}

              <hr />
              <Footer />
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
