export default function AddPage() {
  return (
    <>
      <div className="flex p-1 mb-2 rounded-2xl dark:bg-gray-700 border border-gray-600 overflow-hidden">
        <div className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
          </svg>
        </div>
        <input type="text" placeholder="Type the original word..." id="searchBar" className="w-full outline-none dark:text-white text-sm" />

        <form className="max-w-sm mx-auto">
          <select id="fromLang" defaultValue={'default'} className="outline-none dark:text-white text-sm border border-gray-600 overflow-hidden rounded-xl w-auto h-full px-1 dark:bg-gray-700">
            <option value='default' disabled>--</option>
            <option value="en-US">EN(US)</option>
            <option value="it-IT">IT</option>
            <option value="fr-FR">FR</option>
            <option value="es-ES">ES</option>
          </select>
        </form>
      </div>

      <div className="flex p-1 rounded-2xl dark:bg-gray-700 border border-gray-600 overflow-hidden">
        <div className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
          </svg>
        </div>
        <input type="text" placeholder="Type the translation..." id="searchBar" className="w-full outline-none dark:text-white text-sm" />

        <form className="max-w-sm mx-auto">
          <select id="toLang" defaultValue={'default'} className="outline-none dark:text-white text-sm border border-gray-600 overflow-hidden rounded-xl w-auto h-full px-1 dark:bg-gray-700">
            <option value='default' disabled>--</option>
            <option value="en-US">EN(US)</option>
            <option value="it-IT">IT</option>
            <option value="fr-FR">FR</option>
            <option value="es-ES">ES</option>
          </select>
        </form>
      </div>
    </>
  )
}
