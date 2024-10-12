export default class LucideWashingMachine extends HTMLElement {
  connectedCallback() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('lucide', 'lucide-washing-machine');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');

    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'M3 6h3');
    svg.appendChild(path1);

    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('d', 'M17 6h.01');
    svg.appendChild(path2);

    const rect1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect1.setAttribute('width', '18');
    rect1.setAttribute('height', '20');
    rect1.setAttribute('x', '3');
    rect1.setAttribute('y', '2');
    rect1.setAttribute('rx', '2');
    svg.appendChild(rect1);

    const circle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle1.setAttribute('cx', '12');
    circle1.setAttribute('cy', '13');
    circle1.setAttribute('r', '5');
    svg.appendChild(circle1);

    const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path3.setAttribute('d', 'M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5');
    svg.appendChild(path3);

    this.appendChild(svg);
  }
}
customElements.define('lucide-washing-machine', LucideWashingMachine);
