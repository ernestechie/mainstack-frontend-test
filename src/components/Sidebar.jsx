import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { links } from '../links';

export default function Sidebar({ isOpen }) {
  const pathname = useLocation().pathname;

  return (
    <div
      className={`fixed left-0 top-0 overflow-hidden overflow-y-auto z-10 ${
        isOpen ? 'w-1/4 lg:w-1/6' : 'w-1/12'
      }`}
    >
      <div className='p-4 mt-4 mb-4 flex items-center justify-center'>
        <img
          src={logo}
          alt='mainstack app logo'
          className={`duration-500 ${isOpen ? 'h-14 w-14' : 'h-12 w-12'}`}
        />
      </div>
      <div>
        {links.map((group) => (
          <div key={group.name} className='my-4'>
            {isOpen && (
              <p className='pl-8 mt-4 text-[12px] font-medium'>{group.name}</p>
            )}
            {group.children.map((link) => (
              <Link
                key={link.name}
                to={link.page}
                className='flex items-center my-2'
              >
                {isOpen && (
                  <div
                    className={`w-[2px] h-10 duration-300 ${
                      pathname === link.page ? 'bg-primary' : 'white'
                    }`}
                  />
                )}
                <div
                  className={`bg-white py-4 flex gap-4 w-full h-10 items-center duration-300 ${
                    pathname === link.page
                      ? 'font-medium text-primary'
                      : 'text-_gray_'
                  } ${isOpen ? 'justify-start pl-6' : 'justify-center pl-0'}`}
                >
                  <p>{link.icon}</p>
                  {isOpen && (
                    <p className={`capitalize text-sm`}>{link.name}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
