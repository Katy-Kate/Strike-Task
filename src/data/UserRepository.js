export const addNewUserToLocalStorage = user => {
  let users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  } else {
    localStorage.setItem("users", JSON.stringify([user]));
  }
};

export const createNewUser = values => {
  return { ...values, _id: Math.floor(Math.random(0, 1) * 100000000) };
};

export const validateFuield = () => {};

export const inputErrors = (context, inputName, err) => {
  context.setState(prevState => ({
    errors: {
      ...prevState.errors,
      [inputName]: err
    }
  }));
};
