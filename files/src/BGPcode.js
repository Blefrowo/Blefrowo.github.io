/* a lot of functions yay
 * 
 * here's how you use these cool (useless) functions:
 * BGPcode.math.sumAll(1,1,1); // 3
 * ^ this right here just made this math: 1+1+1
 */
var BGPcode = {
  math: {
    findMax: function() {
      let m = -Infinity;
      for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > m) {
          m = arguments[i];
        }
      }
      return m;
    },
    findMin: function(n) {
      let m = Math.min(n);
      return m;
    },
    sumAll: function(s = 0) {
      for (let i = 0; i < arguments.length; i++) {
        s += arguments[i];
      }
      return s;
    },
    subAll: function(s = 0) {
      for (let i = 0; i < arguments.length; i++) {
        s -= arguments[i];
      }
      return s;
    },
    mulAll: function(m = 0) {
      f = m;
      for (let i = 0; i < arguments.length; i++) {
        m *= arguments[i];
      }
      return m / f;
    },
    divAll: function(d = 0) {
      f = d;
      for (let i = 0; i < arguments.length; i++) {
        d /= arguments[i];
      }
      return d * f;
    },
    random: function(i = 1, a = 10) {
      return Math.floor(Math.random() * a) + i;
    },
    unpredictableRandom: function(i = 1, a = 10) {
      t = Math.floor(Math.random() * a) + i;
      f = (t + t) / 2;
      return f
    }
  },
  operators:{
    Comparison:{
      equal: function(c, o) {
        return c == o;
      },
      strongEqual: function(c, o) {
        return c === o;
      },
      notEqual: function(c, o) {
        return c != o;
      },
      notStrongEqual: function(c, o) {
        return c !== o;
      },
      greater: function(c, o) {
        return c > o;
      },
      less: function(c, o) {
        return c < o;
      },
      greaterEqual: function(c, o) {
        return c >= o;
      },
      lessEqual: function(c, o) {
        return c <= o;
      },
      ternary: function(c, o, a) {
        return c ? o : a;
      },
    },
    Logical:{
      logAND: function(l, g) {
        return l && g;
      },
      logOR: function(l, g) {
        return l || g;
      },
      logNOT: function(g) {
        return !g;
      },
    },
    Type:{
      variable: function(x) {
        return typeof(x);
      },
      instance: function(x, y) {
        return x instanceof y;
      }
    },
    Binary:{
      OR: function(b, i) {
        return b | i;
      },
      AND: function(b, i) {
        return b & i;
      },
      XOR: function(b, i) {
        return b ^ i;
      },
      NOR: function(b, i) {
        return (!b && !i);
      },
      NAND: function(b, i) {
        return !(b && i);
      },
      XNOR: function(b, i) {
        return ~(b ^ i);
      },
      NOT: function(b) {
        return ~b;
      }
    }
  },
  date: {
    today: {
      century: function() {
        return new Date().getFullYear() / 100;
      },
      decade: function() {
        return new Date().getFullYear() / 10;
      },
      year: function() {
        return new Date().getFullYear();
      },
      monthNum: function() {
        return new Date().getMonth() + 1;
      },
      monthName: function() {
        x = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return x[new Date().getMonth()];
      },
      day: function() {
        return new Date().getDate();
      },
      weekDayNum: function() {
        return new Date().getDay() + 1;
      },
      weekDayName: function() {
        x = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        return x[new Date().getDay()];
      },
      hour: function() {
        return new Date().getHours();
      },
      militaryHour: function() {
        return new Date().getHours() + 1;
      },
      minute: function() {
        return new Date().getMinutes();
      },
      militaryMinute: function() {
        return new Date().getMinutes() + 1;
      },
      second: function() {
        return new Date().getSeconds();
      },
      militarySecond: function() {
        return new Date().getSeconds() + 1;
      },
      millisecond: function() {
        return new Date().getMilliseconds();
      },
      militaryMillisecond: function() {
        return new Date().getMilliseconds() + 1;
      }
    },
    since: {
      centuries: function() {
        d = new Date().getTime();
        return d / 3155692600000;
      },
      decades: function() {
        d = new Date().getTime();
        return d / 315569260000;
      },
      years: function() {
        d = new Date().getTime();
        return d / 31556926000;
      },
      months: function() {
        d = new Date().getTime();
        return d / 2629743833.3;
      },
      weeks: function() {
        d = new Date().getTime();
        return d / 604800000;
      },
      days: function() {
        d = new Date().getTime();
        return d / 86400000;
      },
      hours: function() {
        d = new Date().getTime();
        return d / 3600000;
      },
      minutes: function() {
        d = new Date().getTime();
        return d / 60000;
      },
      seconds: function() {
        d = new Date().getTime();
        return d / 1000;
      },
      milliseconds: function() {
        d = new Date().getTime();
        return d;
      }
    }
  },
  JSFck: function(tnjs) {
    const zero = '+[]';
    const one = '+!![]';
    const number = n => {
      if(n===0) {
        return zero;
      };
      return Array.from({length:n}, () => one).join(' + ');
    };
    const map = {};
    const fromString = s => s.split('').map(x => {
      if(!(x in map)) {
        const charCode = x.charCodeAt(0);
        return `([]+[])[${fromString('constructor')}][${fromString('fromCharCode')}](${number(charCode)})`;
      }
      return map[x];
    }).join('+');
    map.a = `(+{}+[])[${number(1)}]`;
    map.b = `({}+[])[${number(2)}]`;
    map.o = `({}+[])[${number(1)}]`;
    map.e = `({}+[])[${number(4)}]`;
    map.c = `({}+[])[${number(5)}]`;
    map.t = `({}+[])[${number(6)}]`;
    map[' '] = `({}+[])[${number(7)}]`;
    map.f = `(![]+[])[${number(0)}]`;
    map.s = `(![]+[])[${number(3)}]`;
    map.r = `(!![]+[])[${number(1)}]`;
    map.u = `(!![]+[])[${number(2)}]`;
    map.i = `((+!![]/+[])+[])[${number(3)}]`;
    map.n = `((+!![]/+[])+[])[${number(4)}]`;
    map.S = `([]+([]+[])[${fromString('constructor')}])[${number(9)}]`;
    map.g = `([]+([]+[])[${fromString('constructor')}])[${number(14)}]`;
    map.p = `([]+(/-/)[${fromString('constructor')}])[${number(14)}]`;
    map['\\'] = `(/\\\\/+[])[${number(1)}]`;
    map.d = `(${number(13)})[${fromString('toString')}](${number(14)})`;
    map.h = `(${number(17)})[${fromString('toString')}](${number(18)})`;
    map.m = `(${number(22)})[${fromString('toString')}](${number(23)})`;
    map.C = `((()=>{})[${fromString('constructor')}](${fromString('return escape')})()(${map['\\']}))[${number(2)}]`;
    const compile = code => `(()=>{})[${fromString('constructor')}](${fromString(code)})()`;
    return compile(tnjs); // btw 'tnjs' is "the normal javascript"
  },
  Base64: {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(e) {
      var t = "";
      var n, r, i, s, o, u, a;
      var f = 0;
      e = this._utf8_encode(e);
      while (f < e.length) {
        n = e.charCodeAt(f++);
        r = e.charCodeAt(f++);
        i = e.charCodeAt(f++);
        s = n >> 2;
        o = (n & 3) << 4 | r >> 4;
        u = (r & 15) << 2 | i >> 6;
        a = i & 63;
        if (isNaN(r)) {
          u = a = 64;
        } else if (isNaN(i)) {
          a = 64;
        }
        t += this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
      }
      return t;
    },
    decode: function(e) {
      var t = "";
      var n, r, i;
      var s, o, u, a;
      var f = 0;
      e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (f < e.length) {
        s = this._keyStr.indexOf(e.charAt(f++));
        o = this._keyStr.indexOf(e.charAt(f++));
        u = this._keyStr.indexOf(e.charAt(f++));
        a = this._keyStr.indexOf(e.charAt(f++));
        n = s << 2 | o >> 4;
        r = (o & 15) << 4 | u >> 2;
        i = (u & 3) << 6 | a;
        t = t + String.fromCharCode(n);
        if (u != 64) {
          t = t + String.fromCharCode(r);
        }
        if (a != 64) {
          t = t + String.fromCharCode(i);
        }
      }
      t = this._utf8_decode(t);
      return t;
    },
    _utf8_encode: function(e) {
      e = e.replace(/\r\n/g, "\n");
      var t = "";
      for (var n = 0; n < e.length; n++) {
        var r = e.charCodeAt(n);
        if (r < 128) {
          t += String.fromCharCode(r);
        } else if (r > 127 && r < 2048) {
          t += String.fromCharCode(r >> 6 | 192);
          t += String.fromCharCode(r & 63 | 128);
        } else {
          t += String.fromCharCode(r >> 12 | 224);
          t += String.fromCharCode(r >> 6 & 63 | 128);
          t += String.fromCharCode(r & 63 | 128);
        }
      }
      return t;
    },
    _utf8_decode: function(e) {
      var t = "";
      var n = 0;
      var r = c1 = c2 = 0;
      while (n < e.length) {
        r = e.charCodeAt(n);
        if (r < 128) {
          t += String.fromCharCode(r);
          n++;
        } else if (r > 191 && r < 224) {
          c2 = e.charCodeAt(n + 1);
          t += String.fromCharCode((r & 31) << 6 | c2 & 63);
          n += 2;
        } else {
          c2 = e.charCodeAt(n + 1);
          c3 = e.charCodeAt(n + 2);
          t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
          n += 3;
        }
      }
      return t;
    }
  }
};
