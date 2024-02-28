import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: {
    karma: null
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Karma/Forbidden.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Forbidden = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Forbidden as default
};
