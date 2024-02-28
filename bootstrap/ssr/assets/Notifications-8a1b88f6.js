import { reactive, ref, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { M as MainLayout, _ as _sfc_main$1, a as _sfc_main$2, b as _sfc_main$3, c as _sfc_main$4 } from "./MainLayout-b86e9381.js";
import { _ as _sfc_main$5 } from "./InfiniteScrollContainer-3931797f.js";
import axios from "axios";
import { E as EmptyFeed } from "./EmptyFeed-b8ebb3a0.js";
import "@inertiajs/vue3";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./PrimaryButton-c33e55f3.js";
import "./Modal-dfb0e8c9.js";
import "./ApplicationLogo-f17895f3.js";
import "./UserTablet-8c54f90d.js";
import "lodash/function.js";
import "./IconDown-5874ffdc.js";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: MainLayout }, {
  __name: "Notifications",
  __ssrInlineRender: true,
  props: {
    notifications: null
  },
  setup(__props) {
    const props = __props;
    const components = reactive({
      "App\\Notifications\\CommentUpNotification": _sfc_main$1,
      "App\\Notifications\\PostWasCommentedNotification": _sfc_main$2,
      "App\\Notifications\\ReplyNotification": _sfc_main$3,
      "App\\Notifications\\PostUpNotification": _sfc_main$4
    });
    const currentPage = ref(2);
    const isLoading = ref(false);
    const isEnd = ref(false);
    const loadNotifications = async () => {
      await axios.get(route("me.notifications.get", [currentPage.value])).then((res) => {
        if (res.data.length == 0) {
          isEnd.value = true;
        } else {
          res.data.forEach((n) => {
            props.notifications.push(n);
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
        _push(ssrRenderComponent(_sfc_main$5, {
          onLoad: ($event) => handleLoadEvent()
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.notifications, (n) => {
                _push2(`<div${_scopeId}>`);
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(components[n.type]), { notification: n }, null), _parent2, _scopeId);
                _push2(`</div>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.notifications, (n) => {
                  return openBlock(), createBlock("div", null, [
                    (openBlock(), createBlock(resolveDynamicComponent(components[n.type]), { notification: n }, null, 8, ["notification"]))
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Notifications.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
