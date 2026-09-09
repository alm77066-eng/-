(function(){
  const DOWNLOAD_URL = "https://github.com/alm77066-eng/app-updates/releases/download/2.2.1/app-release.apk";
  document.querySelectorAll('a[href*="app-release.apk"]').forEach(function(a){
    a.href = DOWNLOAD_URL;
    a.setAttribute('download','');
    a.setAttribute('rel','noopener');
  });
  document.querySelectorAll('[data-current-year]').forEach(function(el){ el.textContent = new Date().getFullYear(); });
})();
