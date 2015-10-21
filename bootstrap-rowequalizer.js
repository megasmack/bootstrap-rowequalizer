/* global window, module, define, jQuery, require */
/*
 * Bootstrap RowEqualizer v1.0.0
 * https://github.com/gsmke/bootstrap-rowequalizer
 */

;(function(factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';

    var RowEqualizer = window.RowEqualizer || {};

    RowEqualizer = (function () {
        function RowEqualizer(element, settings) {

            var _ = this;

            _.el = element;

            if (settings) {
                _.totalColumns = settings;
            } else {
                _.totalColumns = 12;
            }

            _.colQueries = [
                'xs',
                'sm',
                'md',
                'lg'
            ];
            _.colQueryExist = {
                xs: false,
                sm: false,
                md: false,
                lg: false
            };

            for (var x = 0; x < _.colQueries.length; x++) {
                if ($('> [class*=col-'+ _.colQueries[x] +']',_.el).length) {
                    _.colQueryExist[_.colQueries[x]] = true;
                }
            }
            for (var z = 0; z < _.colQueries.length; z++) {
                if ($('> [class*=col-'+ _.colQueries[z] +']',_.el).length) {
                    _.createClears(_.colQueries[z]);
                }
            }
        }

        return RowEqualizer;

    }());

    RowEqualizer.prototype.createClears = function(colType) {

        var _ = this;

        _.colCount = 0;

        $('> [class*=col-'+ colType +']',_.el).each(function (i,e) {
                var colNumber = 0;
                var classList = ($(e).attr('class')).split(' ');
                for (var x = 0; x < classList.length; x++) {
                    if (classList[x].substr(0,6) === 'col-'+ colType) {
                        var colStructure = classList[x].split('-');
                        colNumber = parseInt(colStructure.pop());
                    }
                }
                _.colCount = _.colCount + colNumber;
                if (_.colCount >= _.totalColumns) {
                    if (_.colCount === _.totalColumns) {
                        $(e).after('<div class="'+ _.buildClears(colType) +'"></div>');
                        _.colCount = 0;
                    } else {
                        $(e).before('<div class="'+ _.buildClears(colType) +'"></div>');
                        _.colCount = colNumber;
                    }
                }
            });

    };

    RowEqualizer.prototype.buildClears = function (colType) {

        var _ = this;

        var classSet = 'clearfix visible-'+ colType +'-block';

        for (var x = _.colQueries.indexOf(colType)+1; x < _.colQueries.length; x++) {
            if (_.colQueryExist[_.colQueries[x]] === false) {
                classSet += ' visible-'+ _.colQueries[x] +'-block';
            } else {
                break;
            }
        }
        return classSet;
    };

    // jQuery Plugin
    $.fn.rowequalizer = function (options) {

        var _ = this;

        return _.each(function (index, element) {
            element.navinator = new RowEqualizer(element, options);
        });

    };
}));
