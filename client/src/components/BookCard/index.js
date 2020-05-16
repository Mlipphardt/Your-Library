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
          <div className="col-md-3 d-flex flex-column">
            <div className="d-flex justify-content-end">
              <button
                id={"view-button-" + props.id}
                link-to={props.link}
                onClick={() => window.location.assign(props.link)}
                className="btn bg-success view-button"
              >
                View
              </button>
              {props.save ? (
                <button
                  id={"save-button-" + props.id}
                  className="btn bg-success save-button ml-3"
                  onClick={() => props.save(props.id)}
                >
                  Save
                </button>
              ) : (
                <button
                  id={"save-button-" + props.id}
                  className="btn bg-danger delete-button ml-3"
                  onClick={() => props.delete(props.id)}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <p id={"author-" + props.id}>
              {props.author.length > 1 && Array.isArray(props.author)
                ? props.author.join(", ")
                : props.author}
            </p>
          </div>
          <div className="col-md-9"></div>
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
              id={"image-" + props.id}
            />
          </div>
          <div className="col-md-9">
            <p id={"description-" + props.id}>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
