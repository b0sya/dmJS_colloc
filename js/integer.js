"use strict";
class Integer {
    constructor(str) {
        if (str[0] == '-') {
            this.isNegative = true;
            str = str.slice(1);
        } else {
            this.isNegative = false;
        }
        this.num = new Natural(str);
    }
    toString() {
        return (this.isNegative) ? '-' + this.num : '' + this.num;
    }
    strip() {
        this.num.strip();
        return this;
    }
    static get zero() {
        return new Integer("0");
    }
}
function ABS_Z_N(num)
{
    let result = new Integer(num.toString());
    result.isNegative = false;
    return new Natural(result.toString());

}
function POZ_Z_D(num)
{
    let input = new Natural(num.toString());
    if (NZERN_N_B(input) ==  true){
        return 0;
    }
    if (num.isNegative == true){
        return 1;
    }
    else{
        return 2;
    }
}
function TRANS_Z_N(num)
{
    return ABS_Z_N(num);
}
function MUL_ZM_Z(num)
{
    num.isNegative = num.isNegative ? false : true;
    return num;
}
function TRANS_N_Z(num)
{
        return new Integer(num.toString());
}

function MUL_ZZ_Z(first,second) {
    let number = MUL_NN_N(first.num,second.num);
    let result = TRANS_N_Z(number);
    //set isNegative
    result.isNegative = first.isNegative != second.isNegative;
    return result;
}

function DIV_ZZ_Z(first,second) {
    let number = DIV_NN_N(first.num,second.num);
    let result = TRANS_N_Z(number);
    //set isNegative
    result.isNegative = first.isNegative != second.isNegative;
    return result;
}

function MOD_ZZ_Z(first,second) {
    let number = MOD_NN_N(first.num,second.num);
    let result = TRANS_N_Z(number);
    //set isNegative
    result.isNegative = first.isNegative != second.isNegative;
    return result;
}

function ADD_ZZ_Z(first,second) {
    let a = new Integer(first.toString());
    let b = new Integer(second.toString());
    if (a.isNegative == false) {
      if (a.isNegative != true) {
        return b;
      }
      a = TRANS_Z_N(a);
      if (b.isNegative == false) {
        if (b.isNegative != true) {
          return TRANS_N_Z(a);
        }
        b = TRANS_Z_N(b);
        return TRANS_N_Z(ADD_NN_N(a, b));
      } else {
          b = MUL_ZM_Z(b);
          b = TRANS_Z_N(b);
          if (COM_NN_D(a, b) == 2) {
            return TRANS_N_Z(SUB_NN_N(a, b));
          } else {
            if (COM_NN_D(a, b) == 1) {
              return MUL_ZM_Z(TRANS_N_Z(SUB_NN_N(b, a)));
            } else {
              return 0;
            }
          }
      }
    } else {
        a = MUL_ZM_Z(a);
        a = TRANS_Z_N(a);
        if (b.isNegative == true) {
          b = MUL_ZM_Z(b);
          b = TRANS_Z_N(b);
          return MUL_ZM_Z(TRANS_N_Z(ADD_NN_N(a, b)));
        } else {
          if (b.isNegative == false) {
            if (b.isNegative != true) {
              return TRANS_N_Z(a);
            }
            b = TRANS_Z_N(b);
            if (COM_NN_D(a, b) == 2) {
              return MUL_ZM_Z(TRANS_N_Z(SUB_NN_N(a, b)));
            } else {
              if (COM_NN_D(a, b) == 1) {
                return TRANS_N_Z(SUB_NN_N(b, a));
              } else {
                return 0;
              }
            }
          }
        }
    }
}

function SUB_ZZ_Z(first,second) {
    let a = new Integer(first.toString());
    let b = new Integer(second.toString());
    if (a.isNegative == true) {
      a = MUL_ZM_Z(a);
      a = TRANS_Z_N(a);
      if (b.isNegative == true) {
        b = MUL_ZM_Z(b);
        b = TRANS_Z_N(b);
        return MUL_ZM_Z(TRANS_N_Z(ADD_NN_N(a, b)));
      } else {
          if (b.isNegative != false) {
            return TRANS_N_Z(a);
          }
          b = TRANS_Z_N(b);
          if (COM_NN_D(a, b) == 1) {
            return TRANS_N_Z(SUB_NN_N(b, a));
          } else {
            if (COM_NN_D(a, b) == 2) {
              return MUL_ZM_Z(TRANS_N_Z(SUB_NN_N(a, b)));
            } else {
              return 0;
            }
          }
      }
    } else {
        if (a.isNegative != false) {
          return b;
        }
        a = TRANS_Z_N(a);
        if (b.isNegative == false) {
          if (b.isNegative != true) {
            return TRANS_N_Z(a);
          }
          b = TRANS_Z_N(b);
          return TRANS_N_Z(ADD_NN_N(a, b));
        } else {
          if (b.isNegative == true) {
            b = MUL_ZM_Z(b);
            b = TRANS_Z_N(b);
            if (COM_NN_D(a, b) == 2) {
              return TRANS_N_Z(SUB_NN_N(a, b));
            } else {
              if (COM_NN_D(a, b) == 1) {
                return MUL_ZM_Z(TRANS_N_Z(SUB_NN_N(b, a)));
              } else {
                return 0;
              }
            }
          }
        }
    }
}
