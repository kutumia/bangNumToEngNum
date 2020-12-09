function convertBangNumToEngNum(amount) {
    var bangToEngNum={'০':'0','১':'1','২':'2','৩':'3','৪':'4','৫':'5','৬':'6','৭':'7','৮':'8','৯':'9'};
    String.prototype.getEngFromBang = function() {
        var trans = this;
        for (var x in bangToEngNum) {
             trans = trans.replace(new RegExp(x, 'g'), bangToEngNum[x]);
        }
        return trans;
    };
    var engConvertedNum=amount.getEngFromBang();
    return engConvertedNum;
}
module.exports = convertBangNumToEngNum;