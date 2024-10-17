

const ContactComponent = ()=>{



    return(<>
     <form className="font-sans text-gray-700 max-w-4xl mx-auto px-6 my-6 bg-white shadow-lg p-8 rounded-md">
      <div className="grid sm:grid-cols-2 gap-8">
        {/* First Name */}
        <div className="relative flex flex-col">
          <label className="text-sm mb-2">First Name</label>
          <input
            type="text"
            placeholder="Enter first name"
            className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:border-gray-600 focus:outline-none transition duration-200"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            className="w-5 h-5 absolute right-3 top-10"
            viewBox="0 0 24 24"
          >
            <circle cx="10" cy="7" r="6"></circle>
            <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"></path>
          </svg>
        </div>

        {/* Last Name */}
        <div className="relative flex flex-col">
          <label className="text-sm mb-2">Last Name</label>
          <input
            type="text"
            placeholder="Enter last name"
            className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:border-gray-600 focus:outline-none transition duration-200"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            className="w-5 h-5 absolute right-3 top-10"
            viewBox="0 0 24 24"
          >
            <circle cx="10" cy="7" r="6"></circle>
            <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"></path>
          </svg>
        </div>

        {/* Phone Number */}
        <div className="relative flex flex-col">
          <label className="text-sm mb-2">Phone No</label>
          <input
            type="tel"
            placeholder="Enter phone no."
            className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:border-gray-600 focus:outline-none transition duration-200"
          />
          <svg
            fill="#bbb"
            className="w-5 h-5 absolute right-3 top-10"
            viewBox="0 0 64 64"
          >
            <path d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"></path>
          </svg>
        </div>

        {/* Country */}
        <div className="relative flex flex-col">
          <label className="text-sm mb-2">Country</label>
          <input
            type="text"
            placeholder="Enter country"
            className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:border-gray-600 focus:outline-none transition duration-200"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            className="w-5 h-5 absolute right-3 top-10"
            viewBox="0 0 24 24"
          >
            <path d="M20.48 8.301A9.217 9.217 0 0 1 21.25 12c0 5.105-4.145 9.25-9.25 9.25S2.75 17.105 2.75 12 6.895 2.75 12 2.75a.75.75 0 0 0 0-1.5C6.067 1.25 1.25 6.067 1.25 12S6.067 22.75 12 22.75 22.75 17.933 22.75 12c0-1.529-.32-2.983-.896-4.301a.75.75 0 0 0-1.374.602z"></path>
            <path d="M17 1.25a3.443 3.443 0 0 0-3.442 3.442c0 .594.269 1.317.685 2.023.835 1.421 2.227 2.815 2.227 2.815a.749.749 0 0 0 1.06 0s1.392-1.394 2.227-2.815c.416-.706.685-1.429.685-2.023 0-1.9-1.542-3.442-3.442-3.442zm0 1.5c1.072 0 1.942.87 1.942 1.942 0 .528-.393 1.177-.815 1.789A15.328 15.328 0 0 1 17 7.901c-.325-.366-.75-.874-1.127-1.42-.422-.612-.815-1.261-.815-1.789 0-1.072.87-1.942 1.942-1.942zM1.603 12.636l3.27 2.044c.596.372 1.285.57 1.987.57h.76c.657 0 1.281.287 1.709.786l1.051 1.227a2.25 2.25 0 0 1 .76 3.468l-1.051 1.227c-.256.305-.376.702-.327 1.101a3.513 3.513 0 0 1 .43-3.261l1.086-1.261a2.25 2.25 0 0 0-1.718-3.67h-.75a2.25 2.25 0 0 0-1.25-.36 3.248 3.248 0 0 0-1.593.505L1.86 15.978c.237.152.509.245.803.245h4.464c.261 0 .49.161.579.395l.751 2.238c.13.37.527.554.891.424s.554-.526.424-.891l-.751-2.238c-.13-.37-.527-.554-.891-.424H5.406l-.51-.002c-1.078 0-2.092-.49-2.749-1.358l-3.099-3.928A2.25 2.25 0 0 1 1.603 12.636z"></path>
          </svg>
        </div>

        {/* Message */}
        <div className="relative flex flex-col col-span-2">
          <label className="text-sm mb-2">Message</label>
          <textarea
            rows={4}
            placeholder="Enter your message"
            className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:border-gray-600 focus:outline-none transition duration-200"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            className="w-5 h-5 absolute right-3 top-10"
            viewBox="0 0 24 24"
          >
            <path d="M2 2v20h20V2H2zm0 2h20v4H2V4zm0 6h20v10H2V10z"></path>
          </svg>
        </div>
      </div>

      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none">
        Submit
      </button>
    </form>
    </>)
}


export default ContactComponent;