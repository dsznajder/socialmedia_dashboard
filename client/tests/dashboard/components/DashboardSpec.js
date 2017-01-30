import React from 'react';
import {mount} from 'enzyme';
import DashboardComponent from 'Dashboard/components/Dashboard'

describe('DashboardComponent', () => {
  let subjectComponent, renderSubject;

  beforeEach(() => {
    renderSubject = () => {
      return mount(<DashboardComponent />);
    };
    subjectComponent = renderSubject();
  });

  it('renders dashboard', () => {
    let addPostButton = subjectComponent.find('form').find('input').nodes[0].value;
    let header = subjectComponent.find('h3').nodes[0].innerHTML;
    expect(header).toEqual('Posts:');
    expect(addPostButton).toEqual('Add post');
  })
})
