import React, { useState } from 'react'
//import { BsLink45Deg } from 'react-icons/bs'

import projectInfo from './ProjectInfo'

export default function Projects () {
  const [page, setPage] = useState(1)
  const lastPage = 4

  function handlePage(e) {
    setPage(parseInt(e.target.id))
  }

  function handleLeft() {
    if (page !== 1) {
      setPage(page - 1)
    }
  }
  console.log(page)

  function handleRight() {
    if (page !== lastPage) {
      setPage(page + 1)
    }
  }



  return <>
    <section id="projects">
      <div className="projectTitle">
        <h2>Projects</h2>
        
      </div>

      {projectInfo[page - 1].map((project, i) => {
        return <div key={i} id="projectMain">
          <div className="row">
            <div className="left">
              <div className="leftTop">
                <h3>{project.name}</h3>
                <p>{project.projectType}</p>
                <div className="iconFlex">
                  <div className="projectsIcon">
                    <i className={project.iconOne}></i>
                  </div>
                  <div className="projectsIcon">
                    <i className={project.iconTwo}></i>
                  </div>
                  <div className="projectsIcon">
                    <i className={project.iconThree}></i>
                  </div>
                  <div className="projectsIcon">
                    <i className={project.iconFour}></i>
                  </div>
                </div>


                <p>{project.description}</p>
                <p>Take a look: </p>
                <a className="projectsIcon" href={project.github} target="_blank" rel="noreferrer">
                  <i className="devicon-github-original"></i>
                </a>
                {/* <a className="projectOther" href={project.link} target="_blank" >
                  <BsLink45Deg className="projectOther" />
                </a> */}
              </div>
              <div className="leftBottom">
                <img src={project.middleBottom} />
              </div>
            </div>

            <div className="middle">
              <div className="middleTop">
                <img src={project.leftTop} />
              </div>
              <div className="Bottom">
                <img src={project.leftBottom} />
              </div>
            </div>

            <div className="right">
              <img src={project.right} />
            </div>
          </div>
        </div>
      })}
      <div className="numbers">
        <p className="pages" onClick={handleLeft}>&lt;</p>
        <p className="pages" onClick={handlePage} id='1'>1</p>
        <p className="pages" onClick={handlePage} id='2'>2</p>
        <p className="pages" onClick={handlePage} id='3'>3</p>
        <p className="pages" onClick={handlePage} id='4'>4</p>
        <p className="pages" onClick={handleRight}>&gt;</p>
      </div>
    </section>

  </>
}