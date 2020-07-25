import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/collapse';
import Tooltip from 'bootstrap/js/dist/tooltip';
import 'bootstrap/js/dist/dropdown';

import '../stylesheets/style.scss';
import initReponsiveMenu from './responsiveMenu';

function onInit() {
  // turn on BS Tooltip plugin
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
  tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new Tooltip(tooltipTriggerEl);
  });

  initReponsiveMenu('responsive-menu');
}

document.addEventListener('DOMContentLoaded', onInit);
