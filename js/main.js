document.addEventListener("DOMContentLoaded", () => {
  // ------------------------------------
  // 1. ページトップへ戻るボタンの処理
  // ------------------------------------
  const pagetop = document.querySelector(".toTop");

  if (pagetop) {
    // スクロール時の表示/非表示を制御
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        pagetop.classList.add("is-show");
      } else {
        pagetop.classList.remove("is-show");
      }
    });

    // クリック時の処理
    pagetop.addEventListener("click", (e) => {
      e.preventDefault(); // デフォルト動作（即座なジャンプ）をキャンセル
      window.scrollTo({
        top: 0,
        behavior: "smooth", // スムーズスクロール
      });
    });
  }

  // ------------------------------------
  // 2. ページ内リンク（#ID）へのスムーススクロール処理
  // ------------------------------------

  // ヘッダーナビゲーション内の全てのリンクを取得
  const anchorLinks = document.querySelectorAll("a[href^='#']");

  anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // デフォルト動作（即座なジャンプ）をキャンセル

      // リンクのhref属性からターゲットのID名（例: #about）を取得
      const targetId = link.getAttribute("href");

      // ターゲット要素を取得
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // ターゲット要素の位置までスムーズにスクロール
        window.scrollTo({
          // targetElement.offsetTopで要素のY座標を取得
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
