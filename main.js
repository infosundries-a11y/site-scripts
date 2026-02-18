// ====================================
// 特徴セクション アコーディオン化JavaScript
// ====================================

document.addEventListener('DOMContentLoaded', function() {
    // すべての.feature-titleを取得
    const titles = document.querySelectorAll('.feature-title');
    
    titles.forEach(title => {
        // この見出しの親要素（feature-section）を取得
        const section = title.closest('.feature-section');
        
        if (section) {
            // このセクション内の全てのpタグを取得
            const paragraphs = section.querySelectorAll('p');
            
            // 初期状態: 全て閉じる
            paragraphs.forEach(p => p.classList.remove('open'));
            
            // クリックイベント
            title.addEventListener('click', function() {
                // 開閉状態を切り替え
                const isOpen = paragraphs[0].classList.contains('open');
                
                paragraphs.forEach(p => {
                    if (isOpen) {
                        // 閉じる
                        p.classList.remove('open');
                    } else {
                        // 開く
                        p.classList.add('open');
                    }
                });
                
                // タイトルのクラスも切り替え
                if (isOpen) {
                    title.classList.remove('open');
                } else {
                    title.classList.add('open');
                }
            });
        }
    });
});
