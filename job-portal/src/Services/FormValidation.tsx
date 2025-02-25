export const signupValidation = (name: string, value: string) => {
    switch (name) {
        case "name":
            if (value.length === 0) return "Name is required";
            return null;

        case "email":
            if (value.length === 0) return "Email is required";
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) return "Email is not valid";
            return null;

        case "password":
            if (value.length === 0) return "Password is required";
            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,15}$/.test(value)) return "Password must be 8-15 characters with an uppercase, lowercase, special character, and number.";
            return null;

        default:
            return null;
    }
};

export const loginValidation = (name: string, value: string) => {
    switch (name) {
        case "email":
            if (value.length === 0) return "Email is required";
            return null;

        case "password":
            if (value.length === 0) return "Password is required";
            return null;

        default:
            return null;
    }
};