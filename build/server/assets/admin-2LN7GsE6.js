import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.js";
import { UNSAFE_withComponentProps } from "react-router";
import { jsx } from "react/jsx-runtime";
//#region app/routes/admin/businesses.tsx
var businesses_exports = /* @__PURE__ */ __exportAll({
	default: () => businesses_default,
	meta: () => meta$2
});
function meta$2({}) {
	return [{ title: "My Admin App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var businesses_default = UNSAFE_withComponentProps(function Businesses() {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "user" }) });
});
//#endregion
//#region app/routes/admin/offres.tsx
var offres_exports = /* @__PURE__ */ __exportAll({
	default: () => offres_default,
	meta: () => meta$1
});
function meta$1({}) {
	return [{ title: "My Admin App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var offres_default = UNSAFE_withComponentProps(function Offres() {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "offres" }) });
});
//#endregion
//#region app/routes/admin/categories.tsx
var categories_exports = /* @__PURE__ */ __exportAll({
	default: () => categories_default,
	meta: () => meta
});
function meta({}) {
	return [{ title: "My Admin App" }, {
		name: "description",
		content: "Welcome to React Router!"
	}];
}
var categories_default = UNSAFE_withComponentProps(function Categories() {
	return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("h1", { children: "categorie" }) });
});
//#endregion
export { businesses_default as a, offres_exports as i, categories_exports as n, businesses_exports as o, offres_default as r, categories_default as t };
