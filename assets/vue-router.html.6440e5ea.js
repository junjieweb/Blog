import{_ as a,d as n}from"./app.9e56f95d.js";const s={},e=n(`<h1 id="\u4E94\u3001router" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001router" aria-hidden="true">#</a> \u4E94\u3001router</h1><h2 id="_001-\u5BF9\u524D\u7AEF\u8DEF\u7531\u7684\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#_001-\u5BF9\u524D\u7AEF\u8DEF\u7531\u7684\u7406\u89E3" aria-hidden="true">#</a> 001 - \u5BF9\u524D\u7AEF\u8DEF\u7531\u7684\u7406\u89E3</h2><ul><li><p>\u8DEF\u7531</p><ul><li>\u8DEF\u7531\u662Furl\u5230\u51FD\u6570\u7684\u6620\u5C04\uFF0C\u53EF\u4EE5\u6839\u636E\u4E0D\u540C\u7684url\u5730\u5740\u5C55\u793A\u4E0D\u540C\u7684\u5185\u5BB9\u6216\u9875\u9762\u3002</li></ul></li><li><p>\u670D\u52A1\u5668\u7AEF\u8DEF\u7531\uFF08\u540E\u7AEF\u8DEF\u7531\uFF09</p><ul><li>\u5BF9\u4E8E\u670D\u52A1\u5668\u6765\u8BF4\uFF0C\u5F53\u63A5\u6536\u5230\u5BA2\u6237\u7AEF\u53D1\u6765\u7684HTTP\u8BF7\u6C42\uFF0C\u4F1A\u6839\u636E\u8BF7\u6C42\u7684URL\uFF0C\u6765\u627E\u5230\u76F8\u5E94\u7684\u6620\u5C04\u51FD\u6570\uFF0C\u7136\u540E\u6267\u884C\u8BE5\u51FD\u6570\uFF0C\u5E76\u5C06\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u3002</li></ul></li><li><p>\u5BA2\u6237\u7AEF\u8DEF\u7531\uFF08\u524D\u7AEF\u8DEF\u7531\uFF09</p><ul><li><p>\u65E9\u671F\u7684\u8DEF\u7531\u90FD\u662F\u540E\u7AEF\u5B9E\u73B0\u7684\uFF0C\u76F4\u63A5\u6839\u636E url \u6765 reload \u9875\u9762\uFF0C\u9875\u9762\u53D8\u5F97\u8D8A\u6765\u8D8A\u590D\u6742\u670D\u52A1\u5668\u7AEF\u538B\u529B\u53D8\u5927\uFF0C\u968F\u7740 ajax \u7684\u51FA\u73B0\uFF0C\u9875\u9762\u5B9E\u73B0\u975E reload \u5C31\u80FD\u5237\u65B0\u6570\u636E\uFF0C\u66F4\u65B0\u9875\u9762\u5185\u5BB9\uFF0C\u4F7F\u5185\u5BB9\u7684\u5207\u6362\u66F4\u52A0\u6D41\u7545\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BB0\u5F55 url \u6765\u8BB0\u5F55 ajax \u7684\u53D8\u5316\uFF0C\u4ECE\u800C\u5B9E\u73B0\u524D\u7AEF\u8DEF\u7531\u3002\u5BF9\u4E8E\u5BA2\u6237\u7AEF\uFF08\u901A\u5E38\u4E3A\u6D4F\u89C8\u5668\uFF09\u6765\u8BF4\uFF0C\u8DEF\u7531\u7684\u6620\u5C04\u51FD\u6570\u901A\u5E38\u662F\u8FDB\u884C\u4E00\u4E9BDOM\u7684\u663E\u793A\u548C\u9690\u85CF\u64CD\u4F5C\u3002\u8FD9\u6837\uFF0C\u5F53\u8BBF\u95EE\u4E0D\u540C\u7684\u8DEF\u5F84\u7684\u65F6\u5019\uFF0C\u4F1A\u663E\u793A\u4E0D\u540C\u7684\u9875\u9762\u7EC4\u4EF6\u3002</p><ul><li>\u524D\u7AEF\u8DEF\u7531\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5728\u4EC5\u6709\u4E00\u4E2A\u9875\u9762\u7684\u60C5\u51B5\u4E0B\uFF0C\u201C\u8BB0\u4F4F\u201D\u7528\u6237\u5F53\u524D\u8D70\u5230\u4E86\u54EA\u4E00\u6B65\u2014\u2014\u4E3A SPA \u4E2D\u7684\u5404\u4E2A\u89C6\u56FE\u5339\u914D\u4E00\u4E2A\u552F\u4E00\u6807\u8BC6\u3002\u8FD9\u610F\u5473\u7740\u7528\u6237\u524D\u8FDB\u3001\u540E\u9000\u89E6\u53D1\u7684\u65B0\u5185\u5BB9\uFF0C\u90FD\u4F1A\u6620\u5C04\u5230\u4E0D\u540C\u7684 URL \u4E0A\u53BB\u3002\u6B64\u65F6\u5373\u4FBF\u4ED6\u5237\u65B0\u9875\u9762\uFF0C\u56E0\u4E3A\u5F53\u524D\u7684 URL \u53EF\u4EE5\u6807\u8BC6\u51FA\u4ED6\u6240\u5904\u7684\u4F4D\u7F6E\uFF0C\u56E0\u6B64\u5185\u5BB9\u4E5F\u4E0D\u4F1A\u4E22\u5931\u3002</li></ul></li></ul></li></ul><h2 id="_002-vue-router\u8DF3\u8F6C\u548Clocation-href\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_002-vue-router\u8DF3\u8F6C\u548Clocation-href\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> 002 - Vue-router\u8DF3\u8F6C\u548Clocation.href\u6709\u4EC0\u4E48\u533A\u522B</h2><ul><li>\u4F7F\u7528 location.href= \u2018/url\u2019 \u6765\u8DF3\u8F6C\uFF0C\u7B80\u5355\u65B9\u4FBF\uFF0C\u4F46\u662F\u5237\u65B0\u4E86\u9875\u9762\uFF1B</li><li>\u5F15\u8FDB router \uFF0C\u7136\u540E\u4F7F\u7528 router.push( \u2018/url\u2019 ) \u6765\u8DF3\u8F6C\uFF0C\u65E0\u5237\u65B0\u9875\u9762\uFF0C\u9759\u6001\u8DF3\u8F6C\u3002\u4F7F\u7528\u4E86 diff \u7B97\u6CD5\uFF0C\u5B9E\u73B0\u4E86\u6309\u9700\u52A0\u8F7D\uFF0C\u51CF\u5C11\u4E86 dom \u7684\u6D88\u8017\u3002\u4F7F\u7528 router \u8DF3\u8F6C\u5E95\u5C42\u662F\u7528history.pushState()</li></ul><h2 id="_003-route-\u548C-router-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_003-route-\u548C-router-\u7684\u533A\u522B" aria-hidden="true">#</a> 003 - $route \u548C$router \u7684\u533A\u522B</h2><ul><li>$router \u662F\u201C\u8DEF\u7531\u5B9E\u4F8B\u201D\u5BF9\u8C61\u5305\u62EC\u4E86\u8DEF\u7531\u7684\u8DF3\u8F6C\u65B9\u6CD5\uFF0C\u94A9\u5B50\u51FD\u6570\u7B49\uFF0C\u53EF\u4EE5\u4F7F\u7528$router.push()\u3001$router.replace()\u3001$router.go()\u7B49</li><li>$route \u662F\u201C\u8DEF\u7531\u4FE1\u606F\u5BF9\u8C61\u201D\uFF0C\u5305\u62EC name\uFF0Cpath\uFF0Cparams\uFF0Cquery\uFF0Cmeta\uFF0CfullPath\uFF0Chash\u3001matched\u7B49\u8DEF\u7531\u4FE1\u606F\u53C2\u6570</li><li><code>$route</code>\uFF1A\u83B7\u53D6\u8DEF\u7531\u4FE1\u606F\uFF08\u8DEF\u5F84\uFF0Cquery\uFF0Cparams\uFF09</li><li><code>$router</code>\uFF1A\u4E00\u822C\u8FDB\u884C\u7F16\u7A0B\u5F0F\u5BFC\u822A\u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C\uFF08push/replace\uFF09</li></ul><h2 id="_004-params\u548Cquery\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_004-params\u548Cquery\u7684\u533A\u522B" aria-hidden="true">#</a> 004 - params\u548Cquery\u7684\u533A\u522B</h2><ul><li><p>\u7528\u6CD5</p><ul><li>query\u53EF\u4EE5\u7528name\u548Cpath\u6765\u5F15\u5165\uFF1B\u63A5\u6536\u53C2\u6570this.$route.query.name\uFF1B\u5728\u8DEF\u7531\u4FE1\u606F\u914D\u7F6E\u65F6\u8DEF\u5F84path\u4E0D\u9700\u8981\u5360\u4F4D</li><li>params\u8981\u7528name\u6765\u5F15\u5165\uFF1B\u63A5\u6536\u53C2\u6570this.$route.params.name\uFF1B\u5728\u8DEF\u7531\u4FE1\u606F\u914D\u7F6E\u65F6\u8DEF\u5F84path\u9700\u8981\u5360\u4F4D</li></ul></li><li><p>url\u5730\u5740\u663E\u793A</p><ul><li>query\u66F4\u52A0\u7C7B\u4F3C\u4E8Eajax\u4E2Dget\u4F20\u53C2\uFF0C\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u4E2D\u663E\u793A\u53C2\u6570</li><li>params\u5219\u7C7B\u4F3C\u4E8Epost\uFF0C\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u4E2D\u4E0D\u663E\u793A\u53C2\u6570</li></ul></li><li><p>\u5237\u65B0</p><ul><li>query\u5237\u65B0\u4E0D\u4F1A\u4E22\u5931query\u91CC\u9762\u7684\u6570\u636E</li><li>params\u5237\u65B0\u4F1A\u4E22\u5931 params\u91CC\u9762\u7684\u6570\u636E\uFF08\u53EF\u8003\u8651\u91C7\u53D6\u672C\u5730\u5B58\u50A8\u89E3\u51B3\u6B64\u95EE\u9898\uFF09</li></ul></li></ul><h2 id="_005-\u8DEF\u7531\u7684hash\u548Chistory\u6A21\u5F0F\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_005-\u8DEF\u7531\u7684hash\u548Chistory\u6A21\u5F0F\u7684\u533A\u522B" aria-hidden="true">#</a> 005 - \u8DEF\u7531\u7684hash\u548Chistory\u6A21\u5F0F\u7684\u533A\u522B</h2><ul><li><p>hash\u6A21\u5F0F</p><ul><li><p>\u7B80\u4ECB</p><ul><li>hash\u6A21\u5F0F\u662F\u5F00\u53D1\u4E2D\u9ED8\u8BA4\u7684\u6A21\u5F0F\uFF0C\u5B83\u7684URL\u5E26\u7740\u4E00\u4E2A#\uFF0C\u4F8B\u5982\uFF1Ahttp://www.abc.com/#/vue\uFF0C\u5B83\u7684hash\u503C\u5C31\u662F#/vue\u3002</li></ul></li><li><p>\u7279\u70B9</p><ul><li></li></ul><p>hash\u503C\u4F1A\u51FA\u73B0\u5728URL\u91CC\u9762\uFF0C\u4F46\u662F\u4E0D\u4F1A\u51FA\u73B0\u5728HTTP\u8BF7\u6C42\u4E2D\uFF0C\u5BF9\u540E\u7AEF\u5B8C\u5168\u6CA1\u6709\u5F71\u54CD\u3002\u6240\u4EE5\u6539\u53D8hash\u503C\uFF0C\u4E0D\u4F1A\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\u3002\u8FD9\u79CD\u6A21\u5F0F\u7684\u6D4F\u89C8\u5668\u652F\u6301\u5EA6\u5F88\u597D\uFF0C\u4F4E\u7248\u672C\u7684IE\u6D4F\u89C8\u5668\u4E5F\u652F\u6301\u8FD9\u79CD\u6A21\u5F0F\u3002hash\u8DEF\u7531\u88AB\u79F0\u4E3A\u662F\u524D\u7AEF\u8DEF\u7531\uFF0C\u5DF2\u7ECF\u6210\u4E3ASPA\uFF08\u5355\u9875\u9762\u5E94\u7528\uFF09\u7684\u6807\u914D\u3002</p></li><li><p>\u539F\u7406</p><ul><li><p>hash\u6A21\u5F0F\u7684\u4E3B\u8981\u539F\u7406\u5C31\u662Fonhashchange()\u4E8B\u4EF6\uFF1A</p><ul><li>\u4F7F\u7528onhashchange() \u4E8B\u4EF6\u7684\u597D\u5904\u5C31\u662F\uFF0C\u5728\u9875\u9762\u7684hash\u503C\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u65E0\u9700\u5411\u540E\u7AEF\u53D1\u8D77\u8BF7\u6C42\uFF0Cwindow\u5C31\u53EF\u4EE5\u76D1\u542C\u4E8B\u4EF6\u7684\u6539\u53D8\uFF0C\u5E76\u6309\u89C4\u5219\u52A0\u8F7D\u76F8\u5E94\u7684\u4EE3\u7801\u3002\u9664\u6B64\u4E4B\u5916\uFF0Chash\u503C\u53D8\u5316\u5BF9\u5E94\u7684URL\u90FD\u4F1A\u88AB\u6D4F\u89C8\u5668\u8BB0\u5F55\u4E0B\u6765\uFF0C\u8FD9\u6837\u6D4F\u89C8\u5668\u5C31\u80FD\u5B9E\u73B0\u9875\u9762\u7684\u524D\u8FDB\u548C\u540E\u9000\u3002\u867D\u7136\u662F\u6CA1\u6709\u8BF7\u6C42\u540E\u7AEF\u670D\u52A1\u5668\uFF0C\u4F46\u662F\u9875\u9762\u7684hash\u503C\u548C\u5BF9\u5E94\u7684URL\u5173\u8054\u8D77\u6765\u4E86\u3002</li></ul></li></ul></li></ul></li><li><p>history\u6A21\u5F0F</p><ul><li><p>\u7B80\u4ECB</p><ul><li>history\u6A21\u5F0F\u7684URL\u4E2D\u6CA1\u6709#\uFF0C\u5B83\u4F7F\u7528\u7684\u662F\u4F20\u7EDF\u7684\u8DEF\u7531\u5206\u53D1\u6A21\u5F0F\uFF0C\u5373\u7528\u6237\u5728\u8F93\u5165\u4E00\u4E2AURL\u65F6\uFF0C\u670D\u52A1\u5668\u4F1A\u63A5\u6536\u8FD9\u4E2A\u8BF7\u6C42\uFF0C\u5E76\u89E3\u6790\u8FD9\u4E2AURL\uFF0C\u7136\u540E\u505A\u51FA\u76F8\u5E94\u7684\u903B\u8F91\u5904\u7406\u3002</li></ul></li><li><p>\u7279\u70B9</p><ul><li>\u5F53\u4F7F\u7528history\u6A21\u5F0F\u65F6\uFF0CURL\u5C31\u50CF\u8FD9\u6837\uFF1Ahttp://abc.com/user/id\u3002\u76F8\u6BD4hash\u6A21\u5F0F\u66F4\u52A0\u597D\u770B\u3002\u4F46\u662F\uFF0Chistory\u6A21\u5F0F\u9700\u8981\u540E\u53F0\u914D\u7F6E\u652F\u6301\u3002\u5982\u679C\u540E\u53F0\u6CA1\u6709\u6B63\u786E\u914D\u7F6E\uFF0C\u8BBF\u95EE\u65F6\u4F1A\u8FD4\u56DE404\u3002</li></ul></li><li><p>API</p><ul><li><p>history api\u53EF\u4EE5\u5206\u4E3A\u4E24\u5927\u90E8\u5206\uFF0C\u5207\u6362\u5386\u53F2\u72B6\u6001\u548C\u4FEE\u6539\u5386\u53F2\u72B6\u6001\uFF1A</p><ul><li><p>\u4FEE\u6539\u5386\u53F2\u72B6\u6001</p><ul><li>\u5305\u62EC\u4E86 HTML5 History Interface \u4E2D\u65B0\u589E\u7684 pushState() \u548C replaceState() \u65B9\u6CD5\uFF0C\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u5E94\u7528\u4E8E\u6D4F\u89C8\u5668\u7684\u5386\u53F2\u8BB0\u5F55\u6808\uFF0C\u63D0\u4F9B\u4E86\u5BF9\u5386\u53F2\u8BB0\u5F55\u8FDB\u884C\u4FEE\u6539\u7684\u529F\u80FD\u3002\u53EA\u662F\u5F53\u4ED6\u4EEC\u8FDB\u884C\u4FEE\u6539\u65F6\uFF0C\u867D\u7136\u4FEE\u6539\u4E86url\uFF0C\u4F46\u6D4F\u89C8\u5668\u4E0D\u4F1A\u7ACB\u5373\u5411\u540E\u7AEF\u53D1\u9001\u8BF7\u6C42\u3002\u5982\u679C\u8981\u505A\u5230\u6539\u53D8url\u4F46\u53C8\u4E0D\u5237\u65B0\u9875\u9762\u7684\u6548\u679C\uFF0C\u5C31\u9700\u8981\u524D\u7AEF\u7528\u4E0A\u8FD9\u4E24\u4E2AAPI\u3002</li></ul></li><li><p>\u5207\u6362\u5386\u53F2\u72B6\u6001</p><ul><li>\u5305\u62ECforward()\u3001back()\u3001go()\u4E09\u4E2A\u65B9\u6CD5\uFF0C\u5BF9\u5E94\u6D4F\u89C8\u5668\u7684\u524D\u8FDB\uFF0C\u540E\u9000\uFF0C\u8DF3\u8F6C\u64CD\u4F5C\u3002</li></ul></li></ul></li></ul></li><li><p>\u867D\u7136history\u6A21\u5F0F\u4E22\u5F03\u4E86\u4E11\u964B\u7684#\u3002\u4F46\u662F\uFF0C\u5B83\u4E5F\u6709\u81EA\u5DF1\u7684\u7F3A\u70B9\uFF0C\u5C31\u662F\u5728\u5237\u65B0\u9875\u9762\u7684\u65F6\u5019\uFF0C\u5982\u679C\u6CA1\u6709\u76F8\u5E94\u7684\u8DEF\u7531\u6216\u8D44\u6E90\uFF0C\u5C31\u4F1A\u5237\u51FA404\u6765\u3002</p></li><li><p>\u5207\u6362\u4E3Ahistory\u6A21\u5F0F</p><ul><li></li></ul></li></ul></li><li><p>\u8C03\u7528 history.pushState() \u4E0E\u76F4\u63A5\u4FEE\u6539 hash\u5BF9\u6BD4</p><ul><li>pushState() \u8BBE\u7F6E\u7684\u65B0 URL \u53EF\u4EE5\u662F\u4E0E\u5F53\u524D URL \u540C\u6E90\u7684\u4EFB\u610F URL\uFF1B\u800C hash \u53EA\u53EF\u4FEE\u6539 # \u540E\u9762\u7684\u90E8\u5206\uFF0C\u56E0\u6B64\u53EA\u80FD\u8BBE\u7F6E\u4E0E\u5F53\u524D URL \u540C\u6587\u6863\u7684 URL\uFF1B</li><li>pushState() \u8BBE\u7F6E\u7684\u65B0 URL \u53EF\u4EE5\u4E0E\u5F53\u524D URL \u4E00\u6A21\u4E00\u6837\uFF0C\u8FD9\u6837\u4E5F\u4F1A\u628A\u8BB0\u5F55\u6DFB\u52A0\u5230\u6808\u4E2D\uFF1B\u800C hash \u8BBE\u7F6E\u7684\u65B0\u503C\u5FC5\u987B\u4E0E\u539F\u6765\u4E0D\u4E00\u6837\u624D\u4F1A\u89E6\u53D1\u52A8\u4F5C\u5C06\u8BB0\u5F55\u6DFB\u52A0\u5230\u6808\u4E2D\uFF1B</li><li>pushState() \u901A\u8FC7 stateObject \u53C2\u6570\u53EF\u4EE5\u6DFB\u52A0\u4EFB\u610F\u7C7B\u578B\u7684\u6570\u636E\u5230\u8BB0\u5F55\u4E2D\uFF1B\u800C hash \u53EA\u53EF\u6DFB\u52A0\u77ED\u5B57\u7B26\u4E32\uFF1B</li><li>pushState() \u53EF\u989D\u5916\u8BBE\u7F6E title \u5C5E\u6027\u4F9B\u540E\u7EED\u4F7F\u7528\u3002</li><li>hash\u6A21\u5F0F\u4E0B\uFF0C\u4EC5hash\u7B26\u53F7\u4E4B\u524D\u7684url\u4F1A\u88AB\u5305\u542B\u5728\u8BF7\u6C42\u4E2D\uFF0C\u540E\u7AEF\u5982\u679C\u6CA1\u6709\u505A\u5230\u5BF9\u8DEF\u7531\u7684\u5168\u8986\u76D6\uFF0C\u4E5F\u4E0D\u4F1A\u8FD4\u56DE404\u9519\u8BEF\uFF1Bhistory\u6A21\u5F0F\u4E0B\uFF0C\u524D\u7AEF\u7684url\u5FC5\u987B\u548C\u5B9E\u9645\u5411\u540E\u7AEF\u53D1\u8D77\u8BF7\u6C42\u7684url\u4E00\u81F4\uFF0C\u5982\u679C\u6CA1\u6709\u5BF9\u7528\u7684\u8DEF\u7531\u5904\u7406\uFF0C\u5C06\u8FD4\u56DE404\u9519\u8BEF\u3002</li></ul></li></ul><h2 id="_006-\u5982\u4F55\u83B7\u53D6\u9875\u9762\u7684hash\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#_006-\u5982\u4F55\u83B7\u53D6\u9875\u9762\u7684hash\u53D8\u5316" aria-hidden="true">#</a> 006 - \u5982\u4F55\u83B7\u53D6\u9875\u9762\u7684hash\u53D8\u5316</h2><ul><li><p>\u76D1\u542C$route\u7684\u53D8\u5316</p><ul><li></li></ul></li><li><p>window.location.hash\u8BFB\u53D6#\u503C</p><ul><li>window.location.hash \u7684\u503C\u53EF\u8BFB\u53EF\u5199\uFF0C\u8BFB\u53D6\u6765\u5224\u65AD\u72B6\u6001\u662F\u5426\u6539\u53D8\uFF0C\u5199\u5165\u65F6\u53EF\u4EE5\u5728\u4E0D\u91CD\u8F7D\u7F51\u9875\u7684\u524D\u63D0\u4E0B\uFF0C\u6DFB\u52A0\u4E00\u6761\u5386\u53F2\u8BBF\u95EE\u8BB0\u5F55\u3002</li></ul></li></ul><h2 id="_007-\u5982\u4F55\u5B9A\u4E49\u52A8\u6001\u8DEF\u7531-\u5982\u4F55\u83B7\u53D6\u4F20\u8FC7\u6765\u7684\u52A8\u6001\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_007-\u5982\u4F55\u5B9A\u4E49\u52A8\u6001\u8DEF\u7531-\u5982\u4F55\u83B7\u53D6\u4F20\u8FC7\u6765\u7684\u52A8\u6001\u53C2\u6570" aria-hidden="true">#</a> 007 - \u5982\u4F55\u5B9A\u4E49\u52A8\u6001\u8DEF\u7531\uFF1F\u5982\u4F55\u83B7\u53D6\u4F20\u8FC7\u6765\u7684\u52A8\u6001\u53C2\u6570\uFF1F</h2><ul><li><p>params\u4F20\u53C2</p><ul><li><p>\u8DEF\u7531\u683C\u5F0F</p><ul><li>\u914D\u7F6E\u8DEF\u7531\u683C\u5F0F\uFF1A/router/:id</li><li>\u4F20\u9012\u7684\u65B9\u5F0F\uFF1A\u5728path\u540E\u9762\u8DDF\u4E0A\u5BF9\u5E94\u7684\u503C</li><li>\u4F20\u9012\u540E\u5F62\u6210\u7684\u8DEF\u5F84\uFF1A/router/123</li></ul></li><li><p>\u5B9A\u4E49\u8DEF\u7531</p><ul><li></li></ul></li><li><p>\u63A5\u6536\u53C2\u6570</p><ul><li>\u901A\u8FC7 $route.params.userid \u83B7\u53D6\u4F20\u9012\u7684\u503C</li></ul></li></ul></li><li><p>query\u4F20\u53C2</p><ul><li><p>\u8DEF\u7531\u683C\u5F0F</p><ul><li>\u914D\u7F6E\u8DEF\u7531\u683C\u5F0F\uFF1A/router\uFF1Fkey1=value1&amp;key2=value2</li><li>\u4F20\u9012\u7684\u65B9\u5F0F\uFF1A\u5BF9\u8C61\u4E2D\u4F7F\u7528query\u7684key\u4F5C\u4E3A\u4F20\u9012\u65B9\u5F0F</li><li>\u4F20\u9012\u540E\u5F62\u6210\u7684\u8DEF\u5F84\uFF1A/route?id=123&amp;uname=cara</li></ul></li><li><p>\u5B9A\u4E49\u8DEF\u7531</p><ul><li></li></ul></li><li><p>\u63A5\u6536\u53C2\u6570</p><ul><li>\u901A\u8FC7$route.query.userid\u83B7\u53D6\u4F20\u9012\u7684\u503C</li></ul></li></ul></li></ul><h2 id="_008-vue-router-\u7684\u61D2\u52A0\u8F7D\u5982\u4F55\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_008-vue-router-\u7684\u61D2\u52A0\u8F7D\u5982\u4F55\u5B9E\u73B0" aria-hidden="true">#</a> 008 - Vue-Router \u7684\u61D2\u52A0\u8F7D\u5982\u4F55\u5B9E\u73B0</h2><ul><li><p>\u975E\u61D2\u52A0\u8F7D</p><ul><li></li></ul></li><li><p>\u61D2\u52A0\u8F7D</p><ul><li><p>\u4F7F\u7528\u7BAD\u5934\u51FD\u6570+import\u52A8\u6001\u52A0\u8F7D</p><ul><li></li></ul></li><li><p>\u4F7F\u7528\u7BAD\u5934\u51FD\u6570+require\u52A8\u6001\u52A0\u8F7D</p><ul><li></li></ul></li><li><p>webpack</p><p>\u4F7F\u7528webpack\u7684require.ensure\u6280\u672F\uFF0C\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u6309\u9700\u52A0\u8F7D\u3002 \u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u591A\u4E2A\u8DEF\u7531\u6307\u5B9A\u76F8\u540C\u7684chunkName\uFF0C\u4F1A\u5408\u5E76\u6253\u5305\u6210\u4E00\u4E2Ajs\u6587\u4EF6\u3002</p><ul><li></li></ul></li></ul></li></ul><h2 id="_009-vue-router-\u5BFC\u822A\u5B88\u536B\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#_009-vue-router-\u5BFC\u822A\u5B88\u536B\u6709\u54EA\u4E9B" aria-hidden="true">#</a> 009 - Vue-router \u5BFC\u822A\u5B88\u536B\u6709\u54EA\u4E9B</h2><ul><li>\u5168\u5C40\u5B88\u536B\uFF08\u524D\u7F6E/\u540E\u7F6E\uFF09\uFF1AbeforeEach\u3001beforeResolve\u3001afterEach</li><li>\u8DEF\u7531\u72EC\u4EAB\u7684\u5B88\u536B\uFF1AbeforeEnter</li><li>\u7EC4\u4EF6\u5185\u7684\u5B88\u536B\uFF1AbeforeRouteEnter\u3001beforeRouteUpdate\u3001beforeRouteLeave</li></ul><h2 id="_010-vue-router-\u8DEF\u7531\u5B88\u536B\u5728\u751F\u547D\u5468\u671F\u7684\u4F53\u73B0" tabindex="-1"><a class="header-anchor" href="#_010-vue-router-\u8DEF\u7531\u5B88\u536B\u5728\u751F\u547D\u5468\u671F\u7684\u4F53\u73B0" aria-hidden="true">#</a> 010 - Vue-router \u8DEF\u7531\u5B88\u536B\u5728\u751F\u547D\u5468\u671F\u7684\u4F53\u73B0</h2><ul><li><p>\u5B8C\u6574\u7684\u8DEF\u7531\u5BFC\u822A\u89E3\u6790\u6D41\u7A0B</p><ul><li>\u89E6\u53D1\u8FDB\u5165\u5176\u4ED6\u8DEF\u7531\u3002</li><li>\u8C03\u7528\u8981\u79BB\u5F00\u8DEF\u7531\u7684\u7EC4\u4EF6\u5B88\u536BbeforeRouteLeave</li><li>\u8C03\u7528\u5168\u5C40\u524D\u7F6E\u5B88\u536B\u2236 beforeEach</li><li>\u5728\u91CD\u7528\u7684\u7EC4\u4EF6\u91CC\u8C03\u7528 beforeRouteUpdate</li><li>\u8C03\u7528\u8DEF\u7531\u72EC\u4EAB\u5B88\u536B beforeEnter\u3002</li><li>\u89E3\u6790\u5F02\u6B65\u8DEF\u7531\u7EC4\u4EF6\u3002</li><li>\u5728\u5C06\u8981\u8FDB\u5165\u7684\u8DEF\u7531\u7EC4\u4EF6\u4E2D\u8C03\u7528 beforeRouteEnter</li><li>\u8C03\u7528\u5168\u5C40\u89E3\u6790\u5B88\u536B beforeResolve</li><li>\u5BFC\u822A\u88AB\u786E\u8BA4\u3002</li><li>\u8C03\u7528\u5168\u5C40\u540E\u7F6E\u94A9\u5B50\u7684 afterEach \u94A9\u5B50\u3002</li><li>\u89E6\u53D1DOM\u66F4\u65B0\uFF08mounted\uFF09\u3002</li><li>\u6267\u884CbeforeRouteEnter \u5B88\u536B\u4E2D\u4F20\u7ED9 next \u7684\u56DE\u8C03\u51FD\u6570</li></ul></li><li><p>\u89E6\u53D1\u94A9\u5B50\u7684\u5B8C\u6574\u987A\u5E8F</p><ul><li>beforeRouteLeave\uFF1A\u8DEF\u7531\u7EC4\u4EF6\u7684\u7EC4\u4EF6\u79BB\u5F00\u8DEF\u7531\u524D\u94A9\u5B50\uFF0C\u53EF\u53D6\u6D88\u8DEF\u7531\u79BB\u5F00\u3002</li><li>beforeEach\uFF1A\u8DEF\u7531\u5168\u5C40\u524D\u7F6E\u5B88\u536B\uFF0C\u53EF\u7528\u4E8E\u767B\u5F55\u9A8C\u8BC1\u3001\u5168\u5C40\u8DEF\u7531loading\u7B49\u3002</li><li>beforeEnter\uFF1A\u8DEF\u7531\u72EC\u4EAB\u5B88\u536B</li><li>beforeRouteEnter\uFF1A\u8DEF\u7531\u7EC4\u4EF6\u7684\u7EC4\u4EF6\u8FDB\u5165\u8DEF\u7531\u524D\u94A9\u5B50\u3002</li><li>beforeResolve\uFF1A\u8DEF\u7531\u5168\u5C40\u89E3\u6790\u5B88\u536B</li><li>afterEach\uFF1A\u8DEF\u7531\u5168\u5C40\u540E\u7F6E\u94A9\u5B50</li><li>beforeCreate\uFF1A\u7EC4\u4EF6\u751F\u547D\u5468\u671F\uFF0C\u4E0D\u80FD\u8BBF\u95EEthis\u3002</li><li>created;\u7EC4\u4EF6\u751F\u547D\u5468\u671F\uFF0C\u53EF\u4EE5\u8BBF\u95EEthis\uFF0C\u4E0D\u80FD\u8BBF\u95EEdom\u3002</li><li>beforeMount\uFF1A\u7EC4\u4EF6\u751F\u547D\u5468\u671F</li><li>deactivated\uFF1A\u79BB\u5F00\u7F13\u5B58\u7EC4\u4EF6a\uFF0C\u6216\u8005\u89E6\u53D1a\u7684beforeDestroy\u548Cdestroyed\u7EC4\u4EF6\u9500\u6BC1\u94A9\u5B50\u3002</li><li>mounted\uFF1A\u8BBF\u95EE/\u64CD\u4F5Cdom\u3002</li><li>activated\uFF1A\u8FDB\u5165\u7F13\u5B58\u7EC4\u4EF6\uFF0C\u8FDB\u5165a\u7684\u5D4C\u5957\u5B50\u7EC4\u4EF6\uFF08\u5982\u679C\u6709\u7684\u8BDD\uFF09\u3002</li><li>\u6267\u884CbeforeRouteEnter\u56DE\u8C03\u51FD\u6570next\u3002</li></ul></li><li><p>\u5BFC\u822A\u884C\u4E3A\u88AB\u89E6\u53D1\u5230\u5BFC\u822A\u5B8C\u6210\u7684\u6574\u4E2A\u8FC7\u7A0B</p><ul><li>\u5BFC\u822A\u884C\u4E3A\u88AB\u89E6\u53D1\uFF0C\u6B64\u65F6\u5BFC\u822A\u672A\u88AB\u786E\u8BA4\u3002</li><li>\u5728\u5931\u6D3B\u7684\u7EC4\u4EF6\u91CC\u8C03\u7528\u79BB\u5F00\u5B88\u536B beforeRouteLeave\u3002</li><li>\u8C03\u7528\u5168\u5C40\u7684 beforeEach\u5B88\u536B\u3002</li><li>\u5728\u91CD\u7528\u7684\u7EC4\u4EF6\u91CC\u8C03\u7528 beforeRouteUpdate \u5B88\u536B(2.2+)\u3002</li><li>\u5728\u8DEF\u7531\u914D\u7F6E\u91CC\u8C03\u7528 beforeEnteY\u3002</li><li>\u89E3\u6790\u5F02\u6B65\u8DEF\u7531\u7EC4\u4EF6\uFF08\u5982\u679C\u6709\uFF09\u3002</li><li>\u5728\u88AB\u6FC0\u6D3B\u7684\u7EC4\u4EF6\u91CC\u8C03\u7528 beforeRouteEnter\u3002</li><li>\u8C03\u7528\u5168\u5C40\u7684 beforeResolve \u5B88\u536B\uFF082.5+\uFF09\uFF0C\u6807\u793A\u89E3\u6790\u9636\u6BB5\u5B8C\u6210\u3002</li><li>\u5BFC\u822A\u88AB\u786E\u8BA4\u3002</li><li>\u8C03\u7528\u5168\u5C40\u7684 afterEach \u94A9\u5B50\u3002</li><li>\u975E\u91CD\u7528\u7EC4\u4EF6\uFF0C\u5F00\u59CB\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u751F\u547D\u5468\u671F\uFF1AbeforeCreate&amp;created\u3001beforeMount&amp;mounted</li><li>\u89E6\u53D1 DOM \u66F4\u65B0\u3002</li><li>\u7528\u521B\u5EFA\u597D\u7684\u5B9E\u4F8B\u8C03\u7528 beforeRouteEnter\u5B88\u536B\u4E2D\u4F20\u7ED9 next \u7684\u56DE\u8C03\u51FD\u6570\u3002</li><li>\u5BFC\u822A\u5B8C\u6210</li></ul></li></ul><h2 id="_2-\u8DEF\u7531\u7EC4\u4EF6\u548C\u975E\u8DEF\u7531\u7EC4\u4EF6\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_2-\u8DEF\u7531\u7EC4\u4EF6\u548C\u975E\u8DEF\u7531\u7EC4\u4EF6\u7684\u533A\u522B" aria-hidden="true">#</a> 2.\u8DEF\u7531\u7EC4\u4EF6\u548C\u975E\u8DEF\u7531\u7EC4\u4EF6\u7684\u533A\u522B\uFF1F</h2><ol><li>\u8DEF\u7531\u7EC4\u4EF6\u4E00\u822C\u653E\u5728<code>pages/views</code>\u6587\u4EF6\u5939\uFF0C\u975E\u8DEF\u7531\u7EC4\u4EF6\u653E\u5728<code>components</code>\u6587\u4EF6\u5939</li><li>\u8DEF\u7531\u7EC4\u4EF6\u4E00\u822C\u9700\u8981\u5728<code>router</code>\u6587\u4EF6\u5939\u4E2D\u8FDB\u884C\u6CE8\u518C\uFF0C\u975E\u8DEF\u7531\u7EC4\u4EF6\u4E00\u822C\u90FD\u662F\u4EE5\u6807\u7B7E\u7684\u5F62\u5F0F\u4F7F\u7528</li><li>\u6CE8\u518C\u5B8C\u8DEF\u7531\uFF0C\u4E0D\u7BA1\u662F\u8DEF\u7531\u7EC4\u4EF6\u8FD8\u662F\u975E\u8DEF\u7531\u7EC4\u4EF6\uFF0C\u8EAB\u4E0A\u90FD\u6709<code>$route</code>\u548C<code>$router</code>\u5C5E\u6027</li></ol><h2 id="_4-\u8DEF\u7531\u8DF3\u8F6C" tabindex="-1"><a class="header-anchor" href="#_4-\u8DEF\u7531\u8DF3\u8F6C" aria-hidden="true">#</a> 4.\u8DEF\u7531\u8DF3\u8F6C</h2><h3 id="\u8DEF\u7531\u8DF3\u8F6C\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u8DF3\u8F6C\u7684\u65B9\u5F0F" aria-hidden="true">#</a> \u8DEF\u7531\u8DF3\u8F6C\u7684\u65B9\u5F0F\uFF1F</h3><p>\u58F0\u660E\u5F0F\u5BFC\u822A<code>router-link</code>\uFF1A\u53EF\u4EE5\u8FDB\u884C\u8DEF\u7531\u7684\u8DF3\u8F6C\uFF0C\u52A1\u5FC5\u8981\u6709<code>to</code>\u5C5E\u6027</p><p>\u7F16\u7A0B\u5F0F\u5BFC\u822A<code>push/replace</code>\uFF0C\u53EF\u4EE5\u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C\u3002<code>this.$router.push(&#39;/search&#39;)</code></p><p>\u58F0\u660E\u5F0F\u5BFC\u822A\u80FD\u505A\u7684\uFF0C\u7F16\u7A0B\u5F0F\u5BFC\u822A\u90FD\u80FD\u505A\uFF0C\u4F46\u662F\u7F16\u7A0B\u5F0F\u5BFC\u822A\u9664\u4E86\u53EF\u4EE5\u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C\uFF0C\u8FD8\u53EF\u4EE5\u505A\u4E00\u4E9B\u5176\u4ED6\u7684\u4E1A\u52A1\u903B\u8F91</p><h3 id="push\u548Creplace\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#push\u548Creplace\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> push\u548Creplace\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</h3><p>push\u53EF\u4EE5\u56DE\u9000\uFF0Creplace\u66FF\u6362\uFF08\u4E0D\u53EF\u4EE5\u56DE\u9000\uFF09</p><h3 id="\u7F16\u7A0B\u5F0F\u8DEF\u7531\u8DF3\u8F6C\u5230\u5F53\u524D\u8DEF\u7531-\u53C2\u6570\u4E0D\u53D8-\u591A\u6B21\u6267\u884C\u4F1A\u629B\u51FAnavigationduplicated\u7684\u8B66\u544A\u9519\u8BEF-\u5982\u4F55\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#\u7F16\u7A0B\u5F0F\u8DEF\u7531\u8DF3\u8F6C\u5230\u5F53\u524D\u8DEF\u7531-\u53C2\u6570\u4E0D\u53D8-\u591A\u6B21\u6267\u884C\u4F1A\u629B\u51FAnavigationduplicated\u7684\u8B66\u544A\u9519\u8BEF-\u5982\u4F55\u89E3\u51B3" aria-hidden="true">#</a> \u7F16\u7A0B\u5F0F\u8DEF\u7531\u8DF3\u8F6C\u5230\u5F53\u524D\u8DEF\u7531\uFF08\u53C2\u6570\u4E0D\u53D8\uFF09\uFF0C\u591A\u6B21\u6267\u884C\u4F1A\u629B\u51FANavigationDuplicated\u7684\u8B66\u544A\u9519\u8BEF\uFF0C\u5982\u4F55\u89E3\u51B3</h3><p>\u58F0\u660E\u5F0F\u5BFC\u822A\u6CA1\u6709\u8FD9\u7C7B\u95EE\u9898\uFF0C\u56E0\u4E3A<code>vue-router</code>\u5E95\u5C42\u5DF2\u7ECF\u5904\u7406\u597D\u4E86</p><p>\u4E3A\u4EC0\u4E48\u7F16\u7A0B\u5F0F\u5BFC\u822A\u4F1A\u6709\u8FD9\u79CD\u9519\u8BEF\u8B66\u544A\uFF1F</p><p><code>&quot;vue-router&quot;: &quot;^3.5.3&quot;</code>\uFF0C\u6700\u65B0\u7684<code>vue-router</code>\u5F15\u5165\u4E86<code>Promise</code>\u3002</p><p>\u65B9\u6CD5\u4E00\uFF1A\u4F20\u5165\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570\u53C2\u6570</p><p><code>this.$router.push(location, () =&gt; {})</code></p><p>\u65B9\u6CD5\u4E8C\uFF1Acatch\u5904\u7406\u9519\u8BEF\u7684promise</p><p><code>this.$router.push(location).catch(() =&gt; {})</code></p><blockquote><p>\u4F46\u662F\u4E0A\u9762\u79CD\u65B9\u6CD5\u6CBB\u6807\u4E0D\u6CBB\u672C\uFF0C\u5728\u522B\u7684\u7EC4\u4EF6\u4E2D<code>push/replace</code>\uFF0C\u7F16\u7A0B\u5F0F\u5BFC\u822A\u8FD8\u662F\u6709\u7C7B\u4F3C\u9519\u8BEF\u3002</p></blockquote><p>\u65B9\u6CD5\u4E09\uFF1A\u91CD\u5199push/replace\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5148\u628AVueRouter\u539F\u578B\u5BF9\u8C61\u7684push/replace\u65B9\u6CD5\u4FDD\u5B58\u4E00\u4EFD</span>
<span class="token keyword">const</span> originPush <span class="token operator">=</span> <span class="token class-name">VueRouter</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>push
<span class="token keyword">const</span> originReplace <span class="token operator">=</span> <span class="token class-name">VueRouter</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>replace
<span class="token comment">// \u91CD\u5199push/replace</span>
<span class="token comment">// \u7B2C\u4E00\u4E2A\u53C2\u6570\uFF1A\u544A\u8BC9\u539F\u6765\u7684push\u65B9\u6CD5\uFF0C\u4F60\u5F80\u54EA\u91CC\u8DF3\u8F6C\uFF08\u4F20\u9012\u54EA\u4E9B\u53C2\u6570\uFF09</span>
<span class="token class-name">VueRouter</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">push</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">location<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>resolve <span class="token operator">||</span> reject<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5982\u679C\u6307\u5B9A\u4E86\u6210\u529F\u6216\u5931\u8D25\u7684\u56DE\u8C03</span>
        <span class="token function">originPush</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> location<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token comment">// \u76F4\u63A5\u8C03\u7528\u539F\u6765\u7684push\u65B9\u6CD5</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">originPush</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> location<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token class-name">VueRouter</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">replace</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">location<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>resolve <span class="token operator">||</span> reject<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5982\u679C\u6307\u5B9A\u4E86\u6210\u529F\u6216\u5931\u8D25\u7684\u56DE\u8C03</span>
        <span class="token function">originReplace</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> location<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token comment">// \u76F4\u63A5\u8C03\u7528\u539F\u6765\u7684replace\u65B9\u6CD5</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">originReplace</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> location<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="_5-\u8DEF\u7531\u4F20\u53C2" tabindex="-1"><a class="header-anchor" href="#_5-\u8DEF\u7531\u4F20\u53C2" aria-hidden="true">#</a> 5.\u8DEF\u7531\u4F20\u53C2</h2><h3 id="\u8DEF\u7531\u4F20\u53C2\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u4F20\u53C2\u7684\u65B9\u5F0F" aria-hidden="true">#</a> \u8DEF\u7531\u4F20\u53C2\u7684\u65B9\u5F0F\uFF1F</h3><p>\u7B2C\u4E00\u79CD\uFF1A\u5B57\u7B26\u4E32\u62FC\u63A5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;/search/&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>keyword <span class="token operator">+</span> <span class="token string">&#39;?k=&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>keyword<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7B2C\u4E8C\u79CD\uFF1A\u6A21\u677F\u5B57\u7B26\u4E32</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/search/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>keyword<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?k=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>keyword<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>\u7B2C\u4E09\u79CD\uFF1A\u5BF9\u8C61\u5199\u6CD5</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;search&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">keyword</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>keyword <span class="token operator">||</span> <span class="token keyword">undefined</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">k</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>keyword<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u8DEF\u7531\u4F20\u53C2-\u5BF9\u8C61\u5199\u6CD5-path\u662F\u5426\u53EF\u4EE5\u7ED3\u5408params\u53C2\u6570\u4E00\u8D77\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u4F20\u53C2-\u5BF9\u8C61\u5199\u6CD5-path\u662F\u5426\u53EF\u4EE5\u7ED3\u5408params\u53C2\u6570\u4E00\u8D77\u4F7F\u7528" aria-hidden="true">#</a> \u8DEF\u7531\u4F20\u53C2\uFF08\u5BF9\u8C61\u5199\u6CD5\uFF09path\u662F\u5426\u53EF\u4EE5\u7ED3\u5408params\u53C2\u6570\u4E00\u8D77\u4F7F\u7528\uFF1F</h3><p>\u8DEF\u7531\u8DF3\u8F6C\u4F20\u53C2\u7684\u65F6\u5019\uFF0C\u5BF9\u8C61\u7684\u5199\u6CD5\uFF0C\u53EF\u4EE5\u662F<code>name/path</code>\uFF0C<code>name</code>\u548C<code>path</code>\u4E00\u8D77\u5199\u53EF\u4EE5\u6B63\u5E38\u4F7F\u7528\uFF0C\u4F46\u662F\u53EA\u6709<code>path</code>\u4E0D\u80FD\u4E0E<code>params</code>\u53C2\u6570\u4E00\u8D77\u4F7F\u7528\uFF0C</p><h3 id="\u5982\u4F55\u6307\u5B9Aparams\u53C2\u6570\u53EF\u4F20\u53EF\u4E0D\u4F20" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u6307\u5B9Aparams\u53C2\u6570\u53EF\u4F20\u53EF\u4E0D\u4F20" aria-hidden="true">#</a> \u5982\u4F55\u6307\u5B9Aparams\u53C2\u6570\u53EF\u4F20\u53EF\u4E0D\u4F20\uFF1F</h3><p>\u5982\u679C\u8DEF\u7531\u8981\u6C42\u4F20\u9012<code>params</code>\u53C2\u6570\uFF0C\u4F46\u662F\u6CA1\u6709\u4F20\u9012\uFF0Curl\u4F1A\u6709\u95EE\u9898\u3002</p><p>\u5360\u4F4D\u7B26\u540E\u9762\u52A0<code>?</code>\uFF1A<code>path: &#39;/search/:keyword?&#39;</code>\u3002\u4EE3\u8868<code>params</code>\u53C2\u6570\u53EF\u4F20\u53EF\u4E0D\u4F20</p><h3 id="params\u53C2\u6570\u53EF\u4F20\u53EF\u4E0D\u4F20-\u4F46\u662F\u5982\u679C\u4F20\u9012\u7684\u662F\u7A7A\u4E32-\u5982\u4F55\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#params\u53C2\u6570\u53EF\u4F20\u53EF\u4E0D\u4F20-\u4F46\u662F\u5982\u679C\u4F20\u9012\u7684\u662F\u7A7A\u4E32-\u5982\u4F55\u89E3\u51B3" aria-hidden="true">#</a> params\u53C2\u6570\u53EF\u4F20\u53EF\u4E0D\u4F20\uFF0C\u4F46\u662F\u5982\u679C\u4F20\u9012\u7684\u662F\u7A7A\u4E32\uFF0C\u5982\u4F55\u89E3\u51B3\uFF1F</h3><p>\u4F7F\u7528<code>undefined</code>\u89E3\u51B3\uFF1A<code>params: {keyword: this.keyword || undefined},</code></p><h3 id="\u8DEF\u7531\u7EC4\u4EF6\u80FD\u4E0D\u80FD\u4F20\u9012props\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u7EC4\u4EF6\u80FD\u4E0D\u80FD\u4F20\u9012props\u6570\u636E" aria-hidden="true">#</a> \u8DEF\u7531\u7EC4\u4EF6\u80FD\u4E0D\u80FD\u4F20\u9012props\u6570\u636E\uFF1F</h3><p>\u53EF\u4EE5\u7684\uFF0C\u6709\u4E09\u79CD\u5199\u6CD5\uFF0C\u5728\u8DEF\u7531\u914D\u7F6E\u91CC\u5199</p><ul><li><p>\u5982\u679C <code>props</code> \u88AB\u8BBE\u7F6E\u4E3A <code>true</code>\uFF0C<code>route.params</code> \u5C06\u4F1A\u88AB\u8BBE\u7F6E\u4E3A\u7EC4\u4EF6\u5C5E\u6027\u3002\u53EA\u80FD\u4F20\u9012<code>params</code>\u53C2\u6570</p></li><li><p>\u5982\u679C <code>props</code> \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5B83\u4F1A\u88AB\u6309\u539F\u6837\u8BBE\u7F6E\u4E3A\u7EC4\u4EF6\u5C5E\u6027\u3002\u5F53 <code>props</code> \u662F\u9759\u6001\u7684\u65F6\u5019\u6709\u7528\u3002\u989D\u5916\u7ED9\u8DEF\u7531\u7EC4\u4EF6\u4F20\u9012\u4E00\u4E9Bprops\u3002</p></li><li><p>\u51FD\u6570\u5199\u6CD5\uFF1A\u53EF\u4EE5\u5C06<code>params</code>\u53C2\u6570\uFF0C<code>query</code>\u53C2\u6570\uFF0C\u901A\u8FC7<code>props</code>\u4F20\u9012\u7ED9\u8DEF\u7531\u7EC4\u4EF6\u3002</p><p><code>props: route =&gt; ({keyword: route.params.keyword, k: route.query.k})</code></p></li></ul>`,59);function p(t,l){return e}var i=a(s,[["render",p],["__file","vue-router.html.vue"]]);export{i as default};
