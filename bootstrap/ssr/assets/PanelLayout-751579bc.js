import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const PanelLayout_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<title${_scopeId}>
            Панель
        </title>`);
      } else {
        return [
          createVNode("title", null, "\n            Панель\n        ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="grid grid-template"><section class="h-full mx-auto w-full text-center sticky overflow-y-auto overscroll-none min-h-screen border-e-2">`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("panel.index"),
    class: "my-10 mt-5 pb-4 font-semibold text-xl border-b-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Панель `);
      } else {
        return [
          createTextVNode(" Панель ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex flex-col space-y-10 mt-10"><button class="hover:opacity-80"> Фильмы </button><button class="hover:opacity-80"> Подборки </button>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("panel.users")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Пользователи `);
      } else {
        return [
          createTextVNode(" Пользователи ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("panel.moders")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Модераторы `);
      } else {
        return [
          createTextVNode(" Модераторы ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("panel.admins")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Администраторы `);
      } else {
        return [
          createTextVNode(" Администраторы ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></section><div class="ms-8 mt-4">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/PanelLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PanelLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  PanelLayout as P
};
