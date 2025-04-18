import { Div, h } from '@/www/utils/dom';
import { DocCode, HighlightRule } from '@/www/components/doc-component';

export default class SelectBasic extends DocCode {
  protected _code = 'Code component is in development';
  protected _highlightRules: HighlightRule[] = [];

  protected _preview = () => {
    const select = h('prototype-select', { 'default-value': 'Option 2' }, [
      h('prototype-select-trigger', {}, ['Selected: ', h('prototype-select-value', {})]),
      h(
        'prototype-select-content',
        {
          class: 'flex flex-col items-center justify-center',
        },
        [
          h('prototype-select-item', { value: 'Option 1' }, ['Option 1']),
          h('prototype-select-item', { value: 'Option 2' }, ['Option 2']),
          h('prototype-select-item', { value: 'Option 3' }, ['Option 3']),
          h('prototype-select-item', { value: 'Option 4' }, ['Option 4']),
          h('prototype-select-item', { value: 'Option 5' }, ['Option 5']),
        ]
      ),
    ]);
    return Div({ class: 'flex flex-col items-center justify-center' }, [select]);
  };
}

customElements.define('select-basic', SelectBasic);
