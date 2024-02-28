import { C as Compilation } from "./Compilation-9ee65383.js";
import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./IconComments-a1dcea06.js";
import "./Reputation-4f724316.js";
import "./IconDown-5874ffdc.js";
import "@inertiajs/vue3";
const _sfc_main = {
  props: {
    posts: null
  },
  components: { Compilation }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Base = resolveComponent("Base");
  const _component_Compilation = resolveComponent("Compilation");
  _push(ssrRenderComponent(_component_Base, mergeProps({ title: "Подборки" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Подборки</p><main class="my-5 p-5 shadow rounded-xl"${_scopeId}><!--[-->`);
        ssrRenderList($props.posts, (post) => {
          _push2(`<div${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Compilation, { post }, null, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></main>`);
      } else {
        return [
          createVNode("p", null, "Подборки"),
          createVNode("main", { class: "my-5 p-5 shadow rounded-xl" }, [
            (openBlock(true), createBlock(Fragment, null, renderList($props.posts, (post) => {
              return openBlock(), createBlock("div", {
                key: post.id
              }, [
                createVNode(_component_Compilation, { post }, null, 8, ["post"])
              ]);
            }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Posts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Posts = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Posts as default
};
