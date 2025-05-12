import React from "react";
import { Link } from "react-router-dom";

const Newsitem = (props)=> {
  
  // Destructure the props to extract required data
  let {title, imageUrl,desc,newsUrl,author,date,publisher} = props;

  return (
    <div className="card my-3 " data-bs-theme={props.mode}  style={{width: "18rem"}}>
      {/* Badge to display the publisher name */}
      <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"96%",zindex:"1"}}>
        {publisher}
      </span>

      {/* Display the news image or a default placeholder if imageUrl is not provided */}
      <img src={imageUrl?imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsfUZt8H1aUPGGw72BL1mQBgC-g-bXTNi5w&s" } className="card-img-top" alt="News Thumbnail" />

      <div className="card-body">
        {/* Display the news title */}
        <h5 className="card-title">{title}</h5>

        {/* Display the news description */}
        <p className="card-text">
          {desc}
        </p>

        {/* Display the author and date of the news */}
        <p className="card-text"><small className="text-body-secondary">Written by {author?author:"Unknown"} on {date}</small></p>

        {/* Link to read the full news article */}
        <Link to={newsUrl} target="_blank" className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Newsitem
