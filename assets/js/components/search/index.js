import React from 'react'
import Downshift from 'downshift'
import { useState } from 'react'
import { routes } from './routes'

export default function SearchBar (props) {
  const [inputValue, setInputValue] = useState('')
  const [filteredRoutes, setFilteredRoutes] = useState([])
  const currentRoute = routes.find(el => el.path == props.currentPath)
  const currentDisplay = currentRoute?.displayValue || currentRoute?.name

  return (
    <Downshift
      inputValue={inputValue}
      onChange={selection => {
        props.valueSelected(selection)
      }}
      onStateChange={(changes, stateAndHelpers) => {
        if (changes.hasOwnProperty('inputValue')) {
          const filteredItems = routes.filter(
            item =>
              !changes.inputValue ||
              item.name.toLowerCase().includes(changes.inputValue.toLowerCase())
          )
          setFilteredRoutes(filteredItems)
          props.setSearchBarValue(filteredItems)

          setInputValue(changes.inputValue)
        }
      }}
      itemToString={item => {
        return item && item.name ? item.name : ''
      }}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem
      }) => {
        return (
          <div className='m-auto w-full'>
            <div className='w-full relative z-30'>
              <input
                {...getInputProps({
                  onKeyDown: event => {
                    props._handleKeyDown(event, setInputValue)
                  }
                })}
                placeholder={currentDisplay + ' (type to explore)'}
                className='w-full placeholder-white placeholder-opacity-75 bg-black'
              />

              <ul
                className='absolute w-full rounded bg-slate-800/75'
                {...getMenuProps()}
              >
                {isOpen
                  ? filteredRoutes.map((item, index) => {
                      const name = item.name
                      return (
                        <li
                          {...getItemProps({
                            key: name,
                            index,
                            item,
                            className: `w-full cursor-pointer py-2 px-2 text-white ${
                              highlightedIndex === index
                                ? 'bg-slate-800/75 text-white font-bold'
                                : 'bg-gray-800'
                            }`
                          })}
                        >
                          {name}
                        </li>
                      )
                    })
                  : null}
              </ul>
            </div>
          </div>
        )
      }}
    </Downshift>
  )
}
