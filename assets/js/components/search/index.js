import React from 'react'
import Downshift from 'downshift'

const items = ['About', 'Home', 'Resume', 'Sky Dive', 'Blog', 'Food']

export default function SearchBar (props) {
  return (
    <Downshift
      //   onChange={selection =>
      //     alert(selection ? `You selected ${selection}` : 'Selection Cleared')
      //   }
      itemToString={item => (item ? item : '')}
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
            />
            <ul className='absolute rounded bg-slate-800' {...getMenuProps()}>
              {isOpen
                ? items
                    .filter(
                      item =>
                        !inputValue ||
                        item.toLowerCase().includes(inputValue.toLowerCase())
                    )
                    .map((item, index) => (
                      <li
                        {...getItemProps({
                          key: item,
                          index,
                          item,
                          className: `w-full py-2 px-2 text-white ${
                            highlightedIndex === index
                              ? 'bg-slate-800 text-white font-bold'
                              : 'bg-gray-800'
                          }`
                        })}
                      >
                        {item}
                      </li>
                    ))
                : null}
            </ul>
          </div>
        </div>
      )}
    </Downshift>
  )
}
