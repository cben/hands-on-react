// step 1.B Create BookCard component using class syntax. Render this.props as separate tags.
import React, { Component, PropTypes } from 'react';

export default class BookCard extends Component {
  render() {
    const {bookId, title, author, rating, cover} = this.props;

    return <div className="book">
      <div className="title">{title}</div>
      <div className="bookId">{bookId}</div>
      <div className="author">{author}</div>
      <div className="rating">{rating}</div>
      <div class="cover">
        <img src={this.props.cover}/>
      </div>
    </div>;
  }
}
