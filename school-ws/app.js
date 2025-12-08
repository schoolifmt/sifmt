// 修复logo循环组件的滚动问题
function initLogoCarousel() {
    const logoContainer = document.querySelector('.logo-carousel');
    const logos = document.querySelectorAll('.logo-item');
    
    // 添加平滑滚动效果
    let isScrolling = false;
    let scrollInterval;
    
    // 鼠标悬停时暂停滚动
    logoContainer.addEventListener('mouseenter', () => {
        clearInterval(scrollInterval);
    });
    
    logoContainer.addEventListener('mouseleave', () => {
        if (!isScrolling) {
            startScrolling();
        }
    });
    
    function startScrolling() {
        if (isScrolling) return;
        
        isScrolling = true;
        scrollInterval = setInterval(() => {
            // 获取当前滚动位置
            const currentScroll = logoContainer.scrollLeft;
            const maxScroll = logoContainer.scrollWidth - logoContainer.clientWidth;
            
            // 平滑滚动到下一个位置
            logoContainer.scrollLeft = currentScroll + 1;
            
            // 如果到达末尾，重置到开头
            if (currentScroll >= maxScroll) {
                logoContainer.scrollLeft = 0;
            }
        }, 20);
    }
    
    // 初始化滚动
    startScrolling();
    
    // 添加触摸支持
    let touchStartX = 0;
    let touchEndX = 0;
    
    logoContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });
    
    logoContainer.addEventListener('touchmove', (e) => {
        touchEndX = e.touches[0].clientX;
    });
    
    logoContainer.addEventListener('touchend', () => {
        const diff = touchStartX - touchEndX;
        if (diff > 50) {
            // 向左滑动
            logoContainer.scrollLeft += 100;
        } else if (diff < -50) {
            // 向右滑动
            logoContainer.scrollLeft -= 100;
        }
    });
}

// 确保在DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initLogoCarousel();
});