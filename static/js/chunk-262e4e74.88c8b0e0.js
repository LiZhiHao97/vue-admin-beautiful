/*!
 *  build: vue-admin-beautiful 
 *  copyright: chuzhixin 1204505056@qq.com 
 *  time: 2020-11-7 08:13:44
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-262e4e74"],{"18fc":function(s,a,t){"use strict";t.r(a);var e=function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"lodash-container"},[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:24}},[t("el-card",{attrs:{shadow:"hover"}},[t("el-link",{attrs:{type:"primary",href:"https://www.lodashjs.com/",target:"_blank"}},[s._v(" lodashjs官网 ")])],1)],1),t("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:6}},[t("el-card",{attrs:{shadow:"hover"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[s._v("去除数组array中的最后一个元素")])]),t("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.initial([1, 2, 3]) "),t("br"),s._v(" // => [1, 2] ")])])],1),t("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:6}},[t("el-card",{attrs:{shadow:"hover"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[s._v("返回数组 array的第一个元素")])]),t("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.head([1, 2, 3]) "),t("br"),s._v(" // => 1 ")])])],1),t("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:6}},[t("el-card",{attrs:{shadow:"hover"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[s._v("合并数组")])]),t("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.concat([1],[2]) "),t("br"),s._v(" // => [1,2] ")])])],1),t("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:6}},[t("el-card",{attrs:{shadow:"hover"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[s._v("左切片")])]),t("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.drop([1, 2, 3],2切除的数量) "),t("br"),s._v(" // => [3] ")])])],1),t("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:6}},[t("el-card",{attrs:{shadow:"hover"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[s._v("右切片")])]),t("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.dropRight([1, 2, 3],2切除的数量) "),t("br"),s._v(" // => [1] ")])])],1),t("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:6}},[t("el-card",{attrs:{shadow:"hover"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[s._v("修改拼接")])]),t("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.join(['a', 'b', 'c'], '~'); "),t("br"),s._v(" // => 'a~b~c' ")])])],1),t("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:6}},[t("el-card",{attrs:{shadow:"hover"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[s._v("获取数组最后一个元素")])]),t("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.last(['a', 'b', 'c']); "),t("br"),s._v(" // => 'c' ")])])],1),t("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:6}},[t("el-card",{attrs:{shadow:"hover"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[s._v("数组去重")])]),t("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.uniq(['a', 'b', 'a']); "),t("br"),s._v(" // => ['a','b'] ")])])],1),t("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:6}},[t("el-card",{attrs:{shadow:"hover"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[s._v("获取数组的最大值")])]),t("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.max([4, 2, 8, 6]) "),t("br"),s._v(" // => 8 ")])])],1),t("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:6}},[t("el-card",{attrs:{shadow:"hover"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[s._v("获取数组的最小值")])]),t("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.min([4, 2, 8, 6]) "),t("br"),s._v(" // => 2 ")])])],1),t("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:6}},[t("el-card",{attrs:{shadow:"hover"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[s._v("四舍五入(保留任意位小数)")])]),t("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.round(4.006,2保持几位小数) "),t("br"),s._v(" // => 4.01 ")])])],1),t("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:6}},[t("el-card",{attrs:{shadow:"hover"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[s._v("数组内数据相加")])]),t("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.sum([4, 2, 8, 6]) "),t("br"),s._v(" // => 20 ")])])],1),t("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:6}},[t("el-card",{attrs:{shadow:"hover"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[s._v("返回随机数")])]),t("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.random(0, 5) "),t("br"),s._v(" // => 0到5任意数 ")])])],1),t("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:6}},[t("el-card",{attrs:{shadow:"hover"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[s._v("返回数组内的随机数")])]),t("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.sample([1, 2, 3, 4]) "),t("br"),s._v(" // => 数组1到4任意数 ")])])],1),t("el-col",{attrs:{xs:24,sm:24,md:12,lg:8,xl:6}},[t("el-card",{attrs:{shadow:"hover"}},[t("div",{attrs:{slot:"header"},slot:"header"},[t("span",[s._v("事件防抖动")])]),t("div",{staticClass:"lodash-content"},[s._v(" this.$baseLodash.debounce(@click的事件,延迟的毫秒数) "),t("br"),s._v(" // => 点击后多久不可以点击 ")])])],1)],1)],1)},d=[],l={name:"Lodash",data:function(){return{}},created:function(){},mounted:function(){},methods:{}},r=l,o=(t("ca54"),t("2877")),h=Object(o["a"])(r,e,d,!1,null,"761d7ea6",null);a["default"]=h.exports},ca54:function(s,a,t){"use strict";var e=t("cdf1"),d=t.n(e);d.a},cdf1:function(s,a,t){}}]);