import instance from "@/api/instance.js"
import UsersApi from "@/api/users";
import ProblemsApi from "@/api/problems";

const usersApi = new UsersApi(instance)
const problemsApi = new ProblemsApi(instance)

export {usersApi, problemsApi}