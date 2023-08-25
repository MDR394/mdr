import design from '../public/design.png';
import code from '../public//code.png';
import consulting from '../public//consulting.png';
import Image from 'next/image';

const Services = () => {
  return (
    <div>
        <section>
          <div>
                      <h3 className="text-3xl py-1 mt-10 dark:text-gray-200">Services I Offer</h3>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-300'>Since the begning of my journey as a fralance designer and developer. I've done remote work for <spam className='text-teal-500 dark:text-teal-500'>agencies</spam> consulted for <spam className='text-teal-500 dark:text-teal-500'>startups</spam> and collaborated with talanted people to create digital produts for both bussiness and consumer use.</p>

          <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-300'>I offer the wide range of services, including brand dsign, programing and teaching</p>
          </div>

          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={design} className='mx-auto' width={100} height={100} alt='img' />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-200'>Beautiful designs</h3>
              <p className='text-black dark:text-gray-400'>Creating elegant designs suited for your needs following core design theory.</p>
              <h3 className='py-4 text-teal-600 dark:text-teal-500'>Design tool I use</h3>
              <p className='text-gray-800 py1 dark:text-gray-400'>Photoshop</p>
              <p className='text-gray-800 py1 dark:text-gray-400'>Illestrator</p>
              <p className='text-gray-800 py1 dark:text-gray-400'>Figma</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={consulting} className='mx-auto' width={100} height={100} alt='img' />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-200'>Beautiful designs</h3>
              <p className='text-black dark:text-gray-400'>Creating elegant designs suited for your needs following core design theory.</p>
              <h3 className='py-4 text-teal-600 dark:text-teal-500'>Design tool I use</h3>
              <p className='text-gray-800 py1 dark:text-gray-400'>Photoshop</p>
              <p className='text-gray-800 py1 dark:text-gray-400'>Illestrator</p>
              <p className='text-gray-800 py1 dark:text-gray-400'>Figma</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={code} className='mx-auto' width={100} height={100} alt='img' />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-200'>Beautiful designs</h3>
              <p className='text-balck dark:text-gray-400'>Creating elegant designs suited for your needs following core design theory.</p>
              <h3 className='py-4 text-teal-600 dark:text-teal-500'>Design tool I use</h3>
              <p className='text-gray-800 py1 dark:text-gray-400'>Photoshop</p>
              <p className='text-gray-800 py1 dark:text-gray-400'>Illestrator</p>
              <p className='text-gray-800 py1 dark:text-gray-400'>Figma</p>
            </div>
          </div>

        </section>
    </div>
  )
}

export default Services