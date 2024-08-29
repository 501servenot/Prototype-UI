/**
 * @link https://github.com/guangliang2019/Prototype-UI/blob/main/src/common/context-provider/context-provider.ts
 * @author guangliang2019
 * @date 2024-08-13
 */

import ContextManager from './contextManager';
import type { ContextProviderProps, RequestContextEventDetail } from './interface';

export default abstract class ContextProvider<T extends Object>
  extends HTMLElement
  implements ContextProviderProps<T>
{
  protected abstract _key: string;
  protected _contextValue: T = {} as T;

  // prettier-ignore
  get contextValue() { return this._contextValue; }
  // prettier-ignore
  get key() { return this._key; }

  constructor() {
    super();
    this.handleRequestContext = this.handleRequestContext.bind(this);
  }

  connectedCallback() {
    // 仅在单独使用时从属性中读取 key，其余时间当作基类使用，有子类直接赋值 key
    if (this.tagName === 'CONTEXT-PROVIDER') this._key = this.getAttribute('key') || '';
    this.addEventListener('request-context', this.handleRequestContext as EventListener);
    ContextManager.getInstance().addProvider(this);
  }

  disconnectedCallback() {
    this.removeEventListener('request-context', this.handleRequestContext as EventListener);
    ContextManager.getInstance().removeProvider(this);
  }

  setContext(value: Partial<T>, notify = true) {
    Object.assign(this._contextValue, value);
    if (notify)
      ContextManager.getInstance().updateContext<T>(this, this._contextValue, Object.keys(value));
  }

  private handleRequestContext(event: CustomEvent<RequestContextEventDetail<T>>) {
    const { key, consumer } = event.detail;
    if (this._key === key) {
      event.stopPropagation(); // 阻止事件传播到外部 provider
      ContextManager.getInstance().addConsumer(this, consumer);
      ContextManager.getInstance().updateContext(
        this,
        this._contextValue,
        Object.keys(this._contextValue)
      );
    }
  }
}
