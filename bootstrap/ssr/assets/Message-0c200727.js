import { ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const Message_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  props: {
    showMessage: null,
    mode: null
  },
  updated() {
    setTimeout(() => this.$emit("closeMessage"), 2e3);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.mode = "success") {
    _push(`<div style="${ssrRenderStyle($props.showMessage ? null : { display: "none" })}" class="bg-emerald-50 my-5 mx-5 p-5 text-sm border border-1/2 border-emerald-150 rounded-xl fixed left-0 bottom-0 min-w-xs max-w-xs"><p class="text-center font-semibold text-emerald-700">Успех!</p></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Message.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Message = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Message as M
};
