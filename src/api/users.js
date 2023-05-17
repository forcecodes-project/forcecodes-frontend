class UsersApi {
    constructor(instance) {
        this.API = instance
    }

    signUp = async (data) => {
        return this.API({
            method: 'POST',
            url: '/auth/signup',
            data,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    login_user = async (data) => {
        return this.API({
            method: 'POST',
            url: '/auth/token',
            data,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }


    fetchCurrentUser = async (token) => {
        return this.API({
            url: '/auth/me',
            headers: {
                'Token': `${token}`
            }
        })
    }

    attempts_list = async (token) => {
        return this.API({
            url: '/attempts/last',
            headers: {
                'Token': `${token}`
            }
        })
    }
}

export default UsersApi