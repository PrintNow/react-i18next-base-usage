import {Card, EmptyState} from "@shopify/polaris";
import React from "react";
import {useLocation} from "react-router";

export function NotFound() {
  const {pathname} = useLocation();

  return (
    <Card sectioned>
      <EmptyState
        heading="404 - NotFound"
        image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
      >
        <p>没有该页面: <strong>{pathname}</strong></p>
      </EmptyState>
    </Card>
  )
}
