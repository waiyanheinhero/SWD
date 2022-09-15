<template>
    <div>
        <h1>I am profile</h1>
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <LoginView v-for="list in lists" :key="list" :lists="list"></LoginView>
                    </td>
                </tr>
                
            </tbody>
        </table>
        <button class="btn btn-primary" @click="logout()">Logout</button>
    </div>
</template>

<script>
import LoginView from './LoginView.vue';
    export default {
    name: "profile",
    methods: {
        logout() {
            localStorage.setItem("vueAuth", "false");
            this.$router.push("/login");
        }
    },
    components: { LoginView }
}
</script>



<style lang="scss" scoped>
    table{
        margin-bottom: 10px;
    }
    tr,th{
        border: 1px solid black;
        padding: 10px;
    }
</style>