import wordpress from '../public/wordpress.png';
import react from '../public/react.png';
import web_design from '../public/web_design.png';
import Image from 'next/image';

const Services = () => {
  return (
    <div>
        <section>
          <div>
                      <h3 className="text-4xl py-1 mt-10 font-bold dark:text-teal-500">Services I Offer</h3>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-300'>Since the beginning of my journey as a freelance designer and developer. I've done remote work for <spam className='text-teal-500 dark:text-teal-500'>agencies</spam> consulted for <spam className='text-teal-500 dark:text-teal-500'>startups</spam> and collaborated with talanted people to create digital produts for both bussiness and consumer use.</p>

          <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-300'>I offer the wide range of services, including brand website design, Web Applications, and Wordpress Website Development</p>
          </div>

          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={wordpress} className='mx-auto' width={100} height={100} alt='img' />
              <h3 className='text-2xl font-medium pt-8 pb-2 dark:text-gray-200'>WordPress</h3>
              <p className='text-black dark:text-gray-400'>Design and Develop Wordpress Website According to your Modern trends</p>
              <h3 className='py-4 text-teal-600 dark:text-teal-500'>Page Builder I Use</h3>
              <p className='text-gray-800 py1 dark:text-gray-400'>Elementor</p>
              <p className='text-gray-800 py1 dark:text-gray-400'>DeedProd</p>
              <p className='text-gray-800 py1 dark:text-gray-400'>Divi</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={react} className='mx-auto' width={100} height={100} alt='img' />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-200'>Web Application's</h3>
              <p className='text-black dark:text-gray-400'>Develop a single page Applications with javascript framework React.</p>
              <h3 className='py-4 text-teal-600 dark:text-teal-500'>Technologies tool I use</h3>
              <p className='text-gray-800 py1 dark:text-gray-400'>React Js</p>
              <p className='text-gray-800 py1 dark:text-gray-400'>Node Js</p>
              <p className='text-gray-800 py1 dark:text-gray-400'>MongoDB</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={web_design} className='mx-auto' width={100} height={100} alt='img' />
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-gray-200'>Website Designing</h3>
              <p className='text-balck dark:text-gray-400'>Creating elegant designs suited for your needs following core web design theory.</p>
              <h3 className='py-4 text-teal-600 dark:text-teal-500'>Design tool I use</h3>
              <p className='text-gray-800 py1 dark:text-gray-400'>PhotoShop</p>
              <p className='text-gray-800 py1 dark:text-gray-400'>InDesign</p>
              <p className='text-gray-800 py1 dark:text-gray-400'>Figma</p>
            </div>
          </div>

        </section>
    </div>
  )
}

export default Services