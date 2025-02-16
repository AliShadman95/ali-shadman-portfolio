import React, { useState } from 'react';

const CategoryIcons = {
  'Frontend': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='w-6 h-6 text-[var(--sec)] opacity-70'><path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path></svg>
  ),
  'Backend': (
    <svg fill="currentColor" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 text-[var(--sec)] opacity-70' > 
  <path d="M23,23a1,1,0,1,0,1-1A1,1,0,0,0,23,23Z"/>
  <path d="M8,22h12v2H8Z"/>
  <path d="M23,9a1,1,0,1,0,1-1A1,1,0,0,0,23,9Z"/>
  <path d="M8,8h12v2H8Z"/>
  <path d="M26,14a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2H6A2,2,0,0,0,4,6v6a2,2,0,0,0,2,2H8v4H6a2,2,0,0,0-2,2v6a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V20a2,2,0,0,0-2-2H24V14ZM6,6H26v6H6ZM26,26H6V20H26Zm-4-8H10V14H22Z"/>
</svg>
  ),
  'Devops': (
    <svg  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 32 32" className='w-6 h-6 text-[var(--sec)] opacity-70'  >
  <path d="M18,31.36h-4c-0.128,0-0.248-0.069-0.312-0.181l-2-3.464c-0.064-0.111-0.064-0.248,0-0.359l2-3.464c0.064-0.111,0.183-0.181,0.312-0.181h3.792l2.896-5.016c0.1-0.174,0.32-0.231,0.491-0.132c0.173,0.1,0.231,0.319,0.132,0.491l-2.896,5.017l1.896,3.284c0.064,0.111,0.064,0.248,0,0.359l-2,3.464C18.247,31.291,18.129,31.36,18,31.36z M14.208,30.64h3.584l1.792-3.104l-1.792-3.104h-3.584l-1.792,3.104L14.208,30.64z M28,25.593h-4c-0.129,0-0.247-0.069-0.312-0.181l-2-3.465c-0.064-0.111-0.064-0.248,0-0.359l1.896-3.284l-2.896-5.016c-0.1-0.172-0.041-0.393,0.132-0.492c0.171-0.1,0.392-0.041,0.491,0.131l2.896,5.016H28c0.129,0,0.247,0.069,0.312,0.181l2,3.464c0.064,0.111,0.064,0.248,0,0.359l-2,3.465C28.247,25.523,28.129,25.593,28,25.593z M24.208,24.872h3.584l1.792-3.104l-1.792-3.104h-3.584l-1.792,3.104L24.208,24.872z M8,25.593H4c-0.128,0-0.248-0.069-0.312-0.181l-2-3.465c-0.064-0.111-0.064-0.248,0-0.359l2-3.464C3.752,18.013,3.872,17.943,4,17.943h4c0.128,0,0.248,0.069,0.312,0.181l1.896,3.283H16c0.199,0,0.36,0.161,0.36,0.36s-0.161,0.36-0.36,0.36h-5.792l-1.896,3.284C8.248,25.523,8.128,25.593,8,25.593z M4.208,24.872h3.584l1.792-3.104l-1.792-3.104H4.208l-1.792,3.104L4.208,24.872z M11,19.253c-0.125,0-0.246-0.064-0.312-0.181l-2.896-5.016H4c-0.128,0-0.248-0.068-0.312-0.18l-2-3.464c-0.064-0.111-0.064-0.249,0-0.36l2-3.464C3.752,6.477,3.872,6.408,4,6.408h4c0.128,0,0.248,0.068,0.312,0.18l2,3.464c0.064,0.111,0.064,0.249,0,0.36l-1.896,3.284l2.896,5.017c0.099,0.172,0.04,0.392-0.132,0.491C11.124,19.237,11.062,19.253,11,19.253z M4.208,13.336h3.584l1.792-3.104L7.792,7.128H4.208l-1.792,3.104L4.208,13.336z M28,14.056h-4c-0.129,0-0.247-0.068-0.312-0.18l-1.896-3.285H16c-0.199,0-0.36-0.161-0.36-0.36s0.161-0.36,0.36-0.36h5.792l1.896-3.284c0.064-0.111,0.183-0.18,0.312-0.18h4c0.129,0,0.247,0.068,0.312,0.18l2,3.464c0.064,0.111,0.064,0.249,0,0.36l-2,3.464C28.247,13.988,28.129,14.056,28,14.056z M24.208,13.336h3.584l1.792-3.104l-1.792-3.104h-3.584l-1.792,3.104L24.208,13.336z M11,13.484c-0.061,0-0.123-0.015-0.18-0.048c-0.172-0.1-0.231-0.32-0.132-0.492l2.896-5.016l-1.896-3.284c-0.064-0.112-0.064-0.249,0-0.36l2-3.464C13.752,0.708,13.872,0.64,14,0.64h4c0.129,0,0.247,0.068,0.312,0.18l2,3.464c0.064,0.111,0.064,0.249,0,0.36l-2,3.464C18.247,8.22,18.129,8.288,18,8.288h-3.792l-2.896,5.017C11.245,13.42,11.124,13.484,11,13.484z M14.208,7.568h3.584l1.792-3.104L17.792,1.36h-3.584l-1.792,3.104L14.208,7.568z"/>
</svg>
  )
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    'Frontend': [
      'Single Page Applications (SPAs)',
      'Landing pages and business websites',
      'Micro frontends',
    ],
    'Backend': [
      'RESTful APIs',
      'Microservices',
      "MongoDB, PostgreSQL",
    ],
    'Devops': [
      'CI/CD pipelines',
      'Docker',
      'Nginx, Reverse Proxys',
    ]
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">What I do?</h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? 'rotate-180' : ''
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div 
                className={`transition-all duration-300 px-4 ${
                  openItem === category ? 'max-h-[500px] pb-4 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className='pl-1'>•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;