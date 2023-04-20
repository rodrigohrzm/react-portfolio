import Nav from './Nav';
import Title from './Title';
import { useReducer } from 'react';
import { fetchAPI } from "./FetchAPI";
import BookingForm from './BookingForm';

function BookingPage() {

  const [ freehours , dispatch ] = useReducer(updateTimes, ["Select a date first"]);

  function updateTimes(freehours, userInput) {
    return fetchAPI(userInput)
  }

  function checkInput(date) {
    dispatch(date);
  }

    return (
      <>
        <Nav />
        <Title />
        <BookingForm availabletimes={freehours} settimes={checkInput} />
      </>
    );
  }
  
  export default BookingPage;