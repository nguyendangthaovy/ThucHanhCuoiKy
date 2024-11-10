export const FETCH_BIKES_REQUEST = 'FETCH_BIKES_REQUEST';
export const FETCH_BIKES_SUCCESS = 'FETCH_BIKES_SUCCESS';
export const FETCH_BIKES_FAILURE = 'FETCH_BIKES_FAILURE';

export const fetchBikes = () => async (dispatch) => {
  dispatch({ type: FETCH_BIKES_REQUEST });
  try {
    const response = await fetch('https://65726345d61ba6fcc014b530.mockapi.io/api/xedap');
    const data = await response.json();
    dispatch({ type: FETCH_BIKES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_BIKES_FAILURE, error });
  }
};