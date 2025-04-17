(function (){
  // ヘッダーの背景をクリックで変更
  document.getElementById('mainHeader').addEventListener('click', function() {
    this.style.background = this.style.background === 'rgb(51, 51, 51)' ? '#0066cc' : '#333';
  });

  // 各セクションをホバーしたらハイライト
  document.querySelectorAll('section').forEach(function(section) {
    section.addEventListener('mouseenter', function() {
      this.classList.add('highlight');
    });
    section.addEventListener('mouseleave', function() {
      this.classList.remove('highlight');
    });
  });
})
