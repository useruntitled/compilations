import { inject, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { I as IconUp, a as IconDown } from "./IconDown-5874ffdc.js";
import { usePage } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Reputation",
  __ssrInlineRender: true,
  props: {
    type: {
      required: true,
      default: null
    },
    reputation: null
  },
  setup(__props) {
    inject("callModal");
    const props = __props;
    usePage();
    const current_action = ref(props.reputation.action ?? null);
    const up = ref(props.reputation.up);
    const down = ref(props.reputation.down);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-sm flex" }, _attrs))}><div class="inline-block hover:text-green-700 flex items-center me-2"><span class="me-1">${ssrInterpolate(up.value)}</span><button class="${ssrRenderClass([current_action.value == "up" ? "text-green-500" : "", "p-1 rounded-full text-green-300 hover:text-green-500 hover:bg-green-100"])}">`);
      _push(ssrRenderComponent(IconUp, { class: "w-6 h-6" }, null, _parent));
      _push(`</button></div><div class="inline-block hover:text-red-700 flex items-center"><span class="me-1">${ssrInterpolate(down.value)}</span><button class="${ssrRenderClass([current_action.value == "down" ? "text-red-500" : "", "p-1 rounded-full hover:bg-red-100 text-red-300 hover:text-red-500"])}">`);
      _push(ssrRenderComponent(IconDown, { class: "w-6 h-6" }, null, _parent));
      _push(`</button></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Reputation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
