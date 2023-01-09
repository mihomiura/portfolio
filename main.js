'use strict';

//フォント
(function(d) {
    var config = {
      kitId: 'plx5yxp',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);


//ハンバーガーメニュー
{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const link = document.querySelectorAll('a');

  open.addEventListener('click',() => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click',() => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  link.forEach(e=>e.addEventListener('click', ()=>
    close.click()))



  // ローディング 
  const loimg = document.querySelector("#loimg");

  setTimeout(
    function loaded() {
      const spinner = document.getElementById('loading');
      spinner.classList.add('loaded');
    }, 5000
  );

  if (window.matchMedia('(max-width: 767px)').matches) {
    //スマホ処理
    setTimeout(function(){
      var timeline = anime.timeline();
      timeline
        .add({
          targets: loimg,
          rotate: '0.03turn',
          duration: 800,
        })
        .add({
          targets: loimg,
          rotate: '-0.03turn',
          duration: 800,
        })
        .add({
          targets: loimg,
          rotate: '0.03turn',
          duration: 800,
        })
        .add({
          targets: loimg,
          rotate: '-0.03turn',
          duration: 800,
        })
        .add({
          targets: loimg,
          rotate: '0.03turn',
          duration: 800,
        })
        // .add({
        //   targets: loimg,
        //   rotate: '-0.03turn',
        //   duration: 800,
        // })
        // .add({
        //   targets: loimg,
        //   rotate: '0.03turn',
        //   duration: 800,
        // });
    }, 1000);
    
  }else if (window.matchMedia('(min-width:768px)').matches) {
    //PC処理
    setTimeout(function(){
      var timeline = anime.timeline();
      timeline
        .add({
          targets: loimg,
          translateX: 50,
          rotate: '0.03turn',
          duration: 800,
        })
        .add({
          targets: loimg,
          translateX: 100,
          rotate: '-0.03turn',
          duration: 800,
        })
        .add({
          targets: loimg,
          translateX: 150,
          rotate: '0.03turn',
          duration: 800,
        })
        .add({
          targets: loimg,
          translateX: 200,
          rotate: '-0.03turn',
          duration: 800,
        })
        .add({
          targets: loimg,
          translateX: 250,
          rotate: '0.03turn',
          duration: 800,
        })
        // .add({
        //   targets: loimg,
        //   translateX: 300,
        //   rotate: '-0.03turn',
        //   duration: 800,
        // })
        // .add({
        //   targets: loimg,
        //   translateX: 350,
        //   rotate: '0.03turn',
        //   duration: 800,
        // });
    }, 1000);

  }

 

  // スクロール表示 
  window.addEventListener("scroll", function () {
    const elm = document.querySelector(".elm1");
    const scroll = window.pageYOffset;
    if (scroll > 200) {
      elm.style.opacity = "1";
    } else {
      elm.style.opacity = "0";
    }
  });
  window.addEventListener("scroll", function () {
    const elm = document.querySelector(".elm2");
    const scroll = window.pageYOffset;
    if (scroll > 600) {
      elm.style.opacity = "1";
    } else {
      elm.style.opacity = "0";
    }
  });
  window.addEventListener("scroll", function () {
    const elm = document.querySelector(".elm3");
    const scroll = window.pageYOffset;
    if (scroll > 1000) {
      elm.style.opacity = "1";
    } else {
      elm.style.opacity = "0";
    }
  });
  window.addEventListener("scroll", function () {
    const elm = document.querySelector(".elm4");
    const scroll = window.pageYOffset;
    if (scroll > 1400) {
      elm.style.opacity = "1";
    } else {
      elm.style.opacity = "0";
    }
  });
  window.addEventListener("scroll", function () {
    const elm = document.querySelector(".elm5");
    const scroll = window.pageYOffset;
    if (scroll > 2300) {
      elm.style.opacity = "1";
    } else {
      elm.style.opacity = "0";
    }
  });


  //ダイアログ
  var btn = document.querySelector(".btn");
  btn.addEventListener('click', function() {
    if (window.confirm('送信しますか？')) {
      window.alert('送信されました');
    }else {
      window.alert('キャンセルされました');
    }
  });

    
}