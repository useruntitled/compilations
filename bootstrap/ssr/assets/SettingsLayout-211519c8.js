import { mergeProps, useSSRContext, reactive, resolveComponent, withCtx, createVNode, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    class: "icon icon-tabler icon-tabler-arrow-narrow-left",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, _attrs))}><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M5 12l4 4"></path><path d="M5 12l4 -4"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconArrowLeft.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const IconArrowLeft = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "SettingsLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const pages = reactive({
      "Auth/Settings/Index": "Настройки",
      "Auth/Settings/Profile": "Профиль"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Настройки</title>`);
          } else {
            return [
              createVNode("title", null, "Настройки")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-white rounded-xl max-w-screen"><header class="font-medium text-lgg px-5 py-4 flex items-center">`);
      if (pages[unref(page).component] != "Настройки") {
        _push(ssrRenderComponent(_component_Link, {
          "preserve-state": "",
          "preserve-scroll": "",
          href: _ctx.route("settings"),
          class: "hover:bg-zinc-100 rounded-full me-2"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(IconArrowLeft, { class: "w-8 h-8 inline-block stroke-[1.4px]" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(IconArrowLeft, { class: "w-8 h-8 inline-block stroke-[1.4px]" })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(pages[unref(page).component])}</span></header><hr><main class="py-5 xs:w-screen md:w-auto">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Settings/SettingsLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
