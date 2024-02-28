import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./SettingsLayout-211519c8.js";
import { M as MainLayout, I as IconLogin, d as IconTooth, e as IconBell } from "./MainLayout-b86e9381.js";
import "@inertiajs/vue3";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./PrimaryButton-c33e55f3.js";
import "./Modal-dfb0e8c9.js";
import "./ApplicationLogo-f17895f3.js";
import "./UserTablet-8c54f90d.js";
import "lodash/function.js";
import "axios";
import "./IconDown-5874ffdc.js";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: [MainLayout, _sfc_main$1] }, {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-1" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Link, {
        "preserve-state": "",
        "preserve-scroll": "",
        href: _ctx.route("settings.profile"),
        class: "block hover:bg-zinc-100 p-6 rounded-xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}><div class="me-4 opacity-80"${_scopeId}>`);
            _push2(ssrRenderComponent(IconLogin, { class: "w-6 h-6 stroke-[0.1]" }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex flex-col"${_scopeId}><p class="font-medium"${_scopeId}>Профиль</p><p class="text-15 opacity-80"${_scopeId}>Название, Описание</p></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode("div", { class: "me-4 opacity-80" }, [
                  createVNode(IconLogin, { class: "w-6 h-6 stroke-[0.1]" })
                ]),
                createVNode("div", { class: "flex flex-col" }, [
                  createVNode("p", { class: "font-medium" }, "Профиль"),
                  createVNode("p", { class: "text-15 opacity-80" }, "Название, Описание")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="block hover:bg-zinc-100 p-6 rounded-xl"><div class="flex items-center"><div class="me-4 opacity-80">`);
      _push(ssrRenderComponent(IconTooth, { class: "w-6 h-6" }, null, _parent));
      _push(`</div><div class="flex flex-col"><p class="font-medium">Основные</p><p class="text-15 opacity-80"> Способ входа, Удаление аккаунта </p></div></div></div><div class="block hover:bg-zinc-100 p-6 rounded-xl"><div class="flex items-center"><div class="me-4 opacity-80">`);
      _push(ssrRenderComponent(IconBell, { class: "text-black w-6 h-6 stroke-[0.1]" }, null, _parent));
      _push(`</div><div class="flex flex-col"><p class="font-medium">Уведомления</p><p class="text-15 opacity-80">Уведомления, Письма</p></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Settings/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
