export default class LucideTarget extends HTMLElement {
  connectedCallback() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('lucide', 'lucide-target');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');

    const circle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle1.setAttribute('cx', '12');
    circle1.setAttribute('cy', '12');
    circle1.setAttribute('r', '10');
    svg.appendChild(circle1);

    const circle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle2.setAttribute('cx', '12');
    circle2.setAttribute('cy', '12');
    circle2.setAttribute('r', '6');
    svg.appendChild(circle2);

    const circle3 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle3.setAttribute('cx', '12');
    circle3.setAttribute('cy', '12');
    circle3.setAttribute('r', '2');
    svg.appendChild(circle3);

    this.appendChild(svg);
  }
}
customElements.define('lucide-target', LucideTarget);
