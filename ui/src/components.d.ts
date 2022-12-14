/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Notice } from "smoothly";
export namespace Components {
    interface MicrocmsCreate {
        "feed"?: string;
    }
    interface MicrocmsList {
        "feed"?: string;
    }
    interface SmoothlyInputFile {
        "mode": "folder" | "file" | "files";
        "name"?: string;
    }
}
export interface MicrocmsCreateCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMicrocmsCreateElement;
}
declare global {
    interface HTMLMicrocmsCreateElement extends Components.MicrocmsCreate, HTMLStencilElement {
    }
    var HTMLMicrocmsCreateElement: {
        prototype: HTMLMicrocmsCreateElement;
        new (): HTMLMicrocmsCreateElement;
    };
    interface HTMLMicrocmsListElement extends Components.MicrocmsList, HTMLStencilElement {
    }
    var HTMLMicrocmsListElement: {
        prototype: HTMLMicrocmsListElement;
        new (): HTMLMicrocmsListElement;
    };
    interface HTMLSmoothlyInputFileElement extends Components.SmoothlyInputFile, HTMLStencilElement {
    }
    var HTMLSmoothlyInputFileElement: {
        prototype: HTMLSmoothlyInputFileElement;
        new (): HTMLSmoothlyInputFileElement;
    };
    interface HTMLElementTagNameMap {
        "microcms-create": HTMLMicrocmsCreateElement;
        "microcms-list": HTMLMicrocmsListElement;
        "smoothly-input-file": HTMLSmoothlyInputFileElement;
    }
}
declare namespace LocalJSX {
    interface MicrocmsCreate {
        "feed"?: string;
        "onNotice"?: (event: MicrocmsCreateCustomEvent<Notice>) => void;
    }
    interface MicrocmsList {
        "feed"?: string;
    }
    interface SmoothlyInputFile {
        "mode"?: "folder" | "file" | "files";
        "name"?: string;
    }
    interface IntrinsicElements {
        "microcms-create": MicrocmsCreate;
        "microcms-list": MicrocmsList;
        "smoothly-input-file": SmoothlyInputFile;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "microcms-create": LocalJSX.MicrocmsCreate & JSXBase.HTMLAttributes<HTMLMicrocmsCreateElement>;
            "microcms-list": LocalJSX.MicrocmsList & JSXBase.HTMLAttributes<HTMLMicrocmsListElement>;
            "smoothly-input-file": LocalJSX.SmoothlyInputFile & JSXBase.HTMLAttributes<HTMLSmoothlyInputFileElement>;
        }
    }
}
