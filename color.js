document.querySelectorAll('.discussContentWrapper')[0].setAttribute('style', 'min-height: 785px; background-color:#3d3d3d; color:#f2f2f2;');
document.querySelectorAll('.discussContentPlain')[0].setAttribute('style', 'color:#f2f2f2;');

let path = document.querySelectorAll('.discussContentPlain')[0].children[0]; var rawtxt = path.innerHTML;
//rawtxt = rawtxt.replace(/(=|=>|==|===|>|!|%|&|&&|\||\|\||<)/g, '<span style="color:#6bb8ff;">$&</span>');
rawtxt = rawtxt.replace(/(function|new|var|let|const)/g, '<span style="color:#bf7cb4;">$&</span>');
//rawtxt = rawtxt.replace(/[#]\w{6}/g, `<span style="color:$&;">■</span>$&`);
rawtxt = rawtxt.replace(/["][ \w \s # \+ - \* \/ \( \) \\ \[ \] : = | ! @ $ % ^ & * ; < > ? / ` ~ ■ 가-힣 ㄱ-ㅎ ]*["]/g, '<span style="color:#cc4400;">$&</span>');
rawtxt = rawtxt.replace(/['][ \w \s # \+ - \* \/ \( \) \\ \[ \] : = | ! @ $ % ^ & * ; < > ? / ` ~ ■ 가-힣 ㄱ-ㅎ ]*[']/g, '<span style="color:#cc4400;">$&</span>');
rawtxt = rawtxt.replace(/\/(\w|\s)\/"/g, '<span style="color:#cc4400;">$&</span>');
rawtxt = rawtxt.replace(/(document|location|window|console)/g, '<span style="color:#d7ff9e;">$&</span>');
rawtxt = rawtxt.replace(/\\[nr\\b]/g, '<span style="color:#fff98c;">$&</span>');
rawtxt = rawtxt.replace(/\w+\(/g, '<span style="color:#fff98c;">$&</span>');
rawtxt = rawtxt.replace(/(RegExp|JSON|XMLHttpRequest|Object|class\s[\w]+)/g, '<span style="color:#91ffcc;">$&</span>');


document.querySelectorAll('.discussContentPlain')[0].innerHTML = rawtxt;
