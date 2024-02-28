import { resolveComponent, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { P as PanelLayout } from "./PanelLayout-751579bc.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: PanelLayout
}, {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    reports: null
  },
  setup(__props) {
    const models = {
      "App\\Models\\Post": "Подборка",
      "App\\Models\\Comment": "Комментарий",
      "App\\Models\\Film": "Фильм"
    };
    const types = {
      "rude": "Оскорбление",
      "lie": "Несоответствие",
      "other": "Прочее",
      "spam": "Спам",
      "violence": "Насилие",
      "illegal": "Нарушение закона"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      _push(`<main${ssrRenderAttrs(_attrs)}><p class="font-semibold mb-5 text-lgg"> Жалобы </p><div class="space-y-2 max-w-screen-sm"><!--[-->`);
      ssrRenderList(__props.reports, (report) => {
        _push(`<div class="border-b-2 pb-2 flex items-end justify-between space-x-5"><div><header><span> id: ${ssrInterpolate(report.id)}</span><p><span>Тип: </span><span>${ssrInterpolate(models[report.report_to_type])}</span></p></header><main><div><span> Причина: </span><span>${ssrInterpolate(types[report.message])}</span></div></main></div><div class="space-y-2 flex items-end flex-col">`);
        _push(ssrRenderComponent(_component_Link, {
          href: _ctx.route("panel.object.creator.view", [report.report_to.user]),
          class: "block p-2 bg-gray-100 rounded hover:opacity-80"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Рассмотреть владельца ${ssrInterpolate(models[report.report_to_type])}`);
            } else {
              return [
                createTextVNode(" Рассмотреть владельца " + toDisplayString(models[report.report_to_type]), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_Link, {
          href: _ctx.route("panel.object.view", [report.report_to_id]),
          class: "block p-2 bg-gray-100 rounded hover:opacity-80"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Рассмотреть ${ssrInterpolate(models[report.report_to_type])}`);
            } else {
              return [
                createTextVNode(" Рассмотреть " + toDisplayString(models[report.report_to_type]), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
