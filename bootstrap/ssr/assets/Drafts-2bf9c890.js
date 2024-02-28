import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { P as Post } from "./Post-8130b980.js";
import { E as EmptyFeed } from "./EmptyFeed-b8ebb3a0.js";
import { M as MainLayout } from "./MainLayout-b86e9381.js";
import "./Modal-dfb0e8c9.js";
import "./IconComments-a1dcea06.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./Film-157939f1.js";
import "./PrimaryButton-c33e55f3.js";
import "@inertiajs/vue3";
import "./Reputation-4f724316.js";
import "./IconDown-5874ffdc.js";
import "./UserTablet-8c54f90d.js";
import "./UserTabletWithElementInside-40135a27.js";
import "axios";
import "./ApplicationLogo-f17895f3.js";
import "lodash/function.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: MainLayout
}, {
  __name: "Drafts",
  __ssrInlineRender: true,
  props: {
    drafts: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>
            Черновики
        </title>`);
          } else {
            return [
              createVNode("title", null, "\n            Черновики\n        ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!__props.drafts.length) {
        _push(`<div class="mt-20">`);
        _push(ssrRenderComponent(EmptyFeed, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="space-y-5"><!--[-->`);
      ssrRenderList(__props.drafts, (post) => {
        _push(ssrRenderComponent(Post, { post }, null, _parent));
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Drafts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
