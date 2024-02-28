import { inject, resolveComponent, unref, mergeProps, withCtx, renderSlot, useSSRContext, ref, watch, computed, createVNode, createTextVNode, onMounted, toDisplayString, openBlock, createBlock, createCommentVNode, onUnmounted, createSlots, resolveDynamicComponent, Fragment, renderList, mergeModels, useModel, reactive, withDirectives, vShow, provide, resolveDirective, withModifiers, vModelText, vModelRadio, nextTick, createSSRApp, h as h$1 } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderTeleport, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrRenderVNode, ssrGetDynamicModelProps, ssrGetDirectiveProps, ssrIncludeBooleanAttr, ssrLooseEqual, ssrLooseContain } from "vue/server-renderer";
import { usePage, Link, router, useForm, Head, createInertiaApp } from "@inertiajs/vue3";
import pkg from "lodash/function.js";
import axios$1 from "axios";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import "vue-lazyload";
const _sfc_main$20 = {
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
const _sfc_setup$20 = _sfc_main$20.setup;
_sfc_main$20.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AuthLink.vue");
  return _sfc_setup$20 ? _sfc_setup$20(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1$ = {};
function _sfc_ssrRender$U(_ctx, _push, _parent, _attrs) {
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
const _sfc_setup$1$ = _sfc_main$1$.setup;
_sfc_main$1$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconCheck.vue");
  return _sfc_setup$1$ ? _sfc_setup$1$(props, ctx) : void 0;
};
const IconCheck = /* @__PURE__ */ _export_sfc(_sfc_main$1$, [["ssrRender", _sfc_ssrRender$U]]);
const _sfc_main$1_ = {};
function _sfc_ssrRender$T(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, _attrs))}><path fill-rule="evenodd" clip-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="#F01"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="#fff" fill-opacity=".2"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="#000" fill-opacity=".06"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.535 9.879a1 1 0 0 0-1.414-1.414L12 10.585l-2.121-2.12a1 1 0 0 0-1.415 1.414l2.121 2.12-2.121 2.122a1 1 0 1 0 1.414 1.415L12 13.414l2.121 2.122a1 1 0 0 0 1.415-1.415L13.414 12l2.12-2.121Z" fill="#fff"></path></svg>`);
}
const _sfc_setup$1_ = _sfc_main$1_.setup;
_sfc_main$1_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconCircleCross.vue");
  return _sfc_setup$1_ ? _sfc_setup$1_(props, ctx) : void 0;
};
const IconCircleCross = /* @__PURE__ */ _export_sfc(_sfc_main$1_, [["ssrRender", _sfc_ssrRender$T]]);
const Message_vue_vue_type_style_index_0_lang$1 = "";
const _sfc_main$1Z = {
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
const _sfc_setup$1Z = _sfc_main$1Z.setup;
_sfc_main$1Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Messages/Message.vue");
  return _sfc_setup$1Z ? _sfc_setup$1Z(props, ctx) : void 0;
};
const _sfc_main$1Y = {};
function _sfc_ssrRender$S(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path fill="currentColor" stroke-width="0%" fill-rule="evenodd" clip-rule="evenodd" d="M12.636 5.23a1 1 0 0 0-1.272 0L5.728 9.871A2 2 0 0 0 5 11.416V18a1 1 0 0 0 1 1h2v-4a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v4h2a1 1 0 0 0 1-1v-6.584a2 2 0 0 0-.728-1.544l-5.636-4.643ZM14 19v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4h4ZM10.093 3.686a3 3 0 0 1 3.814 0l5.636 4.642A4 4 0 0 1 21 11.416V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6.584a4 4 0 0 1 1.457-3.088l5.636-4.642Z"></path></svg>`);
}
const _sfc_setup$1Y = _sfc_main$1Y.setup;
_sfc_main$1Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconHome.vue");
  return _sfc_setup$1Y ? _sfc_setup$1Y(props, ctx) : void 0;
};
const IconHome = /* @__PURE__ */ _export_sfc(_sfc_main$1Y, [["ssrRender", _sfc_ssrRender$S]]);
const _sfc_main$1X = {
  props: {
    primaryColor: null,
    secondaryColor: null,
    textColor: {
      default: "white"
    }
  }
};
function _sfc_ssrRender$R(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: ["p-2 font-semibold rounded-lg duration-200 hover:bg-opacity-90", "bg-" + $props.primaryColor + " text-" + $props.textColor]
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$1X = _sfc_main$1X.setup;
_sfc_main$1X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Buttons/PrimaryButton.vue");
  return _sfc_setup$1X ? _sfc_setup$1X(props, ctx) : void 0;
};
const PrimaryButton = /* @__PURE__ */ _export_sfc(_sfc_main$1X, [["ssrRender", _sfc_ssrRender$R]]);
const _sfc_main$1W = {};
function _sfc_ssrRender$Q(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-width="0%" fill-rule="evenodd" clip-rule="evenodd" d="M4 7C4 4.79086 5.79086 3 8 3H16C18.2091 3 20 4.79086 20 7V19.0454C20 20.6726 18.1247 21.584 16.8452 20.5787L12.5251 17.1844C12.2169 16.9422 11.7831 16.9422 11.4749 17.1844L7.15475 20.5787C5.8753 21.584 4 20.6725 4 19.0454V7ZM8 5C6.89543 5 6 5.89543 6 7V18.9425L10.2392 15.6117C11.2727 14.7997 12.7273 14.7997 13.7608 15.6117L18 18.9425V7C18 5.89543 17.1046 5 16 5H8Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$1W = _sfc_main$1W.setup;
_sfc_main$1W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconBookmark.vue");
  return _sfc_setup$1W ? _sfc_setup$1W(props, ctx) : void 0;
};
const IconBookmark = /* @__PURE__ */ _export_sfc(_sfc_main$1W, [["ssrRender", _sfc_ssrRender$Q]]);
const _sfc_main$1V = {};
function _sfc_ssrRender$P(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path fill="currentColor" stroke-width="0" fill-rule="evenodd" clip-rule="evenodd" d="M12 3.998a8.002 8.002 0 1 0 0 16.004 8.002 8.002 0 0 0 0-16.005ZM2.002 12c0-5.521 4.477-9.998 9.998-9.998 5.521 0 9.997 4.477 9.997 9.998 0 5.521-4.476 9.997-9.997 9.997S2.002 17.521 2.002 12ZM12 6.003c.55 0 .998.447.998.997v4.297l2.837 1.014a.998.998 0 0 1-.67 1.879l-3.5-1.25a.998.998 0 0 1-.662-.94V7c0-.55.446-.997.997-.997Z"></path></svg>`);
}
const _sfc_setup$1V = _sfc_main$1V.setup;
_sfc_main$1V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconClock.vue");
  return _sfc_setup$1V ? _sfc_setup$1V(props, ctx) : void 0;
};
const IconClock = /* @__PURE__ */ _export_sfc(_sfc_main$1V, [["ssrRender", _sfc_ssrRender$P]]);
const _sfc_main$1U = {};
function _sfc_ssrRender$O(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 167 167",
    fill: "currentColor",
    stroke: "currentColor"
  }, _attrs))}><g filter="url(#filter0_d_1_3)"><path d="M82.1717 11.5309C83.5048 10.4613 85.185 9.91981 86.8918 10.0096C88.5987 10.0995 90.2127 10.8144 91.4262 12.018C97.9114 18.4545 104.543 22.9635 111.257 27.3959L112.552 28.2448C118.745 32.3224 125.244 36.5948 130.901 42.252C136.726 48.0618 141.346 54.9654 144.495 62.566C147.643 70.1667 149.26 78.3146 149.25 86.5418C149.26 94.7672 147.644 102.914 144.496 110.513C141.349 118.112 136.731 125.015 130.908 130.825C122.147 139.576 110.989 145.535 98.8428 147.947C86.697 150.36 74.1085 149.118 62.668 144.379C51.2274 139.641 41.4481 131.617 34.5657 121.323C27.6833 111.028 24.0065 98.9249 24 86.5418C24 69.4591 32.0717 54.7143 43.4346 43.3514C44.275 42.5095 45.3172 41.8971 46.4617 41.5726C47.6062 41.2482 48.8148 41.2226 49.972 41.4983C51.1291 41.774 52.1963 42.3418 53.0716 43.1474C53.9469 43.953 54.601 44.9695 54.9715 46.0999C55.6299 47.5458 56.4442 48.9154 57.4 50.1845C58.0263 51.0195 58.7917 51.931 59.7171 52.8843C61.7142 39.3712 67.4965 23.3392 82.1647 11.5379M47.387 59.954C41.3958 67.9352 37.9167 76.9253 37.9167 86.5418C37.916 96.1759 40.7723 105.594 46.1244 113.604C51.4765 121.615 59.0839 127.859 67.9847 131.546C76.8854 135.233 86.6795 136.197 96.1285 134.317C105.577 132.438 114.257 127.798 121.069 120.985L121.076 120.979C125.605 116.463 129.196 111.096 131.644 105.187C134.092 99.2787 135.348 92.9444 135.34 86.5487V86.5418C135.348 80.146 134.092 73.8118 131.644 67.9031C129.196 61.9944 125.605 56.6279 121.076 52.1119H121.062C116.448 47.4916 111.056 43.9359 104.571 39.6565L103.596 39.0163C98.2732 35.5024 92.4143 31.5709 86.4997 26.4287C75.3525 38.1883 72.7083 53.9837 72.7083 65.6667C72.7077 66.8524 72.4041 68.0182 71.8264 69.0536C71.2487 70.0889 70.416 70.9595 69.4073 71.5827C68.3987 72.2059 67.2475 72.561 66.0631 72.6143C64.8786 72.6677 63.7002 72.4175 62.6396 71.8875C55.4865 68.3109 50.6156 63.8854 47.387 59.954Z" stroke-width="0"></path></g></svg>`);
}
const _sfc_setup$1U = _sfc_main$1U.setup;
_sfc_main$1U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconFlame.vue");
  return _sfc_setup$1U ? _sfc_setup$1U(props, ctx) : void 0;
};
const IconFlame = /* @__PURE__ */ _export_sfc(_sfc_main$1U, [["ssrRender", _sfc_ssrRender$O]]);
const _sfc_main$1T = {
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
      _push(ssrRenderComponent(_sfc_main$20, {
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
const _sfc_setup$1T = _sfc_main$1T.setup;
_sfc_main$1T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/AsideLeft.vue");
  return _sfc_setup$1T ? _sfc_setup$1T(props, ctx) : void 0;
};
const _sfc_main$1S = {
  __name: "LazyImage",
  __ssrInlineRender: true,
  props: {
    preview: null,
    then: null,
    class: null,
    style: null
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      if (isLoaded.value == false) {
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
        class: [classes.value, "duration-[200ms] ease-out object-cover"],
        style: __props.style
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup$1S = _sfc_main$1S.setup;
_sfc_main$1S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/LazyImage.vue");
  return _sfc_setup$1S ? _sfc_setup$1S(props, ctx) : void 0;
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
    broadcastChannel.onmessage = (e2) => {
      if (e2.data == "subscription") {
        broadcastChannel.postMessage("stop your subscribtion");
        console.log("Post message to new tab: stop your subscription");
      } else if (e2.data == "stop your subscribtion") {
        echoChannel.stopListening(apiEvent);
        echoChannel.unsubscribe(apiEvent);
        isSubscribed = false;
        console.log("Laravel Echo: disconnected");
      } else {
        broadcastChannel.onmessage = (e3) => {
          console.log("Message from tab", e3.data);
          callback(e3.data);
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
const _sfc_main$1R = {
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
              _push2(ssrRenderComponent(_sfc_main$1S, {
                preview: "/media/" + comment.user.avatar_preview,
                then: _ctx.route("im", [comment.user.avatar, ["50"]]),
                class: "rounded-full inline-block me-2 w-[36px] h-[36px] object-cover border-2",
                style: { "max-width": "36px", "max-height": "36px" }
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$1S, {
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
                _push2(`<div class="text-center mt-2"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$1S, {
                  preview: "/media/" + comment.image_preview,
                  then: _ctx.route("im", [comment.image, 200]),
                  class: "rounded-xl w-2/3 hover:brightness-[1.2]"
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
                  class: "text-center mt-2"
                }, [
                  createVNode(_sfc_main$1S, {
                    preview: "/media/" + comment.image_preview,
                    then: _ctx.route("im", [comment.image, 200]),
                    class: "rounded-xl w-2/3 hover:brightness-[1.2]"
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
const _sfc_setup$1R = _sfc_main$1R.setup;
_sfc_main$1R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/AsideRight.vue");
  return _sfc_setup$1R ? _sfc_setup$1R(props, ctx) : void 0;
};
const _sfc_main$1Q = {
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    align: {
      type: String,
      default: "right"
    },
    width: {
      type: String,
      default: "48"
    },
    contentClasses: {
      type: String,
      default: "py-1 bg-white"
    }
  },
  setup(__props) {
    const props = __props;
    const closeOnEscape = (e2) => {
      if (open.value && e2.key === "Escape") {
        open.value = false;
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    const widthClass = computed(() => {
      return {
        auto: `w-[${props.width}rem]`,
        200: "w-[200px]",
        300: "w-[300px]",
        350: "w-[350px]",
        400: "w-[400px]",
        48: "w-48"
      }[props.width.toString()];
    });
    const alignmentClasses = computed(() => {
      if (props.align === "left") {
        return "origin-top-left left-0";
      } else if (props.align === "right") {
        return "origin-top-right right-0";
      } else {
        return "origin-top";
      }
    });
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="fixed inset-0 z-40"></div><div style="${ssrRenderStyle([
        open.value ? null : { display: "none" },
        { "display": "none" }
      ])}" class="${ssrRenderClass([[widthClass.value, alignmentClasses.value], "absolute z-[100] mt-2 rounded-xl shadow-md"])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-lg px-0 mx-0 text-center ring-1 ring-black ring-opacity-5"])}">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1Q = _sfc_main$1Q.setup;
_sfc_main$1Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown.vue");
  return _sfc_setup$1Q ? _sfc_setup$1Q(props, ctx) : void 0;
};
const _sfc_main$1P = {};
function _sfc_ssrRender$N(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-width="0%" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd" d="M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-8 6a8 8 0 1 1 14.32 4.905l3.387 3.388a1 1 0 0 1-1.414 1.414l-3.387-3.387A8 8 0 0 1 3 11Z"></path></svg>`);
}
const _sfc_setup$1P = _sfc_main$1P.setup;
_sfc_main$1P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconSearch.vue");
  return _sfc_setup$1P ? _sfc_setup$1P(props, ctx) : void 0;
};
const IconSearch = /* @__PURE__ */ _export_sfc(_sfc_main$1P, [["ssrRender", _sfc_ssrRender$N]]);
const _sfc_main$1O = {
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
const _sfc_setup$1O = _sfc_main$1O.setup;
_sfc_main$1O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownLink.vue");
  return _sfc_setup$1O ? _sfc_setup$1O(props, ctx) : void 0;
};
const _sfc_main$1N = {};
function _sfc_ssrRender$M(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-6 h-6"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"></path></svg>`);
}
const _sfc_setup$1N = _sfc_main$1N.setup;
_sfc_main$1N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconExit.vue");
  return _sfc_setup$1N ? _sfc_setup$1N(props, ctx) : void 0;
};
const IconExit = /* @__PURE__ */ _export_sfc(_sfc_main$1N, [["ssrRender", _sfc_ssrRender$M]]);
const _sfc_main$1M = {};
function _sfc_ssrRender$L(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-6 h-6"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"></path></svg>`);
}
const _sfc_setup$1M = _sfc_main$1M.setup;
_sfc_main$1M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconPanel.vue");
  return _sfc_setup$1M ? _sfc_setup$1M(props, ctx) : void 0;
};
const IconPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1M, [["ssrRender", _sfc_ssrRender$L]]);
const _sfc_main$1L = {};
function _sfc_ssrRender$K(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor"
  }, _attrs))}><path stroke-width="0%" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M16.1719 3.58588C16.953 2.80498 18.2192 2.80503 19.0002 3.58603L20.4144 5.00024C21.1954 5.78129 21.1954 7.04762 20.4144 7.82867L18.7172 9.52513L8.39145 19.8509C8.10464 20.1377 7.7374 20.3305 7.33846 20.4038L4.18063 20.9836C3.85729 21.043 3.52543 20.9397 3.29296 20.7072C3.06049 20.4748 2.95711 20.143 3.01643 19.8196L3.59592 16.6614C3.66914 16.2624 3.86198 15.8951 4.14886 15.6082L16.1719 3.58588ZM18.0102 7.40396L19.0002 6.41446L17.586 5.00024L16.596 5.98975L18.0102 7.40396ZM15.1817 7.40381L5.56308 17.0224L5.24522 18.7547L6.97723 18.4367L16.5959 8.81802L15.1817 7.40381Z"></path></svg>`);
}
const _sfc_setup$1L = _sfc_main$1L.setup;
_sfc_main$1L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconPencil.vue");
  return _sfc_setup$1L ? _sfc_setup$1L(props, ctx) : void 0;
};
const IconPencil = /* @__PURE__ */ _export_sfc(_sfc_main$1L, [["ssrRender", _sfc_ssrRender$K]]);
const _sfc_main$1K = {};
function _sfc_ssrRender$J(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor"
  }, _attrs))}><path stroke-width="0%" fill-rule="evenodd" clip-rule="evenodd" d="M11.9967 2C11.1727 2 10.4908 2.17732 9.95758 2.58802C9.43365 2.99155 9.18596 3.52211 9.03159 3.92442L8.85067 4.41522C8.65586 4.95764 8.58261 5.16158 8.24729 5.3335C7.88497 5.51917 7.65157 5.46963 7.11888 5.35642C6.96489 5.32369 6.78589 5.28565 6.57152 5.24644C6.14407 5.16824 5.58079 5.11142 4.96982 5.33053C4.35546 5.55086 3.82936 5.99917 3.35248 6.66212C2.89509 7.29796 2.69252 7.9493 2.75962 8.61881C2.82217 9.2429 3.11046 9.75723 3.35176 10.1373C3.46343 10.3132 3.55969 10.4548 3.64704 10.5833C3.78356 10.7841 3.8983 10.9529 4.01602 11.1704C4.17828 11.4702 4.26034 11.7281 4.26032 12.0002C4.26033 12.2599 4.18046 12.5119 4.01709 12.8122C3.89969 13.0279 3.7871 13.1937 3.65347 13.3906C3.5644 13.5217 3.46598 13.6667 3.35057 13.8493C3.1086 14.2323 2.82179 14.7486 2.75956 15.3735C2.69283 16.0435 2.89399 16.6966 3.35248 17.334C3.82929 17.9968 4.3551 18.4451 4.96894 18.6659C5.57949 18.8855 6.14253 18.8296 6.57016 18.752C6.78484 18.713 6.96409 18.6751 7.11828 18.6426C7.65065 18.5301 7.88442 18.4808 8.24721 18.6667C8.5826 18.8386 8.65584 19.0425 8.85067 19.585C8.90077 19.7245 8.9589 19.8863 9.03159 20.0758C9.18596 20.4781 9.43365 21.0087 9.95758 21.4122C10.4908 21.8229 11.1727 22.0002 11.9967 22.0002C12.8206 22.0002 13.5025 21.8229 14.0357 21.4122C14.5597 21.0087 14.8073 20.4781 14.9617 20.0758C15.0344 19.8863 15.0925 19.7245 15.1426 19.585C15.3375 19.0425 15.4116 18.8389 15.747 18.6669C16.1099 18.4809 16.3436 18.5303 16.876 18.6427C17.0302 18.6753 17.2095 18.7131 17.4242 18.7521C17.8518 18.8297 18.4149 18.8855 19.0254 18.6659C19.6392 18.4451 20.165 17.9968 20.6418 17.334C21.1003 16.6966 21.3014 16.0435 21.2347 15.3735C21.1725 14.7486 20.8857 14.2323 20.6437 13.8493C20.5283 13.6667 20.4299 13.5217 20.3408 13.3905C20.2072 13.1937 20.0946 13.0279 19.9772 12.8122C19.8138 12.5119 19.7339 12.2599 19.734 12.0002C19.7339 11.7281 19.816 11.4702 19.9782 11.1704C20.096 10.9529 20.2107 10.7841 20.3472 10.5833C20.4346 10.4548 20.5308 10.3132 20.6425 10.1373C20.8838 9.75722 21.1721 9.24289 21.2346 8.6188C21.3017 7.94929 21.0992 7.29796 20.6418 6.66212C20.1649 5.99911 19.6387 5.55081 19.0242 5.3305C18.4132 5.11143 17.8499 5.16824 17.4223 5.24642C17.2079 5.28564 17.0288 5.32368 16.8748 5.35641C16.3419 5.46962 16.1084 5.51922 15.7461 5.33354C15.4107 5.16161 15.3375 4.95768 15.1426 4.41522C15.0925 4.27574 15.0344 4.11388 14.9617 3.92442C14.8073 3.52211 14.5597 2.99155 14.0357 2.58802C13.5025 2.17732 12.8206 2 11.9967 2ZM17.5254 16.7275C16.9413 16.5892 15.8979 16.3422 14.8348 16.8871L14.8337 16.8869C13.7191 17.4583 13.3657 18.5402 13.1748 19.1244C13.1448 19.2163 13.1188 19.2959 13.0945 19.3593C12.9817 19.6532 12.8981 19.7639 12.8153 19.8277C12.7419 19.8843 12.5416 20.0002 11.9967 20.0002C11.4517 20.0002 11.2514 19.8843 11.178 19.8277C11.0952 19.7639 11.0116 19.6532 10.8989 19.3593C10.8745 19.2959 10.8485 19.2163 10.8185 19.1244C10.6277 18.5402 10.2743 17.4583 9.15958 16.8869C8.09638 16.342 7.05286 16.5891 6.46877 16.7274C6.36954 16.7509 6.28357 16.7713 6.21301 16.7841C5.91971 16.8373 5.76886 16.8282 5.64587 16.7839C5.52617 16.7409 5.29879 16.6147 4.97606 16.166C4.74607 15.8463 4.74 15.6692 4.74971 15.5717C4.76391 15.4292 4.83719 15.2408 5.04136 14.9176C5.08911 14.842 5.15453 14.7447 5.22878 14.6342C5.39954 14.38 5.61701 14.0563 5.77384 13.7681C6.0311 13.2954 6.26033 12.7088 6.26032 12.0003C6.26034 11.2861 6.03332 10.6959 5.77494 10.2184C5.61452 9.92204 5.3947 9.59575 5.2229 9.34075C5.15094 9.23394 5.08741 9.13964 5.0402 9.06528C4.83535 8.74264 4.76354 8.55792 4.74965 8.41935C4.74032 8.32621 4.74496 8.15128 4.97606 7.83002C5.29871 7.38147 5.52581 7.25586 5.64499 7.21312C5.76756 7.16916 5.91817 7.16011 6.21164 7.21379C6.28211 7.22668 6.36796 7.24714 6.46706 7.27075C7.0512 7.40993 8.09546 7.6587 9.15958 7.11331C10.2743 6.54189 10.6277 5.46004 10.8185 4.8758C10.8485 4.78387 10.8745 4.70427 10.8989 4.64091C11.0116 4.34704 11.0952 4.23628 11.178 4.17252C11.2514 4.11593 11.4517 4 11.9967 4C12.5416 4 12.7419 4.11593 12.8153 4.17252C12.8981 4.23628 12.9817 4.34704 13.0945 4.64091C13.1188 4.70427 13.1448 4.78387 13.1748 4.8758C13.3657 5.46005 13.7191 6.54189 14.8337 7.11331C15.8978 7.65867 16.9422 7.40995 17.5265 7.27077C17.6257 7.24715 17.7116 7.22669 17.7821 7.2138C18.0757 7.16011 18.2265 7.16915 18.3492 7.21315C18.4685 7.25591 18.6956 7.38153 19.0182 7.83002C19.2493 8.15128 19.2539 8.32621 19.2446 8.41935C19.2307 8.55792 19.1589 8.74265 18.9541 9.06528C18.9069 9.13964 18.8433 9.23394 18.7714 9.34074L18.2193 10.2184C17.9609 10.6959 17.7339 11.2861 17.734 12.0003C17.7339 12.7088 17.9632 13.2954 18.2204 13.7681C18.3773 14.0563 18.5947 14.38 18.7655 14.6342C18.8397 14.7447 18.9052 14.842 18.9529 14.9176C19.1571 15.2408 19.2304 15.4292 19.2446 15.5717C19.2543 15.6692 19.2482 15.8463 19.0182 16.166C18.6955 16.6147 18.4681 16.7409 18.3484 16.784C18.2253 16.8282 18.0745 16.8374 17.7812 16.7842C17.7106 16.7714 17.6247 16.751 17.5254 16.7275Z" fill="currentColor"></path><path stroke-width="0%" fill-rule="evenodd" clip-rule="evenodd" d="M11.9996 8C9.79044 8 7.99958 9.79086 7.99958 12C7.99958 14.2091 9.79044 16 11.9996 16C14.2087 16 15.9996 14.2091 15.9996 12C15.9996 9.79086 14.2087 8 11.9996 8ZM11.9996 10C10.895 10 9.99958 10.8954 9.99958 12C9.99958 13.1046 10.895 14 11.9996 14C13.1041 14 13.9996 13.1046 13.9996 12C13.9996 10.8954 13.1041 10 11.9996 10Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$1K = _sfc_main$1K.setup;
_sfc_main$1K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconTooth.vue");
  return _sfc_setup$1K ? _sfc_setup$1K(props, ctx) : void 0;
};
const IconTooth = /* @__PURE__ */ _export_sfc(_sfc_main$1K, [["ssrRender", _sfc_ssrRender$J]]);
const _sfc_main$1J = {
  __name: "HeaderSection",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-15" }, _attrs))}><p class="px-4 font-medium py-2 text-start">Мой профиль</p>`);
      _push(ssrRenderComponent(_sfc_main$1O, {
        href: _ctx.route("profile", [unref(page).props.auth.user.id]),
        class: "my-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$1S, {
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
                createVNode(_sfc_main$1S, {
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
        _push(ssrRenderComponent(_sfc_main$1O, {
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
      _push(ssrRenderComponent(_sfc_main$1O, {
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
      _push(ssrRenderComponent(_sfc_main$1O, {
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
      _push(ssrRenderComponent(_sfc_main$1O, {
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
const _sfc_setup$1J = _sfc_main$1J.setup;
_sfc_main$1J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/HeaderSection.vue");
  return _sfc_setup$1J ? _sfc_setup$1J(props, ctx) : void 0;
};
const _sfc_main$1I = {
  props: {
    size: "1000x1000",
    class: null
  }
};
function _sfc_ssrRender$I(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<img${ssrRenderAttrs(mergeProps({
    src: "/logo.png",
    alt: "",
    class: $props.class
  }, _attrs))}>`);
}
const _sfc_setup$1I = _sfc_main$1I.setup;
_sfc_main$1I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ApplicationLogo.vue");
  return _sfc_setup$1I ? _sfc_setup$1I(props, ctx) : void 0;
};
const ApplicationLogo = /* @__PURE__ */ _export_sfc(_sfc_main$1I, [["ssrRender", _sfc_ssrRender$I]]);
const _sfc_main$1H = {};
function _sfc_ssrRender$H(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "p-2 px-3 bg-white text-black text-lgg shadow rounded-lg font-semibold" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$1H = _sfc_main$1H.setup;
_sfc_main$1H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Buttons/PrimaryButtonWhite.vue");
  return _sfc_setup$1H ? _sfc_setup$1H(props, ctx) : void 0;
};
const PrimaryButtonWhite = /* @__PURE__ */ _export_sfc(_sfc_main$1H, [["ssrRender", _sfc_ssrRender$H]]);
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
const _sfc_main$1G = {
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
const _sfc_setup$1G = _sfc_main$1G.setup;
_sfc_main$1G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/BtnIcon.vue");
  return _sfc_setup$1G ? _sfc_setup$1G(props, ctx) : void 0;
};
const _sfc_main$1F = {};
function _sfc_ssrRender$G(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path fill-rule="evenodd" fill="currentColor" stroke-width="0%" clip-rule="evenodd" d="M4.99956 10C4.99956 6.13401 8.13357 3 11.9996 3C15.8656 3 18.9996 6.13401 18.9996 10V13.7639L20.5322 16.8292C21.0309 17.8265 20.3056 19 19.1905 19H14.9996C14.9996 20.6569 13.6564 22 11.9996 22C10.3427 22 8.99956 20.6569 8.99956 19H4.80858C3.6935 19 2.96826 17.8265 3.46694 16.8292L4.99956 13.7639V10ZM10.9996 19C10.9996 19.5523 11.4473 20 11.9996 20C12.5518 20 12.9996 19.5523 12.9996 19H10.9996ZM11.9996 5C9.23813 5 6.99956 7.23858 6.99956 10V14C6.99956 14.1552 6.96341 14.3084 6.89399 14.4472L5.61759 17H18.3815L17.1051 14.4472C17.0357 14.3084 16.9996 14.1552 16.9996 14V10C16.9996 7.23858 14.761 5 11.9996 5Z"></path></svg>`);
}
const _sfc_setup$1F = _sfc_main$1F.setup;
_sfc_main$1F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconBell.vue");
  return _sfc_setup$1F ? _sfc_setup$1F(props, ctx) : void 0;
};
const IconBell = /* @__PURE__ */ _export_sfc(_sfc_main$1F, [["ssrRender", _sfc_ssrRender$G]]);
const _sfc_main$1E = {};
function _sfc_ssrRender$F(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const _sfc_setup$1E = _sfc_main$1E.setup;
_sfc_main$1E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconLoader.vue");
  return _sfc_setup$1E ? _sfc_setup$1E(props, ctx) : void 0;
};
const IconLoader = /* @__PURE__ */ _export_sfc(_sfc_main$1E, [["ssrRender", _sfc_ssrRender$F]]);
const _sfc_main$1D = {
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
const _sfc_setup$1D = _sfc_main$1D.setup;
_sfc_main$1D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Animations/AnimationLoader.vue");
  return _sfc_setup$1D ? _sfc_setup$1D(props, ctx) : void 0;
};
const _sfc_main$1C = {};
function _sfc_ssrRender$E(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 16 16",
    fill: "currentColor"
  }, _attrs))}><circle cx="8" cy="8" r="8" fill="none"></circle><circle cx="8" cy="8" r="8" fill="white" fill-opacity="0.2"></circle><circle cx="8" cy="8" r="8" fill="black" fill-opacity="0.06"></circle><path d="M4 7.88437C4 9.95866 5.91912 11.2687 7.88444 11.2687C8.44592 11.2687 9.06476 11.2401 9.54887 11.0504C9.75407 10.97 10.0057 10.9814 10.2147 11.0504L11.5463 11.4871C11.7754 11.5627 12.0563 11.2918 11.9902 11.0504L11.5463 9.74031C11.4853 9.51783 11.4677 9.21612 11.5463 8.99977C11.6766 8.64133 11.7682 8.43023 11.7682 7.88437C11.7682 5.81008 9.84977 4.5 7.88444 4.5C5.91912 4.5 4 5.81008 4 7.88437Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$1C = _sfc_main$1C.setup;
_sfc_main$1C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconCommentsFilled.vue");
  return _sfc_setup$1C ? _sfc_setup$1C(props, ctx) : void 0;
};
const IconCommentsFilled = /* @__PURE__ */ _export_sfc(_sfc_main$1C, [["ssrRender", _sfc_ssrRender$E]]);
const _sfc_main$1B = {
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
function _sfc_ssrRender$D(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["p-[0.2] rounded-full", [$options.sizeClass, $options.firstColorClass, $options.secondColorClass]]
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", { class: $options.secondColorClass }, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1B = _sfc_main$1B.setup;
_sfc_main$1B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/CircledIcon.vue");
  return _sfc_setup$1B ? _sfc_setup$1B(props, ctx) : void 0;
};
const CircledIcon = /* @__PURE__ */ _export_sfc(_sfc_main$1B, [["ssrRender", _sfc_ssrRender$D]]);
const _sfc_main$1A = {
  props: {
    avatarOnly: false,
    user: null,
    mode: null
  },
  components: { Link }
};
function _sfc_ssrRender$C(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><header class="grid grid-rows-1 grid-flow-col items-start place-content-start"><div class="flex items-end justify-end"><img class="rounded-full inline-block border-bck border-2"${ssrRenderAttr("src", _ctx.route("im", [$props.user.avatar, "100"]))} style="${ssrRenderStyle({ "width": "40px", "height": "40px" })}" alt=""><div class="absolute">`);
  ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
  _push(`</div></div><div class="flex flex-col ms-2"><div>`);
  ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
  _push(`</div><main>`);
  ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
  _push(`</main></div></header></div>`);
}
const _sfc_setup$1A = _sfc_main$1A.setup;
_sfc_main$1A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UserTablet.vue");
  return _sfc_setup$1A ? _sfc_setup$1A(props, ctx) : void 0;
};
const UserTablet = /* @__PURE__ */ _export_sfc(_sfc_main$1A, [["ssrRender", _sfc_ssrRender$C]]);
const _sfc_main$1z = {
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
function _sfc_ssrRender$B(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const _sfc_setup$1z = _sfc_main$1z.setup;
_sfc_main$1z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Notifications/NotificationTemplate.vue");
  return _sfc_setup$1z ? _sfc_setup$1z(props, ctx) : void 0;
};
const NotificationTemplate = /* @__PURE__ */ _export_sfc(_sfc_main$1z, [["ssrRender", _sfc_ssrRender$B]]);
const _sfc_main$1y = {
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
const _sfc_setup$1y = _sfc_main$1y.setup;
_sfc_main$1y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Notifications/PostWasCommentedNotification.vue");
  return _sfc_setup$1y ? _sfc_setup$1y(props, ctx) : void 0;
};
const _sfc_main$1x = {
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
const _sfc_setup$1x = _sfc_main$1x.setup;
_sfc_main$1x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Notifications/ReplyNotification.vue");
  return _sfc_setup$1x ? _sfc_setup$1x(props, ctx) : void 0;
};
const _sfc_main$1w = {};
function _sfc_ssrRender$A(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 16 16",
    fill: "none",
    id: "like_filled"
  }, _attrs))}><circle cx="8" cy="8" r="8" fill="url(#like_filled_paint0_linear_1091_30839)"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M7.68071 11.4163C7.72371 11.4352 7.76818 11.4531 7.81109 11.467C7.84227 11.4771 7.91544 11.5 7.99998 11.5C8.08452 11.5 8.1577 11.4771 8.18887 11.467C8.23178 11.4531 8.27625 11.4352 8.31925 11.4163C8.40602 11.3783 8.50991 11.3258 8.62435 11.2628C8.85442 11.1362 9.14621 10.9568 9.46151 10.7383C10.0885 10.3039 10.8346 9.69723 11.3758 9.02234C11.963 8.29003 12.1311 7.2739 11.9004 6.43507C11.6661 5.58254 10.9845 4.83331 9.83277 4.83331C9.13838 4.83331 8.65971 5.08842 8.32571 5.27776C8.22502 5.33483 8.13721 5.39955 8.06674 5.4515C8.04235 5.46947 8.02004 5.48591 7.99999 5.49998C7.97994 5.48591 7.95763 5.46946 7.93324 5.45149C7.86277 5.39955 7.77497 5.33483 7.6743 5.27776C7.34031 5.08842 6.86164 4.83331 6.16723 4.83331C5.01547 4.83331 4.33393 5.58254 4.09955 6.43507C3.86894 7.2739 4.03702 8.29003 4.62421 9.02234C5.16536 9.69723 5.91152 10.3039 6.53847 10.7383C6.85377 10.9568 7.14555 11.1362 7.37561 11.2628C7.49005 11.3258 7.59394 11.3783 7.68071 11.4163Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.68071 11.4163C7.72371 11.4352 7.76818 11.4531 7.81109 11.467C7.84227 11.4771 7.91544 11.5 7.99998 11.5C8.08452 11.5 8.1577 11.4771 8.18887 11.467C8.23178 11.4531 8.27625 11.4352 8.31925 11.4163C8.40602 11.3783 8.50991 11.3258 8.62435 11.2628C8.85442 11.1362 9.14621 10.9568 9.46151 10.7383C10.0885 10.3039 10.8346 9.69723 11.3758 9.02234C11.963 8.29003 12.1311 7.2739 11.9004 6.43507C11.6661 5.58254 10.9845 4.83331 9.83277 4.83331C9.13838 4.83331 8.65971 5.08842 8.32571 5.27776C8.22502 5.33483 8.13721 5.39955 8.06674 5.4515C8.04235 5.46947 8.02004 5.48591 7.99999 5.49998C7.97994 5.48591 7.95763 5.46946 7.93324 5.45149C7.86277 5.39955 7.77497 5.33483 7.6743 5.27776C7.34031 5.08842 6.86164 4.83331 6.16723 4.83331C5.01547 4.83331 4.33393 5.58254 4.09955 6.43507C3.86894 7.2739 4.03702 8.29003 4.62421 9.02234C5.16536 9.69723 5.91152 10.3039 6.53847 10.7383C6.85377 10.9568 7.14555 11.1362 7.37561 11.2628C7.49005 11.3258 7.59394 11.3783 7.68071 11.4163Z" fill="white" fill-opacity="0.5"></path><defs><linearGradient id="like_filled_paint0_linear_1091_30839" x1="8" y1="0" x2="8" y2="16" gradientUnits="userSpaceOnUse"><stop stop-color="#FF8080"></stop><stop offset="1" stop-color="#D21313"></stop><stop offset="1" stop-color="#FF6D6D"></stop></linearGradient></defs></svg>`);
}
const _sfc_setup$1w = _sfc_main$1w.setup;
_sfc_main$1w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconHeartFilled.vue");
  return _sfc_setup$1w ? _sfc_setup$1w(props, ctx) : void 0;
};
const IconHeartFilled = /* @__PURE__ */ _export_sfc(_sfc_main$1w, [["ssrRender", _sfc_ssrRender$A]]);
const _sfc_main$1v = {
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
const _sfc_setup$1v = _sfc_main$1v.setup;
_sfc_main$1v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Notifications/PostUpNotification.vue");
  return _sfc_setup$1v ? _sfc_setup$1v(props, ctx) : void 0;
};
const _sfc_main$1u = {};
function _sfc_ssrRender$z(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, _attrs))}><path d="M3.22405 8.10396C3.7514 6.18576 5.28486 4.5 7.87632 4.5C9.43873 4.5 10.5157 5.07398 11.2672 5.5C11.5721 5.67285 11.8245 5.87686 12 6C12.1755 5.87686 12.428 5.67286 12.7329 5.5C13.4844 5.07399 14.5614 4.5 16.1238 4.5C18.7152 4.5 20.2487 6.18576 20.7761 8.10395C21.2949 9.99132 20.8212 12.3523 19.5 14C18.2825 15.5185 16.6991 16.8089 15.2884 17.7863C14.579 18.2778 13.9225 18.6816 13.4048 18.9664C12.9861 19.1968 12.4931 19.5 12 19.5C11.4996 19.5 11.017 19.1985 10.5952 18.9664C10.0775 18.6816 9.42103 18.2778 8.71161 17.7863C7.30097 16.8089 5.71758 15.5185 4.5 14C3.17881 12.3523 2.70517 9.99132 3.22405 8.10396Z" stroke-width="0%" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path></svg>`);
}
const _sfc_setup$1u = _sfc_main$1u.setup;
_sfc_main$1u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconHeart.vue");
  return _sfc_setup$1u ? _sfc_setup$1u(props, ctx) : void 0;
};
const IconHeart = /* @__PURE__ */ _export_sfc(_sfc_main$1u, [["ssrRender", _sfc_ssrRender$z]]);
const _sfc_main$1t = {
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
const _sfc_setup$1t = _sfc_main$1t.setup;
_sfc_main$1t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Notifications/CommentUpNotification.vue");
  return _sfc_setup$1t ? _sfc_setup$1t(props, ctx) : void 0;
};
const _sfc_main$1s = {
  __name: "DropdownNotifications",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const notificationsList = {
      "App\\Notifications\\PostWasCommentedNotification": _sfc_main$1y,
      "App\\Notifications\\ReplyNotification": _sfc_main$1x,
      "App\\Notifications\\PostUpNotification": _sfc_main$1v,
      "App\\Notifications\\CommentUpNotification": _sfc_main$1t
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
        _push(ssrRenderComponent(_sfc_main$1Q, mergeProps({ width: "350" }, _attrs), createSlots({
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
                _push2(ssrRenderComponent(_sfc_main$1D, null, null, _parent2, _scopeId));
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
                    createVNode(_sfc_main$1D)
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
                _push2(ssrRenderComponent(_sfc_main$1G, { class: "flex items-center text-black" }, {
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
                    createVNode(_sfc_main$1G, { class: "flex items-center text-black" }, {
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
                _push2(ssrRenderComponent(_sfc_main$1G, null, {
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
                    createVNode(_sfc_main$1G, null, {
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
const _sfc_setup$1s = _sfc_main$1s.setup;
_sfc_main$1s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdowns/DropdownNotifications.vue");
  return _sfc_setup$1s ? _sfc_setup$1s(props, ctx) : void 0;
};
const _sfc_main$1r = {
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
              _push2(ssrRenderComponent(_sfc_main$1S, {
                preview: "/media/" + user.avatar_preview,
                then: _ctx.route("im", [user.avatar, 100]),
                class: "w-10 h-10 rounded-full border-2"
              }, null, _parent2, _scopeId));
              _push2(`</div><div${_scopeId}>${ssrInterpolate(user.name)}</div></div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center space-x-2" }, [
                  createVNode("div", null, [
                    createVNode(_sfc_main$1S, {
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
const _sfc_setup$1r = _sfc_main$1r.setup;
_sfc_main$1r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Search/Search.vue");
  return _sfc_setup$1r ? _sfc_setup$1r(props, ctx) : void 0;
};
const HeaderLayout_vue_vue_type_style_index_0_scoped_b7bbc176_lang = "";
const _sfc_main$1q = {
  __name: "HeaderLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const callModal = inject("callModal");
    const page = usePage();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      ssrRenderList(2, (i2) => {
        _push(`<div data-v-b7bbc176><div class="${ssrRenderClass([
          i2 == 1 ? "fixed w-full z-[48] border-b-4 border-kpnpale" : "block",
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
        _push(ssrRenderComponent(_sfc_main$1r, { class: "relative" }, null, _parent));
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
            _push(ssrRenderComponent(_sfc_main$1s, null, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          _push(ssrRenderComponent(_sfc_main$1Q, { width: "300" }, {
            trigger: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-center cursor-pointer" data-v-b7bbc176${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$1S, {
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
                    createVNode(_sfc_main$1S, {
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
                _push2(ssrRenderComponent(_sfc_main$1J, null, null, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_sfc_main$1J)
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
const _sfc_setup$1q = _sfc_main$1q.setup;
_sfc_main$1q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Partials/HeaderLayout.vue");
  return _sfc_setup$1q ? _sfc_setup$1q(props, ctx) : void 0;
};
const HeaderLayout = /* @__PURE__ */ _export_sfc(_sfc_main$1q, [["__scopeId", "data-v-b7bbc176"]]);
const _sfc_main$1p = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: "2xl"
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    watch(
      () => props.show,
      () => {
        if (props.show) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = null;
        }
      }
    );
    const closeModal = inject("closeModal");
    const close = () => {
      if (props.closeable) {
        closeModal();
        emit("close");
      }
    };
    const closeOnEscape = (e2) => {
      if (e2.key === "Escape" && props.show) {
        close();
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = null;
    });
    const maxWidthClass = computed(() => {
      return {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "2xl": "sm:max-w-2xl"
      }[props.maxWidth];
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="fixed inset-0 overflow-y-auto xs:px-0 px-4 py-6 z-[49]" scroll-region><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="fixed inset-0 transform transition-all backdrop-blur-md"><div class="absolute inset-0 bg-gray-500 opacity-75"></div></div><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="${ssrRenderClass([maxWidthClass.value, "mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto"])}">`);
        if (__props.show) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$1p = _sfc_main$1p.setup;
_sfc_main$1p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modals/Modal.vue");
  return _sfc_setup$1p ? _sfc_setup$1p(props, ctx) : void 0;
};
const _sfc_main$1o = {};
const _sfc_setup$1o = _sfc_main$1o.setup;
_sfc_main$1o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Forms/Auth/EmailVerificationForm.vue");
  return _sfc_setup$1o ? _sfc_setup$1o(props, ctx) : void 0;
};
const _sfc_main$1n = {
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
const _sfc_setup$1n = _sfc_main$1n.setup;
_sfc_main$1n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Forms/SecondaryInput.vue");
  return _sfc_setup$1n ? _sfc_setup$1n(props, ctx) : void 0;
};
const _sfc_main$1m = {};
function _sfc_ssrRender$y(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "0%"
  }, _attrs))}><path d="m6.433 14.086-.696 2.599-2.544.054A9.955 9.955 0 0 1 2 11.999a9.95 9.95 0 0 1 1.118-4.598l2.266.415.992 2.252A5.944 5.944 0 0 0 6.057 12c0 .734.132 1.437.376 2.086Z" fill="#FBBB00"></path><path d="M21.826 10.132c.115.605.174 1.23.174 1.868a9.997 9.997 0 0 1-3.74 7.798l-2.853-.146-.403-2.521a5.96 5.96 0 0 0 2.564-3.043H12.22v-3.956h9.605Z" fill="#518EF8"></path><path d="M18.26 19.798A9.958 9.958 0 0 1 12 22a9.998 9.998 0 0 1-8.808-5.26l3.24-2.654a5.946 5.946 0 0 0 8.571 3.045l3.257 2.667Z" fill="#28B446"></path><path d="m18.384 4.302-3.24 2.652a5.948 5.948 0 0 0-8.767 3.114L3.12 7.401a9.998 9.998 0 0 1 8.88-5.4c2.427 0 4.652.863 6.384 2.301Z" fill="#F14336"></path></svg>`);
}
const _sfc_setup$1m = _sfc_main$1m.setup;
_sfc_main$1m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconGoogle.vue");
  return _sfc_setup$1m ? _sfc_setup$1m(props, ctx) : void 0;
};
const IconGoogle = /* @__PURE__ */ _export_sfc(_sfc_main$1m, [["ssrRender", _sfc_ssrRender$y]]);
const _sfc_main$1l = {
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
        _push(ssrRenderComponent(_sfc_main$1p, mergeProps({
          show: __props.show,
          onClose: ($event) => {
            showModal.value = false;
            emit("close");
          }
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="md:px-20 p-5 py-20"${_scopeId}><section class="w-full space-y-10"${_scopeId}><button class="w-full justify-center bg-[rgb(24,_24,_27)] rounded-2xl px-10 py-2 space-x-2 flex items-center"${_scopeId}><span${_scopeId}><img class="w-7 h-7 inline-block" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0ZDM0YxRCIgZD0iTTIyIDQzYTIxIDIxIDAgMSAwIDAtNDIgMjEgMjEgMCAwIDAgMCA0MloiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjUuMyAzNS4xM2g0LjU3VjguODZoLTYuNjZjLTYuNyAwLTEwLjIyIDMuNDQtMTAuMjIgOC41IDAgNC4wMiAxLjkzIDYuNDMgNS4zNyA4Ljg4bC01Ljk5IDguODhoNC45N0wyNCAyNS4xOGwtMi4zMi0xLjU0Yy0yLjgtMS45LTQuMTctMy4zNi00LjE3LTYuNTQgMC0yLjc5IDEuOTctNC42OCA1LjcyLTQuNjhoMi4wNXYyMi43aC4wMVoiLz48L3N2Zz4=" alt=""${_scopeId}></span><span class="text-white font-semibold"${_scopeId}>Войти с Яндекс ID</span></button><button class="w-full space-x-2 justify-center border-2 bg-white rounded-2xl px-10 py-2 flex items-center"${_scopeId}><span${_scopeId}>`);
              _push2(ssrRenderComponent(IconGoogle, { class: "w-7 h-7" }, null, _parent2, _scopeId));
              _push2(`</span><span class="text-black font-semibold"${_scopeId}> Войти с google </span></button></section></div>`);
            } else {
              return [
                createVNode("div", { class: "md:px-20 p-5 py-20" }, [
                  createVNode("section", { class: "w-full space-y-10" }, [
                    createVNode("button", {
                      class: "w-full justify-center bg-[rgb(24,_24,_27)] rounded-2xl px-10 py-2 space-x-2 flex items-center",
                      onClick: ($event) => openAuthWindow("yandex")
                    }, [
                      createVNode("span", null, [
                        createVNode("img", {
                          class: "w-7 h-7 inline-block",
                          src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0ZDM0YxRCIgZD0iTTIyIDQzYTIxIDIxIDAgMSAwIDAtNDIgMjEgMjEgMCAwIDAgMCA0MloiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjUuMyAzNS4xM2g0LjU3VjguODZoLTYuNjZjLTYuNyAwLTEwLjIyIDMuNDQtMTAuMjIgOC41IDAgNC4wMiAxLjkzIDYuNDMgNS4zNyA4Ljg4bC01Ljk5IDguODhoNC45N0wyNCAyNS4xOGwtMi4zMi0xLjU0Yy0yLjgtMS45LTQuMTctMy4zNi00LjE3LTYuNTQgMC0yLjc5IDEuOTctNC42OCA1LjcyLTQuNjhoMi4wNXYyMi43aC4wMVoiLz48L3N2Zz4=",
                          alt: ""
                        })
                      ]),
                      createVNode("span", { class: "text-white font-semibold" }, "Войти с Яндекс ID")
                    ], 8, ["onClick"]),
                    createVNode("button", {
                      onClick: ($event) => openAuthWindow("google"),
                      class: "w-full space-x-2 justify-center border-2 bg-white rounded-2xl px-10 py-2 flex items-center"
                    }, [
                      createVNode("span", null, [
                        createVNode(IconGoogle, { class: "w-7 h-7" })
                      ]),
                      createVNode("span", { class: "text-black font-semibold" }, " Войти с google ")
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
const _sfc_setup$1l = _sfc_main$1l.setup;
_sfc_main$1l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modals/Auth.vue");
  return _sfc_setup$1l ? _sfc_setup$1l(props, ctx) : void 0;
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
const _sfc_main$1k = {
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
const _sfc_setup$1k = _sfc_main$1k.setup;
_sfc_main$1k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Forms/SecondaryContent.vue");
  return _sfc_setup$1k ? _sfc_setup$1k(props, ctx) : void 0;
};
const _sfc_main$1j = {
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
const _sfc_setup$1j = _sfc_main$1j.setup;
_sfc_main$1j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Forms/SearchInput.vue");
  return _sfc_setup$1j ? _sfc_setup$1j(props, ctx) : void 0;
};
const _sfc_main$1i = {};
function _sfc_ssrRender$x(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    "stroke-width": "1.5",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"></path></svg>`);
}
const _sfc_setup$1i = _sfc_main$1i.setup;
_sfc_main$1i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconUp.vue");
  return _sfc_setup$1i ? _sfc_setup$1i(props, ctx) : void 0;
};
const IconUp = /* @__PURE__ */ _export_sfc(_sfc_main$1i, [["ssrRender", _sfc_ssrRender$x]]);
const _sfc_main$1h = {};
function _sfc_ssrRender$w(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path></svg>`);
}
const _sfc_setup$1h = _sfc_main$1h.setup;
_sfc_main$1h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconDown.vue");
  return _sfc_setup$1h ? _sfc_setup$1h(props, ctx) : void 0;
};
const IconDown = /* @__PURE__ */ _export_sfc(_sfc_main$1h, [["ssrRender", _sfc_ssrRender$w]]);
const _sfc_main$1g = {};
function _sfc_ssrRender$v(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const _sfc_setup$1g = _sfc_main$1g.setup;
_sfc_main$1g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconPhoto.vue");
  return _sfc_setup$1g ? _sfc_setup$1g(props, ctx) : void 0;
};
const IconPhoto = /* @__PURE__ */ _export_sfc(_sfc_main$1g, [["ssrRender", _sfc_ssrRender$v]]);
const Editor_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1f = {
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
    const handleFile = (e2) => {
      const file = e2.target.files[0];
      const reader = new FileReader();
      reader.onload = (e3) => {
        uploadImage(file, e3.target.result);
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
        _push(ssrRenderComponent(_sfc_main$1p, mergeProps({
          show: __props.show,
          onClose: ($event) => close()
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="p-5 px-20 pb-0"${_scopeId}>`);
              if (postIsLoading.value) {
                _push2(`<div class="flex justify-center my-10"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$1D, null, null, _parent2, _scopeId));
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
                    _push2(ssrRenderComponent(_sfc_main$1D, { class: "absolute w-10 h-10" }, null, _parent2, _scopeId));
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
                _push2(ssrRenderComponent(_sfc_main$1n, mergeProps({
                  modelValue: form.title,
                  "onUpdate:modelValue": ($event) => form.title = $event,
                  placeholder: "Название подборки"
                }, ssrGetDirectiveProps(_ctx, vFocus)), null, _parent2, _scopeId));
                _push2(`</div><div${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$1k, {
                  modelValue: form.description,
                  "onUpdate:modelValue": ($event) => form.description = $event,
                  placeholder: "Описание подборки"
                }, null, _parent2, _scopeId));
                _push2(`</div><div class="my-5"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$1j, {
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
                    createVNode(_sfc_main$1D)
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
                              imageIsLoading.value ? (openBlock(), createBlock(_sfc_main$1D, {
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
                          withDirectives(createVNode(_sfc_main$1n, {
                            modelValue: form.title,
                            "onUpdate:modelValue": ($event) => form.title = $event,
                            placeholder: "Название подборки"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                            [vFocus]
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode(_sfc_main$1k, {
                            modelValue: form.description,
                            "onUpdate:modelValue": ($event) => form.description = $event,
                            placeholder: "Описание подборки"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "my-5" }, [
                          createVNode(_sfc_main$1j, {
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
const _sfc_setup$1f = _sfc_main$1f.setup;
_sfc_main$1f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modals/Editor.vue");
  return _sfc_setup$1f ? _sfc_setup$1f(props, ctx) : void 0;
};
const _sfc_main$1e = {
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
      Auth: _sfc_main$1l,
      Editor: _sfc_main$1f
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
const _sfc_setup$1e = _sfc_main$1e.setup;
_sfc_main$1e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modals/UrlModal.vue");
  return _sfc_setup$1e ? _sfc_setup$1e(props, ctx) : void 0;
};
const _sfc_main$1d = {};
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path fill="currentColor" stroke-width="0%" fill-rule="evenodd" clip-rule="evenodd" d="M7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5ZM12 5C10.6193 5 9.5 6.11929 9.5 7.5C9.5 8.88071 10.6193 10 12 10C13.3807 10 14.5 8.88071 14.5 7.5C14.5 6.11929 13.3807 5 12 5ZM6.42396 14.5525C7.88358 13.5239 9.85038 13 12 13C14.1496 13 16.1164 13.5239 17.576 14.5525C19.0605 15.5987 20 17.1618 20 19.0909C20 19.7115 19.8314 20.4357 19.3441 21.0242C18.8304 21.6444 18.0562 22 17.0909 22H6.90909C5.94384 22 5.16955 21.6444 4.65595 21.0242C4.16862 20.4357 4 19.7115 4 19.0909C4 17.1618 4.93946 15.5987 6.42396 14.5525ZM7.57604 16.1874C6.56054 16.903 6 17.8853 6 19.0909C6 19.3794 6.08138 19.6097 6.19633 19.7486C6.28499 19.8556 6.46525 20 6.90909 20H17.0909C17.5348 20 17.715 19.8556 17.8037 19.7486C17.9186 19.6097 18 19.3794 18 19.0909C18 17.8853 17.4395 16.903 16.424 16.1874C15.3836 15.4542 13.8504 15 12 15C10.1496 15 8.61642 15.4542 7.57604 16.1874Z"></path></svg>`);
}
const _sfc_setup$1d = _sfc_main$1d.setup;
_sfc_main$1d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconLogin.vue");
  return _sfc_setup$1d ? _sfc_setup$1d(props, ctx) : void 0;
};
const IconLogin = /* @__PURE__ */ _export_sfc(_sfc_main$1d, [["ssrRender", _sfc_ssrRender$u]]);
const MainLayout_vue_vue_type_style_index_0_scoped_e20e826b_lang = "";
const _sfc_main$1c = {
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
            _push2(`<meta type="description" content="Information about my app" head-key="description" data-v-e20e826b${_scopeId}><title data-v-e20e826b${_scopeId}>${ssrInterpolate(__props.title ?? "Подборки")}</title>`);
          } else {
            return [
              createVNode("meta", {
                type: "description",
                content: "Information about my app",
                "head-key": "description"
              }),
              createVNode("title", null, toDisplayString(__props.title ?? "Подборки"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="bg-bck min-h-screen" data-v-e20e826b>`);
      _push(ssrRenderComponent(HeaderLayout, null, null, _parent));
      _push(`<div class="max-w-7xl mx-auto" data-v-e20e826b><div class="grid grid-template" data-v-e20e826b>`);
      _push(ssrRenderComponent(_sfc_main$1T, { class: "hidden lg:block" }, null, _parent));
      _push(`<div class="mt-2 md:p-5 rounded-xl 2xl:w-11/12 xl:w-11/12 md:w-full min-h-screen mb-10 md:mb-2 mx-auto" data-v-e20e826b>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$1R, { class: "hidden 2xl:block" }, null, _parent));
      _push(`</div></div></div><div class="lg:hidden bg-white bottom-0 w-full mx-auto text-center px-10 md:px-20 py-2 fixed" data-v-e20e826b><div class="flex justify-between items-center py-1 sticky bottom-0" data-v-e20e826b>`);
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
      _push(ssrRenderComponent(_sfc_main$20, {
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
      _push(ssrRenderComponent(_sfc_main$20, {
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
      _push(ssrRenderComponent(_sfc_main$1Z, { message: calledMessage }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1e, {
        modalIsClosed: modalIsClosed.value,
        callModal: calledModal.value
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1c = _sfc_main$1c.setup;
_sfc_main$1c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/MainLayout.vue");
  return _sfc_setup$1c ? _sfc_setup$1c(props, ctx) : void 0;
};
const MainLayout = /* @__PURE__ */ _export_sfc(_sfc_main$1c, [["__scopeId", "data-v-e20e826b"]]);
const _sfc_main$1b = /* @__PURE__ */ Object.assign({
  layout: MainLayout
}, {
  __name: "Account",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
});
const _sfc_setup$1b = _sfc_main$1b.setup;
_sfc_main$1b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Account.vue");
  return _sfc_setup$1b ? _sfc_setup$1b(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1b
}, Symbol.toStringTag, { value: "Module" }));
const PanelLayout_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1a = {};
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs) {
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
const _sfc_setup$1a = _sfc_main$1a.setup;
_sfc_main$1a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/PanelLayout.vue");
  return _sfc_setup$1a ? _sfc_setup$1a(props, ctx) : void 0;
};
const PanelLayout = /* @__PURE__ */ _export_sfc(_sfc_main$1a, [["ssrRender", _sfc_ssrRender$t]]);
const _sfc_main$19 = /* @__PURE__ */ Object.assign({
  layout: PanelLayout
}, {
  __name: "Admins",
  __ssrInlineRender: true,
  props: {
    admins: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}><section><p>Выдать админку по айдишнику</p><input type="text"><button> Go</button></section> Кол-во ${ssrInterpolate(((_a = __props.admins) == null ? void 0 : _a.length) ?? 0)} <!--[-->`);
      ssrRenderList(__props.admins, (admin) => {
        _push(`<div class="border-b-2"><div><!--[-->`);
        ssrRenderList(__props.admins, (admin2) => {
          _push(`<div><p>${ssrInterpolate(admin2.id)}</p><p>${ssrInterpolate(admin2.name)}</p></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$19 = _sfc_main$19.setup;
_sfc_main$19.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Admins.vue");
  return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$19
}, Symbol.toStringTag, { value: "Module" }));
const Message_vue_vue_type_style_index_0_lang = "";
const _sfc_main$18 = {
  props: {
    showMessage: null,
    mode: null
  },
  updated() {
    setTimeout(() => this.$emit("closeMessage"), 2e3);
  }
};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.mode = "success") {
    _push(`<div style="${ssrRenderStyle($props.showMessage ? null : { display: "none" })}" class="bg-emerald-50 my-5 mx-5 p-5 text-sm border border-1/2 border-emerald-150 rounded-xl fixed left-0 bottom-0 min-w-xs max-w-xs"><p class="text-center font-semibold text-emerald-700">Успех!</p></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$18 = _sfc_main$18.setup;
_sfc_main$18.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Message.vue");
  return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
const Message = /* @__PURE__ */ _export_sfc(_sfc_main$18, [["ssrRender", _sfc_ssrRender$s]]);
const _sfc_main$17 = {
  props: {
    film: null
  },
  data() {
    return {
      updated: false,
      name_ru: this.film.name_ru,
      name_en: this.film.name_en,
      description: this.film.description,
      short_description: this.film.short_description,
      poster_url: this.film.poster_url,
      poster_url_preview: this.film.poster_url_preview,
      logo_url: this.film.logo_url,
      slogan: this.film.slogan
    };
  },
  methods: {
    update() {
      axios.post(route("film.patch"), {
        _method: "PATCH",
        film_id: this.film.id,
        name_ru: this.name_ru,
        name_en: this.name_en,
        description: this.description,
        short_description: this.short_description,
        poster_url: this.poster_url,
        poster_url_preview: this.poster_url_preview,
        logo_url: this.logo_url,
        slogan: this.slogan
      }).catch((res) => {
        console.log(res);
      }).then((res) => {
        console.log(res);
        if (res.status == 200) {
          this.updated = true;
        }
      });
    },
    refresh() {
      axios.post(route("film.refresh"), {
        _method: "PATCH",
        id: this.film.id
      }).catch((res) => {
        console.log(res);
      }).then((res) => {
        console.log(res);
        if (res.status == 200) {
          this.updated = 200;
        }
      });
    }
  },
  components: { Message }
};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Csrf = resolveComponent("Csrf");
  const _component_Base = resolveComponent("Base");
  const _component_Message = resolveComponent("Message");
  const _directive_lazy = resolveDirective("lazy");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Csrf, null, null, _parent));
  _push(ssrRenderComponent(_component_Base, {
    title: $props.film.name_ru,
    sides: false
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-white p-5 rounded-xl"${_scopeId}><p${_scopeId}>Редактировать данные фильма</p><button class="mt-10 py-2 px-4 rounded-full border-0 text-sm font-semibold bg-red-50 text-red-700 hover:bg-red-100 block"${_scopeId}> Обновить информацию через API </button><a${ssrRenderAttr("href", "https://kinopoisk.ru/film/" + $props.film.id)} class="text-sm text-sky-700 font-semibold ms-2"${_scopeId}>Перейти на кинопоиск</a><form class="shadow rounded-lg p-5 mt-5"${_scopeId}><div class="flex items-center"${_scopeId}><img${ssrRenderAttrs(mergeProps({
          alt: "",
          class: "rounded-xl",
          style: { "max-height": "500px", "max-width": "334px" }
        }, ssrGetDirectiveProps(_ctx, _directive_lazy, $props.film.poster_url)))}${_scopeId}><div class="w-full ms-5 shadow p-5 shadow-xl rounded-xl"${_scopeId}><p class="text-sm uppercase"${_scopeId}>name_ru</p><input type="text"${ssrRenderAttr("value", $data.name_ru)} class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"${_scopeId}><p class="text-sm uppercase"${_scopeId}>name_en</p><input type="text"${ssrRenderAttr("value", $data.name_en)} class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"${_scopeId}><p class="text-sm uppercase"${_scopeId}>description</p><input type="text"${ssrRenderAttr("value", $data.description)} class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"${_scopeId}><p class="text-sm uppercase"${_scopeId}>short_description</p><input type="text"${ssrRenderAttr("value", $data.short_description)} class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"${_scopeId}><p class="text-sm uppercase"${_scopeId}>poster_url</p><input type="text"${ssrRenderAttr("value", $data.poster_url)} class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"${_scopeId}><p class="text-sm uppercase"${_scopeId}>poster_url_preview</p><input type="text"${ssrRenderAttr("value", $data.poster_url_preview)} class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"${_scopeId}><p class="text-sm uppercase"${_scopeId}>logo_url</p><input type="text"${ssrRenderAttr("value", $data.logo_url)} class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"${_scopeId}><p class="text-sm uppercase"${_scopeId}>slogan</p><input type="text"${ssrRenderAttr("value", $data.slogan)} class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"${_scopeId}></div></div><button class="mt-10 py-2 px-4 rounded-full border-0 text-sm font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 mx-auto block"${_scopeId}> Сохранить </button>`);
        _push2(ssrRenderComponent(_component_Message, {
          mode: "success",
          showMessage: $data.updated,
          onCloseMessage: ($event) => $data.updated = false
        }, null, _parent2, _scopeId));
        _push2(`</form></div>`);
      } else {
        return [
          createVNode("div", { class: "bg-white p-5 rounded-xl" }, [
            createVNode("p", null, "Редактировать данные фильма"),
            createVNode("button", {
              onClick: withModifiers(($event) => $options.refresh(), ["prevent"]),
              class: "mt-10 py-2 px-4 rounded-full border-0 text-sm font-semibold bg-red-50 text-red-700 hover:bg-red-100 block"
            }, " Обновить информацию через API ", 8, ["onClick"]),
            createVNode("a", {
              href: "https://kinopoisk.ru/film/" + $props.film.id,
              class: "text-sm text-sky-700 font-semibold ms-2"
            }, "Перейти на кинопоиск", 8, ["href"]),
            createVNode("form", {
              onSubmit: withModifiers(($event) => $options.update(), ["prevent"]),
              class: "shadow rounded-lg p-5 mt-5"
            }, [
              createVNode("div", { class: "flex items-center" }, [
                withDirectives(createVNode("img", {
                  alt: "",
                  class: "rounded-xl",
                  style: { "max-height": "500px", "max-width": "334px" }
                }, null, 512), [
                  [_directive_lazy, $props.film.poster_url]
                ]),
                createVNode("div", { class: "w-full ms-5 shadow p-5 shadow-xl rounded-xl" }, [
                  createVNode("p", { class: "text-sm uppercase" }, "name_ru"),
                  withDirectives(createVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => $data.name_ru = $event,
                    class: "w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.name_ru]
                  ]),
                  createVNode("p", { class: "text-sm uppercase" }, "name_en"),
                  withDirectives(createVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => $data.name_en = $event,
                    class: "w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.name_en]
                  ]),
                  createVNode("p", { class: "text-sm uppercase" }, "description"),
                  withDirectives(createVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => $data.description = $event,
                    class: "w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.description]
                  ]),
                  createVNode("p", { class: "text-sm uppercase" }, "short_description"),
                  withDirectives(createVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => $data.short_description = $event,
                    class: "w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.short_description]
                  ]),
                  createVNode("p", { class: "text-sm uppercase" }, "poster_url"),
                  withDirectives(createVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => $data.poster_url = $event,
                    class: "w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.poster_url]
                  ]),
                  createVNode("p", { class: "text-sm uppercase" }, "poster_url_preview"),
                  withDirectives(createVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => $data.poster_url_preview = $event,
                    class: "w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.poster_url_preview]
                  ]),
                  createVNode("p", { class: "text-sm uppercase" }, "logo_url"),
                  withDirectives(createVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => $data.logo_url = $event,
                    class: "w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.logo_url]
                  ]),
                  createVNode("p", { class: "text-sm uppercase" }, "slogan"),
                  withDirectives(createVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => $data.slogan = $event,
                    class: "w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.slogan]
                  ])
                ])
              ]),
              createVNode("button", { class: "mt-10 py-2 px-4 rounded-full border-0 text-sm font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 mx-auto block" }, " Сохранить "),
              createVNode(_component_Message, {
                mode: "success",
                showMessage: $data.updated,
                onCloseMessage: ($event) => $data.updated = false
              }, null, 8, ["showMessage", "onCloseMessage"])
            ], 40, ["onSubmit"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$17 = _sfc_main$17.setup;
_sfc_main$17.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Film.vue");
  return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
const Film = /* @__PURE__ */ _export_sfc(_sfc_main$17, [["ssrRender", _sfc_ssrRender$r]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Film
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$16 = {};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    class: "icon icon-tabler icon-tabler-flag",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, _attrs))}><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z"></path><path d="M5 21v-7"></path></svg>`);
}
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconFlag.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
const IconFlag = /* @__PURE__ */ _export_sfc(_sfc_main$16, [["ssrRender", _sfc_ssrRender$q]]);
const _sfc_main$15 = {};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    class: "icon icon-tabler icon-tabler-dots",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    fill: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, _attrs))}><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg>`);
}
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconDots.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
const IconDots = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["ssrRender", _sfc_ssrRender$p]]);
const sendReport = (form, callback) => {
  axios.post(route("report.store"), form).catch((res) => {
    console.log(res);
  }).then((res) => {
    if (res.status === 200)
      callback();
  });
};
const _sfc_main$14 = {
  __name: "Report",
  __ssrInlineRender: true,
  props: {
    show: false,
    report_to_type: null,
    report_to_id: null
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const callMessage = inject("callMessage");
    const selectedType = ref(null);
    const types = [
      { id: "spam", label: "Спам" },
      { id: "rude", label: "Оскорбление" },
      { id: "violence", label: "Насилие" },
      { id: "illegal", label: "Нарушение закона" },
      { id: "other", label: "Другое" },
      { id: "lie", label: "Несоответствие" }
    ];
    const props = __props;
    const isLoading = ref(false);
    const disabled = ref(false);
    const submit = () => {
      if (!isLoading.value && !disabled.value) {
        isLoading.value = true;
        sendReport({
          report_to_type: props.report_to_type,
          report_to_id: props.report_to_id,
          message: selectedType.value
        }, function() {
          emit("close");
          isLoading.value = false;
          disabled.value = true;
          callMessage("success", "Жалоба отправлена!");
        });
      }
    };
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1p, mergeProps({
        show: __props.show,
        "max-width": "md",
        onClose: ($event) => emit("close")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white"${_scopeId}><header class="font-medium p-5 px-10 pb-4 text-lg border-b-2"${_scopeId}> Пожаловаться </header><main class="p-5 px-10"${_scopeId}><p class="mb-5 text-lgg"${_scopeId}>Выберите причину</p><form class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(types, (type) => {
              _push2(`<div class="flex items-center"${_scopeId}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(selectedType.value, type.id)) ? " checked" : ""}${ssrRenderAttr("value", type.id)}${ssrRenderAttr("id", type.id)} class="appearance-none bg-gray-50 checked:bg-orange-500 checked:fill-orange-500 focus:fill-orange-500 focus:bg-orange-500 border-1 border-secondary border-opacity-10 text-lg text-orange-500 focus:ring-0"${_scopeId}><label${ssrRenderAttr("for", type.id)} class="ms-4 py-2 cursor-pointer select-none"${_scopeId}>${ssrInterpolate(type.label)}</label></div>`);
            });
            _push2(`<!--]--><div class="text-end"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, { class: "bg-orange-500 px-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Отправить `);
                } else {
                  return [
                    createTextVNode(" Отправить ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></main></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white" }, [
                createVNode("header", { class: "font-medium p-5 px-10 pb-4 text-lg border-b-2" }, " Пожаловаться "),
                createVNode("main", { class: "p-5 px-10" }, [
                  createVNode("p", { class: "mb-5 text-lgg" }, "Выберите причину"),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    class: "space-y-2"
                  }, [
                    (openBlock(), createBlock(Fragment, null, renderList(types, (type) => {
                      return createVNode("div", {
                        key: type.id,
                        class: "flex items-center"
                      }, [
                        withDirectives(createVNode("input", {
                          type: "radio",
                          "onUpdate:modelValue": ($event) => selectedType.value = $event,
                          value: type.id,
                          id: type.id,
                          class: "appearance-none bg-gray-50 checked:bg-orange-500 checked:fill-orange-500 focus:fill-orange-500 focus:bg-orange-500 border-1 border-secondary border-opacity-10 text-lg text-orange-500 focus:ring-0"
                        }, null, 8, ["onUpdate:modelValue", "value", "id"]), [
                          [vModelRadio, selectedType.value]
                        ]),
                        createVNode("label", {
                          for: type.id,
                          class: "ms-4 py-2 cursor-pointer select-none"
                        }, toDisplayString(type.label), 9, ["for"])
                      ]);
                    }), 64)),
                    createVNode("div", { class: "text-end" }, [
                      createVNode(PrimaryButton, { class: "bg-orange-500 px-3" }, {
                        default: withCtx(() => [
                          createTextVNode(" Отправить ")
                        ]),
                        _: 1
                      })
                    ])
                  ], 32)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modals/Report/Report.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
const _sfc_main$13 = {
  __name: "DropdownReport",
  __ssrInlineRender: true,
  props: {
    report_to_type: null,
    report_to_id: null,
    class: null,
    align: "right"
  },
  setup(__props) {
    const showModal = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1Q, { align: __props.align }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="p-1 hover:bg-gray-100 text-gray-600 rounded-full"${_scopeId}>`);
            _push2(ssrRenderComponent(IconDots, { class: __props.class }, null, _parent2, _scopeId));
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", { class: "p-1 hover:bg-gray-100 text-gray-600 rounded-full" }, [
                createVNode(IconDots, { class: __props.class }, null, 8, ["class"])
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-1"${_scopeId}><button class="text-base text-black hover:bg-neutral-100 rounded-lg px-5"${_scopeId}>`);
            _push2(ssrRenderComponent(IconFlag, { class: "stroke-2 inline-block me-2 w-5 h-5" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Пожаловаться</span></button></div>`);
          } else {
            return [
              createVNode("div", { class: "py-1" }, [
                createVNode("button", {
                  onClick: ($event) => showModal.value = true,
                  class: "text-base text-black hover:bg-neutral-100 rounded-lg px-5"
                }, [
                  createVNode(IconFlag, { class: "stroke-2 inline-block me-2 w-5 h-5" }),
                  createVNode("span", null, "Пожаловаться")
                ], 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$14, {
        onClose: ($event) => showModal.value = false,
        show: showModal.value,
        report_to_type: __props.report_to_type,
        report_to_id: __props.report_to_id
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdowns/DropdownReport.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const Film_vue_vue_type_style_index_0_lang = "";
const _sfc_main$12 = {
  __name: "Film",
  __ssrInlineRender: true,
  props: {
    film: null
  },
  setup(__props) {
    const film_description = ref(null);
    const isTooLong = ref(false);
    const showReportTrigger = ref(false);
    onMounted(() => {
      nextTick(() => {
        if (film_description.value.clientHeight > 100) {
          isTooLong.value = true;
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex" }, _attrs))}><div class="mt-5 grid grid-tmp items-center rounded-lg"><a${ssrRenderAttr("href", "https://kinopoisk.ru/film/" + __props.film.id)} class="object-cover md:h-full xs:h-[300px] clear-auto">`);
      if (__props.film.poster_url_preview) {
        _push(`<img class="rounded-lg object-cover xs:h-full md:h-full w-full"${ssrRenderAttr("src", __props.film.poster_url_preview)} alt="">`);
      } else {
        _push(`<img${ssrRenderAttr("src", __props.film.poster_url)} class="rounded-lg object-cover xs:h-full md:h-full w-full" alt="">`);
      }
      if (!__props.film.cover_url && !__props.film.poster_url) {
        _push(`<img class="rounded-lg object-cover xs:h-full md:h-full w-full" src="https://dummyimage.com/400x400/000/fff&amp;text=No+image" alt="">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a><div class="md:ms-5 inline-block xs:mt-4 md:mt-0 md:pe-4"><a${ssrRenderAttr("href", "https://kinopoisk.ru/film/" + __props.film.id)} class="text-sky-600 font-semibold">${ssrInterpolate(__props.film.name_ru)} ${ssrInterpolate(__props.film.name_en)}</a><div class="my-2 flex-wrap flex"><!--[-->`);
      ssrRenderList(__props.film.genres, (genre) => {
        _push(`<span class="mb-1"><a class="me-2 pe-2 py-1 text-orange-700 opacity-70 font-medium"${ssrRenderAttr("href", genre.kp_wire)}> #${ssrInterpolate(genre.name)}</a></span>`);
      });
      _push(`<!--]--></div><p class="${ssrRenderClass([{ "max-h-20": isTooLong.value }, "text-sm text-slate-800 break-words overflow-hidden"])}">${ssrInterpolate(__props.film.description)}</p><button style="${ssrRenderStyle(isTooLong.value ? null : { display: "none" })}" class="block text-black opacity-60 hover:opacity-40 my-2 text-sm"> Читать дальше </button><p class="px-2 py-1 my-2 bg-orange-50 text-sm rounded-lg text-orange-700 inline-block font-medium">${ssrInterpolate(__props.film.type == "movie" ? "Фильм" : "Сериал")}</p><div class="my-2"><div class="flex items-end justify-between space-x-2"><img${ssrRenderAttr("src", "https://rating.kinopoisk.ru/" + __props.film.id + ".gif")} class="bg-gray-100 rounded" style="${ssrRenderStyle({ "width": "102px", "height": "38px" })}" alt="Rating"><div style="${ssrRenderStyle(showReportTrigger.value ? null : { display: "none" })}">`);
      _push(ssrRenderComponent(_sfc_main$13, {
        report_to_type: "film",
        report_to_id: __props.film.id,
        align: "right",
        class: "text-gray-400 w-6 h-6"
      }, null, _parent));
      _push(`</div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Film.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const _sfc_main$11 = {
  props: {
    items: null
  }
};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<section${ssrRenderAttrs(_attrs)}>`);
  if ($props.items.links.length >= 3) {
    _push(`<div><div class="flex flex-wrap mb-1"><!--[-->`);
    ssrRenderList($props.items.links, (link, p2) => {
      _push(`<section>`);
      if (link.url != null && link.label.includes("Previous")) {
        _push(ssrRenderComponent(_component_Link, {
          href: link.url,
          class: "mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Назад `);
            } else {
              return [
                createTextVNode(" Назад ")
              ];
            }
          }),
          _: 2
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (link.url != null && link.label >= 0) {
        _push(ssrRenderComponent(_component_Link, {
          class: ["mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500", { "bg-blue-700 text-white": link.active }],
          href: link.url
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (link.url != null && link.label.includes("Next")) {
        _push(ssrRenderComponent(_component_Link, {
          href: link.url,
          class: "mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Вперед `);
            } else {
              return [
                createTextVNode(" Вперед ")
              ];
            }
          }),
          _: 2
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.items.meta && $props.items.meta.last_page != 1) {
    _push(`<div><div class="flex flex-wrap mb-1"><!--[-->`);
    ssrRenderList($props.items.meta.links, (link, p2) => {
      _push(`<section>`);
      if (link.url != null && link.label.includes("Previous")) {
        _push(ssrRenderComponent(_component_Link, {
          href: link.url,
          class: "mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Назад `);
            } else {
              return [
                createTextVNode(" Назад ")
              ];
            }
          }),
          _: 2
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (link.url != null && link.label >= 0) {
        _push(ssrRenderComponent(_component_Link, {
          class: ["mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500", { "bg-blue-700 text-white": link.active }],
          href: link.url
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (link.url != null && link.label.includes("Next")) {
        _push(ssrRenderComponent(_component_Link, {
          href: link.url,
          class: "mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Вперед `);
            } else {
              return [
                createTextVNode(" Вперед ")
              ];
            }
          }),
          _: 2
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</section>`);
}
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pagination.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["ssrRender", _sfc_ssrRender$o]]);
const _sfc_main$10 = {
  props: {
    films: null
  },
  data() {
    return {
      input_kp: null,
      input_search: null,
      founded_films: [],
      show_success_message: false
    };
  },
  methods: {
    addFilm(id) {
      axios$1.post(route("film.store"), {
        id
      }).catch((res) => {
        console.log(res);
      }).then((res) => {
        console.log(res);
        if (res.status == 200 || res.status == 201) {
          this.input_kp = "";
          this.show_success_message = true;
        }
      });
    },
    handleInputKinopoisk() {
      let id = parseInt(this.input_kp.replace(/\D/g, "")) || 0;
      this.addFilm(id);
    },
    search() {
      console.log(this.films);
      if (this.input_search == null || this.input_search.trim() == "") {
        this.founded_films = [];
      }
      axios$1.get(route("film.search", [this.input_search])).catch((res) => {
        console.log(res);
      }).then((res) => {
        console.log(res);
        if (res.status == 200) {
          this.founded_films = res.data;
        }
      });
    }
  },
  components: { Film: _sfc_main$12, Pagination, Message }
};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Base = resolveComponent("Base");
  const _component_Link = resolveComponent("Link");
  const _component_Pagination = resolveComponent("Pagination");
  const _component_Message = resolveComponent("Message");
  _push(ssrRenderComponent(_component_Base, mergeProps({ title: "Фильмы" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Фильмы</p><main class="my-5 p-5 shadow rounded-xl"${_scopeId}><div class="p-5 my-5 shadow rounded-xl"${_scopeId}><p class="text-sm"${_scopeId}>Добавить фильм по ссылке</p><input${ssrRenderAttr("value", $data.input_kp)} type="text" class="text-sm rounded-xl w-full border-slate-300"${_scopeId}></div><div class="my-5 p-5 shadow rounded-xl"${_scopeId}><p class="text-sm"${_scopeId}>Найти фильм</p><input${ssrRenderAttr("value", $data.input_search)} type="text" class="text-sm rounded-xl border-slate-300 w-full"${_scopeId}><div class="p-2"${_scopeId}><!--[-->`);
        ssrRenderList($data.founded_films, (founded_film) => {
          _push2(ssrRenderComponent(_component_Link, {
            key: founded_film.id,
            href: _ctx.route("film.edit", [founded_film.id]),
            class: "text-sm border p-2 rounded w-full block"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(founded_film.name_ru)} ${ssrInterpolate(founded_film.name_en)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(founded_film.name_ru) + " " + toDisplayString(founded_film.name_en), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]--></div></div><!--[-->`);
        ssrRenderList($props.films.data, (film) => {
          _push2(`<div class="flex justify-between my-2"${_scopeId}><p class="text-sm"${_scopeId}>${ssrInterpolate(film.name_ru)} ${ssrInterpolate(film.name_en)}</p>`);
          _push2(ssrRenderComponent(_component_Link, {
            href: _ctx.route("film.edit", [film.id]),
            class: "text-sm text-slate-800"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`Редактировать`);
              } else {
                return [
                  createTextVNode("Редактировать")
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></main>`);
        _push2(ssrRenderComponent(_component_Pagination, { items: $props.films }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Message, {
          showMessage: $data.show_success_message,
          onCloseMessage: ($event) => $data.show_success_message = !$data.show_success_message
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("p", null, "Фильмы"),
          createVNode("main", { class: "my-5 p-5 shadow rounded-xl" }, [
            createVNode("div", { class: "p-5 my-5 shadow rounded-xl" }, [
              createVNode("p", { class: "text-sm" }, "Добавить фильм по ссылке"),
              withDirectives(createVNode("input", {
                onInput: $options.handleInputKinopoisk,
                "onUpdate:modelValue": ($event) => $data.input_kp = $event,
                type: "text",
                class: "text-sm rounded-xl w-full border-slate-300"
              }, null, 40, ["onInput", "onUpdate:modelValue"]), [
                [vModelText, $data.input_kp]
              ])
            ]),
            createVNode("div", { class: "my-5 p-5 shadow rounded-xl" }, [
              createVNode("p", { class: "text-sm" }, "Найти фильм"),
              withDirectives(createVNode("input", {
                onInput: ($event) => $options.search(),
                "onUpdate:modelValue": ($event) => $data.input_search = $event,
                type: "text",
                class: "text-sm rounded-xl border-slate-300 w-full"
              }, null, 40, ["onInput", "onUpdate:modelValue"]), [
                [vModelText, $data.input_search]
              ]),
              createVNode("div", { class: "p-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList($data.founded_films, (founded_film) => {
                  return openBlock(), createBlock(_component_Link, {
                    key: founded_film.id,
                    href: _ctx.route("film.edit", [founded_film.id]),
                    class: "text-sm border p-2 rounded w-full block"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(founded_film.name_ru) + " " + toDisplayString(founded_film.name_en), 1)
                    ]),
                    _: 2
                  }, 1032, ["href"]);
                }), 128))
              ])
            ]),
            (openBlock(true), createBlock(Fragment, null, renderList($props.films.data, (film) => {
              return openBlock(), createBlock("div", {
                key: film.id,
                class: "flex justify-between my-2"
              }, [
                createVNode("p", { class: "text-sm" }, toDisplayString(film.name_ru) + " " + toDisplayString(film.name_en), 1),
                createVNode(_component_Link, {
                  href: _ctx.route("film.edit", [film.id]),
                  class: "text-sm text-slate-800"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Редактировать")
                  ]),
                  _: 2
                }, 1032, ["href"])
              ]);
            }), 128))
          ]),
          createVNode(_component_Pagination, { items: $props.films }, null, 8, ["items"]),
          createVNode(_component_Message, {
            showMessage: $data.show_success_message,
            onCloseMessage: ($event) => $data.show_success_message = !$data.show_success_message
          }, null, 8, ["showMessage", "onCloseMessage"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Films.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const Films = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["ssrRender", _sfc_ssrRender$n]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Films
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$$ = {
  props: {
    genre: null
  },
  data() {
    return {
      input: this.genre.kp_wire
    };
  },
  methods: {
    wire() {
      axios.post(route("genre.wire"), {
        genre_id: this.genre.id,
        url: this.input
      }).catch((res) => {
        console.log(res);
      }).then((res) => {
        console.log(res);
      });
    }
  }
};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Csrf = resolveComponent("Csrf");
  const _component_Base = resolveComponent("Base");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Csrf, null, null, _parent));
  _push(ssrRenderComponent(_component_Base, {
    title: $props.genre.name
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Тег фильма</p><main class="p-5 shadow rounded-xl my-5"${_scopeId}><p class="text-sm text-slate-800"${_scopeId}>#${ssrInterpolate($props.genre.id)}</p><p${_scopeId}>${ssrInterpolate($props.genre.name)}</p><div class="shadow p-5 my-5 rounded-lg"${_scopeId}><p class="text-sm"${_scopeId}>Прикрепить к разделу жанра</p><form${_scopeId}><input${ssrRenderAttr("value", $data.input)} type="text" class="w-full rounded-xl text-sm border-slate-200" required${_scopeId}><button class="mt-2 block py-2 px-4 rounded-full border-0 text-sm font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100"${_scopeId}> Прикрепить </button></form></div></main>`);
      } else {
        return [
          createVNode("p", null, "Тег фильма"),
          createVNode("main", { class: "p-5 shadow rounded-xl my-5" }, [
            createVNode("p", { class: "text-sm text-slate-800" }, "#" + toDisplayString($props.genre.id), 1),
            createVNode("p", null, toDisplayString($props.genre.name), 1),
            createVNode("div", { class: "shadow p-5 my-5 rounded-lg" }, [
              createVNode("p", { class: "text-sm" }, "Прикрепить к разделу жанра"),
              createVNode("form", {
                onSubmit: withModifiers(($event) => $options.wire(), ["prevent"])
              }, [
                withDirectives(createVNode("input", {
                  "onUpdate:modelValue": ($event) => $data.input = $event,
                  type: "text",
                  class: "w-full rounded-xl text-sm border-slate-200",
                  required: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $data.input]
                ]),
                createVNode("button", { class: "mt-2 block py-2 px-4 rounded-full border-0 text-sm font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100" }, " Прикрепить ")
              ], 40, ["onSubmit"])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Genre.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const Genre = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["ssrRender", _sfc_ssrRender$m]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Genre
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$_ = {
  props: {
    genres: null
  }
};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Base = resolveComponent("Base");
  _push(ssrRenderComponent(_component_Base, mergeProps({ title: "Теги фильмов" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Теги фильмов</p><main class="my-5 p-5 shadow rounded-xl"${_scopeId}><p class="text-sm"${_scopeId}>Существующие теги фильмов</p><div class="text-sm my-5 inline-block flex flex-wrap"${_scopeId}><!--[-->`);
        ssrRenderList($props.genres, (genre) => {
          _push2(`<a${ssrRenderAttr("href", _ctx.route("genre", [genre.slug]))} class="me-5 my-2 p-5 shadow rounded-xl"${_scopeId}>${ssrInterpolate(genre.name)}</a>`);
        });
        _push2(`<!--]--></div></main>`);
      } else {
        return [
          createVNode("p", null, "Теги фильмов"),
          createVNode("main", { class: "my-5 p-5 shadow rounded-xl" }, [
            createVNode("p", { class: "text-sm" }, "Существующие теги фильмов"),
            createVNode("div", { class: "text-sm my-5 inline-block flex flex-wrap" }, [
              (openBlock(true), createBlock(Fragment, null, renderList($props.genres, (genre) => {
                return openBlock(), createBlock("a", {
                  key: genre.id,
                  href: _ctx.route("genre", [genre.slug]),
                  class: "me-5 my-2 p-5 shadow rounded-xl"
                }, toDisplayString(genre.name), 9, ["href"]);
              }), 128))
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Genres.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const Genres = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["ssrRender", _sfc_ssrRender$l]]);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Genres
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$Z = /* @__PURE__ */ Object.assign({
  layout: PanelLayout
}, {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    reports: null
  },
  setup(__props) {
    const models = {
      "App\\Models\\Post": "Подборка",
      "App\\Models\\Comment": "Комментарий",
      "App\\Models\\Film": "Фильм"
    };
    const types = {
      "rude": "Оскорбление",
      "lie": "Несоответствие",
      "other": "Прочее",
      "spam": "Спам",
      "violence": "Насилие",
      "illegal": "Нарушение закона"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<main${ssrRenderAttrs(_attrs)}><p class="font-semibold mb-5 text-lgg"> Жалобы </p><div class="space-y-2 max-w-screen-sm"><!--[-->`);
      ssrRenderList(__props.reports, (report) => {
        _push(`<div class="border-b-2 pb-2 flex items-end justify-between space-x-5"><div><header><span> id: ${ssrInterpolate(report.id)}</span><p><span>Тип: </span><span>${ssrInterpolate(models[report.report_to_type])}</span></p></header><main><div><span> Причина: </span><span>${ssrInterpolate(types[report.message])}</span></div></main></div><div class="space-y-2 flex items-end flex-col">`);
        _push(ssrRenderComponent(_component_Link, {
          href: _ctx.route("panel.object.creator.view", [report.report_to.user]),
          class: "block p-2 bg-gray-100 rounded hover:opacity-80"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Рассмотреть владельца ${ssrInterpolate(models[report.report_to_type])}`);
            } else {
              return [
                createTextVNode(" Рассмотреть владельца " + toDisplayString(models[report.report_to_type]), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_Link, {
          href: _ctx.route("panel.object.view", [report.report_to_id]),
          class: "block p-2 bg-gray-100 rounded hover:opacity-80"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Рассмотреть ${ssrInterpolate(models[report.report_to_type])}`);
            } else {
              return [
                createTextVNode(" Рассмотреть " + toDisplayString(models[report.report_to_type]), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></main>`);
    };
  }
});
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Index.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$Z
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$Y = /* @__PURE__ */ Object.assign({
  layout: PanelLayout
}, {
  __name: "Moders",
  __ssrInlineRender: true,
  props: {
    moders: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(_attrs)}><section><p>Выдать модерку по айдишнику</p><input type="text"><button> Go</button></section> Кол:во ${ssrInterpolate(((_a = __props.moders) == null ? void 0 : _a.length) ?? 0)} <!--[-->`);
      ssrRenderList(__props.moders, (moder) => {
        _push(`<div class="flex"><div><p>${ssrInterpolate(moder.id)}</p><p>${ssrInterpolate(moder.name)}</p></div><div><button>Снять модерку</button></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Moders.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$Y
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$X = /* @__PURE__ */ Object.assign({
  layout: PanelLayout
}, {
  __name: "Object",
  __ssrInlineRender: true,
  props: {
    report_to: null,
    report: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><header><p> id: ${ssrInterpolate(__props.report_to.id)}</p><p>${ssrInterpolate(__props.report_to)}</p><p>`);
      if (__props.report_to.image) {
        _push(`<img class="max-h-40"${ssrRenderAttr("src", _ctx.route("im", [__props.report_to.image, 200]))} alt="">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</p></header><main class="mt-10"><button>Удалить/Скрыть</button></main></div>`);
    };
  }
});
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Object.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$X
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$W = /* @__PURE__ */ Object.assign({
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
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/ObjectCreator.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$W
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$V = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-width="0%" fill-rule="evenodd" clip-rule="evenodd" d="M20.9785 11.7357C20.9785 6.33523 16.5963 3 11.7354 3C6.88311 3 2.51763 6.32292 2.50005 11.7031C2.48248 17.0833 6.76886 20.4714 11.7355 20.4714C13.0417 20.4714 14.0893 20.4051 15.3548 19.9014C15.5465 19.8251 15.862 19.8188 16.1651 19.9204L19.2093 20.9339C19.9267 21.1504 20.5717 20.8103 20.9319 20.4531C21.3065 20.0816 21.6386 19.436 21.4434 18.712L21.4358 18.6837L20.438 15.6919C20.3381 15.3024 20.3386 14.8517 20.4207 14.622L20.4764 14.4673C20.7531 13.6993 20.9785 13.0739 20.9785 11.7357ZM11.7354 5C7.75362 5 4.5 7.65258 4.5 11.7357C4.5 15.8188 7.75363 18.4714 11.7355 18.4714C12.9558 18.4714 13.7021 18.4066 14.6152 18.0432C15.3465 17.7521 16.163 17.8105 16.8001 18.0239L19.3958 18.8887L18.5213 16.2665L18.5137 16.2382C18.3459 15.6163 18.2678 14.7027 18.5376 13.9484C18.5585 13.8899 18.5788 13.8338 18.5983 13.7797C18.8443 13.0977 18.9785 12.7257 18.9785 11.7357C18.9785 7.65369 15.7185 5 11.7354 5Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconComments.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const IconComments = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["ssrRender", _sfc_ssrRender$k]]);
const _sfc_main$U = {
  props: {
    films: null
  }
};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.films.length) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-center" }, _attrs))}><img${ssrRenderAttr("src", $props.films[2].poster_url_preview)} class="z-0 rounded-lg absolute ml-4 hover:ml-8 duration-200" style="${ssrRenderStyle({ "width": "34px", "height": "34px" })}"><img${ssrRenderAttr("src", $props.films[1].poster_url_preview)} class="z-5 rounded-lg absolute ml-2 hover:ml-4 duration-200" style="${ssrRenderStyle({ "width": "37px", "height": "37px" })}"><img${ssrRenderAttr("src", $props.films[0].poster_url_preview)} class="z-10 block rounded-lg w-full" style="${ssrRenderStyle({ "width": "40px", "height": "40px" })}"></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconFilms.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const IconFilms = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["ssrRender", _sfc_ssrRender$j]]);
const _sfc_main$T = {
  __name: "Reputation",
  __ssrInlineRender: true,
  props: {
    type: {
      required: true,
      default: null
    },
    reputation: null
  },
  setup(__props) {
    inject("callModal");
    const props = __props;
    usePage();
    const current_action = ref(props.reputation.action ?? null);
    const up = ref(props.reputation.up);
    const down = ref(props.reputation.down);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-sm flex" }, _attrs))}><div class="inline-block hover:text-green-700 flex items-center me-2"><span class="me-1">${ssrInterpolate(up.value)}</span><button class="${ssrRenderClass([current_action.value == "up" ? "text-green-500" : "", "p-1 rounded-full text-green-300 hover:text-green-500 hover:bg-green-100"])}">`);
      _push(ssrRenderComponent(IconUp, { class: "w-6 h-6" }, null, _parent));
      _push(`</button></div><div class="inline-block hover:text-red-700 flex items-center"><span class="me-1">${ssrInterpolate(down.value)}</span><button class="${ssrRenderClass([current_action.value == "down" ? "text-red-500" : "", "p-1 rounded-full hover:bg-red-100 text-red-300 hover:text-red-500"])}">`);
      _push(ssrRenderComponent(IconDown, { class: "w-6 h-6" }, null, _parent));
      _push(`</button></div></div>`);
    };
  }
};
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Reputation.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const _sfc_main$S = {
  props: {
    post: null,
    mode: null
  },
  components: { Reputation: _sfc_main$T, IconComments, IconFilms }
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_IconFilms = resolveComponent("IconFilms");
  const _component_Reputation = resolveComponent("Reputation");
  const _component_IconComments = resolveComponent("IconComments");
  const _directive_lazy = resolveDirective("lazy");
  _push(ssrRenderComponent(_component_Link, mergeProps({
    href: $props.mode == null ? _ctx.route("post", [$props.post.id, $props.post.slug]) : _ctx.route("post.edit", [$props.post.id, $props.post.slug])
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="rounded-xl mt-5 inline-block border"${_scopeId}><div class="absolute"${_scopeId}><div class="opacity-70 hover:opacity-100 duration-200 m-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_IconFilms, {
          films: $props.post.films
        }, null, _parent2, _scopeId));
        _push2(`</div></div><img${ssrRenderAttrs(mergeProps({
          alt: "Image",
          class: "rounded-t-xl mx-auto w-full object-cover",
          style: { "width": "400px", "height": "225px" }
        }, ssrGetDirectiveProps(_ctx, _directive_lazy, _ctx.route("image.crop", [$props.post.id, "400x225"]))))}${_scopeId}><div class="p-5 max-h-24 max-w-xs whitespace-nowrap overflow-hidden text-ellipsis"${_scopeId}><p class="text-sky-700 text-xl"${_scopeId}>${ssrInterpolate($props.post.title)}</p><p class="text-sm text-slate-900 overflow-hidden text-ellipsis"${_scopeId}>${$props.post.description}</p></div><footer class="m-0 px-5 py-2 flex justify-between"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Reputation, {
          reputation: $props.post.reputation
        }, null, _parent2, _scopeId));
        _push2(`<div class="flex items-center text-slate-800"${_scopeId}><span class="text-sm"${_scopeId}>${ssrInterpolate($props.post.comments_count)}</span><span class="inline-block"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_IconComments, null, null, _parent2, _scopeId));
        _push2(`</span></div></footer></div>`);
      } else {
        return [
          createVNode("div", { class: "rounded-xl mt-5 inline-block border" }, [
            createVNode("div", { class: "absolute" }, [
              createVNode("div", { class: "opacity-70 hover:opacity-100 duration-200 m-2" }, [
                createVNode(_component_IconFilms, {
                  films: $props.post.films
                }, null, 8, ["films"])
              ])
            ]),
            withDirectives(createVNode("img", {
              alt: "Image",
              class: "rounded-t-xl mx-auto w-full object-cover",
              style: { "width": "400px", "height": "225px" }
            }, null, 512), [
              [_directive_lazy, _ctx.route("image.crop", [$props.post.id, "400x225"])]
            ]),
            createVNode("div", { class: "p-5 max-h-24 max-w-xs whitespace-nowrap overflow-hidden text-ellipsis" }, [
              createVNode("p", { class: "text-sky-700 text-xl" }, toDisplayString($props.post.title), 1),
              createVNode("p", {
                class: "text-sm text-slate-900 overflow-hidden text-ellipsis",
                innerHTML: $props.post.description
              }, null, 8, ["innerHTML"])
            ]),
            createVNode("footer", { class: "m-0 px-5 py-2 flex justify-between" }, [
              createVNode(_component_Reputation, {
                reputation: $props.post.reputation
              }, null, 8, ["reputation"]),
              createVNode("div", { class: "flex items-center text-slate-800" }, [
                createVNode("span", { class: "text-sm" }, toDisplayString($props.post.comments_count), 1),
                createVNode("span", { class: "inline-block" }, [
                  createVNode(_component_IconComments)
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Compilation.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const Compilation = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["ssrRender", _sfc_ssrRender$i]]);
const _sfc_main$R = {
  props: {
    posts: null
  },
  components: { Compilation }
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Posts.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const Posts = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["ssrRender", _sfc_ssrRender$h]]);
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Posts
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$Q = {
  inject: ["foo"]
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`${ssrInterpolate($options.foo)}`);
}
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Tags.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const Tags = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["ssrRender", _sfc_ssrRender$g]]);
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tags
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$P = /* @__PURE__ */ Object.assign({
  layout: PanelLayout
}, {
  __name: "Users",
  __ssrInlineRender: true,
  props: {
    users: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(__props.users, (user) => {
        _push(`<div class="flex justify-between items-center"><div>${ssrInterpolate(user.name)}</div><div><button> Забанить </button></div></div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Users.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$P
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$O = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center" }, _attrs))}><div><svg class="ms-6" width="113" height="79" viewBox="0 0 113 79" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_1661_141952)"><rect x="6.57104" y="15.4209" width="58.7273" height="48.6818" rx="6.18182" transform="rotate(-12.9953 6.57104 15.4209)" fill="white" shape-rendering="crispEdges"></rect><rect x="13.9846" y="20.0547" width="38.6364" height="3.09091" rx="1.54545" transform="rotate(-12.9953 13.9846 20.0547)" fill="url(#paint0_linear_1661_141952)" fill-opacity="0.24"></rect><rect x="15.2012" y="25.3252" width="30.9091" height="3.09091" rx="1.54545" transform="rotate(-12.9953 15.2012 25.3252)" fill="url(#paint1_linear_1661_141952)" fill-opacity="0.24"></rect><rect x="16.4172" y="30.5957" width="23.1818" height="3.09091" rx="1.54545" transform="rotate(-12.9953 16.4172 30.5957)" fill="url(#paint2_linear_1661_141952)" fill-opacity="0.24"></rect><rect x="17.9812" y="37.3721" width="46.3636" height="18.5455" rx="3.09091" transform="rotate(-12.9953 17.9812 37.3721)" fill="rgb(242 242 242)"></rect><rect x="17.9812" y="37.3721" width="46.3636" height="18.5455" rx="3.09091" transform="rotate(-12.9953 17.9812 37.3721)" fill="var(--theme-color-text-primary)" fill-opacity="0.05"></rect><rect x="6.80272" y="15.5657" width="58.3409" height="48.2955" rx="5.98864" transform="rotate(-12.9953 6.80272 15.5657)" stroke="var(--theme-color-text-primary)" stroke-opacity="0.05" stroke-width="0.386364" shape-rendering="crispEdges"></rect></g><g filter="url(#filter1_d_1661_141952)"><rect x="54.2434" y="4.9541" width="58.7273" height="48.6818" rx="6.18182" transform="rotate(20 54.2434 4.9541)" fill="white" shape-rendering="crispEdges"></rect><rect x="57.9382" y="12.877" width="38.6364" height="3.09091" rx="1.54545" transform="rotate(20 57.9382 12.877)" fill="url(#paint3_linear_1661_141952)" fill-opacity="0.24"></rect><rect x="56.0884" y="17.96" width="30.9091" height="3.09091" rx="1.54545" transform="rotate(20 56.0884 17.96)" fill="url(#paint4_linear_1661_141952)" fill-opacity="0.24"></rect><rect x="54.238" y="23.043" width="23.1818" height="3.09091" rx="1.54545" transform="rotate(20 54.238 23.043)" fill="url(#paint5_linear_1661_141952)" fill-opacity="0.24"></rect><rect x="51.8596" y="29.5781" width="46.3636" height="18.5455" rx="3.09091" transform="rotate(20 51.8596 29.5781)" fill="rgb(242 242 242)"></rect><rect x="51.8596" y="29.5781" width="46.3636" height="18.5455" rx="3.09091" transform="rotate(20 51.8596 29.5781)" fill="var(--theme-color-text-primary)" fill-opacity="0.05"></rect><rect x="54.3589" y="5.20171" width="58.3409" height="48.2955" rx="5.98864" transform="rotate(20 54.3589 5.20171)" stroke="var(--theme-color-text-primary)" stroke-opacity="0.05" stroke-width="0.386364" shape-rendering="crispEdges"></rect></g><defs><filter id="filter0_d_1661_141952" x="-1.15623" y="-0.876065" width="80.534" height="73.0043" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="-1.54545" dy="3.09091"></feOffset><feGaussianBlur stdDeviation="3.09091"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1661_141952"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1661_141952" result="shape"></feBlend></filter><filter id="filter1_d_1661_141952" x="29.866" y="1.86319" width="84.1993" height="78.1957" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="-1.54545" dy="3.09091"></feOffset><feGaussianBlur stdDeviation="3.09091"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1661_141952"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1661_141952" result="shape"></feBlend></filter><linearGradient id="paint0_linear_1661_141952" x1="33.3028" y1="20.0547" x2="33.3028" y2="23.1456" gradientUnits="userSpaceOnUse"><stop stop-color="#E1E1E1"></stop><stop offset="0.0001" stop-color="#D6D6D6"></stop><stop offset="1" stop-color="#393939"></stop></linearGradient><linearGradient id="paint1_linear_1661_141952" x1="30.6557" y1="25.3252" x2="30.6557" y2="28.4161" gradientUnits="userSpaceOnUse"><stop stop-color="#E1E1E1"></stop><stop offset="0.0001" stop-color="#D6D6D6"></stop><stop offset="1" stop-color="#393939"></stop></linearGradient><linearGradient id="paint2_linear_1661_141952" x1="28.0081" y1="30.5957" x2="28.0081" y2="33.6866" gradientUnits="userSpaceOnUse"><stop stop-color="#E1E1E1"></stop><stop offset="0.0001" stop-color="#D6D6D6"></stop><stop offset="1" stop-color="#393939"></stop></linearGradient><linearGradient id="paint3_linear_1661_141952" x1="77.2564" y1="12.877" x2="77.2564" y2="15.9679" gradientUnits="userSpaceOnUse"><stop stop-color="#E1E1E1"></stop><stop offset="0.0001" stop-color="#D6D6D6"></stop><stop offset="1" stop-color="#393939"></stop></linearGradient><linearGradient id="paint4_linear_1661_141952" x1="71.5429" y1="17.96" x2="71.5429" y2="21.0509" gradientUnits="userSpaceOnUse"><stop stop-color="#E1E1E1"></stop><stop offset="0.0001" stop-color="#D6D6D6"></stop><stop offset="1" stop-color="#393939"></stop></linearGradient><linearGradient id="paint5_linear_1661_141952" x1="65.8289" y1="23.043" x2="65.8289" y2="26.1339" gradientUnits="userSpaceOnUse"><stop stop-color="#E1E1E1"></stop><stop offset="0.0001" stop-color="#D6D6D6"></stop><stop offset="1" stop-color="#393939"></stop></linearGradient></defs></svg><p class="text-17px text-secondary mt-4 mb-40"> Здесь пока ничего нет </p></div></div>`);
}
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/EmptyFeed.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const EmptyFeed = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["ssrRender", _sfc_ssrRender$f]]);
const _sfc_main$N = {
  __name: "InfiniteScrollContainer",
  __ssrInlineRender: true,
  emits: ["load"],
  setup(__props, { emit: __emit }) {
    const container = ref(null);
    ref(null);
    const diff = ref(2e3);
    const handleScroll = () => {
      var _a;
      if (document.documentElement.scrollTop >= ((_a = container.value) == null ? void 0 : _a.scrollHeight) - diff.value) {
        emit("load");
      }
    };
    const interval = ref(null);
    const containerTop = computed(() => {
      if (container.value.scrollTop == document.documentElement.scrollTop) {
        return Math.max(
          window.pageYOffset || 0,
          document.documentElement.scrollTop
        );
      }
      return container.value.getBoundingClientRect().top + Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
    });
    onMounted(() => {
      handleScroll();
      interval.value = setInterval(() => {
        if (document.documentElement.scrollTop >= containerTop.value) {
          handleScroll();
        }
      }, 200);
    });
    onUnmounted(() => clearInterval(interval.value));
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "container",
        ref: container
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InfiniteScrollContainer.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const _sfc_main$M = {
  __name: "LinkIcon",
  __ssrInlineRender: true,
  props: {
    href: {
      required: false,
      type: String
    },
    class: null,
    text: null
  },
  setup(__props) {
    const isHovered = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inline-block p-1" }, _attrs))}><div class="inline-block hover:text-orange-700 flex items-center"><div class="flex items-center"><div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: __props.href ?? "",
        onMouseenter: ($event) => isHovered.value = true,
        onMouseleave: ($event) => isHovered.value = false,
        class: ["stroke-secondary hover:stroke-orange-700 flex items-center", { "stroke-orange-700": isHovered.value }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([{
              "bg-orange-100": isHovered.value,
              "text-secondary": !isHovered.value
            }, "inline-block hover:text-orange-700 hover:bg-orange-100 rounded-full p-1 duration-0"])}"${_scopeId}><div class="${ssrRenderClass(__props.class)}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", { class: __props.class }, null, _push2, _parent2, _scopeId);
            _push2(`</div></div><span class="ms-1"${_scopeId}>${ssrInterpolate(__props.text)}</span>`);
          } else {
            return [
              createVNode("div", {
                class: ["inline-block hover:text-orange-700 hover:bg-orange-100 rounded-full p-1 duration-0", {
                  "bg-orange-100": isHovered.value,
                  "text-secondary": !isHovered.value
                }]
              }, [
                createVNode("div", { class: __props.class }, [
                  renderSlot(_ctx.$slots, "default", { class: __props.class })
                ], 2)
              ], 2),
              createVNode("span", { class: "ms-1" }, toDisplayString(__props.text), 1)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/LinkIcon.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const _sfc_main$L = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconArrowForwardUp.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const IconArrowForwardUp = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$K = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor"
  }, _attrs))}><path stroke-width="0%" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8.00293 5.49994C8.00293 4.12061 9.1211 3.00244 10.5004 3.00244H13.5004C14.8798 3.00244 15.9979 4.12061 15.9979 5.49994V6.50244H20.0004C20.5513 6.50244 20.9979 6.94904 20.9979 7.49994C20.9979 8.05085 20.5513 8.49744 20.0004 8.49744H19.4744L18.3244 17.506C18.0696 19.5018 16.3711 20.9972 14.3591 20.9972H9.64179C7.62975 20.9972 5.93127 19.5018 5.67647 17.506L4.52643 8.49744H4.00043C3.44953 8.49744 3.00293 8.05085 3.00293 7.49994C3.00293 6.94904 3.44953 6.50244 4.00043 6.50244H8.00293V5.49994ZM9.99793 6.50244H14.0029V5.49994C14.0029 5.22242 13.778 4.99744 13.5004 4.99744H10.5004C10.2229 4.99744 9.99793 5.22242 9.99793 5.49994V6.50244ZM6.53762 8.49744L7.65541 17.2533C7.78305 18.2531 8.63388 19.0022 9.64179 19.0022H14.3591C15.367 19.0022 16.2178 18.2531 16.3454 17.2533L17.4632 8.49744H6.53762ZM10.0004 10.2524C10.5513 10.2524 10.9979 10.699 10.9979 11.2499V15.7499C10.9979 16.3008 10.5513 16.7474 10.0004 16.7474C9.44953 16.7474 9.00293 16.3008 9.00293 15.7499V11.2499C9.00293 10.699 9.44953 10.2524 10.0004 10.2524ZM14.0004 10.2524C14.5513 10.2524 14.9979 10.699 14.9979 11.2499V15.7499C14.9979 16.3008 14.5513 16.7474 14.0004 16.7474C13.4495 16.7474 13.0029 16.3008 13.0029 15.7499V11.2499C13.0029 10.699 13.4495 10.2524 14.0004 10.2524Z"></path></svg>`);
}
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconTrash.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const IconTrash = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$J = {
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
  components: { IconArrowForwardUp, IconHeart, IconComments, LazyImage: _sfc_main$1S }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UserTabletWithElementInside.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const UserTabletWithElementInside = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$I = {
  __name: "DropdownReportOrManage",
  __ssrInlineRender: true,
  props: {
    user: null,
    post: null
  },
  setup(__props) {
    const props = __props;
    const showReportModal = ref(false);
    const injectedCallModal = inject("callModal");
    const editPost = async () => {
      const url = new URL(window.location.href);
      url.searchParams.append("modal", "Editor");
      url.searchParams.append("id", props.post.id);
      window.history.pushState(null, null, url);
      router.reload({
        preserveState: false,
        onSuccess: () => {
          return Promise.all([injectedCallModal("Editor")]);
        }
      });
    };
    const deletePost = async () => {
      axios.post(route("post.delete"), {
        _method: "DELETE",
        id: props.post.id
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1Q, null, createSlots({
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="p-1 hover:bg-gray-100 text-secondary rounded-full"${_scopeId}>`);
            _push2(ssrRenderComponent(IconDots, null, null, _parent2, _scopeId));
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", { class: "p-1 hover:bg-gray-100 text-secondary rounded-full" }, [
                createVNode(IconDots)
              ])
            ];
          }
        }),
        _: 2
      }, [
        !__props.user || __props.user.id != __props.post.user.id ? {
          name: "content",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="py-1"${_scopeId}><button class="text-base text-black hover:bg-neutral-100 rounded-lg px-5"${_scopeId}>`);
              _push2(ssrRenderComponent(IconFlag, { class: "stroke-2 inline-block me-2 w-5 h-5" }, null, _parent2, _scopeId));
              _push2(`<button${_scopeId}> Пожаловаться </button></button></div>`);
            } else {
              return [
                createVNode("div", { class: "py-1" }, [
                  createVNode("button", { class: "text-base text-black hover:bg-neutral-100 rounded-lg px-5" }, [
                    createVNode(IconFlag, { class: "stroke-2 inline-block me-2 w-5 h-5" }),
                    createVNode("button", {
                      onClick: ($event) => showReportModal.value = true
                    }, " Пожаловаться ", 8, ["onClick"])
                  ])
                ])
              ];
            }
          }),
          key: "0"
        } : {
          name: "content",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="py-1 text-start text-sm"${_scopeId}><button class="text-black hover:bg-neutral-100 rounded-lg px-5 w-full text-start"${_scopeId}>`);
              _push2(ssrRenderComponent(IconPencil, { class: "w-5 h-5 me-2 inline-block" }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Редактировать</span></button><button class="text-black hover:bg-neutral-100 rounded-lg px-5 w-full text-start"${_scopeId}>`);
              _push2(ssrRenderComponent(IconTrash, { class: "w-5 h-5 me-2 inline-block" }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Удалить</span></button></div>`);
            } else {
              return [
                createVNode("div", { class: "py-1 text-start text-sm" }, [
                  createVNode("button", {
                    onClick: ($event) => editPost(),
                    class: "text-black hover:bg-neutral-100 rounded-lg px-5 w-full text-start"
                  }, [
                    createVNode(IconPencil, { class: "w-5 h-5 me-2 inline-block" }),
                    createVNode("span", null, "Редактировать")
                  ], 8, ["onClick"]),
                  createVNode("button", {
                    onClick: deletePost,
                    class: "text-black hover:bg-neutral-100 rounded-lg px-5 w-full text-start"
                  }, [
                    createVNode(IconTrash, { class: "w-5 h-5 me-2 inline-block" }),
                    createVNode("span", null, "Удалить")
                  ])
                ])
              ];
            }
          }),
          key: "1"
        }
      ]), _parent));
      _push(ssrRenderComponent(_sfc_main$14, {
        report_to_type: "post",
        report_to_id: __props.post.id,
        show: showReportModal.value,
        onClose: ($event) => showReportModal.value = !showReportModal.value
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdowns/DropdownReportOrManage.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const _sfc_main$H = {
  __name: "Bookmark",
  __ssrInlineRender: true,
  props: {
    has: {
      type: Boolean,
      default: false
    },
    count: {
      type: Number,
      default: 0
    },
    post_id: {
      type: Number,
      required: true
    }
  },
  setup(__props) {
    const callModal = inject("callModal");
    const page = usePage();
    const props = __props;
    const hasBookmark = ref(props.has);
    const countOfBookmarks = ref(props.count);
    const accept = () => {
      if (!page.props.auth.check) {
        callModal("auth");
      }
    };
    const toggleBookmark = () => {
      hasBookmark.value = !hasBookmark.value;
    };
    const setBookmark = () => {
      accept();
      toggleBookmark();
      axios$1.post(
        route("bookmark.toggle", {
          post_id: props.post_id
        })
      ).then((res) => {
        console.log(res);
        if (res.status == 200 || res.status == 201) {
          if (res.data != "") {
            hasBookmark.value = true;
            countOfBookmarks.value++;
          } else {
            hasBookmark.value = false;
            countOfBookmarks.value--;
          }
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1G, mergeProps({
        text: countOfBookmarks.value,
        onClick: setBookmark
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(IconBookmark, {
              class: ["w-5 h-5", { "text-orange-500": hasBookmark.value }]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(IconBookmark, {
                class: ["w-5 h-5", { "text-orange-500": hasBookmark.value }]
              }, null, 8, ["class"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Bookmark.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const _sfc_main$G = {
  props: {
    post: null
  },
  components: {
    Reputation: _sfc_main$T,
    IconComments,
    UserTablet,
    LinkIcon: _sfc_main$M,
    IconDots,
    Dropdown: _sfc_main$1Q,
    IconFlag,
    IconBookmark,
    IconTrash,
    IconPencil,
    IconArrowForwardUp,
    Film: _sfc_main$12,
    UserTabletWithElementInside,
    DropdownReportOrManage: _sfc_main$I,
    LazyImage: _sfc_main$1S,
    Bookmark: _sfc_main$H
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UserTabletWithElementInside = resolveComponent("UserTabletWithElementInside");
  const _component_DropdownReportOrManage = resolveComponent("DropdownReportOrManage");
  const _component_Link = resolveComponent("Link");
  const _component_LazyImage = resolveComponent("LazyImage");
  const _component_Film = resolveComponent("Film");
  const _component_Reputation = resolveComponent("Reputation");
  const _component_LinkIcon = resolveComponent("LinkIcon");
  const _component_IconComments = resolveComponent("IconComments");
  const _component_Bookmark = resolveComponent("Bookmark");
  const _component_IconArrowForwardUp = resolveComponent("IconArrowForwardUp");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-xl mb-5 sm:px-3 xs:px-1 block w-full bg-white" }, _attrs))}><header class="sm:px-2 pt-3 pb-1 flex justify-between">`);
  _push(ssrRenderComponent(_component_UserTabletWithElementInside, {
    user: $props.post.user
  }, {
    content: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="text-13px text-secondary"${_scopeId}>${ssrInterpolate($props.post.timestamp)}</p>`);
      } else {
        return [
          createVNode("p", { class: "text-13px text-secondary" }, toDisplayString($props.post.timestamp), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div>`);
  _push(ssrRenderComponent(_component_DropdownReportOrManage, {
    user: _ctx.$page.props.auth.user,
    post: $props.post
  }, null, _parent));
  _push(`</div></header>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("post", [$props.post.id, $props.post.slug])
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<section class="sm:px-3 xs:px-1 text-xl font-medium"${_scopeId}><p${_scopeId}>${ssrInterpolate($props.post.title)}</p></section><section class="sm:px-3 xs:px-1 mt-2 text-base mb-2"${_scopeId}><p${_scopeId}>${$props.post.description}</p></section><div class="${ssrRenderClass({ "p-2 sm:px-3 xs:px-1": $props.post.image })}"${_scopeId}>`);
        if ($props.post.image) {
          _push2(ssrRenderComponent(_component_LazyImage, {
            preview: `/media/${$props.post.image_preview}`,
            then: _ctx.route("im", [$props.post.image, 800]),
            class: "rounded-lg mx-auto w-full object-cover w-full",
            style: { "min-width": "auto" }
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div>`);
      } else {
        return [
          createVNode("section", { class: "sm:px-3 xs:px-1 text-xl font-medium" }, [
            createVNode("p", null, toDisplayString($props.post.title), 1)
          ]),
          createVNode("section", { class: "sm:px-3 xs:px-1 mt-2 text-base mb-2" }, [
            createVNode("p", {
              innerHTML: $props.post.description
            }, null, 8, ["innerHTML"])
          ]),
          createVNode("div", {
            class: { "p-2 sm:px-3 xs:px-1": $props.post.image }
          }, [
            $props.post.image ? (openBlock(), createBlock(_component_LazyImage, {
              key: 0,
              preview: `/media/${$props.post.image_preview}`,
              then: _ctx.route("im", [$props.post.image, 800]),
              class: "rounded-lg mx-auto w-full object-cover w-full",
              style: { "min-width": "auto" }
            }, null, 8, ["preview", "then"])) : createCommentVNode("", true)
          ], 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--[-->`);
  ssrRenderList($props.post.films, (film, index) => {
    _push(`<div class="sm:px-3 xs:px-1">`);
    if (index < 2) {
      _push(ssrRenderComponent(_component_Film, { film }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]-->`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("post", [$props.post.id, $props.post.slug, "films"])
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($props.post.films_count >= 3) {
          _push2(`<p class="mt-4 sm:px-3 xs:px-1 py-1 inline-block rounded-full text-dtfpr hover:bg-dtfpr hover:bg-opacity-10 duration-200"${_scopeId}> И еще ${ssrInterpolate(_ctx.$tc("film", $props.post.films_count - 2))} в подборке </p>`);
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          $props.post.films_count >= 3 ? (openBlock(), createBlock("p", {
            key: 0,
            class: "mt-4 sm:px-3 xs:px-1 py-1 inline-block rounded-full text-dtfpr hover:bg-dtfpr hover:bg-opacity-10 duration-200"
          }, " И еще " + toDisplayString(_ctx.$tc("film", $props.post.films_count - 2)) + " в подборке ", 1)) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<footer class="sm:px-3 xs:px-1 py-2"><div class="flex flex-col"><div class="flex items-center space-x-5 text-secondary"><div>${ssrInterpolate(_ctx.$tc("view", $props.post.views))}</div><div>${ssrInterpolate(_ctx.$tc("visit", $props.post.visits))}</div></div><div class="m-0 flex items-center"><span class="me-0">`);
  _push(ssrRenderComponent(_component_Reputation, {
    type: "Post",
    reputation: $props.post.rep
  }, null, _parent));
  _push(`</span><span class="me-2 text-slate-700">`);
  _push(ssrRenderComponent(_component_LinkIcon, {
    text: $props.post.comments_count,
    href: _ctx.route("post", [$props.post.id, $props.post.slug, "comments"])
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_IconComments, { class: "w-5 h-5" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_IconComments, { class: "w-5 h-5" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span><span class="me-2 text-slate-700">`);
  _push(ssrRenderComponent(_component_Bookmark, {
    has: $props.post.has_bookmark,
    count: $props.post.bookmarks_count,
    post_id: $props.post.id
  }, null, _parent));
  _push(`</span><span class="me-2 text-slate-700">`);
  _push(ssrRenderComponent(_component_LinkIcon, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_IconArrowForwardUp, { class: "w-6 h-6 stroke-3/2" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_IconArrowForwardUp, { class: "w-6 h-6 stroke-3/2" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span></div></div></footer></div>`);
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Post.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const Post = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$F = /* @__PURE__ */ Object.assign({ layout: MainLayout }, {
  __name: "Bookmarks",
  __ssrInlineRender: true,
  props: {
    posts: null
  },
  setup(__props) {
    const props = __props;
    const currentPage = ref(2);
    const isEnd = ref(false);
    const isLoading = ref(false);
    const loadPosts = async () => {
      await axios.get(route("me.bookmarks.get", [currentPage.value])).then((res) => {
        console.log(res);
        if (res.data.length == 0) {
          isEnd.value = true;
        } else {
          res.data.forEach((post) => {
            props.posts.push(post);
          });
        }
      });
    };
    const handleLoadEvent = async () => {
      if (!isLoading.value && !isEnd.value) {
        isLoading.value = true;
        await loadPosts();
        isLoading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Закладки</title>`);
          } else {
            return [
              createVNode("title", null, "Закладки")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$N, { onLoad: handleLoadEvent }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.posts, (post) => {
              _push2(ssrRenderComponent(Post, { post }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.posts, (post) => {
                return openBlock(), createBlock(Post, { post }, null, 8, ["post"]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!__props.posts.length) {
        _push(`<div class="mt-20">`);
        _push(ssrRenderComponent(EmptyFeed, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Bookmarks.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$F
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$E = {
  __name: "GuestLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100" }, _attrs))}><div>`);
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, {
              class: "w-20 h-20 fill-current text-gray-500",
              size: "1000x1000"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationLogo, {
                class: "w-20 h-20 fill-current text-gray-500",
                size: "1000x1000"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const _sfc_main$D = {
  __name: "InputError",
  __ssrInlineRender: true,
  props: {
    message: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: __props.message ? null : { display: "none" }
      }, _attrs))}><p class="text-sm text-red-600">${ssrInterpolate(__props.message)}</p></div>`);
    };
  }
};
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputError.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const _sfc_main$C = {
  __name: "InputLabel",
  __ssrInlineRender: true,
  props: {
    value: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "block font-medium text-sm text-gray-700" }, _attrs))}>`);
      if (__props.value) {
        _push(`<span>${ssrInterpolate(__props.value)}</span>`);
      } else {
        _push(`<span>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span>`);
      }
      _push(`</label>`);
    };
  }
};
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputLabel.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const _sfc_main$B = {
  __name: "TextInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const input = ref(null);
    onMounted(() => {
      if (input.value.hasAttribute("autofocus")) {
        input.value.focus();
      }
    });
    __expose({ focus: () => input.value.focus() });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${ssrRenderAttrs(mergeProps({
        class: "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
        value: __props.modelValue,
        ref_key: "input",
        ref: input
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TextInput.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const _sfc_main$A = {
  __name: "ConfirmPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      password: ""
    });
    const submit = () => {
      form.post(route("password.confirm"), {
        onFinish: () => form.reset()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrimaryButton = resolveComponent("PrimaryButton");
      _push(ssrRenderComponent(_sfc_main$E, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Confirm Password" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> This is a secure area of the application. Please confirm your password before continuing. </div><form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "current-password",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PrimaryButton, {
              class: ["ml-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Confirm `);
                } else {
                  return [
                    createTextVNode(" Confirm ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Confirm Password" }),
              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " This is a secure area of the application. Please confirm your password before continuing. "),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$C, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$B, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "current-password",
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex justify-end mt-4" }, [
                  createVNode(_component_PrimaryButton, {
                    class: ["ml-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Confirm ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$A
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$z = /* @__PURE__ */ Object.assign({
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
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Drafts.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$z
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$y = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: ""
    });
    const submit = () => {
      form.post(route("password.email"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrimaryButton = resolveComponent("PrimaryButton");
      _push(ssrRenderComponent(_sfc_main$E, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Forgot Password" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. </div>`);
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Email Password Reset Link `);
                } else {
                  return [
                    createTextVNode(" Email Password Reset Link ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Forgot Password" }),
              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. "),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$C, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$B, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(_component_PrimaryButton, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Email Password Reset Link ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$y
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$x = {
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    checked: {
      type: [Array, Boolean],
      required: true
    },
    value: {
      default: null
    }
  },
  emits: ["update:checked"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const proxyChecked = computed({
      get() {
        return props.checked;
      },
      set(val) {
        emit("update:checked", val);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        type: "checkbox",
        value: __props.value,
        checked: Array.isArray(proxyChecked.value) ? ssrLooseContain(proxyChecked.value, __props.value) : proxyChecked.value,
        class: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, proxyChecked.value))))}>`);
    };
  }
};
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Checkbox.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const _sfc_main$w = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.post(route("login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$E, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Войти" }, null, _parent2, _scopeId));
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "email",
              value: "Эл. почта"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "password",
              value: "Пароль"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="block mt-4"${_scopeId}><label class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$x, {
              name: "remember",
              checked: unref(form).remember,
              "onUpdate:checked": ($event) => unref(form).remember = $event
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-2 text-sm text-gray-600"${_scopeId}>Запомнить меня</span></label></div>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["mt-2 w-full", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Войти `);
                } else {
                  return [
                    createTextVNode(" Войти ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="my-2 flex justify-between"${_scopeId}>`);
            if (__props.canResetPassword) {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("register"),
                class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Еще не зарегистрированы? `);
                  } else {
                    return [
                      createTextVNode(" Еще не зарегистрированы? ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.canResetPassword) {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("password.request"),
                class: "ml-2 underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Забыли свой пароль? `);
                  } else {
                    return [
                      createTextVNode(" Забыли свой пароль? ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Войти" }),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$C, {
                    for: "email",
                    value: "Эл. почта"
                  }),
                  createVNode(_sfc_main$B, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$C, {
                    for: "password",
                    value: "Пароль"
                  }),
                  createVNode(_sfc_main$B, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "current-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "block mt-4" }, [
                  createVNode("label", { class: "flex items-center" }, [
                    createVNode(_sfc_main$x, {
                      name: "remember",
                      checked: unref(form).remember,
                      "onUpdate:checked": ($event) => unref(form).remember = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    createVNode("span", { class: "ml-2 text-sm text-gray-600" }, "Запомнить меня")
                  ])
                ]),
                createVNode(PrimaryButton, {
                  class: ["mt-2 w-full", { "opacity-25": unref(form).processing }],
                  disabled: unref(form).processing
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Войти ")
                  ]),
                  _: 1
                }, 8, ["class", "disabled"]),
                createVNode("div", { class: "my-2 flex justify-between" }, [
                  __props.canResetPassword ? (openBlock(), createBlock(unref(Link), {
                    key: 0,
                    href: _ctx.route("register"),
                    class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Еще не зарегистрированы? ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  __props.canResetPassword ? (openBlock(), createBlock(unref(Link), {
                    key: 1,
                    href: _ctx.route("password.request"),
                    class: "ml-2 underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Забыли свой пароль? ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true)
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$w
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$v = /* @__PURE__ */ Object.assign({ layout: MainLayout }, {
  __name: "Notifications",
  __ssrInlineRender: true,
  props: {
    notifications: null
  },
  setup(__props) {
    const props = __props;
    const components = reactive({
      "App\\Notifications\\CommentUpNotification": _sfc_main$1t,
      "App\\Notifications\\PostWasCommentedNotification": _sfc_main$1y,
      "App\\Notifications\\ReplyNotification": _sfc_main$1x,
      "App\\Notifications\\PostUpNotification": _sfc_main$1v
    });
    const currentPage = ref(2);
    const isLoading = ref(false);
    const isEnd = ref(false);
    const loadNotifications = async () => {
      await axios$1.get(route("me.notifications.get", [currentPage.value])).then((res) => {
        if (res.data.length == 0) {
          isEnd.value = true;
        } else {
          res.data.forEach((n2) => {
            props.notifications.push(n2);
          });
        }
      });
    };
    const handleLoadEvent = async () => {
      if (!isEnd.value && !isLoading.value) {
        isLoading.value = true;
        await loadNotifications();
        currentPage.value += 1;
        isLoading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (__props.notifications.length) {
        _push(`<div class="bg-white rounded-xl"><header class="text-lgg px-5 py-4"><p class="font-medium">Уведомления</p></header><hr><main class="px-5 py-5">`);
        _push(ssrRenderComponent(_sfc_main$N, {
          onLoad: ($event) => handleLoadEvent()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.notifications, (n2) => {
                _push2(`<div${_scopeId}>`);
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(components[n2.type]), { notification: n2 }, null), _parent2, _scopeId);
                _push2(`</div>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.notifications, (n2) => {
                  return openBlock(), createBlock("div", null, [
                    (openBlock(), createBlock(resolveDynamicComponent(components[n2.type]), { notification: n2 }, null, 8, ["notification"]))
                  ]);
                }), 256))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</main></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!__props.notifications.length) {
        _push(`<div class="mt-20">`);
        _push(ssrRenderComponent(EmptyFeed, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Notifications.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$v
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$u = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-8 h-6"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconUser.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const IconUser = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$t = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-8 h-6"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path></svg>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconMail.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const IconMail = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$s = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-8 h-6"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"></path></svg>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconShieldDanger.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const IconShieldDanger = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$r = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$E, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Зарегистрироваться" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "name",
              value: "Никнейм"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(IconUser, { class: "absolute pl-2 fill-slate-400 stroke-slate-400" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "name",
              type: "text",
              class: "mt-1 pl-10 block w-full",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              required: "",
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "email",
              value: "Эл. почта"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(IconMail, { class: "absolute pl-2 fill-slate-400 stroke-white" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "email",
              type: "email",
              class: "mt-1 pl-10 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "password",
              value: "Пароль"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(IconShieldDanger, { class: "absolute pl-2 fill-slate-400 stroke-white stroke-2" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "password",
              type: "password",
              class: "mt-1 pl-10 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "password_confirmation",
              value: "Подтвердить пароль"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(IconShieldDanger, { class: "absolute pl-2 fill-slate-400 stroke-white stroke-2" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 pl-10 block w-full",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("login"),
              class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Уже зарегистрированы? `);
                } else {
                  return [
                    createTextVNode(" Уже зарегистрированы? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["ml-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Зарегистрироваться `);
                } else {
                  return [
                    createTextVNode(" Зарегистрироваться ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Зарегистрироваться" }),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$C, {
                    for: "name",
                    value: "Никнейм"
                  }),
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode(IconUser, { class: "absolute pl-2 fill-slate-400 stroke-slate-400" }),
                    createVNode(_sfc_main$B, {
                      id: "name",
                      type: "text",
                      class: "mt-1 pl-10 block w-full",
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      required: "",
                      autofocus: "",
                      autocomplete: "name"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.name
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$C, {
                    for: "email",
                    value: "Эл. почта"
                  }),
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode(IconMail, { class: "absolute pl-2 fill-slate-400 stroke-white" }),
                    createVNode(_sfc_main$B, {
                      id: "email",
                      type: "email",
                      class: "mt-1 pl-10 block w-full",
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      required: "",
                      autocomplete: "username"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$C, {
                    for: "password",
                    value: "Пароль"
                  }),
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode(IconShieldDanger, { class: "absolute pl-2 fill-slate-400 stroke-white stroke-2" }),
                    createVNode(_sfc_main$B, {
                      id: "password",
                      type: "password",
                      class: "mt-1 pl-10 block w-full",
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      required: "",
                      autocomplete: "new-password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$C, {
                    for: "password_confirmation",
                    value: "Подтвердить пароль"
                  }),
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode(IconShieldDanger, { class: "absolute pl-2 fill-slate-400 stroke-white stroke-2" }),
                    createVNode(_sfc_main$B, {
                      id: "password_confirmation",
                      type: "password",
                      class: "mt-1 pl-10 block w-full",
                      modelValue: unref(form).password_confirmation,
                      "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                      required: "",
                      autocomplete: "new-password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.password_confirmation
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("login"),
                    class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Уже зарегистрированы? ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(PrimaryButton, {
                    class: ["ml-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Зарегистрироваться ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$r
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    email: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("password.store"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PrimaryButton = resolveComponent("PrimaryButton");
      _push(ssrRenderComponent(_sfc_main$E, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Reset Password" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$C, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$B, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$D, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Сбросить пароль `);
                } else {
                  return [
                    createTextVNode(" Сбросить пароль ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Reset Password" }),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$C, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$B, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$C, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$B, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$C, {
                    for: "password_confirmation",
                    value: "Confirm Password"
                  }),
                  createVNode(_sfc_main$B, {
                    id: "password_confirmation",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$D, {
                    class: "mt-2",
                    message: unref(form).errors.password_confirmation
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(_component_PrimaryButton, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Сбросить пароль ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$q
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$p = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    class: "icon icon-tabler icon-tabler-arrow-narrow-left",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, _attrs))}><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M5 12l4 4"></path><path d="M5 12l4 -4"></path></svg>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconArrowLeft.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const IconArrowLeft = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$o = {
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
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Settings/SettingsLayout.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$o
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$n = /* @__PURE__ */ Object.assign({ layout: [MainLayout, _sfc_main$o] }, {
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
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Settings/Index.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$n
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = /* @__PURE__ */ Object.assign({ layout: [MainLayout, _sfc_main$o] }, {
  __name: "Profile",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const form = reactive({
      username: page.props.auth.user.name,
      description: page.props.auth.user.description
    });
    const isUpdated = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-8" }, _attrs))}><div><p class="font-medium pb-4 ms-1">Имя</p>`);
      _push(ssrRenderComponent(_sfc_main$1n, {
        modelValue: form.username,
        "onUpdate:modelValue": ($event) => form.username = $event
      }, null, _parent));
      _push(`</div><div class="mt-4"><p class="font-medium pb-4 ms-1">Описание</p>`);
      _push(ssrRenderComponent(_sfc_main$1k, {
        modelValue: form.description,
        "onUpdate:modelValue": ($event) => form.description = $event,
        placeholder: "Пара_слов_о_себе"
      }, null, _parent));
      _push(`</div><div class="ms-1 flex justify-between items-center mt-5"><button class="font-semibold text-orange-500 hover:opacity-70"> Сохранить </button><div class="flex items-center" style="${ssrRenderStyle(isUpdated.value ? null : { display: "none" })}"><p>Сохранено</p>`);
      _push(ssrRenderComponent(IconCheck, { class: "ms-1 w-4 h-4" }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Settings/Profile.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$m
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$l = {
  __name: "VerifyEmail",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({});
    const submit = () => {
      form.post(route("verification.send"));
    };
    const verificationLinkSent = computed(
      () => props.status === "verification-link-sent"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$E, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Email Verification" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn&#39;t receive the email, we will gladly send you another. </div>`);
            if (verificationLinkSent.value) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}> A new verification link has been sent to the email address you provided during registration. </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div class="mt-4 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Resend Verification Email `);
                } else {
                  return [
                    createTextVNode(" Resend Verification Email ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("logout"),
              method: "post",
              as: "button",
              class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Log Out`);
                } else {
                  return [
                    createTextVNode("Log Out")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Email Verification" }),
              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. "),
              verificationLinkSent.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600"
              }, " A new verification link has been sent to the email address you provided during registration. ")) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", { class: "mt-4 flex items-center justify-between" }, [
                  createVNode(PrimaryButton, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Resend Verification Email ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"]),
                  createVNode(unref(Link), {
                    href: _ctx.route("logout"),
                    method: "post",
                    as: "button",
                    class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Log Out")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$l
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(` Ваш аккаунт заблокирован. `);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Banned.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const Banned = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$6]]);
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Banned
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$j = /* @__PURE__ */ Object.assign({ layout: MainLayout }, {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    posts: null,
    close_window_token: null,
    close_auth_modal: false
  },
  setup(__props) {
    const props = __props;
    const page = usePage();
    onMounted(() => {
      var _a;
      console.log(page);
      if (((_a = page.props) == null ? void 0 : _a.close_window_token) == props.close_window_token && props.close_window_token != null) {
        window.opener.postMessage("auth.window.closed", "*");
        window.close();
      }
      if (props.close_auth_modal) {
        const channel = new BroadcastChannel("auth.modal");
        channel.postMessage("close");
        window.close();
      }
    });
    const posts = ref(props.posts);
    const current_page = ref(2);
    const isEndOfFeed = ref(false);
    const isLoading = ref(false);
    const handleLoadEvent = async () => {
      if (!isLoading.value && !isEndOfFeed.value) {
        isLoading.value = true;
        await loadPosts();
        isLoading.value = false;
        current_page.value++;
      }
    };
    const loadPosts = async () => {
      await axios$1.get(route("posts.popular", [current_page.value])).catch((res) => {
        console.log(res);
      }).then((res) => {
        console.log(res);
        if (res.status == 200) {
          if (res.data.length == 0) {
            isEndOfFeed.value = true;
          }
          res.data.forEach((post) => {
            posts.value.push(post);
          });
          console.log(posts.value);
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Head = resolveComponent("Head");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Популярное</title><meta name="description" content="Здесь делают подборки фильмов."${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Популярное"),
              createVNode("meta", {
                name: "description",
                content: "Здесь делают подборки фильмов."
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$N, {
        onLoad: ($event) => handleLoadEvent()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(posts.value, (post) => {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(Post, { post }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(posts.value, (post) => {
                return openBlock(), createBlock("div", null, [
                  createVNode(Post, { post }, null, 8, ["post"])
                ]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (((_a = posts.value) == null ? void 0 : _a.length) == 0 && !isLoading.value) {
        _push(`<div class="mt-20 mb-20">`);
        _push(ssrRenderComponent(EmptyFeed, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/Index.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$j
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = /* @__PURE__ */ Object.assign({ layout: MainLayout }, {
  __name: "New",
  __ssrInlineRender: true,
  props: {
    posts: null
  },
  setup(__props) {
    const props = __props;
    const posts = ref(props.posts);
    const current_page = ref(2);
    const isEndOfFeed = ref(false);
    const isLoading = ref(false);
    const handleLoadEvent = async () => {
      if (isLoading.value == false && isEndOfFeed.value == false) {
        isLoading.value = true;
        await loadPosts();
      }
    };
    const loadPosts = async () => {
      await axios$1.get(route("posts.new", [current_page.value])).catch((res) => {
        console.log(res);
      }).then((res) => {
        console.log(res);
        if (res.status == 200) {
          if (res.data.length == 0) {
            isEndOfFeed.value = true;
          } else {
            current_page.value++;
          }
          res.data.forEach((post) => {
            posts.value.push(post);
          });
          console.log(posts.value);
          isLoading.value = false;
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Последние подборки</title>`);
          } else {
            return [
              createVNode("title", null, "Последние подборки")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$N, {
        onLoad: ($event) => handleLoadEvent()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(posts.value, (post) => {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(Post, { post }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(posts.value, (post) => {
                return openBlock(), createBlock("div", null, [
                  createVNode(Post, { post }, null, 8, ["post"])
                ]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (posts.value.length == 0 && !isLoading.value) {
        _push(`<div class="mt-20 mb-20">`);
        _push(ssrRenderComponent(EmptyFeed, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/New.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __vite_glob_0_27 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$i
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {
  props: {
    karma: null
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Base = resolveComponent("Base");
  _push(ssrRenderComponent(_component_Base, mergeProps({ title: "Нет прав доступа" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="mt-5"${_scopeId}>Вы не можете публиковать подборки.</p><main class="my-5 p-5 shadow rounded-xl"${_scopeId}><p class="text-sm"${_scopeId}> У вас слишком маленькая репутация (${ssrInterpolate($props.karma)}), чтобы публиковать подборки. </p></main>`);
      } else {
        return [
          createVNode("p", { class: "mt-5" }, "Вы не можете публиковать подборки."),
          createVNode("main", { class: "my-5 p-5 shadow rounded-xl" }, [
            createVNode("p", { class: "text-sm" }, " У вас слишком маленькая репутация (" + toDisplayString($props.karma) + "), чтобы публиковать подборки. ", 1)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Karma/Forbidden.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const Forbidden = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$5]]);
const __vite_glob_0_28 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Forbidden
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {
  __name: "ZoomableImage",
  __ssrInlineRender: true,
  props: {
    class: null,
    preview: null,
    then: null,
    style: null
  },
  setup(__props) {
    const showZoomedImage = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><main class="cursor-zoom-in inline-block">`);
      _push(ssrRenderComponent(_sfc_main$1S, {
        preview: __props.preview,
        then: __props.then,
        class: __props.class,
        style: __props.style
      }, null, _parent));
      _push(`</main><section style="${ssrRenderStyle(showZoomedImage.value ? null : { display: "none" })}" class="fixed inset-0 z-50 w-full bg-black bg-opacity-60 flex items-center"><div class="mx-auto text-center duration-200 select-none">`);
      _push(ssrRenderComponent(_sfc_main$1S, {
        class: "mx-auto w-1/2 hover:w-full",
        preview: __props.preview,
        then: __props.then
      }, null, _parent));
      _push(`</div></section><!--]-->`);
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ZoomableImage.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  props: {
    karma: null
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<p${ssrRenderAttrs(mergeProps({
    class: ["font-medium", $props.karma > 0 ? "text-green-500" : $props.karma == 0 ? "" : "text-red-500"]
  }, _attrs))}>${ssrInterpolate($props.karma > 0 ? "+" : $props.karma == 0 ? "" : "")} ${ssrInterpolate($props.karma)} <span class="ms-2"></span></p>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/KarmaCountWithEmoji.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const KarmaCountWithEmoji = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$e = {
  __name: "PageProfileLayout",
  __ssrInlineRender: true,
  props: {
    user: null,
    karma: null,
    section: null
  },
  setup(__props) {
    const props = __props;
    const injectedCallMessage = inject("callMessage");
    instance.setCallbackFunction(injectedCallMessage);
    const page = usePage();
    const selectedSection = ref(parseInt(props.section.value));
    const linkWidth = ref(null);
    const linkPosition = ref(null);
    const linkFirst = ref(null);
    const linkSecond = ref(null);
    watch(
      () => props.section,
      () => {
        selectedSection.value = props.section;
      }
    );
    const setLinkWidth = (index) => {
      if (index == 1) {
        linkWidth.value = linkFirst.value.clientWidth;
      } else {
        linkWidth.value = linkSecond.value.clientWidth;
      }
    };
    const setLinkPosition = (index) => {
      if (index == 1)
        linkPosition.value = 0;
      else
        linkPosition.value = linkSecond.value.clientWidth - 10;
    };
    watch(selectedSection, () => {
      setLinkWidth(selectedSection.value);
      setLinkPosition(selectedSection.value);
    });
    onMounted(() => {
      setTimeout(() => {
        backgroundImageIsHovered.value = false;
        avatarIsHovered.value = false;
      }, 200);
      selectedSection.value = props.section;
    });
    const avatarIsHovered = ref(false);
    const backgroundImageIsHovered = ref(false);
    ref(null);
    ref(null);
    const showUploadAvatar = computed(() => {
      if (page.props.auth.check && page.props.auth.user.id == props.user.id) {
        return avatarIsHovered.value;
      }
      return false;
    });
    const showUploadBackground = computed(() => {
      if (page.props.auth.check && page.props.auth.user.id == props.user.id) {
        return backgroundImageIsHovered.value;
      }
      return false;
    });
    const avatarIsUploading = ref(false);
    const backgroundImageIsUploading = ref(false);
    const isUploaded = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_Head = resolveComponent("Head");
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Страница ${ssrInterpolate(__props.user.name)}</title>`);
          } else {
            return [
              createVNode("title", null, "Страница " + toDisplayString(__props.user.name), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="max-w-screen"><div class="bg-white rounded-xl"><div class="flex"><input type="file" class="hidden" accept="image/png, image/jpeg, image/jpg, image/webp">`);
      if (showUploadBackground.value) {
        _push(`<div class="absolute bg-black bg-opacity-20 rounded-t-xl flex items-center cursor-pointer aspect-[640/200] w-[640px]">`);
        _push(ssrRenderComponent(IconPhoto, { class: "w-10 h-10 mx-auto stroke-4 border-white" }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.user.background_image && !backgroundImageIsUploading.value) {
        _push(`<div class="overflow-hidden">`);
        _push(ssrRenderComponent(_sfc_main$1S, {
          onMouseenter: ($event) => backgroundImageIsHovered.value = true,
          preview: `/media/${!isUploaded.value ? __props.user.background_image_preview : __props.user.background_image}`,
          then: _ctx.route("im", [__props.user.background_image, 1e3]),
          class: "appearance-none bg-zinc-200 aspect-[640/200] w-full rounded-t-xl object-cover xs:w-screen"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="appearance-none bg-zinc-200 aspect-[640/200] w-full rounded-t-xl object-cover">`);
        if (backgroundImageIsUploading.value) {
          _push(`<div>`);
          _push(ssrRenderComponent(_sfc_main$1S, {
            onMouseenter: ($event) => backgroundImageIsHovered.value = true,
            preview: __props.user.background_image,
            then: __props.user.background_image,
            class: "appearance-none bg-zinc-200 aspect-[640/200] w-full rounded-t-xl object-cover xs:w-screen"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div><div class="sm:px-5 xs:px-2 pb-2"><div class="flex justify-between items-center"><div class="mt-[-32px]">`);
      if (avatarIsUploading.value) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$g, {
          preview: props.user.avatar,
          then: props.user.avatar,
          class: "border-gray-100 border-[3.5px] rounded-full w-[90px] h-[90px] object-cover",
          style: { "width": "90px", "height": "90px" }
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_a = unref(page).props.auth.user) == null ? void 0 : _a.id) != __props.user.id && !avatarIsUploading.value) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$g, {
          preview: "/media/" + __props.user.avatar_preview,
          then: _ctx.route("im", [__props.user.avatar, "1000"]),
          class: "border-gray-100 border-[3.5px] rounded-full w-[90px] h-[90px] object-cover",
          style: { "width": "90px", "height": "90px" }
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="flex items-center justify-between"><input type="file" class="hidden" accept="image/*">`);
        if (showUploadAvatar.value) {
          _push(`<div class="absolute bg-black bg-opacity-20 rounded-full flex items-center cursor-pointer z-30" style="${ssrRenderStyle({ "width": "90px", "height": "90px" })}">`);
          _push(ssrRenderComponent(IconPhoto, { class: "w-10 h-10 mx-auto stroke-4 border-white" }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (!avatarIsUploading.value) {
          _push(ssrRenderComponent(_sfc_main$1S, {
            onMouseenter: ($event) => avatarIsHovered.value = true,
            class: "rounded-full border-gray-100 border-[3.5px] z-20",
            style: { "width": "90px", "height": "90px" },
            preview: `/media/${!isUploaded.value ? __props.user.avatar_preview : __props.user.avatar}`,
            then: _ctx.route("im", [__props.user.avatar, 1e3])
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
      if (unref(page).props.auth.check && unref(page).props.auth.user.id == __props.user.id) {
        _push(ssrRenderComponent(_component_Link, {
          class: "bg-gray-100 p-2 rounded-xl hover:opacity-70",
          href: _ctx.route("settings")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(IconTooth, { class: "w-[20px] h-[20px] stroke-2" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(IconTooth, { class: "w-[20px] h-[20px] stroke-2" })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="text-xl font-medium">${ssrInterpolate(__props.user.name)}</p><p class="text-sm">${__props.user.description}</p>`);
      _push(ssrRenderComponent(KarmaCountWithEmoji, { karma: __props.karma }, null, _parent));
      _push(`<div class="flex items-center mt-4">`);
      _push(ssrRenderComponent(_component_Link, {
        "preserve-scroll": "",
        onClick: ($event) => selectedSection.value = 1,
        href: _ctx.route("profile", [__props.user.id]),
        only: ["posts", "section"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button${_scopeId}>Подборки</button>`);
          } else {
            return [
              createVNode("button", {
                ref_key: "linkFirst",
                ref: linkFirst
              }, "Подборки", 512)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Link, {
        "preserve-scroll": "",
        onClick: ($event) => selectedSection.value = 2,
        href: _ctx.route("profile.comments", [__props.user.id]),
        only: ["comments", "section"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="ms-5"${_scopeId}> Комментарии </button>`);
          } else {
            return [
              createVNode("button", {
                ref_key: "linkSecond",
                ref: linkSecond,
                class: "ms-5"
              }, " Комментарии ", 512)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-orange-500 w-20 h-1 absolute duration-200 mt-1 rounded" style="${ssrRenderStyle(
        "width: " + linkWidth.value + "px;translate:  " + linkPosition.value + "px"
      )}"></div></div></div><div class="mt-5 xs:w-screen md:w-auto">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div><!--]-->`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/PageProfileLayout.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ Object.assign({ layout: [MainLayout, _sfc_main$e] }, {
  __name: "Comments",
  __ssrInlineRender: true,
  props: {
    user: null,
    comments: null
  },
  setup(__props) {
    const props = __props;
    const isEnd = ref(false);
    const currentPage = ref(2);
    const isLoading = ref(false);
    const loadComments = async () => {
      await axios$1.get(route("profile.comments.get", [props.user.id, currentPage.value])).catch((res) => {
        console.log(res);
      }).then((res) => {
        console.log(res);
        if (res.status == 200) {
          if (res.data.length == 0) {
            isEnd.value = true;
          }
          res.data.forEach((comment) => {
            props.comments.push(comment);
          });
        }
      });
    };
    const handleLoadEvent = async () => {
      if (!isLoading.value && !isEnd.value) {
        isLoading.value = true;
        await loadComments();
        currentPage.value += 1;
        isLoading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$N, {
        onLoad: ($event) => handleLoadEvent()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.comments, (comment) => {
              _push2(`<div class="my-5"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_Link, {
                href: _ctx.route("comment.redirect", [comment.id])
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bg-white rounded-xl p-5 sm:px-10 xs:px-4"${_scopeId2}><header${_scopeId2}>`);
                    _push3(ssrRenderComponent(UserTabletWithElementInside, {
                      user: comment.user
                    }, {
                      content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-xs"${_scopeId3}>${ssrInterpolate(comment.timestamp)}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-xs" }, toDisplayString(comment.timestamp), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</header><main${_scopeId2}><p${_scopeId2}>${comment.text}</p>`);
                    if (comment.image) {
                      _push3(`<div${_scopeId2}>`);
                      _push3(ssrRenderComponent(_sfc_main$1S, {
                        preview: "/media/" + comment.image_preview,
                        then: _ctx.route("im", [comment.image, 1e3]),
                        class: "rounded-xl h-[200px]"
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</main></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "bg-white rounded-xl p-5 sm:px-10 xs:px-4" }, [
                        createVNode("header", null, [
                          createVNode(UserTabletWithElementInside, {
                            user: comment.user
                          }, {
                            content: withCtx(() => [
                              createVNode("div", { class: "text-xs" }, toDisplayString(comment.timestamp), 1)
                            ]),
                            _: 2
                          }, 1032, ["user"])
                        ]),
                        createVNode("main", null, [
                          createVNode("p", {
                            innerHTML: comment.text
                          }, null, 8, ["innerHTML"]),
                          comment.image ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode(_sfc_main$1S, {
                              preview: "/media/" + comment.image_preview,
                              then: _ctx.route("im", [comment.image, 1e3]),
                              class: "rounded-xl h-[200px]"
                            }, null, 8, ["preview", "then"])
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.comments, (comment) => {
                return openBlock(), createBlock("div", { class: "my-5" }, [
                  createVNode(_component_Link, {
                    href: _ctx.route("comment.redirect", [comment.id])
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "bg-white rounded-xl p-5 sm:px-10 xs:px-4" }, [
                        createVNode("header", null, [
                          createVNode(UserTabletWithElementInside, {
                            user: comment.user
                          }, {
                            content: withCtx(() => [
                              createVNode("div", { class: "text-xs" }, toDisplayString(comment.timestamp), 1)
                            ]),
                            _: 2
                          }, 1032, ["user"])
                        ]),
                        createVNode("main", null, [
                          createVNode("p", {
                            innerHTML: comment.text
                          }, null, 8, ["innerHTML"]),
                          comment.image ? (openBlock(), createBlock("div", { key: 0 }, [
                            createVNode(_sfc_main$1S, {
                              preview: "/media/" + comment.image_preview,
                              then: _ctx.route("im", [comment.image, 1e3]),
                              class: "rounded-xl h-[200px]"
                            }, null, 8, ["preview", "then"])
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["href"])
                ]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!__props.comments.length) {
        _push(`<div class="mt-20">`);
        _push(ssrRenderComponent(EmptyFeed, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Comments.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __vite_glob_0_29 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$d
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = /* @__PURE__ */ Object.assign({ layout: [MainLayout, _sfc_main$e] }, {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    user: null,
    posts: null
  },
  setup(__props) {
    const props = __props;
    const isLoading = ref(false);
    const currentPage = ref(2);
    const isEnd = ref(false);
    const loadPosts = async () => {
      await axios$1.get(route("profile.posts.get", [props.user.id, currentPage.value])).catch((res) => {
        console.log(res);
      }).then((res) => {
        console.log(res);
        if (res.status == 200) {
          if (res.data.length == 0)
            isEnd.value = true;
          res.data.forEach((post) => {
            props.posts.push(post);
          });
        }
      });
    };
    const handleLoadEvent = async () => {
      if (!isLoading.value && !isEnd.value) {
        isLoading.value = true;
        await loadPosts();
        currentPage.value += 1;
        isLoading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$N, {
        onLoad: ($event) => handleLoadEvent()
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="rounded-xl"${_scopeId}><div${_scopeId}><!--[-->`);
            ssrRenderList(__props.posts, (post) => {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(Post, { post }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "rounded-xl" }, [
                createVNode("div", null, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.posts, (post) => {
                    return openBlock(), createBlock("div", {
                      key: post.id
                    }, [
                      createVNode(Post, { post }, null, 8, ["post"])
                    ]);
                  }), 128))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!__props.posts.length) {
        _push(`<div class="mt-20">`);
        _push(ssrRenderComponent(EmptyFeed, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Index.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __vite_glob_0_30 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = /* @__PURE__ */ Object.assign({
  layout: MainLayout
}, {
  __name: "Search",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="bg-white rounded-xl mb-2"><div class="px-3 py-2 mt-4">`);
      _push(ssrRenderComponent(_sfc_main$1r, { "bg-input-color": "bg-white" }, null, _parent));
      _push(`</div></div><div class="bg-white rounded-xl px-2 py-40 text-center text-secondary"> Пока здесь пусто, но скоро появится поиск </div><!--]-->`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Search.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __vite_glob_0_31 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {
  props: {
    posts: null,
    tag: null
  },
  components: { Compilation }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Tag.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Tag = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$3]]);
const __vite_glob_0_32 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tag
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    class: "icon icon-tabler icon-tabler-arrow-up",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, _attrs))}><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 5l0 14"></path><path d="M18 11l-6 -6"></path><path d="M6 11l6 -6"></path></svg>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconArrowUp.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const IconArrowUp = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$8 = {
  __name: "CommentDropdown",
  __ssrInlineRender: true,
  props: {
    comment: null,
    class: null
  },
  emits: ["enableEditing", "remove"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const showReportModal = ref(false);
    const page = usePage();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1Q, { align: "left" }, createSlots({
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="p-1 hover:bg-gray-100 text-secondary rounded-full"${_scopeId}>`);
            _push2(ssrRenderComponent(IconDots, { class: __props.class }, null, _parent2, _scopeId));
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", { class: "p-1 hover:bg-gray-100 text-secondary rounded-full" }, [
                createVNode(IconDots, { class: __props.class }, null, 8, ["class"])
              ])
            ];
          }
        }),
        _: 2
      }, [
        ((_a = unref(page).props.auth.user) == null ? void 0 : _a.id) != __props.comment.user.id ? {
          name: "content",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="py-1 text-sm"${_scopeId}><button class="text-black hover:bg-neutral-100 rounded-lg px-5 w-full text-start"${_scopeId}>`);
              _push2(ssrRenderComponent(IconFlag, { class: "w-5 h-5 me-2 inline-block" }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Пожаловаться</span></button></div>`);
            } else {
              return [
                createVNode("div", { class: "py-1 text-sm" }, [
                  createVNode("button", {
                    onClick: ($event) => showReportModal.value = true,
                    class: "text-black hover:bg-neutral-100 rounded-lg px-5 w-full text-start"
                  }, [
                    createVNode(IconFlag, { class: "w-5 h-5 me-2 inline-block" }),
                    createVNode("span", null, "Пожаловаться")
                  ], 8, ["onClick"])
                ])
              ];
            }
          }),
          key: "0"
        } : {
          name: "content",
          fn: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="py-1 text-start text-sm"${_scopeId}><button class="text-black hover:bg-neutral-100 rounded-lg px-5 w-full text-start"${_scopeId}>`);
              _push2(ssrRenderComponent(IconPencil, { class: "w-5 h-5 me-2 inline-block" }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Редактировать</span></button><button class="text-black hover:bg-neutral-100 rounded-lg px-5 w-full text-start"${_scopeId}>`);
              _push2(ssrRenderComponent(IconTrash, { class: "w-5 h-5 me-2 inline-block" }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Удалить</span></button></div>`);
            } else {
              return [
                createVNode("div", { class: "py-1 text-start text-sm" }, [
                  createVNode("button", {
                    onClick: ($event) => emit("enableEditing"),
                    class: "text-black hover:bg-neutral-100 rounded-lg px-5 w-full text-start"
                  }, [
                    createVNode(IconPencil, { class: "w-5 h-5 me-2 inline-block" }),
                    createVNode("span", null, "Редактировать")
                  ], 8, ["onClick"]),
                  createVNode("button", {
                    onClick: ($event) => emit("remove"),
                    class: "text-black hover:bg-neutral-100 rounded-lg px-5 w-full text-start"
                  }, [
                    createVNode(IconTrash, { class: "w-5 h-5 me-2 inline-block" }),
                    createVNode("span", null, "Удалить")
                  ], 8, ["onClick"])
                ])
              ];
            }
          }),
          key: "1"
        }
      ]), _parent));
      _push(ssrRenderComponent(_sfc_main$14, {
        report_to_type: "comment",
        report_to_id: __props.comment.id,
        show: showReportModal.value,
        onClose: ($event) => showReportModal.value = !showReportModal.value
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Comments/CommentDropdown.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  props: {
    primaryColor: null,
    secondaryColor: null,
    textColor: {
      default: "white"
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: ["px-2 py-[5.5px] font-semibold rounded-lg duration-200 hover:bg-opacity-90", "bg-" + $props.primaryColor + " text-" + $props.textColor]
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Buttons/FlatPrimaryButton.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const FlatPrimaryButton = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$6 = {
  __name: "CommentInput",
  __ssrInlineRender: true,
  props: {
    commentIsCreated: false,
    text: {
      required: false,
      default: ""
    },
    image: {
      required: false,
      default: null
    }
  },
  emits: ["sendComment"],
  setup(__props, { emit: __emit }) {
    const isLoading = ref(false);
    const emit = __emit;
    const handleSend = () => {
      if (!isLoading.value) {
        emit("sendComment", form);
        isLoading.value = true;
      }
    };
    const props = __props;
    const form = reactive({
      content: "",
      image: null
    });
    const fileWasInserted = ref(false);
    const insertedImage = reactive({
      base64: null,
      image: null,
      hasImage: false
    });
    const filepond = ref(null);
    const content = ref(null);
    const isFocused = ref(false);
    const placeholder = ref("Комментарий...");
    const placeholderClass = computed(() => {
      return `before:content-['${placeholder.value}']`;
    });
    const setInputValuesToNull = inject("setInputValuesToNull");
    watch(
      () => props.commentIsCreated,
      (newValue, oldValue) => {
        if (newValue) {
          setInputValuesToNull();
          isLoading.value = false;
          fileWasInserted.value = false;
          content.value.innerHTML = "";
          form.content = "";
          form.image = null;
          placeholder.value = "Комментарий...";
        }
      }
    );
    watch(insertedImage, () => {
      form.image = insertedImage;
    });
    onMounted(() => {
      content.value.innerHTML = props.text;
      form.content = content.value.innerHTML;
      if (props.image != null) {
        fileWasInserted.value = true;
        insertedImage.image = props.image;
        insertedImage.hasImage = true;
      }
      if (props.text != "") {
        placeholder.value = "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          "bg-field px-3 py-4 pb-0 rounded-xl border hover:bg-white hover:ring-orange-200 hover:ring-2 hover:border-orange-300 duration-200",
          isFocused.value ? "ring-orange-200 ring-2 border-orange-500 border-[1.2px] bg-white " : "  "
        ]
      }, _attrs))}><div contenteditable="" class="${ssrRenderClass([placeholderClass.value, "focus:outline-none text-17px hover:cursor-text"])}">${__props.text}</div><div class="flex justify-between mt-2 ms-[-6px] items-end"><div class="p-2 ps-0">`);
      if (!fileWasInserted.value) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$1G, {
          onClick: ($event) => filepond.value.click(),
          primaryColor: "orange-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(IconPhoto, { class: "stroke-2 w-5 h-5" }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(IconPhoto, { class: "stroke-2 w-5 h-5" })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<input type="file" class="hidden" accept="image/png, image/jpg, image/jpeg, image/webp"></div>`);
      } else {
        _push(`<div><img${ssrRenderAttr(
          "src",
          insertedImage.base64 ?? _ctx.route("im", [insertedImage.image, 200])
        )} class="rounded-lg w-20 h-20 object-cover cursor-pointer"></div>`);
      }
      _push(`</div><div class="flex mb-2">`);
      ssrRenderSlot(_ctx.$slots, "button", {}, null, _push, _parent);
      if (((_a = content.value) == null ? void 0 : _a.innerHTML.length) > 0 || fileWasInserted.value) {
        _push(ssrRenderComponent(FlatPrimaryButton, {
          class: "ms-2",
          primaryColor: "orange-500",
          onClick: ($event) => handleSend()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (!isLoading.value) {
                _push2(`<div${_scopeId}>Отправить</div>`);
              } else {
                _push2(`<div class="flex items-center justify-center"${_scopeId}><div class="opacity-0"${_scopeId}>Отправить</div><div class="absolute"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$1D, { color: "text-white" }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              }
            } else {
              return [
                !isLoading.value ? (openBlock(), createBlock("div", { key: 0 }, "Отправить")) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "flex items-center justify-center"
                }, [
                  createVNode("div", { class: "opacity-0" }, "Отправить"),
                  createVNode("div", { class: "absolute" }, [
                    createVNode(_sfc_main$1D, { color: "text-white" })
                  ])
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Comments/CommentInput.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "EditingInput",
  __ssrInlineRender: true,
  props: {
    commentIsCreated: false,
    type: null,
    id: null,
    text: null,
    image: null
  },
  emits: ["updateCommentValue", "closeEditingInterface"],
  setup(__props, { emit: __emit }) {
    const vFocus = {
      mounted: (el) => el.click()
    };
    const props = __props;
    const setInputValuesToNull = inject("setInputValuesToNull");
    const commentIsUpdated = ref(false);
    const saveComment = (form) => {
      var _a, _b;
      const formData = new FormData();
      formData.append("_method", "PUT");
      formData.append("id", props.id);
      formData.append("text", form.content);
      formData.append("hasImage", (_a = form.image) == null ? void 0 : _a.hasImage);
      formData.append("image", (_b = form.image) == null ? void 0 : _b.image);
      axios$1.post(route("comment.update"), formData).catch((res) => {
        console.log(res);
      }).then((res) => {
        console.log(res);
        if (res.status == 200) {
          props.commentIsUpdated = true;
          setInputValuesToNull();
          emit("updateCommentValue", res.data);
        }
      });
    };
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ms-2 mt-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$6, mergeProps({
        onSendComment: saveComment,
        commentIsCreated: commentIsUpdated.value,
        text: __props.text,
        image: __props.image
      }, ssrGetDirectiveProps(_ctx, vFocus)), {
        button: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(FlatPrimaryButton, {
              primaryColor: "neutral-200",
              textColor: "black",
              class: "font-semibold",
              onClick: ($event) => emit("closeEditingInterface")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Отмена`);
                } else {
                  return [
                    createTextVNode("Отмена")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(FlatPrimaryButton, {
                primaryColor: "neutral-200",
                textColor: "black",
                class: "font-semibold",
                onClick: ($event) => emit("closeEditingInterface")
              }, {
                default: withCtx(() => [
                  createTextVNode("Отмена")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Comments/EditingInput.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "ReplyInput",
  __ssrInlineRender: true,
  props: {
    commentIsCreated: false
  },
  emits: ["sendReply", "closeReplyInterface"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const changeShowReplyInterfaceValue = inject("changeShowReplyInterfaceValue");
    const sendReply = (v2) => {
      emit("sendReply", v2);
    };
    const vFocus = {
      mounted: (el) => el.click()
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "ms-2 mt-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$6, mergeProps({
        onSendComment: sendReply,
        commentIsCreated: __props.commentIsCreated,
        onCloseReplyInterface: ($event) => _ctx.$emit("closeReplyInterface")
      }, ssrGetDirectiveProps(_ctx, vFocus)), {
        button: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(FlatPrimaryButton, {
              primaryColor: "neutral-200",
              textColor: "black",
              class: "font-medium",
              onClick: ($event) => unref(changeShowReplyInterfaceValue)(null)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Отмена`);
                } else {
                  return [
                    createTextVNode("Отмена")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(FlatPrimaryButton, {
                primaryColor: "neutral-200",
                textColor: "black",
                class: "font-medium",
                onClick: ($event) => unref(changeShowReplyInterfaceValue)(null)
              }, {
                default: withCtx(() => [
                  createTextVNode("Отмена")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Comments/ReplyInput.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  __name: "Comment",
  __ssrInlineRender: true,
  props: {
    isReply: false,
    comment: null,
    type: null,
    showRepliesByDefault: {
      default: false
    },
    countOfNeighbours: 0,
    hoverAllValue: {
      default: false
    },
    index: {
      type: Number,
      default: 0
    },
    isBranchParrent: false,
    branchParrentId: {
      required: true
    }
  },
  emits: [
    "enableHoverBranches",
    "disableHoverBranches",
    "enableColorize",
    "disableColorize",
    "closeReplies",
    "remove"
  ],
  setup(__props, { emit: __emit }) {
    inject("limitComments");
    inject("isIgnoreLimitEnabled");
    const showRepliesArray = inject("showRepliesArray");
    inject("changeShowReplyInterfaceValue");
    const changeShowEditingInterfaceValue = inject(
      "changeShowEditingInterfaceValue"
    );
    const showReplyInterface = inject("showReplyInterface");
    const showEditingInterface = inject("showEditingInterface");
    const callModal = inject("callModal");
    const scrollIntoComment = inject("scrollIntoComment");
    inject("post");
    const props = __props;
    const commentRef = ref(false);
    ref(props.comment.replies ?? []);
    ref(false);
    const hoverBranches = ref(false);
    const colorizeComment = ref(false);
    const showLinkToParent = ref(false);
    const focusFunction = () => {
      commentRef.value.scrollIntoView();
      colorizeComment.value = true;
      setTimeout(() => {
        colorizeComment.value = false;
      }, 500);
      nextTick(() => {
        commentRef.value.scrollIntoView({
          block: "center"
        });
      });
      setTimeout(() => {
        commentRef.value.scrollIntoView();
        colorizeComment.value = true;
        setTimeout(() => {
          colorizeComment.value = false;
        }, 500);
        nextTick(() => {
          commentRef.value.scrollIntoView({
            block: "center"
          });
        });
      }, 200);
    };
    const openSomeReplies = () => {
      var _a;
      if (((_a = props.comment.replies) == null ? void 0 : _a.length) == 1 && props.comment.level > 1) {
        if (!showRepliesArray.value.includes(props.comment.id)) {
          showRepliesArray.value.unshift(props.comment.id);
        }
      }
    };
    onMounted(() => {
      openSomeReplies();
      if (props.comment.id == scrollIntoComment.value) {
        focusFunction();
      }
    });
    onUnmounted(() => {
      emit("disableHoverBranches");
      if (scrollIntoComment.value == props.comment.id)
        scrollIntoComment.value = null;
    });
    const emit = __emit;
    const closeReplies = () => {
      const index = showRepliesArray.value.findIndex(
        (i2) => i2 == props.comment.comment_id
      );
      showRepliesArray.value.splice(index, 1);
      commentRef.value.scrollIntoViewIfNeeded({ block: "center" });
    };
    const commentIsCreated = ref(false);
    const addCommentInObjectTree = inject("addCommentInObjectTree");
    const sendReply = (form) => {
      var _a, _b;
      const formData = new FormData();
      formData.append("_method", "POST");
      formData.append("comment_id", showReplyInterface.value);
      formData.append("post_id", props.comment.post_id);
      formData.append("text", form.content);
      formData.append("hasImage", (_a = form.image) == null ? void 0 : _a.hasImage);
      formData.append("image", (_b = form.image) == null ? void 0 : _b.image);
      axios.post(route("comment.create"), formData).catch((res) => {
        if (res.response.status == 401)
          callModal("Auth");
        console.log(res);
      }).then((res) => {
        console.log(res);
        commentIsCreated.value = true;
        showRepliesArray.value.unshift(props.comment.id);
        scrollIntoComment.value = res.data.id;
        setTimeout(() => {
          commentIsCreated.value = false;
        }, 20);
        if (res.status == 200 || res.status == 201) {
          addCommentInObjectTree(res.data, props.branchParrentId);
        }
      });
    };
    const updateComment = (value) => {
      props.comment.text = value.text;
      props.comment.image = value.image;
      props.comment.image_preview = value.image_preview;
    };
    const remove = (id) => {
      axios.post(route("comment.delete"), {
        "_method": "DELETE",
        id
      }).then((res) => {
        if (!res.data.is_force_deleted) {
          props.comment.replies[props.comment.replies.findIndex((c2) => c2.id == id)].text = res.data.data.text;
        } else {
          props.comment.replies.splice(props.comment.replies.findIndex((c2) => c2.id == id), 1);
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_Comment = resolveComponent("Comment", true);
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full" }, _attrs))}>`);
      if (__props.isReply && __props.countOfNeighbours == 0 && __props.comment.level < 7) {
        _push(`<div style="${ssrRenderStyle({ "width": "20px", "height": "30px" })}" class="${ssrRenderClass([__props.hoverAllValue ? "border-sky-600" : "", "border-2 border-t-0 border-e-0 border-bl-1 border-bl-gray-200 border-bl-1 rounded-bl-lg hover:cursor-pointer"])}"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.isReply && __props.countOfNeighbours > 0 && __props.comment.level < 7) {
        _push(`<div class="${ssrRenderClass([__props.hoverAllValue ? "border-sky-600" : "", "h-full border-s-2 hover:cursor-pointer"])}" style="${ssrRenderStyle({ "height": "auto" })}"><div style="${ssrRenderStyle({ "width": "20px", "height": "30px" })}" class="${ssrRenderClass([__props.hoverAllValue ? "border-sky-600" : "", "ms-[-1.5px] border-2 border-t-0 border-e-0 border-bl-1 border-bl-gray-200 border-bl-1 rounded-bl-lg"])}"></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([__props.comment.level < 7 && __props.isReply ? "ms-2" : "", "px-0 bg-white rounded-xl p-2 pb-0 w-full"])}"><section class="${ssrRenderClass([colorizeComment.value ? "opacity-50" : "", "duration-500"])}"><header class="flex items-start p-0 m-0">`);
      _push(ssrRenderComponent(UserTabletWithElementInside, {
        user: __props.comment.user
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-xs opacity-80"${_scopeId}>${ssrInterpolate(__props.comment.timestamp)}</p>`);
          } else {
            return [
              createVNode("p", { class: "text-xs opacity-80" }, toDisplayString(__props.comment.timestamp), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.isReply && showLinkToParent.value) {
        _push(`<button class="pt-2">`);
        _push(ssrRenderComponent(IconArrowUp, { class: "stroke-1 w-4 h-4 hover:opacity-60" }, null, _parent));
        _push(`</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><main><p class="text-17">${__props.comment.text}</p>`);
      if (__props.comment.image) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$g, {
          preview: "/media/" + __props.comment.image_preview,
          then: _ctx.route("im", [__props.comment.image, 1e3]),
          class: "rounded-xl w-[300px]"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main><footer class="flex items-center">`);
      _push(ssrRenderComponent(_sfc_main$T, {
        type: "Comment",
        reputation: __props.comment.rep
      }, null, _parent));
      _push(`<button class="ms-2 text-secondary text-sm"> Ответить </button><span class="ms-5">`);
      _push(ssrRenderComponent(_sfc_main$8, {
        class: "w-5 h-5 text-secondary opacity-80",
        onRemove: ($event) => emit("remove", __props.comment.id),
        onEnableEditing: ($event) => unref(changeShowEditingInterfaceValue)(__props.comment.id),
        comment: __props.comment
      }, null, _parent));
      _push(`</span></footer></section>`);
      if (unref(showReplyInterface) == __props.comment.id) {
        _push(`<div class="px-2 my-2">`);
        _push(ssrRenderComponent(_sfc_main$4, {
          onSendReply: sendReply,
          commentIsCreated: commentIsCreated.value
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(showEditingInterface) == __props.comment.id) {
        _push(`<div class="px-2 my-2">`);
        _push(ssrRenderComponent(_sfc_main$5, {
          text: __props.comment.text,
          image: __props.comment.image,
          id: __props.comment.id,
          onCloseEditingInterface: ($event) => unref(changeShowEditingInterfaceValue)(null),
          onUpdateCommentValue: updateComment
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_b = (_a = __props.comment) == null ? void 0 : _a.replies) == null ? void 0 : _b.length) > 0 && !unref(showRepliesArray).includes(__props.comment.id)) {
        _push(`<div><button class="text-dtfpr hover:opacity-80">${ssrInterpolate(_ctx.$tc("answer", __props.comment.replies_count))}</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_d = (_c = __props.comment) == null ? void 0 : _c.replies) == null ? void 0 : _d.length) > 0) {
        _push(`<div>`);
        if (unref(showRepliesArray).includes(__props.comment.id)) {
          _push(`<div><!--[-->`);
          ssrRenderList(__props.comment.replies, (reply, i2) => {
            _push(`<div>`);
            _push(ssrRenderComponent(_component_Comment, {
              onRemove: ($event) => remove(reply.id),
              onEnableHoverBranches: ($event) => hoverBranches.value = true,
              isBranchParrent: false,
              onDisableHoverBranches: ($event) => hoverBranches.value = false,
              onFocusEmit: ($event) => focusFunction(),
              onCloseReplies: ($event) => closeReplies(),
              onEnableColorize: ($event) => colorizeComment.value = true,
              onDisableColorize: ($event) => colorizeComment.value = false,
              isReply: true,
              key: reply.id,
              hoverAllValue: hoverBranches.value,
              showRepliesByDefault: __props.comment.level < 7,
              comment: reply,
              countOfNeighbours: __props.comment.replies.length - (i2 + 1),
              branchParrentId: __props.branchParrentId
            }, null, _parent));
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Comments/Comment.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "ms-0 -mr-0.5 h-4 w-4 inline-block text-slate-500",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, _attrs))}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconChewronDown.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const IconChewronDown = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const limitComments = 7;
const _sfc_main$1 = {
  __name: "Comments",
  __ssrInlineRender: true,
  props: {
    post: null
  },
  emits: ["load"],
  setup(__props, { emit: __emit }) {
    const isLoaded = ref(false);
    const isIgnoreLimitEnabled = ref(false);
    const visibleComments = ref(0);
    ref(0);
    const page = usePage();
    provide("visibleComments", visibleComments);
    provide("isIgnoreLimitEnabled", isIgnoreLimitEnabled);
    provide("limitComments", limitComments);
    const emit = __emit;
    watch(isLoaded, (newValue, oldValue) => {
      if (newValue == true)
        emit("load");
    });
    const loadComments = async () => {
      await axios$1.get(route("comments.get", [props.post.id])).catch((res) => {
        console.log(res);
      }).then(async (res) => {
        console.log(res);
        isLoaded.value = true;
        comments.value = res.data;
        await processComments();
      });
    };
    const hasParam = (param) => {
      const url = new URL(window.location.href);
      return url.searchParams.has(param);
    };
    const getParam = (param) => {
      const url = new URL(window.location.href);
      return url.searchParams.get(param);
    };
    const sortByReputationOverall = (a2, b2) => {
      if (b2.rep.overall > a2.rep.overall)
        return 1;
      return -1;
    };
    const sortByNewest = (a2, b2) => {
      if (b2.created_at > a2.created_at)
        return 1;
      return -1;
    };
    const resortComments = async (func, value) => {
      await processComments(func);
      nextTick(() => {
        comments_block.value.scrollIntoViewIfNeeded();
      });
      currentSort.value = sortingValues[value];
    };
    const sortingValues = {
      sortByReputationOverall: "По количеству оценок",
      sortByNewest: "Сначала новые"
    };
    const currentSort = ref(sortingValues.sortByReputationOverall);
    const processComments = async (sortFunction = sortByReputationOverall) => {
      function findMaxLevel() {
        let max_level = 0;
        comments.value.forEach((comment) => {
          if (comment.level > max_level)
            max_level = comment.level;
        });
        return max_level;
      }
      let depth = findMaxLevel();
      function index(id) {
        return comments.value.findIndex((comment) => comment.id == id);
      }
      let to_splice = [];
      while (depth != 0) {
        comments.value.forEach((comment) => {
          if (comment.level == depth) {
            if (!comments.value[index(comment.comment_id)].replies)
              comments.value[index(comment.comment_id)].replies = [];
            if (!comments.value[index(comment.id)].comment)
              comments.value[index(comment.id)].comment = null;
            comments.value[index(comment.comment_id)].replies.push(comment);
            comments.value[index(comment.comment_id)].replies.sort(
              sortFunction
            );
            countReplies(comment);
            if (commentToScrollInto.value.has && commentToScrollInto.value.id == comment.id) {
              showRepliesArray.value.push(comment.comment_id);
              commentToScrollInto.value.id = comment.comment_id;
            }
            to_splice.push(comment.id);
          }
        });
        depth -= 1;
      }
      to_splice.forEach((id) => {
        comments.value.splice(index(id), 1);
      });
      comments.value.forEach((comment) => {
        comments.value.sort(sortFunction);
      });
      return true;
    };
    const countReplies = (comment) => {
      let count = 0;
      function updateCount(comm) {
        var _a;
        if (((_a = comm == null ? void 0 : comm.replies) == null ? void 0 : _a.length) > 0) {
          comm.replies.forEach((reply) => {
            let r2 = updateCount(reply);
            count += r2;
          });
        }
        return 1;
      }
      updateCount(comment);
      comment.replies_count = count;
    };
    const commentToScrollInto = ref({
      has: false,
      id: null
    });
    ref(0);
    ref(0);
    onMounted(async () => {
      var _a;
      if (hasParam("comment")) {
        isIgnoreLimitEnabled.value = true;
        (_a = comments_block.value) == null ? void 0 : _a.scrollIntoView();
        nextTick(() => {
          var _a2;
          (_a2 = comments_block.value) == null ? void 0 : _a2.scrollIntoView();
        });
        commentToScrollInto.value.has = true;
        commentToScrollInto.value.id = getParam("comment");
        scrollIntoComment.value = getParam("comment");
      }
      if (hasParam("comments"))
        nextTick(() => {
          var _a2;
          (_a2 = comments_block.value) == null ? void 0 : _a2.scrollIntoView();
        });
      await loadComments();
      if (hasParam("comments"))
        nextTick(() => {
          var _a2;
          (_a2 = comments_block.value) == null ? void 0 : _a2.scrollIntoView();
        });
      comments.value.forEach((comment) => {
        if (comment.level == 0)
          showRepliesArray.value.unshift(comment.id);
        countReplies(comment);
      });
    });
    const callModal = inject("callModal");
    const props = __props;
    const showRepliesArray = ref([]);
    const showReplyInterface = ref(null);
    ref(null);
    const showEditingInterface = ref(null);
    const comments = ref(null);
    const comments_block = ref(null);
    const commentIsCreated = ref(false);
    const scrollIntoComment = ref(null);
    const findComment = (id) => {
      function find(comment) {
        if (comment.id === id) {
          return comment;
        }
        if (comment.replies) {
          for (const reply of comment.replies) {
            const found = find(reply);
            if (found) {
              return found;
            }
          }
        }
        return null;
      }
      for (const comment of comments.value) {
        const found = find(comment);
        if (found) {
          return found;
        }
      }
      return null;
    };
    const addCommentInObjectTree = (comment, parrent_id) => {
      const parrent = findComment(comment.comment_id);
      console.log("!!", parrent);
      if (!parrent.replies) {
        parrent.replies = [];
      }
      parrent.replies.unshift(comment);
      const index = comments.value.findIndex((obj) => obj.id == parrent_id);
      console.log("parrent index :", index, "parrent_id", parrent_id);
      if (index == -1)
        return;
      countReplies(comments.value[index]);
      countReplies(findComment(comment.comment_id));
    };
    provide("addCommentInObjectTree", addCommentInObjectTree);
    const createComment = (form) => {
      var _a, _b;
      if (!page.props.auth.check) {
        callModal("auth");
        return;
      }
      const formData = new FormData();
      formData.append("_method", "POST");
      formData.append("post_id", props.post.id);
      formData.append("text", form.content);
      formData.append("hasImage", (_a = form.image) == null ? void 0 : _a.hasImage);
      formData.append("image", (_b = form.image) == null ? void 0 : _b.image);
      axios$1.post(route("comment.create"), formData).catch((res) => {
        if (res.response.status == 401)
          callModal("Auth");
        console.log(res);
      }).then((res) => {
        console.log(res);
        if (res.status == 200 || res.status == 201) {
          comments.value.unshift(res.data);
          commentIsCreated.value = true;
          scrollIntoComment.value = res.data.id;
          setTimeout(() => {
            commentIsCreated.value = false;
          }, 20);
        }
      });
    };
    const removeComment = (id) => {
      axios$1.post(route("comment.delete"), {
        "_method": "DELETE",
        id
      }).then((res) => {
        console.log(res.data);
        if (!res.data.is_force_deleted) {
          comments.value[comments.value.findIndex((c2) => c2.id == id)].text = res.data.data.text;
        } else {
          comments.value.splice(comments.value.findIndex((c2) => c2.id == id), 1);
        }
      });
    };
    const setInputValuesToNull = () => {
      showReplyInterface.value = null;
      showEditingInterface.value = null;
    };
    const changeShowReplyInterfaceValue = (value) => {
      setInputValuesToNull();
      showReplyInterface.value = value;
    };
    const changeShowEditingInterfaceValue = (value) => {
      setInputValuesToNull();
      showEditingInterface.value = value;
    };
    provide("changeShowReplyInterfaceValue", changeShowReplyInterfaceValue);
    provide("setInputValuesToNull", setInputValuesToNull);
    provide("showReplyInterface", showReplyInterface);
    provide("changeShowEditingInterfaceValue", changeShowEditingInterfaceValue);
    provide("showEditingInterface", showEditingInterface);
    provide("showRepliesArray", showRepliesArray);
    provide("scrollIntoComment", scrollIntoComment);
    provide("post", props.post);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<!--[--><div class="${ssrRenderClass(["", "bg-white p-5 rounded-xl mt-5"])}"><p class="text-xl mb-8 font-medium flex justify-between items-center"><p>Комментарии</p><div class="text-sm hover:opacity-80 hover:cursor-pointer">`);
      _push(ssrRenderComponent(_sfc_main$1Q, null, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center"${_scopeId}><span${_scopeId}>${ssrInterpolate(currentSort.value)}</span><div class="ms-2"${_scopeId}>`);
            _push2(ssrRenderComponent(IconChewronDown, null, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode("span", null, toDisplayString(currentSort.value), 1),
                createVNode("div", { class: "ms-2" }, [
                  createVNode(IconChewronDown)
                ])
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="items-start px-5 opacity-100 text-black space-y-1"${_scopeId}><button class="block hover:opacity-80"${_scopeId}>По количеству оценок</button><button class="block hover:opacity-80"${_scopeId}>Сначала новые</button></div>`);
          } else {
            return [
              createVNode("div", { class: "items-start px-5 opacity-100 text-black space-y-1" }, [
                createVNode("button", {
                  class: "block hover:opacity-80",
                  onClick: ($event) => resortComments(sortByReputationOverall, "sortByReputationOverall")
                }, "По количеству оценок", 8, ["onClick"]),
                createVNode("button", {
                  class: "block hover:opacity-80",
                  onClick: ($event) => resortComments(sortByNewest, "sortByNewest")
                }, "Сначала новые", 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></p><div class="md:px-2 mb-5">`);
      if (!showReplyInterface.value && !showEditingInterface.value) {
        _push(`<div>`);
        _push(ssrRenderComponent(_sfc_main$6, {
          onSendComment: createComment,
          commentIsCreated: commentIsCreated.value
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div></div><main class="max-w-screen">`);
      if (!isLoaded.value) {
        _push(ssrRenderComponent(_sfc_main$1D, { class: "mx-auto stroke-gray-500" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(comments.value, (comment, index) => {
        _push(`<div>`);
        if (index < limitComments || isIgnoreLimitEnabled.value) {
          _push(ssrRenderComponent(_sfc_main$3, {
            comment,
            onRemove: ($event) => removeComment(comment.id),
            isBranchParrent: true,
            branchParrentId: comment.id,
            key: comment.id
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></main>`);
      if (!showReplyInterface.value && !showEditingInterface.value && isLoaded.value && ((_a = comments.value) == null ? void 0 : _a.length) > 10 && isIgnoreLimitEnabled.value) {
        _push(`<div class="mt-4">`);
        _push(ssrRenderComponent(_sfc_main$6, {
          onSendComment: createComment,
          commentIsCreated: commentIsCreated.value
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (((_b = comments.value) == null ? void 0 : _b.length) > limitComments && !isIgnoreLimitEnabled.value) {
        _push(`<div class="bg-white border-t-2 w-full p-3 px-5 mt-[-15px] flex items-center justify-between rounded-b-xl"><button class="text-dtfpr hover:opacity-70 text-17px"> Раскрыть </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Comments/Comments.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: MainLayout }, {
  __name: "post",
  __ssrInlineRender: true,
  props: {
    post: null
  },
  setup(__props) {
    const films_block = ref(null);
    const footerFeedIsLoaded = ref(false);
    watch(footerFeedIsLoaded, (newValue) => {
      if (newValue == true) {
        handleLoadFooterEvent();
      }
    });
    const footerFeedPage = ref(1);
    const footerFeedPosts = ref([]);
    const footerFeedIsLoading = ref(false);
    const footerFeedIsEnd = ref(false);
    const handleLoadFooterEvent = async () => {
      if (!footerFeedIsLoading.value && !footerFeedIsEnd.value) {
        footerFeedIsLoading.value = true;
        await loadFooterFeed();
        footerFeedIsLoading.value = false;
        footerFeedPage.value++;
      }
    };
    const loadFooterFeed = async () => {
      axios$1.get(route("posts.random", [footerFeedPage.value, props.post.id])).catch((res) => {
        console.log(res);
      }).then((res) => {
        console.log(res);
        if (res.status == 200) {
          if (res.data.length == 0) {
            footerFeedIsEnd.value = true;
          }
          res.data.forEach((post) => {
            footerFeedPosts.value.push(post);
          });
        }
      });
    };
    const props = __props;
    onMounted(() => {
      if (new URL(window.location.href).searchParams.has("films")) {
        nextTick(() => {
          films_block.value.scrollIntoView();
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      const _component_Link = resolveComponent("Link");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(__props.post.title)}</title><meta name="description"${ssrRenderAttr("content", __props.post.description)}${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(__props.post.title), 1),
              createVNode("meta", {
                name: "description",
                content: __props.post.description
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="rounded-xl mb-5 sm:px-3 xs:px-1 block w-full bg-white"><header class="sm:px-2 pt-3 pb-1 flex justify-between">`);
      _push(ssrRenderComponent(UserTabletWithElementInside, {
        user: __props.post.user
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-13px text-secondary"${_scopeId}>${ssrInterpolate(__props.post.timestamp)}</p>`);
          } else {
            return [
              createVNode("p", { class: "text-13px text-secondary" }, toDisplayString(__props.post.timestamp), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_sfc_main$I, {
        user: _ctx.$page.props.auth.user,
        post: __props.post
      }, null, _parent));
      _push(`</div></header>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("post", [__props.post.id, __props.post.slug])
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="sm:px-3 xs:px-1 text-xl font-medium"${_scopeId}><p${_scopeId}>${ssrInterpolate(__props.post.title)}</p></section><section class="sm:px-3 xs:px-1 mt-2 text-base mb-2"${_scopeId}><p${_scopeId}>${__props.post.description}</p></section><div class="${ssrRenderClass({ "p-2 sm:px-3 xs:px-1": __props.post.image })}"${_scopeId}>`);
            if (__props.post.image) {
              _push2(ssrRenderComponent(_sfc_main$1S, {
                preview: `/media/${__props.post.image_preview}`,
                then: _ctx.route("im", [__props.post.image, 800]),
                class: "rounded-lg mx-auto w-full object-cover w-full",
                style: { "min-width": "auto", "min-height": "400px" }
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("section", { class: "sm:px-3 xs:px-1 text-xl font-medium" }, [
                createVNode("p", null, toDisplayString(__props.post.title), 1)
              ]),
              createVNode("section", { class: "sm:px-3 xs:px-1 mt-2 text-base mb-2" }, [
                createVNode("p", {
                  innerHTML: __props.post.description
                }, null, 8, ["innerHTML"])
              ]),
              createVNode("div", {
                class: { "p-2 sm:px-3 xs:px-1": __props.post.image }
              }, [
                __props.post.image ? (openBlock(), createBlock(_sfc_main$1S, {
                  key: 0,
                  preview: `/media/${__props.post.image_preview}`,
                  then: _ctx.route("im", [__props.post.image, 800]),
                  class: "rounded-lg mx-auto w-full object-cover w-full",
                  style: { "min-width": "auto", "min-height": "400px" }
                }, null, 8, ["preview", "then"])) : createCommentVNode("", true)
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div><!--[-->`);
      ssrRenderList(__props.post.films, (film, index) => {
        _push(`<div class="sm:px-3 xs:px-1">`);
        _push(ssrRenderComponent(_sfc_main$12, { film }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><footer class="sm:px-3 xs:px-1 py-2"><div class="flex flex-col"><div class="flex items-center space-x-5 text-secondary"><div>${ssrInterpolate(_ctx.$tc("view", __props.post.views))}</div><div>${ssrInterpolate(_ctx.$tc("visit", __props.post.visits))}</div></div><div class="m-0 flex items-center"><span class="me-0">`);
      _push(ssrRenderComponent(_sfc_main$T, {
        type: "Post",
        reputation: __props.post.rep
      }, null, _parent));
      _push(`</span><span class="me-2 text-slate-700">`);
      _push(ssrRenderComponent(_sfc_main$M, {
        text: __props.post.comments_count,
        href: _ctx.route("post", [__props.post.id, __props.post.slug, "comments"])
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(IconComments, { class: "w-5 h-5" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(IconComments, { class: "w-5 h-5" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span><span class="me-2 text-slate-700">`);
      _push(ssrRenderComponent(_sfc_main$H, {
        has: __props.post.has_bookmark,
        count: __props.post.bookmarks_count,
        post_id: __props.post.id
      }, null, _parent));
      _push(`</span><span class="me-2 text-slate-700">`);
      _push(ssrRenderComponent(_sfc_main$M, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(IconArrowForwardUp, { class: "w-6 h-6 stroke-3/2" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(IconArrowForwardUp, { class: "w-6 h-6 stroke-3/2" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span></div></div></footer></div><section>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        post: __props.post,
        onLoad: ($event) => footerFeedIsLoaded.value = true
      }, null, _parent));
      _push(`</section>`);
      if (footerFeedIsLoaded.value && footerFeedPosts.value.length > 0) {
        _push(`<section class="mt-5 bg-white rounded-xl"><div class="border-b-2 px-5 py-4 font-medium"> Возможно вам будет интересно </div><div class="space-y-5 bg-bck">`);
        _push(ssrRenderComponent(_sfc_main$N, {
          onLoad: ($event) => handleLoadFooterEvent()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(footerFeedPosts.value, (post, index) => {
                _push2(ssrRenderComponent(Post, {
                  post,
                  class: index == 0 ? "rounded-t-none" : ""
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(footerFeedPosts.value, (post, index) => {
                  return openBlock(), createBlock(Post, {
                    post,
                    class: index == 0 ? "rounded-t-none" : ""
                  }, null, 8, ["post", "class"]);
                }), 256))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/post.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_33 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
function t(t4, r2) {
  for (var n2 = 0; n2 < r2.length; n2++) {
    var e2 = r2[n2];
    e2.enumerable = e2.enumerable || false, e2.configurable = true, "value" in e2 && (e2.writable = true), Object.defineProperty(t4, "symbol" == typeof (o2 = function(t5, r3) {
      if ("object" != typeof t5 || null === t5)
        return t5;
      var n3 = t5[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var e3 = n3.call(t5, "string");
        if ("object" != typeof e3)
          return e3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(t5);
    }(e2.key)) ? o2 : String(o2), e2);
  }
  var o2;
}
function r(r2, n2, e2) {
  return n2 && t(r2.prototype, n2), e2 && t(r2, e2), Object.defineProperty(r2, "prototype", { writable: false }), r2;
}
function n() {
  return n = Object.assign ? Object.assign.bind() : function(t4) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var n2 = arguments[r2];
      for (var e2 in n2)
        Object.prototype.hasOwnProperty.call(n2, e2) && (t4[e2] = n2[e2]);
    }
    return t4;
  }, n.apply(this, arguments);
}
function e(t4) {
  return e = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t5) {
    return t5.__proto__ || Object.getPrototypeOf(t5);
  }, e(t4);
}
function o(t4, r2) {
  return o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t5, r3) {
    return t5.__proto__ = r3, t5;
  }, o(t4, r2);
}
function i(t4, r2, n2) {
  return i = function() {
    if ("undefined" == typeof Reflect || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if ("function" == typeof Proxy)
      return true;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch (t5) {
      return false;
    }
  }() ? Reflect.construct.bind() : function(t5, r3, n3) {
    var e2 = [null];
    e2.push.apply(e2, r3);
    var i2 = new (Function.bind.apply(t5, e2))();
    return n3 && o(i2, n3.prototype), i2;
  }, i.apply(null, arguments);
}
function u(t4) {
  var r2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return u = function(t5) {
    if (null === t5 || -1 === Function.toString.call(t5).indexOf("[native code]"))
      return t5;
    if ("function" != typeof t5)
      throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r2) {
      if (r2.has(t5))
        return r2.get(t5);
      r2.set(t5, n2);
    }
    function n2() {
      return i(t5, arguments, e(this).constructor);
    }
    return n2.prototype = Object.create(t5.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), o(n2, t5);
  }, u(t4);
}
var f = String.prototype.replace, a = /%20/g, c = "RFC3986", l = { default: c, formatters: { RFC1738: function(t4) {
  return f.call(t4, a, "+");
}, RFC3986: function(t4) {
  return String(t4);
} }, RFC1738: "RFC1738", RFC3986: c }, s = Object.prototype.hasOwnProperty, v = Array.isArray, p = function() {
  for (var t4 = [], r2 = 0; r2 < 256; ++r2)
    t4.push("%" + ((r2 < 16 ? "0" : "") + r2.toString(16)).toUpperCase());
  return t4;
}(), y = function(t4, r2) {
  for (var n2 = r2 && r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, e2 = 0; e2 < t4.length; ++e2)
    void 0 !== t4[e2] && (n2[e2] = t4[e2]);
  return n2;
}, d = { arrayToObject: y, assign: function(t4, r2) {
  return Object.keys(r2).reduce(function(t5, n2) {
    return t5[n2] = r2[n2], t5;
  }, t4);
}, combine: function(t4, r2) {
  return [].concat(t4, r2);
}, compact: function(t4) {
  for (var r2 = [{ obj: { o: t4 }, prop: "o" }], n2 = [], e2 = 0; e2 < r2.length; ++e2)
    for (var o2 = r2[e2], i2 = o2.obj[o2.prop], u2 = Object.keys(i2), f2 = 0; f2 < u2.length; ++f2) {
      var a2 = u2[f2], c2 = i2[a2];
      "object" == typeof c2 && null !== c2 && -1 === n2.indexOf(c2) && (r2.push({ obj: i2, prop: a2 }), n2.push(c2));
    }
  return function(t5) {
    for (; t5.length > 1; ) {
      var r3 = t5.pop(), n3 = r3.obj[r3.prop];
      if (v(n3)) {
        for (var e3 = [], o3 = 0; o3 < n3.length; ++o3)
          void 0 !== n3[o3] && e3.push(n3[o3]);
        r3.obj[r3.prop] = e3;
      }
    }
  }(r2), t4;
}, decode: function(t4, r2, n2) {
  var e2 = t4.replace(/\+/g, " ");
  if ("iso-8859-1" === n2)
    return e2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(e2);
  } catch (t5) {
    return e2;
  }
}, encode: function(t4, r2, n2, e2, o2) {
  if (0 === t4.length)
    return t4;
  var i2 = t4;
  if ("symbol" == typeof t4 ? i2 = Symbol.prototype.toString.call(t4) : "string" != typeof t4 && (i2 = String(t4)), "iso-8859-1" === n2)
    return escape(i2).replace(/%u[0-9a-f]{4}/gi, function(t5) {
      return "%26%23" + parseInt(t5.slice(2), 16) + "%3B";
    });
  for (var u2 = "", f2 = 0; f2 < i2.length; ++f2) {
    var a2 = i2.charCodeAt(f2);
    45 === a2 || 46 === a2 || 95 === a2 || 126 === a2 || a2 >= 48 && a2 <= 57 || a2 >= 65 && a2 <= 90 || a2 >= 97 && a2 <= 122 || o2 === l.RFC1738 && (40 === a2 || 41 === a2) ? u2 += i2.charAt(f2) : a2 < 128 ? u2 += p[a2] : a2 < 2048 ? u2 += p[192 | a2 >> 6] + p[128 | 63 & a2] : a2 < 55296 || a2 >= 57344 ? u2 += p[224 | a2 >> 12] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2] : (a2 = 65536 + ((1023 & a2) << 10 | 1023 & i2.charCodeAt(f2 += 1)), u2 += p[240 | a2 >> 18] + p[128 | a2 >> 12 & 63] + p[128 | a2 >> 6 & 63] + p[128 | 63 & a2]);
  }
  return u2;
}, isBuffer: function(t4) {
  return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
}, isRegExp: function(t4) {
  return "[object RegExp]" === Object.prototype.toString.call(t4);
}, maybeMap: function(t4, r2) {
  if (v(t4)) {
    for (var n2 = [], e2 = 0; e2 < t4.length; e2 += 1)
      n2.push(r2(t4[e2]));
    return n2;
  }
  return r2(t4);
}, merge: function t2(r2, n2, e2) {
  if (!n2)
    return r2;
  if ("object" != typeof n2) {
    if (v(r2))
      r2.push(n2);
    else {
      if (!r2 || "object" != typeof r2)
        return [r2, n2];
      (e2 && (e2.plainObjects || e2.allowPrototypes) || !s.call(Object.prototype, n2)) && (r2[n2] = true);
    }
    return r2;
  }
  if (!r2 || "object" != typeof r2)
    return [r2].concat(n2);
  var o2 = r2;
  return v(r2) && !v(n2) && (o2 = y(r2, e2)), v(r2) && v(n2) ? (n2.forEach(function(n3, o3) {
    if (s.call(r2, o3)) {
      var i2 = r2[o3];
      i2 && "object" == typeof i2 && n3 && "object" == typeof n3 ? r2[o3] = t2(i2, n3, e2) : r2.push(n3);
    } else
      r2[o3] = n3;
  }), r2) : Object.keys(n2).reduce(function(r3, o3) {
    var i2 = n2[o3];
    return r3[o3] = s.call(r3, o3) ? t2(r3[o3], i2, e2) : i2, r3;
  }, o2);
} }, b = Object.prototype.hasOwnProperty, h = { brackets: function(t4) {
  return t4 + "[]";
}, comma: "comma", indices: function(t4, r2) {
  return t4 + "[" + r2 + "]";
}, repeat: function(t4) {
  return t4;
} }, g = Array.isArray, m = String.prototype.split, j = Array.prototype.push, w = function(t4, r2) {
  j.apply(t4, g(r2) ? r2 : [r2]);
}, O = Date.prototype.toISOString, E = l.default, R = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: d.encode, encodeValuesOnly: false, format: E, formatter: l.formatters[E], indices: false, serializeDate: function(t4) {
  return O.call(t4);
}, skipNulls: false, strictNullHandling: false }, S = function t3(r2, n2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2) {
  var b2, h2 = r2;
  if ("function" == typeof f2 ? h2 = f2(n2, h2) : h2 instanceof Date ? h2 = l2(h2) : "comma" === e2 && g(h2) && (h2 = d.maybeMap(h2, function(t4) {
    return t4 instanceof Date ? l2(t4) : t4;
  })), null === h2) {
    if (o2)
      return u2 && !p2 ? u2(n2, R.encoder, y2, "key", s2) : n2;
    h2 = "";
  }
  if ("string" == typeof (b2 = h2) || "number" == typeof b2 || "boolean" == typeof b2 || "symbol" == typeof b2 || "bigint" == typeof b2 || d.isBuffer(h2)) {
    if (u2) {
      var j2 = p2 ? n2 : u2(n2, R.encoder, y2, "key", s2);
      if ("comma" === e2 && p2) {
        for (var O2 = m.call(String(h2), ","), E2 = "", S2 = 0; S2 < O2.length; ++S2)
          E2 += (0 === S2 ? "" : ",") + v2(u2(O2[S2], R.encoder, y2, "value", s2));
        return [v2(j2) + "=" + E2];
      }
      return [v2(j2) + "=" + v2(u2(h2, R.encoder, y2, "value", s2))];
    }
    return [v2(n2) + "=" + v2(String(h2))];
  }
  var k2, x2 = [];
  if (void 0 === h2)
    return x2;
  if ("comma" === e2 && g(h2))
    k2 = [{ value: h2.length > 0 ? h2.join(",") || null : void 0 }];
  else if (g(f2))
    k2 = f2;
  else {
    var T2 = Object.keys(h2);
    k2 = a2 ? T2.sort(a2) : T2;
  }
  for (var N2 = 0; N2 < k2.length; ++N2) {
    var C2 = k2[N2], D2 = "object" == typeof C2 && void 0 !== C2.value ? C2.value : h2[C2];
    if (!i2 || null !== D2) {
      var $2 = g(h2) ? "function" == typeof e2 ? e2(n2, C2) : n2 : n2 + (c2 ? "." + C2 : "[" + C2 + "]");
      w(x2, t3(D2, $2, e2, o2, i2, u2, f2, a2, c2, l2, s2, v2, p2, y2));
    }
  }
  return x2;
}, k = Object.prototype.hasOwnProperty, x = Array.isArray, T = { allowDots: false, allowPrototypes: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: d.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, N = function(t4) {
  return t4.replace(/&#(\d+);/g, function(t5, r2) {
    return String.fromCharCode(parseInt(r2, 10));
  });
}, C = function(t4, r2) {
  return t4 && "string" == typeof t4 && r2.comma && t4.indexOf(",") > -1 ? t4.split(",") : t4;
}, D = function(t4, r2, n2, e2) {
  if (t4) {
    var o2 = n2.allowDots ? t4.replace(/\.([^.[]+)/g, "[$1]") : t4, i2 = /(\[[^[\]]*])/g, u2 = n2.depth > 0 && /(\[[^[\]]*])/.exec(o2), f2 = u2 ? o2.slice(0, u2.index) : o2, a2 = [];
    if (f2) {
      if (!n2.plainObjects && k.call(Object.prototype, f2) && !n2.allowPrototypes)
        return;
      a2.push(f2);
    }
    for (var c2 = 0; n2.depth > 0 && null !== (u2 = i2.exec(o2)) && c2 < n2.depth; ) {
      if (c2 += 1, !n2.plainObjects && k.call(Object.prototype, u2[1].slice(1, -1)) && !n2.allowPrototypes)
        return;
      a2.push(u2[1]);
    }
    return u2 && a2.push("[" + o2.slice(u2.index) + "]"), function(t5, r3, n3, e3) {
      for (var o3 = e3 ? r3 : C(r3, n3), i3 = t5.length - 1; i3 >= 0; --i3) {
        var u3, f3 = t5[i3];
        if ("[]" === f3 && n3.parseArrays)
          u3 = [].concat(o3);
        else {
          u3 = n3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var a3 = "[" === f3.charAt(0) && "]" === f3.charAt(f3.length - 1) ? f3.slice(1, -1) : f3, c3 = parseInt(a3, 10);
          n3.parseArrays || "" !== a3 ? !isNaN(c3) && f3 !== a3 && String(c3) === a3 && c3 >= 0 && n3.parseArrays && c3 <= n3.arrayLimit ? (u3 = [])[c3] = o3 : "__proto__" !== a3 && (u3[a3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(a2, r2, n2, e2);
  }
}, $ = function(t4, r2) {
  var n2 = function(t5) {
    if (!t5)
      return T;
    if (null != t5.decoder && "function" != typeof t5.decoder)
      throw new TypeError("Decoder has to be a function.");
    if (void 0 !== t5.charset && "utf-8" !== t5.charset && "iso-8859-1" !== t5.charset)
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    return { allowDots: void 0 === t5.allowDots ? T.allowDots : !!t5.allowDots, allowPrototypes: "boolean" == typeof t5.allowPrototypes ? t5.allowPrototypes : T.allowPrototypes, arrayLimit: "number" == typeof t5.arrayLimit ? t5.arrayLimit : T.arrayLimit, charset: void 0 === t5.charset ? T.charset : t5.charset, charsetSentinel: "boolean" == typeof t5.charsetSentinel ? t5.charsetSentinel : T.charsetSentinel, comma: "boolean" == typeof t5.comma ? t5.comma : T.comma, decoder: "function" == typeof t5.decoder ? t5.decoder : T.decoder, delimiter: "string" == typeof t5.delimiter || d.isRegExp(t5.delimiter) ? t5.delimiter : T.delimiter, depth: "number" == typeof t5.depth || false === t5.depth ? +t5.depth : T.depth, ignoreQueryPrefix: true === t5.ignoreQueryPrefix, interpretNumericEntities: "boolean" == typeof t5.interpretNumericEntities ? t5.interpretNumericEntities : T.interpretNumericEntities, parameterLimit: "number" == typeof t5.parameterLimit ? t5.parameterLimit : T.parameterLimit, parseArrays: false !== t5.parseArrays, plainObjects: "boolean" == typeof t5.plainObjects ? t5.plainObjects : T.plainObjects, strictNullHandling: "boolean" == typeof t5.strictNullHandling ? t5.strictNullHandling : T.strictNullHandling };
  }(r2);
  if ("" === t4 || null == t4)
    return n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var e2 = "string" == typeof t4 ? function(t5, r3) {
    var n3, e3 = {}, o3 = (r3.ignoreQueryPrefix ? t5.replace(/^\?/, "") : t5).split(r3.delimiter, Infinity === r3.parameterLimit ? void 0 : r3.parameterLimit), i3 = -1, u3 = r3.charset;
    if (r3.charsetSentinel)
      for (n3 = 0; n3 < o3.length; ++n3)
        0 === o3[n3].indexOf("utf8=") && ("utf8=%E2%9C%93" === o3[n3] ? u3 = "utf-8" : "utf8=%26%2310003%3B" === o3[n3] && (u3 = "iso-8859-1"), i3 = n3, n3 = o3.length);
    for (n3 = 0; n3 < o3.length; ++n3)
      if (n3 !== i3) {
        var f3, a3, c2 = o3[n3], l2 = c2.indexOf("]="), s2 = -1 === l2 ? c2.indexOf("=") : l2 + 1;
        -1 === s2 ? (f3 = r3.decoder(c2, T.decoder, u3, "key"), a3 = r3.strictNullHandling ? null : "") : (f3 = r3.decoder(c2.slice(0, s2), T.decoder, u3, "key"), a3 = d.maybeMap(C(c2.slice(s2 + 1), r3), function(t6) {
          return r3.decoder(t6, T.decoder, u3, "value");
        })), a3 && r3.interpretNumericEntities && "iso-8859-1" === u3 && (a3 = N(a3)), c2.indexOf("[]=") > -1 && (a3 = x(a3) ? [a3] : a3), e3[f3] = k.call(e3, f3) ? d.combine(e3[f3], a3) : a3;
      }
    return e3;
  }(t4, n2) : t4, o2 = n2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(e2), u2 = 0; u2 < i2.length; ++u2) {
    var f2 = i2[u2], a2 = D(f2, e2[f2], n2, "string" == typeof t4);
    o2 = d.merge(o2, a2, n2);
  }
  return d.compact(o2);
}, F = /* @__PURE__ */ function() {
  function t4(t5, r2, n3) {
    var e2, o2;
    this.name = t5, this.definition = r2, this.bindings = null != (e2 = r2.bindings) ? e2 : {}, this.wheres = null != (o2 = r2.wheres) ? o2 : {}, this.config = n3;
  }
  var n2 = t4.prototype;
  return n2.matchesUrl = function(t5) {
    var r2 = this;
    if (!this.definition.methods.includes("GET"))
      return false;
    var n3 = this.template.replace(/(\/?){([^}?]*)(\??)}/g, function(t6, n4, e3, o3) {
      var i3, u3 = "(?<" + e3 + ">" + ((null == (i3 = r2.wheres[e3]) ? void 0 : i3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+") + ")";
      return o3 ? "(" + n4 + u3 + ")?" : "" + n4 + u3;
    }).replace(/^\w+:\/\//, ""), e2 = t5.replace(/^\w+:\/\//, "").split("?"), o2 = e2[0], i2 = e2[1], u2 = new RegExp("^" + n3 + "/?$").exec(decodeURI(o2));
    if (u2) {
      for (var f2 in u2.groups)
        u2.groups[f2] = "string" == typeof u2.groups[f2] ? decodeURIComponent(u2.groups[f2]) : u2.groups[f2];
      return { params: u2.groups, query: $(i2) };
    }
    return false;
  }, n2.compile = function(t5) {
    var r2 = this;
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, function(n3, e2, o2) {
      var i2, u2;
      if (!o2 && [null, void 0].includes(t5[e2]))
        throw new Error("Ziggy error: '" + e2 + "' parameter is required for route '" + r2.name + "'.");
      if (r2.wheres[e2] && !new RegExp("^" + (o2 ? "(" + r2.wheres[e2] + ")?" : r2.wheres[e2]) + "$").test(null != (u2 = t5[e2]) ? u2 : ""))
        throw new Error("Ziggy error: '" + e2 + "' parameter does not match required format '" + r2.wheres[e2] + "' for route '" + r2.name + "'.");
      return encodeURI(null != (i2 = t5[e2]) ? i2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.origin + "//", this.origin + "/").replace(/\/+$/, "") : this.template;
  }, r(t4, [{ key: "template", get: function() {
    var t5 = (this.origin + "/" + this.definition.uri).replace(/\/+$/, "");
    return "" === t5 ? "/" : t5;
  } }, { key: "origin", get: function() {
    return this.config.absolute ? this.definition.domain ? "" + this.config.url.match(/^\w+:\/\//)[0] + this.definition.domain + (this.config.port ? ":" + this.config.port : "") : this.config.url : "";
  } }, { key: "parameterSegments", get: function() {
    var t5, r2;
    return null != (t5 = null == (r2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : r2.map(function(t6) {
      return { name: t6.replace(/{|\??}/g, ""), required: !/\?}$/.test(t6) };
    })) ? t5 : [];
  } }]), t4;
}(), I = /* @__PURE__ */ function(t4) {
  var e2, i2;
  function u2(r2, e3, o2, i3) {
    var u3;
    if (void 0 === o2 && (o2 = true), (u3 = t4.call(this) || this).t = null != i3 ? i3 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, u3.t = n({}, u3.t, { absolute: o2 }), r2) {
      if (!u3.t.routes[r2])
        throw new Error("Ziggy error: route '" + r2 + "' is not in the route list.");
      u3.i = new F(r2, u3.t.routes[r2], u3.t), u3.u = u3.l(e3);
    }
    return u3;
  }
  i2 = t4, (e2 = u2).prototype = Object.create(i2.prototype), e2.prototype.constructor = e2, o(e2, i2);
  var f2 = u2.prototype;
  return f2.toString = function() {
    var t5 = this, r2 = Object.keys(this.u).filter(function(r3) {
      return !t5.i.parameterSegments.some(function(t6) {
        return t6.name === r3;
      });
    }).filter(function(t6) {
      return "_query" !== t6;
    }).reduce(function(r3, e3) {
      var o2;
      return n({}, r3, ((o2 = {})[e3] = t5.u[e3], o2));
    }, {});
    return this.i.compile(this.u) + function(t6, r3) {
      var n2, e3 = t6, o2 = function(t7) {
        if (!t7)
          return R;
        if (null != t7.encoder && "function" != typeof t7.encoder)
          throw new TypeError("Encoder has to be a function.");
        var r4 = t7.charset || R.charset;
        if (void 0 !== t7.charset && "utf-8" !== t7.charset && "iso-8859-1" !== t7.charset)
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n3 = l.default;
        if (void 0 !== t7.format) {
          if (!b.call(l.formatters, t7.format))
            throw new TypeError("Unknown format option provided.");
          n3 = t7.format;
        }
        var e4 = l.formatters[n3], o3 = R.filter;
        return ("function" == typeof t7.filter || g(t7.filter)) && (o3 = t7.filter), { addQueryPrefix: "boolean" == typeof t7.addQueryPrefix ? t7.addQueryPrefix : R.addQueryPrefix, allowDots: void 0 === t7.allowDots ? R.allowDots : !!t7.allowDots, charset: r4, charsetSentinel: "boolean" == typeof t7.charsetSentinel ? t7.charsetSentinel : R.charsetSentinel, delimiter: void 0 === t7.delimiter ? R.delimiter : t7.delimiter, encode: "boolean" == typeof t7.encode ? t7.encode : R.encode, encoder: "function" == typeof t7.encoder ? t7.encoder : R.encoder, encodeValuesOnly: "boolean" == typeof t7.encodeValuesOnly ? t7.encodeValuesOnly : R.encodeValuesOnly, filter: o3, format: n3, formatter: e4, serializeDate: "function" == typeof t7.serializeDate ? t7.serializeDate : R.serializeDate, skipNulls: "boolean" == typeof t7.skipNulls ? t7.skipNulls : R.skipNulls, sort: "function" == typeof t7.sort ? t7.sort : null, strictNullHandling: "boolean" == typeof t7.strictNullHandling ? t7.strictNullHandling : R.strictNullHandling };
      }(r3);
      "function" == typeof o2.filter ? e3 = (0, o2.filter)("", e3) : g(o2.filter) && (n2 = o2.filter);
      var i3 = [];
      if ("object" != typeof e3 || null === e3)
        return "";
      var u3 = h[r3 && r3.arrayFormat in h ? r3.arrayFormat : r3 && "indices" in r3 ? r3.indices ? "indices" : "repeat" : "indices"];
      n2 || (n2 = Object.keys(e3)), o2.sort && n2.sort(o2.sort);
      for (var f3 = 0; f3 < n2.length; ++f3) {
        var a2 = n2[f3];
        o2.skipNulls && null === e3[a2] || w(i3, S(e3[a2], a2, u3, o2.strictNullHandling, o2.skipNulls, o2.encode ? o2.encoder : null, o2.filter, o2.sort, o2.allowDots, o2.serializeDate, o2.format, o2.formatter, o2.encodeValuesOnly, o2.charset));
      }
      var c2 = i3.join(o2.delimiter), s2 = true === o2.addQueryPrefix ? "?" : "";
      return o2.charsetSentinel && (s2 += "iso-8859-1" === o2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), c2.length > 0 ? s2 + c2 : "";
    }(n({}, r2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: function(t6, r3) {
      return "boolean" == typeof t6 ? Number(t6) : r3(t6);
    } });
  }, f2.v = function(t5) {
    var r2 = this;
    t5 ? this.t.absolute && t5.startsWith("/") && (t5 = this.p().host + t5) : t5 = this.h();
    var e3 = {}, o2 = Object.entries(this.t.routes).find(function(n2) {
      return e3 = new F(n2[0], n2[1], r2.t).matchesUrl(t5);
    }) || [void 0, void 0];
    return n({ name: o2[0] }, e3, { route: o2[1] });
  }, f2.h = function() {
    var t5 = this.p(), r2 = t5.pathname, n2 = t5.search;
    return (this.t.absolute ? t5.host + r2 : r2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + n2;
  }, f2.current = function(t5, r2) {
    var e3 = this.v(), o2 = e3.name, i3 = e3.params, u3 = e3.query, f3 = e3.route;
    if (!t5)
      return o2;
    var a2 = new RegExp("^" + t5.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$").test(o2);
    if ([null, void 0].includes(r2) || !a2)
      return a2;
    var c2 = new F(o2, f3, this.t);
    r2 = this.l(r2, c2);
    var l2 = n({}, i3, u3);
    return !(!Object.values(r2).every(function(t6) {
      return !t6;
    }) || Object.values(l2).some(function(t6) {
      return void 0 !== t6;
    })) || Object.entries(r2).every(function(t6) {
      return l2[t6[0]] == t6[1];
    });
  }, f2.p = function() {
    var t5, r2, n2, e3, o2, i3, u3 = "undefined" != typeof window ? window.location : {}, f3 = u3.host, a2 = u3.pathname, c2 = u3.search;
    return { host: null != (t5 = null == (r2 = this.t.location) ? void 0 : r2.host) ? t5 : void 0 === f3 ? "" : f3, pathname: null != (n2 = null == (e3 = this.t.location) ? void 0 : e3.pathname) ? n2 : void 0 === a2 ? "" : a2, search: null != (o2 = null == (i3 = this.t.location) ? void 0 : i3.search) ? o2 : void 0 === c2 ? "" : c2 };
  }, f2.has = function(t5) {
    return Object.keys(this.t.routes).includes(t5);
  }, f2.l = function(t5, r2) {
    var e3 = this;
    void 0 === t5 && (t5 = {}), void 0 === r2 && (r2 = this.i), null != t5 || (t5 = {}), t5 = ["string", "number"].includes(typeof t5) ? [t5] : t5;
    var o2 = r2.parameterSegments.filter(function(t6) {
      return !e3.t.defaults[t6.name];
    });
    if (Array.isArray(t5))
      t5 = t5.reduce(function(t6, r3, e4) {
        var i4, u3;
        return n({}, t6, o2[e4] ? ((i4 = {})[o2[e4].name] = r3, i4) : "object" == typeof r3 ? r3 : ((u3 = {})[r3] = "", u3));
      }, {});
    else if (1 === o2.length && !t5[o2[0].name] && (t5.hasOwnProperty(Object.values(r2.bindings)[0]) || t5.hasOwnProperty("id"))) {
      var i3;
      (i3 = {})[o2[0].name] = t5, t5 = i3;
    }
    return n({}, this.g(r2), this.m(t5, r2));
  }, f2.g = function(t5) {
    var r2 = this;
    return t5.parameterSegments.filter(function(t6) {
      return r2.t.defaults[t6.name];
    }).reduce(function(t6, e3, o2) {
      var i3, u3 = e3.name;
      return n({}, t6, ((i3 = {})[u3] = r2.t.defaults[u3], i3));
    }, {});
  }, f2.m = function(t5, r2) {
    var e3 = r2.bindings, o2 = r2.parameterSegments;
    return Object.entries(t5).reduce(function(t6, r3) {
      var i3, u3, f3 = r3[0], a2 = r3[1];
      if (!a2 || "object" != typeof a2 || Array.isArray(a2) || !o2.some(function(t7) {
        return t7.name === f3;
      }))
        return n({}, t6, ((u3 = {})[f3] = a2, u3));
      if (!a2.hasOwnProperty(e3[f3])) {
        if (!a2.hasOwnProperty("id"))
          throw new Error("Ziggy error: object passed as '" + f3 + "' parameter is missing route model binding key '" + e3[f3] + "'.");
        e3[f3] = "id";
      }
      return n({}, t6, ((i3 = {})[f3] = a2[e3[f3]], i3));
    }, {});
  }, f2.valueOf = function() {
    return this.toString();
  }, f2.check = function(t5) {
    return this.has(t5);
  }, r(u2, [{ key: "params", get: function() {
    var t5 = this.v();
    return n({}, t5.params, t5.query);
  } }]), u2;
}(/* @__PURE__ */ u(String)), P = { install: function(t4, r2) {
  var n2 = function(t5, n3, e2, o2) {
    return void 0 === o2 && (o2 = r2), function(t6, r3, n4, e3) {
      var o3 = new I(t6, r3, n4, e3);
      return t6 ? o3.toString() : o3;
    }(t5, n3, e2, o2);
  };
  t4.mixin({ methods: { route: n2 } }), parseInt(t4.version) > 2 && t4.provide("route", n2);
} };
const app = "";
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Account.vue": __vite_glob_0_0, "./Pages/Admin/Admins.vue": __vite_glob_0_1, "./Pages/Admin/Film.vue": __vite_glob_0_2, "./Pages/Admin/Films.vue": __vite_glob_0_3, "./Pages/Admin/Genre.vue": __vite_glob_0_4, "./Pages/Admin/Genres.vue": __vite_glob_0_5, "./Pages/Admin/Index.vue": __vite_glob_0_6, "./Pages/Admin/Moders.vue": __vite_glob_0_7, "./Pages/Admin/Object.vue": __vite_glob_0_8, "./Pages/Admin/ObjectCreator.vue": __vite_glob_0_9, "./Pages/Admin/Posts.vue": __vite_glob_0_10, "./Pages/Admin/Tags.vue": __vite_glob_0_11, "./Pages/Admin/Users.vue": __vite_glob_0_12, "./Pages/Auth/Bookmarks.vue": __vite_glob_0_13, "./Pages/Auth/ConfirmPassword.vue": __vite_glob_0_14, "./Pages/Auth/Drafts.vue": __vite_glob_0_15, "./Pages/Auth/ForgotPassword.vue": __vite_glob_0_16, "./Pages/Auth/Login.vue": __vite_glob_0_17, "./Pages/Auth/Notifications.vue": __vite_glob_0_18, "./Pages/Auth/Register.vue": __vite_glob_0_19, "./Pages/Auth/ResetPassword.vue": __vite_glob_0_20, "./Pages/Auth/Settings/Index.vue": __vite_glob_0_21, "./Pages/Auth/Settings/Profile.vue": __vite_glob_0_22, "./Pages/Auth/Settings/SettingsLayout.vue": __vite_glob_0_23, "./Pages/Auth/VerifyEmail.vue": __vite_glob_0_24, "./Pages/Banned.vue": __vite_glob_0_25, "./Pages/Home/Index.vue": __vite_glob_0_26, "./Pages/Home/New.vue": __vite_glob_0_27, "./Pages/Karma/Forbidden.vue": __vite_glob_0_28, "./Pages/Profile/Comments.vue": __vite_glob_0_29, "./Pages/Profile/Index.vue": __vite_glob_0_30, "./Pages/Search.vue": __vite_glob_0_31, "./Pages/Tag.vue": __vite_glob_0_32, "./Pages/post.vue": __vite_glob_0_33 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h$1(App, props) }).use(plugin).use(P).component("Head", Head).component("Link", Link);
    },
    progress: {
      delay: 300,
      color: "#d4620b"
    }
  })
);
