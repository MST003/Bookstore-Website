export const CREATE_BOOK = " CREATE_BOOK"
//export const EDIT_BOOK = "EDIT_BOOK "
//export const FETCH_BOOKS = "FETCH_BOOKS"
export const DELETE_BOOK = "DELETE_BOOK"
export const BOOK_DETAILS = "BOOK_DETAILS "
export const UPDATE_BOOK = "UPDATE_BOOK"

const removeBook = (book) => {
    return {
        type: 'DELETE_BOOK',
        payload: book
    }
}

export const deleteBook = (id) => {
    // http call / async call

    return dispatch => {
        fetch('http://localhost:8082/api/v1/books' + id , {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(book => {
                console.log(book);
                dispatch(removeBook(book));
            })
    }
}
const editBook = (book) => {
    return {
        type: 'UPDATE_BOOK',
        payload: book
    }
}

export const updateBook = (book) => {
    // http call / async call

    return dispatch => {
        fetch('http://localhost:8082/api/v1/books' , {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        
        })
            .then(res => res.json())
            .then(book => {
                console.log(book);
                dispatch(bookDetails(book));
            })
    }
}
const addBook = (book) => {
    return {
        type: 'BOOK_DEATILS',
        payload: book
    }
}

export const bookDetails = (book) => {
    // http call / async call

    return dispatch => {
        fetch('http://localhost:8082/api/v1/books' , {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        
        })
            .then(res => res.json())
            .then(book => {
                console.log(book);
                dispatch(bookDetails(book));
            })
    }
}


const saveBook = (book) => {
    return {
        type: CREATE_BOOK,
        payload: book
    }
}

export const createBook = (book) => {
    // http call / async call
    return dispatch => {
        fetch('http://localhost:8082/api/v1/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        })
            .then(res => res.json())
            .then(book => {
                console.log(book);
                dispatch(saveBook(book));
            })
    }
}


