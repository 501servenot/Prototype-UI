import { ContextConsumer } from '@/components/common';
import { FormContext } from './interface';

export default class PrototypeFormSubmit<T extends Object> extends ContextConsumer<FormContext<T>> {
  protected _consumerKeys = ['prototype-form'];
}

customElements.define('prototype-form-submit', PrototypeFormSubmit);
