import React, { Component, PropTypes } from 'react';

import BookCard from "./BookCard"

export default class Bookshelf extends Component {
    render() {
        const {books, layout} = this.props;

        return (
            <div class={"bookshelf " + layout}>
              {books.map((item, idx) =>
                         <div className="bookshelf-item" key={idx}>
                           <BookCard {...item}/>
                         </div>
               )}
            </div>
        );
    }
}

Bookshelf.propTypes = {
    cardZoom: PropTypes.number,
    layout: PropTypes.string,
    onRemoveBook: PropTypes.func,
    books: PropTypes.arrayOf(PropTypes.shape({
            bookId: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            author: PropTypes.string,
            rating: PropTypes.number,
            cover: PropTypes.string
        })
    )
};

Bookshelf.defaultProps = {
    onRemoveBook(){},
    cardZoom: 1
};
