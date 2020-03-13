/**
 * Copyright (c) 2020 Gary Valverde, Dorian Cortes
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

interface HTMLElement {
    connectedCallback(): void;
    disconnectedCallback(): void;
    stateChanged(state: any): void;
}