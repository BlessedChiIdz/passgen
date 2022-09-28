function PasGen(props, code) {
    var ln = props,
        sm = "abcdefghijklmnopqrstuvwxyz",
        sm_cifr = "1234567890",
        sm_spec = "!@#$%^&*?/<>",
        sm_tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        word = "";
        if(code==1){
            sm+=sm_cifr;
        }
        if(code==2){
          sm+=sm_spec;
     `` }
        if(code==3){
          sm+=sm_tab;
        }
        if(code==4){
        sm=sm+sm_spec+sm_cifr;
      }
    for (var i = 0, n = sm.length; i < ln; ++i) {
      word += sm.charAt(Math.floor(Math.random() * n));
    }
    return word;
  }
  module.exports = PasGen;