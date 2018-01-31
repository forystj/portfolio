$( () => {

  const $nav = $('.nav');
  const $navIcon = $('.nav_icon');
  const $burgOne = $('.burg1');
  const $burgTwo = $('.burg2');
  const $burgThree = $('.burg3');
  const $blackout = $('.blackout');
  const $projectslink = $('.projectslink');
  const $contt = $('.contt');
  const $homecont = $('.homecont');
  const $projectcont = $('.projectcont');
  const $loveme = $('.loveme');
  const $lovemenot = $('.lovemenot');
  const $hl = $('.hl');
  const $hairlooks = $('.hairlooks');
  const $ear = $('.ear');
  const $earworm = $('.earworm');
  const $buck = $('.buck');
  const $bucketlists = $('.bucketlist')
  const $show = $('.show');
  const $aboutt = $('.aboutt');
  const $aboutlink = $('.aboutlink')

  const openNav = () => {
    $blackout.fadeToggle('disp');
    $nav.toggleClass('open');
    $burgOne.toggleClass('close');
    $burgTwo.toggleClass('close');
    $burgThree.toggleClass('close');
  }

  const showAbout = () => {
    openNav();
    $homecont.css('display', 'none');
    $aboutt.css('display', 'block');
    // $projectcont.css('display', 'none');
    // $lovemenot.css('display', 'none');
    // $hairlooks.css('display', 'none');
    // $earworm.css('display', 'none');
    // $bucketlists.css('display', 'none');
  }

  const showProjects = () => {
    openNav();
    $homecont.css('display', 'none');
    $contt.css('display', 'flex');
    $projectcont.css('display', 'flex');
    $lovemenot.css('display', 'none');
    $hairlooks.css('display', 'none');
    $earworm.css('display', 'none');
    $bucketlists.css('display', 'none');
  }

  const showloveme = () => {
    $lovemenot.css('display', 'flex');
    $projectcont.css('display', 'none');
  }

  const showhairlooks = () => {
    $hairlooks.css('display', 'flex');
    $projectcont.css('display', 'none');
  }

  const showearworm = () => {
    $earworm.css('display', 'flex');
    $projectcont.css('display', 'none');
  }

  const showbucketlist = () => {
    $bucketlists.css('display', 'flex');
    $projectcont.css('display', 'none');
  }

  $navIcon.on('click', openNav);
  $projectslink.on('click', showProjects);
  $loveme.on('click', showloveme);
  $hl.on('click', showhairlooks);
  $ear.on('click', showearworm);
  $buck.on('click', showbucketlist);
  $aboutlink.on('click', showAbout);





}); // ENDS ONLOAD
