<template>
<div class="home">
    <h1>Users List</h1>
    <div class="users-list">
        <router-link v-for="user in users" :to="{ name: 'UserProfile', params: { userId: user.id } }" :key="user.id">
            <div class="card-wrapper">
                <div class="card">
                    <div class="container">
                        <h4><b> {{ user.username }}</b></h4>
                        <p>{{ user.firstName }} {{ user.lastName }}</p>
                        <p>{{ user.email }}</p>
                    </div>
                </div>
            </div>

        </router-link>
    </div>
    <br>
    <br>
    <br>
    <br>
    <h1>Admin Panel</h1>
    <router-link to="/admin">
        <div class="panel">
            <div class="card-wrapper">
                <div class="card">
                    <div class="container">
                        <h4><b> Panel</b></h4>
                    </div>
                </div>
            </div>

        </div>
    </router-link>
</div>
</template>

<script>
import {
    users
} from "../assets/users";
export default {
    name: 'Home',
    setup() {
        return {
            users
        }
    }
}
</script>

<style lang="scss" scoped>
.home {
    padding: 50px 5%;

    .users-list {
        max-width: fit-content;
        display: inline-flex;
        padding-top: 50px;

        .card-wrapper {
            padding-right: 1.5rem;

            .card {
                background-color: rgb(231, 34, 149);
                color: white;
                padding: 50px 60px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                transition: 0.3s;

                &:hover {
                    background-color: white;
                    color: rgb(231, 34, 149);
                    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
                }

                .container {
                    padding: 2px 16px;
                }
            }
        }

    }

    .panel {
        .card-wrapper {
            max-width: 200px;

            .card {
                background-color: rgb(231, 34, 149);
                color: white;
                padding: 0 60px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                transition: 0.3s;

                &:hover {
                    background-color: white;
                    color: rgb(231, 34, 149);
                    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
                }

                .container {
                    padding: 2px 16px;
                }
            }
        }
    }
}
</style>
