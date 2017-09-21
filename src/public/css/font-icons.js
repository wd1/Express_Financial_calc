import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "[class^=\"icon-\"]": {
        "fontFamily": "FontAwesome !important",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "[class*=\" icon-\"]": {
        "fontFamily": "FontAwesome !important",
        "speak": "none",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "fontVariant": "normal",
        "textTransform": "none",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "icon-icon_logout:before": {
        "content": "\\e909",
        "color": "#f39b12"
    },
    "icon-icon_user_login:before": {
        "content": "\\e910",
        "color": "#f39b12"
    },
    "icon-icon_filter:before": {
        "content": "\\e911",
        "color": "#f39b12"
    },
    "icon-icon_menu:before": {
        "content": "\\e906",
        "color": "#f39b12"
    },
    "icon-icon_user:before": {
        "content": "\\e907",
        "color": "#f39b12"
    },
    "icon-icon_main_07:before": {
        "content": "\\f0e0",
        "color": "#f39b12"
    },
    "icon-icon_main_02:before": {
        "color": "#f39b12"
    },
    "icon-icon_main_03:before": {
        "color": "#f39b12"
    },
    "icon-icon_main_04:before": {
        "color": "#f39b12"
    },
    "icon-icon_main_05:before": {
        "color": "#f39b12"
    },
    "icon-icon_main_06:before": {
        "color": "#f39b12"
    },
    "icon-icon_main_01:before": {
        "color": "#f39b12"
    },
    "icon-icon_arrow_01:before": {
        "content": "\\f178",
        "color": "#f39b12"
    }
});