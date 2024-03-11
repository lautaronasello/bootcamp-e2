import { getUsersService } from '../../services/users.js';
import { usersError, usersLoading, usersReceived } from '../usersSlice.js';

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
