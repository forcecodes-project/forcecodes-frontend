class ProblemsApi {
    constructor(instance) {
        this.API = instance
    }

    getAll = async (token) => {
        return this.API({
            url: '/problems',
            headers: {
                'Token': `${token}`
            }
        })
    }

    getOne = async (id) => {
        return this.API({
            url: `/problems/${id}`
        })
    }
}

export default ProblemsApi
