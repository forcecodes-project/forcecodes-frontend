import {defineStore} from 'pinia'
import {problemsApi} from "@/api";


const useProblemsStore = defineStore('problems', {
        state: () => ({
            problems: []
        }),

        actions: {
            async loadProblems() {
                const response = await problemsApi.getAll();

                this.problems = response.data;

                return response;
            },

            async loadOneProblem(problemId) {
                return await problemsApi.getOne(problemId)
            },

        }
    }
)
export default useProblemsStore