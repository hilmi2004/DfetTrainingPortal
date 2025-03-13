import React from 'react';

const Footer = () => {
    return (
        <div className="bg-[#0684e5] w-full py-5 text-white">
          <div className='mx-10 flex justify-between'>
            <div className='w-30%'>
              <img src="image/dfet.png" alt="dfet logo" />
              <p className='text-white'>Suite 301, Elyon plaza, 1st avenue, Gwarimpa, 900108, Abuja, Nigeria</p>
            </div>

            <div className='w-30%'>
              <p>Home</p>
              <p>Service</p>
              <p>Courses</p>
              <p>Projects</p>
            </div>

            <div className='w-40%'>
              <p>Not quite ready yet?</p>
              <p>Join our online community for free. No spam.</p>
              <input type="text" name="" id="" />
              <p>Contact</p>
              <p>//phonenumber</p>
              <p>//emailaddress@gmail.com</p>
            </div>
          </div>
        </div>
    );
};

export default Footer;