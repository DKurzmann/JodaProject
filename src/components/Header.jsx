import { Transition } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import { useStore } from '@nanostores/react'
import { isNavOpen, isStartPage } from '../navStore'

export default function Header() {
  const navStartPageID = 'navStartPageID'
  const navGuestBookID = 'navGuestBookID'
  const $isNavOpen = useStore(isNavOpen)
  const $isStartPage = useStore(isStartPage)
  var guestBookElement = document.getElementById('guestBookID')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        isNavOpen.set(true)
      } else {
        isNavOpen.set(false)
      }
    }
    window.addEventListener('scroll', handleScroll)

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      id="headerID"
      className="pointer-events-none fixed top-6 z-30 grid w-full grid-cols-[1fr,min(640px,100%),1fr] px-4">
      <Transition
        className="shadow-surface-glass pointer-events-auto col-start-2 -mx-px rounded-2xl bg-gray-800/95 px-4 py-2.5 backdrop-blur will-change-transform [@supports(backdrop-filter:blur(0px))]:bg-stone-700/[25%]"
        show={isNavOpen.get() || guestBookElement.style.display == 'block'}
        enter="transition duration-100 ease-in-out"
        enterFrom="opacity-0 scale-90"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in-out"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button id={navStartPageID} onClick={(e) => buttonClick(e)}>
              <h2 style={{ color: 'white' }}>Joda Development</h2>
            </button>
          </div>
          <button id={navGuestBookID} onClick={(e) => buttonClick(e)}>
            <h2 style={{ color: 'white' }}>Guestbook</h2>
          </button>
        </div>
      </Transition>
    </div>
  )
  function buttonClick(e) {
    const id = e.currentTarget.id
    var startPageElement = document.getElementById('startPageID')
    var guestBookElement = document.getElementById('guestBookID')
    var navElement = document.getElementById('navID')
    if (id == navStartPageID) {
      startPageElement.style.display = 'block'
      navElement.style.display = 'grid'
      guestBookElement.style.display = 'none'
      isStartPage.set(true)
    } else if (id == navGuestBookID) {
      guestBookElement.style.display = 'block'
      startPageElement.style.display = 'none'
      navElement.style.display = 'none'
      isStartPage.set(false)
    }
  }
}
