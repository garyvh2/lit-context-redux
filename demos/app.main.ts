import { LitElement, customElement, html } from "lit-element";

import './components/pending-list';
import './components/just-container';
import { store } from "./redux/store";

@customElement("app-component")
export class AppComponent extends LitElement {
  render() {
    return html`
      <redux-provider .store="${store}">
        <just-container>
          <pending-list></pending-list>
        </just-container>
      </redux-provider>
    `;
  }
}
