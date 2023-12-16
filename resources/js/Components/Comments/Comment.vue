<template>
    <div ref="comment">
        <CommentTemplate
            :comment="comment"
            type="comment"
            @showReplies="this.$emit('showReplies')"
            @showReplyInterface="this.$emit('showReplyInterface')"
        >
        </CommentTemplate>
    </div>
</template>

<script>
import CommentTemplate from "./CommentTemplate.vue";

export default {
    props: {
        comment: null,
    },
    mounted() {
        if (window.location.hash == `#comment-${this.comment.id}`) {
            setTimeout(() => {
                this.$refs["comment"].scrollIntoView();
            }, 200);
        }
    },
    emits: ["showReplies", "showReplyInterface"],
    components: { CommentTemplate },
};
</script>
