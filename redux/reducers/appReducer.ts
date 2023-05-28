import {
  GET_LIST_CAMPAIN,
  GET_LIST_GAME,
  GET_LIST_TRANSACTION,
  GET_LIST_VOUCHER,
  GET_LIST_USER,
  CAMPAIN_CREATE,
  GAME_CREATE,
  USER_CREATE,
  VOUCHER_CREATE,
  TRANSACTION_CREATE,
  PARTNER_CREATE,
  CAMPAIN_UPDATE,
  GAME_UPDATE,
  USER_UPDATE,
  VOUCHER_UPDATE,
  TRANSACTION_UPDATE,
  PARTNER_UPDATE,
  CAMPAIN_DELETE,
  GAME_DELETE,
  USER_DELETE,
  VOUCHER_DELETE,
  TRANSACTION_DELETE,
  PARTNER_DELETE,
  GET_LIST_PARTNER,
  SET_MODAL,
} from '../actions/appAction';

const initialState = {
  partners: [],
  users: [],
  campains: [],
  transactions: [],
  vouchers: [],
  games: [],
  state: {},
};
interface action {
  type?: string;
  payload?: any | undefined;
}

const authReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_LIST_CAMPAIN:
      return {
        ...state,
        campains: action.payload,
      };
    case GET_LIST_GAME:
      return {
        ...state,
        games: action.payload,
      };
    case GET_LIST_TRANSACTION:
      return {
        ...state,
        transations: action.payload,
      };
    case GET_LIST_USER:
      return {
        ...state,
        users: action.payload,
      };
    case GET_LIST_PARTNER:
      return {
        ...state,
        partners: action.payload,
      };
    case GET_LIST_VOUCHER:
      return {
        ...state,
        vouchers: action.payload,
      };
    case CAMPAIN_CREATE:
      return {
        ...state,
        campains: [...state.campains, ...[action.payload]],
      };
    case USER_CREATE:
      return {
        ...state,
        users: [...state.users, ...[action.payload]],
      };
    case VOUCHER_CREATE:
      return {
        ...state,
        vouchers: [...state.vouchers, ...[action.payload]],
      };
    case TRANSACTION_CREATE:
      return {
        ...state,
        transactions: [...state.transactions, ...[action.payload]],
      };
    case PARTNER_CREATE:
      return {
        ...state,
        partners: [...state.partners, ...[action.payload]],
      };
    case GAME_CREATE:
      return {
        ...state,
        games: [...state.games, ...[action.payload]],
      };
    // update
    case GAME_UPDATE:
      return {
        ...state,
        games: state.games.map((item) => {
          if (item?._id === action?.payload?._id) {
            return { item, ...action?.payload };
          }
          return item;
        }),
      };
    case CAMPAIN_UPDATE:
      return {
        ...state,
        campains: state.campains.map((item) => {
          if (item?._id === action?.payload?._id) {
            return { item, ...action?.payload };
          }
          return item;
        }),
      };
    case USER_UPDATE:
      return {
        ...state,
        users: state.users.map((item) => {
          if (item?._id === action?.payload?._id) {
            return { item, ...action?.payload };
          }
          return item;
        }),
      };
    case VOUCHER_UPDATE:
      return {
        ...state,
        vouchers: state.vouchers.map((item) => {
          if (item?._id === action?.payload?._id) {
            return { item, ...action?.payload };
          }
          return item;
        }),
      };
    case TRANSACTION_UPDATE:
      return {
        ...state,
        transactions: state.transactions.map((item) => {
          if (item?._id === action?.payload?._id) {
            return { item, ...action?.payload };
          }
          return item;
        }),
      };
    case PARTNER_UPDATE:
      return {
        ...state,
        partners: state.partners.map((item) => {
          if (item?._id === action?.payload?._id) {
            return { item, ...action?.payload };
          }
          return item;
        }),
      };

    // delete
    case GAME_DELETE:
      return {
        ...state,
        games: state.games.filter(
          (item) => !action.payload?._id.includes(item?._id)
        ),
      };
    case CAMPAIN_DELETE:
      return {
        ...state,
        campains: state.campains.filter(
          (item) => !action.payload?._id.includes(item?._id)
        ),
      };
    case USER_DELETE:
      return {
        ...state,
        users: state.users.filter(
          (item) => !action.payload?._id.includes(item?._id)
        ),
      };
    case VOUCHER_DELETE:
      return {
        ...state,
        vouchers: state.vouchers.filter(
          (item) => !action.payload?._id.includes(item?._id)
        ),
      };
    case TRANSACTION_DELETE:
      return {
        ...state,
        transactions: state.transactions.filter(
          (item) => !action.payload?._id.includes(item?._id)
        ),
      };
    case PARTNER_DELETE:
      return {
        ...state,
        partners: state.partners.filter(
          (item) => !action.payload?._id.includes(item?._id)
        ),
      };
    default:
      return state;
  }
};

export default authReducer;
