import { ref, resolveComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./PageProfileLayout-585056d6.js";
import { E as EmptyFeed } from "./EmptyFeed-b8ebb3a0.js";
import { U as UserTabletWithElementInside } from "./UserTabletWithElementInside-40135a27.js";
import { M as MainLayout, i as _sfc_main$3 } from "./MainLayout-b86e9381.js";
import { _ as _sfc_main$2 } from "./InfiniteScrollContainer-3931797f.js";
import axios from "axios";
import "./ZoomableImage-f03d568f.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "@inertiajs/vue3";
import "./IconComments-a1dcea06.js";
import "./PrimaryButton-c33e55f3.js";
import "./Modal-dfb0e8c9.js";
import "./ApplicationLogo-f17895f3.js";
import "./UserTablet-8c54f90d.js";
import "lodash/function.js";
import "./IconDown-5874ffdc.js";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: [MainLayout, _sfc_main$1] }, {
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
      await axios.get(route("profile.comments.get", [props.user.id, currentPage.value])).catch((res) => {
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
      _push(ssrRenderComponent(_sfc_main$2, {
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
                      _push3(ssrRenderComponent(_sfc_main$3, {
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
                            createVNode(_sfc_main$3, {
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
                            createVNode(_sfc_main$3, {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Comments.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
