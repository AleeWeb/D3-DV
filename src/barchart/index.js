import { select, csv } from 'd3';

const svg = select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

// CSV method returns a promise when the data is loaded
csv('data.csv').then(data => {
  console.log(data);
});  



