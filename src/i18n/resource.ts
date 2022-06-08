/**
 * 批量导入语言包
 * @param langList  需要加载的语言列表
 */
const loadLangPackages = (langList: string[]) => {
  const _resources: {
    [key: string]: any
  } = {}
  const modules = import.meta.globEager(`./*/*.json`)

  for (const localCode of langList) {
    _resources[localCode] = {}
  }

  for (const path in modules) {
    let _path = path.replace('./', '').replace('.json', '')

    /**
     * @param localCode 语言简码，限定为 2 个字符，如 en、zh、ja
     * @param namespace 命名空间，提取 common.json 中的 common
     */
    const [localCode, namespace] = _path.split('/', 2)

    _resources[localCode] && (_resources[localCode][namespace] = modules[path])
  }

  return _resources;
}

// 如果新增了语言，请在 SupportLanguages.ts 文件添加
export const resources = loadLangPackages(['en', 'zh', 'ja'])
