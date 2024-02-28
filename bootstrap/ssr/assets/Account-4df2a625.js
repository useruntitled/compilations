import { M as MainLayout } from "./MainLayout-b86e9381.js";
import { useSSRContext } from "vue";
import "vue/server-renderer";
import "@inertiajs/vue3";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./PrimaryButton-c33e55f3.js";
import "./Modal-dfb0e8c9.js";
import "./ApplicationLogo-f17895f3.js";
import "./UserTablet-8c54f90d.js";
import "lodash/function.js";
import "axios";
import "./IconDown-5874ffdc.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: MainLayout
}, {
  __name: "Account",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Account.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
