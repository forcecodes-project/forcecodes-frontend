import {createRouter, createWebHistory} from 'vue-router'
import MainPage from "@/views/MainPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";
import SignInPage from "@/views/SignInPage.vue";
import ContactsPage from "@/views/ContactsPage.vue";
import ProblemsPage from "@/views/ProblemsPage.vue";
import RatingPage from "@/views/RatingPage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import ProblemPage from "@/views/ProblemPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: "/", component: MainPage},
        {path: "/register", component: SignUpPage},
        {path: "/auth", component: SignInPage},
        {path: "/about", component: ContactsPage},
        {path: "/problems", component: ProblemsPage},
        {path: "/rating", component: RatingPage},
        {path: "/profile", component: ProfilePage},
        {path: "/problem/:id", component: ProblemPage}
    ]
})

export default router

