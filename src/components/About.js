import pet from "./pets.png"
function About() {
    return (
      <>
        <div style={{marginTop:'1px',width:'100%',height:'10px'}} className="scroll"></div>
        <div className="container about">
          <div className="row">
            <div className="col-md-6 text-center">
              <img alt="about" src={pet} className="img1" />
            </div>
            <div className="col-md-6">
              <h2 className="main-title about-h2">ABOUT</h2>
              <p className="main-p">
                As pet owners ourselves, we know how traumatic it can be<br />
                when a beloved pet goes missing. That's why we have<br />
                created this platform that helps pet owners reunite with their lost pets.<br /> 
                We here love making happy reunions for pet parents and their furry friends.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
  export default About;