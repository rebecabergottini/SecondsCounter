import React from "react";


//create your first component
const Home = (props) => {
	return (
		<>
		<div className="container row bg-dark align-items-center justify-content-center mx-auto" style={{width: "1000px", height:"150px"}}>
		<div className="card text-white mx-2 bg-dark border border-light border-opacity-25" style={{width: "5rem", height:"7rem"}}>
        <div className="card-body position-absolute top-50 start-50 translate-middle">
          <h1 className="card-title">{<i className="fa fa-clock">
				</i>}</h1>
        </div>
      </div>
	<div className="card text-white mx-2 bg-dark border border-light border-opacity-25" style={{width: "5rem", height:"7rem"}}>
        <div className="card-body position-absolute top-50 start-50 translate-middle">
          <h1 className="card-title">{props.numero6}</h1>
        </div>
      </div>	
	<div className="card text-white mx-2 bg-dark border border-light border-opacity-25" style={{width: "5rem", height:"7rem"}}>
        <div className="card-body position-absolute top-50 start-50 translate-middle">
          <h1 className="card-title">{props.numero5}</h1>
        </div>
      </div>	
	<div className="card text-white mx-2 bg-dark border border-light border-opacity-25" style={{width: "5rem", height:"7rem"}}>
        <div className="card-body position-absolute top-50 start-50 translate-middle">
          <h1 className="card-title">{props.numero4}</h1>
        </div>
      </div>	
	<div className="card text-white mx-2 bg-dark border border-light border-opacity-25" style={{width: "5rem", height:"7rem"}}>
        <div className="card-body position-absolute top-50 start-50 translate-middle">
          <h1 className="card-title">{props.numero3}</h1>
        </div>
      </div>
	<div className="card text-white mx-2 bg-dark border border-light border-opacity-25" style={{width: "5rem", height:"7rem"}}>
        <div className="card-body position-absolute top-50 start-50 translate-middle">
          <h1 className="card-title">{props.numero2}</h1>
        </div>
      </div>
	  <div className="card text-white mx-2 bg-dark border border-light border-opacity-25" style={{width: "5rem", height:"7rem"}}>
        <div className="card-body position-absolute top-50 start-50 translate-middle">
          <h1 className="card-title">{props.numero1}</h1>
        </div>
      </div>
	  </div>				
		</>
	);
};

export default Home;