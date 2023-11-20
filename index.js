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
  if (action.type === "ADD_USER") {
    const newArr = [...state];
    newArr.push(action.user);
    return newArr;
  }

  if (action.type === "REMOVE_USER") {
    return state.filter((user) => user.id !== action.userId);
  }

  if (action.type === "CHANGE_NAME") {
    state.map((user) => {
      if (user.id === action.userId) {
        user.name = "Qqqqq";
      }
      return user;
    });
  }

  if (action.type === "CHANGE_GENDER") {
    state.map((user) => {
      if (user.id === action.userId) {
        user.gender === "female"
          ? (user.gender = "male")
          : (user.gender = "female");
      }
      return user;
    });
  }

  if (action.type === "INCREASE_AGE") {
    state.map((user) => {
      if (user.id === action.userId) {
        user.age = user.age + action.increase;
      }
      return user;
    });
  }

  if (action.type === "INCREASE_AGE_FOR_ALL") {
    state.map((user) => {
      user.age = user.age + action.increase;
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

// https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
console.log(">>>>", store.getState());

("CHANGE_NAME");
("CHANGE_GENDER");
("INCREASE_AGE");
("INCREASE_AGE_FOR_ALL");
("KILL_ALL_HUMANS");
("KILL_BY_GENDER");
