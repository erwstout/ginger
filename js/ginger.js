/* Ginger JS
* Author: Eric Stout <ericwstout.com>
* GitHub: https://github.com/buschschwick/ginger
*/

$("[class^=flex-basis-]").each(function(){
  $this = $(this);
  var flexyFlex = $this.attr('class');
  var flexbasis = flexyFlex.match(/\d+/)[0];
  $this.css({
    '-webkit-flex-basis': flexbasis + 'px',
    '-ms-flex-preferred-size': flexbasis + 'px',
    'flex-basis': flexbasis + 'px'
  });
});
