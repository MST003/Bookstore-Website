import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import { connect } from "react-redux"
import * as actions from '../actions/bookActions'


class UpdateBookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      isbn: '',
      author: '',
      review: '',
      published_date: '',
      publisher: '',
      discount:'',
      count:'',
      price:''
      
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/books/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, book: res.data})
        this.setState({
          title: res.data.title,
          isbn: res.data.isbn,
          author: res.data.author,
          description: res.data.description,
          published_date: res.data.published_date,
          publisher: res.data.publisher,
          review_date:res.data.review_date,
          discount: res.data.discount,
          count: res.data.count,
          price:res.data.price
        })
      })
      .catch(err => {
        console.log("Error from UpdateBookInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      isbn: this.state.isbn,
      author: this.state.author,
      description: this.state.description,
      published_date: this.state.published_date,
      publisher: this.state.publisher,
      review_date: this.state.review_date,
      discount: this.state.discount,
      count: this.state.count,
      price:this.state.price
    };

    axios
      .put('http://localhost:8082/api/books/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-book/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateBookInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateBookInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show BooK List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Book</h1>
              <p className="lead text-center">
                  Update Book's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Title of the Book'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="isbn">ISBN</label>
              <input
                type='text'
                placeholder='ISBN'
                name='isbn'
                className='form-control'
                value={this.state.isbn}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="author">Author</label>
              <input
                type='text'
                placeholder='Author'
                name='author'
                className='form-control'
                value={this.state.author}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Category</label>
              <input
                type='text'
                placeholder='Describe this book'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="published_date">Published Date</label>
              <input
                type='date'
                placeholder='published_date'
                name='published_date'
                className='form-control'
                value={this.state.published_date}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="publisher">Review</label>
              <input
                type='text'
                placeholder='Publisher of this Book'
                name='publisher'
                className='form-control'
                value={this.state.publisher}
                onChange={this.onChange}
              />
            </div>
            
            
      
            <div className='form-group'>
            <label htmlFor="discount">Discount</label>
              <input
                type='text'
                placeholder='discount'
                name='discount'
                className='form-control'
                value={this.state.discount}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="price">Price</label>
              <input
                type='text'
                placeholder='price'
                name='price'
                className='form-control'
                value={this.state.price}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="count">Availability</label>
              <input
                type='text'
                placeholder='count'
                name='count'
                className='form-control'
                value={this.state.count}
                onChange={this.onChange}
              />
            </div>





            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Book</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      onupdateBook: (book)=> dispatch(actions.updateBook(book))
  }

}
export default connect(null, mapDispatchToProps)(UpdateBookInfo);
