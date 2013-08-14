<h2 data-bind="text: title"></h2>
<p data-bind="text: content"></p>

<hr>

<label>Title</label>
<input data-bind="value: title, valueUpdate:'afterkeydown'">
<label>Content</label>
<textarea data-bind="value: content, valueUpdate:'afterkeydown'"></textarea>