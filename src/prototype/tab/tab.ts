import { ContextProvider } from '@/common';
import { PrototypeTabContext, TabProps } from './interface';

export default class PrototypeTab extends ContextProvider<PrototypeTabContext> implements TabProps {
  protected _providerKeys = ['prototype-tab'] as const;

  private _defaultValue = '';
  // prettier-ignore
  get defaultValue(): string { return this._defaultValue; }

  private _index: number = -1;
  private _tabValue = '';
  private _tabRefs: HTMLElement[] = [];
  private _tabs: string[] = [];

  private _changTab: (value: string, focus?: boolean) => void = (value, focus = false) => {
    this._index = this._tabs.indexOf(value);
    this.setContext('prototype-tab', { index: this._index, tabValue: value });
    if (focus) {
      const targetIndex = this._tabs.findIndex((tab) => tab === value);
      if (targetIndex !== -1) this._tabRefs[targetIndex].focus();
    }
  };
  // prettier-ignore
  public get changTab() { return this._changTab.bind(this); }

  connectedCallback() {
    super.connectedCallback();
    this._defaultValue = this.getAttribute('default-value') || '';
    this._index = this._tabs.indexOf(this._defaultValue);
    this.setContext('prototype-tab', {
      tabValue: this._tabValue,
      tabs: this._tabs,
      tabRefs: this._tabRefs,
      index: this._index,
      defaultValue: this._defaultValue,
      changeTab: this.changTab,
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
}

customElements.define('prototype-tab', PrototypeTab);
