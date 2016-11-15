# zColor


> 只需添加一行js脚本就解析多种web色值 

## 示例代码

~~~ javascript
zColor("red").hex(); //#ff0000
zColor("red").rgb(); //rgb(255,0,0)
zColor("red").hsl(); //hsl(0,100%,50%)
~~~

## 参数
~~~ javascript
/**
 * 
 * @param colorValue 
 * @param opacity 
 * @returns {zColor}
 */
function zColor(colorValue, opacity) {
//....
}
~~~

+ colorValue
 - 颜色值，有四种格式
 1. 颜色名称 ，例如：red、红色
 2. 十六进制，例如：#f00
 3. rgb值，例如：rgb(255,0,0)、rgba(255,0,0,0.8)
 4. hsl值，例如：hsl(0,100%,50%)、hsla(0,100%,50%,0.8)
 
+ opacity
 －透明度 0～1之间
 
## 方法

+ update(colorValue,opacity)
 - 更改颜色设置，参数同上节说明
 
+ hex()
 -返回十六进制颜色值
 
+ rgb()
 - 返回rgb颜色值

+ rgba()
 - 返回rgba颜色值

+ hsl()
 - 返回hsl颜色值
 
+ hsla()
 - 返回hsla颜色值
 
+ raw()
 - 返回原始颜色值，设置的时候传入的值
 
 






 
 
