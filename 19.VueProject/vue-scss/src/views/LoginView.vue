<template>
    <div class="row">
        <div class="col-12">
                <form class="w-25 m-auto mt-5 text-center">
                    <img class="mb-4" src="../assets/logo.png" alt="" width="72" height="57">
                    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                    <div class="form-floating mb-2">
                        <input type="number" class="form-control" id="floatingInput" placeholder="User ID" v-model="newtext1" required>
                        <label for="floatingInput">User ID</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="newtext2" required>
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"> Remember me
                    </label>
                    </div>
                    <button class="w-25 mx-1 btn btn-lg btn-primary" @click="signin()">Sign in</button>
                    <button class="w-25 mx-1 btn btn-lg btn-primary">Sign out</button>
                </form>
            </div>
    </div>
</template>

<script>
    export default {
        props: ["lists"],
        data() {
            return {
                currentId: 0,
                newtext1: "",
                newtext2: "",
               
            }
        },
    
        methods: {
            signin(){
                localStorage.setItem("vueAuth","true");
                this.$router.push("/profile");
                this.currentId++;
                this.lists.push({
                    id: this.currentId,
                    User: this.newtext1,
                    password: this.newtext2,
                })
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>