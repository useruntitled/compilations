import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { P as PanelLayout } from "./PanelLayout-751579bc.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: PanelLayout
}, {
  __name: "Admins",
  __ssrInlineRender: true,
  props: {
    admins: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}><section><p>Выдать админку по айдишнику</p><input type="text"><button> Go</button></section> Кол-во ${ssrInterpolate(((_a = __props.admins) == null ? void 0 : _a.length) ?? 0)} <!--[-->`);
      ssrRenderList(__props.admins, (admin) => {
        _push(`<div class="border-b-2"><div><!--[-->`);
        ssrRenderList(__props.admins, (admin2) => {
          _push(`<div><p>${ssrInterpolate(admin2.id)}</p><p>${ssrInterpolate(admin2.name)}</p></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Admins.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
