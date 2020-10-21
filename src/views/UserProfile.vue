<template>
<div class="profile">
    <div class="panel">
        <h1>@{{ state.user.username }}</h1>
        <div class="admin" v-if="state.user.isAdmin">Admin</div>
        <div class="followers">
            <strong>Followers: </strong> {{ followers }}
        </div>
        <CreateTwoot @add-twoot="addTwoot" />
    </div>
    <div class="twoots">
        <h1 style="text-align:center;">Recent Twoots</h1>
        <TwootItem v-for="twoot in state.user.twoots.slice(0, 3)" :key="twoot.id" :username="state.user.username" :twoot="twoot">
        </TwootItem>
    </div>
</div>
</template>

<script>
import TwootItem from '../components/TwootItem'
import CreateTwoot from '../components/CreateTwoot'
import {
    reactive,
    computed
} from 'vue'

import {
    useRoute
} from 'vue-router'

import {
    users
} from '../assets/users.js'

export default {
    name: "App",
    components: {
        TwootItem,
        CreateTwoot
    },
    setup() {
        const route = useRoute()
        const userId = computed(() => {

            return route.params.userId
        })
        const state = reactive({
            followers: 0,
            user: users[userId.value - 1] || users[0]
        })

        function addTwoot(content) {
            state.user.twoots.unshift({
                id: state.user.twoots.length + 1,
                content: content
            })
        }

        return {
            state,
            addTwoot,
            userId
        }
    },

}
</script>

<style lang="scss" scoped>
.header {
    background-color: rgb(231, 34, 149);

    .header-title {
        float: left;
        margin-left: 50px;
        color: white;
        font-family: Helvetica, sans-serif;
    }

    .username {
        float: right;
        margin-left: auto;
        margin-right: 50px;
        color: white;
        font-family: Helvetica, sans-serif;
    }
}

.profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 50px 5%;

    .panel {
        display: flex;
        flex-direction: column;
        margin-right: 50px;
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #DFE3E8;

        h1 {
            margin: 0;
        }

        .admin {
            margin-top: 10px;
            background: purple;
            color: white;
            border-radius: 5px;
            margin-right: auto;
            padding: 0 10px;
            font-weight: 700;
        }

        .followers {
            margin-top: 10px;
        }

    }

    .twoots {
        display: grid;
        grid-gap: 10px;
    }

}
</style>
