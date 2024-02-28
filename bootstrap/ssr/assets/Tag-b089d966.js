import { C as Compilation } from "./Compilation-9ee65383.js";
import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./IconComments-a1dcea06.js";
import "./Reputation-4f724316.js";
import "./IconDown-5874ffdc.js";
import "@inertiajs/vue3";
const _sfc_main = {
  props: {
    posts: null,
    tag: null
  },
  components: { Compilation }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Base = resolveComponent("Base");
  const _component_Compilation = resolveComponent("Compilation");
  _push(ssrRenderComponent(_component_Base, mergeProps({
    title: $props.tag.name
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="text-sky-700 font-semibold text-center p-5 text-xl"${_scopeId}> #${ssrInterpolate($props.tag.name)}</p><main class="shadow rounded-xl p-5 my-5 text-sm"${_scopeId}><!--[-->`);
        ssrRenderList($props.posts, (post) => {
          _push2(ssrRenderComponent(_component_Compilation, { post }, null, _parent2, _scopeId));
        });
        _push2(`<!--]--></main>`);
      } else {
        return [
          createVNode("p", { class: "text-sky-700 font-semibold text-center p-5 text-xl" }, " #" + toDisplayString($props.tag.name), 1),
          createVNode("main", { class: "shadow rounded-xl p-5 my-5 text-sm" }, [
            (openBlock(true), createBlock(Fragment, null, renderList($props.posts, (post) => {
              return openBlock(), createBlock(_component_Compilation, { post }, null, 8, ["post"]);
            }), 256))
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Tag.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Tag = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Tag as default
};
