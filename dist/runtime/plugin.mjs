import "@typeform/embed/build/css/popup.css";
import { createPopup } from "@typeform/embed";
import { defineNuxtPlugin, useRuntimeConfig } from "#imports";
export default defineNuxtPlugin((nuxtApp) => {
  const { formId } = useRuntimeConfig().typeform;
  const popup = createPopup(formId);
  nuxtApp.provide("typeform", { popup });
});
