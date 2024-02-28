import { Link } from "@inertiajs/vue3";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: {
    avatarOnly: false,
    user: null,
    mode: null
  },
  components: { Link }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><header class="grid grid-rows-1 grid-flow-col items-start place-content-start"><div class="flex items-end justify-end"><img class="rounded-full inline-block border-bck border-2"${ssrRenderAttr("src", _ctx.route("im", [$props.user.avatar, "100"]))} style="${ssrRenderStyle({ "width": "40px", "height": "40px" })}" alt=""><div class="absolute">`);
  ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
  _push(`</div></div><div class="flex flex-col ms-2"><div>`);
  ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
  _push(`</div><main>`);
  ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
  _push(`</main></div></header></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UserTablet.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UserTablet = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  UserTablet as U
};
