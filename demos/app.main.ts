import { LitElement, customElement, html } from "lit-element";

import './components/pending-list';
import { store } from "./redux/store";

@customElement("app-component")
export class AppComponent extends LitElement {
  render() {
    return html`
      <redux-provider .store="${store}">
        <pending-list></pending-list>
      </redux-provider>
    `;
  }
}
