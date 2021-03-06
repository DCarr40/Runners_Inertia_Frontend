import * as actionTypes from "./eventConstants";
import * as api from "../../../api/eventApiCalls";

export const getEventAction = () => async (dispatch) => {
  try {
    const { data } = await api.getEventApiRequest();
    console.log(data);
    dispatch({ type: actionTypes.GET_EVENT_REQUEST, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const createEventAction = (event) => async (dispatch) => {
  try {
    const { data } = await api.createEvent(event);
    console.log(data);
    dispatch({ type: actionTypes.CREATE_EVENT_REQUEST, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteEventAction = (event) => async (dispatch) => {
  try {
    const { data } = await api.deleteEventApiRequest(event);
    console.log(data);
    dispatch({ type: actionTypes.DELETE_EVENT_REQUEST, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const getAllEventsAction = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCollection();
    dispatch({ type: actionTypes.GET_ALL_EVENTS_REQUEST, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const addRunnerToEventAction = (eventId,newRunner) => async (dispatch) => {
    const { data } = await api.addRunnerToEventApiRequest(eventId,newRunner);
    console.log(data);

    dispatch({
      type: actionTypes.ADD_RUNNER_TO_EVENT,
      payload:data,
    });
  };

  export const updateEventAction = (event) => async (dispatch) => {
    try {
      const { data } = await api.updateEventApiRequest(event);
      console.log(data);
      dispatch({ type: actionTypes.UPDATE_EVENT_REQUEST, payload: data });
    } catch (error) {
      console.error(error.message);
    }
  };