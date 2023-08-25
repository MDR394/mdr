import AllDataTab from "./AllDataTab"



const TabsData = ({id}) => {
  if(id === 'all'){
    return <AllDataTab />
      
  }else if(id === 'wordpress'){
    return (
      <>
      <section>
      <h1>Its part 1st</h1>
      </section>
     
      </>
    )
    
  }else if(id === "react"){
    return (
      <>
      <section>
              <h1>Its part 2nd</h1>
          </section>
      </>
    )
  }
}

export default TabsData