import { useState } from "react"
import TabsData from "./TabsData"


const Tabs = () => {
    const [id, setId ] = useState('all')
   
      return (
        <div>
            <section className=''>
              <div className='py-5'>
              <button className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md' onClick={() => setId("all")}>All</button>
                <button className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' onClick={() => setId("wordpress")}>WordPress</button>
                <button className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' onClick={() => setId("react")}>React</button>
              </div>
            </section>
            <div className="py-10">
            <TabsData id={id} />
            </div>
        </div>
      )
    
}

export default Tabs