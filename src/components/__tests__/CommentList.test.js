import React from 'react';
import Root from '../../Root';
import { mount } from 'enzyme';
import CommentList from '../CommentList';

let component;

beforeEach(() => {
    const initialState = {
        comments: ['Comment1', 'Comment2']
    };
    component = mount(<Root initialState={initialState}><CommentList /></Root>);
});

it('should render a list item for each comment', () => {
    expect(component.find('li').length).toEqual(2);
});

it('should render the text for each comment', () => {
    expect(component.render().text()).toContain('Comment1');
    expect(component.render().text()).toContain('Comment2');
})