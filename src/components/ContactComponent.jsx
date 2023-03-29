import React from 'react'

function ContactComponent() {
  return (
    <section className="text-gray-600 body-font relative">
    <div className="absolute inset-0 bg-gray-300">
      <iframe
        width="100%"
        height="100%"
        marginwidth="0"
        title="map"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C5mir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
      ></iframe>
    </div>
    <div className="container px-5 py-24 mx-auto flex">
      <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h1 class="text-4xl select-none font-semibold font-roboto">Contact Us</h1>
            <p class="text-md py-2 font-sans">Get in touch with us</p>
        <div className="relative ">
          <input
            type="text"
            id="contactName"
            class="border my-3 border-gray-300 text-gray-900 text-md rounded-md w-full p-3 ring-green-300 ring-offset-1 focus:ring"
            placeholder="Name"
            autocomplete="off"
          />
        </div>
        <div>
          <input
            type="email"
            id="contactEmail"
            class="border my-3 border-gray-300 text-gray-900 text-md rounded-md w-full p-3 ring-green-300 ring-offset-1 focus:ring"
            placeholder="Email"
            autocomplete="off"
          />
        </div>
        <div>
          <input
            type="number"
            id="contactPhone"
            class="border my-3 border-gray-300 text-gray-900 text-md rounded-md w-full p-3 ring-green-300 ring-offset-1 focus:ring"
            placeholder="Phone"
            autocomplete="off"
          />
        </div>
        <div>
          <input
            type="text"
            id="contactSubject"
            class="border my-3 border-gray-300 text-gray-900 text-md rounded-md w-full p-3 ring-green-300 ring-offset-1 focus:ring"
            placeholder="Subject"
            autocomplete="off"
          />
        </div>
        <div>
          <select id="contactReason" class="border my-3 border-gray-300 text-gray-900 text-md rounded-md w-full p-3 ring-green-300 ring-offset-1 focus:ring">
            <option value="" disabled selected>
              Select One
            </option>
            <option value="question">Partnership</option>
            <option value="feedback">Service Enquiry</option>
            <option value="support">Product Enquiry</option>
            <option value="other">Others</option>
          </select>
        </div>
        <div>
          <textarea id="contactMessage" class="border my-3 border-gray-300 text-gray-900 text-md rounded-md w-full p-3 ring-green-300 ring-offset-1 focus:ring" placeholder="Message"></textarea>
        </div>
        <button class="w-full select-none p-4 bg-emerald-700 rounded-full text-white text-xl font-roboto mt-5 font-semibold hover:bg-emerald-800 disabled:hover:bg-emerald-700" type="submit">
          Submit
        </button> 
      </div>
    </div>
  </section>
  )
}

export default ContactComponent