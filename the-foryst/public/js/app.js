$( () => {

  const $nav = $('.nav');
  const $navIcon = $('.nav_icon');
  const $burgOne = $('.burg1');
  const $burgTwo = $('.burg2');
  const $burgThree = $('.burg3');
  const $blackout = $('.blackout');

  const openNav = () => {
    $blackout.fadeToggle('disp');
    $nav.toggleClass('open');
    $burgOne.toggleClass('close');
    $burgTwo.toggleClass('close');
    $burgThree.toggleClass('close');
  }

  $navIcon.on('click', openNav)


}); // ENDS ONLOAD
