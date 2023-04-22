import React from 'react';
import { WebTitle } from './WebTitle'
import { WebBookingForm } from './WebBookingForm'
import { useReducer } from 'react';
import { fetchAPI } from "../../services/FetchAPI";

function WebBooking() {
    const [ freehours , dispatch ] = useReducer(updateTimes, ["Select a date first"]);

    function updateTimes(freehours, userInput) {
      return fetchAPI(userInput)
    }

    function checkInput(date) {
      dispatch(date);
    }

    return (
    <>
      <WebTitle pageName="Book an appointment" />
      <WebBookingForm availabletimes={freehours} settimes={checkInput} />
    </>
    );
  }

  export { WebBooking };