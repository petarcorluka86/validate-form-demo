export const constraints = {
    fullName: {
      presence: {
        allowEmpty: false,
        message: "^This field is required!"
      }
    },
    email: {
      presence: {
        allowEmpty: false,
        message: "^This field is required!"
      },
      email: {
        message: "^This is not a valid email!"
      }
    },
    password: {
      presence: {
        allowEmpty: false,
        message: "^This field is required!"
      },
      length: {
        minimum: 6,
        message: "^Password needs to be at least 6 characters!"
      }
    },
    confirmPassword: {
      presence: {
        allowEmpty: false,
        message: "^This field is required!"
      },
      equality: {
        attribute: "password",
        message: "^Password doesn't match."
      }
    }
  };

  export const initForm = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };