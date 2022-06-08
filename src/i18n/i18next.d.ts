import 'react-i18next';
import translate from './en/translate.json';
import common from './en/common.json';

type Translate = typeof translate;
type Common = typeof common;

export type {Translate}

export interface I18NResourcesType {
  translate: Translate;
  common: Common
}

// TS 定义命名空间，如果是 JS 这个不需要去定义
declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translate';// 默认使用的命名空间
    nsSeparator: ':';// 命名空间分隔符
    keySeparator: '.';//
    resources: I18NResourcesType
  }
}
