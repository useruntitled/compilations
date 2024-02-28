import { ref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./PageProfileLayout-585056d6.js";
import { E as EmptyFeed } from "./EmptyFeed-b8ebb3a0.js";
import { P as Post } from "./Post-8130b980.js";
import { _ as _sfc_main$2 } from "./InfiniteScrollContainer-3931797f.js";
import axios from "axios";
import { M as MainLayout } from "./MainLayout-b86e9381.js";
import "./ZoomableImage-f03d568f.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "@inertiajs/vue3";
import "./Modal-dfb0e8c9.js";
import "./IconComments-a1dcea06.js";
import "./Film-157939f1.js";
import "./PrimaryButton-c33e55f3.js";
import "./Reputation-4f724316.js";
import "./IconDown-5874ffdc.js";
import "./UserTablet-8c54f90d.js";
import "./UserTabletWithElementInside-40135a27.js";
import "./ApplicationLogo-f17895f3.js";
import "lodash/function.js";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: [MainLayout, _sfc_main$1] }, {
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
      await axios.get(route("profile.posts.get", [props.user.id, currentPage.value])).catch((res) => {
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
      _push(ssrRenderComponent(_sfc_main$2, {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
