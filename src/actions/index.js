import axios from 'axios'
const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';
const GET_BOOKS = 'GET_BOOKS';


const getBooks = () => async dispatch => {
  const response = await axios.get('https://bookstore-apis.herokuapp.com//api/v1/books');
  if(response.data.status === 'SUCCESS') {
    dispatch({ type: GET_BOOKS, books: response.data.book })
  }
};
const createBook = book => ({
  type: CREATE_BOOK,
  ...book,
});

const removeBook = id => ({
  type: REMOVE_BOOK,
  id,
});

const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});

export { createBook, removeBook, changeFilter,getBooks };
