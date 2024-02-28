import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: {
    genres: null
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Genres.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Genres = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Genres as default
};
