import { useSSRContext, mergeProps, inject, ref, withCtx, createTextVNode, createVNode, withModifiers, openBlock, createBlock, Fragment, renderList, withDirectives, vModelRadio, toDisplayString, onMounted, nextTick } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { a as _sfc_main$5, _ as _sfc_main$6 } from "./Modal-dfb0e8c9.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { P as PrimaryButton } from "./PrimaryButton-c33e55f3.js";
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    class: "icon icon-tabler icon-tabler-flag",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, _attrs))}><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9z"></path><path d="M5 21v-7"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconFlag.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const IconFlag = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    class: "icon icon-tabler icon-tabler-dots",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    fill: "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }, _attrs))}><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Icons/IconDots.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const IconDots = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const sendReport = (form, callback) => {
  axios.post(route("report.store"), form).catch((res) => {
    console.log(res);
  }).then((res) => {
    if (res.status === 200)
      callback();
  });
};
const _sfc_main$2 = {
  __name: "Report",
  __ssrInlineRender: true,
  props: {
    show: false,
    report_to_type: null,
    report_to_id: null
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const callMessage = inject("callMessage");
    const selectedType = ref(null);
    const types = [
      { id: "spam", label: "Спам" },
      { id: "rude", label: "Оскорбление" },
      { id: "violence", label: "Насилие" },
      { id: "illegal", label: "Нарушение закона" },
      { id: "other", label: "Другое" },
      { id: "lie", label: "Несоответствие" }
    ];
    const props = __props;
    const isLoading = ref(false);
    const disabled = ref(false);
    const submit = () => {
      if (!isLoading.value && !disabled.value) {
        isLoading.value = true;
        sendReport({
          report_to_type: props.report_to_type,
          report_to_id: props.report_to_id,
          message: selectedType.value
        }, function() {
          emit("close");
          isLoading.value = false;
          disabled.value = true;
          callMessage("success", "Жалоба отправлена!");
        });
      }
    };
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$5, mergeProps({
        show: __props.show,
        "max-width": "md",
        onClose: ($event) => emit("close")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white"${_scopeId}><header class="font-medium p-5 px-10 pb-4 text-lg border-b-2"${_scopeId}> Пожаловаться </header><main class="p-5 px-10"${_scopeId}><p class="mb-5 text-lgg"${_scopeId}>Выберите причину</p><form class="space-y-2"${_scopeId}><!--[-->`);
            ssrRenderList(types, (type) => {
              _push2(`<div class="flex items-center"${_scopeId}><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(selectedType.value, type.id)) ? " checked" : ""}${ssrRenderAttr("value", type.id)}${ssrRenderAttr("id", type.id)} class="appearance-none bg-gray-50 checked:bg-orange-500 checked:fill-orange-500 focus:fill-orange-500 focus:bg-orange-500 border-1 border-secondary border-opacity-10 text-lg text-orange-500 focus:ring-0"${_scopeId}><label${ssrRenderAttr("for", type.id)} class="ms-4 py-2 cursor-pointer select-none"${_scopeId}>${ssrInterpolate(type.label)}</label></div>`);
            });
            _push2(`<!--]--><div class="text-end"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, { class: "bg-orange-500 px-3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Отправить `);
                } else {
                  return [
                    createTextVNode(" Отправить ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></main></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white" }, [
                createVNode("header", { class: "font-medium p-5 px-10 pb-4 text-lg border-b-2" }, " Пожаловаться "),
                createVNode("main", { class: "p-5 px-10" }, [
                  createVNode("p", { class: "mb-5 text-lgg" }, "Выберите причину"),
                  createVNode("form", {
                    onSubmit: withModifiers(submit, ["prevent"]),
                    class: "space-y-2"
                  }, [
                    (openBlock(), createBlock(Fragment, null, renderList(types, (type) => {
                      return createVNode("div", {
                        key: type.id,
                        class: "flex items-center"
                      }, [
                        withDirectives(createVNode("input", {
                          type: "radio",
                          "onUpdate:modelValue": ($event) => selectedType.value = $event,
                          value: type.id,
                          id: type.id,
                          class: "appearance-none bg-gray-50 checked:bg-orange-500 checked:fill-orange-500 focus:fill-orange-500 focus:bg-orange-500 border-1 border-secondary border-opacity-10 text-lg text-orange-500 focus:ring-0"
                        }, null, 8, ["onUpdate:modelValue", "value", "id"]), [
                          [vModelRadio, selectedType.value]
                        ]),
                        createVNode("label", {
                          for: type.id,
                          class: "ms-4 py-2 cursor-pointer select-none"
                        }, toDisplayString(type.label), 9, ["for"])
                      ]);
                    }), 64)),
                    createVNode("div", { class: "text-end" }, [
                      createVNode(PrimaryButton, { class: "bg-orange-500 px-3" }, {
                        default: withCtx(() => [
                          createTextVNode(" Отправить ")
                        ]),
                        _: 1
                      })
                    ])
                  ], 32)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modals/Report/Report.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "DropdownReport",
  __ssrInlineRender: true,
  props: {
    report_to_type: null,
    report_to_id: null,
    class: null,
    align: "right"
  },
  setup(__props) {
    const showModal = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$6, { align: __props.align }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button class="p-1 hover:bg-gray-100 text-gray-600 rounded-full"${_scopeId}>`);
            _push2(ssrRenderComponent(IconDots, { class: __props.class }, null, _parent2, _scopeId));
            _push2(`</button>`);
          } else {
            return [
              createVNode("button", { class: "p-1 hover:bg-gray-100 text-gray-600 rounded-full" }, [
                createVNode(IconDots, { class: __props.class }, null, 8, ["class"])
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-1"${_scopeId}><button class="text-base text-black hover:bg-neutral-100 rounded-lg px-5"${_scopeId}>`);
            _push2(ssrRenderComponent(IconFlag, { class: "stroke-2 inline-block me-2 w-5 h-5" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Пожаловаться</span></button></div>`);
          } else {
            return [
              createVNode("div", { class: "py-1" }, [
                createVNode("button", {
                  onClick: ($event) => showModal.value = true,
                  class: "text-base text-black hover:bg-neutral-100 rounded-lg px-5"
                }, [
                  createVNode(IconFlag, { class: "stroke-2 inline-block me-2 w-5 h-5" }),
                  createVNode("span", null, "Пожаловаться")
                ], 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        onClose: ($event) => showModal.value = false,
        show: showModal.value,
        report_to_type: __props.report_to_type,
        report_to_id: __props.report_to_id
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdowns/DropdownReport.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Film_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "Film",
  __ssrInlineRender: true,
  props: {
    film: null
  },
  setup(__props) {
    const film_description = ref(null);
    const isTooLong = ref(false);
    const showReportTrigger = ref(false);
    onMounted(() => {
      nextTick(() => {
        if (film_description.value.clientHeight > 100) {
          isTooLong.value = true;
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex" }, _attrs))}><div class="mt-5 grid grid-tmp items-center rounded-lg"><a${ssrRenderAttr("href", "https://kinopoisk.ru/film/" + __props.film.id)} class="object-cover md:h-full xs:h-[300px] clear-auto">`);
      if (__props.film.poster_url_preview) {
        _push(`<img class="rounded-lg object-cover xs:h-full md:h-full w-full"${ssrRenderAttr("src", __props.film.poster_url_preview)} alt="">`);
      } else {
        _push(`<img${ssrRenderAttr("src", __props.film.poster_url)} class="rounded-lg object-cover xs:h-full md:h-full w-full" alt="">`);
      }
      if (!__props.film.cover_url && !__props.film.poster_url) {
        _push(`<img class="rounded-lg object-cover xs:h-full md:h-full w-full" src="https://dummyimage.com/400x400/000/fff&amp;text=No+image" alt="">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</a><div class="md:ms-5 inline-block xs:mt-4 md:mt-0 md:pe-4"><a${ssrRenderAttr("href", "https://kinopoisk.ru/film/" + __props.film.id)} class="text-sky-600 font-semibold">${ssrInterpolate(__props.film.name_ru)} ${ssrInterpolate(__props.film.name_en)}</a><div class="my-2 flex-wrap flex"><!--[-->`);
      ssrRenderList(__props.film.genres, (genre) => {
        _push(`<span class="mb-1"><a class="me-2 pe-2 py-1 text-orange-700 opacity-70 font-medium"${ssrRenderAttr("href", genre.kp_wire)}> #${ssrInterpolate(genre.name)}</a></span>`);
      });
      _push(`<!--]--></div><p class="${ssrRenderClass([{ "max-h-20": isTooLong.value }, "text-sm text-slate-800 break-words overflow-hidden"])}">${ssrInterpolate(__props.film.description)}</p><button style="${ssrRenderStyle(isTooLong.value ? null : { display: "none" })}" class="block text-black opacity-60 hover:opacity-40 my-2 text-sm"> Читать дальше </button><p class="px-2 py-1 my-2 bg-orange-50 text-sm rounded-lg text-orange-700 inline-block font-medium">${ssrInterpolate(__props.film.type == "movie" ? "Фильм" : "Сериал")}</p><div class="my-2"><div class="flex items-end justify-between space-x-2"><img${ssrRenderAttr("src", "https://rating.kinopoisk.ru/" + __props.film.id + ".gif")} class="bg-gray-100 rounded" style="${ssrRenderStyle({ "width": "102px", "height": "38px" })}" alt="Rating"><div style="${ssrRenderStyle(showReportTrigger.value ? null : { display: "none" })}">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        report_to_type: "film",
        report_to_id: __props.film.id,
        align: "right",
        class: "text-gray-400 w-6 h-6"
      }, null, _parent));
      _push(`</div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Film.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  IconDots as I,
  _sfc_main as _,
  IconFlag as a,
  _sfc_main$2 as b
};
