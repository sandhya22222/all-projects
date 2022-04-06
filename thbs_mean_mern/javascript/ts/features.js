var AdvanceFeatures = /** @class */ (function () {
    function AdvanceFeatures() {
        this.list = [
            { name: 'generics datatypes' },
            { name: 'access modifiers' }
        ];
    }
    AdvanceFeatures.prototype.getFeaturesList = function (list, key) {
        return list.filter(function (ele, inx, arr) {
            return ele.name.includes(key || 'datatypes');
        });
    };
    return AdvanceFeatures;
}());
var af = new AdvanceFeatures();
var list = [
    { name: 'generics datatypes' },
    { name: 'access modifiers' }
];
var result = af.getFeaturesList(list);
console.log(result);
