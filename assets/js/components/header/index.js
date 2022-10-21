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

  ShowButton ({ showSidebar, setShowSidebar }) {
    if (showSidebar) {
      return (
        <>
          <button
            className='flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50'
            onClick={() => setShowSidebar(!showSidebar)}
          >
            x
          </button>
        </>
      )
    }
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
              <this.ShowButton
                showSidebar={showSidebar}
                setShowSidebar={this.setShowSidebar}
              />
              {/* OR: */}
              <this.ShowMenuSelector
                showSidebar={showSidebar}
                setShowSidebar={this.setShowSidebar}
              />
              {/* Slide out: */}
              <div
                className={`top-0 left-0 w-full bg-black/75 text-white fixed h-28 z-40 ease-in-out duration-300 ${
                  showSidebar ? 'translate-x-0 ' : '-translate-y-full'
                }`}
              >
                <div className='flex pt-2'>
                  <div className='md:w-full mr-5'>
                    <div className='text-white'>
                      Start typing to see navigable options within the site. You
                      can use "tab" and "enter" like you would in a normal
                      terminal, or you can click with your mouse.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='md:w-3/12 mr-5'>
            <SearchBar
              _handleKeyDown={this._handleKeyDown}
              setSearchBarValue={this.setSearchBarValue}
              valueSelected={this.valueSelected}
              currentPath={pathname}
            />
          </div>
          <div className='md:w-8/12'>
            <div className=''>{parse(this.props.firstDiv.innerHTML)}</div>
          </div>
        </div>
      </>
    )
  }
}

export default Header
