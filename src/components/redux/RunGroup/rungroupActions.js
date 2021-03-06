import * as actionTypes from "./rungroupConstants";
import * as api from "../../../api/rungroupApiCalls";

export const createRunGroupAction = (runGroup) => async (dispatch) => {
  try {
    const { data } = await api.createRunGroup(runGroup);
    console.log(data);
    dispatch({
      type: actionTypes.CREATE_RUNGROUP,
      payload: data,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const addEventToRunGroupAction =
  (runGroupId) => async (dispatch) => {
    dispatch({
      type: actionTypes.ADD_EVENT_TO_RUNGROUP,
      payload: { runGroup: runGroupId },
    });
  };

export const addRunnerToRunGroupAction = (groupId,newRunner) => async (dispatch) => {
    const { data } = await api.addRunnerToRunGroupApiRequest(groupId,newRunner);
    console.log(data);

    dispatch({
      type: actionTypes.ADD_RUNNER_TO_RUNGROUP,
      payload:data,
    });
  };

export const deleteRunGroupAction =  (runGroupId) => async(dispatch) => {
  try {
    const { data } = await api.deleteRunGroupApiRequest(runGroupId);
    console.log(data);
    dispatch({ type: actionTypes.DELETE_RUNGROUP_REQUEST, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const getAllRunGroupsActions = () => async (dispatch) => {
  try {
    const { data } = await api.getAllRunGroupsRequest();
    dispatch({
      type: actionTypes.GET_ALL_RUNGROUPS,
      payload: data,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const getRunGroupById = (runGroupId) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.GET_RUNGROUP_BY_ID,
    payload: { runGroup: runGroupId },
  });
};


