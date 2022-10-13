import React, { Component } from 'react'
import { useState } from 'react'

class Hello extends Component {
  constructor () {
    super()
    this.state = {
      showSidebar: false
    }
  }

  setShowSidebar = showSidebar => {
    this.setState({ showSidebar: showSidebar })
  }

  render () {
    console.log('rendering react component. ')
    const showSidebar = this.state.showSidebar
    return (
      <>
        {showSidebar ? (
          <button
            className='flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50'
            onClick={() => this.setShowSidebar(!showSidebar)}
          >
            x
          </button>
        ) : (
          <svg
            onClick={() => this.setShowSidebar(!showSidebar)}
            className='fixed  z-30 flex items-center cursor-pointer right-10 top-6'
            fill='#2563EB'
            viewBox='0 0 100 80'
            width='40'
            height='40'
          >
            <rect width='100' height='10'></rect>
            <rect y='30' width='100' height='10'></rect>
            <rect y='60' width='100' height='10'></rect>
          </svg>
        )}

        <div
          className={`top-0 right-0 w-[35vw] bg-blue-600  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
            showSidebar ? 'translate-x-0 ' : 'translate-x-full'
          }`}
        >
          <h3 className='mt-20 text-4xl font-semibold text-white'>
            I am a sidebar
          </h3>
        </div>
      </>
    )
  }
}
export default Hello
