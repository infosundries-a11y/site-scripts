// ====================================
// 特徴セクション アコーディオン化JavaScript
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    // すべての.feature-sectionを取得
    const featureSections = document.querySelectorAll('.feature-section');
    
    featureSections.forEach(section => {
        const title = section.querySelector('.feature-title');
        const content = section.querySelector('p');
        
        if (title && content) {
            // 初期状態: すべて閉じる
            content.classList.remove('open');
            
            // クリックイベント
            title.addEventListener('click', function() {
                // 開閉状態を切り替え
                const isOpen = content.classList.contains('open');
                
                if (isOpen) {
                    // 閉じる
                    content.classList.remove('open');
                    title.classList.remove('open');
                } else {
                    // 開く
                    content.classList.add('open');
                    title.classList.add('open');
                }
            });
        }
    });
});
