import { ref, resolveComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import axios from "axios";
import { P as Post } from "./Post-8130b980.js";
import { E as EmptyFeed } from "./EmptyFeed-b8ebb3a0.js";
import { _ as _sfc_main$1 } from "./InfiniteScrollContainer-3931797f.js";
import { M as MainLayout } from "./MainLayout-b86e9381.js";
import "./Modal-dfb0e8c9.js";
import "./IconComments-a1dcea06.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./Film-157939f1.js";
import "./PrimaryButton-c33e55f3.js";
import "@inertiajs/vue3";
import "./Reputation-4f724316.js";
import "./IconDown-5874ffdc.js";
import "./UserTablet-8c54f90d.js";
import "./UserTabletWithElementInside-40135a27.js";
import "./ApplicationLogo-f17895f3.js";
import "lodash/function.js";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: MainLayout }, {
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
      await axios.get(route("posts.new", [current_page.value])).catch((res) => {
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
      _push(ssrRenderComponent(_sfc_main$1, {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home/New.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
