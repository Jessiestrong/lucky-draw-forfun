// 多语言内容配置
const languageContent = {
    'zh-CN': {
        title: "热烈庆祝国际三八妇女节",
        subtitle: "Celebrating International Women's Day",
        drawBtn: "摇一摇抽签",
        signs: [
            {
                level: "上上签",
                message: "今日宜主动沟通，你的包容态度将成为团队润滑剂！幸运色：天空蓝，幸运数字：7",
                task: "分享一个女性创新发展的故事"
            },
            {
                level: "中上签",
                message: "尝试倾听不同岗位同事的想法，会有意外收获！幸运色：薄荷绿，幸运数字：3",
                task: "与一位男性同事讨论Allyship的重要性"
            },
            {
                level: "中签",
                message: "保持开放心态，今天适合参加跨部门交流活动！幸运色：暖橙色，幸运数字：9",
                task: "阅读一篇关于女性领导力的文章"
            },
            {
                level: "中下签",
                message: "遇到分歧时，试试换位思考的沟通方式吧！幸运色：浅紫色，幸运数字：2",
                task: " compliment三位不同部门的同事"
            }
        ]
    },
    'zh-TW': {
        title: "熱烈慶祝國際三八婦女節",
        subtitle: "Celebrating International Women's Day",
        drawBtn: "搖一搖抽簽",
        signs: [
            {
                level: "上上簽",
                message: "今日宜主動溝通，你的包容態度將成為團隊潤滑劑！幸運色：天空藍，幸運數字：7",
                task: "分享一個女性創新發展的故事"
            },
            {
                level: "中上簽",
                message: "嘗試傾聽不同崗位同事的想法，會有意外收穫！幸運色：薄荷綠，幸運數字：3",
                task: "與一位男性同事討論Allyship的重要性"
            },
            {
                level: "中簽",
                message: "保持開放心態，今天適合參加跨部門交流活動！幸運色：暖橙色，幸運數字：9",
                task: "閱讀一篇關於女性領導力的文章"
            },
            {
                level: "中下簽",
                message: "遇到分歧時，試試換位思考的溝通方式吧！幸運色：淺紫色，幸運數字：2",
                task: " compliment三位不同部門的同事"
            }
        ]
    },
    'en': {
        title: "Celebrating International Women's Day",
        subtitle: "Celebrating International Women's Day",
        drawBtn: "Shake to Draw",
        signs: [
            {
                level: "Best Luck",
                message: "Today is a great day to communicate actively. Your inclusive attitude will be the team's lubricant! Lucky Color: Sky Blue, Lucky Number: 7",
                task: "Share a story about women's innovation"
            },
            {
                level: "Good Luck",
                message: "Try listening to colleagues from different roles, and you might gain unexpected insights! Lucky Color: Mint Green, Lucky Number: 3",
                task: "Discuss the importance of Allyship with a male colleague"
            },
            {
                level: "Average Luck",
                message: "Keep an open mind; today is perfect for cross-departmental activities! Lucky Color: Warm Orange, Lucky Number: 9",
                task: "Read an article about women's leadership"
            },
            {
                level: "Below Average Luck",
                message: "When facing disagreements, try empathetic communication! Lucky Color: Light Purple, Lucky Number: 2",
                task: "Compliment three colleagues from different departments"
            }
        ]
    }
};

let currentLanguage = 'zh-CN'; // 默认语言

// 切换语言
function changeLanguage(lang) {
    currentLanguage = lang;
    document.getElementById('title').textContent = languageContent[lang].title;
    document.getElementById('subtitle').textContent = languageContent[lang].subtitle;
    document.getElementById('drawBtn').textContent = languageContent[lang].drawBtn;
}

// 初始化签筒
const vase = document.querySelector('.vase');
const sticksContainer = document.querySelector('.sticks');
const drawBtn = document.getElementById('drawBtn');
const resultDiv = document.getElementById('result');

// 生成10根签
for (let i = 0; i < 10; i++) {
    const stick = document.createElement('div');
    stick.className = 'stick';
    stick.style.backgroundColor = `hsl(${Math.random()*360}, 70%, 60%)`;
    sticksContainer.appendChild(stick);
}

// 摇签动画
function shakeAnimation() {
    vase.style.animation = 'shake 1.5s ease-in-out';
    setTimeout(() => {
        vase.style.animation = '';
        scatterSticks();
    }, 1500);
}

// 签散落效果
function scatterSticks() {
    const sticks = document.querySelectorAll('.stick');
    sticks.forEach((stick, index) => {
        const angle = (index % 2 === 0) ? 15 : -15;
        stick.style.transform = `
            translate(${Math.random()*300 - 150}px, ${Math.random()*200}px)
            rotate(${angle + Math.random()*30}deg)
        `;
        stick.style.opacity = '0.3';
    });
    setTimeout(dropFinalStick, 1000);
}

// 最终落签效果
function dropFinalStick() {
    const finalStick = document.createElement('div');
    finalStick.className = 'stick';
    finalStick.style.cssText = `
        position: absolute;
        left: 50%;
        background: linear-gradient(45deg, gold, orange);
        animation: fallDown 1.5s cubic-bezier(0.4,0,0.2,1);
    `;
    sticksContainer.appendChild(finalStick);
    
    setTimeout(() => showResult(), 1500);
}

// 显示结果
function showResult() {
    const signs = languageContent[currentLanguage].signs;
    const randomIndex = Math.floor(Math.random() * signs.length);
    const sign = signs[randomIndex];
    
    let content = `
        <h2 style="color:#ff3b2f">✨ ${sign.level} ✨</h2>
        <p>${sign.message}</p>
        <p class="task">任务：${sign.task}</p>
    `;

    resultDiv.innerHTML = content;
    resultDiv.style.display = 'block';
}

// 事件绑定
drawBtn.addEventListener('click', shakeAnimation);