
function Header() {
  
    return (
      <header>
        <h2>We help missing pets <br /> reunite with their owners.</h2>
        <div className="row">
          <button className="btn" style={{ cursor: "pointer" }}>
            Lost a Pet
          </button>
          <button className="btn" style={{ cursor: "pointer" }}>
            Found a Pet
          </button>
        </div>
        <br />
        <button className="btn2" style={{ cursor: "pointer" }}>
           Search a Pet
        </button>
        <div className="headerbg"></div>
      </header> 
      
    );
  }
  export default Header;