/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/faec96df33aff693cf107dedc10ea84d", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    var api = __webpack_require__(1);
	    __weex_module__.exports = {
	        data: function () {return {
	            dir:api.dir,
	            biaoyang: true,
	            pos: "",
	            name: "张鸿飞",
	            zhicheng: "高级服务顾问",
	            tel: "154612153",
	        }},
	        methods: {
	            guanbi: function (e) {
	                this.$dispatch('notify', {"pos": "pos1"})
	            },
	            quanclick: function (e) {
	                this.$dispatch('notify', {"pos": "pos1"})
	            },
	            zhifuclick: function (e) {

	            },
	            boda: function (e) {

	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "quan"
	  ],
	  "shown": function () {return this.biaoyang},
	  "events": {
	    "click": "quanclick"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "box"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "zhifu"
	          ],
	          "events": {
	            "click": "zhifuclick"
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "car"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "info"
	                  ],
	                  "children": [
	                    {
	                      "type": "image",
	                      "classList": [
	                        "carpic"
	                      ],
	                      "attr": {
	                        "src": function () {return (this.dir) + 'images/zhuanjia.jpg'}
	                      }
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "txt"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "car-txt1"
	                          ],
	                          "attr": {
	                            "value": function () {return this.name}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "car-txt2"
	                          ],
	                          "attr": {
	                            "value": function () {return '职称：' + (this.zhicheng)}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "car-txt2"
	                          ],
	                          "attr": {
	                            "value": function () {return '电话：' + (this.tel)}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "boda"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "by-txt",
	                        "red"
	                      ],
	                      "attr": {
	                        "value": "表扬TA"
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "by-txt",
	                        "hui"
	                      ],
	                      "attr": {
	                        "value": "投诉TA"
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "style": {
	            "flexDirection": "row"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "zhifu-txt",
	                "btn",
	                "border",
	                "red"
	              ],
	              "events": {
	                "click": "boda"
	              },
	              "attr": {
	                "value": "拨打"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "zhifu-txt",
	                "btn"
	              ],
	              "events": {
	                "click": "guanbi"
	              },
	              "attr": {
	                "value": "关闭"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "quan": {
	    "flex": 1,
	    "backgroundColor": "rgba(0,0,0,0.4)"
	  },
	  "box": {
	    "width": 607,
	    "marginRight": 70,
	    "marginLeft": 70,
	    "backgroundColor": "#ffffff",
	    "borderRadius": 10,
	    "position": "absolute",
	    "bottom": 400
	  },
	  "zhifu": {
	    "flexDirection": "row",
	    "paddingTop": 10,
	    "paddingBottom": 10,
	    "borderBottomWidth": 2,
	    "borderColor": "#cccccc"
	  },
	  "zhifu-txt": {
	    "flex": 1,
	    "textAlign": "center",
	    "fontSize": 30,
	    "color": "#373634"
	  },
	  "btn": {
	    "paddingTop": 20,
	    "paddingBottom": 20
	  },
	  "border": {
	    "borderRightWidth": 3,
	    "borderColor": "#e6e6e6"
	  },
	  "car": {
	    "width": 607,
	    "flexDirection": "row",
	    "justifyContent": "space-between"
	  },
	  "info": {
	    "flexDirection": "row",
	    "padding": 30,
	    "paddingRight": 0
	  },
	  "carpic": {
	    "width": 130,
	    "height": 160
	  },
	  "txt": {
	    "marginLeft": 20,
	    "marginTop": 30
	  },
	  "car-txt1": {
	    "fontSize": 36,
	    "color": "#373634"
	  },
	  "car-txt2": {
	    "fontSize": 28,
	    "color": "#a0a0a0",
	    "marginTop": 5
	  },
	  "red": {
	    "color": "#E95412"
	  },
	  "by-txt": {
	    "paddingTop": 5,
	    "paddingBottom": 5,
	    "paddingLeft": 10,
	    "paddingRight": 10,
	    "fontSize": 28,
	    "borderWidth": 2,
	    "borderColor": "#E95412"
	  },
	  "hui": {
	    "color": "#737373",
	    "borderWidth": 2,
	    "borderColor": "#737373",
	    "marginTop": 20
	  },
	  "boda": {
	    "marginRight": 20,
	    "marginTop": 60
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/faec96df33aff693cf107dedc10ea84d", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/api", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    //     var API_URL = "http://192.168.0.155:8080/IkkyuChegj/";    //小安
	         var API_URL = "http://192.168.0.160:8080/IkkyuChegj/";    //冯浩
	//    var API_URL = "http://192.168.0.172:8080/IkkyuChegj/";   //小黄
	//        var API_URL = "http://www.yixiucar.com/yxapi/";       //郭总
	    var SERVER_URL = "http://192.168.0.221:63344/2016-2/yonghuban/";
	//        var SERVER_URL = "http://192.168.0.221:63344/2016-2/shangjiaban/";
	//        	var SERVER_URL = "http://192.168.0.221:63344/2016-2/sijiban/";
	//        var SERVER_URL = "http://www.yixiucar.com/app/user/";      //郭总
	//        var SERVER_URL = "http://www.yixiucar.com/app/fac/";      //郭总
	//        var SERVER_URL = "http://www.yixiucar.com/app/dirver/";      //郭总
	//       	var SERVER_URL = "http://192.168.1.111:8000/";

	    var isdug = false;
	//        var isdug = true;
	    var isweb = isweb || false;
	    exports.dir = SERVER_URL;
	    exports.dir2 = API_URL;


	    function post(method, parms, callback) {
	        console.log("POST_DATA:" + API_URL + method, JSON.stringify(parms));
	        __weex_require__('@weex-module/stream').fetch({
	            method: 'POST',
	            url: API_URL + method,
	            type: 'json',
	            body: "req=" + JSON.stringify(parms)
	        }, function (e) {
	//            console.log("POSt_CALLBACK:", e.data);
	            callback(e);
	        }, function (e) {
	           // console.log("POSt_ERROR:", e);
	        });
	    }

	    function pushUrl(url) {
	        __weex_require__('@weex-module/navigator').push({
	            'url': url,
	            'animated': 'true',
	        }, function (e) {
	            //callback
	        });
	    }

	    exports.gotoLogin = function () {
	        this.push("denglu.js");
	    }

	    exports.call = function (method, parms, callback, errorCallback) {
	        var self = this;
	        parms = parms || {};
	        self.get("token", function (e) {
	            parms.token = e.data;
	            self.get("lnglat", function (e) {
	                if (e.data && e.data != "undefined") {
	//                    parms.longitude = JSON.parse(e.data).lon || "120.636143";
	//                    parms.latitude = JSON.parse(e.data).lat || "31.320623";
	//                    parms.city = JSON.parse(e.data).city || "苏州市";
	//                    parms.province = JSON.parse(e.data).province || "江苏省";
	                    parms.longitude = JSON.parse(e.data).lon || "120.636143";
	                    parms.latitude = JSON.parse(e.data).lat || "31.320623";
	                    parms.city = "苏州市";
	                    parms.province = "江苏省";
	                }

	                post(method, parms, function (r) {
	                    if (!r || !r.data) {
	//                        self.tost(method+"网络错误");
	                        if (errorCallback)
	                            errorCallback(r);
	                    } else {
	                        if (r.data.requestCode == 5) {
	                            self.del("token");
	                            self.push("denglu.js");
	                            self.tost(r.data.message);
	                        } else if (r.data.requestCode == 0) {
	                            callback(r);
	                        } else {
	                            self.tost(r.data.message);
	                        }
	                    }
	                });
	            });
	        });
	    }

	    exports.save = function (key, value) {
	        //        this.log(key + "," + value);\
	        if (isweb) {
	            value = JSON.stringify(value);
	        }
	        __weex_require__('@weex-module/storage').setItem(key, value, function (e) {
	        });
	    }

	    exports.get = function (key, callback) {
	        __weex_require__('@weex-module/storage').getItem(key, function (e) {
	            callback(e);
	        });
	    }

	    exports.del = function (key, callback) {
	        __weex_require__('@weex-module/storage').removeItem(key, function (e) {

	        });
	    }

	    exports.log = function (log) {
	        if (isdug) {
	            __weex_require__('@weex-module/modal').toast({
	                message: log,
	                duration: 12
	            });
	        }
	    }
	    exports.alert = function (options, callback) {
	        __weex_require__('@weex-module/modal').alert(options, callback);
	    }

	    exports.tost = function (log) {
	        __weex_require__('@weex-module/modal').toast({
	            message: log,
	            duration: 12
	        });
	    }

	    exports.getData = function (page, key) {
	        key = key || "data";
	        var value = page.$getConfig()[key];
	        if (isweb) {
	            value = getQueryString("data");
	        }
	        if (value)
	            return JSON.parse(value);
	        else
	            return {};
	    }

	    exports.push = function (url, data, callback) {
	        if (!url) {
	            //            this.log("URL NULL ERROR");
	            return;
	        }
	        var tmp = {};
	        tmp.url = url.indexOf("http://") != -1 ? url : SERVER_URL + url;
	        if (isweb) {
	            tmp.url = url.indexOf("http://") != -1 ? url : SERVER_URL + '?page=' + url;
	        }
	        tmp.animated = "true";
	        if (data) {
	            tmp.data = JSON.stringify(data);
	            if (isweb) {
	                tmp.url += "&data=" + encodeURI(JSON.stringify(data));
	            }
	            if (data.finish) {
	                tmp.finish = true;
	            }
	            if (data.page) {
	                tmp.page = data.page;
	            }
	        }

	        __weex_require__('@weex-module/navigator').push(tmp, function (e) {
	            if (callback)
	                callback(e);
	        });
	    }
	    exports.pop = function (data) {
	        __weex_require__('@weex-module/navigator').pop(data||{}, function (e) {});
	    }
	    exports.refresh = function () {
	        __weex_require__('@weex-module/navigator').refresh();
	    }
	    exports.loading = function () {
	        __weex_require__('@weex-module/dialog').progress();
	    }
	    exports.hidden = function (data) {
	        __weex_require__('@weex-module/dialog').hide(data||{});
	    }
	    exports.dialog = function (url,data,callback) {
	        __weex_require__('@weex-module/dialog').show(url,data||{},callback);
	    }
	    exports.hxlogin = function (username) {     /* YX_id*/
	        var chat=__weex_require__('@weex-module/chat');
	        if(chat)
	            chat.login(username,"123456");
	    }
	    exports.hxlogout = function () {
	        var chat=__weex_require__('@weex-module/chat');
	        if(chat)
	            chat.logout();
	    }
	    exports.hxchat = function (user) {
	        var chat=__weex_require__('@weex-module/chat');
	        if(chat)
	            chat.chat(user);
	    }
	    exports.bing = function (str,callback) {
	        __weex_require__('@weex-module/alipush').bind("",callback);
	    }
	    exports.unbind = function (callback) {
	        __weex_require__('@weex-module/alipush').unbind(callback);
	    }

	})

/***/ }
/******/ ]);