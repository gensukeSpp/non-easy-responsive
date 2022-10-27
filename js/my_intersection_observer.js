const myTargets = document.querySelectorAll('.is-target'); // ...手順(2)の部分
// IntersectionObserverを作成する関数
function makeObserver() {
    let myObserver;
    // IntersectionObserverのオプション設定　...手順(3)の部分
    let myOptions = {
        root: null,
        rootMargin: '0px 0px',
        threshold: '0'
    };

    // IntersectionObserverの作成 ...手順(5)の部分
    myObserver = new IntersectionObserver(myIntersect, myOptions);
    // observe(対象); として対象を監視
    // myObserver.observe(myTargets);
    // 複数の対象要素を監視
    for(let myTarget of myTargets){
        myObserver.observe(myTarget);
    }
}

// 条件を満たした実行される関数 ...手順(4)の部分
function myIntersect(entries) {
    entries.forEach((entry) => {

        // これが重要なようだ
        const nowElement = entry.target;
        // console.log(entry);
		if (entry.isIntersecting) {
			nowElement.classList.remove('is-target');
			nowElement.classList.add('is-animation');
		} else {
			nowElement.classList.remove('is-animation');
			nowElement.classList.add('is-target');
		}
    });
}
// makeObserver(); の実行（関数名は何でも良いです）
makeObserver();
