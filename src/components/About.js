import React from 'react'

export default function About () {
  return <>
    <section id="about">
      <h2>About Me</h2>
      <div className="aboutMain">
        <div className="profilePhoto">
          <img src="https://i.imgur.com/Ry7ZDDF.jpg?1" />
        </div>
        <div className="aboutWord">
          <p>I am a recent graduate from a Software Engineering Immersive course looking for opportunities to kick start my software developer career. I have a rich prior experience working as an engineer in fast-paced, fast-growing technology companies, which can vouch for a track record in streamlining business processes, managing data and improving user experience.</p>
          <p>I am keen to employ my newly gained skills as part of a dynamic, talented and motivated team.</p>
          <p>I am a passionate sport climber, so in my spare time I like to be outdoors. I love music and photography, and I am always in mood for a good cup of coffee.</p>
        </div> 
      </div>
    </section>
  </>
}