function PasGen(props) {
    var ln = props,
        sm = "abcdefghijklmnopqrstuvwxyz",
        sm_cifr = "1234567890",
        sm_spec = "!@#$%^&*?/<>",
        sm_tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        ln_forCheck=0;
        word = "";
    for (var i = 0, n = sm.length; i < ln; ++i) {
      word += sm.charAt(Math.floor(Math.random() * n));
      ln_forCheck=(word.length);
    }
    return ln_forCheck;
  }
  module.exports = PasGen;