import{_ as t,d as e}from"./app.9e56f95d.js";const i={},a=e(`<h1 id="\u56DB\u3001vuex" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001vuex" aria-hidden="true">#</a> \u56DB\u3001vuex</h1><h3 id="vuex-\u7684\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#vuex-\u7684\u539F\u7406" aria-hidden="true">#</a> <strong>Vuex \u7684\u539F\u7406</strong></h3><ul><li></li></ul><pre><code>- vuex\u6982\u8FF0

    - Vuex \u662F\u4E00\u4E2A\u4E13\u4E3A Vue.js \u5E94\u7528\u7A0B\u5E8F\u5F00\u53D1\u7684\u72B6\u6001\u7BA1\u7406\u6A21\u5F0F\u3002\u6BCF\u4E00\u4E2A Vuex \u5E94\u7528\u7684\u6838\u5FC3\u5C31\u662F store\uFF08\u4ED3\u5E93\uFF09\u3002\u201Cstore\u201D \u57FA\u672C\u4E0A\u5C31\u662F\u4E00\u4E2A\u5BB9\u5668\uFF0C\u5B83\u5305\u542B\u7740\u4F60\u7684\u5E94\u7528\u4E2D\u5927\u90E8\u5206\u7684\u72B6\u6001 ( state )\u3002

        - \u25CF Vuex \u7684\u72B6\u6001\u5B58\u50A8\u662F\u54CD\u5E94\u5F0F\u7684\u3002\u5F53 Vue \u7EC4\u4EF6\u4ECE store \u4E2D\u8BFB\u53D6\u72B6\u6001\u7684\u65F6\u5019\uFF0C\u82E5 store \u4E2D\u7684\u72B6\u6001\u53D1\u751F\u53D8\u5316\uFF0C\u90A3\u4E48\u76F8\u5E94\u7684\u7EC4\u4EF6\u4E5F\u4F1A\u76F8\u5E94\u5730\u5F97\u5230\u9AD8\u6548\u66F4\u65B0\u3002
        - \u25CF \u6539\u53D8 store \u4E2D\u7684\u72B6\u6001\u7684\u552F\u4E00\u9014\u5F84\u5C31\u662F\u663E\u5F0F\u5730\u63D0\u4EA4 (commit) mutation\u3002\u8FD9\u6837\u53EF\u4EE5\u65B9\u4FBF\u5730\u8DDF\u8E2A\u6BCF\u4E00\u4E2A\u72B6\u6001\u7684\u53D8\u5316\u3002

- \u6838\u5FC3\u6D41\u7A0B\u53CA\u4E3B\u8981\u529F\u80FD

    - \u25CF Vue Components \u662F vue \u7EC4\u4EF6\uFF0C\u7EC4\u4EF6\u4F1A\u89E6\u53D1\uFF08dispatch\uFF09\u4E00\u4E9B\u4E8B\u4EF6\u6216\u52A8\u4F5C\uFF0C\u4E5F\u5C31\u662F\u56FE\u4E2D\u7684 Actions;
    - \u25CF \u5728\u7EC4\u4EF6\u4E2D\u53D1\u51FA\u7684\u52A8\u4F5C\uFF0C\u80AF\u5B9A\u662F\u60F3\u83B7\u53D6\u6216\u8005\u6539\u53D8\u6570\u636E\u7684\uFF0C\u4F46\u662F\u5728 vuex \u4E2D\uFF0C\u6570\u636E\u662F\u96C6\u4E2D\u7BA1\u7406\u7684\uFF0C\u4E0D\u80FD\u76F4\u63A5\u53BB\u66F4\u6539\u6570\u636E\uFF0C\u6240\u4EE5\u4F1A\u628A\u8FD9\u4E2A\u52A8\u4F5C\u63D0\u4EA4\uFF08Commit\uFF09\u5230 Mutations \u4E2D;
    - \u25CF \u7136\u540E Mutations \u5C31\u53BB\u6539\u53D8\uFF08Mutate\uFF09State \u4E2D\u7684\u6570\u636E;
    - \u25CF \u5F53 State \u4E2D\u7684\u6570\u636E\u88AB\u6539\u53D8\u4E4B\u540E\uFF0C\u5C31\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF08Render\uFF09\u5230 Vue Components \u4E2D\u53BB\uFF0C\u7EC4\u4EF6\u5C55\u793A\u66F4\u65B0\u540E\u7684\u6570\u636E\uFF0C\u5B8C\u6210\u4E00\u4E2A\u6D41\u7A0B\u3002

- \u5404\u6A21\u5757\u5728\u6838\u5FC3\u6D41\u7A0B\u4E2D\u7684\u4E3B\u8981\u529F\u80FD

    - \u25CF Vue Components\u2236 Vue\u7EC4\u4EF6\u3002HTML\u9875\u9762\u4E0A\uFF0C\u8D1F\u8D23\u63A5\u6536\u7528\u6237\u64CD\u4F5C\u7B49\u4EA4\u4E92\u884C\u4E3A\uFF0C\u6267\u884Cdispatch\u65B9\u6CD5\u89E6\u53D1\u5BF9\u5E94action\u8FDB\u884C\u56DE\u5E94\u3002
    - \u25CF dispatch\u2236\u64CD\u4F5C\u884C\u4E3A\u89E6\u53D1\u65B9\u6CD5\uFF0C\u662F\u552F\u4E00\u80FD\u6267\u884Caction\u7684\u65B9\u6CD5\u3002
    - \u25CF actions\u2236 \u64CD\u4F5C\u884C\u4E3A\u5904\u7406\u6A21\u5757\u3002\u8D1F\u8D23\u5904\u7406Vue
      Components\u63A5\u6536\u5230\u7684\u6240\u6709\u4EA4\u4E92\u884C\u4E3A\u3002\u5305\u542B\u540C\u6B65/\u5F02\u6B65\u64CD\u4F5C\uFF0C\u652F\u6301\u591A\u4E2A\u540C\u540D\u65B9\u6CD5\uFF0C\u6309\u7167\u6CE8\u518C\u7684\u987A\u5E8F\u4F9D\u6B21\u89E6\u53D1\u3002\u5411\u540E\u53F0API\u8BF7\u6C42\u7684\u64CD\u4F5C\u5C31\u5728\u8FD9\u4E2A\u6A21\u5757\u4E2D\u8FDB\u884C\uFF0C\u5305\u62EC\u89E6\u53D1\u5176\u4ED6action\u4EE5\u53CA\u63D0\u4EA4mutation\u7684\u64CD\u4F5C\u3002\u8BE5\u6A21\u5757\u63D0\u4F9B\u4E86Promise\u7684\u5C01\u88C5\uFF0C\u4EE5\u652F\u6301action\u7684\u94FE\u5F0F\u89E6\u53D1\u3002
    - \u25CF commit\u2236\u72B6\u6001\u6539\u53D8\u63D0\u4EA4\u64CD\u4F5C\u65B9\u6CD5\u3002\u5BF9mutation\u8FDB\u884C\u63D0\u4EA4\uFF0C\u662F\u552F\u4E00\u80FD\u6267\u884Cmutation\u7684\u65B9\u6CD5\u3002
    - \u25CF mutations\u2236\u72B6\u6001\u6539\u53D8\u64CD\u4F5C\u65B9\u6CD5\u3002\u662FVuex\u4FEE\u6539state\u7684\u552F\u4E00\u63A8\u8350\u65B9\u6CD5\uFF0C\u5176\u4ED6\u4FEE\u6539\u65B9\u5F0F\u5728\u4E25\u683C\u6A21\u5F0F\u4E0B\u5C06\u4F1A\u62A5\u9519\u3002\u8BE5\u65B9\u6CD5\u53EA\u80FD\u8FDB\u884C\u540C\u6B65\u64CD\u4F5C\uFF0C\u4E14\u65B9\u6CD5\u540D\u53EA\u80FD\u5168\u5C40\u552F\u4E00\u3002
    - \u25CF state\u2236 \u9875\u9762\u72B6\u6001\u7BA1\u7406\u5BB9\u5668\u5BF9\u8C61\u3002\u96C6\u4E2D\u5B58\u50A8Vuecomponents\u4E2Ddata\u5BF9\u8C61\u7684\u96F6\u6563\u6570\u636E\uFF0C\u5168\u5C40\u552F\u4E00\uFF0C\u4EE5\u8FDB\u884C\u7EDF\u4E00\u7684\u72B6\u6001\u7BA1\u7406\u3002\u9875\u9762\u663E\u793A\u6240\u9700\u7684\u6570\u636E\u4ECE\u8BE5\u5BF9\u8C61\u4E2D\u8FDB\u884C\u8BFB\u53D6\uFF0C\u5E76\u8FDB\u884C\u72B6\u6001\u66F4\u65B0\u3002
    - \u25CF getters\u2236 state\u5BF9\u8C61\u8BFB\u53D6\u65B9\u6CD5\u3002

- \u603B\u7ED3

    - Vuex \u5B9E\u73B0\u4E86\u4E00\u4E2A\u5355\u5411\u6570\u636E\u6D41\uFF0C\u5728\u5168\u5C40\u62E5\u6709\u4E00\u4E2A State \u5B58\u653E\u6570\u636E\uFF0C\u5F53\u7EC4\u4EF6\u8981\u66F4\u6539 State \u4E2D\u7684\u6570\u636E\u65F6\uFF0C\u5FC5\u987B\u901A\u8FC7 Mutation \u63D0\u4EA4\u4FEE\u6539\u4FE1\u606F\uFF0C Mutation \u540C\u65F6\u63D0\u4F9B\u4E86\u8BA2\u9605\u8005\u6A21\u5F0F\u4F9B\u5916\u90E8\u63D2\u4EF6\u8C03\u7528\u83B7\u53D6 State
      \u6570\u636E\u7684\u66F4\u65B0\u3002\u800C\u5F53\u6240\u6709\u5F02\u6B65\u64CD\u4F5C(\u5E38\u89C1\u4E8E\u8C03\u7528\u540E\u7AEF\u63A5\u53E3\u5F02\u6B65\u83B7\u53D6\u66F4\u65B0\u6570\u636E)\u6216\u6279\u91CF\u7684\u540C\u6B65\u64CD\u4F5C\u9700\u8981\u8D70 Action \uFF0C\u4F46 Action \u4E5F\u662F\u65E0\u6CD5\u76F4\u63A5\u4FEE\u6539 State \u7684\uFF0C\u8FD8\u662F\u9700\u8981\u901A\u8FC7Mutation
      \u6765\u4FEE\u6539State\u7684\u6570\u636E\u3002\u6700\u540E\uFF0C\u6839\u636E State \u7684\u53D8\u5316\uFF0C\u6E32\u67D3\u5230\u89C6\u56FE\u4E0A\u3002
</code></pre><h3 id="\u4E3A\u4EC0\u4E48\u8981\u7528-vuex" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u7528-vuex" aria-hidden="true">#</a> <strong>\u4E3A\u4EC0\u4E48\u8981\u7528 Vuex</strong></h3><ul><li>\u5BF9\u4E8E\u591A\u5C42\u5D4C\u5957\u7684\u7EC4\u4EF6\u4E4B\u95F4\u4F20\u9012\u6570\u636E\u91C7\u53D6\u4F20\u53C2\u6216\u8005\u7EC4\u4EF6\u95F4\u901A\u4FE1\u7684\u65B9\u5F0F\u5C06\u4F1A\u975E\u5E38\u7E41\u7410\uFF0C\u800C\u4E14\u901A\u5E38\u4F1A\u5BFC\u81F4\u4EE3\u7801\u65E0\u6CD5\u7EF4\u62A4\u3002\u6240\u4EE5\u9700\u8981\u628A\u7EC4\u4EF6\u7684\u5171\u4EAB\u72B6\u6001\u62BD\u53D6\u51FA\u6765\uFF0C\u4EE5\u4E00\u4E2A\u5168\u5C40\u5355\u4F8B\u6A21\u5F0F\u7BA1\u7406\u3002\u5728\u8FD9\u79CD\u6A21\u5F0F\u4E0B\uFF0C\u7EC4\u4EF6\u6811\u6784\u6210\u4E86\u4E00\u4E2A\u5DE8\u5927\u7684&quot;\u89C6\u56FE&quot; \uFF0C\u4E0D\u7BA1\u5728\u6811\u7684\u54EA\u4E2A\u4F4D\u7F6E\uFF0C\u4EFB\u4F55\u7EC4\u4EF6\u90FD\u80FD\u83B7\u53D6\u72B6\u6001\u6216\u8005\u89E6\u53D1\u884C\u4E3A\u3002\u53E6\u5916\uFF0C\u901A\u8FC7\u5B9A\u4E49\u548C\u9694\u79BB\u72B6\u6001\u7BA1\u7406\u4E2D\u7684\u5404\u79CD\u6982\u5FF5\u5E76\u5F3A\u5236\u9075\u5B88\u4E00\u5B9A\u7684\u89C4\u5219\uFF0C\u4EE3\u7801\u5C06\u4F1A\u53D8\u5F97\u66F4\u7ED3\u6784\u5316\u4E14\u6613\u7EF4\u62A4\u3002\u800C\u4E14vuex\u4E2D\u7684\u6570\u636E\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u53EA\u8981vuex\u4E2D\u7684\u6570\u636E\u66F4\u65B0\uFF0C\u4F9D\u8D56\u4ED6\u7684\u6570\u636E\u7684\u7EC4\u4EF6\u4E5F\u4F1A\u8DDF\u7740\u66F4\u65B0\u3002</li></ul><h3 id="vuex\u6709\u54EA\u51E0\u79CD\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#vuex\u6709\u54EA\u51E0\u79CD\u5C5E\u6027" aria-hidden="true">#</a> <strong>Vuex\u6709\u54EA\u51E0\u79CD\u5C5E\u6027\uFF1F</strong></h3><ul><li>state =&gt; \u57FA\u672C\u6570\u636E(\u6570\u636E\u6E90\u5B58\u653E\u5730)</li><li>getters =&gt; \u4ECE\u57FA\u672C\u6570\u636E\u6D3E\u751F\u51FA\u6765\u7684\u6570\u636E</li><li>mutations =&gt; \u63D0\u4EA4\u66F4\u6539\u6570\u636E\u7684\u65B9\u6CD5\uFF0C\u540C\u6B65</li><li>actions =&gt; \u50CF\u4E00\u4E2A\u88C5\u9970\u5668\uFF0C\u5305\u88F9mutations\uFF0C\u4F7F\u4E4B\u53EF\u4EE5\u5F02\u6B65\u3002</li><li>modules =&gt; \u6A21\u5757\u5316Vuex</li></ul><h3 id="vuex\u4E2Dactions\u548Cmutations\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#vuex\u4E2Dactions\u548Cmutations\u7684\u533A\u522B" aria-hidden="true">#</a> ** Vuex\u4E2Dactions\u548Cmutations\u7684\u533A\u522B**</h3><ul><li><p>mutations</p><ul><li>mutation\u4E2D\u7684\u64CD\u4F5C\u662F\u4E00\u7CFB\u5217\u7684\u540C\u6B65\u51FD\u6570\uFF0C\u7528\u4E8E\u4FEE\u6539state\u4E2D\u7684\u53D8\u91CF\u7684\u7684\u72B6\u6001\u3002\u5F53\u4F7F\u7528vuex\u65F6\u9700\u8981\u901A\u8FC7commit\u6765\u63D0\u4EA4\u9700\u8981\u64CD\u4F5C\u7684\u5185\u5BB9\u3002</li></ul></li><li><p>actions</p><ul><li>Action \u53EF\u4EE5\u5305\u542B\u4EFB\u610F\u5F02\u6B65\u64CD\u4F5C\uFF0CAction \u63D0\u4EA4\u7684\u662F mutation\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u53D8\u66F4\u72B6\u6001\u3002</li></ul></li><li><p>\u533A\u522B</p><ul><li>Mutation\u4E13\u6CE8\u4E8E\u4FEE\u6539State\uFF0C\u7406\u8BBA\u4E0A\u662F\u4FEE\u6539State\u7684\u552F\u4E00\u9014\u5F84\uFF1BAction\u4E1A\u52A1\u4EE3\u7801\u3001\u5F02\u6B65\u8BF7\u6C42\u3002</li><li>Mutation\uFF1A\u5FC5\u987B\u540C\u6B65\u6267\u884C\uFF1BAction\uFF1A\u53EF\u4EE5\u5F02\u6B65\uFF0C\u4F46\u4E0D\u80FD\u76F4\u63A5\u64CD\u4F5CState\u3002</li><li>\u5728\u89C6\u56FE\u66F4\u65B0\u65F6\uFF0C\u5148\u89E6\u53D1actions\uFF0Cactions\u518D\u89E6\u53D1mutations</li></ul></li></ul><h3 id="\u4E3A\u4EC0\u4E48-vuex-\u7684-mutation-\u4E2D\u4E0D\u80FD\u505A\u5F02\u6B65\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48-vuex-\u7684-mutation-\u4E2D\u4E0D\u80FD\u505A\u5F02\u6B65\u64CD\u4F5C" aria-hidden="true">#</a> <strong>\u4E3A\u4EC0\u4E48 Vuex \u7684 mutation \u4E2D\u4E0D\u80FD\u505A\u5F02\u6B65\u64CD\u4F5C\uFF1F</strong></h3><ul><li>\u6BCF\u4E2Amutation\u6267\u884C\u5B8C\u6210\u540E\u90FD\u4F1A\u5BF9\u5E94\u5230\u4E00\u4E2A\u65B0\u7684\u72B6\u6001\u53D8\u66F4\uFF0C\u8FD9\u6837devtools\u5C31\u53EF\u4EE5\u5C06\u65B0\u7684\u72B6\u6001\u5B58\u4E0B\u6765\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u5B9E\u73B0 \u6570\u636E\u7684\u66F4\u65B0 \u4E86\u3002\u5982\u679Cmutation\u652F\u6301\u5F02\u6B65\u64CD\u4F5C\uFF0C\u5C31\u6CA1\u6709\u529E\u6CD5\u77E5\u9053\u72B6\u6001\u662F\u4F55\u65F6\u66F4\u65B0\u7684\uFF0C\u65E0\u6CD5\u5F88\u597D\u7684\u8FDB\u884C\u72B6\u6001\u7684\u8FFD\u8E2A\uFF0C\u7ED9\u8C03\u8BD5\u5E26\u6765\u56F0\u96BE\u3002</li></ul><h3 id="vuex-\u548C-localstorage-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#vuex-\u548C-localstorage-\u7684\u533A\u522B" aria-hidden="true">#</a> <strong>Vuex \u548C localStorage \u7684\u533A\u522B</strong></h3><ul><li><p>\u5B58\u50A8\u4F4D\u7F6E\u533A\u522B</p><ul><li>\u25CF vuex\u5B58\u50A8\u5728\u5185\u5B58\u4E2D</li><li>\u25CF localstorage \u5219\u4EE5\u6587\u4EF6\u7684\u65B9\u5F0F\u5B58\u50A8\u5728\u672C\u5730\uFF0C\u53EA\u80FD\u5B58\u50A8\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u5B58\u50A8\u5BF9\u8C61\u9700\u8981 JSON\u7684stringify\u548Cparse\u65B9\u6CD5\u8FDB\u884C\u5904\u7406\u3002 \u8BFB\u53D6\u5185\u5B58\u6BD4\u8BFB\u53D6\u786C\u76D8\u901F\u5EA6\u8981\u5FEB</li></ul></li><li><p>\u5E94\u7528\u573A\u666F\u533A\u522B</p><ul><li>\u25CF Vuex \u662F\u4E00\u4E2A\u4E13\u4E3A Vue.js \u5E94\u7528\u7A0B\u5E8F\u5F00\u53D1\u7684\u72B6\u6001\u7BA1\u7406\u6A21\u5F0F\u3002\u5B83\u91C7\u7528\u96C6\u4E2D\u5F0F\u5B58\u50A8\u7BA1\u7406\u5E94\u7528\u7684\u6240\u6709\u7EC4\u4EF6\u7684\u72B6\u6001\uFF0C\u5E76\u4EE5\u76F8\u5E94\u7684\u89C4\u5219\u4FDD\u8BC1\u72B6\u6001\u4EE5\u4E00\u79CD\u53EF\u9884\u6D4B\u7684\u65B9\u5F0F\u53D1\u751F\u53D8\u5316\u3002vuex\u7528\u4E8E\u7EC4\u4EF6\u4E4B\u95F4\u7684\u4F20\u503C\u3002</li><li>\u25CF localstorage\u662F\u672C\u5730\u5B58\u50A8\uFF0C\u662F\u5C06\u6570\u636E\u5B58\u50A8\u5230\u6D4F\u89C8\u5668\u7684\u65B9\u6CD5\uFF0C\u4E00\u822C\u662F\u5728\u8DE8\u9875\u9762\u4F20\u9012\u6570\u636E\u65F6\u4F7F\u7528 \u3002</li></ul></li><li><p>\u54CD\u5E94\u5F0F\u533A\u522B</p><ul><li><p>Vuex\u80FD\u505A\u5230\u6570\u636E\u7684\u54CD\u5E94\u5F0F</p></li><li><p>localstorage\u4E0D\u80FD\u505A\u5230\u6570\u636E\u7684\u54CD\u5E94\u5F0F</p><p>\u5BF9\u4E8E\u4E0D\u53D8\u7684\u6570\u636E\u786E\u5B9E\u53EF\u4EE5\u7528localstorage\u53EF\u4EE5\u4EE3\u66FFvuex\uFF0C\u4F46\u662F\u5F53\u4E24\u4E2A\u7EC4\u4EF6\u5171\u7528\u4E00\u4E2A\u6570\u636E\u6E90\uFF08\u5BF9\u8C61\u6216\u6570\u7EC4\uFF09\u65F6\uFF0C\u5982\u679C\u5176\u4E2D\u4E00\u4E2A\u7EC4\u4EF6\u6539\u53D8\u4E86\u8BE5\u6570\u636E\u6E90\uFF0C\u5E0C\u671B\u53E6\u4E00\u4E2A\u7EC4\u4EF6\u54CD\u5E94\u8BE5\u53D8\u5316\u65F6\uFF0Clocalstorage\u65E0\u6CD5\u505A\u5230</p></li></ul></li><li><p>\u65F6\u6548\u533A\u522B</p><ul><li>\u5237\u65B0\u9875\u9762\u65F6vuex\u5B58\u50A8\u7684\u503C\u4F1A\u4E22\u5931</li><li>\u5237\u65B0\u9875\u9762\u65F6localstorage\u5B58\u50A8\u7684\u503C\u4E0D\u4F1A\u4E22\u5931</li></ul></li></ul><h3 id="vuex\u548C\u5355\u7EAF\u7684\u5168\u5C40\u5BF9\u8C61\u6709\u4EC0\u4E48\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#vuex\u548C\u5355\u7EAF\u7684\u5168\u5C40\u5BF9\u8C61\u6709\u4EC0\u4E48\u533A\u522B" aria-hidden="true">#</a> <strong>Vuex\u548C\u5355\u7EAF\u7684\u5168\u5C40\u5BF9\u8C61\u6709\u4EC0\u4E48\u533A\u522B\uFF1F</strong></h3><ul><li>Vuex \u7684\u72B6\u6001\u5B58\u50A8\u662F\u54CD\u5E94\u5F0F\u7684\u3002\u5F53 Vue \u7EC4\u4EF6\u4ECE store \u4E2D\u8BFB\u53D6\u72B6\u6001\u7684\u65F6\u5019\uFF0C\u82E5 store \u4E2D\u7684\u72B6\u6001\u53D1\u751F\u53D8\u5316\uFF0C\u90A3\u4E48\u76F8\u5E94\u7684\u7EC4\u4EF6\u4E5F\u4F1A\u76F8\u5E94\u5730\u5F97\u5230\u9AD8\u6548\u66F4\u65B0\u3002</li><li>\u4E0D\u80FD\u76F4\u63A5\u6539\u53D8 store \u4E2D\u7684\u72B6\u6001\u3002\u6539\u53D8 store \u4E2D\u7684\u72B6\u6001\u7684\u552F\u4E00\u9014\u5F84\u5C31\u662F\u663E\u5F0F\u5730\u63D0\u4EA4 (commit) mutation\u3002\u8FD9\u6837\u53EF\u4EE5\u65B9\u4FBF\u5730\u8DDF\u8E2A\u6BCF\u4E00\u4E2A\u72B6\u6001\u7684\u53D8\u5316\u3002</li></ul><h3 id="vuex\u7684\u4E25\u683C\u6A21\u5F0F\u662F\u4EC0\u4E48-\u6709\u4EC0\u4E48\u4F5C\u7528-\u5982\u4F55\u5F00\u542F" tabindex="-1"><a class="header-anchor" href="#vuex\u7684\u4E25\u683C\u6A21\u5F0F\u662F\u4EC0\u4E48-\u6709\u4EC0\u4E48\u4F5C\u7528-\u5982\u4F55\u5F00\u542F" aria-hidden="true">#</a> <strong>Vuex\u7684\u4E25\u683C\u6A21\u5F0F\u662F\u4EC0\u4E48,\u6709\u4EC0\u4E48\u4F5C\u7528\uFF0C\u5982\u4F55\u5F00\u542F\uFF1F</strong></h3><ul><li><p>\u4E25\u683C\u6A21\u5F0F\u4F5C\u7528</p><ul><li>\u5728\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0C\u65E0\u8BBA\u4F55\u65F6\u53D1\u751F\u4E86\u72B6\u6001\u53D8\u66F4\u4E14\u4E0D\u662F\u7531mutation\u51FD\u6570\u5F15\u8D77\u7684\uFF0C\u5C06\u4F1A\u629B\u51FA\u9519\u8BEF\u3002\u8FD9\u80FD\u4FDD\u8BC1\u6240\u6709\u7684\u72B6\u6001\u53D8\u66F4\u90FD\u80FD\u88AB\u8C03\u8BD5\u5DE5\u5177\u8DDF\u8E2A\u5230\u3002</li></ul></li><li><p>\u5F00\u542F\u65B9\u5F0F</p><ul><li></li></ul></li></ul><h3 id="\u5982\u4F55\u5728\u7EC4\u4EF6\u4E2D\u6279\u91CF\u4F7F\u7528vuex\u7684getter\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5728\u7EC4\u4EF6\u4E2D\u6279\u91CF\u4F7F\u7528vuex\u7684getter\u5C5E\u6027" aria-hidden="true">#</a> <strong>\u5982\u4F55\u5728\u7EC4\u4EF6\u4E2D\u6279\u91CF\u4F7F\u7528Vuex\u7684getter\u5C5E\u6027</strong></h3><ul><li><p>\u4F7F\u7528mapGetters\u8F85\u52A9\u51FD\u6570, \u5229\u7528\u5BF9\u8C61\u5C55\u5F00\u8FD0\u7B97\u7B26\u5C06getter\u6DF7\u5165computed \u5BF9\u8C61\u4E2D</p><ul><li></li></ul></li></ul><h3 id="\u5982\u4F55\u5728\u7EC4\u4EF6\u4E2D\u91CD\u590D\u4F7F\u7528vuex\u7684mutation" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5728\u7EC4\u4EF6\u4E2D\u91CD\u590D\u4F7F\u7528vuex\u7684mutation" aria-hidden="true">#</a> <strong>\u5982\u4F55\u5728\u7EC4\u4EF6\u4E2D\u91CD\u590D\u4F7F\u7528Vuex\u7684mutation</strong></h3><ul><li><strong>\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u7136\u540E\u8C03\u7528this.setNumber(10)\u76F8\u5F53\u8C03\u7528this.$store.commit(&#39;SET_NUMBER&#39;,10)</strong></li></ul>`,22);function u(n,l){return a}var r=t(i,[["render",u],["__file","vuex.html.vue"]]);export{r as default};
