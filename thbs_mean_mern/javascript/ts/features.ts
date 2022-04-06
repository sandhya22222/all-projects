class AdvanceFeatures {
    list = [
        { name: 'generics datatypes' },
        { name: 'access modifiers' }
    ]

    getFeaturesList(list: object[], key?: string | number,) {
        return list.filter((ele: any, inx, arr) => {
            return ele.name.includes(key || 'datatypes');
        }
        );
    }
}

let af: AdvanceFeatures = new AdvanceFeatures();
let list = [
    { name: 'generics datatypes' },
    { name: 'access modifiers' }
]

let result = af.getFeaturesList(list);

console.log(result);