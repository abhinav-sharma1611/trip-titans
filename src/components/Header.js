import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logoHeader from "../assets/logoHeader.png"
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import Group from "../assets/Group.png";
import Vector from "../assets/Vector.png"
import Contact from "../assets/contact.png"
import Email from "../assets/Property=mail1.png"

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (<>
    <header className="flex justify-between items-center py-2 w-full px-2 sm:px-6 lg:px-8 bg-gray-100 border-t-4 border-orange-600 border-b-1 border-b-black">
  <div className="flex items-center">
    <span className="flex items-center text font-weight-400" style={{fontSize:"14px"}}>
      <img className="h-4 w-auto mr-1" src={Contact} alt="Contact Icon" /> 
      +1-9632587410
    </span>
    <span className="flex items-center ml-4 text font-weight-400" style={{fontSize:"14px"}}>
      <img className="h-4 w-auto mr-1" src={Email} alt="Email Icon" /> 
      support@triptitan.com
    </span>
  </div>
  <div className="flex space-x-3">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <img className="h-4 w-4" src={facebook} alt="Facebook" />
    </a>
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      <img className="h-4 w-4" src={linkedin} alt="LinkedIn" />
    </a>
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <img className="h-4 w-4" src={Vector} alt="Instagram" />
    </a>
    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
      <img className="h-4 w-4" src={Group} alt="YouTube" />
    </a>
  </div>
</header>
<hr style={{height:1, color:"#DDDDDD"}}/>
    <Disclosure as="nav" className=" bg-gray-100">
      {({ open }) => (
        <>
          <div className=" w-full py-2 px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center" style={{height:56, width:88}}>
                  <img
                    className=""
                    src={logoHeader}
                    alt="Your Company"
                  />
                </div>
                {/* <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div> */}
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#"
                          className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Your Profile
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#"
                          className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Settings
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ focus }) => (
                        <a
                          href="#"
                          className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                        >
                          Sign out
                        </a>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  </>
  )
}
