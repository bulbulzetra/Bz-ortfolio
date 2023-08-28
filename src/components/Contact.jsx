import React from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
       

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5 ">
            <div className="flex justify-between items-center gap-5 ">
              <input className="w-1/2" type="text" placeholder="First Name" />
              <input className="w-1/2" type="text" placeholder="Last Name" />
            </div>
            <div className="flex justify-between items-center gap-5 ">
              <input className="w-1/2" type="email" placeholder="Email" />
              <input className="w-1/2" type="text" placeholder="Phone" />
            </div>
            <input type="text" placeholder="Address" />
            <textarea placeholder="Type your message here" rows={10}></textarea>
            <button className="btn btn-primary m-8 w-fit">Submit</button>
          </form>
          {/* <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
