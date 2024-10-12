export default class LucidePaintRoller extends HTMLElement {
  connectedCallback() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('lucide', 'lucide-paint-roller');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');

    const rect1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect1.setAttribute('width', '16');
    rect1.setAttribute('height', '6');
    rect1.setAttribute('x', '2');
    rect1.setAttribute('y', '2');
    rect1.setAttribute('rx', '2');
    svg.appendChild(rect1);

    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2');
    svg.appendChild(path1);

    const rect2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect2.setAttribute('width', '4');
    rect2.setAttribute('height', '6');
    rect2.setAttribute('x', '8');
    rect2.setAttribute('y', '16');
    rect2.setAttribute('rx', '1');
    svg.appendChild(rect2);

    this.appendChild(svg);
  }
}
customElements.define('lucide-paint-roller', LucidePaintRoller);
