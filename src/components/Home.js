import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/home.actions';

import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';
import Placeholder from './Placeholder';
import Analytics from './Analytics';

class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
        long_url: ''
    }

    this.handleShortenTask = this.handleShortenTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clear = this.clear.bind(this);
    this.persistResource = this.persistResource.bind(this);
  }

  async handleShortenTask(){
    await this.props.actions.resetChildComponent();
    await this.props.actions.beforeFetchResult();
    this.props.actions.getShortenedUrl(this.state.long_url);
  }

  handleChange(e) {
    this.setState({
        long_url: e.target.value 
    });
  }

  clear(){
    this.props.actions.resetChildComponent();  
  }

  persistResource(fullObject){
    const data = {
      long_url: fullObject.long_url,
      short_url: fullObject.id
    };
    this.props.actions.persistResource(data);
  }

  render() {
    return (
      <div>

        <Header />

        <div className="jumbotron">
          <div className="container">
            <h1>Shorten URLS</h1>
            <p style={{textAlign:'center'}}>Insert any long URL below to shorten it. Remember small links are easier to read. 
              Also find analytics below of the URL you have shortened. Cheers.
            </p>

            <br />

            <div  className="row">

                <div className="col-md-offset-2 col-md-8" style={{display:(this.props.home.display)?'block': 'none'}}>
                  <div class="alert alert-success alert-dismissible">
                    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                    <strong>{this.props.home.msg_type}!</strong> {this.props.home.message}
                  </div>
                </div>

                <div className="col-md-offset-2 col-md-8">
                  <div className="col-md-9" style={{paddingRight:1}}>
                      <input type="text" placeholder="Insert url to shorten... e.g http://google.com" onChange={this.handleChange} className="form-control" />
                  </div>
                  <div className="col-md-3" style={{paddingLeft:1}}>
                    <button type="button" className="btn btn-primary" onClick={() => this.handleShortenTask()}>Shorten &raquo;</button>
                  </div>
                </div>
            </div>

            {this.props.home.loading && <Loader />}
            
            {this.props.home.resource.link &&
            <div  className="row">
                <div className="col-md-offset-2 col-md-8">

                    <p style={{textAlign:'center', marginTop:20}}>
                        <img src="/extras/image/check.png" style={{width:25}} /> 
                        <a style={{paddingLeft:10}}>{this.props.home.resource.link}</a> ({this.props.home.resource.long_url})
                        <br />
                        <br />
                        <button type="button" onClick={() => this.clear()} className="btn btn-warning" style={{marginRight:5}}>Clear Stats</button>
                        <a class="btn btn-success btn-lg" onClick={() => this.persistResource(this.props.home.resource)} href="#" role="button">Save Link &raquo;</a>
                    </p>
                    
                </div>
            </div>}

          </div>
        </div>

        <div className="container col-md-offset-2 col-md-8">
            <div className="row" style={{backgroundColor:'#ffffff', borderRadius:10,}}>
                {this.props.home.resource.link ?
                <Analytics bitlink={this.props.home.resource.id}/>:
                <Placeholder /> 
                }   
            </div>
            <hr />
            <Footer />
        </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
