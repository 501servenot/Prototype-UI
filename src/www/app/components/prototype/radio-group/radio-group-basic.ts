import { Div, h } from '@/www/utils/dom';
import { DocCode, HighlightRule } from '@/www/components/doc-component';

export default class RadioGroupBasic extends DocCode {
  protected _code = 'Code component is in development';
  protected _highlightRules: HighlightRule[] = [];

  protected _preview = () => {
    const button = h('shadcn-button', {}, ['Button']);

    return Div({ class: 'flex flex-col items-center justify-center' }, [button]);
  };
}

customElements.define('radio-group-basic', RadioGroupBasic);
