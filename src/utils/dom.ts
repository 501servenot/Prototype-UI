type Props = {
  [key: string]: any;
  children?: (Node | string)[];
};

/**
 * 使用深度优先搜索 (DFS) 在 DOM 中查找满足条件的第一个元素。
 * @param rootElement 起始元素
 * @param predicate 判断条件的函数，返回 true 表示找到了匹配的元素
 * @returns {Element | null} 返回找到的元素或 null
 */
export function dfsFindElement(
  rootElement: Element,
  predicate: (element: Element) => boolean
): Element | null {
  // 首先检查根元素是否满足条件
  if (predicate(rootElement)) {
    return rootElement;
  }

  // 遍历子元素
  const children = rootElement.children;
  for (let i = 0; i < children.length; i++) {
    const result = dfsFindElement(children[i], predicate);
    if (result !== null) {
      return result;
    }
  }

  // 如果没有找到，返回 null
  return null;
}

// 自定义 createElement 函数
export function h<T extends HTMLElement>(
  tag: string,
  props: Props = {},
  children: (Node | string)[] = []
): T {
  const element = document.createElement(tag) as T;

  if (props) {
    Object.entries(props).forEach(([key, value]) => {
      if (key !== 'children') {
        if (key.slice(0, 2) === 'on') {
          // @ts-ignore
          element[key] = value;
        } else {
          element.setAttribute(key, value as string);
        }
      }
    });
  }

  const fragment = document.createDocumentFragment();

  children.forEach((child) => {
    if (typeof child === 'string') {
      fragment.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      fragment.appendChild(child);
    }
  });

  element.appendChild(fragment);

  return element;
}

export function Div(props: Props = {}, children: (Node | string)[] = []) {
  return h('div', props, children) as HTMLDivElement;
}

export function Span(props: Props = {}, children: (Node | string)[] = []) {
  return h('span', props, children) as HTMLSpanElement;
}

export function P(props: Props = {}, children: (Node | string)[] = []) {
  return h('p', props, children) as HTMLParagraphElement;
}

export function Main(props: Props = {}, children: (Node | string)[] = []) {
  return h('main', props, children) as HTMLElement;
}

export function Aside(props: Props = {}, children: (Node | string)[] = []) {
  return h('aside', props, children) as HTMLElement;
}

export function Nav(props: Props = {}, children: (Node | string)[] = []) {
  return h('nav', props, children) as HTMLElement;
}

export function Ul(props: Props = {}, children: (Node | string)[] = []) {
  return h('ul', props, children) as HTMLUListElement;
}

export function Li(props: Props = {}, children: (Node | string)[] = []) {
  return h('li', props, children) as HTMLLIElement;
}

export function A(props: Props = {}, children: (Node | string)[] = []) {
  return h('a', props, children) as HTMLAnchorElement;
}

// library list
export function PrototypeTab(props: Props = {}, children: (Node | string)[] = []) {
  return h('prototype-tab', props, children) as HTMLElement;
}

export function PrototypeTabContent(props: Props = {}, children: (Node | string)[] = []) {
  return h('prototype-tab-content', props, children) as HTMLElement;
}

export function PrototypeTabTrigger(props: Props = {}, children: (Node | string)[] = []) {
  return h('prototype-tab-trigger', props, children) as HTMLElement;
}

export function PrototypeTabIndicator(props: Props = {}, children: (Node | string)[] = []) {
  return h('prototype-tab-indicator', props, children) as HTMLElement;
}
