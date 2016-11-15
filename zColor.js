/**
 * Created by zhouzechen on 16/11/14.
 */


function zColor(value, opacity) {

    var me = this,
        results = {
            hex: null,
            rgb: null,
            rgba: null,
            hsl: null
        };
    var
        rawValue = value,
        rgbaValue = null,
        hslaValue = null;


    function checkRGB(v) {
        var rgex = /(rgb|RGB|rgba|RGBA)\(([0-9 ,\.]+)\)/, result;
        result = rgex.exec(v);
        if (!(result && result.length >= 3)) {
            return null;
        }
        result = result[2].split(',');
        var rgba = {
            r: result[0] && parseInt(result[0]),
            g: result[1] && parseInt(result[1]),
            b: result[2] && parseInt(result[2]),
            a: result[3] && parseFloat(result[3])
        };

        return rgba;
    }

    var nameColors = {
        "lightPink": "#FFB6C1",
        "pink": "#FFC0CB",
        "crimson": "#DC143C",
        "lavenderBlush": "#FFF0F5",
        "paleVioletRed": "#DB7093",
        "hotPink": "#FF69B4",
        "deepPink": "#FF1493",
        "mediumVioletRed": "#C71585",
        "orchid": "#DA70D6",
        "thistle": "#D8BFD8",
        "plum": "#DDA0DD",
        "violet": "#EE82EE",
        "magenta": "#FF00FF",
        "fuchsia": "#FF00FF",
        "darkMagenta": "#8B008B",
        "purple": "#800080",
        "mediumOrchid": "#BA55D3",
        "darkViolet": "#9400D3",
        "darkOrchid": "#9932CC",
        "indigo": "#4B0082",
        "blueViolet": "#8A2BE2",
        "mediumPurple": "#9370DB",
        "mediumSlateBlue": "#7B68EE",
        "slateBlue": "#6A5ACD",
        "darkSlateBlue": "#483D8B",
        "lavender": "#E6E6FA",
        "ghostWhite": "#F8F8FF",
        "blue": "#0000FF",
        "mediumBlue": "#0000CD",
        "midnightBlue": "#191970",
        "darkBlue": "#00008B",
        "navy": "#000080",
        "royalBlue": "#4169E1",
        "cornflowerBlue": "#6495ED",
        "lightSteelBlue": "#B0C4DE",
        "lightSlateGray": "#778899",
        "slateGray": "#708090",
        "dodgerBlue": "#1E90FF",
        "aliceBlue": "#F0F8FF",
        "steelBlue": "#4682B4",
        "lightSkyBlue": "#87CEFA",
        "skyBlue": "#87CEEB",
        "deepSkyBlue": "#00BFFF",
        "lightBlue": "#ADD8E6",
        "powderBlue": "#B0E0E6",
        "cadetBlue": "#5F9EA0",
        "azure": "#F0FFFF",
        "lightCyan": "#E0FFFF",
        "paleTurquoise": "#AFEEEE",
        "cyan": "#00FFFF",
        "aqua": "#00FFFF",
        "darkTurquoise": "#00CED1",
        "darkSlateGray": "#2F4F4F",
        "darkCyan": "#008B8B",
        "teal": "#008080",
        "mediumTurquoise": "#48D1CC",
        "lightSeaGreen": "#20B2AA",
        "turquoise": "#40E0D0",
        "aquamarine": "#7FFFD4",
        "mediumAquamarine": "#66CDAA",
        "mediumSpringGreen": "#00FA9A",
        "mintCream": "#F5FFFA",
        "springGreen": "#00FF7F",
        "mediumSeaGreen": "#3CB371",
        "seaGreen": "#2E8B57",
        "honeydew": "#F0FFF0",
        "lightGreen": "#90EE90",
        "paleGreen": "#98FB98",
        "darkSeaGreen": "#8FBC8F",
        "limeGreen": "#32CD32",
        "lime": "#00FF00",
        "forestGreen": "#228B22",
        "green": "#008000",
        "darkGreen": "#006400",
        "chartreuse": "#7FFF00",
        "lawnGreen": "#7CFC00",
        "greenYellow": "#ADFF2F",
        "darkOliveGreen": "#556B2F",
        "yellowGreen": "#9ACD32",
        "oliveDrab": "#6B8E23",
        "beige": "#F5F5DC",
        "lightGoldenrodYellow": "#FAFAD2",
        "ivory": "#FFFFF0",
        "lightYellow": "#FFFFE0",
        "yellow": "#FFFF00",
        "olive": "#808000",
        "darkKhaki": "#BDB76B",
        "lemonChiffon": "#FFFACD",
        "paleGoldenrod": "#EEE8AA",
        "khaki": "#F0E68C",
        "gold": "#FFD700",
        "cornsilk": "#FFF8DC",
        "goldenrod": "#DAA520",
        "darkGoldenrod": "#B8860B",
        "floralWhite": "#FFFAF0",
        "oldLace": "#FDF5E6",
        "wheat": "#F5DEB3",
        "moccasin": "#FFE4B5",
        "orange": "#FFA500",
        "papayaWhip": "#FFEFD5",
        "blanchedAlmond": "#FFEBCD",
        "navajoWhite": "#FFDEAD",
        "antiqueWhite": "#FAEBD7",
        "tan": "#D2B48C",
        "burlyWood": "#DEB887",
        "bisque": "#FFE4C4",
        "darkOrange": "#FF8C00",
        "linen": "#FAF0E6",
        "peru": "#CD853F",
        "peachPuff": "#FFDAB9",
        "sandyBrown": "#F4A460",
        "chocolate": "#D2691E",
        "saddleBrown": "#8B4513",
        "seashell": "#FFF5EE",
        "sienna": "#A0522D",
        "lightSalmon": "#FFA07A",
        "coral": "#FF7F50",
        "orangeRed": "#FF4500",
        "darkSalmon": "#E9967A",
        "tomato": "#FF6347",
        "mistyRose": "#FFE4E1",
        "salmon": "#FA8072",
        "snow": "#FFFAFA",
        "lightCoral": "#F08080",
        "rosyBrown": "#BC8F8F",
        "indianRed": "#CD5C5C",
        "red": "#FF0000",
        "brown": "#A52A2A",
        "fireBrick": "#B22222",
        "darkRed": "#8B0000",
        "maroon": "#800000",
        "white": "#FFFFFF",
        "whiteSmoke": "#F5F5F5",
        "gainsboro": "#DCDCDC",
        "lightGrey": "#D3D3D3",
        "silver": "#C0C0C0",
        "darkGray": "#A9A9A9",
        "gray": "#808080",
        "dimGray": "#696969",
        "black": "#000000",
        "浅粉红": "#FFB6C1",
        "粉红": "#FFC0CB",
        "深红": "#DC143C",
        "猩红": "#DC143C",
        "淡紫红": "#FFF0F5",
        "弱紫罗兰红": "#DB7093",
        "热情的粉红": "#FF69B4",
        "深粉红": "#FF1493",
        "中紫罗兰红": "#C71585",
        "暗紫色": "#DA70D6",
        "兰花紫": "#DA70D6",
        "蓟色": "#D8BFD8",
        "洋李色(李子紫)": "#DDA0DD",
        "紫罗兰": "#EE82EE",
        "洋红(玫瑰红)": "#FF00FF",
        "紫红(灯笼海棠)": "#FF00FF",
        "深洋红": "#8B008B",
        "紫色": "#800080",
        "中兰花紫": "#BA55D3",
        "暗紫罗兰": "#9400D3",
        "暗兰花紫": "#9932CC",
        "靛青/紫兰色": "#4B0082",
        "蓝紫罗兰": "#8A2BE2",
        "中紫色": "#9370DB",
        "中暗蓝色": "#7B68EE",
        "中板岩蓝": "#7B68EE",
        "石蓝色": "#6A5ACD",
        "板岩蓝": "#6A5ACD",
        "暗灰蓝色": "#483D8B",
        "暗板岩蓝": "#483D8B",
        "淡紫色": "#E6E6FA",
        "熏衣草淡紫": "#E6E6FA",
        "幽灵白": "#F8F8FF",
        "纯蓝": "#0000FF",
        "中蓝色": "#0000CD",
        "午夜蓝": "#191970",
        "暗蓝色": "#00008B",
        "海军蓝": "#000080",
        "皇家蓝": "#4169E1",
        "宝蓝": "#4169E1",
        "矢车菊蓝": "#6495ED",
        "亮钢蓝": "#B0C4DE",
        "亮蓝灰": "#778899",
        "亮石板灰": "#778899",
        "灰石色": "#708090",
        "石板灰": "#708090",
        "闪兰色": "#1E90FF",
        "道奇蓝": "#1E90FF",
        "爱丽丝蓝": "#F0F8FF",
        "钢蓝": "#4682B4",
        "铁青": "#4682B4",
        "亮天蓝色": "#87CEFA",
        "天蓝色": "#87CEEB",
        "深天蓝": "#00BFFF",
        "亮蓝": "#ADD8E6",
        "粉蓝色": "#B0E0E6",
        "火药青": "#B0E0E6",
        "军兰色": "#5F9EA0",
        "军服蓝": "#5F9EA0",
        "蔚蓝色": "#F0FFFF",
        "淡青色": "#E0FFFF",
        "弱绿宝石": "#AFEEEE",
        "青色": "#00FFFF",
        "浅绿色": "#00FFFF",
        "水色": "#00FFFF",
        "暗绿宝石": "#00CED1",
        "暗瓦灰色": "#2F4F4F",
        "暗石板灰": "#2F4F4F",
        "暗青色": "#008B8B",
        "水鸭色": "#008080",
        "中绿宝石": "#48D1CC",
        "浅海洋绿": "#20B2AA",
        "绿宝石": "#40E0D0",
        "宝石碧绿": "#7FFFD4",
        "中宝石碧绿": "#66CDAA",
        "中春绿色": "#00FA9A",
        "薄荷奶油": "#F5FFFA",
        "春绿色": "#00FF7F",
        "中海洋绿": "#3CB371",
        "海洋绿": "#2E8B57",
        "蜜色": "#F0FFF0",
        "蜜瓜色": "#F0FFF0",
        "淡绿色": "#90EE90",
        "弱绿色": "#98FB98",
        "暗海洋绿": "#8FBC8F",
        "闪光深绿": "#32CD32",
        "闪光绿": "#00FF00",
        "森林绿": "#228B22",
        "纯绿": "#008000",
        "暗绿色": "#006400",
        "查特酒绿": "#7FFF00",
        "草绿色": "#7CFC00",
        "草坪绿": "#7CFC00",
        "绿黄色": "#ADFF2F",
        "暗橄榄绿": "#556B2F",
        "黄绿色": "#9ACD32",
        "橄榄褐色": "#6B8E23",
        "米色": "#F5F5DC",
        "灰棕色": "#F5F5DC",
        "亮菊黄": "#FAFAD2",
        "象牙色": "#FFFFF0",
        "浅黄色": "#FFFFE0",
        "纯黄": "#FFFF00",
        "黄色": "#FFFF00",
        "橄榄": "#808000",
        "暗黄褐色": "#BDB76B",
        "深卡叽布": "#BDB76B",
        "柠檬绸": "#FFFACD",
        "灰菊黄": "#EEE8AA",
        "苍麒麟色": "#EEE8AA",
        "黄褐色": "#F0E68C",
        "卡叽布": "#F0E68C",
        "金色": "#FFD700",
        "玉米丝色": "#FFF8DC",
        "金菊黄": "#DAA520",
        "暗金菊黄": "#B8860B",
        "花的白色": "#FFFAF0",
        "老花色": "#FDF5E6",
        "旧蕾丝": "#FDF5E6",
        "小麦色": "#F5DEB3",
        "鹿皮色": "#FFE4B5",
        "鹿皮靴": "#FFE4B5",
        "橙色": "#FFA500",
        "番木瓜": "#FFEFD5",
        "白杏色": "#FFEBCD",
        "纳瓦白": "#FFDEAD",
        "土著白": "#FFDEAD",
        "古董白": "#FAEBD7",
        "茶色": "#D2B48C",
        "硬木色": "#DEB887",
        "陶坯黄": "#FFE4C4",
        "深橙色": "#FF8C00",
        "亚麻布": "#FAF0E6",
        "秘鲁色": "#CD853F",
        "桃肉色": "#FFDAB9",
        "沙棕色": "#F4A460",
        "巧克力色": "#D2691E",
        "重褐色": "#8B4513",
        "马鞍棕色": "#8B4513",
        "海贝壳": "#FFF5EE",
        "黄土赭色": "#A0522D",
        "浅鲑鱼肉色": "#FFA07A",
        "珊瑚": "#FF7F50",
        "橙红色": "#FF4500",
        "深鲜肉": "#E9967A",
        "番茄红": "#FF6347",
        "浅玫瑰色": "#FFE4E1",
        "薄雾玫瑰": "#FFE4E1",
        "鲜肉": "#FA8072",
        "雪白色": "#FFFAFA",
        "淡珊瑚色": "#F08080",
        "玫瑰棕色": "#BC8F8F",
        "印度红": "#CD5C5C",
        "纯红": "#FF0000",
        "红色": "#FF0000",
        "棕色": "#A52A2A",
        "火砖色": "#B22222",
        "耐火砖": "#B22222",
        "深红色": "#8B0000",
        "栗色": "#800000",
        "纯白": "#FFFFFF",
        "白色": "#FFFFFF",
        "白烟": "#F5F5F5",
        "淡灰色": "#DCDCDC",
        "庚斯博罗灰": "#DCDCDC",
        "浅灰色": "#D3D3D3",
        "银灰色": "#C0C0C0",
        "深灰色": "#A9A9A9",
        "灰色": "#808080",
        "暗淡的灰色": "#696969",
        "黑色": "#000000",
        "纯黑": "#000000"
    };

    var colorKeys = Object.keys(nameColors);

    function checkColorName(v) {

        if (colorKeys.indexOf(v)) {
            return checkHEX(nameColors[v]);
        }

        if (v.indexOf('色') != -1) {
            v = v.replace('色', '');
            if (colorKeys.indexOf(v)) {
                return checkHEX(nameColors[v]);
            }
        } else {
            if (colorKeys.indexOf(v + '色')) {
                return checkHEX(nameColors[v + '色']);
            }
        }


    }

    function checkHEX(v) {
        var rgex = /#([0-9a-zA-Z]{3,8})/, result;
        result = rgex.exec(v);
        if (!(result && result.length >= 2)) {
            return null;
        }
        result = result[1].split('');
        var rgba;

        if (result.length < 6) {
            rgba = {
                r: parseInt(result[0] + result[0], 16),
                g: parseInt(result[1] + result[1], 16),
                b: parseInt(result[2] + result[2], 16),
                a: 1
            };
        } else if (result.length == 6) {
            rgba = {
                r: parseInt(result[0] + result[1], 16),
                g: parseInt(result[2] + result[3], 16),
                b: parseInt(result[4] + result[5], 16),
                a: 1
            };

        } else {
            rgba = {
                a: parseInt(result[0] + result[1], 16) / 255,
                r: parseInt(result[2] + result[3], 16),
                g: parseInt(result[4] + result[5], 16),
                b: parseInt(result[6] + (result[7] || ''), 16)
            };

            rgba.a = Math.round(rgba.a * 10) / 10
        }

        return rgba;

    }

    function checkHSL(v) {
        var rgex = /(hsl|HSL|hsla|HSLA)\(([0-9 ,\.%]+)\)/, result;
        result = rgex.exec(v);
        if (!(result && result.length >= 2)) {
            return null;
        }
        result = result[2].split(',');
        var hsla = {
            h: result[0] && (parseFloat(result[0]) / 360),
            s: result[1] && (parseFloat(result[1]) / 100),
            l: result[2] && (parseFloat(result[2]) / 100),
            a: (result[3] && parseFloat(result[3])) || 1
        };

        return hsla;
    }

    function rgba2hlsa(rgba) {
        var r = rgba.r / 255, g = rgba.g / 255, b = rgba.b / 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;

        if (max == min) {
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }

        return {
            h: h,
            s: s,
            l: l,
            a: rgba.a
        };
    }

    function hlsa2rgba(hlsa) {
        var r, g, b, h = hlsa.h, l = hlsa.l, s = hlsa.s;

        if (s == 0) {
            r = g = b = l; // achromatic
        } else {
            function hue2rgb(p, q, t) {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            }

            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        return {
            r: Math.round(r * 255),
            g: Math.round(g * 255),
            b: Math.round(b * 255),
            a: hlsa.a
        };
    }

    function num2hex(n) {
        var s = n.toString(16);
        if (s.length == 1) {
            s = '0' + s;
        }
        return s;
    }

    function rgba2hexStr(rgba) {
        return [
            '#',
            //(rgba.a == 1 ? '' : num2hex(Math.round(rgba.a * 255))) + num2hex(rgba.r),
            num2hex(rgba.r),
            num2hex(rgba.g),
            num2hex(rgba.b)
        ].join('');
    }

    function rgba2rgbStr(rgba) {
        return 'rgb(' + [rgba.r, rgba.g, rgba.b].join(',') + ')';
    }

    function rgba2rgbaStr(rgba) {
        return 'rgba(' + [rgba.r, rgba.g, rgba.b, rgba.a].join(',') + ')';
    }

    function hsla2hslStr(hsla) {
        return 'hsl(' + [hsla.h * 360, hsla.s * 100 + '%', hsla.l * 100 + '%'].join(',') + ')';
    }

    function hsla2hslaStr(hsla) {
        return 'hsla(' + [hsla.h * 360, hsla.s * 100 + '%', hsla.l * 100 + '%', hsla.a].join(',') + ')';
    }


    var apis = {

        update: function (c, opacity) {
            updateColor(c, opacity);
            return me;
        },
        raw: function () {
            return rawValue;
        },
        hex: function () {
            if (!results.hex) {
                if (rgbaValue) {
                    return results.hex = rgba2hexStr(rgbaValue);
                } else if (hslaValue) {
                    rgbaValue = hlsa2rgba(hslaValue);
                    return results.hex = rgba2hexStr(rgbaValue);
                }
            }
            return results.hex;
        },
        rgb: function () {
            if (!results.rgb) {
                if (rgbaValue) {
                    return results.rgb = rgba2rgbStr(rgbaValue);
                } else if (hslaValue) {
                    rgbaValue = hlsa2rgba(hslaValue);
                    return results.rgb = rgba2rgbStr(rgbaValue);
                }
                return null;
            }
            return results.rgb;
        },
        rgba: function () {
            if (!results.rgba) {
                if (rgbaValue) {
                    return results.rgba = rgba2rgbaStr(rgbaValue);
                } else if (hslaValue) {
                    rgbaValue = hlsa2rgba(hslaValue);
                    return results.rgba = rgba2rgbaStr(rgbaValue);
                }
                return null;
            }
            return results.rgba;
        },
        hsl: function () {
            if (!results.hsl) {
                if (hslaValue) {
                    return results.hsl = hsla2hslStr(hslaValue);
                } else if (rgbaValue) {
                    hslaValue = rgba2hlsa(rgbaValue);
                    return results.hsl = hsla2hslStr(hslaValue);
                }
                return null;
            }
            return results.hsl;
        },
        hsla: function () {
            if (!results.hsla) {
                if (hslaValue) {
                    return results.hsla = hsla2hslaStr(hslaValue);
                } else if (rgbaValue) {
                    hslaValue = rgba2hlsa(rgbaValue);
                    return results.hsla = hsla2hslaStr(hslaValue);
                }
                return null;
            }
            return results.hsla;
        }

    };

    function updateColor(c, op) {
        rawValue = c;
        results = {
            hex: null,
            rgb: null,
            rgba: null,
            hsl: null
        };
        rgbaValue = null;
        hslaValue = null;
        if (typeof  c == 'string') {
            var v;
            if (v = checkRGB(c)) {
                rgbaValue = v;
            } else if (v = checkHEX(c)) {
                rgbaValue = v;
            } else if (v = checkColorName(c)) {
                rgbaValue = v;
            } else if (v = checkHSL(c)) {
                hslaValue = v;
            }
            if (typeof  op == 'number') {
                (rgbaValue || hslaValue || {} ).a = op;
            }
        }
    }

    function init() {

        updateColor(value, opacity);

        for (var k in apis) {
            if (apis.hasOwnProperty(k))
                me[k] = apis[k];
        }
    }

    init();


    return me;

}
