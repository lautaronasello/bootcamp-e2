import { createSlice } from '@reduxjs/toolkit';
import { getUsersService } from '../services/users.js';

const initialState = {
  users: [],
  user: null,
  loading: false,
  error: false,
  message: null,
};

export const usersSlice = createSlice({
  name: 'usersData',
  initialState,
  reducers: {
    usersLoading(state, action) {
      if (!state.loading) {
        state.loading = true;
      }
    },
    usersReceived(state, action) {
      if (state.loading) {
        state.loading = false;
        state.users = action.payload; //es response.data
      }
    },

    userReceived(state, action) {
      if (state.loading) {
        state.loading = false;
        state.user = action.payload; //es response.data
      }
    },

    usersError(state, action) {
      if (state.loading) {
        state.loading = false;
        state.users = [];
        state.error = action.payload.error;
        state.message = action.payload.message;
      }
    },
  },
});

export const { usersLoading, usersReceived, usersError } = usersSlice.actions;

export default usersSlice.reducer;

// Define a thunk that dispatches those action creators
export const fetchUsers = () => async (dispatch) => {
  dispatch(usersLoading());
  try {
    const response = await getUsersService();

    dispatch(usersReceived(response.data));
  } catch (e) {
    console.log(e.response);
    dispatch(
      usersError({
        error: true,
        message: 'ocurrio un error al obtener los usuarios',
      })
    );
  }
};
