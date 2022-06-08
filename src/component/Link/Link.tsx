import React from "react";
import {Link as ReactRouterLink} from "react-router-dom";
import {LinkLikeComponentProps} from "@shopify/polaris/build/ts/latest/src/utilities/link/types";

export function Link({children, url = '', external, ref, ...rest}: LinkLikeComponentProps) {
  // TODO 加入其它的判断
  if (external) {
    rest.target = '_blank';
    rest.rel = 'noopener noreferrer';
    return (
      <a href={url} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <ReactRouterLink to={url} {...rest}>
      {/*@ts-ignore*/}
      {children}
    </ReactRouterLink>
  );
}
