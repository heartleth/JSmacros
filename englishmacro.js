var nums = 15;
var qqq;
var history_ = [];
var answer=
`단어가_없습니다:버그방지용
suspect:의심하다
respect:준수하다
aspect:측면
inspect:검사하다
spectacle:장관
speculate:숙고
prospect:가망
perspective:관점
evidence:증거
vision:시야
visual:시각의
revise:수정하다
supervise:관리하다
evident:분명한
visible:눈에
provide:공급하다
viewer:관찰자
interview:면접하다
preview:사전
overview:개관
viewpoint:관점
audience:재검토하다
audible:청중
audition:심사
auditory:귀의
obedient:순종적인
auditorium:객석
sense:감각
sensible:분별
sensory:감각의
sensual:관능적인
consensus:일치
sensation:감각
nonsense:터무니없는
scent:냄새
consent:동의하다
assent:찬성하다
sentiment:감정
dissent:의견을
resent:분개하다
sentence:문장`;

function solve(answer);

function search(t){
    var i;
    for(i = 0;i<answer.split('\n').length;i++){
        if(t.includes(answer.split('\n')[i].split(':')[1])){
            qqq=i;
            if(history_.includes(qqq)){
                console.warn('중복되는 단어가 있습니다!');
            }
            history_.push(qqq);
            let y = "";
            console.log(answer.split('\n')[i].split(':')[0]);
            console.log('')
            return;
        }
    }
    console.warn('단어 찾기 실패');
    history_.push(qqq);
    console.log('');
    qqq = 0;
}

function play(){
    for(var i = 0;i<5;i++){
        var mom = document.body
        .children[8]
        .children[1]
        .children[0]
        .children[0]
        .children[0]
        .children[1]
        .children[i + 2]
        .children[0]
        .children[1]
        .children[0]
        .children[0]
        .children[0]
        .children[0]
        .children[0];
        var e = mom.getAttribute('aria-label');
        console.log(e);
        search(e);
        var k = mom.setAttribute('data-initial-value', answer.split('\n')[qqq].split(':')[0]);
        var o = mom.setAttribute('value', answer.split('\n')[qqq].split(':')[0]);
    }
    for(var i = 0;i<5;i++){
        var mom = document.body
        .children[8]
        .children[1]
        .children[0]
        .children[0]
        .children[0]
        .children[1]
        .children[i+2]
        .children[0]
        .children[1]
        .children[0];
        mom.setAttribute('class', "quantumWizTextinputPaperinputEl freebirdFormviewerViewItemsTextShortText freebirdThemedInput modeLight hasValue");
    }
}

function solve(_answer){
    answer = _answer;
    play();
}