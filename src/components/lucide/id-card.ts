export default class LucideIdCard extends HTMLElement {
  connectedCallback() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('lucide', 'lucide-id-card');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');

    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'M16 10h2');
    svg.appendChild(path1);

    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('d', 'M16 14h2');
    svg.appendChild(path2);

    const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path3.setAttribute('d', 'M6.17 15a3 3 0 0 1 5.66 0');
    svg.appendChild(path3);

    const circle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle1.setAttribute('cx', '9');
    circle1.setAttribute('cy', '11');
    circle1.setAttribute('r', '2');
    svg.appendChild(circle1);

    const rect1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect1.setAttribute('x', '2');
    rect1.setAttribute('y', '5');
    rect1.setAttribute('width', '20');
    rect1.setAttribute('height', '14');
    rect1.setAttribute('rx', '2');
    svg.appendChild(rect1);

    this.appendChild(svg);
  }
}
customElements.define('lucide-id-card', LucideIdCard);
