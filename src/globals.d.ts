import {
  VNode,
  ComponentClass,
  ComponentChildren,
  FunctionComponent,
  JSX as JSXInternal,
} from "preact";

declare global {
  const API_ORIGIN: string;

  function _prh(
    type: string,
    props:
      | (JSXInternal.HTMLAttributes &
          JSXInternal.SVGAttributes &
          Record<string, any>)
      | null,
    ...children: ComponentChildren[]
  ): VNode<any>;
  const _prf: ComponentClass;
  type WithChildren<P, C = ComponentChildren> = P & {
    children?: C;
  };
  type FC<P = {}> = FunctionComponent<P>;
  namespace JSX {
    type IntrinsicElementsInternal = JSXInternal.IntrinsicElements;
    type IntrinsicElements = {
      [K in keyof IntrinsicElementsInternal]: IntrinsicElementsInternal[K] & {
        styleName?: string;
      };
    };
  }
}
