<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container">
                <a class="navbar-brand text-white" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li class="nav-item">
                            <router-link class="nav-link text-white" :to="{name:'home'}">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-white" :to="{name:'about'}">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-white" :to="{name:'contact'}">Contact</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-white" :to="{name:'login'}">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link text-white" :to="{name:'signup'}">SignUp</router-link>
                        </li>
                    </ul>
                 </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>