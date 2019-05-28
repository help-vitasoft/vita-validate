'use babel';
export default {
  flag : true,
  init() {
    this.flag = true;
  },
  getFlag() {
    return this.flag;
  },
  setCursor(editor, position) {
    editor.setCursorBufferPosition(position);
    this.flag = false;
  },
  // Tab 문자 검사
  test1(editor, str, position) {
    if(str.match(/^\t/gi)) {
      alert('Tab 문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },

  test2(editor, str, position) {
    if(str.match(/^\!/)) {
      alert('문장 첫 글자에 !문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  test3(editor, str, position) {
    if(str.match(/^\@/)) {
      alert('문장 첫 글자에 @문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  test4(editor, str, position) {
    if(str.match(/^\%/)) {
      alert('문장 첫 글자에 %문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  test5(editor, str, position) {
    if(str.match(/^\*/)) {
      alert('문장 첫 글자에 *문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  test6(editor, str, position) {
    if(str.match(/^\,/)) {
      alert('문장 첫 글자에 ,문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  test7(editor, str, position) {
    if(str.match(/^\?/)) {
      alert('문장 첫 글자에 ?문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },

  test8(editor, str, position) {
    if(str.match(/^\-\s/)) {
      alert('문장 첫 글자에 -(공백)문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  test9(editor, str, position) {
    if(str.match(/^\>\s/)) {
      alert('문장 첫 글자에 >(공백)문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  test10(editor, str, position) {
    if(str.match(/^\|\s/)) {
      alert('문장 첫 글자에 |(공백)문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  test11(editor, str, position) {
    if(str.match(/^\&\s/)) {
      alert('문장 첫 글자에 &(공백)문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  test12(editor, str, position) {
    if(str.match(/^\:\s/)) {
      alert('문장 첫 글자에 :(공백)문자를 사용할 수 없습니다.');
      this.setCursor(editor, position);
    }
  },
  test13(editor, str, position) {
    var check = (str.match(/\"/gi)||[]).length;
    if(check % 2 !=0) {
      alert('문장에 \"문자가 홀수 입니다.');
      this.setCursor(editor, position);
    }
  },
  test14(editor, str, position) {
    var check = (str.match(/\'/gi)||[]).length;
    if(check % 2 !=0) {
      alert('문장에 \'문자가 홀수 입니다.');
      this.setCursor(editor, position);
    }
  }

}