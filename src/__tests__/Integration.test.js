import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from '../Root';
import App from '../components/App';

beforeEach(() => {
   moxios.install();
   moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
       status: 200,
       response: [{ name: 'Comment1', name: 'Comment2' }]
   });
});

afterEach(() => {
    moxios.uninstall();
});

it ('should fetch a list of comments and then display them', () => {
    const app = mount(<Root><App /></Root>);

    app.find('.fetch-comments').simulate('click');
    app.update();

    expect(app.find('li').length).toEqual(2);
});