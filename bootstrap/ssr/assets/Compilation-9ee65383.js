import { I as IconComments } from "./IconComments-a1dcea06.js";
import { useSSRContext, mergeProps, resolveComponent, resolveDirective, withCtx, createVNode, withDirectives, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as _sfc_main$2 } from "./Reputation-4f724316.js";
const _sfc_main$1 = {
  props: {
    films: null
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.films.length) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative flex items-center" }, _attrs))}><img${ssrRenderAttr("src", $props.films[2].poster_url_preview)} class="z-0 rounded-lg absolute ml-4 hover:ml-8 duration-200" style="${ssrRenderStyle({ "width": "34px", "height": "34px" })}"><img${ssrRenderAttr("src", $props.films[1].poster_url_preview)} class="z-5 rounded-lg absolute ml-2 hover:ml-4 duration-200" style="${ssrRenderStyle({ "width": "37px", "height": "37px" })}"><img${ssrRenderAttr("src", $props.films[0].poster_url_preview)} class="z-10 block rounded-lg w-full" style="${ssrRenderStyle({ "width": "40px", "height": "40px" })}"></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconFilms.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const IconFilms = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  props: {
    post: null,
    mode: null
  },
  components: { Reputation: _sfc_main$2, IconComments, IconFilms }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Compilation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Compilation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Compilation as C
};
