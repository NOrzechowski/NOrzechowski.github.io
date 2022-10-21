import React, { Component } from 'react'
import { useState } from 'react'
import parse from 'html-react-parser'
import SearchBar from '../search/index.js'

class Header extends Component {
  // TODO: need to go back through and test on a mobile browser screen
  // home screen idea: map (perhaps spiraling with connected "wires") that shows my past experience and journey
  constructor (props) {
    super(props)
    this.state = {
      showSidebar: false,
      topValue: false
    }

    this.setShowSidebar = this.setShowSidebar.bind(this)
    this._handleKeyDown = this._handleKeyDown.bind(this)
    this.setSearchBarValue = this.setSearchBarValue.bind(this)
    this.valueSelected = this.valueSelected.bind(this)
  }

  valueSelected = selection => {
    if (selection?.path) {
      var base_url = window.location.origin
      window.location.href = base_url + selection.path.toLowerCase()
    }
  }

  setSearchBarValue = filteredValues => {
    if (filteredValues && filteredValues[0]) {
      this.setState({ topValue: filteredValues[0] })
    }
  }

  _handleKeyDown = (e, setValueCallback) => {
    if (e.key === 'Enter') {
      if (this.state.topValue?.path) {
        var base_url = window.location.origin
        window.location.href = base_url + this.state.topValue.path.toLowerCase()
      }
    }
    if (e.key === 'Tab') {
      //TODO: iterate through options when pressed multiple times in a row
      e.preventDefault()
      if (this.state.topValue) {
        setValueCallback(this.state.topValue.name)
      }
    }
  }

  setShowSidebar = showSidebar => {
    this.setState({ showSidebar: showSidebar })
  }

  ShowMenuSelector ({ showSidebar, setShowSidebar }) {
    // TODO: add a helpful tooltip indicating what this does.
    return (
      <>
        <svg
          width='40px'
          height='28px'
          viewBox='0 0 25 25'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => setShowSidebar(!showSidebar)}
          className='z-30 flex items-center cursor-help right-10 top-6'
          title='Click for menu/help'
        >
          <path
            fill='none'
            stroke='#fdfdfd'
            strokeWidth='3'
            d='M2,5 L8,11 L2,17 M9,17 L23,17'
          />
        </svg>
      </>
    )
  }

  render () {
    const showSidebar = this.state.showSidebar
    const url = new URL(window.location.href)
    const pathname = url?.pathname

    return (
      <>
        <div className='flex pt-2'>
          <div className=''>
            <div className='ml-1 pl-1'>
              <this.ShowMenuSelector
                showSidebar={showSidebar}
                setShowSidebar={this.setShowSidebar}
              />
              {/* Slide out: */}
              <div
                className={`top-0 left-1/4 w-1/2 bg-black/75 text-white fixed h-1/8 z-40 ease-in-out duration-300 ${
                  showSidebar ? 'translate-x-0 ' : '-translate-y-full'
                }`}
              >
                <div className='md:w-full px-2 pt-2'>
                  <div className='text-sky-600'>
                    Start typing to see navigable options within the site. You
                    can use "tab" and "enter" like you would in a normal
                    terminal, or you can click with your mouse. Have fun!
                  </div>
                </div>
                <div className='md:w-full pt-5 mb-1 pb-1'>
                  <div className='flex justify-center'>
                    <svg
                      onClick={() => this.setShowSidebar(!showSidebar)}
                      width='50'
                      height='25'
                      viewBox='0 0 20 10'
                      strokWidth='3'
                      className='cursor-pointer'
                    >
                      <path
                        fillRule='evenodd'
                        fill='white'
                        d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-10/12 md:w-6/12'>
            <SearchBar
              _handleKeyDown={this._handleKeyDown}
              setSearchBarValue={this.setSearchBarValue}
              valueSelected={this.valueSelected}
              currentPath={pathname}
            />
          </div>
          <div className='w-2/12 md:w-6/12'>
            <div className='flex justify-end pr-5 md:pr:10'>
              {parse(this.props.firstDiv.innerHTML)}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Header
