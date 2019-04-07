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

export const validateFuield = (context, inputName) => {
  if (context.state.values[inputName] === "") {
    inputErrors(context, inputName, "Not empty");
    return false;
  } else {
    // changing email input
    if (inputName === "email") {
      const regExpMail = new RegExp("^.+@[^.].*.[a-z]{2,}$");
      let emailErr = "";
      if (context.state.values[inputName].length <= 4) {
        emailErr = "Must be more then 4 charecters";
      } else if (!regExpMail.test(context.state.values.email)) {
        emailErr = "Invalid email address";
      }
      inputErrors(context, inputName, emailErr);
      return false;
    }

    // changing mobile input
    else if (inputName === "mobile") {
      const regExpMobile = new RegExp("[0-9]{9,}");
      let mobileErr = "";
      if (context.state.values[inputName].length <= 4) {
        mobileErr = "Must be more then 4 charecters";
      } else if (!regExpMobile.test(context.state.values.mobile)) {
        mobileErr = "Invalid mobile";
      }
      inputErrors(context, inputName, mobileErr);
      return false;
    }

    // changing name input
    else if (
      (inputName === "firstname" || inputName === "lastname") &&
      context.state.values[inputName].length <= 4
    ) {
      inputErrors(context, inputName, "Must be more then 4 charecters");
      return false;
    }

    //  changing password input
    else if (
      inputName === "password" &&
      context.state.values[inputName].length <= 4
    ) {
      inputErrors(inputName, "Must be more then 4 charecters");
      return false;
    } else if (
      inputName === "repeatPassword" &&
      context.state.values.repeatPassword !== context.state.values.password
    ) {
      inputErrors(context, inputName, "Password must be the same");
      return false;
    }
    return true;
  }
};

export const inputErrors = (context, inputName, err) => {
  context.setState(prevState => ({
    errors: {
      ...prevState.errors,
      [inputName]: err
    }
  }));
};

export const foundUser = async (arrOfUsers, password, mail) => {
  return arrOfUsers.forEach(element => {
    console.log(element.email, element.password);
    console.log(mail, password);
    if (element.email === mail && element.password === password) {
      return element;
    } else {
      return;
    }
  });
};
export const getUser = async (userPas, userMail) => {
  let users = await JSON.parse(localStorage.getItem("users"));
  let user = await foundUser(users, userPas, userMail);
  console.log("async", user);
  return user;
};
