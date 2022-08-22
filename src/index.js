/// <reference types="vite/client" />

import styles from "./style.css?inline";
import {IFRAME_COCO_GAME} from '../const/index'

/**
 * Register it before joining room:
 * ```js
 * WindowManager.register({
 *   kind: "Counter",
 *   src: Counter
 * })
 * ```
 * Then you can use it in your room:
 * ```js
 * manager.addApp({ kind: 'Counter' })
 * ```
 * Read more about how to make a netless app here:
 * https://github.com/netless-io/window-manager/blob/master/docs/develop-app.md
 *
 * @type {import("@netless/window-manager").NetlessApp}
 */
const Counter = {
  kind: "Counter",
  setup(context) {
    const box = context.getBox();
    const $content = box.$content
    box.mountStyles(styles);
    const $myApp = document.createElement("iframe")
    $myApp.src = "../static/web-desktop/index.html"
    $myApp.id = IFRAME_COCO_GAME
    $myApp.style.width = "100%";
    $myApp.style.height = "100%";

    $content.appendChild($myApp)
  },
};

export default Counter;
