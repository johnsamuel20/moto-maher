import React from "react";
import Map from "../Map";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-1 py-4 md:py-12">
      <div className=" mx-auto px-4">
        <div className="xl:flex -mx-4">
          <div className="xl:w-10/12 xl:mx-auto px-4">
            <div className="xl:w-3/4 mb-4">
              <h1 className="text-3xl text-medium mb-4 text-white">
                We would love to hear from you
              </h1>
              <p className="text-xl mb-2 text-white">
                Please submit your information and we will get back to you.
              </p>
              <p className="text-xl mb-2 text-white">
                Call us at{" "}
                <a
                  href="tel:+12314561231"
                  className="text-[#00df9a] border-b border-transparent hover:border-[#00df9a] transition-colors duration-300"
                >
                  +1 231 456 1231
                </a>
              </p>
            </div>
            <div className="md:flex md:-mx-4 mt-4 md:mt-10">
              <div className="md:w-2/3 md:px-4">
                <form className="contact-form">
                  <div className="sm:flex sm:flex-wrap -mx-3">
                    <div className="sm:w-1/2 px-3 mb-6">
                      <input
                        required
                        type="text"
                        placeholder="Full Name"
                        className="border-2 rounded px-3 py-1 w-full focus:border-[#00df9a] input"
                      />
                    </div>
                    <div className="sm:w-1/2 px-3 mb-6">
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="border-2 rounded px-3 py-1 w-full focus:border-[#00df9a] input"
                      />
                    </div>
                    <div className="sm:w-1/2 px-3 mb-6">
                      <input
                        required
                        type="email"
                        placeholder="E-mail address"
                        className="border-2 rounded px-3 py-1 w-full focus:border-[#00df9a] input"
                      />
                    </div>
                    <div className="sm:w-1/2 px-3 mb-6">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="border-2 rounded px-3 py-1 w-full focus:border-[#00df9a] input"
                      />
                    </div>
                    <div className="sm:w-full px-3">
                      <textarea
                        required
                        name="message"
                        id="message"
                        cols={30}
                        rows={4}
                        placeholder="Your message here"
                        className="border-2 rounded px-3 py-1 w-full focus:border-[#00df9a] input"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="text-right mt-4 md:mt-12">
                    <button className="border-2 border-[#00df9a] rounded px-6 py-2 text-[#00df9a] hover:bg-[#00df9a] hover:text-black transition-colors duration-300">
                      Send a Message
                    </button>
                  </div>
                </form>
              </div>
              <div className="md:w-1/3 mt-10 md:mt-0 flex justify-center">
                <Map/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
