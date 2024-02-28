import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { ref, useSSRContext } from "vue";
import { i as _sfc_main$1 } from "./MainLayout-b86e9381.js";
const _sfc_main = {
  __name: "ZoomableImage",
  __ssrInlineRender: true,
  props: {
    class: null,
    preview: null,
    then: null,
    style: null
  },
  setup(__props) {
    const props = __props;
    const showZoomedImage = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><main class="cursor-zoom-in">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        preview: __props.preview,
        then: __props.then,
        class: props.class,
        style: props.style
      }, null, _parent));
      _push(`</main><section style="${ssrRenderStyle(showZoomedImage.value ? null : { display: "none" })}" class="fixed inset-0 z-50 w-full bg-black bg-opacity-60 flex items-center"><div class="mx-auto text-center duration-200 select-none h-full flex items-center">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "h-1/2 hover:h-full mx-auto",
        style: { "max-height": "90%", "max-width": "90%" },
        preview: __props.preview,
        then: __props.then
      }, null, _parent));
      _push(`</div></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ZoomableImage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
