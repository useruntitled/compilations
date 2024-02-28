import { M as Message } from "./Message-0c200727.js";
import { resolveComponent, resolveDirective, withCtx, mergeProps, createVNode, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderAttrs, ssrGetDirectiveProps } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = {
  props: {
    film: null
  },
  data() {
    return {
      updated: false,
      name_ru: this.film.name_ru,
      name_en: this.film.name_en,
      description: this.film.description,
      short_description: this.film.short_description,
      poster_url: this.film.poster_url,
      poster_url_preview: this.film.poster_url_preview,
      logo_url: this.film.logo_url,
      slogan: this.film.slogan
    };
  },
  methods: {
    update() {
      axios.post(route("film.patch"), {
        _method: "PATCH",
        film_id: this.film.id,
        name_ru: this.name_ru,
        name_en: this.name_en,
        description: this.description,
        short_description: this.short_description,
        poster_url: this.poster_url,
        poster_url_preview: this.poster_url_preview,
        logo_url: this.logo_url,
        slogan: this.slogan
      }).catch((res) => {
        console.log(res);
      }).then((res) => {
        console.log(res);
        if (res.status == 200) {
          this.updated = true;
        }
      });
    },
    refresh() {
      axios.post(route("film.refresh"), {
        _method: "PATCH",
        id: this.film.id
      }).catch((res) => {
        console.log(res);
      }).then((res) => {
        console.log(res);
        if (res.status == 200) {
          this.updated = 200;
        }
      });
    }
  },
  components: { Message }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Csrf = resolveComponent("Csrf");
  const _component_Base = resolveComponent("Base");
  const _component_Message = resolveComponent("Message");
  const _directive_lazy = resolveDirective("lazy");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Csrf, null, null, _parent));
  _push(ssrRenderComponent(_component_Base, {
    title: $props.film.name_ru,
    sides: false
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-white p-5 rounded-xl"${_scopeId}><p${_scopeId}>Редактировать данные фильма</p><button class="mt-10 py-2 px-4 rounded-full border-0 text-sm font-semibold bg-red-50 text-red-700 hover:bg-red-100 block"${_scopeId}> Обновить информацию через API </button><a${ssrRenderAttr("href", "https://kinopoisk.ru/film/" + $props.film.id)} class="text-sm text-sky-700 font-semibold ms-2"${_scopeId}>Перейти на кинопоиск</a><form class="shadow rounded-lg p-5 mt-5"${_scopeId}><div class="flex items-center"${_scopeId}><img${ssrRenderAttrs(mergeProps({
          alt: "",
          class: "rounded-xl",
          style: { "max-height": "500px", "max-width": "334px" }
        }, ssrGetDirectiveProps(_ctx, _directive_lazy, $props.film.poster_url)))}${_scopeId}><div class="w-full ms-5 shadow p-5 shadow-xl rounded-xl"${_scopeId}><p class="text-sm uppercase"${_scopeId}>name_ru</p><input type="text"${ssrRenderAttr("value", $data.name_ru)} class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"${_scopeId}><p class="text-sm uppercase"${_scopeId}>name_en</p><input type="text"${ssrRenderAttr("value", $data.name_en)} class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"${_scopeId}><p class="text-sm uppercase"${_scopeId}>description</p><input type="text"${ssrRenderAttr("value", $data.description)} class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"${_scopeId}><p class="text-sm uppercase"${_scopeId}>short_description</p><input type="text"${ssrRenderAttr("value", $data.short_description)} class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"${_scopeId}><p class="text-sm uppercase"${_scopeId}>poster_url</p><input type="text"${ssrRenderAttr("value", $data.poster_url)} class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"${_scopeId}><p class="text-sm uppercase"${_scopeId}>poster_url_preview</p><input type="text"${ssrRenderAttr("value", $data.poster_url_preview)} class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"${_scopeId}><p class="text-sm uppercase"${_scopeId}>logo_url</p><input type="text"${ssrRenderAttr("value", $data.logo_url)} class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"${_scopeId}><p class="text-sm uppercase"${_scopeId}>slogan</p><input type="text"${ssrRenderAttr("value", $data.slogan)} class="w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"${_scopeId}></div></div><button class="mt-10 py-2 px-4 rounded-full border-0 text-sm font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 mx-auto block"${_scopeId}> Сохранить </button>`);
        _push2(ssrRenderComponent(_component_Message, {
          mode: "success",
          showMessage: $data.updated,
          onCloseMessage: ($event) => $data.updated = false
        }, null, _parent2, _scopeId));
        _push2(`</form></div>`);
      } else {
        return [
          createVNode("div", { class: "bg-white p-5 rounded-xl" }, [
            createVNode("p", null, "Редактировать данные фильма"),
            createVNode("button", {
              onClick: withModifiers(($event) => $options.refresh(), ["prevent"]),
              class: "mt-10 py-2 px-4 rounded-full border-0 text-sm font-semibold bg-red-50 text-red-700 hover:bg-red-100 block"
            }, " Обновить информацию через API ", 8, ["onClick"]),
            createVNode("a", {
              href: "https://kinopoisk.ru/film/" + $props.film.id,
              class: "text-sm text-sky-700 font-semibold ms-2"
            }, "Перейти на кинопоиск", 8, ["href"]),
            createVNode("form", {
              onSubmit: withModifiers(($event) => $options.update(), ["prevent"]),
              class: "shadow rounded-lg p-5 mt-5"
            }, [
              createVNode("div", { class: "flex items-center" }, [
                withDirectives(createVNode("img", {
                  alt: "",
                  class: "rounded-xl",
                  style: { "max-height": "500px", "max-width": "334px" }
                }, null, 512), [
                  [_directive_lazy, $props.film.poster_url]
                ]),
                createVNode("div", { class: "w-full ms-5 shadow p-5 shadow-xl rounded-xl" }, [
                  createVNode("p", { class: "text-sm uppercase" }, "name_ru"),
                  withDirectives(createVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => $data.name_ru = $event,
                    class: "w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.name_ru]
                  ]),
                  createVNode("p", { class: "text-sm uppercase" }, "name_en"),
                  withDirectives(createVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => $data.name_en = $event,
                    class: "w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.name_en]
                  ]),
                  createVNode("p", { class: "text-sm uppercase" }, "description"),
                  withDirectives(createVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => $data.description = $event,
                    class: "w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.description]
                  ]),
                  createVNode("p", { class: "text-sm uppercase" }, "short_description"),
                  withDirectives(createVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => $data.short_description = $event,
                    class: "w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.short_description]
                  ]),
                  createVNode("p", { class: "text-sm uppercase" }, "poster_url"),
                  withDirectives(createVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => $data.poster_url = $event,
                    class: "w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.poster_url]
                  ]),
                  createVNode("p", { class: "text-sm uppercase" }, "poster_url_preview"),
                  withDirectives(createVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => $data.poster_url_preview = $event,
                    class: "w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.poster_url_preview]
                  ]),
                  createVNode("p", { class: "text-sm uppercase" }, "logo_url"),
                  withDirectives(createVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => $data.logo_url = $event,
                    class: "w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.logo_url]
                  ]),
                  createVNode("p", { class: "text-sm uppercase" }, "slogan"),
                  withDirectives(createVNode("input", {
                    type: "text",
                    "onUpdate:modelValue": ($event) => $data.slogan = $event,
                    class: "w-full rounded-xl border-1 border-slate-200 text-sm text-slate-900"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, $data.slogan]
                  ])
                ])
              ]),
              createVNode("button", { class: "mt-10 py-2 px-4 rounded-full border-0 text-sm font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 mx-auto block" }, " Сохранить "),
              createVNode(_component_Message, {
                mode: "success",
                showMessage: $data.updated,
                onCloseMessage: ($event) => $data.updated = false
              }, null, 8, ["showMessage", "onCloseMessage"])
            ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Film.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Film = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Film as default
};
