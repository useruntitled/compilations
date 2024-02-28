import { mergeProps, useSSRContext, resolveComponent, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, createCommentVNode, toDisplayString, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderVNode, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { I as IconComments } from "./IconComments-a1dcea06.js";
import { o as IconHeart, i as _sfc_main$2 } from "./MainLayout-b86e9381.js";
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    class: "icon icon-tabler icon-tabler-arrow-forward-up",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, _attrs))}><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 14l4 -4l-4 -4"></path><path d="M19 10h-11a4 4 0 1 0 0 8h1"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconArrowForwardUp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const IconArrowForwardUp = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  props: {
    user: null,
    icon: null,
    iconColor: {
      default: "primary"
    },
    isDropdown: {
      default: false
    }
  },
  data() {
    return {
      isVisible: false,
      translateStyle: ""
    };
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true;
    }, 20);
  },
  components: { IconArrowForwardUp, IconHeart, IconComments, LazyImage: _sfc_main$2 }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_LazyImage = resolveComponent("LazyImage");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "m-1 ms-0 text-start" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("profile", [$props.user.id])
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="grid grid-rows-1 grid-flow-col items-start place-content-start"${_scopeId}><div class="flex items-end justify-start"${_scopeId}><div class="flex items-end justify-end"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_LazyImage, {
          preview: `/media/${$props.user.avatar_preview}`,
          then: _ctx.route("im", [$props.user.avatar, 100]),
          class: "rounded-full inline-block hover:brightness-110 border-2",
          style: { "width": "40px", "height": "40px" }
        }, null, _parent2, _scopeId));
        if ($props.icon != null) {
          _push2(`<div class="${ssrRenderClass(["bg-" + $props.iconColor, "absolute rounded-full duration-200 transition-all text-white stroke-2"])}"${_scopeId}><div class="text-white"${_scopeId}>`);
          ssrRenderVNode(_push2, createVNode(resolveDynamicComponent($props.icon), {
            class: [
              "mx-auto duration-200 relative stroke-[2] fill-white p-1",
              $props.isDropdown ? !$data.isVisible ? "w-2 h-2" : "w-5 h-5" : "w-5 h-5"
            ],
            style: $data.translateStyle
          }, null), _parent2, _scopeId);
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="flex flex-col align-center ms-2 text-15 font-500"${_scopeId}><p class="font-medium"${_scopeId}>${ssrInterpolate($props.user.name)}</p><p${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
        _push2(`</p></div></div><div class="d-none text-primary bg-primary bg-dtfpr"${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "grid grid-rows-1 grid-flow-col items-start place-content-start" }, [
            createVNode("div", { class: "flex items-end justify-start" }, [
              createVNode("div", { class: "flex items-end justify-end" }, [
                createVNode(_component_LazyImage, {
                  preview: `/media/${$props.user.avatar_preview}`,
                  then: _ctx.route("im", [$props.user.avatar, 100]),
                  class: "rounded-full inline-block hover:brightness-110 border-2",
                  style: { "width": "40px", "height": "40px" }
                }, null, 8, ["preview", "then"]),
                $props.icon != null ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ["absolute rounded-full duration-200 transition-all text-white stroke-2", "bg-" + $props.iconColor]
                }, [
                  createVNode("div", { class: "text-white" }, [
                    (openBlock(), createBlock(resolveDynamicComponent($props.icon), {
                      class: [
                        "mx-auto duration-200 relative stroke-[2] fill-white p-1",
                        $props.isDropdown ? !$data.isVisible ? "w-2 h-2" : "w-5 h-5" : "w-5 h-5"
                      ],
                      style: $data.translateStyle
                    }, null, 8, ["class", "style"]))
                  ])
                ], 2)) : createCommentVNode("", true)
              ])
            ]),
            createVNode("div", { class: "flex flex-col align-center ms-2 text-15 font-500" }, [
              createVNode("p", { class: "font-medium" }, toDisplayString($props.user.name), 1),
              createVNode("p", null, [
                renderSlot(_ctx.$slots, "content")
              ])
            ])
          ]),
          createVNode("div", { class: "d-none text-primary bg-primary bg-dtfpr" })
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UserTabletWithElementInside.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const UserTabletWithElementInside = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  IconArrowForwardUp as I,
  UserTabletWithElementInside as U
};
