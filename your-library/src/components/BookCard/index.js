import React from "react";

function BookCard(props) {
  return (
    <div className="book-div card my-4">
      <div className="card-header bg-primary">
        <div className="row">
          <div className="col-md-4">
            <h3 id={"title-" + props.id}>{props.title}</h3>
          </div>
          <div className="col-md-5"></div>
          <div className="col-md-3">
            <button data-id={props.id} className="btn bg-success view-button">
              View
            </button>
            <button
              data-id={props.id}
              className="btn bg-success save-button ml-3"
              id={props.id}
              onClick={() => props.save(props.id)}
            >
              Save
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <p id={"author-" + props.id}>{props.author}</p>
          </div>
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-3">
            <img
              src={props.image}
              alt={props.title}
              height="175px"
              width="175px"
              id={"image" + props.id}
            />
          </div>
          <div className="col-md-9">
            <p id={"description" + props.id}>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
