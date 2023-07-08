import React from 'react'
import { Link } from 'react-router-dom'
export default function About(props) {

  let myStyle={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?"rgb(11 10 36)":'white'
  }

  return (
    <div>
     <div className="accordion accordion-flush" id="accordionFlushExample" style={myStyle}>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="flush-headingOne" style={myStyle}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle}data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        About Me
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" style={myStyle}data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"style={myStyle}>Hi there my name is Mashood Bukhari i create this wbsite to calculate and set the words</div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={myStyle}>
       About TextUtlis
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample" style={myStyle}>
      <div className="accordion-body">Textutlis is use to see the words on uppercase, Lowercase,You can easily copy text and clear text </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle}data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        GitHub Source code
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={myStyle}><Link>https://github.com/Codewithmashood</Link></div>
    </div>
  </div>
</div>
    </div>
  )
}
