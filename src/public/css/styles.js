import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "fs_10": {
        "fontSize": "11px!important",
        "lineHeight": "12px!important"
    },
    "fs_13": {
        "fontSize": 13,
        "lineHeight": 18
    },
    "fs_16": {
        "fontSize": 16,
        "lineHeight": 20
    },
    "fs_26": {
        "fontSize": 26,
        "lineHeight": 28
    },
    "fs_36": {
        "fontSize": 36,
        "lineHeight": 38
    },
    "fs_54": {
        "fontSize": 54,
        "lineHeight": 54,
        "fontWeight": "800"
    },
    "no_select": {
        "cursor": "default",
        "MozUserSelect": "none!important",
        "KhtmlUserSelect": "none!important",
        "WebkitUserSelect": "none!important",
        "userSelect": "none!important"
    },
    "gradient_glass": {
        "opacity": 0.8,
        "background": "linear-gradient(135deg, #1e4664, #1e4664)",
        "filter": "progid: DXImageTransform.Microsoft.gradient(startColorstr='@color-2', endColorstr='@color-1', GradientType=1)"
    },
    "clrfx:after": {
        "content": " ",
        "display": "block",
        "width": "100%",
        "height": 1,
        "visibility": "hidden",
        "opacity": 0,
        "float": "none",
        "clear": "both!important"
    },
    "align_c": {
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important"
    },
    "imgfit": {
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important",
        "overflow": "hidden"
    },
    "imgfit img": {
        "OObjectFit": "cover!important",
        "objectFit": "cover!important",
        "width": "auto!important",
        "height": "auto!important"
    },
    "no_align": {
        "display": "block!important",
        "WebkitBoxPack": "start!important",
        "MsFlexPack": "start!important",
        "WebkitJustifyContent": "flex-start!important",
        "justifyContent": "start!important",
        "WebkitBoxAlign": "start!important",
        "MsFlexAlign": "start!important",
        "WebkitAlignItems": "flex-start!important",
        "alignItems": "start!important"
    },
    "invisible_blockX": {
        "WebkitTransform": "translateX(300px)",
        "MozTransform": "translateX(300px)",
        "MsTransform": "translateX(300px)",
        "OTransform": "translateX(300px)",
        "transform": "translateX(300px)",
        "opacity": 0,
        "visibility": "hidden",
        "WebkitTransition": "all .23s ease-out",
        "MozTransition": "all .23s ease-out",
        "OTransition": "all .23s ease-out",
        "MsTransition": "all .23s ease-out",
        "transition": "all .23s ease-out"
    },
    "invisible_blockY": {
        "WebkitTransform": "translateY(-300px)",
        "MozTransform": "translateY(-300px)",
        "MsTransform": "translateY(-300px)",
        "OTransform": "translateY(-300px)",
        "transform": "translateY(-300px)",
        "opacity": 0,
        "visibility": "hidden",
        "WebkitTransition": "all .23s ease-out",
        "MozTransition": "all .23s ease-out",
        "OTransition": "all .23s ease-out",
        "MsTransition": "all .23s ease-out",
        "transition": "all .23s ease-out"
    },
    "visible_block": {
        "WebkitTransform": "translate(0)",
        "MozTransform": "translate(0)",
        "MsTransform": "translate(0)",
        "OTransform": "translate(0)",
        "transform": "translate(0)",
        "opacity": 1,
        "visibility": "visible"
    },
    "anim_off": {
        "WebkitTransition": "none!important",
        "MozTransition": "none!important",
        "OTransition": "none!important",
        "MsTransition": "none!important",
        "transition": "none!important"
    },
    "flat_shadow": {
        "WebkitBoxShadow": "1px 1px 2px 0 rgba(0, 0, 0, .01), 2px 2px 2px 0 rgba(0, 0, 0, .01), 3px 3px 2px 0 rgba(0, 0, 0, .01), 4px 4px 2px 0 rgba(0, 0, 0, .01), 5px 5px 2px 0 rgba(0, 0, 0, .01), 6px 6px 2px 0 rgba(0, 0, 0, .01), 7px 7px 2px 0 rgba(0, 0, 0, .01), 8px 8px 2px 0 rgba(0, 0, 0, .01), 9px 9px 2px 0 rgba(0, 0, 0, .01), 10px 10px 2px 0 rgba(0, 0, 0, .01), 11px 11px 2px 0 rgba(0, 0, 0, .01), 12px 12px 2px 0 rgba(0, 0, 0, .01), 13px 13px 2px 0 rgba(0, 0, 0, .01), 14px 14px 2px 0 rgba(0, 0, 0, .01), 15px 15px 2px 0 rgba(0, 0, 0, .01), 16px 16px 2px 0 rgba(0, 0, 0, .01), 17px 17px 2px 0 rgba(0, 0, 0, .01), 18px 18px 2px 0 rgba(0, 0, 0, .01), 19px 19px 2px 0 rgba(0, 0, 0, .01), 20px 20px 2px 0 rgba(0, 0, 0, .01), 21px 21px 2px 0 rgba(0, 0, 0, .01), 22px 22px 2px 0 rgba(0, 0, 0, .01), 23px 23px 2px 0 rgba(0, 0, 0, .01), 24px 24px 2px 0 rgba(0, 0, 0, .01), 25px 25px 2px 0 rgba(0, 0, 0, .01)",
        "MozBoxShadow": "1px 1px 2px 0 rgba(0, 0, 0, .01), 2px 2px 2px 0 rgba(0, 0, 0, .01), 3px 3px 2px 0 rgba(0, 0, 0, .01), 4px 4px 2px 0 rgba(0, 0, 0, .01), 5px 5px 2px 0 rgba(0, 0, 0, .01), 6px 6px 2px 0 rgba(0, 0, 0, .01), 7px 7px 2px 0 rgba(0, 0, 0, .01), 8px 8px 2px 0 rgba(0, 0, 0, .01), 9px 9px 2px 0 rgba(0, 0, 0, .01), 10px 10px 2px 0 rgba(0, 0, 0, .01), 11px 11px 2px 0 rgba(0, 0, 0, .01), 12px 12px 2px 0 rgba(0, 0, 0, .01), 13px 13px 2px 0 rgba(0, 0, 0, .01), 14px 14px 2px 0 rgba(0, 0, 0, .01), 15px 15px 2px 0 rgba(0, 0, 0, .01), 16px 16px 2px 0 rgba(0, 0, 0, .01), 17px 17px 2px 0 rgba(0, 0, 0, .01), 18px 18px 2px 0 rgba(0, 0, 0, .01), 19px 19px 2px 0 rgba(0, 0, 0, .01), 20px 20px 2px 0 rgba(0, 0, 0, .01), 21px 21px 2px 0 rgba(0, 0, 0, .01), 22px 22px 2px 0 rgba(0, 0, 0, .01), 23px 23px 2px 0 rgba(0, 0, 0, .01), 24px 24px 2px 0 rgba(0, 0, 0, .01), 25px 25px 2px 0 rgba(0, 0, 0, .01)",
        "boxShadow": "1px 1px 2px 0 rgba(0, 0, 0, .01), 2px 2px 2px 0 rgba(0, 0, 0, .01), 3px 3px 2px 0 rgba(0, 0, 0, .01), 4px 4px 2px 0 rgba(0, 0, 0, .01), 5px 5px 2px 0 rgba(0, 0, 0, .01), 6px 6px 2px 0 rgba(0, 0, 0, .01), 7px 7px 2px 0 rgba(0, 0, 0, .01), 8px 8px 2px 0 rgba(0, 0, 0, .01), 9px 9px 2px 0 rgba(0, 0, 0, .01), 10px 10px 2px 0 rgba(0, 0, 0, .01), 11px 11px 2px 0 rgba(0, 0, 0, .01), 12px 12px 2px 0 rgba(0, 0, 0, .01), 13px 13px 2px 0 rgba(0, 0, 0, .01), 14px 14px 2px 0 rgba(0, 0, 0, .01), 15px 15px 2px 0 rgba(0, 0, 0, .01), 16px 16px 2px 0 rgba(0, 0, 0, .01), 17px 17px 2px 0 rgba(0, 0, 0, .01), 18px 18px 2px 0 rgba(0, 0, 0, .01), 19px 19px 2px 0 rgba(0, 0, 0, .01), 20px 20px 2px 0 rgba(0, 0, 0, .01), 21px 21px 2px 0 rgba(0, 0, 0, .01), 22px 22px 2px 0 rgba(0, 0, 0, .01), 23px 23px 2px 0 rgba(0, 0, 0, .01), 24px 24px 2px 0 rgba(0, 0, 0, .01), 25px 25px 2px 0 rgba(0, 0, 0, .01)"
    },
    "flat_text_shadow": {
        "textShadow": "rgba(0, 0, 0, .01) 1px 1px, rgba(0, 0, 0, .01) 2px 2px, rgba(0, 0, 0, .01) 3px 3px, rgba(0, 0, 0, .01) 4px 4px, rgba(0, 0, 0, .01) 5px 5px, rgba(0, 0, 0, .01) 6px 6px, rgba(0, 0, 0, .01) 7px 7px, rgba(0, 0, 0, .01) 8px 8px, rgba(0, 0, 0, .01) 9px 9px, rgba(0, 0, 0, .01) 10px 10px, rgba(0, 0, 0, .01) 11px 11px, rgba(0, 0, 0, .01) 12px 12px, rgba(0, 0, 0, .01) 13px 13px, rgba(0, 0, 0, .01) 14px 14px, rgba(0, 0, 0, .01) 15px 15px, rgba(0, 0, 0, .01) 16px 16px, rgba(0, 0, 0, .01) 17px 17px, rgba(0, 0, 0, .01) 18px 18px, rgba(0, 0, 0, .01) 19px 19px, rgba(0, 0, 0, .01) 20px 20px, rgba(0, 0, 0, .01) 21px 21px, rgba(0, 0, 0, .01) 22px 22px, rgba(0, 0, 0, .01) 23px 23px, rgba(0, 0, 0, .01) 24px 24px, rgba(0, 0, 0, .01) 25px 25px"
    },
    "font_icns": {
        "fontFamily": "FontAwesome"
    },
    "font_icns2": {
        "fontFamily": "icomoon"
    },
    "mwidth_1200": {
        "maxWidth": "1200px!important"
    },
    "mwidth_960": {
        "display": "block",
        "maxWidth": "960px!important",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "mwidth_840": {
        "display": "block!important",
        "maxWidth": "840px!important",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "mwidth_680": {
        "display": "block",
        "maxWidth": "680px!important",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "mwidth_600": {
        "display": "block",
        "maxWidth": "600px!important",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "mwidth_540": {
        "display": "block",
        "maxWidth": "540px!important",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "mwidth_320": {
        "maxWidth": "320px!important",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "mwidth_260": {
        "maxWidth": "260px!important"
    },
    "stretch": {
        "width": "100%!important"
    },
    "block_wh": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "display": "block",
        "width": "100%",
        "height": "auto",
        "minHeight": "100%"
    },
    "columns_2": {
        "MozColumnCount": 2,
        "WebkitColumnCount": 2,
        "columnCount": 2,
        "MozColumnGap": 40,
        "WebkitColumnGap": 40,
        "columnGap": 40,
        "marginBottom": 40
    },
    "columns_3": {
        "MozColumnCount": 3,
        "WebkitColumnCount": 3,
        "columnCount": 3,
        "MozColumnGap": 20,
        "WebkitColumnGap": 20,
        "columnGap": 20,
        "marginBottom": 20
    },
    "padding_top_header": {
        "paddingTop": "120px!important"
    },
    "padding_top_header_crumbs": {
        "paddingTop": "120px!important"
    },
    "padding_top_bottom": {
        "paddingTop": 90,
        "paddingRight": "0!important",
        "paddingBottom": 90,
        "paddingLeft": "0!important"
    },
    "padding_top_120": {
        "paddingTop": "120px!important"
    },
    "padding_top_80": {
        "paddingTop": "80px!important"
    },
    "padding_top_60": {
        "paddingTop": "60px!important"
    },
    "padding_lr": {
        "paddingLeft": "20px!important",
        "paddingRight": "20px!important"
    },
    "padding_20": {
        "paddingTop": "20px!important",
        "paddingRight": "20px!important",
        "paddingBottom": "20px!important",
        "paddingLeft": "20px!important"
    },
    "padding_r": {
        "paddingRight": "20px!important"
    },
    "padding_l": {
        "paddingLeft": "20px!important"
    },
    "margin_btm": {
        "marginBottom": "40px!important"
    },
    "margin_top": {
        "marginTop": "20px!important"
    },
    "req_info": {
        "width": "auto",
        "maxWidth": "65%",
        "float": "left",
        "height": "inherit",
        "minHeight": 40,
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important"
    },
    "req_info>*": {
        "display": "inline-block",
        "width": "100%",
        "textAlign": "left"
    },
    "hn1": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 15,
        "marginLeft": "auto"
    },
    "hn2": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 15,
        "marginLeft": "auto"
    },
    "hn3": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 15,
        "marginLeft": "auto"
    },
    "hn4": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 15,
        "marginLeft": "auto"
    },
    "hn5": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 15,
        "marginLeft": "auto"
    },
    "hn6": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 15,
        "marginLeft": "auto"
    },
    "hn1>*": {
        "font": "800 54px/54px \"Exo 2\", Helvetica, Arial, sans-serif"
    },
    "hn2>*": {
        "font": "300 36px/37px \"Exo 2\", Helvetica, Arial, sans-serif"
    },
    "hn3>*": {
        "font": "300 26px/27px \"Exo 2\", Helvetica, Arial, sans-serif"
    },
    "hn4>*": {
        "font": "300 16px/20px \"Exo 2\", Helvetica, Arial, sans-serif"
    },
    "hn5>*": {
        "font": "300 13px/18px \"Exo 2\", Helvetica, Arial, sans-serif"
    },
    "hn6>*": {
        "font": "800 16px/18px \"Exo 2\", Helvetica, Arial, sans-serif"
    },
    "hn3 a": {
        "textDecoration": "none"
    },
    "hn_ll": {
        "paddingLeft": 15,
        "borderLeft": "5px solid #f39b12"
    },
    "text_box": {
        "display": "inline-block",
        "width": "100%",
        "marginBottom": 20
    },
    "text_box p": {
        "display": "inline-block",
        "marginBottom": 20
    },
    "img_center": {
        "overflow": "hidden",
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important",
        "clear": "both",
        "maxHeight": 320,
        "marginBottom": 20
    },
    "img_left": {
        "overflow": "hidden",
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important",
        "maxWidth": "40%",
        "maxHeight": 120,
        "float": "left",
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "img_right": {
        "overflow": "hidden",
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important",
        "maxWidth": "40%",
        "maxHeight": 120,
        "float": "right",
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 20
    },
    "img_center img": {
        "OObjectFit": "cover!important",
        "objectFit": "cover!important",
        "height": "100%"
    },
    "img_left img": {
        "OObjectFit": "cover!important",
        "objectFit": "cover!important",
        "height": "100%"
    },
    "img_right img": {
        "OObjectFit": "cover!important",
        "objectFit": "cover!important",
        "height": "100%"
    },
    "money:after": {
        "content": "'$'",
        "opacity": 0.8
    },
    "ta_c": {
        "width": "100%",
        "textAlign": "center!important"
    },
    "ta_l": {
        "textAlign": "left!important"
    },
    "ta_r": {
        "textAlign": "right!important"
    },
    "ta_j": {
        "textAlign": "justify!important"
    },
    "fl_r": {
        "float": "right"
    },
    "fl_l": {
        "float": "left"
    },
    "color_w": {
        "color": "#fff!important"
    },
    "[class*=list_]": {
        "marginTop": 10,
        "marginRight": "auto",
        "marginBottom": 20,
        "marginLeft": "auto"
    },
    "list_v1 li": {
        "marginBottom": 15,
        "paddingLeft": 25
    },
    "list_v2 li": {
        "marginBottom": 15,
        "paddingLeft": 25
    },
    "list_v3 li": {
        "marginBottom": 15,
        "paddingLeft": 35,
        "listStyle": "none",
        "minHeight": 25
    },
    "list_v5 li": {
        "marginBottom": 10,
        "paddingLeft": 25
    },
    "list_v6 li": {
        "marginBottom": 15,
        "paddingLeft": 25
    },
    "list_v1 li:before": {
        "content": "\\f00c",
        "width": 20,
        "height": 20,
        "position": "absolute",
        "left": -3,
        "top": -2,
        "zIndex": 3,
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important",
        "fontSize": 16,
        "textRendering": "auto",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "fontStyle": "normal!important",
        "color": "#f39b12",
        "fontFamily": "FontAwesome"
    },
    "list_v2 li:before": {
        "content": "\\f00d",
        "width": 20,
        "height": 20,
        "position": "absolute",
        "left": -3,
        "top": -2,
        "zIndex": 3,
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important",
        "fontSize": 16,
        "textRendering": "auto",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "fontStyle": "normal!important",
        "color": "#d91e18!important",
        "fontFamily": "FontAwesome"
    },
    "list_v5 li:before": {
        "content": "\\f111",
        "width": 20,
        "height": 20,
        "position": "absolute",
        "left": -3,
        "top": -2,
        "zIndex": 3,
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important",
        "fontSize": 9,
        "textRendering": "auto",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "fontStyle": "normal!important",
        "color": "#f39b12",
        "fontFamily": "FontAwesome",
        "backgroundPosition": "50% -360px"
    },
    "list_v3": {
        "listStyleType": "none",
        "counterReset": "num",
        "marginBottom": 40
    },
    "list_v3 li:before": {
        "content": "counter(num) '. '",
        "counterIncrement": "num",
        "color": "#f39b12",
        "background": "#f1f2f6",
        "width": 25,
        "height": 25,
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important",
        "float": "left",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "fontSize": 13,
        "fontWeight": "600",
        "WebkitBorderRadius": 30,
        "MozBorderRadius": 30,
        "borderRadius": 30
    },
    "list_v4 li": {
        "paddingTop": 8,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "borderBottom": "1px solid #e2e3e7"
    },
    "padding_list": {
        "paddingLeft": 20
    },
    "quote": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "marginBottom": 25,
        "fontSize": 16,
        "lineHeight": 20,
        "display": "inline-block",
        "width": "100%",
        "border": "1px dashed #c7cbd4",
        "background": "#fff",
        "WebkitBorderRadius": 6,
        "MozBorderRadius": 6,
        "borderRadius": 6
    },
    "quote_c": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "marginBottom": 25,
        "fontSize": 16,
        "lineHeight": 20,
        "display": "inline-block",
        "width": "100%",
        "border": "1px dashed #c7cbd4",
        "background": "#fff",
        "WebkitBorderRadius": 6,
        "MozBorderRadius": 6,
        "borderRadius": 6,
        "textAlign": "center"
    },
    "main_container": {
        "position": "relative",
        "display": "block",
        "width": "100%",
        "minWidth": 320,
        "maxWidth": 1920,
        "height": "auto",
        "minHeight": 100 * vh,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "zIndex": 2,
        "overflow": "hidden",
        "paddingBottom": 60
    },
    "resolution": {
        "display": "block",
        "position": "relative",
        "width": "100%",
        "maxWidth": 1200,
        "minWidth": 320,
        "height": "auto",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "zIndex": 3
    },
    "main_footer": {
        "width": "100%",
        "position": "absolute",
        "left": 0,
        "bottom": 0,
        "display": "inline-block",
        "height": 60,
        "background": "#f1f2f6",
        "zIndex": 4
    },
    "page_body": {
        "display": "inline-block",
        "width": "100%"
    },
    "[class*=verge_top_]:before": {
        "content": " ",
        "display": "block",
        "width": "100%",
        "height": 60,
        "position": "absolute",
        "left": 0,
        "backgroundSize": "cover!important",
        "zIndex": 5,
        "top": -2
    },
    "[class*=verge_bottom_]:after": {
        "content": " ",
        "display": "block",
        "width": "100%",
        "height": 60,
        "position": "absolute",
        "left": 0,
        "backgroundSize": "cover!important",
        "zIndex": 5,
        "bottom": -2
    },
    "verge_top_1:before": {
        "WebkitTransform": "scale(1, -1)",
        "MozTransform": "scale(1, -1)",
        "MsTransform": "scale(1, -1)",
        "OTransform": "scale(1, -1)",
        "transform": "scale(1, -1)"
    },
    "verge_top_2:before": {
        "WebkitTransform": "scale(-1, -1)",
        "MozTransform": "scale(-1, -1)",
        "MsTransform": "scale(-1, -1)",
        "OTransform": "scale(-1, -1)",
        "transform": "scale(-1, -1)"
    },
    "verge_bottom_2:after": {
        "WebkitTransform": "scale(-1, 1)",
        "MozTransform": "scale(-1, 1)",
        "MsTransform": "scale(-1, 1)",
        "OTransform": "scale(-1, 1)",
        "transform": "scale(-1, 1)"
    },
    "verge_bottom_3:after": {
        "backgroundSize": "100% auto!important",
        "WebkitTransform": "scale(1, 1)",
        "MozTransform": "scale(1, 1)",
        "MsTransform": "scale(1, 1)",
        "OTransform": "scale(1, 1)",
        "transform": "scale(1, 1)"
    },
    "main_header": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "display": "block",
        "width": "100%",
        "zIndex": 10,
        "WebkitTransition": "all .5s ease-out",
        "MozTransition": "all .5s ease-out",
        "OTransition": "all .5s ease-out",
        "MsTransition": "all .5s ease-out",
        "transition": "all .5s ease-out"
    },
    "main_header resolution": {
        "height": 80
    },
    "logo": {
        "position": "absolute",
        "left": 10,
        "top": "50%",
        "marginTop": -40,
        "display": "block",
        "width": 240,
        "height": 80,
        "zIndex": 2,
        "background": "url(/images/logo.png) 50% 50% no-repeat",
        "backgroundSize": "100% auto!important"
    },
    "logo>a": {
        "display": "block",
        "width": "100%",
        "height": "100%"
    },
    "btn_user_tool_vis": {
        "position": "absolute",
        "right": 60,
        "display": "none",
        "width": 38,
        "height": 38,
        "top": "50%",
        "marginTop": -18,
        "WebkitTransition": "all .18s ease-out",
        "MozTransition": "all .18s ease-out",
        "OTransition": "all .18s ease-out",
        "MsTransition": "all .18s ease-out",
        "transition": "all .18s ease-out"
    },
    "header_fix btn_user_tool_vis": {
        "display": "block"
    },
    "btn_user_tool_vis:before": {
        "content": "\\f007",
        "width": "inherit",
        "height": "inherit",
        "fontSize": 24,
        "fontFamily": "FontAwesome",
        "top": -2,
        "left": -1,
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important",
        "color": "#f39b12"
    },
    "btn_user_tool_vis:hover": {
        "cursor": "pointer"
    },
    "btn_user_tool_vis:hover:before": {
        "color": "#ffaf26"
    },
    "logged btn_user_tool_vis:before": {
        "content": "\\f007"
    },
    "header_right_tool": {
        "display": "block",
        "position": "absolute",
        "width": "100%",
        "right": 0,
        "height": "100%",
        "zIndex": 1
    },
    "header_right_tool usertool": {
        "display": "block",
        "position": "absolute",
        "right": 80,
        "height": "100%"
    },
    "header_right_tool usertool>h_login_box": {
        "height": 38
    },
    "header_right_tool usertool>h_login_box>div": {
        "display": "block",
        "float": "left!important",
        "marginLeft": 0,
        "height": 38,
        "top": "50%",
        "marginTop": -19
    },
    "header_right_tool usertool>h_login_box>div>*": {
        "display": "inline-block",
        "width": "auto",
        "height": "auto",
        "position": "relative",
        "zIndex": 1,
        "minHeight": 37,
        "fontSize": 16,
        "textDecoration": "none!important",
        "whiteSpace": "nowrap",
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3
    },
    "header_right_tool usertool>h_login_box>login_btn>*": {
        "zIndex": 2,
        "textAlign": "center",
        "paddingTop": 7,
        "paddingRight": 25,
        "paddingBottom": 8,
        "paddingLeft": 25,
        "background": "0 0",
        "right": -2,
        "border": "1px solid #f39b12",
        "WebkitBorderRadius": "2px 0 0 2px!important",
        "MozBorderRadius": "2px 0 0 2px!important",
        "borderRadius": "2px 0 0 2px!important",
        "color": "#f39b12"
    },
    "header_right_tool usertool>h_login_box>login_btn>:hover": {
        "color": "#ffbd34",
        "borderColor": "#ffac23",
        "background": "rgba(243, 155, 18, .05)",
        "cursor": "pointer!important"
    },
    "header_right_tool usertool>h_login_box>sign_up_btn>*": {
        "textAlign": "center",
        "paddingTop": 7,
        "paddingRight": 25,
        "paddingBottom": 7,
        "paddingLeft": 25,
        "background": "#f39b12",
        "color": "#fff",
        "zIndex": 3,
        "WebkitBorderRadius": "0 2px 2px 0!important",
        "MozBorderRadius": "0 2px 2px 0!important",
        "borderRadius": "0 2px 2px 0!important"
    },
    "header_right_tool usertool>h_login_box>sign_up_btn>:hover": {
        "background": "#ffac23"
    },
    "h_logged_box": {
        "width": "auto",
        "color": "#fff",
        "lineHeight": 38,
        "display": "none"
    },
    "h_logged_box h_username": {
        "textAlign": "left",
        "maxWidth": 150,
        "overflow": "hidden",
        "paddingLeft": 40,
        "lineHeight": 36
    },
    "h_logged_box h_username:before": {
        "content": "\\f2c0",
        "width": 38,
        "height": 38,
        "fontSize": 20,
        "fontFamily": "FontAwesome",
        "position": "absolute",
        "left": 0,
        "top": "50%",
        "marginTop": -19,
        "color": "#fff",
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important",
        "opacity": 0.5,
        "lineHeight": 40
    },
    "h_logged_box>*": {
        "float": "left"
    },
    "h_logged_box>btn_logout": {
        "display": "block"
    },
    "h_logged_box>btn_logout>*": {
        "display": "block",
        "width": 40,
        "height": 38,
        "background": "0 0",
        "border": "none"
    },
    "h_logged_box>btn_logout>:before": {
        "content": "\\f08b",
        "fontFamily": "FontAwesome",
        "color": "#f39b12",
        "fontSize": 20,
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important"
    },
    "h_logged_box>btn_logout>:hover:before": {
        "color": "#ffb930"
    },
    "btn_logout a": {
        "textDecoration": "none"
    },
    "logged h_login_box": {
        "display": "none"
    },
    "logged h_logged_box": {
        "display": "block"
    },
    "btn_menu_vis": {
        "position": "absolute",
        "right": 20,
        "display": "block",
        "width": 38,
        "height": 38,
        "top": "50%",
        "marginTop": -19,
        "border": "1px solid rgba(243, 155, 18, .9)",
        "WebkitBorderRadius": 2,
        "MozBorderRadius": 2,
        "borderRadius": 2,
        "WebkitTransition": "all .18s ease-out",
        "MozTransition": "all .18s ease-out",
        "OTransition": "all .18s ease-out",
        "MsTransition": "all .18s ease-out",
        "transition": "all .18s ease-out"
    },
    "btn_menu_vis:before": {
        "content": "\\f0c9",
        "width": "inherit",
        "height": "inherit",
        "fontSize": 20,
        "fontFamily": "FontAwesome",
        "top": -1,
        "left": -1,
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important",
        "color": "#f39b12"
    },
    "btn_menu_vis:hover": {
        "borderColor": "#f39b12",
        "cursor": "pointer"
    },
    "btn_menu_vis:hover:before": {
        "color": "#ffaf26"
    },
    "header_menu": {
        "display": "block",
        "width": "auto",
        "minWidth": 250,
        "background": "#143c5a",
        "position": "absolute",
        "top": 80,
        "right": 0,
        "WebkitTransform": "translateX(300px)",
        "MozTransform": "translateX(300px)",
        "MsTransform": "translateX(300px)",
        "OTransform": "translateX(300px)",
        "transform": "translateX(300px)",
        "opacity": 0,
        "visibility": "hidden",
        "WebkitTransition": "all .23s ease-out",
        "MozTransition": "all .23s ease-out",
        "OTransition": "all .23s ease-out",
        "MsTransition": "all .23s ease-out",
        "transition": "all .23s ease-out"
    },
    "header_menu:after": {
        "content": "''",
        "display": "block",
        "width": 13,
        "height": 13,
        "position": "absolute",
        "top": -7,
        "right": 33,
        "zIndex": 1,
        "background": "#143c5a",
        "WebkitTransform": "rotate(-45deg)",
        "MozTransform": "rotate(-45deg)",
        "MsTransform": "rotate(-45deg)",
        "OTransform": "rotate(-45deg)",
        "transform": "rotate(-45deg)"
    },
    "header_menu>div a": {
        "paddingTop": 13,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15,
        "fontSize": 13,
        "color": "#f1f2f6",
        "display": "block",
        "zIndex": 2,
        "textDecoration": "none",
        "borderBottom": "1px solid #214967"
    },
    "header_menu>div a:hover": {
        "background": "#19415f"
    },
    "btn_menu_visactive+header_menu": {
        "WebkitTransform": "translate(0)",
        "MozTransform": "translate(0)",
        "MsTransform": "translate(0)",
        "OTransform": "translate(0)",
        "transform": "translate(0)",
        "opacity": 1,
        "visibility": "visible"
    },
    "btn_filters_vis": {
        "position": "absolute",
        "right": 100,
        "display": "none",
        "width": 38,
        "height": 38,
        "top": "50%",
        "marginTop": -19,
        "WebkitTransition": "all .18s ease-out",
        "MozTransition": "all .18s ease-out",
        "OTransition": "all .18s ease-out",
        "MsTransition": "all .18s ease-out",
        "transition": "all .18s ease-out"
    },
    "btn_filters_vis:before": {
        "content": "\\f0b0",
        "width": "inherit",
        "height": "inherit",
        "fontSize": 24,
        "fontFamily": "FontAwesome",
        "top": -1,
        "left": -1,
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important",
        "color": "#f39b12"
    },
    "btn_filters_vis:hover": {
        "cursor": "pointer"
    },
    "btn_filters_vis:hover:before": {
        "color": "#ffaf26"
    },
    "header_bg": {
        "background": "#1e4664",
        "position": "fixed"
    },
    "header_fix": {
        "background": "#1e4664",
        "position": "fixed"
    },
    "header_fix resolution": {
        "height": 50
    },
    "header_fix header_right_tool": {
        "width": "100%"
    },
    "header_fix logo": {
        "marginTop": -20,
        "display": "block",
        "width": 160,
        "height": 40,
        "left": 10,
        "zIndex": 2
    },
    "header_fix usertool": {
        "position": "absolute!important",
        "top": 50,
        "right": 0,
        "paddingTop": 0,
        "paddingRight": 6,
        "paddingBottom": 0,
        "paddingLeft": 6,
        "width": "auto",
        "display": "inline-block",
        "background": "#143c5a",
        "zIndex": 3,
        "WebkitTransform": "translateX(300px)",
        "MozTransform": "translateX(300px)",
        "MsTransform": "translateX(300px)",
        "OTransform": "translateX(300px)",
        "transform": "translateX(300px)",
        "opacity": 0,
        "visibility": "hidden",
        "WebkitTransition": "all .23s ease-out",
        "MozTransition": "all .23s ease-out",
        "OTransition": "all .23s ease-out",
        "MsTransition": "all .23s ease-out",
        "transition": "all .23s ease-out"
    },
    "header_fix usertool:after": {
        "content": "''",
        "display": "block",
        "width": 13,
        "height": 13,
        "position": "absolute",
        "top": -7,
        "right": 73,
        "zIndex": 1,
        "background": "#143c5a",
        "WebkitTransform": "rotate(-45deg)",
        "MozTransform": "rotate(-45deg)",
        "MsTransform": "rotate(-45deg)",
        "OTransform": "rotate(-45deg)",
        "transform": "rotate(-45deg)"
    },
    "btn_user_tool_visactive+usertool": {
        "WebkitTransform": "translate(0)",
        "MozTransform": "translate(0)",
        "MsTransform": "translate(0)",
        "OTransform": "translate(0)",
        "transform": "translate(0)",
        "opacity": 1,
        "visibility": "visible"
    },
    "header_fix btn_menu_vis": {
        "border": "none"
    },
    "header_fix header_menu": {
        "top": 50
    },
    "head_banner_h": {
        "height": 680
    },
    "greeting_section": {
        "display": "block",
        "width": "100%"
    },
    "greeting_section resolution": {
        "overflow": "hidden",
        "height": 680
    },
    "main_greeting": {
        "display": "block",
        "width": "100%",
        "textAlign": "center",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20
    },
    "video_container:before": {
        "content": "",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "display": "block",
        "width": "100%",
        "height": "auto",
        "minHeight": "100%",
        "opacity": 0.8,
        "background": "linear-gradient(135deg, #1e4664, #1e4664)",
        "filter": "progid: DXImageTransform.Microsoft.gradient(startColorstr='@color-2', endColorstr='@color-1', GradientType=1)",
        "zIndex": 2
    },
    "video_container": {
        "display": "block",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": "100%",
        "zIndex": 1,
        "overflow": "hidden",
        "height": 680
    },
    "arrow_down": {
        "width": 60,
        "height": 60,
        "color": "rgba(255, 255, 255, .5)",
        "position": "absolute",
        "zIndex": 6,
        "bottom": 5,
        "left": "50%",
        "marginLeft": -30,
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important"
    },
    "arrow_down:before": {
        "content": "\\f107",
        "fontFamily": "FontAwesome",
        "fontSize": 22
    },
    "columns_3_container": {
        "display": "block",
        "position": "relative"
    },
    "columns_3_container>*": {
        "display": "block",
        "width": "33.33%",
        "float": "left",
        "textAlign": "center",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20
    },
    "columns_3_container img_icn:before": {
        "width": 140,
        "height": 140,
        "fontSize": 70,
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "columns_3_container>*>:nth-child(2)": {
        "maxWidth": 300,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "main_factlist": {
        "background": "url(/images/bg_factlist.jpg) 50% 50% no-repeat fixed",
        "backgroundSize": "cover!important"
    },
    "main_factlist:before": {
        "content": "",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "display": "block",
        "width": "100%",
        "height": "auto",
        "minHeight": "100%",
        "opacity": 0.8,
        "background": "linear-gradient(135deg, #1e4664, #1e4664)",
        "filter": "progid: DXImageTransform.Microsoft.gradient(startColorstr='@color-2', endColorstr='@color-1', GradientType=1)",
        "zIndex": 2
    },
    "main_factlist img_icn:before": {
        "color": "#fff"
    },
    "hiw_gallery": {
        "display": "block"
    },
    "hiw_gallery>*": {
        "display": "block",
        "width": "33.33%",
        "float": "left",
        "textAlign": "center",
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "marginBottom": 20
    },
    "hiw_gallery imgfit": {
        "width": 220,
        "height": 220,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 10,
        "marginLeft": "auto"
    },
    "howitwork_section": {
        "background": "url(/images/bg_hiw.jpg) 50% 50% no-repeat fixed",
        "backgroundSize": "cover!important"
    },
    "howitwork_section:before": {
        "content": "",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "display": "block",
        "width": "100%",
        "height": "auto",
        "minHeight": "100%",
        "opacity": 0.8,
        "background": "linear-gradient(135deg, #1e4664, #1e4664)",
        "filter": "progid: DXImageTransform.Microsoft.gradient(startColorstr='@color-2', endColorstr='@color-1', GradientType=1)",
        "zIndex": 2
    },
    "main_steps": {
        "maxWidth": 480,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "main_steps>*": {
        "width": "100%",
        "display": "block",
        "border": "2px dashed rgba(255, 255, 255, .7)",
        "marginBottom": 60,
        "WebkitBorderRadius": 6,
        "MozBorderRadius": 6,
        "borderRadius": 6,
        "height": 130
    },
    "main_steps>*>*": {
        "display": "block",
        "float": "left",
        "height": "inherit",
        "minHeight": "100%"
    },
    "main_steps>*>:first-child span": {
        "zIndex": 3,
        "fontSize": 26,
        "left": 10
    },
    "main_steps>*>:first-child span:last-child": {
        "display": "none"
    },
    "main_steps>*>:first-child": {
        "width": "35%",
        "background": "#fff",
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important",
        "top": -2,
        "left": -2,
        "height": 132,
        "WebkitBorderRadius": "4px 0 0 4px",
        "MozBorderRadius": "4px 0 0 4px",
        "borderRadius": "4px 0 0 4px"
    },
    "main_steps>*>:first-child:after": {
        "content": "",
        "top": "50%",
        "marginTop": -48,
        "display": "block",
        "width": 97,
        "height": 97,
        "background": "#fff",
        "position": "absolute",
        "right": -48,
        "WebkitBorderRadius": "0 8px",
        "MozBorderRadius": "0 8px",
        "borderRadius": "0 8px",
        "zIndex": 1,
        "WebkitTransform": "rotateX(0deg) rotateY(-45deg) rotateZ(-45deg)",
        "MozTransform": "rotateX(0deg) rotateY(-45deg) rotateZ(-45deg)",
        "MsTransform": "rotateX(0deg) rotateY(-45deg) rotateZ(-45deg)",
        "OTransform": "rotateX(0deg) rotateY(-45deg) rotateZ(-45deg)",
        "transform": "rotateX(0deg) rotateY(-45deg) rotateZ(-45deg)"
    },
    "main_steps>*>:last-child": {
        "width": "55%",
        "float": "right",
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important",
        "fontSize": "16px!important",
        "color": "#fff",
        "textAlign": "center",
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10
    },
    "main_steps>*>:last-child span": {
        "color": "#f39b12"
    },
    "responsive_table": {
        "display": "block",
        "width": "100%",
        "paddingLeft": 280,
        "zIndex": 1,
        "minHeight": 800,
        "marginBottom": 40
    },
    "users_responsive_table": {
        "display": "block",
        "width": "100%",
        "zIndex": 1,
        "minHeight": 800,
        "marginBottom": 40
    },
    "tabs_list": {
        "display": "table",
        "width": "100%",
        "paddingLeft": 120
    },
    "tabs_list>*": {
        "width": "33.33%",
        "display": "table-cell",
        "paddingTop": 20,
        "paddingRight": 10,
        "paddingBottom": 20,
        "paddingLeft": 10,
        "textAlign": "center",
        "borderTop": "1px solid #e7e8ec",
        "borderLeft": "1px solid #e7e8ec",
        "cursor": "default",
        "MozUserSelect": "none!important",
        "KhtmlUserSelect": "none!important",
        "WebkitUserSelect": "none!important",
        "userSelect": "none!important"
    },
    "tabs_list>:hover": {
        "cursor": "pointer"
    },
    "tabs_list>:last-child": {
        "borderRight": "1px solid #e7e8ec"
    },
    "tabs_list>active": {
        "borderColor": "#f39b12!important",
        "background": "#f39b12",
        "color": "#fff"
    },
    "tabs_content": {
        "width": "100%",
        "borderBottom": "1px solid #e7e8ec!important",
        "borderLeft": "1px solid #e7e8ec!important",
        "display": "table"
    },
    "tabs_content>div": {
        "width": "100%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "display": "table-row"
    },
    "tabs_content>div:nth-child(2n+1)": {
        "background": "rgba(0, 0, 0, .017)"
    },
    "tr_name": {
        "width": 120,
        "verticalAlign": "top",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "fontSize": 13
    },
    "tr_user_name": {
        "width": 40,
        "verticalAlign": "top"
    },
    "tabs_content>div>div": {
        "display": "table-cell",
        "position": "relative"
    },
    "tabs_content>div>tabs_box": {
        "width": "100%",
        "paddingLeft": 10
    },
    "tabs_content tabs_box>div": {
        "float": "left!important",
        "textAlign": "center",
        "paddingTop": 10,
        "paddingRight": 18,
        "paddingBottom": 10,
        "paddingLeft": 18,
        "borderRight": "1px solid #e7e8ec!important"
    },
    "tabs_content>div>tabs_box>div>div": {
        "display": "block",
        "float": "left"
    },
    "tabs_content>div>div:first-child": {
        "paddingTop": 10,
        "paddingRight": 18,
        "paddingBottom": 10,
        "paddingLeft": 18,
        "borderRight": "1px solid #e7e8ec!important"
    },
    "tabs_content tabs_box>div>div": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "fontSize": 13
    },
    "tabs_content>div:first-child": {
        "background": "#f1f2f6"
    },
    "tabs_content>div:first-child tabs_box>div>div": {
        "fontSize": 13,
        "textTransform": "capitalize!important",
        "overflow": "hidden"
    },
    "responsive_tablemobile_table tabs_box>div": {
        "display": "none!important"
    },
    "responsive_tablemobile_table tabs_box>divactive": {
        "display": "block!important"
    },
    "responsive_tablemobile_table tabs_list": {
        "paddingLeft": 0
    },
    "responsive_tablemobile_table tabs_list>divactive:after": {
        "content": "",
        "display": "block",
        "width": 8,
        "height": 8,
        "position": "absolute",
        "left": "50%",
        "marginLeft": -4,
        "bottom": -4,
        "background": "#f39b12",
        "zIndex": 2,
        "WebkitTransform": "rotate(-45deg)",
        "MozTransform": "rotate(-45deg)",
        "MsTransform": "rotate(-45deg)",
        "OTransform": "rotate(-45deg)",
        "transform": "rotate(-45deg)",
        "borderLeft": "1px solid #ffaf26!important",
        "borderBottom": "1px solid #ffaf26!important"
    },
    "tabs_list>divactive": {
        "borderBottom": "1px solid #ffaf26!important"
    },
    "filters_box": {
        "width": "100%",
        "maxWidth": 280,
        "position": "absolute",
        "top": 0,
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "left": 0,
        "zIndex": 2
    },
    "filters_box form": {
        "paddingBottom": 40
    },
    "filters_box radio_checkbox_container": {
        "display": "block",
        "background": "#fff",
        "WebkitBorderRadius": 2,
        "MozBorderRadius": 2,
        "borderRadius": 2
    },
    "filters_box radio_checkbox_container>li": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "filters_box radio_checkbox_container>li:not(:last-child)": {
        "borderBottom": "1px solid #e7e8ec"
    },
    "filters_box radio_checkbox_container>li label": {
        "fontSize": 14,
        "lineHeight": 16,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 30
    },
    "filters_box radio_checkbox_container>li label:before": {
        "top": 5,
        "left": 2
    },
    "filters_box radio_checkbox_container>li input:checked+label": {
        "background": "#fbfcff"
    },
    "drop_down_box": {
        "display": "block",
        "width": "102%",
        "left": "-1%",
        "zIndex": 3
    },
    "drop_down_boxactive": {
        "WebkitBoxShadow": "2px 0 8px 0 rgba(0, 0, 0, .08)",
        "MozBoxShadow": "2px 0 8px 0 rgba(0, 0, 0, .08)",
        "boxShadow": "2px 0 8px 0 rgba(0, 0, 0, .08)",
        "zIndex": 100
    },
    "drop_down_boxactive drop_down_body": {
        "WebkitBoxShadow": "2px 0 8px 0 rgba(0, 0, 0, .08)",
        "MozBoxShadow": "2px 0 8px 0 rgba(0, 0, 0, .08)",
        "boxShadow": "2px 0 8px 0 rgba(0, 0, 0, .08)",
        "zIndex": 100
    },
    "drop_down_head": {
        "minHeight": 40,
        "border": "1px solid #e2e3e7",
        "background": "#fff",
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important",
        "zIndex": 7,
        "position": "relative",
        "WebkitBorderRadius": 2,
        "MozBorderRadius": 2,
        "borderRadius": 2
    },
    "drop_down_head:hover": {
        "cursor": "pointer",
        "borderColor": "#c7cbd4"
    },
    "drop_down_head:after": {
        "content": "\\f107",
        "fontFamily": "FontAwesome",
        "background": "#fff",
        "zIndex": 3,
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important",
        "width": 38,
        "height": 38,
        "position": "absolute",
        "right": 0,
        "color": "#e2e3e7",
        "top": "50%",
        "marginTop": -19,
        "fontSize": 18
    },
    "drop_down_boxactive drop_down_head:after": {
        "WebkitTransform": "scaleY(-1)",
        "MozTransform": "scaleY(-1)",
        "MsTransform": "scaleY(-1)",
        "OTransform": "scaleY(-1)",
        "transform": "scaleY(-1)"
    },
    "drop_down_head>div": {
        "width": "100%",
        "textAlign": "left",
        "paddingTop": 0,
        "paddingRight": 40,
        "paddingBottom": 0,
        "paddingLeft": 16,
        "whiteSpace": "nowrap",
        "overflow": "hidden"
    },
    "drop_down_body": {
        "display": "block",
        "width": "100%",
        "position": "absolute",
        "top": 39,
        "zIndex": 6,
        "background": "#fff",
        "overflow": "hidden",
        "overflowY": "auto",
        "border": "1px solid #e2e3e7",
        "WebkitTransition": "all .2s ease-out",
        "MozTransition": "all .2s ease-out",
        "OTransition": "all .2s ease-out",
        "MsTransition": "all .2s ease-out",
        "transition": "all .2s ease-out",
        "maxHeight": 1,
        "opacity": 0,
        "visibility": "hidden"
    },
    "drop_down_boxactive>drop_down_body": {
        "maxHeight": 300,
        "opacity": 1,
        "visibility": "visible"
    },
    "drop_down_box ch_numb": {
        "display": "inline-block",
        "marginLeft": 5,
        "color": "#a5adb8"
    },
    "no_table_text": {
        "width": "100%",
        "height": "inherit",
        "border": "1px solid #f1f2f6",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "background": "#fbfcff",
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important",
        "textAlign": "center"
    },
    "massage_icn": {
        "display": "block",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "massage_icn:before": {
        "fontSize": 124
    },
    "main_footer footer_bottom": {
        "height": 30,
        "width": "100%",
        "display": "block",
        "background": "#2f5775"
    },
    "main_footer footer_top": {
        "height": 30,
        "width": "100%",
        "display": "block",
        "background": "#1e4664"
    },
    "main_footer footer_top footer_menu": {
        "float": "left",
        "display": "block",
        "height": 30
    },
    "main_footer footer_top footer_menu a": {
        "float": "left",
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "textDecoration": "none",
        "color": "rgba(255, 255, 255, .7)",
        "fontSize": 13,
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important"
    },
    "main_footer footer_top footer_menu a:hover": {
        "color": "#fff"
    },
    "main_footer footer_top footer_menu a:not(:last-child)": {
        "borderRight": "1px solid rgba(255, 255, 255, .3)"
    },
    "main_footer footer_bottom resolution": {
        "height": 30
    },
    "main_footer footer_bottom footer_copy": {
        "float": "left",
        "height": "auto",
        "color": "rgba(255, 255, 255, .5)",
        "fontSize": 13
    },
    "main_footer footer_bottom footer_developed": {
        "float": "left",
        "height": "auto",
        "color": "rgba(255, 255, 255, .5)",
        "fontSize": 13
    },
    "btn_scrollup": {
        "position": "fixed",
        "right": 10,
        "bottom": 30
    },
    "btn_scrollup a": {
        "fontSize": 11,
        "display": "block",
        "width": "auto",
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "background": "#f39b12",
        "color": "#fff",
        "opacity": 0.95,
        "WebkitBorderRadius": 3,
        "MozBorderRadius": 3,
        "borderRadius": 3,
        "textDecoration": "none"
    },
    "btn_scrollup a:before": {
        "content": "\\f0d8",
        "fontFamily": "FontAwesome",
        "color": "#fff",
        "display": "block",
        "width": 10,
        "height": 10,
        "float": "right",
        "marginLeft": 4
    },
    "btn_scrollup a:hover": {
        "background": "#fff",
        "color": "#f39b12",
        "opacity": 1
    },
    "btn_scrollup a:hover:before": {
        "color": "#f39b12"
    },
    "footer_bottom_content": {
        "height": "auto"
    },
    "footer_bottom_content>*": {
        "marginTop": 0,
        "marginRight": 10,
        "marginBottom": 0,
        "marginLeft": 10
    },
    "evo_link": {
        "color": "#fff",
        "opacity": 0.7
    },
    "evo_link:after": {
        "content": "",
        "top": 3,
        "display": "inline-block",
        "width": 12,
        "height": 12,
        "background": "url(/img/evo_logo.png) 50% 50% no-repeat",
        "backgroundSize": "100%!important",
        "float": "right",
        "opacity": 0.6,
        "marginLeft": 3
    },
    "evo_link:hover": {
        "color": "#fff",
        "opacity": 1
    },
    "footer_soc_icns": {
        "display": "inline-block",
        "width": "auto",
        "height": 30,
        "float": "right",
        "paddingRight": 80
    },
    "footer_soc_icns a": {
        "width": 30,
        "height": 30,
        "display": "flex!important",
        "WebkitBoxPack": "center!important",
        "MsFlexPack": "center!important",
        "WebkitJustifyContent": "center!important",
        "justifyContent": "center!important",
        "WebkitBoxAlign": "center!important",
        "MsFlexAlign": "center!important",
        "WebkitAlignItems": "center!important",
        "alignItems": "center!important",
        "marginLeft": 15,
        "float": "left",
        "textDecoration": "none",
        "color": "rgba(255, 255, 255, .4)"
    },
    "footer_soc_icns a:before": {
        "fontSize": 22
    },
    "footer_soc_icns a:hover": {
        "color": "#fff"
    },
    "form_style_1 sup": {
        "fontSize": 16,
        "fontWeight": "300",
        "color": "#a5adb8",
        "height": "auto"
    },
    "form_footer": {
        "width": "100%",
        "display": "inline-block",
        "minHeight": 40
    },
    "form_footer_btn": {
        "display": "inline-block",
        "marginBottom": 15
    },
    "form_footer_info": {
        "marginBottom": 15
    },
    "form_footer_btns": {
        "display": "block",
        "width": "100%!important",
        "marginBottom": 15
    },
    "two_buttons>*": {
        "width": "50%!important",
        "float": "left"
    },
    "two_buttons>:first-child": {
        "paddingRight": 7
    },
    "two_buttons>:last-child": {
        "paddingLeft": 7
    },
    "two_buttons>*>*": {
        "width": "100%!important",
        "lineHeight": "normal!important",
        "maxHeight": 41,
        "whiteSpace": "normal",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 14,
        "paddingLeft": 10,
        "overflow": "hidden"
    },
    "page_not_found resolution": {
        "display": "block",
        "width": "100%",
        "height": "100%!important"
    },
    "err404": {
        "position": "absolute",
        "width": 200,
        "height": 200,
        "top": "45%",
        "left": "50%",
        "marginTop": -100,
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": -100,
        "textAlign": "center",
        "WebkitAnimation": "slowjump 2.8s infinite linear",
        "MozAnimation": "slowjump 2.8s infinite linear",
        "MsAnimation": "slowjump 2.8s infinite linear",
        "OAnimation": "slowjump 2.8s infinite linear",
        "animation": "slowjump 2.8s infinite linear"
    },
    "err404>:first-child": {
        "font": "800 54px/54px \"Exo 2\", Helvetica, Arial, sans-serif"
    },
    "slowjump": {
        "WebkitAnimation": "slowjump 2.8s infinite linear",
        "MozAnimation": "slowjump 2.8s infinite linear",
        "MsAnimation": "slowjump 2.8s infinite linear",
        "OAnimation": "slowjump 2.8s infinite linear",
        "animation": "slowjump 2.8s infinite linear"
    },
    "scrolly_box": {
        "display": "block",
        "overflow": "hidden",
        "overflowY": "auto",
        "height": "100%"
    },
    "ulsuccess li": {
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "border": "1px solid transparent",
        "borderRadius": 5,
        "listStyle": "none",
        "color": "#3c763d",
        "background": "#dff0d8",
        "borderColor": "#d6e9c6"
    },
    "ulinfo li": {
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "border": "1px solid transparent",
        "borderRadius": 5,
        "listStyle": "none",
        "color": "#31708f",
        "background": "#d9edf7",
        "borderColor": "#bce8f1"
    },
    "ulerror li": {
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "border": "1px solid transparent",
        "borderRadius": 5,
        "listStyle": "none",
        "color": "#3c763d",
        "background": "#dff0d8",
        "borderColor": "#d6e9c6"
    },
    "ulsuccess": {
        "WebkitAnimation": "seconds 1.0s forwards",
        "WebkitAnimationIterationCount": 1,
        "WebkitAnimationDelay": "10s",
        "animation": "seconds 1.0s forwards",
        "animationIterationCount": 1,
        "animationDelay": "10s"
    },
    "ulerror": {
        "WebkitAnimation": "seconds 1.0s forwards",
        "WebkitAnimationIterationCount": 1,
        "WebkitAnimationDelay": "10s",
        "animation": "seconds 1.0s forwards",
        "animationIterationCount": 1,
        "animationDelay": "10s"
    }
});