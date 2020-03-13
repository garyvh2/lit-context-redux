import { LitElement, customElement, html } from "lit-element";
import "../../src/lib/redux-context-provider";

@customElement("just-container")
export class PendingList extends LitElement {
  updates: number = 0;

  render() {
    this.updates++;
    return html`
      Just Container Updates: ${this.updates}
      <div>
        <slot></slot>
      </div>
    `;
  }
}