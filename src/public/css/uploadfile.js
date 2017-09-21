import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "fileuploadbox": {
        "textAlign": "center"
    },
    "inputfile": {
        "width": 0.1,
        "height": 0.1,
        "opacity": 0,
        "overflow": "hidden",
        "position": "absolute",
        "zIndex": -1
    },
    "inputfile + label": {
        "maxWidth": "80%",
        "fontSize": 1.25,
        "fontWeight": "700",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap",
        "cursor": "pointer",
        "display": "inline-block",
        "overflow": "hidden",
        "paddingTop": 0.625,
        "paddingRight": 1.25,
        "paddingBottom": 0.625,
        "paddingLeft": 1.25
    },
    "inputfile:focus + label": {
        "outline": "-webkit-focus-ring-color auto 5px"
    },
    "inputfilehas-focus + label": {
        "outline": "-webkit-focus-ring-color auto 5px"
    },
    "inputfile + label *": {},
    "inputfile + label svg": {
        "width": 1,
        "height": 1,
        "verticalAlign": "middle",
        "fill": "currentColor",
        "marginTop": -0.25,
        "marginRight": 0.25
    },
    "inputfile-6 + label": {
        "color": "#f39b12",
        "border": "1px solid #f39b12",
        "backgroundColor": "#f1e5e6",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "inputfile-6:focus + label": {
        "borderColor": "#ffaf26"
    },
    "inputfile-6has-focus + label": {
        "borderColor": "#ffaf26"
    },
    "inputfile-6 + label:hover": {
        "borderColor": "#ffaf26"
    },
    "inputfile-6 + label span": {
        "paddingTop": 0.625,
        "paddingRight": 1.25,
        "paddingBottom": 0.625,
        "paddingLeft": 1.25,
        "width": 200,
        "minHeight": 2,
        "display": "inline-block",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap",
        "overflow": "hidden",
        "verticalAlign": "top"
    },
    "inputfile-6 + label strong": {
        "paddingTop": 0.625,
        "paddingRight": 1.25,
        "paddingBottom": 0.625,
        "paddingLeft": 1.25,
        "minWidth": "50%",
        "height": "100%",
        "color": "#f1e5e6",
        "backgroundColor": "#f39b12",
        "display": "inline-block"
    },
    "inputfile-6:focus + label strong": {
        "backgroundColor": "#ffaf26"
    },
    "inputfile-6has-focus + label strong": {
        "backgroundColor": "#ffaf26"
    },
    "inputfile-6 + label:hover strong": {
        "backgroundColor": "#ffaf26"
    },
    "btn-submit": {
        "width": 150,
        "height": 2.5,
        "fontSize": 1.25,
        "paddingTop": 0.525,
        "paddingRight": 1.25,
        "paddingBottom": 0.525,
        "paddingLeft": 1.25,
        "color": "#f1e5e6",
        "backgroundColor": "#f39b12",
        "display": "inline-block",
        "border": "none",
        "textDecoration": "none"
    },
    "btn-submit:hover": {
        "backgroundColor": "#ffaf26"
    }
});