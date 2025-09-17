const acc = document.querySelectorAll(".accordion");

acc.forEach(btn => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;

    // 收合已開啟的其他手風琴
    acc.forEach(otherBtn => {
      const otherPanel = otherBtn.nextElementSibling;
      if (otherPanel !== panel) {
        otherPanel.style.maxHeight = null;
        otherPanel.classList.remove("open");
      }
    });

    // 切換當前手風琴
    if (panel.classList.contains("open")) {
      panel.style.maxHeight = null;
      panel.classList.remove("open");
    } else {
      panel.classList.add("open");
      panel.style.maxHeight = "400px"; // 與 CSS 保持一致

    }
  });
});

// 分頁切換
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

