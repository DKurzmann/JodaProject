import React from 'react'
import { useStore } from '@nanostores/react'
import { isNavOpen, isStartPage } from '../navStore'
import clsx from 'clsx'

export default function Navigation() {
  const $isNavOpen = useStore(isNavOpen)
  const $isStartPage = useStore(isStartPage)
  return (
    <div
      id="navID"
      className="pointer-events-none top-6 z-30 grid w-full grid-cols-[1fr,min(640px,100%),1fr] px-4 absolute">
      <div className="shadow-surface-glass pointer-events-auto col-start-2 -mx-px rounded-2xl px-4 py-2.5 backdrop-blur will-change-transform">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button id="navStartPageID" onClick={(e) => buttonClick(e)}>
              <h2 style={{ color: 'white' }}>Joda Development</h2>
            </button>
          </div>
          <button id="navGuestBookID" onClick={(e) => buttonClick(e)}>
            <h2 style={{ color: 'white' }}>Guestbook</h2>
          </button>
        </div>
      </div>
    </div>
  )
  function buttonClick(e) {
    const id = e.currentTarget.id
    var startPageElement = document.getElementById('startPageID')
    var guestBookElement = document.getElementById('guestBookID')
    var navElement = document.getElementById('navID')
    if (id == 'navStartPageID') {
      startPageElement.style.display = 'block'
      navElement.style.display = 'grid'
      guestBookElement.style.display = 'none'
      isStartPage.set(true)
    } else if (id == 'navGuestBookID') {
      guestBookElement.style.display = 'block'
      startPageElement.style.display = 'none'
      navElement.style.display = 'none'
      isStartPage.set(false)
    }
  }
}
