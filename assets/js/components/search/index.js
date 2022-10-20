import React from 'react'
import Downshift from 'downshift'

const routes = [
  { name: 'About', path: '/about/' },
  { name: 'Home', path: '/', displayValue: 'Neil Orzechowski' },
  { name: 'Resume', path: '/' },
  { name: 'Bungee Jump', path: '/' },
  { name: 'Blog', path: '/' },
  { name: 'food', path: '/' }
]

export default function SearchBar (props) {
  let filteredRoutes = []
  const currentRoute = routes.find(el => el.path == props.currentPath)
  const currentDisplay = currentRoute?.displayValue || currentRoute?.name
  return (
    <Downshift
      onChange={selection => {
        props.setSearchBarValue(selection.path, '')
      }}
      onStateChange={value => {
        props.setSearchBarValue('', filteredRoutes)
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
        filteredRoutes = routes.filter(
          item =>
            !inputValue ||
            item.name.toLowerCase().includes(inputValue.toLowerCase())
        )
        return (
          <div className='m-auto w-full'>
            <div className='w-full relative'>
              <input
                placeholder={currentDisplay + ' (type to explore)'}
                className='w-full placeholder-white placeholder-opacity-75 bg-black'
                {...getInputProps()}
                onKeyDown={props._handleKeyDown}
              />
              <ul
                className='absolute w-full rounded bg-slate-800'
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
                            className: `w-full py-2 px-2 text-white ${
                              highlightedIndex === index
                                ? 'bg-slate-800 text-white font-bold'
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
