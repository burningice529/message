uw.extend({
    noop: function () {},
    template: function (template, data) {
        return template.replace(/#\{([\s\S]+?)\}/g, function (a, b) {
            return data[b];
        });
    }
});