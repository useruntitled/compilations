import { ssrRenderAttrs, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { P as PanelLayout } from "./PanelLayout-751579bc.js";
import { useSSRContext } from "vue";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: PanelLayout
}, {
  __name: "Moders",
  __ssrInlineRender: true,
  props: {
    moders: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(_attrs)}><section><p>Выдать модерку по айдишнику</p><input type="text"><button> Go</button></section> Кол:во ${ssrInterpolate(((_a = __props.moders) == null ? void 0 : _a.length) ?? 0)} <!--[-->`);
      ssrRenderList(__props.moders, (moder) => {
        _push(`<div class="flex"><div><p>${ssrInterpolate(moder.id)}</p><p>${ssrInterpolate(moder.name)}</p></div><div><button>Снять модерку</button></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Moders.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
