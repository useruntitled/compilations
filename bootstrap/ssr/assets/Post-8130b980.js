import { _ as _sfc_main$7 } from "./Modal-dfb0e8c9.js";
import { l as IconPencil, m as _sfc_main$9, n as IconBookmark, i as _sfc_main$c } from "./MainLayout-b86e9381.js";
import { I as IconComments } from "./IconComments-a1dcea06.js";
import { I as IconDots, a as IconFlag, b as _sfc_main$8, _ as _sfc_main$b } from "./Film-157939f1.js";
import { ref, mergeProps, unref, withCtx, createVNode, renderSlot, toDisplayString, useSSRContext, inject, createSlots, resolveComponent, openBlock, createBlock, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { Link, router, usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$a } from "./Reputation-4f724316.js";
import { U as UserTablet } from "./UserTablet-8c54f90d.js";
import { I as IconArrowForwardUp, U as UserTabletWithElementInside } from "./UserTabletWithElementInside-40135a27.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import axios$1 from "axios";
const _sfc_main$6 = {
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
    const props = __props;
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
            }, "inline-block hover:text-orange-700 hover:bg-orange-100 rounded-full p-1 duration-0"])}"${_scopeId}><div class="${ssrRenderClass(props.class)}"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {
              class: props.class
            }, null, _push2, _parent2, _scopeId);
            _push2(`</div></div><span class="ms-1"${_scopeId}>${ssrInterpolate(__props.text)}</span>`);
          } else {
            return [
              createVNode("div", {
                class: ["inline-block hover:text-orange-700 hover:bg-orange-100 rounded-full p-1 duration-0", {
                  "bg-orange-100": isHovered.value,
                  "text-secondary": !isHovered.value
                }]
              }, [
                createVNode("div", {
                  class: props.class
                }, [
                  renderSlot(_ctx.$slots, "default", {
                    class: props.class
                  })
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/LinkIcon.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor"
  }, _attrs))}><path stroke-width="0%" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8.00293 5.49994C8.00293 4.12061 9.1211 3.00244 10.5004 3.00244H13.5004C14.8798 3.00244 15.9979 4.12061 15.9979 5.49994V6.50244H20.0004C20.5513 6.50244 20.9979 6.94904 20.9979 7.49994C20.9979 8.05085 20.5513 8.49744 20.0004 8.49744H19.4744L18.3244 17.506C18.0696 19.5018 16.3711 20.9972 14.3591 20.9972H9.64179C7.62975 20.9972 5.93127 19.5018 5.67647 17.506L4.52643 8.49744H4.00043C3.44953 8.49744 3.00293 8.05085 3.00293 7.49994C3.00293 6.94904 3.44953 6.50244 4.00043 6.50244H8.00293V5.49994ZM9.99793 6.50244H14.0029V5.49994C14.0029 5.22242 13.778 4.99744 13.5004 4.99744H10.5004C10.2229 4.99744 9.99793 5.22242 9.99793 5.49994V6.50244ZM6.53762 8.49744L7.65541 17.2533C7.78305 18.2531 8.63388 19.0022 9.64179 19.0022H14.3591C15.367 19.0022 16.2178 18.2531 16.3454 17.2533L17.4632 8.49744H6.53762ZM10.0004 10.2524C10.5513 10.2524 10.9979 10.699 10.9979 11.2499V15.7499C10.9979 16.3008 10.5513 16.7474 10.0004 16.7474C9.44953 16.7474 9.00293 16.3008 9.00293 15.7499V11.2499C9.00293 10.699 9.44953 10.2524 10.0004 10.2524ZM14.0004 10.2524C14.5513 10.2524 14.9979 10.699 14.9979 11.2499V15.7499C14.9979 16.3008 14.5513 16.7474 14.0004 16.7474C13.4495 16.7474 13.0029 16.3008 13.0029 15.7499V11.2499C13.0029 10.699 13.4495 10.2524 14.0004 10.2524Z"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconTrash.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const IconTrash = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {
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
      _push(ssrRenderComponent(_sfc_main$7, null, createSlots({
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
      _push(ssrRenderComponent(_sfc_main$8, {
        report_to_type: "post",
        report_to_id: __props.post.id,
        show: showReportModal.value,
        onClose: ($event) => showReportModal.value = !showReportModal.value
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdowns/DropdownReportOrManage.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
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
      _push(ssrRenderComponent(_sfc_main$9, mergeProps({
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Bookmark.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    stroke: "currentColor"
  }, _attrs))}><path stroke-width="0%" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12.344 4.446A5.092 5.092 0 0 1 15.94 3a5.093 5.093 0 0 1 3.57 1.509 5.157 5.157 0 0 1 1.494 3.587 5.159 5.159 0 0 1-1.431 3.614l-.012.012-2.465 2.485a5.08 5.08 0 0 1-6.068.878 5.12 5.12 0 0 1-1.642-1.434 1 1 0 0 1 1.607-1.192 3.086 3.086 0 0 0 4.683.339l2.459-2.478a3.159 3.159 0 0 0 .87-2.206 3.157 3.157 0 0 0-.914-2.197A3.093 3.093 0 0 0 15.922 5a3.092 3.092 0 0 0-2.179.874l-1.408 1.411a1 1 0 1 1-1.415-1.413l1.413-1.416.01-.01Zm-3.611 4.16a5.08 5.08 0 0 1 4.24.305 5.12 5.12 0 0 1 1.641 1.434 1 1 0 0 1-1.606 1.192 3.12 3.12 0 0 0-1-.874 3.086 3.086 0 0 0-3.683.535l-2.46 2.478a3.158 3.158 0 0 0-.869 2.206 3.16 3.16 0 0 0 .913 2.197c.577.581 1.356.91 2.169.917a3.092 3.092 0 0 0 2.178-.873l1.399-1.41a1 1 0 0 1 1.42 1.409l-1.406 1.416-.012.012a5.092 5.092 0 0 1-3.596 1.446 5.093 5.093 0 0 1-3.571-1.508A5.157 5.157 0 0 1 2.996 15.9a5.158 5.158 0 0 1 1.432-3.614l.012-.012 2.465-2.485a5.106 5.106 0 0 1 1.828-1.184Z"></path></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const IconLink = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  __name: "CopyLinkButton",
  __ssrInlineRender: true,
  props: {
    href: null
  },
  setup(__props) {
    const crunch = ref(null);
    const copy = () => {
      crunch.value.document.execCommand("copy");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$7, mergeProps({ width: "200" }, _attrs), {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", null, [
                renderSlot(_ctx.$slots, "default")
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-2"${_scopeId}><button class="flex items-center justify-center space-x-2 hover:bg-gray-100 rounded-lg px-2 py-1"${_scopeId}><span${_scopeId}>`);
            _push2(ssrRenderComponent(IconLink, { class: "w-[20px] h-[20px] text-black" }, null, _parent2, _scopeId));
            _push2(`</span><span class="text-15 text-black p-0 m-0"${_scopeId}> Копировать ссылку </span><input type="hidden"${ssrRenderAttr("value", __props.href)}${_scopeId}></button></div>`);
          } else {
            return [
              createVNode("div", { class: "px-2" }, [
                createVNode("button", {
                  onClick: ($event) => copy(),
                  class: "flex items-center justify-center space-x-2 hover:bg-gray-100 rounded-lg px-2 py-1"
                }, [
                  createVNode("span", null, [
                    createVNode(IconLink, { class: "w-[20px] h-[20px] text-black" })
                  ]),
                  createVNode("span", { class: "text-15 text-black p-0 m-0" }, " Копировать ссылку "),
                  createVNode("input", {
                    ref_key: "crunch",
                    ref: crunch,
                    type: "hidden",
                    value: __props.href
                  }, null, 8, ["value"])
                ], 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CopyLinkButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  props: {
    post: null
  },
  components: {
    CopyLinkButton: _sfc_main$1,
    Reputation: _sfc_main$a,
    IconComments,
    UserTablet,
    LinkIcon: _sfc_main$6,
    IconDots,
    Dropdown: _sfc_main$7,
    IconFlag,
    IconBookmark,
    IconTrash,
    IconPencil,
    IconArrowForwardUp,
    Film: _sfc_main$b,
    UserTabletWithElementInside,
    DropdownReportOrManage: _sfc_main$4,
    LazyImage: _sfc_main$c,
    Bookmark: _sfc_main$3
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_UserTabletWithElementInside = resolveComponent("UserTabletWithElementInside");
  const _component_DropdownReportOrManage = resolveComponent("DropdownReportOrManage");
  const _component_Link = resolveComponent("Link");
  const _component_LazyImage = resolveComponent("LazyImage");
  const _component_Film = resolveComponent("Film");
  const _component_Reputation = resolveComponent("Reputation");
  const _component_LinkIcon = resolveComponent("LinkIcon");
  const _component_IconComments = resolveComponent("IconComments");
  const _component_Bookmark = resolveComponent("Bookmark");
  const _component_copy_link_button = resolveComponent("copy-link-button");
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
        _push2(`<section class="sm:px-3 xs:px-1 text-xl font-medium"${_scopeId}><p${_scopeId}>${ssrInterpolate($props.post.title)}</p></section><section class="sm:px-3 xs:px-1 mt-2 text-base mb-2"${_scopeId}><p${_scopeId}>${$props.post.description}</p></section><div class="${ssrRenderClass([{ "p-2 sm:px-3 xs:px-1": $props.post.image }, "flex justify-center relative"])}"${_scopeId}><img${ssrRenderAttr("src", `/media/${$props.post.image_preview}`)} class="rounded-lg mx-auto w-full h-full" style="${ssrRenderStyle({ "max-height": "600px" })}" alt=""${_scopeId}>`);
        if ($props.post.image) {
          _push2(ssrRenderComponent(_component_LazyImage, {
            preview: `/media/${$props.post.image_preview}`,
            then: _ctx.route("im", [$props.post.image, 800]),
            class: "rounded-lg mx-auto object-scale-down w-full absolute",
            style: { "min-width": "auto", "max-height": "600px" }
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
            class: [{ "p-2 sm:px-3 xs:px-1": $props.post.image }, "flex justify-center relative"]
          }, [
            createVNode("img", {
              src: `/media/${$props.post.image_preview}`,
              class: "rounded-lg mx-auto w-full h-full",
              style: { "max-height": "600px" },
              alt: ""
            }, null, 8, ["src"]),
            $props.post.image ? (openBlock(), createBlock(_component_LazyImage, {
              key: 0,
              preview: `/media/${$props.post.image_preview}`,
              then: _ctx.route("im", [$props.post.image, 800]),
              class: "rounded-lg mx-auto object-scale-down w-full absolute",
              style: { "min-width": "auto", "max-height": "600px" }
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
    "preserve-scroll": "",
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
  _push(ssrRenderComponent(_component_copy_link_button, {
    href: _ctx.route("post", [$props.post.id, $props.post.slug])
  }, {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Post.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Post = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  IconTrash as I,
  Post as P,
  _sfc_main$4 as _,
  _sfc_main$6 as a,
  _sfc_main$3 as b,
  _sfc_main$1 as c
};
