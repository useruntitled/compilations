import { ssrRenderComponent } from "vue/server-renderer";
import { M as MainLayout, p as _sfc_main$1 } from "./MainLayout-b86e9381.js";
import { useSSRContext } from "vue";
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
  __name: "Search",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="bg-white rounded-xl mb-2"><div class="px-3 py-2 mt-4">`);
      _push(ssrRenderComponent(_sfc_main$1, { "bg-input-color": "bg-white" }, null, _parent));
      _push(`</div></div><div class="bg-white rounded-xl px-2 py-40 text-center text-secondary"> Пока здесь пусто, но скоро появится поиск </div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
