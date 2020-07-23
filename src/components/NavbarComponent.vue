<template>
    <div id="nav">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Vuex Todo Manager</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="links"> <router-link to="/">Home</router-link> </li>
                        <li class="links"> <router-link to="/about">About</router-link> </li>
                        <li class="links"> <router-link to="/deleted-tasks">deleted Tasks</router-link> </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

#nav{
    background-color: #f8f9fa;
}

.links {
    margin-right: 10px;
}


</style>