/**
 * 公共JavaScript文件
 * 包含整个站点的交互功能
 */

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // 表单验证和提交处理
    const publishForm = document.getElementById('publishForm');
    if (publishForm) {
        publishForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单值
            const formData = new FormData(publishForm);
            const data = {};
            for (const [key, value] of formData.entries()) {
                data[key] = value;
            }
            
            // 简单验证
            let isValid = true;
            const requiredFields = ['title', 'category', 'importance', 'content'];
            
            requiredFields.forEach(field => {
                const input = publishForm.querySelector(`[name="${field}"]`);
                if (!data[field]) {
                    isValid = false;
                    if (input) {
                        input.classList.add('border-red-500');
                        setTimeout(() => input.classList.remove('border-red-500'), 3000);
                    }
                }
            });
            
            if (isValid) {
                // 在实际应用中，这里会发送数据到服务器
                alert('公告发布成功！');
                publishForm.reset();
            } else {
                alert('请填写所有必填字段！');
            }
        });
    }
    
    // 搜索功能
    const searchInputs = document.querySelectorAll('input[type="text"][placeholder*="搜索"]');
    searchInputs.forEach(input => {
        input.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });
    });
    
    // 点赞功能
    const likeButtons = document.querySelectorAll('[data-action="like"]');
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const countElement = this.querySelector('span');
            let count = parseInt(countElement.textContent) || 0;
            count++;
            countElement.textContent = count;
            
            // 添加动画效果
            this.classList.add('animate-pulse');
            setTimeout(() => this.classList.remove('animate-pulse'), 300);
        });
    });
    
    // 图片轮播功能
    const initImageGallery = () => {
        const galleries = document.querySelectorAll('.image-gallery');
        galleries.forEach(gallery => {
            const items = gallery.querySelectorAll('.gallery-item');
            if (items.length > 1) {
                // 自动播放
                let currentIndex = 0;
                setInterval(() => {
                    items[currentIndex].scrollIntoView({
                        behavior: 'smooth',
                        inline: 'center'
                    });
                    currentIndex = (currentIndex + 1) % items.length;
                }, 5000);
            }
        });
    };
    
    initImageGallery();
    
    // 筛选功能
    const filterCheckboxes = document.querySelectorAll('input[type="checkbox"][name^="filter"]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            applyFilters();
        });
    });
    
    // 应用筛选
    function applyFilters() {
        // 在实际应用中，这里会根据筛选条件过滤公告列表
        console.log('筛选条件已更改，重新加载数据...');
    }
    
    // 搜索函数
    function performSearch(query) {
        if (query.trim() !== '') {
            // 在实际应用中，这里会执行搜索逻辑
            console.log('搜索:', query);
            alert(`搜索功能演示: "${query}"`);
        }
    }
    
    // 初始化主题切换功能
    initThemeToggle();
    
    // 初始化Logo循环功能
    initLogoLoop();
});

// 工具函数：平滑滚动到指定元素
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// 工具函数：切换元素显示状态
function toggleElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.toggle('hidden');
    }
}

// 工具函数：设置Cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// 工具函数：获取Cookie
function getCookie(name) {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// 主题切换功能
function initThemeToggle() {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
    const htmlElement = document.documentElement;
    
    // Check for saved theme or respect system preference
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const currentTheme = savedTheme || systemTheme;
    
    // Apply theme
    if (currentTheme === 'dark') {
        htmlElement.classList.add('dark');
    }
    
    // Toggle theme function
    function toggleTheme() {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    }
    
    // Add event listeners to toggle buttons
    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', toggleTheme);
    });
}

// Logo循环功能
function initLogoLoop() {
    // Check if we're on the homepage (where the logo loop should appear)
    const logoLoopContainer = document.getElementById('logo-loop-container');
    if (!logoLoopContainer) return;
    
    // Sample logos data
    const logos = [
        { node: '<i class="fab fa-react"></i>', title: "React", href: "https://react.dev" },
        { node: '<i class="fab fa-angular"></i>', title: "Angular", href: "https://angular.io" },
        { node: '<i class="fab fa-vuejs"></i>', title: "Vue.js", href: "https://vuejs.org" },
        { node: '<i class="fab fa-node-js"></i>', title: "Node.js", href: "https://nodejs.org" },
        { node: '<i class="fab fa-python"></i>', title: "Python", href: "https://www.python.org" },
        { node: '<i class="fab fa-java"></i>', title: "Java", href: "https://www.java.com" }
    ];
    
    const track = document.getElementById('logo-track');
    if (track) {
        // Create logo items
        let logoItems = '';
        // We'll create multiple copies for seamless looping
        for (let i = 0; i < 3; i++) {
            logos.forEach(logo => {
                logoItems += `
                    <ul class="logoloop__list" role="list">
                        <li class="logoloop__item" role="listitem">
                            ${logo.href ? 
                                `<a class="logoloop__link" href="${logo.href}" target="_blank" rel="noreferrer noopener" aria-label="${logo.title || 'logo link'}">
                                    ${logo.node}
                                </a>` : 
                                `<span class="logoloop__node" aria-hidden="true">${logo.node}</span>`
                            }
                        </li>
                    </ul>`;
            });
        }
        
        track.innerHTML = logoItems;
        
        // Animation logic
        let offset = 0;
        const speed = 0.5; // Pixels per frame
        
        function animate() {
            offset -= speed;
            const seqWidth = track.firstElementChild.offsetWidth;
            if (Math.abs(offset) >= seqWidth) {
                offset = 0;
            }
            track.style.transform = `translateX(${offset}px)`;
            requestAnimationFrame(animate);
        }
        
        // Start animation
        if (logos.length > 0) {
            requestAnimationFrame(animate);
        }
    }
}

// 初始化主题
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
        document.documentElement.classList.remove('dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
    }
});