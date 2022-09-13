<template>
    <div class="row">
        <div class="col-12">
                <form class="w-25 m-auto mt-5 text-center">
                    <img class="mb-4" src="../assets/logo.png" alt="" width="72" height="57">
                    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                    <div class="form-floating mb-2">
                        <input type="number" class="form-control" id="floatingInput" placeholder="User ID">
                        <label for="floatingInput">User ID</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"> Remember me
                    </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-primary" type="submit" @click="run()">Sign in</button>
                </form>
            </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            run(){
                console.log("I am RUN")
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>