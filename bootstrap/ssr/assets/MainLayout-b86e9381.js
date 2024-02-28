import { inject, resolveComponent, unref, mergeProps, withCtx, renderSlot, useSSRContext, ref, watch, computed, createVNode, createTextVNode, onMounted, toDisplayString, openBlock, createBlock, createCommentVNode, createSlots, resolveDynamicComponent, Fragment, renderList, mergeModels, useModel, onUnmounted, reactive, withDirectives, vShow, provide } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderTeleport, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderVNode, ssrGetDynamicModelProps, ssrGetDirectiveProps } from "vue/server-renderer";
import { usePage, Link, router } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { P as PrimaryButton } from "./PrimaryButton-c33e55f3.js";
import { _ as _sfc_main$M, a as _sfc_main$N } from "./Modal-dfb0e8c9.js";
import { A as ApplicationLogo } from "./ApplicationLogo-f17895f3.js";
import { U as UserTablet } from "./UserTablet-8c54f90d.js";
import pkg from "lodash/function.js";
import axios$1 from "axios";
import { I as IconUp, a as IconDown } from "./IconDown-5874ffdc.js";
const _sfc_main$L = {
  __name: "AuthLink",
  __ssrInlineRender: true,
  props: {
    href: String
  },
  setup(__props) {
    inject("callModal");
    const page = usePage();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      if (unref(page).props.auth.check) {
        _push(ssrRenderComponent(_component_Link, mergeProps({
          href: __props.href,
          "preserve-state": ""
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AuthLink.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const _sfc_main$K = {};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    class: "icon icon-tabler icon-tabler-check",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, _attrs))}><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l5 5l10 -10"></path></svg>`);
}
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconCheck.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const IconCheck = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["ssrRender", _sfc_ssrRender$n]]);
const _sfc_main$J = {};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="#F01"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="#fff" fill-opacity=".2"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="#000" fill-opacity=".06"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.535 9.879a1 1 0 0 0-1.414-1.414L12 10.585l-2.121-2.12a1 1 0 0 0-1.415 1.414l2.121 2.12-2.121 2.122a1 1 0 1 0 1.414 1.415L12 13.414l2.121 2.122a1 1 0 0 0 1.415-1.415L13.414 12l2.12-2.121Z" fill="#fff"></path></svg>`);
}
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconCircleCross.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const IconCircleCross = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender$m]]);
const Message_vue_vue_type_style_index_0_lang = "";
const _sfc_main$I = {
  __name: "Message",
  __ssrInlineRender: true,
  props: {
    message: null
  },
  setup(__props) {
    const props = __props;
    const messages = ref([]);
    watch(props.message, (newValue, oldValue) => {
      if (newValue.type != null && newValue.message != null) {
        console.log("NOT NULL", newValue);
        messages.value.unshift(newValue);
        console.log(messages.value[0]);
      } else {
        console.log("NULL", newValue);
        console.log(messages.value[0]);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        if (messages.value.length > 0) {
          _push2(`<div class="z-[100] absolute"><div><!--[-->`);
          ssrRenderList(messages.value, (msg) => {
            _push2(`<div>`);
            if (msg.message != null) {
              _push2(`<div class="bg-white my-5 mx-5 px-5 py-2 rounded-lg fixed right-0 min-w-xs max-w-x" style="${ssrRenderStyle({ "top": "65.6px" })}"><div class="flex items-center"><div class="p-[1px] me-2">`);
              _push2(ssrRenderComponent(IconCheck, {
                style: msg.type === "success" ? null : { display: "none" },
                class: "w-5 h-5 stroke-2 text-white bg-green-400 rounded-full"
              }, null, _parent));
              _push2(ssrRenderComponent(IconCircleCross, {
                style: msg.type === "error" ? null : { display: "none" },
                class: "w-5 h-5 text-white"
              }, null, _parent));
              _push2(`</div><p class="text-center font-medium">${ssrInterpolate(msg.message)}</p></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          });
          _push2(`<!--]--></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Messages/Message.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const _sfc_main$H = {};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path fill="currentColor" stroke-width="0%" fill-rule="evenodd" clip-rule="evenodd" d="M12.636 5.23a1 1 0 0 0-1.272 0L5.728 9.871A2 2 0 0 0 5 11.416V18a1 1 0 0 0 1 1h2v-4a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v4h2a1 1 0 0 0 1-1v-6.584a2 2 0 0 0-.728-1.544l-5.636-4.643ZM14 19v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4h4ZM10.093 3.686a3 3 0 0 1 3.814 0l5.636 4.642A4 4 0 0 1 21 11.416V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6.584a4 4 0 0 1 1.457-3.088l5.636-4.642Z"></path></svg>`);
}
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconHome.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const IconHome = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["ssrRender", _sfc_ssrRender$l]]);
const _sfc_main$G = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-width="0%" fill-rule="evenodd" clip-rule="evenodd" d="M4 7C4 4.79086 5.79086 3 8 3H16C18.2091 3 20 4.79086 20 7V19.0454C20 20.6726 18.1247 21.584 16.8452 20.5787L12.5251 17.1844C12.2169 16.9422 11.7831 16.9422 11.4749 17.1844L7.15475 20.5787C5.8753 21.584 4 20.6725 4 19.0454V7ZM8 5C6.89543 5 6 5.89543 6 7V18.9425L10.2392 15.6117C11.2727 14.7997 12.7273 14.7997 13.7608 15.6117L18 18.9425V7C18 5.89543 17.1046 5 16 5H8Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconBookmark.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const IconBookmark = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$k]]);
const _sfc_main$F = {};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path fill="currentColor" stroke-width="0" fill-rule="evenodd" clip-rule="evenodd" d="M12 3.998a8.002 8.002 0 1 0 0 16.004 8.002 8.002 0 0 0 0-16.005ZM2.002 12c0-5.521 4.477-9.998 9.998-9.998 5.521 0 9.997 4.477 9.997 9.998 0 5.521-4.476 9.997-9.997 9.997S2.002 17.521 2.002 12ZM12 6.003c.55 0 .998.447.998.997v4.297l2.837 1.014a.998.998 0 0 1-.67 1.879l-3.5-1.25a.998.998 0 0 1-.662-.94V7c0-.55.446-.997.997-.997Z"></path></svg>`);
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconClock.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const IconClock = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$j]]);
const _sfc_main$E = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 167 167",
    fill: "currentColor",
    stroke: "currentColor"
  }, _attrs))}><g filter="url(#filter0_d_1_3)"><path d="M82.1717 11.5309C83.5048 10.4613 85.185 9.91981 86.8918 10.0096C88.5987 10.0995 90.2127 10.8144 91.4262 12.018C97.9114 18.4545 104.543 22.9635 111.257 27.3959L112.552 28.2448C118.745 32.3224 125.244 36.5948 130.901 42.252C136.726 48.0618 141.346 54.9654 144.495 62.566C147.643 70.1667 149.26 78.3146 149.25 86.5418C149.26 94.7672 147.644 102.914 144.496 110.513C141.349 118.112 136.731 125.015 130.908 130.825C122.147 139.576 110.989 145.535 98.8428 147.947C86.697 150.36 74.1085 149.118 62.668 144.379C51.2274 139.641 41.4481 131.617 34.5657 121.323C27.6833 111.028 24.0065 98.9249 24 86.5418C24 69.4591 32.0717 54.7143 43.4346 43.3514C44.275 42.5095 45.3172 41.8971 46.4617 41.5726C47.6062 41.2482 48.8148 41.2226 49.972 41.4983C51.1291 41.774 52.1963 42.3418 53.0716 43.1474C53.9469 43.953 54.601 44.9695 54.9715 46.0999C55.6299 47.5458 56.4442 48.9154 57.4 50.1845C58.0263 51.0195 58.7917 51.931 59.7171 52.8843C61.7142 39.3712 67.4965 23.3392 82.1647 11.5379M47.387 59.954C41.3958 67.9352 37.9167 76.9253 37.9167 86.5418C37.916 96.1759 40.7723 105.594 46.1244 113.604C51.4765 121.615 59.0839 127.859 67.9847 131.546C76.8854 135.233 86.6795 136.197 96.1285 134.317C105.577 132.438 114.257 127.798 121.069 120.985L121.076 120.979C125.605 116.463 129.196 111.096 131.644 105.187C134.092 99.2787 135.348 92.9444 135.34 86.5487V86.5418C135.348 80.146 134.092 73.8118 131.644 67.9031C129.196 61.9944 125.605 56.6279 121.076 52.1119H121.062C116.448 47.4916 111.056 43.9359 104.571 39.6565L103.596 39.0163C98.2732 35.5024 92.4143 31.5709 86.4997 26.4287C75.3525 38.1883 72.7083 53.9837 72.7083 65.6667C72.7077 66.8524 72.4041 68.0182 71.8264 69.0536C71.2487 70.0889 70.416 70.9595 69.4073 71.5827C68.3987 72.2059 67.2475 72.561 66.0631 72.6143C64.8786 72.6677 63.7002 72.4175 62.6396 71.8875C55.4865 68.3109 50.6156 63.8854 47.387 59.954Z" stroke-width="0"></path></g></svg>`);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconFlame.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const IconFlame = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$i]]);
const _sfc_main$D = {
  __name: "AsideLeft",
  __ssrInlineRender: true,
  setup(__props) {
    const callModal = inject("callModal");
    const page = usePage();
    const isPopular = computed(() => {
      return page.component === "Home/Index";
    });
    const isNew = computed(() => {
      return page.component === "Home/New";
    });
    const isBookmarks = computed(() => {
      return page.component === "Auth/Bookmarks";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "h-full mx-auto w-full text-center sticky",
        style: { "height": "calc(100vh - 58px)", "top": "58px" }
      }, _attrs))}><div class="px-2.5 mt-0 py-5 text-start">`);
      _push(ssrRenderComponent(_component_Link, {
        "preserve-state": "",
        href: _ctx.route("home"),
        class: ["appearance-none block w-full p-2 rounded-xl text-lg mb-2 hover:cursor-pointer hover:bg-white hover:shadow-sm", { "bg-white shadow-sm": isPopular.value }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center py-[5px]"${_scopeId}><span class="me-2 inline-block"${_scopeId}>`);
            _push2(ssrRenderComponent(IconFlame, {
              class: ["w-[24px] text-secondary", {
                "stroke-amber-500 fill-amber-500 ": isPopular.value
              }]
            }, null, _parent2, _scopeId));
            _push2(`</span><span class="text-lgg font-regular"${_scopeId}>Популярное</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center py-[5px]" }, [
                createVNode("span", { class: "me-2 inline-block" }, [
                  createVNode(IconFlame, {
                    class: ["w-[24px] text-secondary", {
                      "stroke-amber-500 fill-amber-500 ": isPopular.value
                    }]
                  }, null, 8, ["class"])
                ]),
                createVNode("span", { class: "text-lgg font-regular" }, "Популярное")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Link, {
        "preserve-state": "",
        href: _ctx.route("new"),
        class: ["block w-full hover:bg-white p-2 rounded-xl text-lg mb-2 hover:cursor-pointer hover:shadow-sm", { "bg-white shadow-sm": isNew.value }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center py-[5px]"${_scopeId}><span class="me-2 inline-block"${_scopeId}>`);
            _push2(ssrRenderComponent(IconClock, {
              class: ["w-[24px] stroke-[2.2]", {
                "text-amber-500 ": isNew.value,
                "text-secondary": !isNew.value
              }]
            }, null, _parent2, _scopeId));
            _push2(`</span><span class="text-lgg font-regular"${_scopeId}>Свежее</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center py-[5px]" }, [
                createVNode("span", { class: "me-2 inline-block" }, [
                  createVNode(IconClock, {
                    class: ["w-[24px] stroke-[2.2]", {
                      "text-amber-500 ": isNew.value,
                      "text-secondary": !isNew.value
                    }]
                  }, null, 8, ["class"])
                ]),
                createVNode("span", { class: "text-lgg font-regular" }, "Свежее")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$L, {
        href: _ctx.route("me.bookmarks"),
        class: ["block w-full hover:bg-white p-2 rounded-xl text-lg mb-2 hover:cursor-pointer hover:shadow-sm", {
          "bg-white shadow-sm ": isBookmarks.value
        }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center py-[5px]"${_scopeId}><span class="me-2 inline-block"${_scopeId}>`);
            _push2(ssrRenderComponent(IconBookmark, {
              class: [{
                "text-amber-500 ": isBookmarks.value,
                "text-secondary": !isBookmarks.value
              }, "w-[24px]"]
            }, null, _parent2, _scopeId));
            _push2(`</span><span class="text-lgg font-regular"${_scopeId}>Закладки</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center py-[5px]" }, [
                createVNode("span", { class: "me-2 inline-block" }, [
                  createVNode(IconBookmark, {
                    class: [{
                      "text-amber-500 ": isBookmarks.value,
                      "text-secondary": !isBookmarks.value
                    }, "w-[24px]"]
                  }, null, 8, ["class"])
                ]),
                createVNode("span", { class: "text-lgg font-regular" }, "Закладки")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-full mt-10">`);
      _push(ssrRenderComponent(PrimaryButton, {
        onClick: ($event) => unref(callModal)("Editor"),
        class: "bg-orange-500 px-0 rounded-lg py-3 w-full font-regular text-17px"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Новая подборка`);
          } else {
            return [
              createTextVNode("Новая подборка")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/AsideLeft.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const _sfc_main$C = {
  __name: "LazyImage",
  __ssrInlineRender: true,
  props: {
    preview: null,
    then: null,
    class: null,
    style: null,
    showWhenLoaded: false
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      if (isLoaded.value == false) {
        if (props.showWhenLoaded == true) {
          return props.class + "hidden";
        }
        return props.class + " brightness-[.5]";
      }
      return props.class;
    });
    const isLoaded = ref(false);
    const src = computed(() => {
      if (!isLoaded.value) {
        return props.preview;
      }
      return props.then;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<img${ssrRenderAttrs(mergeProps({
        src: src.value,
        class: [classes.value, "duration-[200ms] ease-out"],
        style: __props.style
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/LazyImage.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const apiChannel = "all";
const apiEvent = ".comments.feed";
const broadcastChannel = new BroadcastChannel(apiChannel + apiEvent);
let isSubscribed = false;
const listenFeedUpdates = (callback) => {
  const echoChannel = Echo.channel(apiChannel);
  echoChannel.subscribe(apiEvent);
  echoChannel.subscribed(() => {
    isSubscribed = true;
    console.log("Laravel Echo: connected");
    broadcastChannel.postMessage("subscription");
    broadcastChannel.onmessage = (e) => {
      if (e.data == "subscription") {
        broadcastChannel.postMessage("stop your subscribtion");
        console.log("Post message to new tab: stop your subscription");
      } else if (e.data == "stop your subscribtion") {
        echoChannel.stopListening(apiEvent);
        echoChannel.unsubscribe(apiEvent);
        isSubscribed = false;
        console.log("Laravel Echo: disconnected");
      } else {
        broadcastChannel.onmessage = (e2) => {
          console.log("Message from tab", e2.data);
          callback(e2.data);
        };
      }
    };
    if (isSubscribed) {
      echoChannel.listen(apiEvent, (rawData) => {
        broadcastChannel.postMessage(rawData);
        callback(rawData);
      });
    }
  });
};
const getFeed = (callback) => {
  axios.get(route("comments.get.last")).catch((res) => {
    console.log(res);
  }).then((res) => {
    if (res.status == 200) {
      callback(res.data);
    }
  });
};
const AsideRight_vue_vue_type_style_index_0_lang = "";
const _sfc_main$B = {
  __name: "AsideRight",
  __ssrInlineRender: true,
  setup(__props) {
    const comments = ref([]);
    const prepareHref = (comment) => {
      return route("post", [
        comment.post.id,
        comment.post.slug,
        { comment: comment.id }
      ]);
    };
    const setComments = (data) => {
      comments.value = data;
    };
    const addComment = (data) => {
      var _a;
      console.log("data", data);
      comments.value.unshift(data.data);
      if (((_a = comments.value) == null ? void 0 : _a.length) > 20) {
        comments.value.splice(20, 1);
      }
    };
    onMounted(() => {
      getFeed(setComments);
      listenFeedUpdates(addComment);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "h-full mx-auto w-full text-center sticky overflow-y-auto overscroll-none noscrollbar",
        style: { "height": "calc(100vh - 52px)", "top": "52px" }
      }, _attrs))}><div class="pt-2 mt-0 ms-10"><p class="font-medium py-5 text-lg text-start flex sticky top-0 bg-bck z-50"> Сейчас обсуждают </p><div class="overflow-y-auto overflow-x-hidden text-start"><!--[-->`);
      ssrRenderList(comments.value, (comment) => {
        _push(`<div class="mb-4"><div class="flex items-center overflow-hidden whitespace-no-wrap px">`);
        _push(ssrRenderComponent(_component_Link, {
          href: _ctx.route("profile", [comment.user.id])
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$C, {
                preview: "/media/" + comment.user.avatar_preview,
                then: _ctx.route("im", [comment.user.avatar, ["50"]]),
                class: "rounded-full inline-block me-2 w-[36px] h-[36px] object-cover border-2",
                style: { "max-width": "36px", "max-height": "36px" }
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$C, {
                  preview: "/media/" + comment.user.avatar_preview,
                  then: _ctx.route("im", [comment.user.avatar, ["50"]]),
                  class: "rounded-full inline-block me-2 w-[36px] h-[36px] object-cover border-2",
                  style: { "max-width": "36px", "max-height": "36px" }
                }, null, 8, ["preview", "then"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<div class="flex flex-col"><div><span class="text-xs font-medium me-2">`);
        _push(ssrRenderComponent(_component_Link, {
          href: _ctx.route("profile", [comment.user.id])
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(comment.user.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(comment.user.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</span><span class="text-xs text-gray-600">в подборке</span></div>`);
        _push(ssrRenderComponent(_component_Link, {
          href: _ctx.route("post.redirect", [
            comment.post.id
          ])
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-sm font-medium overflow-hidden text-ellipsis" style="${ssrRenderStyle({ "max-height": "19px" })}"${_scopeId}>${ssrInterpolate(comment.post.title)}</p>`);
            } else {
              return [
                createVNode("p", {
                  class: "text-sm font-medium overflow-hidden text-ellipsis",
                  style: { "max-height": "19px" }
                }, toDisplayString(comment.post.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
        _push(ssrRenderComponent(_component_Link, {
          href: prepareHref(comment)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p class="text-base overflow-hidden text-ellipsis hover:opacity-70 cursor-pointer" style="${ssrRenderStyle({ "max-height": "100px" })}"${_scopeId}>${comment.text}</p>`);
              if (comment.image) {
                _push2(`<div class="text-center mt-2 flex justify-center relative"${_scopeId}><img${ssrRenderAttr("src", "/media/" + comment.image_preview)} class="rounded-lg mx-auto w-full" style="${ssrRenderStyle({ "max-height": "200px" })}" alt=""${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$C, {
                  preview: "/media/" + comment.image_preview,
                  then: _ctx.route("im", [comment.image, 300]),
                  class: "rounded-lg mx-auto object-scale-down w-full h-full absolute",
                  style: { "max-height": "200px" },
                  "show-when-loaded": true
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("p", {
                  class: "text-base overflow-hidden text-ellipsis hover:opacity-70 cursor-pointer",
                  style: { "max-height": "100px" },
                  innerHTML: comment.text
                }, null, 8, ["innerHTML"]),
                comment.image ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "text-center mt-2 flex justify-center relative"
                }, [
                  createVNode("img", {
                    src: "/media/" + comment.image_preview,
                    class: "rounded-lg mx-auto w-full",
                    style: { "max-height": "200px" },
                    alt: ""
                  }, null, 8, ["src"]),
                  createVNode(_sfc_main$C, {
                    preview: "/media/" + comment.image_preview,
                    then: _ctx.route("im", [comment.image, 300]),
                    class: "rounded-lg mx-auto object-scale-down w-full h-full absolute",
                    style: { "max-height": "200px" },
                    "show-when-loaded": true
                  }, null, 8, ["preview", "then"])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/AsideRight.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const _sfc_main$A = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-width="0%" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" d="M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-8 6a8 8 0 1 1 14.32 4.905l3.387 3.388a1 1 0 0 1-1.414 1.414l-3.387-3.387A8 8 0 0 1 3 11Z"></path></svg>`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconSearch.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const IconSearch = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$h]]);
const _sfc_main$z = {
  __name: "DropdownLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: "block w-full px-4 py-2 text-left leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownLink.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const _sfc_main$y = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-6 h-6"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"></path></svg>`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconExit.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const IconExit = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$x = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-6 h-6"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"></path></svg>`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconPanel.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const IconPanel = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$f]]);
const _sfc_main$w = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor"
  }, _attrs))}><path stroke-width="0%" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.1719 3.58588C16.953 2.80498 18.2192 2.80503 19.0002 3.58603L20.4144 5.00024C21.1954 5.78129 21.1954 7.04762 20.4144 7.82867L18.7172 9.52513L8.39145 19.8509C8.10464 20.1377 7.7374 20.3305 7.33846 20.4038L4.18063 20.9836C3.85729 21.043 3.52543 20.9397 3.29296 20.7072C3.06049 20.4748 2.95711 20.143 3.01643 19.8196L3.59592 16.6614C3.66914 16.2624 3.86198 15.8951 4.14886 15.6082L16.1719 3.58588ZM18.0102 7.40396L19.0002 6.41446L17.586 5.00024L16.596 5.98975L18.0102 7.40396ZM15.1817 7.40381L5.56308 17.0224L5.24522 18.7547L6.97723 18.4367L16.5959 8.81802L15.1817 7.40381Z"></path></svg>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconPencil.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const IconPencil = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$v = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor"
  }, _attrs))}><path stroke-width="0%" fill-rule="evenodd" clip-rule="evenodd" d="M11.9967 2C11.1727 2 10.4908 2.17732 9.95758 2.58802C9.43365 2.99155 9.18596 3.52211 9.03159 3.92442L8.85067 4.41522C8.65586 4.95764 8.58261 5.16158 8.24729 5.3335C7.88497 5.51917 7.65157 5.46963 7.11888 5.35642C6.96489 5.32369 6.78589 5.28565 6.57152 5.24644C6.14407 5.16824 5.58079 5.11142 4.96982 5.33053C4.35546 5.55086 3.82936 5.99917 3.35248 6.66212C2.89509 7.29796 2.69252 7.9493 2.75962 8.61881C2.82217 9.2429 3.11046 9.75723 3.35176 10.1373C3.46343 10.3132 3.55969 10.4548 3.64704 10.5833C3.78356 10.7841 3.8983 10.9529 4.01602 11.1704C4.17828 11.4702 4.26034 11.7281 4.26032 12.0002C4.26033 12.2599 4.18046 12.5119 4.01709 12.8122C3.89969 13.0279 3.7871 13.1937 3.65347 13.3906C3.5644 13.5217 3.46598 13.6667 3.35057 13.8493C3.1086 14.2323 2.82179 14.7486 2.75956 15.3735C2.69283 16.0435 2.89399 16.6966 3.35248 17.334C3.82929 17.9968 4.3551 18.4451 4.96894 18.6659C5.57949 18.8855 6.14253 18.8296 6.57016 18.752C6.78484 18.713 6.96409 18.6751 7.11828 18.6426C7.65065 18.5301 7.88442 18.4808 8.24721 18.6667C8.5826 18.8386 8.65584 19.0425 8.85067 19.585C8.90077 19.7245 8.9589 19.8863 9.03159 20.0758C9.18596 20.4781 9.43365 21.0087 9.95758 21.4122C10.4908 21.8229 11.1727 22.0002 11.9967 22.0002C12.8206 22.0002 13.5025 21.8229 14.0357 21.4122C14.5597 21.0087 14.8073 20.4781 14.9617 20.0758C15.0344 19.8863 15.0925 19.7245 15.1426 19.585C15.3375 19.0425 15.4116 18.8389 15.747 18.6669C16.1099 18.4809 16.3436 18.5303 16.876 18.6427C17.0302 18.6753 17.2095 18.7131 17.4242 18.7521C17.8518 18.8297 18.4149 18.8855 19.0254 18.6659C19.6392 18.4451 20.165 17.9968 20.6418 17.334C21.1003 16.6966 21.3014 16.0435 21.2347 15.3735C21.1725 14.7486 20.8857 14.2323 20.6437 13.8493C20.5283 13.6667 20.4299 13.5217 20.3408 13.3905C20.2072 13.1937 20.0946 13.0279 19.9772 12.8122C19.8138 12.5119 19.7339 12.2599 19.734 12.0002C19.7339 11.7281 19.816 11.4702 19.9782 11.1704C20.096 10.9529 20.2107 10.7841 20.3472 10.5833C20.4346 10.4548 20.5308 10.3132 20.6425 10.1373C20.8838 9.75722 21.1721 9.24289 21.2346 8.6188C21.3017 7.94929 21.0992 7.29796 20.6418 6.66212C20.1649 5.99911 19.6387 5.55081 19.0242 5.3305C18.4132 5.11143 17.8499 5.16824 17.4223 5.24642C17.2079 5.28564 17.0288 5.32368 16.8748 5.35641C16.3419 5.46962 16.1084 5.51922 15.7461 5.33354C15.4107 5.16161 15.3375 4.95768 15.1426 4.41522C15.0925 4.27574 15.0344 4.11388 14.9617 3.92442C14.8073 3.52211 14.5597 2.99155 14.0357 2.58802C13.5025 2.17732 12.8206 2 11.9967 2ZM17.5254 16.7275C16.9413 16.5892 15.8979 16.3422 14.8348 16.8871L14.8337 16.8869C13.7191 17.4583 13.3657 18.5402 13.1748 19.1244C13.1448 19.2163 13.1188 19.2959 13.0945 19.3593C12.9817 19.6532 12.8981 19.7639 12.8153 19.8277C12.7419 19.8843 12.5416 20.0002 11.9967 20.0002C11.4517 20.0002 11.2514 19.8843 11.178 19.8277C11.0952 19.7639 11.0116 19.6532 10.8989 19.3593C10.8745 19.2959 10.8485 19.2163 10.8185 19.1244C10.6277 18.5402 10.2743 17.4583 9.15958 16.8869C8.09638 16.342 7.05286 16.5891 6.46877 16.7274C6.36954 16.7509 6.28357 16.7713 6.21301 16.7841C5.91971 16.8373 5.76886 16.8282 5.64587 16.7839C5.52617 16.7409 5.29879 16.6147 4.97606 16.166C4.74607 15.8463 4.74 15.6692 4.74971 15.5717C4.76391 15.4292 4.83719 15.2408 5.04136 14.9176C5.08911 14.842 5.15453 14.7447 5.22878 14.6342C5.39954 14.38 5.61701 14.0563 5.77384 13.7681C6.0311 13.2954 6.26033 12.7088 6.26032 12.0003C6.26034 11.2861 6.03332 10.6959 5.77494 10.2184C5.61452 9.92204 5.3947 9.59575 5.2229 9.34075C5.15094 9.23394 5.08741 9.13964 5.0402 9.06528C4.83535 8.74264 4.76354 8.55792 4.74965 8.41935C4.74032 8.32621 4.74496 8.15128 4.97606 7.83002C5.29871 7.38147 5.52581 7.25586 5.64499 7.21312C5.76756 7.16916 5.91817 7.16011 6.21164 7.21379C6.28211 7.22668 6.36796 7.24714 6.46706 7.27075C7.0512 7.40993 8.09546 7.6587 9.15958 7.11331C10.2743 6.54189 10.6277 5.46004 10.8185 4.8758C10.8485 4.78387 10.8745 4.70427 10.8989 4.64091C11.0116 4.34704 11.0952 4.23628 11.178 4.17252C11.2514 4.11593 11.4517 4 11.9967 4C12.5416 4 12.7419 4.11593 12.8153 4.17252C12.8981 4.23628 12.9817 4.34704 13.0945 4.64091C13.1188 4.70427 13.1448 4.78387 13.1748 4.8758C13.3657 5.46005 13.7191 6.54189 14.8337 7.11331C15.8978 7.65867 16.9422 7.40995 17.5265 7.27077C17.6257 7.24715 17.7116 7.22669 17.7821 7.2138C18.0757 7.16011 18.2265 7.16915 18.3492 7.21315C18.4685 7.25591 18.6956 7.38153 19.0182 7.83002C19.2493 8.15128 19.2539 8.32621 19.2446 8.41935C19.2307 8.55792 19.1589 8.74265 18.9541 9.06528C18.9069 9.13964 18.8433 9.23394 18.7714 9.34074L18.2193 10.2184C17.9609 10.6959 17.7339 11.2861 17.734 12.0003C17.7339 12.7088 17.9632 13.2954 18.2204 13.7681C18.3773 14.0563 18.5947 14.38 18.7655 14.6342C18.8397 14.7447 18.9052 14.842 18.9529 14.9176C19.1571 15.2408 19.2304 15.4292 19.2446 15.5717C19.2543 15.6692 19.2482 15.8463 19.0182 16.166C18.6955 16.6147 18.4681 16.7409 18.3484 16.784C18.2253 16.8282 18.0745 16.8374 17.7812 16.7842C17.7106 16.7714 17.6247 16.751 17.5254 16.7275Z" fill="currentColor"></path><path stroke-width="0%" fill-rule="evenodd" clip-rule="evenodd" d="M11.9996 8C9.79044 8 7.99958 9.79086 7.99958 12C7.99958 14.2091 9.79044 16 11.9996 16C14.2087 16 15.9996 14.2091 15.9996 12C15.9996 9.79086 14.2087 8 11.9996 8ZM11.9996 10C10.895 10 9.99958 10.8954 9.99958 12C9.99958 13.1046 10.895 14 11.9996 14C13.1041 14 13.9996 13.1046 13.9996 12C13.9996 10.8954 13.1041 10 11.9996 10Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconTooth.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const IconTooth = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$u = {
  __name: "HeaderSection",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-15" }, _attrs))}><p class="px-4 font-medium py-2 text-start">Мой профиль</p>`);
      _push(ssrRenderComponent(_sfc_main$z, {
        href: _ctx.route("profile", [unref(page).props.auth.user.id]),
        class: "my-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              preview: `/media/${unref(page).props.auth.user.avatar_preview}`,
              then: _ctx.route("im", [unref(page).props.auth.user.avatar, [100]]),
              class: "rounded-full inline-block border-2 border-bck border",
              alt: "",
              style: { "width": "45px", "height": "45px" }
            }, null, _parent2, _scopeId));
            _push2(`<span class="whitespace-no-wrap overflow-hidden flex flex-col ms-2"${_scopeId}><p class="whitespace-no-wrap overflow-hidden font-medium"${_scopeId}>${ssrInterpolate(unref(page).props.auth.user.name)}</p><p class="opacity-80"${_scopeId}>Профиль</p></span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode(_sfc_main$C, {
                  preview: `/media/${unref(page).props.auth.user.avatar_preview}`,
                  then: _ctx.route("im", [unref(page).props.auth.user.avatar, [100]]),
                  class: "rounded-full inline-block border-2 border-bck border",
                  alt: "",
                  style: { "width": "45px", "height": "45px" }
                }, null, 8, ["preview", "then"]),
                createVNode("span", { class: "whitespace-no-wrap overflow-hidden flex flex-col ms-2" }, [
                  createVNode("p", { class: "whitespace-no-wrap overflow-hidden font-medium" }, toDisplayString(unref(page).props.auth.user.name), 1),
                  createVNode("p", { class: "opacity-80" }, "Профиль")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(page).props.auth.user.isAdmin) {
        _push(ssrRenderComponent(_sfc_main$z, {
          href: _ctx.route("panel.index"),
          class: "my-4 text-17px"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(IconPanel, { class: "me-2 inline-block stroke-[2]" }, null, _parent2, _scopeId));
              _push2(` Администрировать `);
            } else {
              return [
                createVNode(IconPanel, { class: "me-2 inline-block stroke-[2]" }),
                createTextVNode(" Администрировать ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$z, {
        href: _ctx.route("drafts"),
        class: "my-4 text-17px"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(IconPencil, { class: "me-2 inline-block w-6 h-6" }, null, _parent2, _scopeId));
            _push2(` Черновики `);
          } else {
            return [
              createVNode(IconPencil, { class: "me-2 inline-block w-6 h-6" }),
              createTextVNode(" Черновики ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$z, {
        href: _ctx.route("settings"),
        class: "my-4 text-17px"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(IconTooth, { class: "me-2 w-6 h-6 inline-block" }, null, _parent2, _scopeId));
            _push2(` Настройки `);
          } else {
            return [
              createVNode(IconTooth, { class: "me-2 w-6 h-6 inline-block" }),
              createTextVNode(" Настройки ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$z, {
        href: _ctx.route("logout"),
        method: "post",
        as: "button",
        class: "my-4 text-17px"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(IconExit, { class: "me-2 inline-block stroke-[2]" }, null, _parent2, _scopeId));
            _push2(` Выйти `);
          } else {
            return [
              createVNode(IconExit, { class: "me-2 inline-block stroke-[2]" }),
              createTextVNode(" Выйти ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/HeaderSection.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _sfc_main$t = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "p-2 px-3 bg-white text-black text-lgg shadow rounded-lg font-semibold" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Buttons/PrimaryButtonWhite.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const PrimaryButtonWhite = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$c]]);
const listenNotifications = (user_id, callback) => {
  var channel = Echo.private(`users.${user_id}`);
  channel.listen(".unread.notifications.count", (data) => {
    callback(data);
  });
};
const LoadNotifications = async (callback) => {
  await axios.get(route("me.notifications.get")).then((res) => {
    callback(res);
  });
};
const markNotificationsAsRead = async (callback) => {
  await axios.post(route("me.notifications.read"), {
    _method: "PATCH"
  }).catch((res) => {
    console.log(res);
  }).then((res) => {
    console.log(res);
    callback(res);
  });
};
const _sfc_main$s = {
  __name: "BtnIcon",
  __ssrInlineRender: true,
  props: {
    class: null,
    text: null
  },
  setup(__props) {
    const isHovered = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inline-block p-1" }, _attrs))}><div class="inline-block hover:text-orange-700 flex items-center"><div class="flex items-center"><div><button class="${ssrRenderClass([{ "stroke-orange-700": isHovered.value }, "stroke-secondary hover:stroke-orange-700 flex items-center"])}"><div class="${ssrRenderClass([{
        "bg-orange-100": isHovered.value,
        "text-secondary": !isHovered.value
      }, "inline-block hover:text-orange-700 hover:bg-orange-100 rounded-full p-1 duration-0"])}"><div class="${ssrRenderClass(__props.class)}">`);
      ssrRenderSlot(_ctx.$slots, "default", { class: __props.class }, null, _push, _parent);
      _push(`</div></div><span class="ms-1">${ssrInterpolate(__props.text)}</span></button></div></div></div></div>`);
    };
  }
};
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/BtnIcon.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const _sfc_main$r = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path fill-rule="evenodd" fill="currentColor" stroke-width="0%" clip-rule="evenodd" d="M4.99956 10C4.99956 6.13401 8.13357 3 11.9996 3C15.8656 3 18.9996 6.13401 18.9996 10V13.7639L20.5322 16.8292C21.0309 17.8265 20.3056 19 19.1905 19H14.9996C14.9996 20.6569 13.6564 22 11.9996 22C10.3427 22 8.99956 20.6569 8.99956 19H4.80858C3.6935 19 2.96826 17.8265 3.46694 16.8292L4.99956 13.7639V10ZM10.9996 19C10.9996 19.5523 11.4473 20 11.9996 20C12.5518 20 12.9996 19.5523 12.9996 19H10.9996ZM11.9996 5C9.23813 5 6.99956 7.23858 6.99956 10V14C6.99956 14.1552 6.96341 14.3084 6.89399 14.4472L5.61759 17H18.3815L17.1051 14.4472C17.0357 14.3084 16.9996 14.1552 16.9996 14V10C16.9996 7.23858 14.761 5 11.9996 5Z"></path></svg>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconBell.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const IconBell = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$q = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    class: "icon icon-tabler icon-tabler-loader-2",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, _attrs))}><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3a9 9 0 1 0 9 9"></path></svg>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconLoader.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const IconLoader = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$p = {
  __name: "AnimationLoader",
  __ssrInlineRender: true,
  props: {
    color: {
      type: String,
      default: "text-kp"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(IconLoader, mergeProps({
        class: ["animate-spin", __props.color]
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Animations/AnimationLoader.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 16 16",
    fill: "currentColor"
  }, _attrs))}><circle cx="8" cy="8" r="8" fill="none"></circle><circle cx="8" cy="8" r="8" fill="white" fill-opacity="0.2"></circle><circle cx="8" cy="8" r="8" fill="black" fill-opacity="0.06"></circle><path d="M4 7.88437C4 9.95866 5.91912 11.2687 7.88444 11.2687C8.44592 11.2687 9.06476 11.2401 9.54887 11.0504C9.75407 10.97 10.0057 10.9814 10.2147 11.0504L11.5463 11.4871C11.7754 11.5627 12.0563 11.2918 11.9902 11.0504L11.5463 9.74031C11.4853 9.51783 11.4677 9.21612 11.5463 8.99977C11.6766 8.64133 11.7682 8.43023 11.7682 7.88437C11.7682 5.81008 9.84977 4.5 7.88444 4.5C5.91912 4.5 4 5.81008 4 7.88437Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconCommentsFilled.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const IconCommentsFilled = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$n = {
  props: {
    size: {
      default: 4
    },
    firstColor: {
      default: "primary2"
    },
    secondColor: {
      default: "white"
    }
  },
  computed: {
    sizeClass() {
      return `w-${this.size} h-${this.size}`;
    },
    firstColorClass() {
      return `bg-${this.firstColor}`;
    },
    secondColorClass() {
      return `fill-${this.secondColor}  text-${this.secondColor}`;
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["p-[0.2] rounded-full", [$options.sizeClass, $options.firstColorClass, $options.secondColorClass]]
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", { class: $options.secondColorClass }, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/CircledIcon.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const CircledIcon = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$m = {
  props: {
    notification: null,
    iconFirstColor: null,
    iconSecondColor: null,
    hasIcon: {
      required: false,
      default: true
    }
  },
  components: { UserTablet, CircledIcon }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UserTablet = resolveComponent("UserTablet");
  const _component_Link = resolveComponent("Link");
  const _component_CircledIcon = resolveComponent("CircledIcon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_UserTablet, {
    user: $props.notification.data.byUser
  }, createSlots({
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="font-medium"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: _ctx.route("profile", [$props.notification.data.byUser.id])
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate($props.notification.data.byUser.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString($props.notification.data.byUser.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</span><span class="text-black font-medium text-sm"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push2, _parent2, _scopeId);
        _push2(`</span>`);
      } else {
        return [
          createVNode("span", { class: "font-medium" }, [
            createVNode(_component_Link, {
              href: _ctx.route("profile", [$props.notification.data.byUser.id])
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($props.notification.data.byUser.name), 1)
              ]),
              _: 1
            }, 8, ["href"])
          ]),
          createVNode("span", { class: "text-black font-medium text-sm" }, [
            renderSlot(_ctx.$slots, "header")
          ])
        ];
      }
    }),
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="text-sm font-regular"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
        _push2(`</p><p class="text-xs opacity-80"${_scopeId}>${ssrInterpolate($props.notification.created_at)}</p>`);
      } else {
        return [
          createVNode("p", { class: "text-sm font-regular" }, [
            renderSlot(_ctx.$slots, "content")
          ]),
          createVNode("p", { class: "text-xs opacity-80" }, toDisplayString($props.notification.created_at), 1)
        ];
      }
    }),
    _: 2
  }, [
    $props.hasIcon ? {
      name: "icon",
      fn: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_CircledIcon, {
            firstColor: $props.iconFirstColor,
            secondColor: $props.iconSecondColor,
            size: "5"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push3, _parent3, _scopeId2);
              } else {
                return [
                  renderSlot(_ctx.$slots, "icon")
                ];
              }
            }),
            _: 3
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_CircledIcon, {
              firstColor: $props.iconFirstColor,
              secondColor: $props.iconSecondColor,
              size: "5"
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "icon")
              ]),
              _: 3
            }, 8, ["firstColor", "secondColor"])
          ];
        }
      }),
      key: "0"
    } : void 0
  ]), _parent));
  _push(`</div>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Notifications/NotificationTemplate.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const NotificationTemplate = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$l = {
  __name: "PostWasCommentedNotification",
  __ssrInlineRender: true,
  props: {
    notification: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-2 px-3" }, _attrs))}><main class="text-start">`);
      _push(ssrRenderComponent(NotificationTemplate, { notification: __props.notification }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Прокомментировал вашу подборку ${ssrInterpolate(__props.notification.data.post.title)}`);
          } else {
            return [
              createTextVNode(" Прокомментировал вашу подборку " + toDisplayString(__props.notification.data.post.title), 1)
            ];
          }
        }),
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(IconCommentsFilled, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(IconCommentsFilled)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Notifications/PostWasCommentedNotification.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = {
  __name: "ReplyNotification",
  __ssrInlineRender: true,
  props: {
    notification: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-2 px-3" }, _attrs))}><main class="text-start">`);
      _push(ssrRenderComponent(NotificationTemplate, { notification: __props.notification }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("comment.redirect", [__props.notification.data.id])
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Ответил на ваш комментарий ${ssrInterpolate(__props.notification.data.parrentComment.text)}`);
                } else {
                  return [
                    createTextVNode(" Ответил на ваш комментарий " + toDisplayString(__props.notification.data.parrentComment.text), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Link, {
                href: _ctx.route("comment.redirect", [__props.notification.data.id])
              }, {
                default: withCtx(() => [
                  createTextVNode(" Ответил на ваш комментарий " + toDisplayString(__props.notification.data.parrentComment.text), 1)
                ]),
                _: 1
              }, 8, ["href"])
            ];
          }
        }),
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(IconCommentsFilled, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(IconCommentsFilled)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Notifications/ReplyNotification.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 16 16",
    fill: "none",
    id: "like_filled"
  }, _attrs))}><circle cx="8" cy="8" r="8" fill="url(#like_filled_paint0_linear_1091_30839)"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M7.68071 11.4163C7.72371 11.4352 7.76818 11.4531 7.81109 11.467C7.84227 11.4771 7.91544 11.5 7.99998 11.5C8.08452 11.5 8.1577 11.4771 8.18887 11.467C8.23178 11.4531 8.27625 11.4352 8.31925 11.4163C8.40602 11.3783 8.50991 11.3258 8.62435 11.2628C8.85442 11.1362 9.14621 10.9568 9.46151 10.7383C10.0885 10.3039 10.8346 9.69723 11.3758 9.02234C11.963 8.29003 12.1311 7.2739 11.9004 6.43507C11.6661 5.58254 10.9845 4.83331 9.83277 4.83331C9.13838 4.83331 8.65971 5.08842 8.32571 5.27776C8.22502 5.33483 8.13721 5.39955 8.06674 5.4515C8.04235 5.46947 8.02004 5.48591 7.99999 5.49998C7.97994 5.48591 7.95763 5.46946 7.93324 5.45149C7.86277 5.39955 7.77497 5.33483 7.6743 5.27776C7.34031 5.08842 6.86164 4.83331 6.16723 4.83331C5.01547 4.83331 4.33393 5.58254 4.09955 6.43507C3.86894 7.2739 4.03702 8.29003 4.62421 9.02234C5.16536 9.69723 5.91152 10.3039 6.53847 10.7383C6.85377 10.9568 7.14555 11.1362 7.37561 11.2628C7.49005 11.3258 7.59394 11.3783 7.68071 11.4163Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.68071 11.4163C7.72371 11.4352 7.76818 11.4531 7.81109 11.467C7.84227 11.4771 7.91544 11.5 7.99998 11.5C8.08452 11.5 8.1577 11.4771 8.18887 11.467C8.23178 11.4531 8.27625 11.4352 8.31925 11.4163C8.40602 11.3783 8.50991 11.3258 8.62435 11.2628C8.85442 11.1362 9.14621 10.9568 9.46151 10.7383C10.0885 10.3039 10.8346 9.69723 11.3758 9.02234C11.963 8.29003 12.1311 7.2739 11.9004 6.43507C11.6661 5.58254 10.9845 4.83331 9.83277 4.83331C9.13838 4.83331 8.65971 5.08842 8.32571 5.27776C8.22502 5.33483 8.13721 5.39955 8.06674 5.4515C8.04235 5.46947 8.02004 5.48591 7.99999 5.49998C7.97994 5.48591 7.95763 5.46946 7.93324 5.45149C7.86277 5.39955 7.77497 5.33483 7.6743 5.27776C7.34031 5.08842 6.86164 4.83331 6.16723 4.83331C5.01547 4.83331 4.33393 5.58254 4.09955 6.43507C3.86894 7.2739 4.03702 8.29003 4.62421 9.02234C5.16536 9.69723 5.91152 10.3039 6.53847 10.7383C6.85377 10.9568 7.14555 11.1362 7.37561 11.2628C7.49005 11.3258 7.59394 11.3783 7.68071 11.4163Z" fill="white" fill-opacity="0.5"></path><defs><linearGradient id="like_filled_paint0_linear_1091_30839" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="#FF8080"></stop><stop offset="1" stop-color="#D21313"></stop><stop offset="1" stop-color="#FF6D6D"></stop></linearGradient></defs></svg>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconHeartFilled.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const IconHeartFilled = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$i = {
  __name: "PostUpNotification",
  __ssrInlineRender: true,
  props: {
    notification: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-2 px-3" }, _attrs))}><main class="text-start">`);
      _push(ssrRenderComponent(NotificationTemplate, {
        notification: __props.notification,
        iconFirstColor: "red-500"
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Оценил вашу подборку `);
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("post.redirect", [__props.notification.data.post.id])
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.notification.data.post.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.notification.data.post.title), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Оценил вашу подборку "),
              createVNode(_component_Link, {
                href: _ctx.route("post.redirect", [__props.notification.data.post.id])
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.notification.data.post.title), 1)
                ]),
                _: 1
              }, 8, ["href"])
            ];
          }
        }),
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(IconHeartFilled, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(IconHeartFilled)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Notifications/PostUpNotification.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, _attrs))}><path d="M3.22405 8.10396C3.7514 6.18576 5.28486 4.5 7.87632 4.5C9.43873 4.5 10.5157 5.07398 11.2672 5.5C11.5721 5.67285 11.8245 5.87686 12 6C12.1755 5.87686 12.428 5.67286 12.7329 5.5C13.4844 5.07399 14.5614 4.5 16.1238 4.5C18.7152 4.5 20.2487 6.18576 20.7761 8.10395C21.2949 9.99132 20.8212 12.3523 19.5 14C18.2825 15.5185 16.6991 16.8089 15.2884 17.7863C14.579 18.2778 13.9225 18.6816 13.4048 18.9664C12.9861 19.1968 12.4931 19.5 12 19.5C11.4996 19.5 11.017 19.1985 10.5952 18.9664C10.0775 18.6816 9.42103 18.2778 8.71161 17.7863C7.30097 16.8089 5.71758 15.5185 4.5 14C3.17881 12.3523 2.70517 9.99132 3.22405 8.10396Z" stroke-width="0%" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconHeart.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const IconHeart = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$g = {
  __name: "CommentUpNotification",
  __ssrInlineRender: true,
  props: {
    notification: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-2 px-3" }, _attrs))}><main class="text-start">`);
      _push(ssrRenderComponent(NotificationTemplate, {
        notification: __props.notification,
        iconFirstColor: "red-500"
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Link, {
              href: _ctx.route("comment.redirect", [
                __props.notification.data.comment.id
              ])
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Оценил ваш комментарий ${ssrInterpolate(__props.notification.data.comment.text)}`);
                } else {
                  return [
                    createTextVNode(" Оценил ваш комментарий " + toDisplayString(__props.notification.data.comment.text), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Link, {
                href: _ctx.route("comment.redirect", [
                  __props.notification.data.comment.id
                ])
              }, {
                default: withCtx(() => [
                  createTextVNode(" Оценил ваш комментарий " + toDisplayString(__props.notification.data.comment.text), 1)
                ]),
                _: 1
              }, 8, ["href"])
            ];
          }
        }),
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(IconHeartFilled, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(IconHeartFilled)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Notifications/CommentUpNotification.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  __name: "DropdownNotifications",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const notificationsList = {
      "App\\Notifications\\PostWasCommentedNotification": _sfc_main$l,
      "App\\Notifications\\ReplyNotification": _sfc_main$k,
      "App\\Notifications\\PostUpNotification": _sfc_main$i,
      "App\\Notifications\\CommentUpNotification": _sfc_main$g
    };
    const unreadNotificationsCount = ref(
      page.props.auth.user.unreadNotifications_count ?? 0
    );
    const notifications = ref([]);
    const notificationsIsLoaded = ref(false);
    const notificationsHaveBeenRead = ref(false);
    const open = async () => {
      if (!notificationsHaveBeenRead.value) {
        await LoadNotifications((res) => notifications.value = res.data);
        notificationsIsLoaded.value = true;
        await markNotificationsAsRead(
          (res) => notificationsHaveBeenRead.value = true
        );
        unreadNotificationsCount.value = 0;
      }
    };
    const updateNotifications = (data) => {
      console.log(data);
      unreadNotificationsCount.value = data.unreadNotifications_count;
      notificationsHaveBeenRead.value = false;
    };
    onMounted(() => {
      listenNotifications(page.props.auth.user.id, updateNotifications);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      if (_ctx.$page.props.auth.user) {
        _push(ssrRenderComponent(_sfc_main$M, mergeProps({ width: "350" }, _attrs), createSlots({
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b, _c, _d;
            if (_push2) {
              _push2(`<p class="text-start font-medium p-5 py-2"${_scopeId}>Уведомления</p>`);
              if ((_a = notifications.value) == null ? void 0 : _a.length) {
                _push2(`<div${_scopeId}><!--[-->`);
                ssrRenderList(notifications.value, (notification, key) => {
                  _push2(`<div${_scopeId}>`);
                  ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(notificationsList[notification.type]), { notification }, null), _parent2, _scopeId);
                  _push2(`</div>`);
                });
                _push2(`<!--]-->`);
                if (notifications.value.length >= 5) {
                  _push2(`<div${_scopeId}><hr${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_Link, {
                    href: _ctx.route("notifications")
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<button class="p-[5px] text-dtfpr"${_scopeId2}> Все уведомления </button>`);
                      } else {
                        return [
                          createVNode("button", { class: "p-[5px] text-dtfpr" }, " Все уведомления ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (((_b = notifications.value) == null ? void 0 : _b.length) == 0 && notificationsIsLoaded.value) {
                _push2(`<div class="p-5"${_scopeId}><p class="text-xl font-medium"${_scopeId}>Уведомлений пока нет</p><p class="text-secondary mt-5"${_scopeId}> Делайте хорошие подборки и пишите комментарии, и здесь станет не так пусто! </p></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (!notificationsIsLoaded.value) {
                _push2(`<div class="p-5"${_scopeId}><div class="flex justify-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$p, null, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("p", { class: "text-start font-medium p-5 py-2" }, "Уведомления"),
                ((_c = notifications.value) == null ? void 0 : _c.length) ? (openBlock(), createBlock("div", { key: 0 }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(notifications.value, (notification, key) => {
                    return openBlock(), createBlock("div", null, [
                      (openBlock(), createBlock(resolveDynamicComponent(notificationsList[notification.type]), { notification }, null, 8, ["notification"]))
                    ]);
                  }), 256)),
                  notifications.value.length >= 5 ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode("hr"),
                    createVNode(_component_Link, {
                      href: _ctx.route("notifications")
                    }, {
                      default: withCtx(() => [
                        createVNode("button", { class: "p-[5px] text-dtfpr" }, " Все уведомления ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                ((_d = notifications.value) == null ? void 0 : _d.length) == 0 && notificationsIsLoaded.value ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "p-5"
                }, [
                  createVNode("p", { class: "text-xl font-medium" }, "Уведомлений пока нет"),
                  createVNode("p", { class: "text-secondary mt-5" }, " Делайте хорошие подборки и пишите комментарии, и здесь станет не так пусто! ")
                ])) : createCommentVNode("", true),
                !notificationsIsLoaded.value ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "p-5"
                }, [
                  createVNode("div", { class: "flex justify-center" }, [
                    createVNode(_sfc_main$p)
                  ])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, [
          !unreadNotificationsCount.value ? {
            name: "trigger",
            fn: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="px-3"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$s, { class: "flex items-center text-black" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(IconBell, { class: "w-[28px] h-[28px] stroke-[2px]" }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(IconBell, { class: "w-[28px] h-[28px] stroke-[2px]" })
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", {
                    class: "px-3",
                    onClick: ($event) => open()
                  }, [
                    createVNode(_sfc_main$s, { class: "flex items-center text-black" }, {
                      default: withCtx(() => [
                        createVNode(IconBell, { class: "w-[28px] h-[28px] stroke-[2px]" })
                      ]),
                      _: 1
                    })
                  ], 8, ["onClick"])
                ];
              }
            }),
            key: "0"
          } : {
            name: "trigger",
            fn: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="px-3"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$s, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex items-center text-black"${_scopeId2}>`);
                      _push3(ssrRenderComponent(IconBell, { class: "w-[28px] h-[28px] stroke-[2px]" }, null, _parent3, _scopeId2));
                      _push3(`<span class="absolute ms-3 mt-3 px-[5px] text-xs rounded-full bg-red-500 text-white"${_scopeId2}>${ssrInterpolate(unreadNotificationsCount.value)}</span></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex items-center text-black" }, [
                          createVNode(IconBell, { class: "w-[28px] h-[28px] stroke-[2px]" }),
                          createVNode("span", { class: "absolute ms-3 mt-3 px-[5px] text-xs rounded-full bg-red-500 text-white" }, toDisplayString(unreadNotificationsCount.value), 1)
                        ])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", {
                    onClick: ($event) => open(),
                    class: "px-3"
                  }, [
                    createVNode(_sfc_main$s, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center text-black" }, [
                          createVNode(IconBell, { class: "w-[28px] h-[28px] stroke-[2px]" }),
                          createVNode("span", { class: "absolute ms-3 mt-3 px-[5px] text-xs rounded-full bg-red-500 text-white" }, toDisplayString(unreadNotificationsCount.value), 1)
                        ])
                      ]),
                      _: 1
                    })
                  ], 8, ["onClick"])
                ];
              }
            }),
            key: "1"
          }
        ]), _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdowns/DropdownNotifications.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "Search",
  __ssrInlineRender: true,
  props: {
    class: null,
    bgInputColor: {
      default: "bg-kpnpale"
    }
  },
  setup(__props) {
    const { throttle } = pkg;
    const search = ref(null);
    const posts = ref(null);
    const showResultsBlock = ref(false);
    const users = ref(null);
    const loadResult = (query) => {
      axios.get(route("search.query", [query])).then((res) => {
        var _a, _b;
        posts.value = res.data.posts;
        users.value = res.data.users;
        if (((_a = res.data.posts) == null ? void 0 : _a.length) === 0 && ((_b = res.data.users) == null ? void 0 : _b.length) === 0) {
          posts.value = null;
          users.value = null;
        }
      });
    };
    watch(search, throttle((newValue, oldValue) => {
      if (newValue == "") {
        posts.value = null;
        users.value = null;
      }
      loadResult(newValue);
    }, 500));
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Link = resolveComponent("Link");
      _push(`<!--[--><div class="flex items-center w-full mx-auto"><span class="text-sm absolute pl-2">`);
      _push(ssrRenderComponent(IconSearch, { class: "text-slate-600 text-secondary opacity-70 w-5 h-5" }, null, _parent));
      _push(`</span><input${ssrRenderAttr("value", search.value)} list="films" type="text" placeholder="Поиск" class="${ssrRenderClass([__props.bgInputColor, "appearance-none w-full border-[0.2px] border-opacity-0 font-regular ps-10 border-orange-300 hover:border-opacity-100 rounded-xl outline-orange-500 outline-0 hover:ring-[2px] ring-opacity-[10] hover:ring-orange-300 hover:ring-opacity-50 text-md duration-300 text-slate-900 hover:bg-white focus:ring-kpnpale focus:ring-opacity-[10] focus:bg-white focus:border-orange-500"])}"></div><div style="${ssrRenderStyle((((_a = posts.value) == null ? void 0 : _a.length) || ((_b = users.value) == null ? void 0 : _b.length)) && showResultsBlock.value ? null : { display: "none" })}" class="w-full p-0"><div class="relative max-w-full"><div class="absolute w-full z-[20]"><div class="bg-white shadow-sm px-5 py-5 rounded-xl mt-2"><div class="space-y-2"><!--[-->`);
      ssrRenderList(posts.value, (post) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_Link, {
          href: _ctx.route("post", [post.id, post.slug])
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(post.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(post.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(users.value, (user) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_Link, {
          href: _ctx.route("profile", [user.id])
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center space-x-2"${_scopeId}><div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$C, {
                preview: "/media/" + user.avatar_preview,
                then: _ctx.route("im", [user.avatar, 100]),
                class: "w-10 h-10 rounded-full border-2"
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}>${ssrInterpolate(user.name)}</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center space-x-2" }, [
                  createVNode("div", null, [
                    createVNode(_sfc_main$C, {
                      preview: "/media/" + user.avatar_preview,
                      then: _ctx.route("im", [user.avatar, 100]),
                      class: "w-10 h-10 rounded-full border-2"
                    }, null, 8, ["preview", "then"])
                  ]),
                  createVNode("div", null, toDisplayString(user.name), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="w-screen h-screen inset-0 absolute z-0" style="${ssrRenderStyle(showResultsBlock.value ? null : { display: "none" })}"></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Search/Search.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const HeaderLayout_vue_vue_type_style_index_0_scoped_b7bbc176_lang = "";
const _sfc_main$d = {
  __name: "HeaderLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const callModal = inject("callModal");
    const page = usePage();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      ssrRenderList(2, (i) => {
        _push(`<div data-v-b7bbc176><div class="${ssrRenderClass([
          i == 1 ? "fixed w-full z-[48] border-b-4 border-kpnpale" : "block",
          "bg-kppale"
        ])}" id="header" data-v-b7bbc176><div class="max-w-7xl mx-auto px-5 py-1" data-v-b7bbc176><div class="grid grid-layout gap-4 items-center" data-v-b7bbc176><section class="flex items-center" data-v-b7bbc176><div data-v-b7bbc176>`);
        _push(ssrRenderComponent(_component_Link, {
          href: _ctx.route("home"),
          "preserve-state": "",
          only: []
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(ApplicationLogo, {
                class: "inline-block rounded hover:opacity-70 opacity-90",
                size: "200x200",
                style: { "max-width": "130px" }
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(ApplicationLogo, {
                  class: "inline-block rounded hover:opacity-70 opacity-90",
                  size: "200x200",
                  style: { "max-width": "130px" }
                })
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></section><section class="ms-3 hidden lg:block" data-v-b7bbc176><div class="w-[640px] mx-auto" data-v-b7bbc176>`);
        _push(ssrRenderComponent(_sfc_main$e, { class: "relative" }, null, _parent));
        _push(`</div></section><section class="flex items-center hidden lg:block" data-v-b7bbc176>`);
        if (!unref(page).props.auth.check) {
          _push(`<div class="w-full flex justify-end" data-v-b7bbc176>`);
          _push(ssrRenderComponent(PrimaryButtonWhite, {
            onClick: ($event) => unref(callModal)("Auth")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Войти `);
              } else {
                return [
                  createTextVNode(" Войти ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<div class="w-full flex justify-end items-center" data-v-b7bbc176><div class="inline-block me-2" data-v-b7bbc176>`);
          if (unref(page).props.auth.check) {
            _push(ssrRenderComponent(_sfc_main$f, null, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          _push(ssrRenderComponent(_sfc_main$M, { width: "300" }, {
            trigger: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-center cursor-pointer" data-v-b7bbc176${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$C, {
                  preview: "/media/" + unref(page).props.auth.user.avatar_preview,
                  then: _ctx.route("im", [
                    unref(page).props.auth.user.avatar,
                    100
                  ]),
                  class: "w-[40px] h-[40px] rounded-full hover:brightness-[1.2] border-secondary border-1"
                }, null, _parent2, _scopeId));
                _push2(`<div class="ms-2" data-v-b7bbc176${_scopeId}>`);
                if (_ctx.$page.props.auth.user) {
                  _push2(`<svg class="ms-0 -mr-0.5 h-4 w-4 inline-block text-slate-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" data-v-b7bbc176${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-v-b7bbc176${_scopeId}></path></svg>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center cursor-pointer" }, [
                    createVNode(_sfc_main$C, {
                      preview: "/media/" + unref(page).props.auth.user.avatar_preview,
                      then: _ctx.route("im", [
                        unref(page).props.auth.user.avatar,
                        100
                      ]),
                      class: "w-[40px] h-[40px] rounded-full hover:brightness-[1.2] border-secondary border-1"
                    }, null, 8, ["preview", "then"]),
                    createVNode("div", { class: "ms-2" }, [
                      _ctx.$page.props.auth.user ? (openBlock(), createBlock("svg", {
                        key: 0,
                        class: "ms-0 -mr-0.5 h-4 w-4 inline-block text-slate-500",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 20 20",
                        fill: "currentColor"
                      }, [
                        createVNode("path", {
                          "fill-rule": "evenodd",
                          d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                          "clip-rule": "evenodd"
                        })
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ];
              }
            }),
            content: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_sfc_main$u, null, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_sfc_main$u)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        }
        _push(`</section></div></div></div></div>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/HeaderLayout.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const HeaderLayout = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-b7bbc176"]]);
const _sfc_main$c = {};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Forms/Auth/EmailVerificationForm.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "SecondaryInput",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        type: __props.type,
        class: "rounded-xl w-full font-medium border-0 bg-gray-100 p-3 px-4 hover:bg-white focus:bg-white border-[1px] border-white hover:border-orange-500 focus:ring-orange-200 focus:border-orange-500 focus:ring-2 ring-2 ring-white hover:ring-orange-200",
        placeholder: __props.placeholder
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, model.value))))}>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Forms/SecondaryInput.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "0%"
  }, _attrs))}><path d="m6.433 14.086-.696 2.599-2.544.054A9.955 9.955 0 0 1 2 11.999a9.95 9.95 0 0 1 1.118-4.598l2.266.415.992 2.252A5.944 5.944 0 0 0 6.057 12c0 .734.132 1.437.376 2.086Z" fill="#FBBB00"></path><path d="M21.826 10.132c.115.605.174 1.23.174 1.868a9.997 9.997 0 0 1-3.74 7.798l-2.853-.146-.403-2.521a5.96 5.96 0 0 0 2.564-3.043H12.22v-3.956h9.605Z" fill="#518EF8"></path><path d="M18.26 19.798A9.958 9.958 0 0 1 12 22a9.998 9.998 0 0 1-8.808-5.26l3.24-2.654a5.946 5.946 0 0 0 8.571 3.045l3.257 2.667Z" fill="#28B446"></path><path d="m18.384 4.302-3.24 2.652a5.948 5.948 0 0 0-8.767 3.114L3.12 7.401a9.998 9.998 0 0 1 8.88-5.4c2.427 0 4.652.863 6.384 2.301Z" fill="#F14336"></path></svg>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconGoogle.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const IconGoogle = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M4.2653 4.2653C3 5.5306 3 7.56707 3 11.64V12.36C3 16.4329 3 18.4694 4.2653 19.7347C5.5306 21 7.56706 21 11.64 21H12.36C16.4329 21 18.4694 21 19.7347 19.7347C21 18.4694 21 16.4329 21 12.36V11.64C21 7.56707 21 5.5306 19.7347 4.2653C18.4694 3 16.4329 3 12.36 3H11.64C7.56706 3 5.5306 3 4.2653 4.2653Z" fill="white"></path><path d="M12.6095 16C8.55576 16 6.09636 13.1823 6 8.5H8.05309C8.1171 11.9395 9.67903 13.397 10.8764 13.6967V8.5H12.8439V11.4683C13.9988 11.3401 15.2076 9.98991 15.614 8.5H17.5505C17.2406 10.3321 15.9246 11.6823 14.9948 12.2392C15.9253 12.6895 17.4225 13.8682 18 16H15.8714C15.4219 14.5749 14.321 13.4712 12.8446 13.3213V16H12.6095Z" fill="#0077FF"></path></svg>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconVkontakte.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const IconVkontakte = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M2.04 12c0-5.523 4.476-10 10-10 5.522 0 10 4.477 10 10s-4.478 10-10 10c-5.524 0-10-4.477-10-10z" fill="#FC3F1D"></path><path d="M13.32 7.666h-.924c-1.694 0-2.585.858-2.585 2.123 0 1.43.616 2.1 1.881 2.959l1.045.704-3.003 4.487H7.49l2.695-4.014c-1.55-1.111-2.42-2.19-2.42-4.015 0-2.288 1.595-3.85 4.62-3.85h3.003v11.868H13.32V7.666z" fill="#fff"></path></svg>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconYandex.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const IconYandex = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$7 = {
  __name: "Auth",
  __ssrInlineRender: true,
  props: {
    show: Boolean
  },
  emits: "close",
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const listenClosedWindowStatus = (event) => {
      if ((event == null ? void 0 : event.data) == "auth.window.closed") {
        router.reload({ preserveState: false });
        emit("close");
      }
    };
    const openAuthWindow = (provider) => {
      window.open(route("oauth.redirect", [provider]), "_blank", "popup");
      window.addEventListener("message", listenClosedWindowStatus);
    };
    onUnmounted(() => {
      window.removeEventListener("message", listenClosedWindowStatus);
    });
    const currentForm = ref("RegisterForm");
    computed(() => {
      return currentForm.value == "LoginForm";
    });
    computed(() => {
      return currentForm.value == "RegisterForm";
    });
    const showModal = ref(props.show);
    ref({});
    return (_ctx, _push, _parent, _attrs) => {
      if (showModal.value) {
        _push(ssrRenderComponent(_sfc_main$N, mergeProps({
          show: __props.show,
          onClose: ($event) => {
            showModal.value = false;
            emit("close");
          }
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="md:px-20 p-5 py-20"${_scopeId}><section class="w-full space-y-10"${_scopeId}><button class="w-full justify-center bg-[rgb(24,_24,_27)] rounded-2xl px-10 py-2 space-x-2 flex items-center"${_scopeId}><span${_scopeId}>`);
              _push2(ssrRenderComponent(IconYandex, { class: "w-7 h-7" }, null, _parent2, _scopeId));
              _push2(`</span><span class="text-white font-semibold"${_scopeId}>Войти с Яндекс ID</span></button><button class="w-full space-x-2 justify-center border-2 bg-[#0077ff] rounded-2xl px-10 py-2 flex items-center"${_scopeId}><span${_scopeId}>`);
              _push2(ssrRenderComponent(IconVkontakte, { class: "w-7 h-7" }, null, _parent2, _scopeId));
              _push2(`</span><span class="text-white font-semibold"${_scopeId}> Войти с VK ID </span></button><button class="w-full space-x-2 justify-center border-2 bg-white rounded-2xl px-10 py-2 flex items-center"${_scopeId}><span${_scopeId}>`);
              _push2(ssrRenderComponent(IconGoogle, { class: "w-7 h-7" }, null, _parent2, _scopeId));
              _push2(`</span><span class="text-black font-semibold"${_scopeId}> Войти с Google </span></button></section></div>`);
            } else {
              return [
                createVNode("div", { class: "md:px-20 p-5 py-20" }, [
                  createVNode("section", { class: "w-full space-y-10" }, [
                    createVNode("button", {
                      class: "w-full justify-center bg-[rgb(24,_24,_27)] rounded-2xl px-10 py-2 space-x-2 flex items-center",
                      onClick: ($event) => openAuthWindow("yandex")
                    }, [
                      createVNode("span", null, [
                        createVNode(IconYandex, { class: "w-7 h-7" })
                      ]),
                      createVNode("span", { class: "text-white font-semibold" }, "Войти с Яндекс ID")
                    ], 8, ["onClick"]),
                    createVNode("button", {
                      onClick: ($event) => openAuthWindow("vkontakte"),
                      class: "w-full space-x-2 justify-center border-2 bg-[#0077ff] rounded-2xl px-10 py-2 flex items-center"
                    }, [
                      createVNode("span", null, [
                        createVNode(IconVkontakte, { class: "w-7 h-7" })
                      ]),
                      createVNode("span", { class: "text-white font-semibold" }, " Войти с VK ID ")
                    ], 8, ["onClick"]),
                    createVNode("button", {
                      onClick: ($event) => openAuthWindow("google"),
                      class: "w-full space-x-2 justify-center border-2 bg-white rounded-2xl px-10 py-2 flex items-center"
                    }, [
                      createVNode("span", null, [
                        createVNode(IconGoogle, { class: "w-7 h-7" })
                      ]),
                      createVNode("span", { class: "text-black font-semibold" }, " Войти с Google ")
                    ], 8, ["onClick"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modals/Auth.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
let callbackFunction = null;
const instance = axios$1.create({
  baseURL: "http://fcbc.site"
});
instance.setCallbackFunction = function(callback) {
  callbackFunction = callback;
};
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    let errorMessage = "Непредвиденная ошибка.";
    if (error.response.status === 400) {
      errorMessage = "Bad request. Please check your request data.";
    } else if (error.response.status === 401) {
      errorMessage = "Unauthorized. Please log in to access this resource.";
    } else if (error.response.status === 403) {
      errorMessage = "Доступ запрещен.";
    } else if (error.response.status === 404) {
      errorMessage = "Ничего не найдено.";
    } else if (error.response.status === 422) {
      errorMessage = "Что-то вы заполнили не так.";
    } else if (error.response.status === 429) {
      errorMessage = "Попробуйте позже.";
    }
    if (callbackFunction) {
      callbackFunction("error", errorMessage);
    }
    return Promise.reject(error);
  }
);
const _sfc_main$6 = {
  __name: "SecondaryContent",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    placeholder: {
      type: String,
      default: "Текст"
    }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    const content = ref(null);
    const defaultValue = ref(null);
    const props = __props;
    const placeholderClass = computed(() => {
      if (model.value == "" || model.value == null)
        return `before:content-['${props.placeholder.replace(" ", "_")}']`;
    });
    onMounted(() => {
      defaultValue.value = model.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        contenteditable: "true",
        ref_key: "content",
        ref: content,
        class: [placeholderClass.value, "rounded-xl before:opacity-60 w-full text-[16px] font-medium border-0 bg-gray-100 p-3 px-4 hover:bg-white focus:bg-white border-[1px] border-white hover:border-orange-500 focus:ring-orange-200 focus:border-orange-500 focus:ring-2 ring-2 ring-white hover:ring-orange-200 focus:outline-0"]
      }, _attrs))}>${defaultValue.value}</div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Forms/SecondaryContent.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "SearchInput",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    placeholder: {
      type: String,
      default: ""
    }
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["focus", "focusout"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const model = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, _attrs))}><span class="text-sm absolute pl-2">`);
      _push(ssrRenderComponent(IconSearch, { class: "w-5 h-5 stroke-2 opacity-70 text-slate-700" }, null, _parent));
      _push(`</span><input${ssrRenderAttr("value", model.value)} type="text"${ssrRenderAttr("placeholder", __props.placeholder)} class="w-full pl-10 rounded-xl w-full text-[16px] font-medium border-0 bg-gray-100 p-3 px-4 hover:bg-white focus:bg-white border-[1px] border-white hover:border-orange-500 focus:ring-orange-200 focus:border-orange-500 focus:ring-2 ring-2 ring-white hover:ring-orange-200"></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Forms/SearchInput.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    class: "icon icon-tabler icon-tabler-photo",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, _attrs))}><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 8h.01"></path><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z"></path><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"></path><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconPhoto.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const IconPhoto = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const Editor_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
  __name: "Editor",
  __ssrInlineRender: true,
  props: {
    show: Boolean
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const { throttle } = pkg;
    const emit = __emit;
    const close = () => {
      emit("close");
      showModal.value = false;
      if (POSTWASLOADED.value && !postIsPublished.value) {
        injectedCallMessage("success", "Подборка сохранена в черновиках.");
      }
    };
    const vFocus = {
      mounted: (el) => el.focus()
    };
    const page = usePage();
    const props = __props;
    const injectedCallMessage = inject("callMessage");
    instance.setCallbackFunction(injectedCallMessage);
    onMounted(() => {
      if (!access.value)
        console.log("Editor Modal: The user cannot create the post.");
      if (postIsCreated.value)
        loadPost();
      console.log(postIsCreated.value);
    });
    const searchInputFocused = ref(false);
    const showModal = ref(props.show);
    const post = ref(null);
    const postIsPublished = computed(() => {
      return post.value && post.value.is_active;
    });
    const postIsLoading = ref(false);
    const postIsCreated = computed({
      get() {
        return url.value.searchParams.has("id");
      },
      set(newValue) {
        return newValue;
      }
    });
    const isUpdating = ref(false);
    watch(post, () => {
      console.log(url.value);
      postIsCreated.value = true;
      if (page.props.auth.user.id != post.value.user.id)
        access.value = false;
      pushState();
      form.title = post.value.title;
      form.description = post.value.description;
      if (post.value.films != void 0) {
        pinnedFilms.value = [...post.value.films];
        form.films = post.value.films;
      } else {
        form.films = [];
      }
    });
    const searchInput = ref(null);
    const searchResult = ref([]);
    const pinnedFilms = ref([]);
    const hoverButtons = ref(null);
    const filepond = ref(null);
    const imageIsLoading = ref(false);
    const isUpdated = ref(false);
    const clickFilePond = () => {
      filepond.value.click();
    };
    const handleFile = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e2) => {
        uploadImage(file, e2.target.result);
      };
      reader.readAsDataURL(file);
    };
    const uploadImage = async (image, base64) => {
      form.image = base64;
      isUpdating.value = true;
      imageIsLoading.value = true;
      if (!post.value) {
        await createPost();
      }
      const formData = new FormData();
      formData.append("id", post.value.id);
      formData.append("image", image);
      instance.post(route("post.upload.image"), formData).catch((res) => {
        console.log(res);
      }).then((res) => {
        if (res.status == 200) {
          imageIsLoading.value = false;
          isUpdating.value = false;
          post.value.image = res.data;
        }
        console.log(res);
      });
    };
    const canPublishClass = computed(() => {
      if (form.films.length > 0 && form.title) {
        return "bg-orange-500";
      }
      return "bg-orange-200";
    });
    watch(searchInput, () => {
      searchResult.value = [];
    });
    const form = reactive({
      title: "",
      description: "",
      image: "",
      films: ""
    });
    const loadPost = () => {
      postIsLoading.value = true;
      instance.get(route("post.get", [url.value.searchParams.get("id")])).catch((res) => {
        console.log(res);
      }).then((res) => {
        if (res.status == 200)
          post.value = res.data;
        console.log(res);
      });
    };
    const POSTWASLOADED = ref(false);
    const url = reactive(
      computed({
        get() {
          return new URL(window.location.href);
        },
        set() {
          return new URL(window.location.href);
        }
      })
    );
    watch(
      () => window.location.href,
      (newValue, oldValue) => {
        console.log("CHANGED!");
        url.value = newValue;
      }
    );
    watch(form, throttle(async () => {
      if (!postIsLoading.value && !isUpdating.value) {
        isUpdating.value = true;
        isUpdated.value = false;
        await savePost();
        isUpdating.value = false;
        isUpdated.value = true;
        setTimeout(() => {
          isUpdated.value = false;
        }, 1e3);
      }
      postIsLoading.value = false;
    }, 1e3));
    const access = computed({
      get() {
        return page.props.auth.can.create_posts;
      },
      set(newValue) {
        return newValue;
      }
    });
    const pushState = () => {
      const url2 = new URL(window.location.href);
      function append(param, value) {
        if (!url2.searchParams.has(param))
          url2.searchParams.append(param, value);
      }
      append("modal", "Editor");
      append("id", post.value.id);
      window.history.pushState(null, null, url2);
      router.visit(url2, {
        method: "get",
        replace: true,
        preserveState: true,
        preserveScroll: true
      });
    };
    const createPost = async () => {
      console.log("creating post");
      isUpdating.value = true;
      await instance.post(route("post.create"), {
        title: form.title,
        description: form.description
      }).catch((res) => {
        console.log(res);
      }).then((res) => {
        POSTWASLOADED.value = true;
        if (res.status == 200) {
          post.value = res.data;
          isUpdating.value = false;
        }
        console.log(res);
      });
    };
    const savePost = async () => {
      if (!postIsCreated.value && !POSTWASLOADED.value) {
        await createPost();
      }
      await instance.post(route("post.update"), {
        _method: "PUT",
        title: form.title,
        description: form.description,
        id: post.value.id,
        films: form.films
      }).catch((res) => {
        console.log(res);
      }).then((res) => {
        if (res.status == 200)
          ;
      });
    };
    const formQuery = () => {
      searchInput.value = parseInt(searchInput.value.replace(/\D/g, "")) || searchInput.value;
    };
    const searchFilm = () => {
      formQuery();
      if (searchInput.value == "")
        return;
      setTimeout(() => {
        instance.get(route("film.search", [`${searchInput.value}`])).catch((res) => {
          console.log(res);
        }).then((res) => {
          console.log(res);
          if (res.status == 200)
            searchResult.value = res.data;
        });
      }, 200);
    };
    const addFilm = async (film) => {
      if (!post.value && !isUpdating.value) {
        await createPost();
      }
      if (!form.films.find((obj) => obj.id == film.id))
        form.films.push(film);
    };
    const removeFilm = (film_id) => {
      const index = form.films.findIndex((obj) => obj.id == film_id);
      form.films.splice(index, 1);
      savePost();
    };
    const changeFilmIndex = (film_id, action) => {
      const index = form.films.findIndex((obj) => obj.id == film_id);
      const film = form.films[index];
      const filmAbove = form.films[index - 1];
      const filmBelow = form.films[index + 1];
      if (index == 0 && action == 0 || index == form.films.length - 1 && action == 1)
        return false;
      if (action == 0) {
        form.films[index - 1] = film;
        form.films[index] = filmAbove;
      } else {
        form.films[index + 1] = film;
        form.films[index] = filmBelow;
      }
      savePost();
    };
    const publish = () => {
      instance.post(route("post.publish"), {
        id: post.value.id
      }).catch((res) => {
        console.log(res);
      }).then((res) => {
        if (res.status == 200) {
          post.value.is_active = true;
          close();
          router.visit(res.data);
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (showModal.value) {
        _push(ssrRenderComponent(_sfc_main$N, mergeProps({
          show: __props.show,
          onClose: ($event) => close()
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="p-5 px-20 pb-0"${_scopeId}>`);
              if (postIsLoading.value) {
                _push2(`<div class="flex justify-center my-10"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$p, null, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (access.value && !postIsLoading.value) {
                _push2(`<div class="bg-white h-full sticky" style="${ssrRenderStyle({ "height": "calc(100vh - 100px)" })}"${_scopeId}>`);
                if (postIsPublished.value) {
                  _push2(`<p class="font-medium"${_scopeId}> Будьте осторожны. Подборка уже опубликована. </p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="overflow-auto h-full noscrollbar pb-20"${_scopeId}><main class="overflow-y-auto px-1"${_scopeId}><div class="my-5 flex relative"${_scopeId}>`);
                if (!imageIsLoading.value && (!post.value || post.value.image == null)) {
                  _push2(`<div${_scopeId}><input type="file" class="hidden" accept="image/*"${_scopeId}><div class="p-1 bg-gray-100 rounded-xl hover:opacity-80"${_scopeId}>`);
                  _push2(ssrRenderComponent(IconPhoto, { class: "w-[80px] h-[80px] stroke-[1.2] cursor-pointer opacity-60" }, null, _parent2, _scopeId));
                  _push2(`</div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (post.value && (post.value.image || form.image)) {
                  _push2(`<div class="inline-block flex justify-end"${_scopeId}><div class="flex text-center justify-center items-center"${_scopeId}>`);
                  if (imageIsLoading.value) {
                    _push2(ssrRenderComponent(_sfc_main$p, { class: "absolute w-10 h-10" }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<img class="rounded-xl cursor-pointer object-cover w-full h-full"${ssrRenderAttr(
                    "src",
                    !imageIsLoading.value ? _ctx.route("im", [
                      post.value.image,
                      "200"
                    ]) : form.image
                  )} alt="" style="${ssrRenderStyle({ "width": "100px", "height": "100px" })}"${_scopeId}></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="my-5"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$b, mergeProps({
                  modelValue: form.title,
                  "onUpdate:modelValue": ($event) => form.title = $event,
                  placeholder: "Название подборки"
                }, ssrGetDirectiveProps(_ctx, vFocus)), null, _parent2, _scopeId));
                _push2(`</div><div${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$6, {
                  modelValue: form.description,
                  "onUpdate:modelValue": ($event) => form.description = $event,
                  placeholder: "Описание подборки"
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="my-5"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$5, {
                  class: "relative",
                  modelValue: searchInput.value,
                  "onUpdate:modelValue": ($event) => searchInput.value = $event,
                  placeholder: "Название фильма или ссылка с кинопоиска",
                  onInput: ($event) => searchFilm(),
                  onFocus: ($event) => searchInputFocused.value = true,
                  onMouseenter: ($event) => searchInputFocused.value = true
                }, null, _parent2, _scopeId));
                _push2(`<section style="${ssrRenderStyle(searchResult.value.length > 0 ? null : { display: "none" })}" class="mt-2 p-2 px-5 bg-white shadow-lg rounded-lg"${_scopeId}><!--[-->`);
                ssrRenderList(searchResult.value, (film) => {
                  _push2(`<button class="font-medium block my-2"${_scopeId}>${ssrInterpolate(film.name_ru ?? film.name_en)}</button>`);
                });
                _push2(`<!--]--></section></div><div class="my-5" style="${ssrRenderStyle(form.films.length > 0 ? null : { display: "none" })}"${_scopeId}><p${_scopeId}>${ssrInterpolate(_ctx.$tc("film", form.films.length))}</p><!--[-->`);
                ssrRenderList(form.films, (film, index) => {
                  _push2(`<div class="flex justify-between items-center my-2"${_scopeId}><button class="font-medium"${_scopeId}>${ssrInterpolate(film.name_ru ?? film.name_en)}</button><div class="flex flex-col items-center"${_scopeId}><button class="${ssrRenderClass([
                    hoverButtons.value != film.id ? "text-white" : "",
                    "p-0 m-0 hover:opacity-60"
                  ])}"${_scopeId}>`);
                  _push2(ssrRenderComponent(IconUp, { class: "w-4 h-4" }, null, _parent2, _scopeId));
                  _push2(`</button><button class="${ssrRenderClass([
                    hoverButtons.value != film.id ? "text-white" : "",
                    "p-0 m-0 hover:opacity-60"
                  ])}"${_scopeId}>`);
                  _push2(ssrRenderComponent(IconDown, { class: "w-4 h-4" }, null, _parent2, _scopeId));
                  _push2(`</button></div></div>`);
                });
                _push2(`<!--]--></div></main></div><footer class="bg-white absolute bottom-0 w-full"${_scopeId}><div class="flex justify-between items-center bg-white"${_scopeId}>`);
                _push2(ssrRenderComponent(PrimaryButton, {
                  class: ["px-4 ms-1 mb-4", canPublishClass.value],
                  onClick: ($event) => publish()
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`Опубликовать`);
                    } else {
                      return [
                        createTextVNode("Опубликовать")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<p style="${ssrRenderStyle(isUpdating.value ? null : { display: "none" })}" class="font-medium"${_scopeId}> Сохранение... </p><div style="${ssrRenderStyle(isUpdated.value && !isUpdating.value ? null : { display: "none" })}" class="font-medium flex items-center"${_scopeId}><span${_scopeId}> Сохранено </span><span${_scopeId}>`);
                _push2(ssrRenderComponent(IconCheck, { class: "w-5 h-5 inline-block" }, null, _parent2, _scopeId));
                _push2(`</span></div></div></footer></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (!access.value) {
                _push2(`<div class="py-20"${_scopeId}> Вы не можете публиковать подборки, так как пока не являетесь частью сообщества. </div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "p-5 px-20 pb-0" }, [
                  postIsLoading.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "flex justify-center my-10"
                  }, [
                    createVNode(_sfc_main$p)
                  ])) : createCommentVNode("", true),
                  access.value && !postIsLoading.value ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "bg-white h-full sticky",
                    style: { "height": "calc(100vh - 100px)" }
                  }, [
                    postIsPublished.value ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "font-medium"
                    }, " Будьте осторожны. Подборка уже опубликована. ")) : createCommentVNode("", true),
                    createVNode("div", { class: "overflow-auto h-full noscrollbar pb-20" }, [
                      createVNode("main", { class: "overflow-y-auto px-1" }, [
                        createVNode("div", { class: "my-5 flex relative" }, [
                          !imageIsLoading.value && (!post.value || post.value.image == null) ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode("input", {
                              type: "file",
                              ref_key: "filepond",
                              ref: filepond,
                              class: "hidden",
                              accept: "image/*",
                              onInput: ($event) => handleFile($event)
                            }, null, 40, ["onInput"]),
                            createVNode("div", {
                              class: "p-1 bg-gray-100 rounded-xl hover:opacity-80",
                              onClick: ($event) => clickFilePond()
                            }, [
                              createVNode(IconPhoto, { class: "w-[80px] h-[80px] stroke-[1.2] cursor-pointer opacity-60" })
                            ], 8, ["onClick"])
                          ])) : createCommentVNode("", true),
                          post.value && (post.value.image || form.image) ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "inline-block flex justify-end"
                          }, [
                            createVNode("div", { class: "flex text-center justify-center items-center" }, [
                              imageIsLoading.value ? (openBlock(), createBlock(_sfc_main$p, {
                                key: 0,
                                class: "absolute w-10 h-10"
                              })) : createCommentVNode("", true),
                              createVNode("img", {
                                onClick: ($event) => {
                                  form.image = null;
                                  imageIsLoading.value = false;
                                  post.value.image = null;
                                },
                                class: "rounded-xl cursor-pointer object-cover w-full h-full",
                                src: !imageIsLoading.value ? _ctx.route("im", [
                                  post.value.image,
                                  "200"
                                ]) : form.image,
                                alt: "",
                                style: { "width": "100px", "height": "100px" }
                              }, null, 8, ["onClick", "src"])
                            ])
                          ])) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "my-5" }, [
                          withDirectives(createVNode(_sfc_main$b, {
                            modelValue: form.title,
                            "onUpdate:modelValue": ($event) => form.title = $event,
                            placeholder: "Название подборки"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                            [vFocus]
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$6, {
                            modelValue: form.description,
                            "onUpdate:modelValue": ($event) => form.description = $event,
                            placeholder: "Описание подборки"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "my-5" }, [
                          createVNode(_sfc_main$5, {
                            class: "relative",
                            modelValue: searchInput.value,
                            "onUpdate:modelValue": ($event) => searchInput.value = $event,
                            placeholder: "Название фильма или ссылка с кинопоиска",
                            onInput: ($event) => searchFilm(),
                            onFocus: ($event) => searchInputFocused.value = true,
                            onMouseenter: ($event) => searchInputFocused.value = true
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput", "onFocus", "onMouseenter"]),
                          withDirectives(createVNode("section", {
                            onMouseleave: ($event) => searchInputFocused.value = false,
                            class: "mt-2 p-2 px-5 bg-white shadow-lg rounded-lg"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(searchResult.value, (film) => {
                              return openBlock(), createBlock("button", {
                                class: "font-medium block my-2",
                                onClick: ($event) => addFilm(film)
                              }, toDisplayString(film.name_ru ?? film.name_en), 9, ["onClick"]);
                            }), 256))
                          ], 40, ["onMouseleave"]), [
                            [
                              vShow,
                              searchResult.value.length > 0
                            ]
                          ])
                        ]),
                        withDirectives(createVNode("div", { class: "my-5" }, [
                          createVNode("p", null, toDisplayString(_ctx.$tc("film", form.films.length)), 1),
                          (openBlock(true), createBlock(Fragment, null, renderList(form.films, (film, index) => {
                            return openBlock(), createBlock("div", {
                              onMouseenter: ($event) => hoverButtons.value = film.id,
                              onMouseleave: ($event) => hoverButtons.value = null,
                              class: "flex justify-between items-center my-2"
                            }, [
                              createVNode("button", {
                                class: "font-medium",
                                onClick: ($event) => removeFilm(film.id)
                              }, toDisplayString(film.name_ru ?? film.name_en), 9, ["onClick"]),
                              createVNode("div", { class: "flex flex-col items-center" }, [
                                createVNode("button", {
                                  class: [
                                    hoverButtons.value != film.id ? "text-white" : "",
                                    "p-0 m-0 hover:opacity-60"
                                  ],
                                  onClick: ($event) => changeFilmIndex(film.id, 0)
                                }, [
                                  createVNode(IconUp, { class: "w-4 h-4" })
                                ], 10, ["onClick"]),
                                createVNode("button", {
                                  class: [
                                    hoverButtons.value != film.id ? "text-white" : "",
                                    "p-0 m-0 hover:opacity-60"
                                  ],
                                  onClick: ($event) => changeFilmIndex(film.id, 1)
                                }, [
                                  createVNode(IconDown, { class: "w-4 h-4" })
                                ], 10, ["onClick"])
                              ])
                            ], 40, ["onMouseenter", "onMouseleave"]);
                          }), 256))
                        ], 512), [
                          [vShow, form.films.length > 0]
                        ])
                      ])
                    ]),
                    createVNode("footer", { class: "bg-white absolute bottom-0 w-full" }, [
                      createVNode("div", { class: "flex justify-between items-center bg-white" }, [
                        createVNode(PrimaryButton, {
                          class: ["px-4 ms-1 mb-4", canPublishClass.value],
                          onClick: ($event) => publish()
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Опубликовать")
                          ]),
                          _: 1
                        }, 8, ["class", "onClick"]),
                        withDirectives(createVNode("p", { class: "font-medium" }, " Сохранение... ", 512), [
                          [vShow, isUpdating.value]
                        ]),
                        withDirectives(createVNode("div", { class: "font-medium flex items-center" }, [
                          createVNode("span", null, " Сохранено "),
                          createVNode("span", null, [
                            createVNode(IconCheck, { class: "w-5 h-5 inline-block" })
                          ])
                        ], 512), [
                          [vShow, isUpdated.value && !isUpdating.value]
                        ])
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  !access.value ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "py-20"
                  }, " Вы не можете публиковать подборки, так как пока не являетесь частью сообщества. ")) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modals/Editor.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "UrlModal",
  __ssrInlineRender: true,
  props: {
    modalIsClosed: Boolean,
    callModal: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const modals = {
      Auth: _sfc_main$7,
      Editor: _sfc_main$3
    };
    const injectedCallModal = inject("callModal");
    const injectedCloseModal = inject("closeModal");
    const page = usePage();
    onMounted(() => {
      console.log(url.value);
      if (calledModalByQuery.value != null) {
        callModalFunc(calledModalByQuery.value);
      }
    });
    watch(
      () => props.callModal,
      (newValue, oldValue) => {
        if (newValue != null)
          callModalFunc(newValue);
      }
    );
    watch(
      () => props.modalIsClosed,
      (newValue, oldValue) => {
        if (newValue == true) {
          console.log("Modal is closed");
          injectedCloseModal();
        }
      }
    );
    const calledModalByQuery = computed(() => {
      const uri = new URL(window.location.href);
      if (uri.searchParams.has("modal")) {
        return uri.searchParams.get("modal");
      }
      return null;
    });
    const url = computed(() => {
      return new URL(window.location.href);
    });
    const showModal = ref(false);
    ref(false);
    const calledModal = ref(null);
    const unsetQuery = () => {
      const uri = new URL(window.location.href);
      uri.searchParams.delete("modal");
      uri.searchParams.delete("id");
      console.log("Unset query:", uri);
      window.history.pushState(null, null, uri);
    };
    const showModalFunc = (modal) => {
      showModal.value = true;
      calledModal.value = modal;
    };
    const callModalFunc = (modal) => {
      console.log("Call modal", modal);
      console.log(url.value);
      if (!page.props.auth.check) {
        showModalFunc("Auth");
      } else {
        showModalFunc(modal);
        injectedCallModal(calledModalByQuery.value);
      }
    };
    const closeModal = () => {
      injectedCloseModal();
      showModal.value = false;
      unsetQuery();
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (showModal.value == true) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(modals[calledModal.value]), {
          show: showModal.value,
          onClose: ($event) => {
            showModal.value = false;
            closeModal();
          }
        }, null), _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modals/UrlModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path fill="currentColor" stroke-width="0%" fill-rule="evenodd" clip-rule="evenodd" d="M7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5ZM12 5C10.6193 5 9.5 6.11929 9.5 7.5C9.5 8.88071 10.6193 10 12 10C13.3807 10 14.5 8.88071 14.5 7.5C14.5 6.11929 13.3807 5 12 5ZM6.42396 14.5525C7.88358 13.5239 9.85038 13 12 13C14.1496 13 16.1164 13.5239 17.576 14.5525C19.0605 15.5987 20 17.1618 20 19.0909C20 19.7115 19.8314 20.4357 19.3441 21.0242C18.8304 21.6444 18.0562 22 17.0909 22H6.90909C5.94384 22 5.16955 21.6444 4.65595 21.0242C4.16862 20.4357 4 19.7115 4 19.0909C4 17.1618 4.93946 15.5987 6.42396 14.5525ZM7.57604 16.1874C6.56054 16.903 6 17.8853 6 19.0909C6 19.3794 6.08138 19.6097 6.19633 19.7486C6.28499 19.8556 6.46525 20 6.90909 20H17.0909C17.5348 20 17.715 19.8556 17.8037 19.7486C17.9186 19.6097 18 19.3794 18 19.0909C18 17.8853 17.4395 16.903 16.424 16.1874C15.3836 15.4542 13.8504 15 12 15C10.1496 15 8.61642 15.4542 7.57604 16.1874Z"></path></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconLogin.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const IconLogin = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const MainLayout_vue_vue_type_style_index_0_scoped_d6bf766a_lang = "";
const _sfc_main = {
  __name: "MainLayout",
  __ssrInlineRender: true,
  props: {
    title: ""
  },
  setup(__props) {
    const page = usePage();
    const modalIsClosed = ref(false);
    const calledModal = ref(null);
    const calledMessage = reactive({
      type: null,
      message: null
    });
    const closeModal = () => {
      console.log();
      calledModal.value = null;
      modalIsClosed.value = true;
      setTimeout(() => {
        modalIsClosed.value = false;
      }, 200);
    };
    const callModal = (name) => {
      calledModal.value = name;
    };
    const callMessage = (type, message) => {
      calledMessage.type = type;
      calledMessage.message = message;
      setTimeout(() => {
        calledMessage.type = null;
        calledMessage.message = null;
      }, 5e3);
    };
    provide("closeModal", closeModal);
    provide("callModal", callModal);
    provide("callMessage", callMessage);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title data-v-d6bf766a${_scopeId}>${ssrInterpolate(__props.title ?? "Подборки")}</title>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(__props.title ?? "Подборки"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-bck min-h-screen" data-v-d6bf766a>`);
      _push(ssrRenderComponent(HeaderLayout, null, null, _parent));
      _push(`<div class="max-w-7xl mx-auto" data-v-d6bf766a><div class="grid grid-template" data-v-d6bf766a>`);
      _push(ssrRenderComponent(_sfc_main$D, { class: "hidden lg:block" }, null, _parent));
      _push(`<div class="mt-2 md:p-5 rounded-xl 2xl:w-11/12 xl:w-11/12 md:w-full min-h-screen mb-10 md:mb-2 mx-auto" data-v-d6bf766a>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$B, { class: "hidden 2xl:block" }, null, _parent));
      _push(`</div></div></div><div class="lg:hidden bg-white bottom-0 w-full mx-auto text-center px-10 md:px-20 py-2 fixed" data-v-d6bf766a><div class="flex justify-between items-center py-1 sticky bottom-0" data-v-d6bf766a>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(IconHome, {
              class: ["w-7 h-7", { "text-orange-600": unref(page).component === "home/index" }]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(IconHome, {
                class: ["w-7 h-7", { "text-orange-600": unref(page).component === "home/index" }]
              }, null, 8, ["class"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("search"),
        class: { "text-orange-600": unref(page).component === "Search" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(IconSearch, { class: "w-7 h-7" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(IconSearch, { class: "w-7 h-7" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$L, {
        href: _ctx.route("notifications"),
        class: { "text-orange-600": unref(page).component === "Auth/Notifications" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(IconBell, { class: "w-7 h-7" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(IconBell, { class: "w-7 h-7" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$L, {
        href: _ctx.route("profile"),
        class: { "text-orange-600": unref(page).component === "Profile/Index" || unref(page).component === "Profile/Comments" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(IconLogin, { class: "w-7 h-7" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(IconLogin, { class: "w-7 h-7" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$I, { message: calledMessage }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        modalIsClosed: modalIsClosed.value,
        callModal: calledModal.value
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/MainLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MainLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d6bf766a"]]);
export {
  IconLogin as I,
  MainLayout as M,
  _sfc_main$g as _,
  _sfc_main$l as a,
  _sfc_main$k as b,
  _sfc_main$i as c,
  IconTooth as d,
  IconBell as e,
  _sfc_main$b as f,
  _sfc_main$6 as g,
  IconCheck as h,
  _sfc_main$C as i,
  instance as j,
  IconPhoto as k,
  IconPencil as l,
  _sfc_main$s as m,
  IconBookmark as n,
  IconHeart as o,
  _sfc_main$e as p,
  _sfc_main$p as q
};
