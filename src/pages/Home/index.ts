import {BaseProps} from "@/types/BaseComponent";
import {WithTranslation} from "react-i18next";

export {default as Home} from "./Home";

///////////////////////////////////////////
////////////// 定义接口/类型 ////////////////
///////////////////////////////////////////

// 注意这里，IHomeProps 接口需要继承 WithTranslation 并指定命名空间
// 下述是表示指定了使用 translate 和 common 命名空间，以获得 IDEA 参数补全
export interface IHomeProps extends BaseProps, WithTranslation<'translate' | 'common'> {
}
