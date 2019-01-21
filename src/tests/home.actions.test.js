import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { addLink } from '../services';
import { configure } from 'enzyme';
import { Link } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import {spy} from 'sinon';

configure({ adapter: new Adapter() });


describe("Test Add Link service", () => {
  it('check if a fetch promise is returned when a link is persisted', async () => {
    
    let res = await addLink({long_url:"https://google.com", short_url:"bit.ly"});
    expect(res.status).toEqual("success");
  });

});
