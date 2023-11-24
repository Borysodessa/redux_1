const { createStore } = require("redux");

const initialState = [
  {
    id: 4,
    name: "Asdfg",
    gender: "male",
    age: 55,
  },
  {
    id: 8,
    name: "Ygruhrgr",
    gender: "female",
    age: 32,
  },
];

function reducer(state, action) {
  // if (action.type === "ADD_USER") {
  //   const newState = [];
  //   for (let obj of state) {
  //     newState.push({ ...obj });
  //   }
  //   newState.push(action.user);
  //   return newState;
  // }не мутирующий

  if (action.type === "ADD_USER") {
    return [...state, action.user];
  }

  if (action.type === "REMOVE_USER") {
    return state.filter((user) => user.id !== action.userId);
  }

  if (action.type === "CHANGE_NAME") {
    const newState = [];
    for (let i = 0; i < state.length; i += 1) {
      // for-of → map
      if (state[i].id === action.userId) {
        const obj = { ...state[i] };
        obj.name = action.userName;
        newState.push(obj);
      } else {
        newState.push(state[i]);
      }
    }
    return newState;
  }

  if (action.type === "CHANGE_NAME") {
    const newState = [];
    for (let obj of state) {
      newState.push({ ...obj });
    }
    return newState.map((user) => {
      if (user.id === action.userId) {
        user.name = action.userName;
      }
      return user;
    });
  }

  if (action.type === "CHANGE_GENDER") {
    const newState = [];
    for (let obj of state) {
      newState.push({ ...obj });
    }
    return newState.map((user) => {
      if (user.id === action.userId) {
        if (user.gender === "male") {
          user.gender = "female";
        } else {
          user.gender = "male";
        }
      }
      return user;
    });
  }

  if (action.type === "INCREASE_AGE") {
    const newState = [];
    for (let obj of state) {
      newState.push({ ...obj });
    }
    return newState.map((user) => {
      if (user.id === action.userId) {
        user.age += action.increase;
      }
      return user;
    });
  }

  if (action.type === "INCREASE_AGE_FOR_ALL") {
    const newState = [];
    for (let obj of state) {
      newState.push({ ...obj });
    }
    return newState.map((user) => {
      user.age += action.increase;
      return user;
    });
  }

  if (action.type === "KILL_ALL_HUMANS") {
    return state.filter((user) => user === null);
  }

  if (action.type === "KILL_BY_GENDER") {
    return state.filter((user) => user.gender !== action.gender);
  }

  return state;
}

const store = createStore(reducer, initialState);
const state1 = store.getState();
store.dispatch({
  type: "ADD_USER",
  user: {
    id: 5,
    name: "Trrr",
    gender: "female",
    age: 66,
  },
});

store.dispatch({
  type: "REMOVE_USER",
  userId: 8,
});

//console.log("state1", state1);

store.dispatch({
  type: "CHANGE_NAME",
  userName: "Qqqqq",
  userId: 4,
});

store.dispatch({
  type: "CHANGE_GENDER",
  userId: 5,
});

store.dispatch({
  type: "INCREASE_AGE",
  increase: 3,
  userId: 5,
});

store.dispatch({
  type: "INCREASE_AGE_FOR_ALL",
  increase: 10,
});

store.dispatch({
  type: "KILL_ALL_HUMANS",
});

store.dispatch({
  type: "KILL_BY_GENDER",
  gender: "female",
});
console.log("state1", state1);
const state2 = store.getState();
console.log("state2", state2);
// https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
// console.log(">>>>", store.getState());

("CHANGE_NAME");
("CHANGE_GENDER");
("INCREASE_AGE");
("INCREASE_AGE_FOR_ALL");
("KILL_ALL_HUMANS");
("KILL_BY_GENDER");
