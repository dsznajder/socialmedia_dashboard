import React from 'react';
import {mount} from 'enzyme';
import DashboardComponent from 'Dashboard/components/Dashboard'

describe('DashboardComponent', () => {
  let subjectComponent, renderSubject;

  beforeEach(() => {
    renderSubject = () => {
      return mount(<DashboardComponent />)
    }
    let subjectComponent = renderSubject()
  })

  it('renders dashboard', () => {
    // Expecting to fail because my spec environment is failing :D TODO: Fix it!!!
    expect(subjectComponent).toEqual('some string')
  })
})
