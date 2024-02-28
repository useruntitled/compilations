import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { P as PanelLayout } from "./PanelLayout-751579bc.js";
import { U as UserTablet } from "./UserTablet-8c54f90d.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "@inertiajs/vue3";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: PanelLayout
}, {
  __name: "ObjectCreator",
  __ssrInlineRender: true,
  props: {
    user: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-screen-sm" }, _attrs))}><header>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("profile", [__props.user.id])
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(UserTablet, { user: __props.user }, {
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p${_scopeId2}>${ssrInterpolate(__props.user.name)}</p><p${_scopeId2}>${ssrInterpolate(__props.user.description)}</p><!--[-->`);
                  ssrRenderList(__props.user.roles, (role) => {
                    _push3(`<div${_scopeId2}><p class="${ssrRenderClass({ "text-red-500 font-semibold": role.role === "admin" })}"${_scopeId2}>${ssrInterpolate(role.role)}</p></div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode("p", null, toDisplayString(__props.user.name), 1),
                    createVNode("p", null, toDisplayString(__props.user.description), 1),
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.user.roles, (role) => {
                      return openBlock(), createBlock("div", null, [
                        createVNode("p", {
                          class: { "text-red-500 font-semibold": role.role === "admin" }
                        }, toDisplayString(role.role), 3)
                      ]);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(UserTablet, { user: __props.user }, {
                content: withCtx(() => [
                  createVNode("p", null, toDisplayString(__props.user.name), 1),
                  createVNode("p", null, toDisplayString(__props.user.description), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.user.roles, (role) => {
                    return openBlock(), createBlock("div", null, [
                      createVNode("p", {
                        class: { "text-red-500 font-semibold": role.role === "admin" }
                      }, toDisplayString(role.role), 3)
                    ]);
                  }), 256))
                ]),
                _: 1
              }, 8, ["user"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<img${ssrRenderAttr("src", _ctx.route("im", [__props.user.background_image, 1e3]))} alt=""></header><main class="flex flex-col items-start"><button>Забанить</button><button>Скрыть/удалить все посты</button></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/ObjectCreator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
