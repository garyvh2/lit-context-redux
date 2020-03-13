/**
 * Copyright (c) 2020 Gary Valverde, Dorian Cortes
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Store, Unsubscribe } from 'redux';

/**
 * @param providerTag Provider tag name
 * @param mapFn  Function to map provider value
 */
export const connect = (providedStore?: Store) => {

  return function <T extends { new(...args: any[]): HTMLElement }>(constructor: T) {
    return class extends constructor {
      _storeUnsubscribe!: Unsubscribe | undefined;
      store?: Store = providedStore;

      connectedCallback() {
        if (super.connectedCallback) {
          super.connectedCallback();
        }

        this._storeUnsubscribe = this.store?.subscribe(() => this.stateChanged(this.store?.getState()));
        this.stateChanged(this.store?.getState());

      }

      disconnectedCallback() {
        if (this._storeUnsubscribe) {
          this._storeUnsubscribe();
        }

        if (super.disconnectedCallback) {
          super.disconnectedCallback();
        }
      }

      stateChanged(_state: any) {
        if (super.stateChanged) {
          super.stateChanged(_state);
        }
      }
    }
  }
};