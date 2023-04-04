class ProblemsApi {
    constructor(instance) {
        this.API = instance
    }

    getAll = async () => {
        return this.API({
            url: '/problems'
        })
    }

    getOne = async (id) => {
        return this.API({
            url: `/problems/${id}`
        })
    }
}

export default ProblemsApi
