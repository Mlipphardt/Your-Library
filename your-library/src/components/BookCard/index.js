import React from "react";

function BookCard(props) {
  return (
    <div className="book-div card my-4">
      <div className="card-header bg-primary">
        <div className="row">
          <div className="col-md-4">
            <h3>{props.title}</h3>
          </div>
          <div className="col-md-5"></div>
          <div className="col-md-3">
            <button className="btn bg-success view-button">View</button>
            <button className="btn bg-success save-button ml-3">Save</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <p>{props.author}</p>
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
              height="200px"
              width="200px"
            />
          </div>
          <div className="col-md-9">{props.description}</div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;

/*
<div class="article-div card my-4">
            <div class="card-header bg-primary">
                <a href={{this.link}}>{{this.title}}</a>
            </div>
            <div class="card-body">
                <p>{{this.description}}</p>
            </div>
            <div class="card-footer bg-info text-right">
                <button class="btn bg-success notes-button" data-toggle="modal" data-target="#note-modal"
                    data-id={{this._id}}>Notes</button>
                {{#if favorite}}
                <button class="btn bg-warning favorite-button" data-favorited={{this.favorite}} data-id={{this._id}}>In
                    Favorites</button> {{else}} <button class="btn bg-success favorite-button"
                    data-favorited={{this.favorite}} data-id={{this._id}}>Favorite</button>
                {{/if}}
            </div>
        </div>
*/
