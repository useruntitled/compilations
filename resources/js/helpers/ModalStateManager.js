import { router } from "@inertiajs/vue3";

export const ModalStateManager = {
    pushEditor: async (id) => {
        const url = new URL(window.location.href);

        function append(param, value) {
            if (!url.searchParams.has(param))
                url.searchParams.append(param, value);
        }

        append("modal", "Editor");
        append("id", id);

        window.history.pushState(null, null, url);
        // router.reload({preserveState: true});
        await router.visit(url, {
            method: "get",
            replace: true,
            preserveState: true,
            preserveScroll: true,
        });
    },
};
