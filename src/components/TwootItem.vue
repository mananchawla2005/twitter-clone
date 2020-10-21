<template>
<div class="item">
    <div class="twoot">
        <div class=" user">
            @{{ username }}
        </div>
        <div class="twoot-content">{{ twoot.content }}</div>
    </div>
</div>
</template>

<script>
export default {
    name: "TwootItem",
    props: {
        username: {
            type: String,
            required: true
        },
        twoot: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.item {
    border-left: 10px solid rgb(231, 34, 149);
    max-height: 100px;
    transition: all 0.25s ease;

    &:hover {
        transform: scale(1.1, 1.1);
    }

    .twoot {
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #DFE3E8;
        cursor: pointer;

        .user {
            font-weight: bold;
        }

        .twoot-content {
            white-space: initial;
            overflow-wrap: break-word;
        }
    }
}
</style>
