import i18next from "@/i18n/config";

/**
 * 基础使用
 * @constructor
 */
export function TestUtil_1() {
  return i18next.t('common:Save')
}

/**
 * 返回 object 内容
 * @constructor
 */
export function TestUtil_2() {
  return i18next.t('translate:AnimalList', {returnObjects: true})
}

/**
 * 使用变量
 *
 * @param count
 * @constructor
 */
export function TestUtil_3(count: number = 1) {
  return i18next.t('common:Case_N', {replace: {num: count}})
}
