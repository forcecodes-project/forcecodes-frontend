<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <main>
    <h4 class="mt-3 text-center">Problems list</h4>
    <div class="mt-3 mb-3">
      <button class="btn btn-link mt-3 mb-3" style="color: #BB86FC" @click="randomId(this.problems.length)">Random
      </button>
    </div>

    <div class="btn-group" role="group">
      <div>
        <button type="button" class="btn mx-2" style="background-color: #02b095" @click="console.log('aboba')"
                aria-pressed="true">Complexity
        </button>
      </div>
      <div>
        <button type="button" class="btn mx-2" style="background-color: #02b095" @click="console.log('#HateThis')"
                aria-pressed="true">Status
        </button>
      </div>
      <div class="input-group mx-3">
        <div class="form-outline">
          <input type="search" id="form1" class="form-control" placeholder="Search..." v-model="search_data"
                 @keyup="search"/>
          <label class="form-label" for="form1"></label>
        </div>
      </div>
    </div>

    <section id="problems" class="container justify-content-center row mx-auto mt-3">
      <table class="table" id="problems_table">
        <thead>
        <tr style="text-align: center">
          <th scope="col">Status</th>
          <th scope="col">Title</th>
          <th scope="col">Acceptance</th>
          <th scope="col">Complexity</th>
        </tr>
        </thead>
        <tbody v-if="!search_data">
        <tr v-for="problem in Problems" :key="problem.id" style="vertical-align: middle; text-align: center">
          <td v-if="problem.status === 'success'"><i class="fa fa-check" style="color: #BB86FC; font-size: 20px"
                                                     aria-hidden="true"></i></td>
          <td v-else-if="problem.status === 'failed'"><i class="fa fa-times" style="color: #BB86FC; font-size: 20px"
                                                         aria-hidden="true"></i></td>
          <td v-else><i class="fa fa-question-circle" style="color: #BB86FC; font-size: 20px" aria-hidden="true"></i>
          </td>
          <td>
            <button class="btn btn-link" @click="this.$router.push(`/problem/${problem.id}`)" style="color: white">
              {{ problem.title }}
            </button>
          </td>
          <td>{{ problem.acceptance }}%</td>
          <td>{{ problem.difficulty }}</td>
        </tr>
        </tbody>
        <tbody v-else>
        <tr v-for="problem in this.result" :key="problem.id" style="vertical-align: middle; text-align: center">
          <td v-if="problem.status === 'success'"><i class="fa fa-check" style="color: #BB86FC; font-size: 20px"
                                                     aria-hidden="true"></i></td>
          <td v-else-if="problem.status === 'failed'"><i class="fa fa-times" style="color: #BB86FC; font-size: 20px"
                                                         aria-hidden="true"></i></td>
          <td v-else><i class="fa fa-question-circle" style="color: #BB86FC; font-size: 20px" aria-hidden="true"></i>
          </td>
          <td>
            <button class="btn btn-link" @click="this.$router.push(`/problem/${problem.id}`)" style="color: white">
              {{ problem.title }}
            </button>
          </td>
          <td>{{ problem.acceptance }}%</td>
          <td>{{ problem.difficulty }}</td>
        </tr>
        </tbody>
      </table>
    </section>
  </main>
</template>

<script>
import useProblemsStore from "@/stores/problems";
import {mapActions, mapState} from "pinia";
import useUsersStore from "@/stores/users";


export default {
  name: "ProblemsBlock",
  data() {
    return {
      search_data: "",
      result: ""
    };
  },
  computed: {
    ...mapState(useUsersStore, ['token']),
    ...mapState(useProblemsStore, ['problems']),
    Problems() {
      return this.problems
    }
  },
  methods: {
    ...mapActions(useProblemsStore, ['loadProblems']),

    randomId(max) {
      let id = Math.ceil(Math.random() * max);
      this.$router.push('/problem/' + id)
    },

    async search() {
      let data = encodeURIComponent(this.search_data)

      const res = await fetch(`http://localhost:8000/problems/?search=${data}`, {
        method: "GET",
        headers: {
          'accept': 'application/json',
          'Token': `${this.token}`
        }
      }).then(res => res.json())

      this.result = res

      return res
    }
  },
  mounted() {
    this.loadProblems(this.token);
    this.search()
  }
}
</script>

<style scoped>

</style>