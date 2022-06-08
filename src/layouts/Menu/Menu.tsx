import React from "react";
import {Navigation} from "@shopify/polaris";
import {HomeMinor, ProductsMinor, SettingsMinor} from "@shopify/polaris-icons";
import {useLocation} from "react-router";
import {useTranslation} from "react-i18next";

export function Menu() {
  const {pathname} = useLocation();
  const {t} = useTranslation('common')

  return (
    <Navigation location={pathname}>
      <Navigation.Section
        items={[
          {
            url: '/',
            label: t('Menu.Home'),
            icon: HomeMinor,
            exactMatch: true
          },
          {
            url: '/setting',
            label: t('Menu.Settings'),
            icon: SettingsMinor,
          },
          {
            url: '/products',
            label: t('Menu.Products'),
            icon: ProductsMinor,
          }
        ]}
      />
    </Navigation>
  );
}
