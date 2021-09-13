/* global beforeEach describe it */
import React from 'react'
import ExclusionManagementNavbar from './ExclusionManagementNavbar'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import i18n from '../../i18n/i18n'
import { I18nextProvider } from 'react-i18next'
import fixtures from '../../../../test/fixtures'
import { Button } from 'reactstrap'
import { BrowserRouter as Router } from 'react-router-dom'

const mockStore = configureStore([thunk])
const store = mockStore(fixtures.client.reduxState)

describe('Containers:ExclusionManagement:ExclusionManagementNavbar', () => {
  beforeEach((done) => {
    done()
  })

  it('Should render ExclusionManagementNavbar component', () => {
    const wrapper = generateComponent()
    wrapper.mount()
  })

  it('Should render 2 button (Add new exclusion and Bulk Update)', () => {
    const wrapper = generateComponent().mount()
    expect(wrapper.find(Button).length).to.equal(2)
  })
})

const generateComponent = (props = {}) => {
  return mount(
    <Provider store={store}>
      <Router>
        <I18nextProvider i18n={i18n}>
          <ExclusionManagementNavbar />
        </I18nextProvider>
      </Router>
    </Provider>
  )
}