import { reactive, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import _sfc_main$1 from "./SettingsLayout-211519c8.js";
import { M as MainLayout, f as _sfc_main$2, g as _sfc_main$3, h as IconCheck } from "./MainLayout-b86e9381.js";
import "./_plugin-vue_export-helper-cc2b3d55.js";
import "./PrimaryButton-c33e55f3.js";
import "./Modal-dfb0e8c9.js";
import "./ApplicationLogo-f17895f3.js";
import "./UserTablet-8c54f90d.js";
import "lodash/function.js";
import "axios";
import "./IconDown-5874ffdc.js";
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: [MainLayout, _sfc_main$1] }, {
  __name: "Profile",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const form = reactive({
      username: page.props.auth.user.name,
      description: page.props.auth.user.description
    });
    const isUpdated = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-8" }, _attrs))}><div><p class="font-medium pb-4 ms-1">Имя</p>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: form.username,
        "onUpdate:modelValue": ($event) => form.username = $event
      }, null, _parent));
      _push(`</div><div class="mt-4"><p class="font-medium pb-4 ms-1">Описание</p>`);
      _push(ssrRenderComponent(_sfc_main$3, {
        modelValue: form.description,
        "onUpdate:modelValue": ($event) => form.description = $event,
        placeholder: "Пара_слов_о_себе"
      }, null, _parent));
      _push(`</div><div class="ms-1 flex justify-between items-center mt-5"><button class="font-semibold text-orange-500 hover:opacity-70"> Сохранить </button><div class="flex items-center" style="${ssrRenderStyle(isUpdated.value ? null : { display: "none" })}"><p>Сохранено</p>`);
      _push(ssrRenderComponent(IconCheck, { class: "ms-1 w-4 h-4" }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Settings/Profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
