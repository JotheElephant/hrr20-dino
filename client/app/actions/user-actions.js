import AppDispatcher from '../dispatcher/app-dispatcher';
import UserConstants from '../constants/user-constants';

export default class UserActions {
  userAdd(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_ADD,
      data: user
    });
  }

  userRemove(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_REMOVE,
      data: user
    });
  }

  userUpdate(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_UPDATE,
      data: user
    });
  }
}
