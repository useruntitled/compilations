import { ref, computed, onMounted, onUnmounted, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
const _sfc_main = {
  __name: "InfiniteScrollContainer",
  __ssrInlineRender: true,
  emits: ["load"],
  setup(__props, { emit: __emit }) {
    const container = ref(null);
    ref(null);
    const diff = ref(2e3);
    const handleScroll = () => {
      var _a;
      if (document.documentElement.scrollTop >= ((_a = container.value) == null ? void 0 : _a.scrollHeight) - diff.value) {
        emit("load");
      }
    };
    const interval = ref(null);
    const containerTop = computed(() => {
      if (container.value.scrollTop == document.documentElement.scrollTop) {
        return Math.max(
          window.pageYOffset || 0,
          document.documentElement.scrollTop
        );
      }
      return container.value.getBoundingClientRect().top + Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
    });
    onMounted(() => {
      handleScroll();
      interval.value = setInterval(() => {
        if (document.documentElement.scrollTop >= containerTop.value) {
          handleScroll();
        }
      }, 200);
    });
    onUnmounted(() => clearInterval(interval.value));
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "container",
        ref: container
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InfiniteScrollContainer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
