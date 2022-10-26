const myTarget = document.querySelector('.is-target'); // ...手順(2)の部分
// 条件を満たした実行される関数 ...手順(4)の部分
function myIntersect(entries, myObserver) {
    entries.forEach((entry) => {
		if (entry.isIntersecting) {
			myTarget.classList.remove('is-target');
			myTarget.classList.add('is-animation');
		} else {
			myTarget.classList.remove('is-animation');
			myTarget.classList.add('is-target');
		}
    });
}
// IntersectionObserverを作成する関数
function makeObserver() {
    let myObserver;
    // IntersectionObserverのオプション設定　...手順(3)の部分
    let myOptions = {
        root: null,
        rootMargin: '-20% 0px',
        threshold: '0'
    };

    // IntersectionObserverの作成 ...手順(5)の部分
    myObserver = new IntersectionObserver(myIntersect, myOptions);
    // observe(対象); として対象を監視
    myObserver.observe(myTarget);
}
// makeObserver(); の実行（関数名は何でも良いです）
makeObserver();
