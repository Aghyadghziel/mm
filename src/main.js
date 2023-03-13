function Main(props) {
  return (
    <div className="main">
      <div className="container">
        <div className="card">
          <img src={props.img} alt="#" className="big" />

          <div className="card--info">
            <div className="location">
              <img src={props.small} className="small" alt="#" />
              <h2>{props.country}</h2>
              <a href="#">{props.google}</a>
            </div>
            <h2 className="tit">{props.location}</h2>
            <h2 className="titl">{props.Date}</h2>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
