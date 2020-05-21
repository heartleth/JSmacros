var nums = 15;
var qqq;
var history_ = [];
var answer=
`단어가_없습니다:버그방지용
invention:발명
convenient:편리한
convention:회의
prevention:예방
venture:모험
advent:도래
souvenir:기념품
eventual:궁극적인
avenue:거리
revenue:수입
precede:앞서다
succeed:성공하다
access:접근하다
process:처리하다
exceed:초과하다
proceed:계속하다
recess:쉼
cease:그만두다
procedure:절차
recede:물러나다
grade:매기다
degree:정도
progress:진보하다
gradual:점진적인
ingredient:성분
aggressive:공격적인
graduate:졸업하다
congress:의회
upgrade:등급을
regress:퇴행하다
occur:발생하다
current:현재의
currency:유통
excursion:소풍
curriculum:교육
recur:재발하다
incur:초래하다
concur:동의하다
accurate:정확한
curiosity:호기심
influence:영향
fluid:유동체의
fluent:거침없는, 유창한
influenza:독감
flush:물을
fluctuate:변동하다
superfluous:남아도는
affluent:풍부한
float:떠다니다
flood:홍수
emerge:나오다, 나타나다	
emergency:비상
merge:합병하다
incident:사건
occasion:때
casual:우연한
decay:부패하다
accidental:우연한
submerge:물속에
immerse:담그다`;

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
