import { useNav } from "./nav";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { watch, getCurrentInstance, type Ref } from "vue";

export function useTranslationLang(ref?: Ref) {
  const { changeTitle, changeWangeditorLanguage, handleResize } = useNav();
  const { locale, t } = useI18n();
  const route = useRoute();
  const instance =
    getCurrentInstance().appContext.config.globalProperties.$storage;

  function translationCh() {
    instance.locale = { locale: "zh" };
    locale.value = "zh";
    ref && handleResize(ref.value);
  }

  function translationEn() {
    instance.locale = { locale: "en" };
    locale.value = "en";
    ref && handleResize(ref.value);
  }

  watch(
    () => locale.value,
    () => {
      changeTitle(route.meta);
      locale.value === "en"
        ? changeWangeditorLanguage(locale.value)
        : changeWangeditorLanguage("zh-CN");
    }
  );

  return {
    t,
    route,
    locale,
    translationCh,
    translationEn
  };
}
