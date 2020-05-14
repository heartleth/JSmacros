var nums = 15;
var qqq;
var history_ = [];
var answer=
`단어가_없습니다:버그방지용
distance:거리
instant:즉시의
substance:물질
constant:지속적인
establish:설립하다
circumstance:상황
stable:안정된
withstand:견뎌내다
institute:만들다
constitute:구성하다
station:정거장
state:상태
statue:조각상
status:지위
statistics:통계
estate:토지
static:정적인
stature:신장
substitute:대체하다
destination:목적지
resist:저항하다
insist:주장하다
existence:존재
consist:구성되다
consistent:일관된
assist:원조하다
persist:고집하다
subsist:살아가다
arrest:체포
steady:꾸준한
president:대통령
upset:전복시키다
resident:거주하는
possess:소유하다
settlement:정착
assess:평가하다
obsess:사로잡다
outset:착수
sediment:침전물
sedentary:앉은
essence:본질
absent:결석한
interest:이익
present:출석한
represent:대표하다
representative:대리의
presentation:제출
remove:제거하다
movement:움직임
motion:이동
emotional:감정적인
promote:촉진하다
remote:외딴
motivate:동기를
motive:원동력이
mobile:이동의
momentary:순간의`;

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
