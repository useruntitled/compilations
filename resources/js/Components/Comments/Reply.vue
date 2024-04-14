<template>
    <div ref="reply">
        <CommentTemplate
            :comment="reply"
            type="Reply"
            @showReplyInterface="$emit('showReplyInterface')"
            @showEditingInterface="$emit('showReplyEditingInterface')"
        />
    </div>
</template>
<script>
import CommentTemplate from "./CommentTemplate.vue";

export default {
    props: {
        reply: null,
    },
    mounted() {
        if (window.location.hash == `#reply-${this.reply.id}`) {
            this.$emit("openReplies", this.reply.id);
            setTimeout(() => {
                this.$refs["reply"].scrollIntoView();
            }, 200);
        }
    },
    emits: [
        "showReplyInterface",
        "openReplies",
        "showEditingInterface",
        "showReplyEditingInterface",
    ],
    components: { CommentTemplate },
};
</script>
