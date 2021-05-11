/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'fo',
                type: 'image',
                rect: ['0px', '-22px','303px','214px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"fo.jpg",'0px','0px']
            },
            {
                id: '_1',
                type: 'image',
                rect: ['-616px', '62px','1432px','198px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'a',
                type: 'image',
                rect: ['-1109px', '-74px','2560px','362px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'li3',
                type: 'image',
                rect: ['-1285px', '-1077px','2870px','2417px','auto', 'auto'],
                clip: ['rect(0px 2870px 602.18310546875px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"li3.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_li3}": [
                ["style", "top", '-1077px'],
                ["style", "clip", [0,2870,602.18310546875,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '2417px'],
                ["style", "left", '-1285px'],
                ["style", "background-position", [0,629.62890625], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '2870px']
            ],
            "${_fo}": [
                ["style", "height", '214px'],
                ["style", "top", '-22px'],
                ["style", "left", '0px'],
                ["style", "width", '303px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '180px'],
                ["style", "width", '300px']
            ],
            "${_a}": [
                ["style", "top", '-73px'],
                ["style", "height", '362px'],
                ["style", "opacity", '0'],
                ["style", "left", '-805px'],
                ["style", "width", '2560px']
            ],
            "${__1}": [
                ["style", "height", '198px'],
                ["style", "top", '62px'],
                ["style", "left", '-616px'],
                ["style", "width", '1432px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8000,
            autoPlay: true,
            timeline: [
                { id: "eid12", tween: [ "style", "${_li3}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,629.62890625]}], position: 250, duration: 500 },
                { id: "eid13", tween: [ "style", "${_li3}", "background-position", [0,-888.88916015625], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2250, duration: 585 },
                { id: "eid16", tween: [ "style", "${_li3}", "background-position", [0,-1777.7783201562], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-888.88916]}], position: 4500, duration: 735 },
                { id: "eid17", tween: [ "style", "${_li3}", "background-position", [0,-2592.592773125], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-1777.77832]}], position: 7000, duration: 815 },
                { id: "eid4", tween: [ "style", "${_a}", "left", '-1109px', { fromValue: '-805px'}], position: 0, duration: 250 },
                { id: "eid2", tween: [ "style", "${_a}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid20", tween: [ "style", "${_a}", "opacity", '0', { fromValue: '1'}], position: 7500, duration: 250 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-7761608");
