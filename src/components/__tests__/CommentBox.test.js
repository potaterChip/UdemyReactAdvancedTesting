import React from 'react';
import { mount } from 'enzyme';

import CommentBox from '../CommentBox';
import Root from '../../Root';

let component;

beforeEach(() => {
    component = mount(
        <Root><CommentBox/></Root>
    );
});

afterEach(() => {
    component.unmount();
});

it('should render a text area and 2 buttons', () => {
    expect(component.find('textarea').length).toEqual(1);
    expect(component.find('button').length).toEqual(2);
});

describe('text area tests', () => {

    beforeEach(() => {
        component.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        component.update();
    });

    it('should change the comment state when text is changed', () => {
        expect(component.find('textarea').prop('value')).toEqual('new comment');
    });

    it('should clear the comment box when the form is submitted', () => {
        component.find('form').simulate('submit');
        component.update();
        expect(component.find('textarea').prop('value')).toEqual('');
    });
});