import{_ as n,d as s}from"./app.9e56f95d.js";const a={},e=s(`<h1 id="\u4E09\u3001\u7EC4\u4EF6\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u7EC4\u4EF6\u901A\u4FE1" aria-hidden="true">#</a> \u4E09\u3001\u7EC4\u4EF6\u901A\u4FE1</h1><h2 id="_01-props-\u7236\u5B50" tabindex="-1"><a class="header-anchor" href="#_01-props-\u7236\u5B50" aria-hidden="true">#</a> 01 - <code>props</code>(\u7236\u5B50)</h2><p><strong>\u7236\u7EC4\u4EF6</strong>\uFF1A<code>&lt;Children name=&quot;jack&quot; age=18 /&gt;</code></p><p><strong>\u5B50\u7EC4\u4EF6</strong>\uFF1A\u4E09\u79CD\u63A5\u6536\u65B9\u5F0F</p><ol><li><code>props: [&#39;name&#39;,&#39;age&#39;],</code></li><li><code>props: {name: String, age: Number}</code></li><li><code>props: {name: {type: String, required: true}, age: {type: Number, default: 18}}</code></li></ol><p>props\u53EA\u80FD\u662F\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u8FDB\u884C\u4F20\u503C\uFF0Cprops\u4F7F\u5F97\u7236\u5B50\u7EC4\u4EF6\u4E4B\u95F4\u5F62\u6210\u4E86\u4E00\u4E2A\u5355\u5411\u4E0B\u884C\u7ED1\u5B9A\u3002\u5B50\u7EC4\u4EF6\u7684\u6570\u636E\u4F1A\u968F\u7740\u7236\u7EC4\u4EF6\u4E0D\u65AD\u66F4\u65B0\u3002</p><p>props \u53EF\u4EE5\u663E\u793A\u5B9A\u4E49\u4E00\u4E2A\u6216\u4E00\u4E2A\u4EE5\u4E0A\u7684\u6570\u636E\uFF0C\u5BF9\u4E8E\u63A5\u6536\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u662F\u5404\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u540C\u6837\u4E5F\u53EF\u4EE5\u4F20\u9012\u4E00\u4E2A\u51FD\u6570\u3002</p><h2 id="_02-provide-inject-\u7236\u5B50" tabindex="-1"><a class="header-anchor" href="#_02-provide-inject-\u7236\u5B50" aria-hidden="true">#</a> 02 - <code>provide</code> <code>inject</code>(\u7236\u5B50)</h2><p>\u8FD9\u79CD\u65B9\u5F0F\u5C31\u662FVue\u4E2D\u7684\u4F9D\u8D56\u6CE8\u5165\uFF0C\u8BE5\u65B9\u6CD5\u7528\u4E8E\u7236\u5B50\u7EC4\u4EF6\u4E4B\u95F4\u7684\u901A\u4FE1\u3002\u5F53\u7136\u8FD9\u91CC\u6240\u8BF4\u7684\u7236\u5B50\u4E0D\u4E00\u5B9A\u662F\u771F\u6B63\u7684\u7236\u5B50\uFF0C\u4E5F\u53EF\u4EE5\u662F\u7956\u5B59\u7EC4\u4EF6\uFF0C\u5728\u5C42\u6570\u5F88\u6DF1\u7684\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u4F7F\u7528\u8FD9\u79CD\u65B9\u6CD5\u6765\u8FDB\u884C\u4F20\u503C\u3002\u5C31\u4E0D\u7528\u4E00\u5C42\u4E00\u5C42\u7684\u4F20\u9012\u4E86\u3002</p><p>provide / inject\u662FVue\u63D0\u4F9B\u7684\u4E24\u4E2A\u94A9\u5B50\uFF0C\u548Cdata\u3001methods\u662F\u540C\u7EA7\u7684\u3002\u5E76\u4E14provide\u7684\u4E66\u5199\u5F62\u5F0F\u548Cdata\u4E00\u6837\u3002</p><p>provide \u94A9\u5B50\u7528\u6765\u53D1\u9001\u6570\u636E\u6216\u65B9\u6CD5</p><p>inject\u94A9\u5B50\u7528\u6765\u63A5\u6536\u6570\u636E\u6216\u65B9\u6CD5</p><h2 id="_03-emit-\u7236\u5B50" tabindex="-1"><a class="header-anchor" href="#_03-emit-\u7236\u5B50" aria-hidden="true">#</a> 03 - <code>$emit</code>(\u7236\u5B50)</h2><p>\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF08$emit\uFF09</p><h2 id="_04-ref-refs-\u7236\u5B50" tabindex="-1"><a class="header-anchor" href="#_04-ref-refs-\u7236\u5B50" aria-hidden="true">#</a> 04 - <code>ref</code> <code>$refs</code>(\u7236\u5B50)</h2><p>\u5E94\u7528\u5728 <code>html</code> \u6807\u7B7E\u4E0A\u83B7\u53D6\u7684\u662F\u771F\u5B9E <code>DOM</code> \u5143\u7D20\uFF0C\u5E94\u7528\u5728\u7EC4\u4EF6\u6807\u7B7E\u4E0A\u662F<strong>\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61\uFF08vc\uFF09</strong>\u3002\u53EF\u4EE5\u901A\u8FC7\u5B9E\u4F8B\u6765\u8BBF\u95EE\u7EC4\u4EF6\u7684\u6570\u636E\u548C\u65B9\u6CD5\u3002</p><p><strong>\u4F7F\u7528\u65B9\u5F0F</strong></p><p>\u6253\u6807\u8BC6\uFF1A<code>&lt;h1 ref=&quot;xxx&quot;&gt; ... &lt;/h1&gt;\u6216&lt;School ref=&quot;xxx&quot;&gt;&lt;/School&gt;</code></p><p>\u83B7\u53D6\uFF1A<code>this.$refs.xxx</code></p><h2 id="_05-parent-children" tabindex="-1"><a class="header-anchor" href="#_05-parent-children" aria-hidden="true">#</a> 05 - <code>$parent</code> <code>$children</code></h2><p>\u4F7F\u7528$parent\u53EF\u4EE5\u8BA9\u7EC4\u4EF6\u8BBF\u95EE\u7236\u7EC4\u4EF6\u7684\u5B9E\u4F8B\uFF08\u8BBF\u95EE\u7684\u662F\u4E0A\u4E00\u7EA7\u7236\u7EC4\u4EF6\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF09\u3010\u5BF9\u8C61\u3011 \u4F7F\u7528$children\u53EF\u4EE5\u8BA9\u7EC4\u4EF6\u8BBF\u95EE\u5B50\u7EC4\u4EF6\u7684\u5B9E\u4F8B\uFF0C\u4F46\u662F\uFF0C$children\u5E76\u4E0D\u80FD\u4FDD\u8BC1\u987A\u5E8F\uFF08\u5982\u679C\u6709\u591A\u4E2A\u5B69\u5B50\uFF0C\u4E0D\u8981\u7528\u7D22\u5F15\u7684\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u7528$refs\u6253\u6807\u8BB0\uFF09\uFF0C\u5E76\u4E14\u8BBF\u95EE\u7684\u6570\u636E\u4E5F\u4E0D\u662F\u54CD\u5E94\u5F0F\u7684\u3002\u3010\u6570\u7EC4\u3011</p><ul><li><p>\u7236\u7EC4\u4EF6</p><ul><li>ref\u53EF\u4EE5\u83B7\u53D6\u5230\u67D0\u4E00\u4E2ADOM\u8282\u70B9\u3001\u7EC4\u4EF6\u6807\u7B7E\u3001\u5B50\u7EC4\u4EF6\u6807\u7B7E\uFF08\u4EE5\u4FBF\u64CD\u4F5C\u5B50\u7EC4\u4EF6\u7684\u6570\u636E\u4E0E\u65B9\u6CD5\uFF09\uFF1B$children\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u5C5E\u6027\uFF0C\u53EF\u4EE5\u83B7\u53D6\u5230\u5F53\u524D\u7EC4\u4EF6\u7684\u5168\u90E8\u5B50\u7EC4\u4EF6\u3010\u6570\u7EC4\u3011</li></ul></li><li><p>\u5B50\u7EC4\u4EF6</p><ul><li>$parent\u7EC4\u4EF6\u5B9E\u4F8B\u7684\u5C5E\u6027\uFF0C\u53EF\u4EE5\u83B7\u53D6\u5230\u5F53\u524D\u5B50\u7EC4\u4EF6\u7684\u7236\u7EC4\u4EF6\u3002\u4ECE\u800C\u53EF\u4EE5\u64CD\u4F5C\u7236\u7EC4\u4EF6\u7684\u6570\u636E\u548C\u65B9\u6CD5</li></ul></li><li><p>\u8DE8\u4EE3\u901A\u4FE1</p><p>\u8003\u8651\u4E00\u79CD\u573A\u666F\uFF0C\u5982\u679CA\u662FB\u7EC4\u4EF6\u7684\u7236\u7EC4\u4EF6\uFF0CB\u662FC\u7EC4\u4EF6\u7684\u7236\u7EC4\u4EF6\u3002\u5982\u679C\u60F3\u8981\u7EC4\u4EF6A\u7ED9\u7EC4\u4EF6C\u4F20\u9012\u6570\u636E\uFF0C\u8FD9\u79CD\u9694\u4EE3\u7684\u6570\u636E\uFF0C\u8BE5\u4F7F\u7528\u54EA\u79CD\u65B9\u5F0F\u5462\uFF1F</p></li></ul><p>\u5982\u679C\u662F\u7528props/$emit\u6765\u4E00\u7EA7\u4E00\u7EA7\u7684\u4F20\u9012\uFF0C\u786E\u5B9E\u53EF\u4EE5\u5B8C\u6210\uFF0C\u4F46\u662F\u6BD4\u8F83\u590D\u6742\uFF1B\u5982\u679C\u4F7F\u7528\u4E8B\u4EF6\u603B\u7EBF\uFF0C\u5728\u591A\u4EBA\u5F00\u53D1\u6216\u8005\u9879\u76EE\u8F83\u5927\u7684\u65F6\u5019\uFF0C\u7EF4\u62A4\u8D77\u6765\u5F88\u9EBB\u70E6\uFF1B\u5982\u679C\u4F7F\u7528Vuex\uFF0C\u7684\u786E\u4E5F\u53EF\u4EE5\uFF0C\u4F46\u662F\u5982\u679C\u4EC5\u4EC5\u662F\u4F20\u9012\u6570\u636E\uFF0C\u90A3\u53EF\u80FD\u5C31\u6709\u70B9\u6D6A\u8D39\u4E86\u3002</p><p>\u9488\u5BF9\u4E0A\u8FF0\u60C5\u51B5\uFF0CVue\u5F15\u5165\u4E86$attrs / $listeners\uFF0C\u5B9E\u73B0\u7EC4\u4EF6\u4E4B\u95F4\u7684\u8DE8\u4EE3\u901A\u4FE1\u3002</p><h2 id="_06-attrs-listeners" tabindex="-1"><a class="header-anchor" href="#_06-attrs-listeners" aria-hidden="true">#</a> 06 - <code>$attrs</code> <code>$listeners</code></h2><ul><li><p>$attrs\uFF1A\u7EE7\u627F\u6240\u6709\u7684\u7236\u7EC4\u4EF6\u5C5E\u6027\uFF08\u9664\u4E86\u5B50\u7EC4\u4EF6prop\u63A5\u6536\u7684\u5C5E\u6027\uFF09\uFF0C\u4E00\u822C\u7528\u5728\u5B50\u7EC4\u4EF6\u7684\u5B50\u5143\u7D20\u4E0A\u3010\u5BF9\u8C61\u5F62\u5F0F\u3011</p></li><li><p>$listeners\uFF1A\u8BE5\u5C5E\u6027\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u91CC\u9762\u5305\u542B\u4E86\u4F5C\u7528\u5728\u8FD9\u4E2A\u7EC4\u4EF6\u4E0A\u7684\u6240\u6709\u76D1\u542C\u5668\uFF0C\u53EF\u4EE5\u914D\u5408 v-on=&quot;$listeners&quot; \u5C06\u6240\u6709\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u6307\u5411\u8FD9\u4E2A\u7EC4\u4EF6\u7684\u67D0\u4E2A\u7279\u5B9A\u7684\u5B50\u5143\u7D20\u3002\uFF08\u76F8\u5F53\u4E8E\u5B50\u7EC4\u4EF6\u7EE7\u627F\u7236\u7EC4\u4EF6\u7684\u4E8B\u4EF6\uFF09\u3010\u5BF9\u8C61\u5F62\u5F0F\u3011</p></li><li><p>inheritAttrs</p><ul><li>inheritAttrs\uFF1A\u9ED8\u8BA4\u503C true\uFF0C\u7EE7\u627F\u6240\u6709\u7684\u7236\u7EC4\u4EF6\u5C5E\u6027\uFF08\u9664 props \u7684\u7279\u5B9A\u7ED1\u5B9A\uFF09\u4F5C\u4E3A\u666E\u901A\u7684HTML\u7279\u6027\u5E94\u7528\u5728\u5B50\u7EC4\u4EF6\u7684\u6839\u5143\u7D20\u4E0A\uFF0C\u5982\u679C\u4F60\u4E0D\u5E0C\u671B\u7EC4\u4EF6\u7684\u6839\u5143\u7D20\u7EE7\u627F\u7279\u6027\u8BBE\u7F6E inheritAttrs: false ,\u4F46\u662F class \u5C5E\u6027\u4F1A\u7EE7\u627F\u3002</li></ul></li><li><p>\u6CE8\u610F</p><ul><li>\u5B59\u5B50\u7EC4\u4EF6\u4E2D\u80FD\u76F4\u63A5\u89E6\u53D1\u7236\u7EC4\u4EF6\u7684\u81EA\u5B9A\u4E49\u65B9\u6CD5\u7684\u539F\u56E0\u5728\u4E8E\u5B50\u7EC4\u4EF6\u8C03\u7528\u5B59\u5B50\u7EC4\u4EF6\u65F6 \u4F7F\u7528 v-on \u7ED1\u5B9A\u4E86$listeners \u5C5E\u6027</li><li>\u5728\u5B50\u7EC4\u4EF6\u4E2D\u901A\u8FC7v-bind \u7ED1\u5B9A$attrs\u5C5E\u6027\uFF0C\u5B59\u5B50\u7EC4\u4EF6\u53EF\u4EE5\u76F4\u63A5\u83B7\u53D6\u5230\u7236\u7EC4\u4EF6\u4E2D\u4F20\u9012\u4E0B\u6765\u7684props\uFF08\u9664\u4E86\u5B50\u7EC4\u4EF6\u4E2Dprops\u58F0\u660E\u7684\uFF09</li></ul></li></ul><h2 id="_07-\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF-\u4EFB\u610F" tabindex="-1"><a class="header-anchor" href="#_07-\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF-\u4EFB\u610F" aria-hidden="true">#</a> 07 - \u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF(\u4EFB\u610F)</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">beforeCreate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5B89\u88C5\u5168\u5C40\u4E8B\u4EF6\u603B\u7EBF\uFF0C$bus\u5C31\u662F\u5F53\u524D\u5E94\u7528\u7684vm</span>
        <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$bus <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>\u63A5\u6536\u6570\u636E</strong>\uFF1AA\u7EC4\u4EF6\u60F3\u63A5\u6536\u6570\u636E\uFF0C\u5219\u5728A\u7EC4\u4EF6\u4E2D\u7ED9 <code>$bus</code> \u7ED1\u5B9A\u81EA\u5B9A\u4E49\u4E8B\u4EF6\uFF0C\u4E8B\u4EF6\u7684\u56DE\u8C03\u7559\u5728A\u7EC4\u4EF6\u81EA\u8EAB\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4E24\u79CD\u65B9\u5F0F\u90FD\u53EF\u4EE5</span>
    <span class="token comment">// this.$bus.$on(&quot;hello&quot;, (data) =&gt; {});</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>demo<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u89E3\u7ED1\u4E8B\u4EF6</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$bus<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p><strong>\u63D0\u4F9B\u6570\u636E</strong>\uFF1A<code>this.$bus.$emit(&#39;xxx&#39;,\u6570\u636E)</code></p><p>\u6700\u597D\u5728 <code>beforeDestroy</code> \u94A9\u5B50\u4E2D\uFF0C\u7528 <code>$off</code> \u53BB\u89E3\u7ED1\u5F53\u524D\u7EC4\u4EF6\u6240\u7528\u5230\u7684\u4E8B\u4EF6\u3002</p><h2 id="_08-vuex-\u4EFB\u610F" tabindex="-1"><a class="header-anchor" href="#_08-vuex-\u4EFB\u610F" aria-hidden="true">#</a> 08 - <code>vuex</code>(\u4EFB\u610F)</h2><p>\u6838\u5FC3\u6982\u5FF5\uFF1A<code>state</code> <code>mutations</code> <code>actions</code> <code>getters</code> <code>modules</code></p><h2 id="_09-slot-\u7236\u5B50" tabindex="-1"><a class="header-anchor" href="#_09-slot-\u7236\u5B50" aria-hidden="true">#</a> 09 - <code>slot</code>(\u7236\u5B50)</h2><h2 id="_10-pubsub-js-\u4EFB\u610F" tabindex="-1"><a class="header-anchor" href="#_10-pubsub-js-\u4EFB\u610F" aria-hidden="true">#</a> 10 - <code>pubsub-js</code>(\u4EFB\u610F)</h2><p>\u5728vue\u4E2D\u51E0\u4E4E\u4E0D\u7528\uFF0C\u4E00\u822C\u7528\u4E8EReact\u3002</p><ol><li><p>\u5B89\u88C5 <code>pubsub</code>\uFF1A<code>npm i pubsub-js</code></p></li><li><p>\u5F15\u5165: <code>import pubsub from &#39;pubsub-js&#39;</code></p></li><li><p>\u63A5\u6536\u6570\u636E\uFF1AA\u7EC4\u4EF6\u60F3\u63A5\u6536\u6570\u636E\uFF0C\u5219\u5728A\u7EC4\u4EF6\u4E2D\u8BA2\u9605\u6D88\u606F\uFF0C\u8BA2\u9605\u7684\u56DE\u8C03\u7559\u5728A\u7EC4\u4EF6\u81EA\u8EAB\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>methods(){
    demo(data){......}
}
......
mounted() {
    this.pid = pubsub.subscribe(&#39;xxx&#39;,this.demo) //\u8BA2\u9605\u6D88\u606F
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p>\u63D0\u4F9B\u6570\u636E\uFF1A<code>pubsub.publish(&#39;xxx&#39;,\u6570\u636E)</code></p></li><li><p>\u6700\u597D\u5728 <code>beforeDestroy</code> \u94A9\u5B50\u4E2D\uFF0C\u7528<code>PubSub.unsubscribe(pid)</code>\u53BB\u53D6\u6D88\u8BA2\u9605\u3002</p></li></ol>`,38);function p(t,o){return e}var l=n(a,[["render",p],["__file","\u7EC4\u4EF6\u95F4\u901A\u4FE1.html.vue"]]);export{l as default};
