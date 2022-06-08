import React, {useCallback, useState} from "react";
import {SelectGroup, SelectOption} from "@shopify/polaris/build/ts/latest/src/components/Select/Select";
import {Select} from "@shopify/polaris";
import {LanguageUtils} from "@/utils/languages";

// 顶部菜单栏
export default function TopBar() {
  const [selectedLang, setSelectedLang] = useState('en');
  const handleSelectLangChange = useCallback((value) => {
    setSelectedLang(value)
    LanguageUtils.setLocale(value)
  }, []);

  // 语言列表
  const options: (SelectOption | SelectGroup)[] = [
    {label: 'English', value: 'en'},
    {label: 'Chinese', value: 'zh'},
    {label: 'Japanese', value: 'ja'},
  ];

  return (
    <div style={{
      padding: '16px',
      marginBottom: '4px'
    }}>
      <Select
        label="Select language"
        labelInline
        options={options}
        onChange={handleSelectLangChange}
        value={selectedLang}
      />
    </div>
  );
}
