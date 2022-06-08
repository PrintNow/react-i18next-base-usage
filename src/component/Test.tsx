import React from "react";
import {LanguageUtils} from "@/utils/languages";
import {IListenerNameEnum} from "@/utils/languages.d";
import {WithTranslation, withTranslation} from "react-i18next";

interface IProps extends WithTranslation<'translate'> {
}

interface IState {
  load_time: number
}

class Test extends React.Component<IProps, IState> {
  state = {
    load_time: 0
  }

  // 组件挂载，添加监听器
  componentDidMount() {
    // 注意第 1 个参数，需要在 @/utils/languages.d 定义的枚举
    LanguageUtils.addListener(IListenerNameEnum.FirstListener, () => {
      // 更新 state
      this.setState({
        load_time: new Date().getTime()
      })
    })
  }

  // 组件销毁，一定要删除监听器！！！！！
  componentWillUnmount() {
    LanguageUtils.removeListener(IListenerNameEnum.FirstListener)
  }

  render() {
    return (
      <div>
        <p>函数组件，毫秒时间戳：{this.state.load_time}</p>
        <p>看看：{this.props.t('Welcome', {ns: 'translate'})}</p>
      </div>
    );
  }
}

export default withTranslation()(Test);
