import React, { Component } from 'react'
import { useState } from 'react'
import parse from 'html-react-parser'
import SearchBar from '../search/index.js'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showSidebar: false,
      searchBarValue: false,
      topValue: false
    }

    this.setShowSidebar = this.setShowSidebar.bind(this)
    this._handleKeyDown = this._handleKeyDown.bind(this)
    this.setSearchBarValue = this.setSearchBarValue.bind(this)
  }

  setSearchBarValue = (val, filteredValues) => {
    this.setState({ searchBarValue: val })
    if (filteredValues && filteredValues[0]) {
      this.setState({ topValue: filteredValues[0].path })
    }
  }

  _handleKeyDown = e => {
    if (e.key === 'Enter') {
      if (this.state.searchBarValue)
        window.location.href = this.state.searchBarValue.toLowerCase()
    }
    if (e.key === 'Tab') {
      e.preventDefault()
      if (this.state.topValue)
        window.location.href = this.state.topValue.toLowerCase()
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
    if (!showSidebar) {
      // TODO: add a helpful tooltip indicating what this does.
      return (
        <>
          <svg
            width='40px'
            height='28px'
            viewBox='0 0 25 25'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => setShowSidebar(!showSidebar)}
            className='z-30 flex items-center cursor-pointer right-10 top-6'
            title='Click for menu/help'
          >
            <path
              fill='none'
              stroke='#fdfdfd'
              stroke-width='3'
              d='M2,5 L8,11 L2,17 M9,17 L23,17'
            />
          </svg>
        </>
      )
    }
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
                className={`top-0 right-0 w-[35vw] bg-black p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-300 ${
                  showSidebar ? 'translate-x-0 ' : 'translate-x-full'
                }`}
              >
                <h3 className='mt-20 text-4xl font-semibold text-white'>
                  (feature coming)
                </h3>
              </div>
            </div>
          </div>
          <div className='md:w-3/12 mr-5'>
            <SearchBar
              _handleKeyDown={this._handleKeyDown}
              setSearchBarValue={this.setSearchBarValue}
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
