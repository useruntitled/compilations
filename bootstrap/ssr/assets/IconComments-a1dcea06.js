import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-width="0%" fill-rule="evenodd" clip-rule="evenodd" d="M20.9785 11.7357C20.9785 6.33523 16.5963 3 11.7354 3C6.88311 3 2.51763 6.32292 2.50005 11.7031C2.48248 17.0833 6.76886 20.4714 11.7355 20.4714C13.0417 20.4714 14.0893 20.4051 15.3548 19.9014C15.5465 19.8251 15.862 19.8188 16.1651 19.9204L19.2093 20.9339C19.9267 21.1504 20.5717 20.8103 20.9319 20.4531C21.3065 20.0816 21.6386 19.436 21.4434 18.712L21.4358 18.6837L20.438 15.6919C20.3381 15.3024 20.3386 14.8517 20.4207 14.622L20.4764 14.4673C20.7531 13.6993 20.9785 13.0739 20.9785 11.7357ZM11.7354 5C7.75362 5 4.5 7.65258 4.5 11.7357C4.5 15.8188 7.75363 18.4714 11.7355 18.4714C12.9558 18.4714 13.7021 18.4066 14.6152 18.0432C15.3465 17.7521 16.163 17.8105 16.8001 18.0239L19.3958 18.8887L18.5213 16.2665L18.5137 16.2382C18.3459 15.6163 18.2678 14.7027 18.5376 13.9484C18.5585 13.8899 18.5788 13.8338 18.5983 13.7797C18.8443 13.0977 18.9785 12.7257 18.9785 11.7357C18.9785 7.65369 15.7185 5 11.7354 5Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconComments.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const IconComments = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  IconComments as I
};
