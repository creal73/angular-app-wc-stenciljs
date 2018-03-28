import './stencil.core';
/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import './stencil.core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {
  interface HTMLByeByeElement extends HTMLStencilElement {
    'image': string;
    'message': string;
  }
  var HTMLByeByeElement: {
    prototype: HTMLByeByeElement;
    new (): HTMLByeByeElement;
  };
  interface HTMLElementTagNameMap {
    'bye-bye': HTMLByeByeElement;
  }
  interface ElementTagNameMap {
    'bye-bye': HTMLByeByeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'bye-bye': JSXElements.ByeByeAttributes;
    }
  }
  namespace JSXElements {
    export interface ByeByeAttributes extends HTMLAttributes {
      'image'?: string;
      'message'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
