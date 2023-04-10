import React from 'react'

const ProjectCard = ({item}) => {
  return (
    <>
      <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
              <img src={item.url} alt="" className='w-full' style={{width:'350px'}}/>
              <div className="p absolute top-[-100%] left-0 h-full w-full text-center bg-[#b004b0b7] p-4 pt-20">
                <h1 className="font-bold text-3xl">{item.name}</h1>
                <p className="font-bold">{item.description}</p>
                <p className="font-bold">Skill set utilized: {item.skill}</p>
              </div>
            </div>
    </>
  )
}

export default ProjectCard