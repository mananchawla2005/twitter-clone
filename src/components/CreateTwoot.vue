<template>
<form class="create-twoot" @submit.prevent="createNewTwoot" :class="{'--exceeded': newTwootCharachterCount>180}">
    <label for="createTwoot" id="newTwoot"><strong>New Twoot ({{ newTwootCharachterCount }}/180)</strong></label>
    <textarea id="newTwoot" rows="4" cols="40" v-model="state.newTwootContent"></textarea>

    <div class="twoot-type">
        <label for="select" id="type-label"><strong>Select Type</strong></label>
        <select id="type" v-model="state.selectedTwootType">
            <option :value="option.value" v-for="(option, index) in state.twootTypes" :key="index">
                {{ option.name }}
            </option>
        </select>
        <button class="twoot-button" :disabled='isDisabled'>
            Twoot!
        </button>
    </div>

</form>
</template>

<script>
import {
    reactive,
    computed
} from 'vue'

export default {
    name: "CreateTwoot",
    setup(props, ctx) {
        const state = reactive({
            newTwootContent: '',
            selectedTwootType: 'instant',
            twootTypes: [{
                    value: "draft",
                    name: "Draft"
                },
                {
                    value: "instant",
                    name: "Instant Twoot"
                }
            ],

        })

        const newTwootCharachterCount = computed(() => {
            return state.newTwootContent.length;

        })
        const isDisabled = computed(() => {
            if (state.newTwootContent.length > 180) {
                return true
            }
            return false
        })

        function createNewTwoot() {
            if (state.newTwootContent && state.selectedTwootType !== 'draft') {
                /*      this.user.twoots.unshift({
                          id: this.user.twoots.length + 1,
                          content: this.newTwootContent
                      }) */
                ctx.emit('add-twoot', state.newTwootContent);
                state.newTwootContent = ''
            }
        }

        return {
            state,
            newTwootCharachterCount,
            isDisabled,
            createNewTwoot
        }
    },
}
</script>

<style lang="scss" scoped>
.create-twoot {
    padding-top: 20px;

    &.--exceeded {
        #newTwoot {
            color: red;
        }

    }

    #newTwoot {
        display: flex;
        flex-direction: column;
    }

    .twoot-type {
        padding-top: 20px;

        #type-label {
            padding-right: 10px;
        }

        .twoot-button {
            background-color: rgb(231, 34, 149);
            border: none;
            outline: none;
            color: white;
            font-size: 1rem;
            border-radius: 20px;
            margin-left: 20px;
            width: 107px;
        }
    }

}
</style>
