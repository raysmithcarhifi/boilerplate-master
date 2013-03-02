/*global define:true */

define('section', [], function () {

    'use strict';

    var Section = function (obj) {

        var self = this;

        self.id = obj.id;
        self.key = obj.key;
        self.parentId = obj.parentId;
        self.label = obj.label;
        self.pageContent = obj.pageContent;

        return self;
    };

    Section.prototype.hash = function () {

        return '#/' + this.id.replace("-","/");
    };

    Section.prototype.selector = function () {

        return '#' + this.id;
    };

    Section.prototype.isTopLevel = function () {
        return !this.parentId;
    };

    return Section;

});
