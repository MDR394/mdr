import React from 'react'

const Footer = () => {
  return (
    <div>
       <div className='bg-teal-900 flex justify-center gap-20 py-12' style={{backgroundColor:"#003737"}}>
        <h2 className='text-gray-50 text-xl'>Contact No: <spam className='text-teal-500 dark:text-teal-500 underline'><a href='tel:+923001212394'>0300 1212394</a></spam></h2>
        <h2 className='text-gray-50 text-xl'>Email Address: <spam className='text-teal-500 dark:text-teal-500 underline'><a href='mailto:mdawoodrafique394@gmail.com'>mdawoodrafique394@gmail.com</a></spam></h2>
        <h2 className='text-gray-50 text-xl'>WhatsApp No: <spam className='text-teal-500 dark:text-teal-500 underline'>0300 1212394</spam></h2>
       </div>
    </div>
  )
}

export default Footer