import { useSSRContext, mergeProps, ref, createSlots, withCtx, createVNode, unref, reactive, computed, inject, watch, onMounted, openBlock, createBlock, createTextVNode, onUnmounted, resolveComponent, toDisplayString, nextTick, provide, createCommentVNode, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderStyle, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { I as IconDots, a as IconFlag, b as _sfc_main$b, _ as _sfc_main$i } from "./Film-157939f1.js";
import { _ as _sfc_main$f } from "./Reputation-4f724316.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { U as UserTabletWithElementInside, I as IconArrowForwardUp } from "./UserTabletWithElementInside-40135a27.js";
import { _ as _sfc_main$e } from "./ZoomableImage-f03d568f.js";
import { I as IconTrash, _ as _sfc_main$g, a as _sfc_main$j, b as _sfc_main$k, c as _sfc_main$l, P as Post } from "./Post-8130b980.js";
import { l as IconPencil, m as _sfc_main$c, k as IconPhoto, q as _sfc_main$d, j as instance, M as MainLayout, i as _sfc_main$h } from "./MainLayout-b86e9381.js";
import { usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$a } from "./Modal-dfb0e8c9.js";
import axios$1 from "axios";
import { I as IconComments } from "./IconComments-a1dcea06.js";
import { _ as _sfc_main$m } from "./InfiniteScrollContainer-3931797f.js";
import "./PrimaryButton-c33e55f3.js";
import "./IconDown-5874ffdc.js";
import "./UserTablet-8c54f90d.js";
import "./ApplicationLogo-f17895f3.js";
import "lodash/function.js";
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
      _push(ssrRenderComponent(_sfc_main$a, { align: "left" }, createSlots({
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
      _push(ssrRenderComponent(_sfc_main$b, {
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
        _push(ssrRenderComponent(_sfc_main$c, {
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
                _push2(ssrRenderComponent(_sfc_main$d, { color: "text-white" }, null, _parent2, _scopeId));
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
                    createVNode(_sfc_main$d, { color: "text-white" })
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
    const injectedCallMessage = inject("callMessage");
    instance.setCallbackFunction(injectedCallMessage);
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
      instance.post(route("comment.update"), formData).catch((res) => {
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
    const sendReply = (v) => {
      emit("sendReply", v);
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
        (i) => i == props.comment.comment_id
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
      props.comment.replies[props.comment.replies.findIndex((c) => c.id == id)].text = "Комментарий удалён";
      axios.post(route("comment.delete"), {
        "_method": "DELETE",
        id
      }).then((res) => {
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
        _push(`<div class="flex justify-center relative" style="${ssrRenderStyle({ "max-width": "40%", "max-height": "400px" })}"><img${ssrRenderAttr("src", "/media/" + __props.comment.image_preview)} class="rounded-lg mx-auto w-full" style="${ssrRenderStyle({ "max-height": "400px" })}" alt="">`);
        _push(ssrRenderComponent(_sfc_main$e, {
          preview: "/media/" + __props.comment.image_preview,
          then: _ctx.route("im", [__props.comment.image, 500]),
          class: "rounded-lg absolute inset-x-0 w-full h-full object-scale-down",
          style: { "max-height": "400px" }
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main><footer class="flex items-center">`);
      _push(ssrRenderComponent(_sfc_main$f, {
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
          ssrRenderList(__props.comment.replies, (reply, i) => {
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
              countOfNeighbours: __props.comment.replies.length - (i + 1),
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
    const sortByReputationOverall = (a, b) => {
      if (b.rep.overall > a.rep.overall)
        return 1;
      return -1;
    };
    const sortByNewest = (a, b) => {
      if (b.created_at > a.created_at)
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
            let r = updateCount(reply);
            count += r;
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
      comments.value[comments.value.findIndex((c) => c.id == id)].text = "Комментарий удалён";
      axios$1.post(route("comment.delete"), {
        "_method": "DELETE",
        id
      }).then((res) => {
        console.log(res.data);
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
      _push(ssrRenderComponent(_sfc_main$a, null, {
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
        _push(ssrRenderComponent(_sfc_main$d, { class: "mx-auto stroke-gray-500" }, null, _parent));
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
          films_block.value.scrollIntoView({ behavior: "smooth" });
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
      _push(ssrRenderComponent(_sfc_main$g, {
        user: _ctx.$page.props.auth.user,
        post: __props.post
      }, null, _parent));
      _push(`</div></header>`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("post", [__props.post.id, __props.post.slug])
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="sm:px-3 xs:px-1 text-xl font-medium"${_scopeId}><p${_scopeId}>${ssrInterpolate(__props.post.title)}</p></section><section class="sm:px-3 xs:px-1 mt-2 text-base mb-2"${_scopeId}><p${_scopeId}>${__props.post.description}</p></section><div class="${ssrRenderClass([{ "p-2 sm:px-3 xs:px-1": __props.post.image }, "flex justify-center relative"])}"${_scopeId}><img${ssrRenderAttr("src", `/media/${__props.post.image_preview}`)} class="rounded-lg mx-auto w-full" style="${ssrRenderStyle({ "max-height": "600px" })}" alt=""${_scopeId}>`);
            if (__props.post.image) {
              _push2(ssrRenderComponent(_sfc_main$h, {
                preview: `/media/${__props.post.image_preview}`,
                then: _ctx.route("im", [__props.post.image, 800]),
                class: "rounded-lg object-scale-down absolute",
                style: { "min-width": "auto", "max-height": "600px" }
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
                class: [{ "p-2 sm:px-3 xs:px-1": __props.post.image }, "flex justify-center relative"]
              }, [
                createVNode("img", {
                  src: `/media/${__props.post.image_preview}`,
                  class: "rounded-lg mx-auto w-full",
                  style: { "max-height": "600px" },
                  alt: ""
                }, null, 8, ["src"]),
                __props.post.image ? (openBlock(), createBlock(_sfc_main$h, {
                  key: 0,
                  preview: `/media/${__props.post.image_preview}`,
                  then: _ctx.route("im", [__props.post.image, 800]),
                  class: "rounded-lg object-scale-down absolute",
                  style: { "min-width": "auto", "max-height": "600px" }
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
        _push(ssrRenderComponent(_sfc_main$i, { film }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><footer class="sm:px-3 xs:px-1 py-2"><div class="flex flex-col"><div class="flex items-center space-x-5 text-secondary"><div>${ssrInterpolate(_ctx.$tc("view", __props.post.views))}</div><div>${ssrInterpolate(_ctx.$tc("visit", __props.post.visits))}</div></div><div class="m-0 flex items-center"><span class="me-0">`);
      _push(ssrRenderComponent(_sfc_main$f, {
        type: "Post",
        reputation: __props.post.rep
      }, null, _parent));
      _push(`</span><span class="me-2 text-slate-700">`);
      _push(ssrRenderComponent(_sfc_main$j, {
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
      _push(ssrRenderComponent(_sfc_main$k, {
        has: __props.post.has_bookmark,
        count: __props.post.bookmarks_count,
        post_id: __props.post.id
      }, null, _parent));
      _push(`</span><span class="me-2 text-slate-700">`);
      _push(ssrRenderComponent(_sfc_main$l, {
        href: _ctx.route("post", [__props.post.id, __props.post.slug])
      }, {
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
        _push(ssrRenderComponent(_sfc_main$m, {
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
export {
  _sfc_main as default
};
