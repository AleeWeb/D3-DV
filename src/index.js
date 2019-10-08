import { select, selectAll } from 'd3';

const svg = select('svg');

const width = +svg.attr('width'); //Parse string into a number
const height = +svg.attr('height');

const circle = svg.append('circle')
    .attr('r', height / 2)
    .attr('cx', width / 2)
    .attr('cy', height / 2)
    .attr('fill', 'yellow')
    .attr('stroke', 'black');

const leftEye = svg.append('circle')
    .attr('r', 30)
    .attr('cx', width / 2 - 100)
    .attr('cy', height / 2 - 70)
    .attr('fill', 'black');

const rightEye = svg.append('circle')
    .attr('r', 30)
    .attr('cx', width / 2 + 100)
    .attr('cy', height / 2 - 70)
    .attr('fill', 'black');

const mouth = g
    .append('path')
    .attr('d', arc()({
        innerRadius: 150,
        outerRadius: 170,
        startAngle: Math.PI / 2,
        endAngle: Math.PI * 3 / 2
    }));
