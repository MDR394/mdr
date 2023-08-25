import React from 'react'

const Footer = () => {
  return (
    <div>
      <center>
       <div className='bg-teal-900 flex lg:flex-row justify-center flex-col gap-3 lg:gap-20 py-6' style={{backgroundColor:"#003737"}}>
        <h2 className='text-gray-50 text-l md:text-xl'>Contact No: <spam className='text-teal-500 dark:text-teal-500 underline'><a href='tel:+923001212394'>0300 1212394</a></spam></h2>
        <h2 className='text-gray-50 text-l md:text-xl'>Email Address: <spam className='text-teal-500 dark:text-teal-500 underline'><a href='mailto:mdawoodrafique394@gmail.com'>mdawoodrafique394@gmail.com</a></spam></h2>
        <h2 className='text-gray-50 text-l md:text-xl'>WhatsApp No: <spam className='text-teal-500 dark:text-teal-500 underline'>0300 1212394</spam></h2>
       </div>
       </center>
    </div>
  )
}

export default Footer