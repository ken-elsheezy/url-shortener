import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import { getLinks} from '../services';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe("Test Fetch Persisted Links", () => {
  it('check if promise contains an array', async () => {
    
    let res = await getLinks();
    expect(res.result instanceof Array).toEqual(true);
  });

});
