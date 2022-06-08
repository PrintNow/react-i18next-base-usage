import i18next from "@/i18n/config";
import {SupportLanguages} from "@/i18n/SupportLanguages";
import {I18n} from "@shopify/polaris/build/ts/latest/src/utilities/i18n";
import enTranslations from '@shopify/polaris/locales/en.json';
import zhTranslations from '@shopify/polaris/locales/zh-CN.json';
import {Callback} from "i18next";
import {IListenerNameEnum} from "./languages.d"

export namespace LanguageUtils {
  const observers = new Map()

  /**
   * 设置语言
   * @param local
   * @param callback
   */
  export function setLocale(local: SupportLanguages, callback?: Callback) {
    if (local === i18next.language) return
    i18next.changeLanguage(local, callback)

    for (const listenerName of observers.keys()) {
      observers.get(listenerName)()
    }
  }

  /**
   * 添加监听器
   * @param listenerName
   * @param callback
   */
  export function addListener(listenerName: IListenerNameEnum, callback: Callback) {
    !observers.has(listenerName) && observers.set(listenerName, callback)
  }

  /**
   * 移除监听器
   * @param listenerName
   */
  export function removeListener(listenerName: IListenerNameEnum) {
    return observers.delete(listenerName)
  }

  /**
   * 获取 Shopify polaris i18n 文件
   */
  export function getAppProviderI18n(): ConstructorParameters<typeof I18n>[0] {
    const language = i18next.language
    switch (language) {
      case 'zh':
        return zhTranslations
      case 'en':
      default:
        return enTranslations
    }
  }
}
