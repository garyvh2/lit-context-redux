/**
 * Copyright (c) 2020 Gary Valverde, Dorian Cortes
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { html, property, customElement, LitElement } from 'lit-element';
import { connect } from '../decorators/redux';
import { Context, consume, MapFn } from 'lit-context';
import { Store } from 'redux';

/**
 * Context Provider
 * @class
 */
@customElement('redux-provider')
@connect()
export class ReduxProvider extends LitElement {
  @property({ type: Context, attribute: false })
  private context: Context;

  @property({ type: Object })
  store!: Store;

  @property({ type: Object })
  private state!: any;

  constructor() {
    super();
    this.context = new Context(this.value);
  }

  private get value(): ProvidedValue {
    const { state } = this;
    return {
      dispatch: this.store?.dispatch?.bind(this.store),
      state
    }
  }

  render() {
    this.context.setValue(this.value);
    return html`
      <slot></slot>
    `;
  }

  stateChanged(state: any) {
    this.state = { ...state };
  }
}

export const consumeRedux = (mapFn?: MapFn<ProvidedValue>) => consume<ProvidedValue>('redux-provider', mapFn);
