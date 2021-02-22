import { HANDLE_INPUT, PUSH_JOB_DESCRIPTION } from './actions';

const initialState = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  job: '',
  description: '',
  experiences: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case HANDLE_INPUT:
      return { ...state, [Object.keys(action[1])]: Object.values(action[1]) };
    case PUSH_JOB_DESCRIPTION:
      return { ...state, experiences: [...experiences, action.experience] };
    default:
      return state;
  }
}
