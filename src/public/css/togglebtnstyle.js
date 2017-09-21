import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "cmn-toggle": {
        "position": "absolute",
        "marginLeft": -9999,
        "visibility": "hidden"
    },
    "cmn-toggle + label": {
        "display": "block",
        "position": "relative",
        "cursor": "pointer",
        "outline": "none",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "inputcmn-toggle-yes-no + label": {
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2,
        "width": "100%",
        "height": 30
    },
    "inputcmn-toggle-yes-no + label:before": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "right": 0,
        "color": "#fff",
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 15,
        "textAlign": "center",
        "lineHeight": 30,
        "backgroundColor": "#dddddd",
        "content": "attr(data-off)",
        "WebkitTransition": "-webkit-transform 0.5s",
        "MozTransition": "-moz-transform 0.5s",
        "OTransition": "-o-transform 0.5s",
        "transition": "transform 0.5s",
        "WebkitBackfaceVisibility": "hidden",
        "MozBackfaceVisibility": "hidden",
        "MsBackfaceVisibility": "hidden",
        "OBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden"
    },
    "inputcmn-toggle-yes-no + label:after": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "bottom": 0,
        "right": 0,
        "color": "#fff",
        "fontFamily": "\"Roboto Slab\", serif",
        "fontSize": 15,
        "textAlign": "center",
        "lineHeight": 30,
        "backgroundColor": "#8ce196",
        "content": "attr(data-on)",
        "WebkitTransition": "-webkit-transform 0.5s",
        "MozTransition": "-moz-transform 0.5s",
        "OTransition": "-o-transform 0.5s",
        "transition": "transform 0.5s",
        "WebkitTransform": "rotateY(180deg)",
        "MozTransform": "rotateY(180deg)",
        "MsTransform": "rotateY(180deg)",
        "OTransform": "rotateY(180deg)",
        "transform": "rotateY(180deg)",
        "WebkitBackfaceVisibility": "hidden",
        "MozBackfaceVisibility": "hidden",
        "MsBackfaceVisibility": "hidden",
        "OBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden"
    },
    "inputcmn-toggle-yes-no:checked + label:before": {
        "WebkitTransform": "rotateY(180deg)",
        "MozTransform": "rotateY(180deg)",
        "MsTransform": "rotateY(180deg)",
        "OTransform": "rotateY(180deg)",
        "transform": "rotateY(180deg)"
    },
    "inputcmn-toggle-yes-no:checked + label:after": {
        "WebkitTransform": "rotateY(0)",
        "MozTransform": "rotateY(0)",
        "MsTransform": "rotateY(0)",
        "OTransform": "rotateY(0)",
        "transform": "rotateY(0)"
    }
});