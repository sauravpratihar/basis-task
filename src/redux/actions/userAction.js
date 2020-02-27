import * as service from '../../services/api-user';

const sendOTP = async(data) => {
    try {
        const response = await service.sendOTP(data);
        if (response.success)
            return true
    } catch (error) {
        // alert(error.response.data.message)
        return false
    }
}

const signin = async(data) => {
    try {
        const response = await service.signin(data);
        if (response.success)
            return response.message

    } catch (error) {
        // alert(error.response.data.message)
        return false
    }
}

const updateUser = async(data) => {
    try {
        const response = await service.updateUser(data);
        console.log('resp', response)
        if (response.success)
            return response.message            

    } catch (error) {
        console.log('xz,',error)
        // alert(error.response.data.message)
        return false
    }
}

const getUser = async() => {
    try {
        const response = await service.getUser();
        if (response.success)
            return response.message

    } catch (error) {
        // alert(error.response.data.message)
        return false
    }
}

const signout = async() => {
    try {
        const response = await service.signout();
        if (response.success)
            return response.message

    } catch (error) {
        // alert(error.response.data.message)
        return false
    }
}

export const userActions = {
    sendOTP,
    signin,
    updateUser,
    signout,
    getUser
}