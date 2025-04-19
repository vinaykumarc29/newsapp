import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Newsitem extends Component {
  
  
  render() {
    let {title, imageUrl,desc,newsUrl,author,date,publisher} = this.props;
    return (
      <div className="card my-3  "  style={{width: "18rem"}}>
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"96%",zindex:"1"}}>
          {publisher}
            </span>
        <img src={imageUrl?imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsfUZt8H1aUPGGw72BL1mQBgC-g-bXTNi5w&s" } className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {desc}
          </p>
          <p className="card-text"><small className="text-body-secondary">Witten by {author?author:"Unknown"} on {date}</small></p>
          <Link to={newsUrl} target="_blank" className="btn btn-primary">
           Read More
          </Link>
        </div>
      </div>
    );
  }
}
