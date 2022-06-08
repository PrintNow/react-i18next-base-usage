import React, {useCallback, useState} from "react";
import {IHomeProps} from "@/pages";
import {Trans, useTranslation, withTranslation} from "react-i18next";
import {Button, Card, DisplayText, Link, Toast} from "@shopify/polaris";
import {CodeShow} from "@/component";
import {TestUtil_1, TestUtil_2, TestUtil_3} from "@/utils/test-util";
import {default as Test} from "@/component/Test";

/**
 * 函数组件使用
 * @constructor
 */
function Case2() {
  // 这种方式可以传入多个
  // const {t} = useTranslation(['translate'])

  const {t} = useTranslation('translate')

  return (
    <div>
      <DisplayText size="large">
        <CodeShow>t('Case2')</CodeShow>:
        {t('Case2')}
      </DisplayText>
    </div>
  )
}

/**
 * 函数组件之多个命名空间使用
 * @constructor
 */
function Case3() {
  const {t} = useTranslation(['translate', 'common'])

  // 注意需要用命名空间
  return (<div>
    <p><CodeShow>translate:</CodeShow> 是命名空间</p>

    <DisplayText size="large">
      <CodeShow>t('translate:Case3')</CodeShow>: {t('translate:Case3')}
    </DisplayText>

    <DisplayText size="large">
      <CodeShow>t('common:Close')</CodeShow>: {t('common:Close')}
    </DisplayText>
  </div>)
}

function Case4() {
  const {t} = useTranslation('common')
  const [active, setActive] = useState(false);
  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const toastMarkup = active ? (
    <Toast content={t('SavedSuccessfully')} onDismiss={toggleActive}/>
  ) : null;

  return (
    <div>
      {toastMarkup}
      <Button onClick={toggleActive}>{t('Save')}</Button>
    </div>
  );
}

/**
 * 组件混合翻译
 * @constructor
 */
function Case5() {
  return (
    <Trans ns="translate" i18nKey="Case5">
      案例5：使用 <CodeShow>Trans</CodeShow> Component，了解更多
      <Link external url="https://react.i18next.com/latest/trans-component">点击这里</Link>
    </Trans>
  )
}

/**
 * 列表渲染
 * @constructor
 */
function Case6() {
  const {t} = useTranslation('translate')

  return (
    <div>
      <DisplayText size="large">
        <CodeShow>t('Case6')</CodeShow>: {t('Case6')}
      </DisplayText>

      <ul>
        {t('AnimalList', {returnObjects: true}).map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}

/**
 * 单复数
 * @constructor
 */
function Case7() {
  return (
    <ul>
      <li>
        <Trans ns="translate" i18nKey="Case7.apple" count={-2}>
          I have {{count: -2}} apple
        </Trans>
      </li>

      <li>
        <Trans ns="translate" i18nKey="Case7.apple" count={-1}>
          I have {{count: -1}} apple
        </Trans>
      </li>

      <li>
        <Trans ns="translate" i18nKey="Case7.apple" count={0}>
          I have {{count: 0}} apple
        </Trans>
      </li>

      <li>
        <Trans ns="translate" i18nKey="Case7.apple" count={1}>
          I have {{count: 1}} apple
        </Trans>
      </li>

      <li>
        <Trans ns="translate" i18nKey="Case7.apple" count={2}>
          I have {{count: 2}} apple
        </Trans>
      </li>
    </ul>
  )
}

function Case8() {
  console.log('看看是不是对象', TestUtil_2())

  return (<div>
    <DisplayText>非组件上使用 react-i18next</DisplayText>
    <ul>
      <li><CodeShow>TestUtil_1</CodeShow>: {TestUtil_1()}</li>
      <li><CodeShow>TestUtil_2</CodeShow>: {TestUtil_2()}</li>
      <li><CodeShow>TestUtil_3</CodeShow>: {TestUtil_3()}</li>
    </ul>
  </div>)
}

export class Home extends React.Component<IHomeProps, any> {
  render() {
    const {match, location, history} = this.props;
    const {t} = this.props

    return (
      <Card title={t('Title')}>
        {/*例子1*/}
        <Card.Section title={t('Case_N', {replace: {num: 1}, ns: 'common'})}>
          <DisplayText size="large">
            <CodeShow>t('Welcome')</CodeShow>:
            {t('Welcome')}
          </DisplayText>
        </Card.Section>

        {/*例子2*/}
        <Card.Section title={t('Case_N', {replace: {num: 2}, ns: 'common'})}>
          <Case2/>
        </Card.Section>

        {/*例子3*/}
        <Card.Section title={t('Case_N', {replace: {num: 3}, ns: 'common'})}>
          <Case3/>
        </Card.Section>

        {/*例子4*/}
        <Card.Section title={t('Case_N', {replace: {num: 4}, ns: 'common'})}>
          <Case4/>
        </Card.Section>

        {/*例子5*/}
        <Card.Section title={t('Case_N', {replace: {num: 5}, ns: 'common'})}>
          <Case5/>
        </Card.Section>

        {/*例子6*/}
        <Card.Section title={t('Case_N', {replace: {num: 6}, ns: 'common'})}>
          <Case6/>
        </Card.Section>

        {/*例子7*/}
        <Card.Section title={t('Case_N', {replace: {num: 7}, ns: 'common'})}>
          <Case7/>
        </Card.Section>

        {/*例子8*/}
        <Card.Section title={t('Case_N', {replace: {num: 8}, ns: 'common'})}>
          <Case8/>
        </Card.Section>

        {/*例子9*/}
        <Card.Section title={t('Case_N', {replace: {num: 9}, ns: 'common'})}>
          {/*@ts-ignore*/}
          <Test/>
          {/*暂时不知道为什么报错，先忽略下检查*/}
        </Card.Section>
      </Card>
    );
  }
}

export default withTranslation()(Home);
