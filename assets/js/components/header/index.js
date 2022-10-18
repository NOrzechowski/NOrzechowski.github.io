import React, { Component } from 'react'
import { useState } from 'react'
import parse from 'html-react-parser'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showSidebar: false
    }
    this.setShowSidebar = this.setShowSidebar.bind(this)
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
      return (
        <>
          <svg
            onClick={() => setShowSidebar(!showSidebar)}
            className='z-30 flex items-center cursor-pointer right-10 top-6'
            fill='#fdfdfd'
            viewBox='0 0 100 80'
            width='40'
            height='40'
          >
            <rect width='100' height='10'></rect>
            <rect y='30' width='100' height='10'></rect>
            <rect y='60' width='100' height='10'></rect>
          </svg>
        </>
      )
    }
  }

  render () {
    const showSidebar = this.state.showSidebar
    return (
      <>
        <div className='absolute'>
          <div className=''>
            <this.ShowButton
              showSidebar={showSidebar}
              setShowSidebar={this.setShowSidebar}
            />
            {/* OR: */}
            <this.ShowMenuSelector
              showSidebar={showSidebar}
              setShowSidebar={this.setShowSidebar}
            />
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
        <div className='px-16'>{parse(this.props.firstDiv.innerHTML)}</div>
      </>
    )
  }
}
export default Header
