export const min6 = {
    min: 6,
    message: 'Requires at least 6 characters'
}

export const max30 = {
    max: 30,
    message: 'Maximum 30 characters'
}

export const requiredRule = {
    required: true,
    message: 'The field cannot blank'
}

export const emailType = {
    type: 'email',
    message: 'Email is in wrong format'
}

export const checkMatchPassword = ({ getFieldValue }) => ({
    validator(_, value) {
        if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
        }
        return Promise.reject(new Error("The re-entered password does not match"))
    }
})

export const usernameRule = [min6, max30, requiredRule]
export const passwordRule = [min6, max30, requiredRule]
export const emailRule = [min6, max30, requiredRule, emailType]
export const rePasswordRule = [min6, max30, requiredRule, checkMatchPassword]