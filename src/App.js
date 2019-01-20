import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';

class App extends Component {
  render() {
    return (
      <div>

        <Header />

        <div className="jumbotron">
          <div className="container">
            <h1>Shorten URLS</h1>
            <p>Insert any long URL below to shorten it. Remember small links are easier to read. 
              Also find analytics below of the URL you have shortened. Cheers.
            </p>

            <div  className="row">
                <div className="col-md-offset-2 col-md-8">
                  <div className="col-md-9" style={{paddingRight:1}}>
                      <input type="text" placeholder="Insert url to shorten..." className="form-control" />
                  </div>
                  <div className="col-md-3" style={{paddingLeft:1}}>
                    <button type="submit" className="btn btn-primary">Shorten &raquo;</button>
                  </div>
                </div>
            </div>

            <Loader />

          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>Analytics 1</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
            </div>
            <div className="col-md-4">
              <h2>Analytics 2</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
              <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
          </div>
            <div className="col-md-4">
              <h2>Analytics 3</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
            </div>
          </div>

          <hr />

          <Footer />
        </div>

      </div>
    );
  }
}

export default App;
