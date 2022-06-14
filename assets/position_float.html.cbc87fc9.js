import{_ as o,d as e}from"./app.9e56f95d.js";const i={},l=e(`<h1 id="\u4E8C\u3001\u5B9A\u4F4D\u4E0E\u6D6E\u52A8" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5B9A\u4F4D\u4E0E\u6D6E\u52A8" aria-hidden="true">#</a> \u4E8C\u3001\u5B9A\u4F4D\u4E0E\u6D6E\u52A8</h1><h2 id="_001-\u4E3A\u4EC0\u4E48\u9700\u8981\u6E05\u9664\u6D6E\u52A8-\u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_001-\u4E3A\u4EC0\u4E48\u9700\u8981\u6E05\u9664\u6D6E\u52A8-\u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u5F0F" aria-hidden="true">#</a> 001 - \u4E3A\u4EC0\u4E48\u9700\u8981\u6E05\u9664\u6D6E\u52A8\uFF0C\u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u5F0F\uFF1F</h2><p><strong>\u4E3A\u4EC0\u4E48\u6E05\u9664\u6D6E\u52A8</strong></p><ul><li>\u975EIE\u6D4F\u89C8\u5668\u4E0B\uFF0C\u5BB9\u5668\u4E0D\u8BBE\u9AD8\u5EA6\u4E14\u5B50\u5143\u7D20\u6D6E\u52A8\u65F6\uFF0C\u6D6E\u52A8\u7684\u5B50\u5143\u7D20\u8131\u79BB\u6587\u6863\u6D41\uFF0C\u4E0D\u5360\u636E\u7A7A\u95F4\uFF08\u5F15\u8D77\u201C\u9AD8\u5EA6\u584C\u9677\u201D\u73B0\u8C61\uFF09\uFF0C\u7236\u5143\u7D20\u7684\u9AD8\u5EA6\u65E0\u6CD5\u88AB\u6491\u5F00\uFF0C\u5F71\u54CD\u4E0E\u7236\u5143\u7D20\u540C\u7EA7\u7684\u5143\u7D20\uFF0C\u5F71\u54CD\u5E03\u5C40</li></ul><p><strong>\u6E05\u9664\u6D6E\u52A8\u7684\u65B9\u5F0F</strong></p><ul><li>\u7ED9\u7236\u7EA7<code>div</code>\u5B9A\u4E49<code>height</code>\u5C5E\u6027</li><li>\u6700\u540E\u4E00\u4E2A\u6D6E\u52A8\u5143\u7D20\u4E4B\u540E\u6DFB\u52A0\u4E00\u4E2A\u7A7A\u7684div\u6807\u7B7E\uFF0C\u5E76\u6DFB\u52A0<code>clear:both</code>\u6837\u5F0F</li><li>\u5305\u542B\u6D6E\u52A8\u5143\u7D20\u7684\u7236\u7EA7\u6807\u7B7E\u6DFB\u52A0<code>overflow:hidden</code>\u6216\u8005<code>overflow:auto</code></li><li>\u4F7F\u7528 <code>::after</code> \u4F2A\u5143\u7D20\u3002\u7531\u4E8EIE6-7\u4E0D\u652F\u6301 :after\uFF0C\u4F7F\u7528 <code>zoom:1</code> \u89E6\u53D1 hasLayout</li></ul><h2 id="_002-\u4F7F\u7528clear\u5C5E\u6027\u6E05\u9664\u6D6E\u52A8\u7684\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_002-\u4F7F\u7528clear\u5C5E\u6027\u6E05\u9664\u6D6E\u52A8\u7684\u539F\u7406" aria-hidden="true">#</a> 002 - \u4F7F\u7528clear\u5C5E\u6027\u6E05\u9664\u6D6E\u52A8\u7684\u539F\u7406</h2><p>\u4F7F\u7528clear\u5C5E\u6027\u6E05\u9664\u6D6E\u52A8\uFF0C\u5176\u8BED\u6CD5\u5982\u4E0B\uFF1A<code>clear: none|left|right|both</code>\uFF0C\u5B98\u65B9\u5BF9clear\u5C5E\u6027\u89E3\u91CA\uFF1A\u201C\u5143\u7D20\u76D2\u5B50\u7684\u8FB9\u4E0D\u80FD\u548C\u524D\u9762\u7684\u6D6E\u52A8\u5143\u7D20\u76F8\u90BB\u201D\uFF0C\u5BF9\u5143\u7D20\u8BBE\u7F6Eclear\u5C5E\u6027\u662F\u4E3A\u4E86\u907F\u514D\u6D6E\u52A8\u5143\u7D20\u5BF9\u8BE5\u5143\u7D20\u7684\u5F71\u54CD\uFF0C\u800C\u4E0D\u662F\u6E05\u9664\u6389\u6D6E\u52A8\u3002</p><p>\u4E00\u822C\u4F7F\u7528\u4F2A\u5143\u7D20\u7684\u65B9\u5F0F\u6E05\u9664\u6D6E\u52A8\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.clear-fix::after</span> <span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_003-\u5BF9bfc\u7684\u7406\u89E3-\u5982\u4F55\u521B\u5EFAbfc" tabindex="-1"><a class="header-anchor" href="#_003-\u5BF9bfc\u7684\u7406\u89E3-\u5982\u4F55\u521B\u5EFAbfc" aria-hidden="true">#</a> 003 - \u5BF9BFC\u7684\u7406\u89E3\uFF0C\u5982\u4F55\u521B\u5EFABFC</h2><p><strong>BFC\u7406\u89E3</strong></p><ul><li>Box: Box \u662F CSS \u5E03\u5C40\u7684\u5BF9\u8C61\u548C\u57FA\u672C\u5355\u4F4D\uFF0C\u2F00\u4E2A\u2EDA\u2FAF\u662F\u7531\u5F88\u591A\u4E2A Box \u7EC4\u6210\u7684\uFF0C\u8FD9\u4E2ABox\u5C31\u662F\u6211\u4EEC\u6240\u8BF4\u7684\u76D2\u6A21\u578B\u3002</li><li>Formatting context\uFF1A\u5757\u7EA7\u4E0A\u4E0B\u2F42\u683C\u5F0F\u5316\uFF0C\u5B83\u662F\u2EDA\u2FAF\u4E2D\u7684\u2F00\u5757\u6E32\u67D3\u533A\u57DF\uFF0C\u5E76\u4E14\u6709\u2F00\u5957\u6E32\u67D3\u89C4\u5219\uFF0C\u5B83\u51B3\u5B9A\u4E86\u5176\u2F26\u5143\u7D20\u5C06\u5982\u4F55\u5B9A\u4F4D\uFF0C\u4EE5\u53CA\u548C\u5176\u4ED6\u5143\u7D20\u7684\u5173\u7CFB\u548C\u76F8\u4E92\u4F5C\u2F64\u3002</li><li>\u5757\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\uFF08Block Formatting Context\uFF0CBFC\uFF09\u662FWeb\u9875\u9762\u7684\u53EF\u89C6\u5316CSS\u6E32\u67D3\u7684\u4E00\u90E8\u5206\uFF0C\u662F\u5E03\u5C40\u8FC7\u7A0B\u4E2D\u751F\u6210\u5757\u7EA7\u76D2\u5B50\u7684\u533A\u57DF\uFF0C\u4E5F\u662F\u6D6E\u52A8\u5143\u7D20\u4E0E\u5176\u4ED6\u5143\u7D20\u7684\u4EA4\u4E92\u9650\u5B9A\u533A\u57DF\u3002 \u901A\u4FD7\u6765\u8BB2\uFF1ABFC\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u5E03\u5C40\u73AF\u5883\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A\u4E00\u4E2A\u5BB9\u5668\uFF0C\u5728\u8FD9\u4E2A\u5BB9\u5668\u4E2D\u6309\u7167\u4E00\u5B9A\u89C4\u5219\u8FDB\u884C\u7269\u54C1\u6446\u653E\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u5F71\u54CD\u5176\u5B83\u73AF\u5883\u4E2D\u7684\u7269\u54C1\u3002\u5982\u679C\u4E00\u4E2A\u5143\u7D20\u7B26\u5408\u89E6\u53D1BFC\u7684\u6761\u4EF6\uFF0C\u5219BFC\u4E2D\u7684\u5143\u7D20\u5E03\u5C40\u4E0D\u53D7\u5916\u90E8\u5F71\u54CD\u3002</li></ul><p><strong>\u5982\u4F55\u521B\u5EFABFC</strong></p><ul><li>\u6839\u5143\u7D20\uFF1A<code>body</code></li><li>\u5143\u7D20\u8BBE\u7F6E\u6D6E\u52A8\uFF1A<code>float</code> \u9664 <code>none</code> \u4EE5\u5916\u7684\u503C</li><li>\u5143\u7D20\u8BBE\u7F6E\u7EDD\u5BF9\u5B9A\u4F4D\u6216\u8005\u56FA\u5B9A\u5B9A\u4F4D\uFF1A<code>position (absolute\u3001fixed)</code></li><li><code>display</code> \u503C\u4E3A\uFF1A<code>inline-block</code>\u3001<code>table-cell</code>\u3001<code>table-caption</code>\u3001<code>flex</code>\u7B49</li><li><code>overflow</code> \u503C\u4E3A\uFF1A<code>hidden</code>\u3001<code>auto</code>\u3001<code>scroll</code></li></ul><p><strong>BFC\u7279\u70B9</strong></p><ul><li>\u5782\u76F4\u65B9\u5411\u4E0A\uFF0C\u81EA\u4E0A\u800C\u4E0B\u6392\u5217\uFF0C\u548C\u6587\u6863\u6D41\u7684\u6392\u5217\u65B9\u5F0F\u4E00\u81F4\u3002</li><li>\u5728BFC\u4E2D\u4E0A\u4E0B\u76F8\u90BB\u7684\u4E24\u4E2A\u5BB9\u5668\u7684margin\u4F1A\u91CD\u53E0</li><li>\u8BA1\u7B97BFC\u7684\u9AD8\u5EA6\u65F6\uFF0C\u9700\u8981\u8BA1\u7B97\u6D6E\u52A8\u5143\u7D20\u7684\u9AD8\u5EA6</li><li>BFC\u533A\u57DF\u4E0D\u4F1A\u4E0E\u6D6E\u52A8\u7684\u5BB9\u5668\u53D1\u751F\u91CD\u53E0</li><li>BFC\u662F\u72EC\u7ACB\u7684\u5BB9\u5668\uFF0C\u5BB9\u5668\u5185\u90E8\u5143\u7D20\u4E0D\u4F1A\u5F71\u54CD\u5916\u90E8\u5143\u7D20</li><li>\u6BCF\u4E2A\u5143\u7D20\u7684\u5DE6margin\u503C\u548C\u5BB9\u5668\u7684\u5DE6border\u76F8\u63A5\u89E6</li></ul><p><strong>BFC\u5E94\u7528</strong></p><ul><li><p>\u89E3\u51B3margin\u7684\u91CD\u53E0\u95EE\u9898</p><ul><li>\u7531\u4E8EBFC\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u533A\u57DF\uFF0C\u5185\u90E8\u7684\u5143\u7D20\u548C\u5916\u90E8\u7684\u5143\u7D20\u4E92\u4E0D\u5F71\u54CD\uFF0C\u5C06\u4E24\u4E2A\u5143\u7D20\u53D8\u4E3A\u4E24\u4E2ABFC\uFF0C\u5C31\u89E3\u51B3\u4E86margin\u91CD\u53E0\u7684\u95EE\u9898\u3002</li></ul></li><li><p>\u89E3\u51B3\u9AD8\u5EA6\u584C\u9677\u7684\u95EE\u9898</p><ul><li>\u5728\u5BF9\u5B50\u5143\u7D20\u8BBE\u7F6E\u6D6E\u52A8\u540E\uFF0C\u7236\u5143\u7D20\u4F1A\u53D1\u751F\u9AD8\u5EA6\u584C\u9677\uFF0C\u4E5F\u5C31\u662F\u7236\u5143\u7D20\u7684\u9AD8\u5EA6\u53D8\u4E3A0\u3002\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u53EA\u9700\u8981\u628A\u7236\u5143\u7D20\u53D8\u6210\u4E00\u4E2ABFC\u3002\u5E38\u7528\u7684\u529E\u6CD5\u662F\u7ED9\u7236\u5143\u7D20\u8BBE\u7F6Eoverflow:hidden\u3002</li></ul></li><li><p>\u521B\u5EFA\u81EA\u9002\u5E94\u4E24\u680F\u5E03\u5C40</p><ul><li>\u53EF\u4EE5\u7528\u6765\u521B\u5EFA\u81EA\u9002\u5E94\u4E24\u680F\u5E03\u5C40\uFF1A\u5DE6\u8FB9\u7684\u5BBD\u5EA6\u56FA\u5B9A\uFF0C\u53F3\u8FB9\u7684\u5BBD\u5EA6\u81EA\u9002\u5E94\u3002</li></ul></li></ul><h2 id="_004-\u4EC0\u4E48\u662Fmargin\u91CD\u53E0\u95EE\u9898-\u5982\u4F55\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#_004-\u4EC0\u4E48\u662Fmargin\u91CD\u53E0\u95EE\u9898-\u5982\u4F55\u89E3\u51B3" aria-hidden="true">#</a> 004 - \u4EC0\u4E48\u662Fmargin\u91CD\u53E0\u95EE\u9898\uFF1F\u5982\u4F55\u89E3\u51B3</h2><p><strong>margin\u91CD\u53E0\u95EE\u9898</strong></p><p>\u4E00\u4E2A\u5757\u7EA7\u5143\u7D20\u7684\u4E0A\u5916\u8FB9\u8DDD\u548C\u4E0B\u5916\u8FB9\u8DDD\u53EF\u80FD\u4F1A\u5408\u5E76\uFF08\u6298\u53E0\uFF09\u4E3A\u4E00\u4E2A\u5916\u8FB9\u8DDD\uFF0C\u5176\u5927\u5C0F\u4F1A\u53D6\u5176\u4E2D\u5916\u8FB9\u8DDD\u503C\u5927\u7684\u90A3\u4E2A\uFF0C\u8FD9\u79CD\u884C\u4E3A\u5C31\u662F\u5916\u8FB9\u8DDD\u6298\u53E0\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6D6E\u52A8\u7684\u5143\u7D20\u548C\u7EDD\u5BF9\u5B9A\u4F4D\u8FD9\u79CD\u8131\u79BB\u6587\u6863\u6D41\u7684\u5143\u7D20\u7684\u5916\u8FB9\u8DDD\u4E0D\u4F1A\u6298\u53E0\u3002\u91CD\u53E0\u53EA\u4F1A\u51FA\u73B0\u5728\u5782\u76F4\u65B9\u5411\u3002\u53EA\u6709\u5757\u7EA7\u5143\u7D20\u4F1A\u89E6\u53D1\u5916\u8FB9\u8DDD\u584C\u9677\u7684\u95EE\u9898</p><p><strong>\u8BA1\u7B97\u539F\u5219</strong></p><ul><li>\u5982\u679C\u4E24\u8005\u90FD\u662F\u6B63\u6570\uFF0C\u90A3\u4E48\u5C31\u53BB\u6700\u5927\u8005</li><li>\u5982\u679C\u662F\u4E00\u6B63\u4E00\u8D1F\uFF0C\u5C31\u4F1A\u6B63\u503C\u51CF\u53BB\u8D1F\u503C\u7684\u7EDD\u5BF9\u503C</li><li>\u4E24\u4E2A\u90FD\u662F\u8D1F\u503C\u65F6\uFF0C\u75280\u51CF\u53BB\u4E24\u4E2A\u4E2D\u7EDD\u5BF9\u503C\u5927\u7684\u90A3\u4E2A</li></ul><p><strong>\u89E3\u51B3\u65B9\u6848</strong></p><ul><li><p>\u5144\u5F1F\u4E4B\u95F4\u91CD\u53E0</p><ul><li>\u5E95\u90E8\u5143\u7D20\u53D8\u4E3A\u884C\u5185\u76D2\u5B50\uFF1A<code>display: inline-block</code></li><li>\u5E95\u90E8\u5143\u7D20\u8BBE\u7F6E\u6D6E\u52A8\uFF1A<code>float</code></li><li>\u5E95\u90E8\u5143\u7D20\u7684 <code>position</code> \u7684\u503C\u4E3A<code>absolute/fixed</code></li></ul></li><li><p>\u7236\u5B50\u4E4B\u95F4\u91CD\u53E0</p><ul><li>\u7236\u5143\u7D20\u52A0\u5165\uFF1A<code>overflow: hidden</code></li><li>\u7236\u5143\u7D20\u6DFB\u52A0\u900F\u660E\u8FB9\u6846\uFF1A<code>border:1px solid transparent</code></li><li>\u5B50\u5143\u7D20\u53D8\u4E3A\u884C\u5185\u76D2\u5B50\uFF1A<code>display: inline-block</code></li><li>\u5B50\u5143\u7D20\u52A0\u5165\u6D6E\u52A8\u5C5E\u6027\u6216\u5B9A\u4F4D</li></ul></li></ul><h2 id="_005-\u5143\u7D20\u7684\u5C42\u53E0\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#_005-\u5143\u7D20\u7684\u5C42\u53E0\u987A\u5E8F" aria-hidden="true">#</a> 005 - \u5143\u7D20\u7684\u5C42\u53E0\u987A\u5E8F</h2><p>\u5C42\u53E0\u987A\u5E8F\uFF0C\u82F1\u6587\u79F0\u4F5C stacking order\uFF0C\u8868\u793A\u5143\u7D20\u53D1\u751F\u5C42\u53E0\u65F6\u6709\u7740\u7279\u5B9A\u7684\u5782\u76F4\u663E\u793A\u987A\u5E8F\u3002</p><ul><li>\u80CC\u666F\u548C\u8FB9\u6846\uFF1A\u5EFA\u7ACB\u5F53\u524D\u5C42\u53E0\u4E0A\u4E0B\u6587\u5143\u7D20\u7684\u80CC\u666F\u548C\u8FB9\u6846\u3002</li><li>\u8D1F\u7684z-index\uFF1A\u5F53\u524D\u5C42\u53E0\u4E0A\u4E0B\u6587\u4E2D\uFF0Cz-index\u5C5E\u6027\u503C\u4E3A\u8D1F\u7684\u5143\u7D20\u3002</li><li>\u5757\u7EA7\u76D2\uFF1A\u6587\u6863\u6D41\u5185\u975E\u884C\u5185\u7EA7\u975E\u5B9A\u4F4D\u540E\u4EE3\u5143\u7D20\u3002</li><li>\u6D6E\u52A8\u76D2\uFF1A\u975E\u5B9A\u4F4D\u6D6E\u52A8\u5143\u7D20\u3002</li><li>\u884C\u5185\u76D2\uFF1A\u6587\u6863\u6D41\u5185\u884C\u5185\u7EA7\u975E\u5B9A\u4F4D\u540E\u4EE3\u5143\u7D20\u3002</li><li>z-index:0\uFF1A\u5C42\u53E0\u7EA7\u6570\u4E3A0\u7684\u5B9A\u4F4D\u5143\u7D20\u3002</li><li>\u6B63z-index\uFF1Az-index\u5C5E\u6027\u503C\u4E3A\u6B63\u7684\u5B9A\u4F4D\u5143\u7D20\u3002</li></ul><h2 id="_006-position\u7684\u5C5E\u6027\u6709\u54EA\u4E9B-\u533A\u522B\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_006-position\u7684\u5C5E\u6027\u6709\u54EA\u4E9B-\u533A\u522B\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 006 - <code>position</code>\u7684\u5C5E\u6027\u6709\u54EA\u4E9B\uFF1F\u533A\u522B\u662F\u4EC0\u4E48</h2><p><strong><code>static</code></strong>\uFF1A\u9ED8\u8BA4\u503C\uFF0C\u6CA1\u6709\u5B9A\u4F4D\uFF0C\u5143\u7D20\u51FA\u73B0\u5728\u6B63\u5E38\u7684\u6587\u6863\u6D41\u4E2D\uFF0C\u4F1A\u5FFD\u7565 top, bottom, left, right \u6216\u8005 z-index \u58F0\u660E\uFF0C\u5757\u7EA7\u5143\u7D20\u4ECE\u4E0A\u5F80\u4E0B\u7EB5\u5411\u6392\u5E03\uFF0C\u2F8F\u7EA7\u5143\u7D20\u4ECE\u5DE6\u5411\u53F3\u6392\u5217\u3002</p><p><strong><code>relative</code></strong>\uFF1A\u751F\u6210\u76F8\u5BF9\u5B9A\u4F4D\u7684\u5143\u7D20\uFF0C\u76F8\u5BF9\u4E8E\u5176\u539F\u6765\u7684\u4F4D\u7F6E\u8FDB\u884C\u5B9A\u4F4D\u3002\u5143\u7D20\u7684\u4F4D\u7F6E\u901A\u8FC7left\u3001top\u3001right\u3001bottom\u5C5E\u6027\u8FDB\u884C\u89C4\u5B9A\u3002\u5143\u7D20\u7684\u5B9A\u4F4D\u6C38\u8FDC\u662F\u76F8\u5BF9\u4E8E\u5143\u7D20\u81EA\u8EAB\u4F4D\u7F6E\u7684\uFF0C\u548C\u5176\u4ED6\u5143\u7D20\u6CA1\u5173\u7CFB\uFF0C\u4E5F\u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6\u5143\u7D20\u3002</p><p><strong><code>absolute</code></strong>\uFF1A\u751F\u6210\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u5143\u7D20\uFF0C\u76F8\u5BF9\u4E8Estatic\u5B9A\u4F4D\u4EE5\u5916\u7684\u4E00\u4E2A\u6709\u5B9A\u4F4D\u7684\u7236\u5143\u7D20\u8FDB\u884C\u5B9A\u4F4D\u3002\u5143\u7D20\u7684\u4F4D\u7F6E\u901A\u8FC7left\u3001top\u3001right\u3001bottom\u5C5E\u6027\u8FDB\u884C\u89C4\u5B9A\u3002 \u5143\u7D20\u7684\u5B9A\u4F4D\u76F8\u5BF9\u4E8E\u524D\u4E24\u8005\u8981\u590D\u6742\u8BB8\u591A\u3002\u5982\u679C\u4E3A <code>absolute</code> \u8BBE\u7F6E\u4E86 top\u3001left\uFF0C\u6D4F\u89C8\u5668\u4F1A\u6839\u636E\u4EC0\u4E48\u53BB\u786E\u5B9A\u5B83\u7684\u7EB5\u5411\u548C\u6A2A\u5411\u7684\u504F\u79FB\u91CF\u5462\uFF1F\u7B54\u6848\u662F\u6D4F\u89C8\u5668\u4F1A\u9012\u5F52\u67E5\u627E\u8BE5\u5143\u7D20\u7684\u6240\u6709\u7236\u5143\u7D20\uFF0C\u5982\u679C\u627E\u5230\u4E00\u4E2A\u8BBE\u7F6E\u4E86<code>position:relative/absolute/fixed</code> \u7684\u5143\u7D20\uFF0C\u5C31\u4EE5\u8BE5\u5143\u7D20\u4E3A\u57FA\u51C6\u5B9A\u4F4D\uFF0C\u5982\u679C\u6CA1\u627E\u5230\uFF0C\u5C31\u4EE5\u6D4F\u89C8\u5668\u8FB9\u754C\u5B9A\u4F4D\u3002</p><p><strong><code>fixed</code></strong>\uFF1A\u751F\u6210\u56FA\u5B9A\u5B9A\u4F4D\u7684\u5143\u7D20\uFF0C\u6307\u5B9A\u5143\u7D20\u76F8\u5BF9\u4E8E\u5C4F\u5E55\u89C6\u2F1D\uFF08viewport\uFF09\u7684\u4F4D\u7F6E\u6765\u6307\u5B9A\u5143\u7D20\u4F4D\u7F6E\u3002\u5143\u7D20\u7684\u4F4D\u7F6E\u5728\u5C4F\u5E55\u6EDA\u52A8\u65F6\u4E0D\u4F1A\u6539\u53D8\uFF0C\u2F50\u5982\u56DE\u5230\u9876\u90E8\u7684\u6309\u94AE\u2F00\u822C\u90FD\u662F\u2F64\u6B64\u5B9A\u4F4D\u2F45\u5F0F\u3002 \u5143\u7D20\u7684\u5B9A\u4F4D\u662F\u76F8\u5BF9\u4E8E window \uFF08\u6216\u8005 iframe\uFF09\u8FB9\u754C\u7684\uFF0C\u548C\u5176\u4ED6\u5143\u7D20\u6CA1\u6709\u5173\u7CFB\u3002\u4F46\u662F\u5B83\u5177\u6709\u7834\u574F\u6027\uFF0C\u4F1A\u5BFC\u81F4\u5176\u4ED6\u5143\u7D20\u4F4D\u7F6E\u7684\u53D8\u5316\u3002</p><p><strong><code>sticky</code></strong>\uFF1A\u7C98\u6027\u5B9A\u4F4D\uFF0C\u57FA\u4E8E\u7528\u6237\u7684\u6EDA\u52A8\u4F4D\u7F6E\u6765\u5B9A\u4F4D\u3002\u5143\u7D20\u5B9A\u4F4D\u8868\u73B0\u4E3A\u5728\u8DE8\u8D8A\u7279\u5B9A\u9608\u503C\u524D\u4E3A\u76F8\u5BF9\u5B9A\u4F4D\uFF0C\u4E4B\u540E\u4E3A\u56FA\u5B9A\u5B9A\u4F4D\u3002\u8FD9\u4E2A\u7279\u5B9A\u9608\u503C\u6307\u7684\u662F top, right, bottom \u6216 left \u4E4B\u4E00\uFF0C\u6362\u8A00\u4E4B\uFF0C\u6307\u5B9A top, right, bottom \u6216 left \u56DB\u4E2A\u9608\u503C\u5176\u4E2D\u4E4B\u4E00\uFF0C\u624D\u53EF\u4F7F\u7C98\u6027\u5B9A\u4F4D\u751F\u6548\u3002\u5426\u5219\u5176\u884C\u4E3A\u4E0E\u76F8\u5BF9\u5B9A\u4F4D\u76F8\u540C\u3002</p><p><strong><code>inherit</code></strong>\uFF1A\u89C4\u5B9A\u4ECE\u7236\u5143\u7D20\u7EE7\u627F <code>position</code> \u5C5E\u6027\u7684\u503C</p><h2 id="_007-display\u3001float\u3001position\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_007-display\u3001float\u3001position\u7684\u5173\u7CFB" aria-hidden="true">#</a> 007 - <code>display</code>\u3001<code>float</code>\u3001<code>position</code>\u7684\u5173\u7CFB</h2><ol><li><p>\u9996\u5148\u5224\u65ADdisplay\u5C5E\u6027\u662F\u5426\u4E3Anone\uFF0C\u5982\u679C\u4E3Anone\uFF0C\u5219position\u548Cfloat\u5C5E\u6027\u7684\u503C\u4E0D\u5F71\u54CD\u5143\u7D20\u6700\u540E\u7684\u8868\u73B0\u3002</p></li><li><p>\u7136\u540E\u5224\u65ADposition\u7684\u503C\u662F\u5426\u4E3Aabsolute\u6216\u8005fixed\uFF0C</p><ul><li>\u5982\u679C\u662F\uFF0C\u5219float\u5C5E\u6027\u5931\u6548\uFF0C\u5E76\u4E14display\u7684\u503C\u5E94\u8BE5\u88AB\u8BBE\u7F6E\u4E3Atable\u6216\u8005block\uFF0C\u5177\u4F53\u8F6C\u6362\u9700\u8981\u770B\u521D\u59CB\u8F6C\u6362\u503C\u3002 \u5982\u679Cposition\u7684\u503C\u4E0D\u4E3Aabsolute\u6216\u8005fixed\uFF0C\u5219\u5224\u65ADfloat\u5C5E\u6027\u7684\u503C\u662F\u5426\u4E3Anone\uFF0C</li><li>\u5982\u679C\u4E0D\u662F\uFF0C\u5219display\u7684\u503C\u5219\u6309\u4E0A\u9762\u7684\u89C4\u5219\u8F6C\u6362\u3002\u6CE8\u610F\uFF0C\u5982\u679Cposition\u7684\u503C\u4E3Arelative\u5E76\u4E14float\u5C5E\u6027\u7684\u503C\u5B58\u5728\uFF0C\u5219relative\u76F8\u5BF9\u4E8E\u6D6E\u52A8\u540E\u7684\u6700\u7EC8\u4F4D\u7F6E\u5B9A\u4F4D\u3002</li></ul></li><li><p>\u5982\u679Cfloat\u7684\u503C\u4E3Anone\uFF0C\u5219\u5224\u65AD\u5143\u7D20\u662F\u5426\u4E3A\u6839\u5143\u7D20\uFF0C\u5982\u679C\u662F\u6839\u5143\u7D20\u5219display\u5C5E\u6027\u6309\u7167\u4E0A\u9762\u7684\u89C4\u5219\u8F6C\u6362\uFF0C\u5982\u679C\u4E0D\u662F\uFF0C\u5219\u4FDD\u6301\u6307\u5B9A\u7684display\u5C5E\u6027\u503C\u4E0D\u53D8\u3002</p></li></ol><p>\u603B\u7684\u6765\u8BF4\uFF0C\u53EF\u4EE5\u628A\u5B83\u770B\u4F5C\u662F\u4E00\u4E2A\u7C7B\u4F3C\u4F18\u5148\u7EA7\u7684\u673A\u5236\uFF0C&quot;position:absolute&quot;\u548C&quot;position:fixed&quot;\u4F18\u5148\u7EA7\u6700\u9AD8\uFF0C\u6709\u5B83\u5B58\u5728\u7684\u65F6\u5019\uFF0C\u6D6E\u52A8\u4E0D\u8D77\u4F5C\u7528\uFF0C&#39;display&#39;\u7684\u503C\u4E5F\u9700\u8981\u8C03\u6574\uFF1B\u5176\u6B21\uFF0C\u5143\u7D20\u7684&#39;float&#39;\u7279\u6027\u7684\u503C\u4E0D\u662F&quot; none&quot;\u7684\u65F6\u5019\u6216\u8005\u5B83\u662F\u6839\u5143\u7D20\u7684\u65F6\u5019\uFF0C\u8C03\u6574&#39;display&#39;\u7684\u503C\uFF1B\u6700\u540E\uFF0C\u975E\u6839\u5143\u7D20\uFF0C\u5E76\u4E14\u975E\u6D6E\u52A8\u5143\u7D20\uFF0C\u5E76\u4E14\u975E\u7EDD\u5BF9\u5B9A\u4F4D\u7684\u5143\u7D20\uFF0C&#39;display&#39;\u7279\u6027\u503C\u540C\u8BBE\u7F6E\u503C\u3002</p><h2 id="_008-absolute\u548Cfixed\u7684\u5171\u540C\u70B9\u548C\u4E0D\u540C\u70B9" tabindex="-1"><a class="header-anchor" href="#_008-absolute\u548Cfixed\u7684\u5171\u540C\u70B9\u548C\u4E0D\u540C\u70B9" aria-hidden="true">#</a> 008 - <code>absolute</code>\u548C<code>fixed</code>\u7684\u5171\u540C\u70B9\u548C\u4E0D\u540C\u70B9</h2><p><strong>\u5171\u540C\u70B9</strong></p><ul><li>\u6539\u53D8\u884C\u5185\u5143\u7D20\u7684\u5448\u73B0\u65B9\u5F0F\uFF0C\u5C06display\u7F6E\u4E3Ainline-block</li><li>\u5B50\u4E3B\u9898\u4F7F\u5143\u7D20\u8131\u79BB\u666E\u901A\u6587\u6863\u6D41\uFF0C\u4E0D\u518D\u5360\u636E\u6587\u6863\u7269\u7406\u7A7A\u95F4</li><li>\u8986\u76D6\u975E\u5B9A\u4F4D\u6587\u6863\u5143\u7D20</li></ul><p>\u4E0D\u540C\u70B9</p><ul><li>absolute\u4E0Efixed\u7684\u6839\u5143\u7D20\u4E0D\u540C\uFF0Cabsolute\u7684\u6839\u5143\u7D20\u53EF\u4EE5\u8BBE\u7F6E\uFF0Cfixed\u6839\u5143\u7D20\u662F\u6D4F\u89C8\u5668\u3002</li><li>\u5728\u6709\u6EDA\u52A8\u6761\u7684\u9875\u9762\u4E2D\uFF0Cabsolute\u4F1A\u8DDF\u7740\u7236\u5143\u7D20\u8FDB\u884C\u79FB\u52A8\uFF0Cfixed\u56FA\u5B9A\u5728\u9875\u9762\u7684\u5177\u4F53\u4F4D\u7F6E\u3002</li></ul><h2 id="_009-\u5BF9sticky\u5B9A\u4F4D\u7684\u7406\u89E3" tabindex="-1"><a class="header-anchor" href="#_009-\u5BF9sticky\u5B9A\u4F4D\u7684\u7406\u89E3" aria-hidden="true">#</a> 009 - \u5BF9<code>sticky</code>\u5B9A\u4F4D\u7684\u7406\u89E3</h2><p><code>sticky</code> \u82F1\u6587\u5B57\u9762\u610F\u601D\u662F\u7C98\u8D34\uFF0C\u6240\u4EE5\u53EF\u4EE5\u628A\u5B83\u79F0\u4E4B\u4E3A\u7C98\u6027\u5B9A\u4F4D\u3002\u8BED\u6CD5\uFF1Aposition: sticky; \u57FA\u4E8E\u7528\u6237\u7684\u6EDA\u52A8\u4F4D\u7F6E\u6765\u5B9A\u4F4D\u3002</p><p>\u7C98\u6027\u5B9A\u4F4D\u7684\u5143\u7D20\u662F\u4F9D\u8D56\u4E8E\u7528\u6237\u7684\u6EDA\u52A8\uFF0C\u5728 <code>position:relative</code> \u4E0E <code>position:fixed</code> \u5B9A\u4F4D\u4E4B\u95F4\u5207\u6362\u3002\u5B83\u7684\u884C\u4E3A\u5C31\u50CF position:relative; \u800C\u5F53\u9875\u9762\u6EDA\u52A8\u8D85\u51FA\u76EE\u6807\u533A\u57DF\u65F6\uFF0C\u5B83\u7684\u8868\u73B0\u5C31\u50CF position: fixed;\uFF0C\u5B83\u4F1A\u56FA\u5B9A\u5728\u76EE\u6807\u4F4D\u7F6E\u3002\u5143\u7D20\u5B9A\u4F4D\u8868\u73B0\u4E3A\u5728\u8DE8\u8D8A\u7279\u5B9A\u9608\u503C\u524D\u4E3A\u76F8\u5BF9\u5B9A\u4F4D\uFF0C\u4E4B\u540E\u4E3A\u56FA\u5B9A\u5B9A\u4F4D\u3002\u8FD9\u4E2A\u7279\u5B9A\u9608\u503C\u6307\u7684\u662F top, right, bottom \u6216 left \u4E4B\u4E00\uFF0C\u6362\u8A00\u4E4B\uFF0C\u6307\u5B9A top, right, bottom \u6216 left \u56DB\u4E2A\u9608\u503C\u5176\u4E2D\u4E4B\u4E00\uFF0C\u624D\u53EF\u4F7F\u7C98\u6027\u5B9A\u4F4D\u751F\u6548\u3002\u5426\u5219\u5176\u884C\u4E3A\u4E0E\u76F8\u5BF9\u5B9A\u4F4D\u76F8\u540C\u3002</p>`,47);function a(t,n){return l}var d=o(i,[["render",a],["__file","position_float.html.vue"]]);export{d as default};