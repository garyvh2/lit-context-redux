import { LitElement, customElement, html, property, query } from "lit-element";
import { add } from "../redux/actions";
import "../../src/lib/redux-context-provider";
import { consumeRedux } from "../../src/lib/redux-context-provider";

@customElement("pending-list")
@consumeRedux(function ({ state, dispatch }) {
    this.add = (text) => dispatch(add(text));
    this.elements = state?.elements;
})
export class PendingList extends LitElement {
  @query("input")
  input!: HTMLInputElement;
  
  @property({ type: Array})
  elements: Array<string> = [];

  add: Function;

  render() {
    return html`
      <h1>Pending Items</h1>
      <input type="text">
      <button @click="${() => this.add(this.input && this.input.value)}">Add</button>
      <ul>
        ${this.elements?.map(
          item =>
            html`
              <li>${item}</li>
            `
        )}
      </ul>
    `;
  }
}