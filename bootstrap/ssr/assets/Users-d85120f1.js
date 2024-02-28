import { ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { P as PanelLayout } from "./PanelLayout-751579bc.js";
import { useSSRContext } from "vue";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: PanelLayout
}, {
  __name: "Users",
  __ssrInlineRender: true,
  props: {
    users: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(__props.users, (user) => {
        _push(`<div class="flex justify-between items-center"><div>${ssrInterpolate(user.name)}</div><div><button> Забанить </button></div></div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Users.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
