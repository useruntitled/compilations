import { useSSRContext, mergeProps, inject, ref, watch, onMounted, computed, resolveComponent, withCtx, createVNode, toDisplayString, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
import { j as instance, k as IconPhoto, i as _sfc_main$2, d as IconTooth } from "./MainLayout-b86e9381.js";
import { _ as _sfc_main$3 } from "./ZoomableImage-f03d568f.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { usePage } from "@inertiajs/vue3";
const _sfc_main$1 = {
  props: {
    karma: null
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<p${ssrRenderAttrs(mergeProps({
    class: ["font-medium", $props.karma > 0 ? "text-green-500" : $props.karma == 0 ? "" : "text-red-500"]
  }, _attrs))}>${ssrInterpolate($props.karma > 0 ? "+" : $props.karma == 0 ? "" : "")} ${ssrInterpolate($props.karma)} <span class="ms-2"></span></p>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/KarmaCountWithEmoji.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const KarmaCountWithEmoji = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
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
        _push(ssrRenderComponent(_sfc_main$2, {
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
          _push(ssrRenderComponent(_sfc_main$2, {
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
        _push(ssrRenderComponent(_sfc_main$3, {
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
        _push(ssrRenderComponent(_sfc_main$3, {
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
          _push(ssrRenderComponent(_sfc_main$2, {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/PageProfileLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
