export default class LucideLogIn extends HTMLElement {
  connectedCallback() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('lucide', 'lucide-log-in');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');

    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4');
    svg.appendChild(path1);

    const polyline1 = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    polyline1.setAttribute('points', '10 17 15 12 10 7');
    svg.appendChild(polyline1);

    const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line1.setAttribute('x1', '15');
    line1.setAttribute('x2', '3');
    line1.setAttribute('y1', '12');
    line1.setAttribute('y2', '12');
    svg.appendChild(line1);

    this.appendChild(svg);
  }
}
customElements.define('lucide-log-in', LucideLogIn);
