$(function () {
  navbar();
  footer();
  //disqus();
  //googleAnalytics();
});

function navbar() {
  $('<div class="navbar-inner"><div class="container"><a class="brand" href="./">短点!</a></div></div>').appendTo($('#navbar'));
}

function footer() {}

function qrcodeToggle(id, showStr, hideStr) {
  $("#" + id + "-qrcode-str").toggle(
    function () {
      $("#" + id + "-qrcode").show();
      $("#" + id + "-qrcode-str").html(hideStr);
    },
    function () {
      $("#" + id + "-qrcode").hide();
      $("#" + id + "-qrcode-str").html(showStr);
    }
  );
}

function disqus() {
  /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
  var disqus_shortname = 'shortit2';

  /* * * DON'T EDIT BELOW THIS LINE * * */
  (function() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();
}

function googleAnalytics() {
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36753226-1']);
  _gaq.push(['_setDomainName', 'nutz.cn']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
}
