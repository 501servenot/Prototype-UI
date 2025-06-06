export default class LucideBriefcaseConveyorBelt extends HTMLElement {
  connectedCallback() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('lucide', 'lucide-briefcase-conveyor-belt');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');

    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'M10 20v2');
    svg.appendChild(path1);

    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('d', 'M14 20v2');
    svg.appendChild(path2);

    const path3 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path3.setAttribute('d', 'M18 20v2');
    svg.appendChild(path3);

    const path4 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path4.setAttribute('d', 'M21 20H3');
    svg.appendChild(path4);

    const path5 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path5.setAttribute('d', 'M6 20v2');
    svg.appendChild(path5);

    const path6 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path6.setAttribute('d', 'M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12');
    svg.appendChild(path6);

    const rect1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect1.setAttribute('x', '4');
    rect1.setAttribute('y', '6');
    rect1.setAttribute('width', '16');
    rect1.setAttribute('height', '10');
    rect1.setAttribute('rx', '2');
    svg.appendChild(rect1);

    this.appendChild(svg);
  }
}
customElements.define('lucide-briefcase-conveyor-belt', LucideBriefcaseConveyorBelt);
