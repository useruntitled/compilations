import { _ as _sfc_main$2 } from "./Film-157939f1.js";
import { M as Message } from "./Message-0c200727.js";
import { resolveComponent, withCtx, createTextVNode, useSSRContext, mergeProps, toDisplayString, createVNode, withDirectives, vModelText, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import axios from "axios";
import "./Modal-dfb0e8c9.js";
import "./PrimaryButton-c33e55f3.js";
const _sfc_main$1 = {
  props: {
    items: null
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<section${ssrRenderAttrs(_attrs)}>`);
  if ($props.items.links.length >= 3) {
    _push(`<div><div class="flex flex-wrap mb-1"><!--[-->`);
    ssrRenderList($props.items.links, (link, p) => {
      _push(`<section>`);
      if (link.url != null && link.label.includes("Previous")) {
        _push(ssrRenderComponent(_component_Link, {
          href: link.url,
          class: "mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Назад `);
            } else {
              return [
                createTextVNode(" Назад ")
              ];
            }
          }),
          _: 2
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (link.url != null && link.label >= 0) {
        _push(ssrRenderComponent(_component_Link, {
          class: ["mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500", { "bg-blue-700 text-white": link.active }],
          href: link.url
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (link.url != null && link.label.includes("Next")) {
        _push(ssrRenderComponent(_component_Link, {
          href: link.url,
          class: "mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Вперед `);
            } else {
              return [
                createTextVNode(" Вперед ")
              ];
            }
          }),
          _: 2
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.items.meta && $props.items.meta.last_page != 1) {
    _push(`<div><div class="flex flex-wrap mb-1"><!--[-->`);
    ssrRenderList($props.items.meta.links, (link, p) => {
      _push(`<section>`);
      if (link.url != null && link.label.includes("Previous")) {
        _push(ssrRenderComponent(_component_Link, {
          href: link.url,
          class: "mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Назад `);
            } else {
              return [
                createTextVNode(" Назад ")
              ];
            }
          }),
          _: 2
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (link.url != null && link.label >= 0) {
        _push(ssrRenderComponent(_component_Link, {
          class: ["mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500", { "bg-blue-700 text-white": link.active }],
          href: link.url
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (link.url != null && link.label.includes("Next")) {
        _push(ssrRenderComponent(_component_Link, {
          href: link.url,
          class: "mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Вперед `);
            } else {
              return [
                createTextVNode(" Вперед ")
              ];
            }
          }),
          _: 2
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  props: {
    films: null
  },
  data() {
    return {
      input_kp: null,
      input_search: null,
      founded_films: [],
      show_success_message: false
    };
  },
  methods: {
    addFilm(id) {
      axios.post(route("film.store"), {
        id
      }).catch((res) => {
        console.log(res);
      }).then((res) => {
        console.log(res);
        if (res.status == 200 || res.status == 201) {
          this.input_kp = "";
          this.show_success_message = true;
        }
      });
    },
    handleInputKinopoisk() {
      let id = parseInt(this.input_kp.replace(/\D/g, "")) || 0;
      this.addFilm(id);
    },
    search() {
      console.log(this.films);
      if (this.input_search == null || this.input_search.trim() == "") {
        this.founded_films = [];
      }
      axios.get(route("film.search", [this.input_search])).catch((res) => {
        console.log(res);
      }).then((res) => {
        console.log(res);
        if (res.status == 200) {
          this.founded_films = res.data;
        }
      });
    }
  },
  components: { Film: _sfc_main$2, Pagination, Message }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Base = resolveComponent("Base");
  const _component_Link = resolveComponent("Link");
  const _component_Pagination = resolveComponent("Pagination");
  const _component_Message = resolveComponent("Message");
  _push(ssrRenderComponent(_component_Base, mergeProps({ title: "Фильмы" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Фильмы</p><main class="my-5 p-5 shadow rounded-xl"${_scopeId}><div class="p-5 my-5 shadow rounded-xl"${_scopeId}><p class="text-sm"${_scopeId}>Добавить фильм по ссылке</p><input${ssrRenderAttr("value", $data.input_kp)} type="text" class="text-sm rounded-xl w-full border-slate-300"${_scopeId}></div><div class="my-5 p-5 shadow rounded-xl"${_scopeId}><p class="text-sm"${_scopeId}>Найти фильм</p><input${ssrRenderAttr("value", $data.input_search)} type="text" class="text-sm rounded-xl border-slate-300 w-full"${_scopeId}><div class="p-2"${_scopeId}><!--[-->`);
        ssrRenderList($data.founded_films, (founded_film) => {
          _push2(ssrRenderComponent(_component_Link, {
            key: founded_film.id,
            href: _ctx.route("film.edit", [founded_film.id]),
            class: "text-sm border p-2 rounded w-full block"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`${ssrInterpolate(founded_film.name_ru)} ${ssrInterpolate(founded_film.name_en)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(founded_film.name_ru) + " " + toDisplayString(founded_film.name_en), 1)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]--></div></div><!--[-->`);
        ssrRenderList($props.films.data, (film) => {
          _push2(`<div class="flex justify-between my-2"${_scopeId}><p class="text-sm"${_scopeId}>${ssrInterpolate(film.name_ru)} ${ssrInterpolate(film.name_en)}</p>`);
          _push2(ssrRenderComponent(_component_Link, {
            href: _ctx.route("film.edit", [film.id]),
            class: "text-sm text-slate-800"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`Редактировать`);
              } else {
                return [
                  createTextVNode("Редактировать")
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div>`);
        });
        _push2(`<!--]--></main>`);
        _push2(ssrRenderComponent(_component_Pagination, { items: $props.films }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Message, {
          showMessage: $data.show_success_message,
          onCloseMessage: ($event) => $data.show_success_message = !$data.show_success_message
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode("p", null, "Фильмы"),
          createVNode("main", { class: "my-5 p-5 shadow rounded-xl" }, [
            createVNode("div", { class: "p-5 my-5 shadow rounded-xl" }, [
              createVNode("p", { class: "text-sm" }, "Добавить фильм по ссылке"),
              withDirectives(createVNode("input", {
                onInput: $options.handleInputKinopoisk,
                "onUpdate:modelValue": ($event) => $data.input_kp = $event,
                type: "text",
                class: "text-sm rounded-xl w-full border-slate-300"
              }, null, 40, ["onInput", "onUpdate:modelValue"]), [
                [vModelText, $data.input_kp]
              ])
            ]),
            createVNode("div", { class: "my-5 p-5 shadow rounded-xl" }, [
              createVNode("p", { class: "text-sm" }, "Найти фильм"),
              withDirectives(createVNode("input", {
                onInput: ($event) => $options.search(),
                "onUpdate:modelValue": ($event) => $data.input_search = $event,
                type: "text",
                class: "text-sm rounded-xl border-slate-300 w-full"
              }, null, 40, ["onInput", "onUpdate:modelValue"]), [
                [vModelText, $data.input_search]
              ]),
              createVNode("div", { class: "p-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList($data.founded_films, (founded_film) => {
                  return openBlock(), createBlock(_component_Link, {
                    key: founded_film.id,
                    href: _ctx.route("film.edit", [founded_film.id]),
                    class: "text-sm border p-2 rounded w-full block"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(founded_film.name_ru) + " " + toDisplayString(founded_film.name_en), 1)
                    ]),
                    _: 2
                  }, 1032, ["href"]);
                }), 128))
              ])
            ]),
            (openBlock(true), createBlock(Fragment, null, renderList($props.films.data, (film) => {
              return openBlock(), createBlock("div", {
                key: film.id,
                class: "flex justify-between my-2"
              }, [
                createVNode("p", { class: "text-sm" }, toDisplayString(film.name_ru) + " " + toDisplayString(film.name_en), 1),
                createVNode(_component_Link, {
                  href: _ctx.route("film.edit", [film.id]),
                  class: "text-sm text-slate-800"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Редактировать")
                  ]),
                  _: 2
                }, 1032, ["href"])
              ]);
            }), 128))
          ]),
          createVNode(_component_Pagination, { items: $props.films }, null, 8, ["items"]),
          createVNode(_component_Message, {
            showMessage: $data.show_success_message,
            onCloseMessage: ($event) => $data.show_success_message = !$data.show_success_message
          }, null, 8, ["showMessage", "onCloseMessage"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Admin/Films.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Films = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Films as default
};
