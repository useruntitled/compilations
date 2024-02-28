import { resolveComponent, withCtx, createVNode, toDisplayString, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: {
    genre: null
  },
  data() {
    return {
      input: this.genre.kp_wire
    };
  },
  methods: {
    wire() {
      axios.post(route("genre.wire"), {
        genre_id: this.genre.id,
        url: this.input
      }).catch((res) => {
        console.log(res);
      }).then((res) => {
        console.log(res);
      });
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Csrf = resolveComponent("Csrf");
  const _component_Base = resolveComponent("Base");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Csrf, null, null, _parent));
  _push(ssrRenderComponent(_component_Base, {
    title: $props.genre.name
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Тег фильма</p><main class="p-5 shadow rounded-xl my-5"${_scopeId}><p class="text-sm text-slate-800"${_scopeId}>#${ssrInterpolate($props.genre.id)}</p><p${_scopeId}>${ssrInterpolate($props.genre.name)}</p><div class="shadow p-5 my-5 rounded-lg"${_scopeId}><p class="text-sm"${_scopeId}>Прикрепить к разделу жанра</p><form${_scopeId}><input${ssrRenderAttr("value", $data.input)} type="text" class="w-full rounded-xl text-sm border-slate-200" required${_scopeId}><button class="mt-2 block py-2 px-4 rounded-full border-0 text-sm font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100"${_scopeId}> Прикрепить </button></form></div></main>`);
      } else {
        return [
          createVNode("p", null, "Тег фильма"),
          createVNode("main", { class: "p-5 shadow rounded-xl my-5" }, [
            createVNode("p", { class: "text-sm text-slate-800" }, "#" + toDisplayString($props.genre.id), 1),
            createVNode("p", null, toDisplayString($props.genre.name), 1),
            createVNode("div", { class: "shadow p-5 my-5 rounded-lg" }, [
              createVNode("p", { class: "text-sm" }, "Прикрепить к разделу жанра"),
              createVNode("form", {
                onSubmit: withModifiers(($event) => $options.wire(), ["prevent"])
              }, [
                withDirectives(createVNode("input", {
                  "onUpdate:modelValue": ($event) => $data.input = $event,
                  type: "text",
                  class: "w-full rounded-xl text-sm border-slate-200",
                  required: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vModelText, $data.input]
                ]),
                createVNode("button", { class: "mt-2 block py-2 px-4 rounded-full border-0 text-sm font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100" }, " Прикрепить ")
              ], 40, ["onSubmit"])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Genre.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Genre = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Genre as default
};
