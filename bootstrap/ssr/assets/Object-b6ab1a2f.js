import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { P as PanelLayout } from "./PanelLayout-751579bc.js";
import { useSSRContext } from "vue";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: PanelLayout
}, {
  __name: "Object",
  __ssrInlineRender: true,
  props: {
    report_to: null,
    report: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><header><p> id: ${ssrInterpolate(__props.report_to.id)}</p><p>${ssrInterpolate(__props.report_to)}</p><p>`);
      if (__props.report_to.image) {
        _push(`<img class="max-h-40"${ssrRenderAttr("src", _ctx.route("im", [__props.report_to.image, 200]))} alt="">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p></header><main class="mt-10"><button>Удалить/Скрыть</button></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Object.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
