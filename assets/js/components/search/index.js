import React from 'react'
import Downshift from 'downshift'

const items = [
  { name: 'About', path: '/about' },
  { name: 'Home', path: '/' },
  { name: 'Resume', path: '/' },
  { name: 'Sky Dive', path: '/' },
  { name: 'Blog', path: '/' },
  { name: 'food', path: '/' }
]

export default function SearchBar (props) {
  return (
    <Downshift
      onChange={selection => props.setSearchBarValue(selection.path, '')}
      onInputValueChange={value => props.setSearchBarValue('', value.name)}
      itemToString={item => (item.name ? item.name : '')}
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
      }) => (
        <div className='m-auto w-full'>
          <div className='w-full relative'>
            <input
              placeholder='Neil Orzechowski (type to explore)'
              className='w-full placeholder-white placeholder-opacity-75 bg-black'
              {...getInputProps()}
              onKeyDown={props._handleKeyDown}
            />
            <ul
              className='absolute w-full rounded bg-slate-800'
              {...getMenuProps()}
            >
              {isOpen
                ? items
                    .filter(
                      item =>
                        !inputValue ||
                        item.name
                          .toLowerCase()
                          .includes(inputValue.toLowerCase())
                    )
                    .map((item, index) => {
                      console.log('item yo: ', item)
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
      )}
    </Downshift>
  )
}
