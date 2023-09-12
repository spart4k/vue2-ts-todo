<template>
  <div class="hello">
    <div class="users">
      <User :user="user" v-for="user in usersList"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// import type { Ref } from 'vue'
import { ref, onMounted, defineComponent  } from '@vue/composition-api'

import { IUser, Department } from '@/schemes'

import User from '@/components/User/index.vue'

import { UserApi } from '@/api' 

export default defineComponent ({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    User,
  },
  setup() {
    const usersList = ref<IUser[]>([])
    console.log(UserApi)
    const getUsers = async () => {
      const { users } = await UserApi.get()
      console.log(users)
      users.forEach((user: IUser) => {
        usersList.value.push(user)
      })
    }
    const createUser = (user: IUser) => {
      const { id, firstName, age, height, birthDate, image } = user
      usersList.value.push({
        id,
        firstName,
        age,
        height,
        birthDate,
        image,
      })
    }
    onMounted( async () => {
      await getUsers()
      // const departament: Department = {
      //   id: 0,
      //   name: 'barselona',
      //   cost: 100000,
      // }
      // users.value.push({
      //   id: 0,
      //   name: 'Messi',
      //   cost: 20000000,
      //   age: 23,
      //   // departament,
      //   birthday: new Date(),
      // })
      console.log(usersList.value)
    })
    return {
      usersList,
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.users {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
