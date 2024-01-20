import { Transition } from '@headlessui/react'

export default function Header() {
  return (
    <div
      id="headerID"
      className="pointer-events-none fixed top-6 z-30 grid w-full grid-cols-[1fr,min(640px,100%),1fr] px-4">
      <Transition
        className="shadow-surface-glass pointer-events-auto col-start-2 -mx-px rounded-2xl bg-gray-800/95 px-4 py-2.5 backdrop-blur will-change-transform [@supports(backdrop-filter:blur(0px))]:bg-stone-700/[25%]"
        show={true}
        enter="transition duration-100 ease-in-out"
        enterFrom="opacity-0 scale-90"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in-out"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button id="navStartPageID" onClick={(e) => buttonClick(e)}>
              <h2>Joda Development</h2>
            </button>
          </div>
          <button id="navGuestBookID" onClick={(e) => buttonClick(e)}>
            <h2>Guestbook</h2>
          </button>
        </div>
      </Transition>
    </div>
  )
}

function buttonClick(e) {
  const id = e.currentTarget.id
  var startPageElement = document.getElementById('startPageID')
  var guestBookElement = document.getElementById('guestBookID')
  if (id == 'navStartPageID') {
    startPageElement.style.visibility = 'visible'
    guestBookElement.style.visibility = 'hidden'
  } else if (id == 'navGuestBookID') {
    guestBookElement.style.visibility = 'visible'
    startPageElement.style.visibility = 'hidden'
  }
}
