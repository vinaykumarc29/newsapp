import React, { Component } from "react";

export default class Newsitem extends Component {
  
  
  render() {
    let {title, imageUrl,desc,newsUrl} = this.props;
    return (
      <div className="card my-3" style={{width: "18rem"}}>
        <img src={imageUrl?imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsfUZt8H1aUPGGw72BL1mQBgC-g-bXTNi5w&s" } className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {desc}
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-primary">
           Read More
          </a>
        </div>
      </div>
    );
  }
}
