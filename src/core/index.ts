import type { Prototype } from './interface';

/**
 * 定义组件原型
 *
 * @example
 * ```ts
 * const ButtonPrototype = definePrototype<ButtonProps>({
 *   defaultProps: {
 *     type: 'default',
 *     disabled: false
 *   }
 * }, (hooks) => {
 *   // 使用钩子函数定义组件行为
 *   const state = hooks.useState(false);
 *
 *   hooks.useMounted(() => {
 *     console.log('Button mounted');
 *   });
 *
 *   return hooks.h('button', {
 *     disabled: state.value
 *   });
 * });
 * ```
 */
export function definePrototype<Props extends {} = {}, Exposes extends {} = {}>(
  prototype: Prototype<Props, Exposes>
): Prototype<Props, Exposes> {
  return prototype;
}

// 导出类型定义
export * from './interface';

// 导出适配器相关内容
export * from './adapters/web/context-center';
export { WebComponentAdapter } from './adapters/web/@web-component';
