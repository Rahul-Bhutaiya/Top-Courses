import React from 'react'

const FilterContainer = (props) => {
    const filterData=props.filterData;
    const setCurrentFilter=props.setCurrentFilter;
    const currentFilter=props.currentFilter;

  return (
    <nav className='w-11/12 flex flex-wrap max-w-max gap-x-4 mx-auto py-4 justify-center'>
        {
            filterData.map((eachCategory)=>{
                return <button onClick={()=>setCurrentFilter(eachCategory.title)} key={eachCategory.id}
                className={
                  eachCategory.title===currentFilter?(
                  `text-lg px-[0.65rem] py-[0.4rem]
                  rounded-md font-medium text-white bg-bgDark bg-opacity-100 border-2 border-white
                  hover:bg-opacity-50 transition-all duration-300`):
                  (`text-lg px-[0.65rem] py-[0.4rem] border-2
                  border-transparent
                  rounded-md font-medium text-white bg-bgDark bg-opacity-80
                  hover:bg-opacity-50 transition-all duration-300`)
                }>
                {eachCategory.title}</button>
            })
        }
    </nav>
  )
}

export default FilterContainer;