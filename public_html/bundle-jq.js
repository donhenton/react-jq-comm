(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/dhenton/audience_builder/react-jq-comm/src/code/jquery/jquery1.js":[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JQuery1 = function () {
    function JQuery1(id) {
        _classCallCheck(this, JQuery1);

        var me = this;
        this.counter = 0;
        this.id = id;
        this.jqAttachmentPoint = $("#jquery1");
        this.jqContainer = $('<span />').appendTo(this.jqAttachmentPoint);
        this.buttonRef = $('<button  class="clear btn btn-primary">Hello From JQuery</button><br/>').appendTo(this.jqContainer);
        this.textArea = $('<textarea />').appendTo(this.jqContainer);
        this.textArea.addClass("item-text");
        this.jqContainer.addClass("item-container");
        var boundClick = me.onClick.bind(me);
        this.buttonRef.click(boundClick);
        this.combinedMessage = "";
        var handler = me.handleMessage.bind(me);
        $(document).on('internalMessage', handler);
    }

    _createClass(JQuery1, [{
        key: 'handleMessage',
        value: function handleMessage(ev) {
            //e.time
            // e.message
            // e.source ... whatever json props where sent

            var newText = this.combinedMessage;
            newText = newText + ev.message + "\n";
            if (ev.source !== this.id) {
                this.textArea.val(newText);
                this.combinedMessage = newText;
            }
        }
    }, {
        key: 'onClick',
        value: function onClick() {
            var me = this;
            this.counter++;
            var message = "from " + this.id + " " + this.counter;
            $.event.trigger({
                type: 'internalMessage',
                source: 'jquery1',
                message: message
            });
        }
    }]);

    return JQuery1;
}();

var jqVar = new JQuery1('jquery1');

},{}]},{},["/Users/dhenton/audience_builder/react-jq-comm/src/code/jquery/jquery1.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29kZS9qcXVlcnkvanF1ZXJ5MS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztJQ0FNLE87QUFFRixxQkFBWSxFQUFaLEVBQ0E7QUFBQTs7QUFDSSxZQUFJLEtBQUssSUFBVDtBQUNBLGFBQUssT0FBTCxHQUFlLENBQWY7QUFDQSxhQUFLLEVBQUwsR0FBVSxFQUFWO0FBQ0EsYUFBSyxpQkFBTCxHQUF5QixFQUFFLFVBQUYsQ0FBekI7QUFDQSxhQUFLLFdBQUwsR0FBbUIsRUFBRSxVQUFGLEVBQWMsUUFBZCxDQUF1QixLQUFLLGlCQUE1QixDQUFuQjtBQUNBLGFBQUssU0FBTCxHQUFpQixFQUFFLHdFQUFGLEVBQ1IsUUFEUSxDQUNDLEtBQUssV0FETixDQUFqQjtBQUVBLGFBQUssUUFBTCxHQUFnQixFQUFFLGNBQUYsRUFBa0IsUUFBbEIsQ0FBMkIsS0FBSyxXQUFoQyxDQUFoQjtBQUNBLGFBQUssUUFBTCxDQUFjLFFBQWQsQ0FBdUIsV0FBdkI7QUFDQSxhQUFLLFdBQUwsQ0FBaUIsUUFBakIsQ0FBMEIsZ0JBQTFCO0FBQ0EsWUFBSSxhQUFhLEdBQUcsT0FBSCxDQUFXLElBQVgsQ0FBZ0IsRUFBaEIsQ0FBakI7QUFDQSxhQUFLLFNBQUwsQ0FBZSxLQUFmLENBQXFCLFVBQXJCO0FBQ0EsYUFBSyxlQUFMLEdBQXVCLEVBQXZCO0FBQ0EsWUFBSSxVQUFVLEdBQUcsYUFBSCxDQUFpQixJQUFqQixDQUFzQixFQUF0QixDQUFkO0FBQ0EsVUFBRSxRQUFGLEVBQVksRUFBWixDQUFlLGlCQUFmLEVBQWtDLE9BQWxDO0FBS0g7Ozs7c0NBRWEsRSxFQUNkO0FBQ0k7QUFDQTtBQUNBOztBQUVBLGdCQUFJLFVBQVUsS0FBSyxlQUFuQjtBQUNBLHNCQUFVLFVBQVUsR0FBRyxPQUFiLEdBQXVCLElBQWpDO0FBQ0EsZ0JBQUksR0FBRyxNQUFILEtBQWMsS0FBSyxFQUF2QixFQUNBO0FBQ0sscUJBQUssUUFBTCxDQUFjLEdBQWQsQ0FBa0IsT0FBbEI7QUFDQSxxQkFBSyxlQUFMLEdBQXVCLE9BQXZCO0FBQ0o7QUFFSjs7O2tDQUdEO0FBQ0ksZ0JBQUksS0FBSyxJQUFUO0FBQ0EsaUJBQUssT0FBTDtBQUNBLGdCQUFJLFVBQVUsVUFBVSxLQUFLLEVBQWYsR0FBb0IsR0FBcEIsR0FBMEIsS0FBSyxPQUE3QztBQUNBLGNBQUUsS0FBRixDQUFRLE9BQVIsQ0FBZ0I7QUFDWixzQkFBTSxpQkFETTtBQUVaLHdCQUFRLFNBRkk7QUFHWix5QkFBUztBQUhHLGFBQWhCO0FBTUg7Ozs7OztBQU9MLElBQUksUUFBUSxJQUFJLE9BQUosQ0FBWSxTQUFaLENBQVoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgSlF1ZXJ5MVxue1xuICAgIGNvbnN0cnVjdG9yKGlkKVxuICAgIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmpxQXR0YWNobWVudFBvaW50ID0gJChcIiNqcXVlcnkxXCIpO1xuICAgICAgICB0aGlzLmpxQ29udGFpbmVyID0gJCgnPHNwYW4gLz4nKS5hcHBlbmRUbyh0aGlzLmpxQXR0YWNobWVudFBvaW50KTtcbiAgICAgICAgdGhpcy5idXR0b25SZWYgPSAkKCc8YnV0dG9uICBjbGFzcz1cImNsZWFyIGJ0biBidG4tcHJpbWFyeVwiPkhlbGxvIEZyb20gSlF1ZXJ5PC9idXR0b24+PGJyLz4nKVxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyh0aGlzLmpxQ29udGFpbmVyKTtcbiAgICAgICAgdGhpcy50ZXh0QXJlYSA9ICQoJzx0ZXh0YXJlYSAvPicpLmFwcGVuZFRvKHRoaXMuanFDb250YWluZXIpO1xuICAgICAgICB0aGlzLnRleHRBcmVhLmFkZENsYXNzKFwiaXRlbS10ZXh0XCIpO1xuICAgICAgICB0aGlzLmpxQ29udGFpbmVyLmFkZENsYXNzKFwiaXRlbS1jb250YWluZXJcIik7XG4gICAgICAgIGxldCBib3VuZENsaWNrID0gbWUub25DbGljay5iaW5kKG1lKTtcbiAgICAgICAgdGhpcy5idXR0b25SZWYuY2xpY2soYm91bmRDbGljayk7XG4gICAgICAgIHRoaXMuY29tYmluZWRNZXNzYWdlID0gXCJcIjtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSBtZS5oYW5kbGVNZXNzYWdlLmJpbmQobWUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbignaW50ZXJuYWxNZXNzYWdlJywgaGFuZGxlcik7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICBcbiAgICBoYW5kbGVNZXNzYWdlKGV2KVxuICAgIHtcbiAgICAgICAgLy9lLnRpbWVcbiAgICAgICAgLy8gZS5tZXNzYWdlXG4gICAgICAgIC8vIGUuc291cmNlIC4uLiB3aGF0ZXZlciBqc29uIHByb3BzIHdoZXJlIHNlbnRcblxuICAgICAgICBsZXQgbmV3VGV4dCA9IHRoaXMuY29tYmluZWRNZXNzYWdlO1xuICAgICAgICBuZXdUZXh0ID0gbmV3VGV4dCArIGV2Lm1lc3NhZ2UgKyBcIlxcblwiO1xuICAgICAgICBpZiAoZXYuc291cmNlICE9PSB0aGlzLmlkKVxuICAgICAgICB7XG4gICAgICAgICAgICAgdGhpcy50ZXh0QXJlYS52YWwobmV3VGV4dCk7XG4gICAgICAgICAgICAgdGhpcy5jb21iaW5lZE1lc3NhZ2UgPSBuZXdUZXh0O1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBvbkNsaWNrKClcbiAgICB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuY291bnRlcisrO1xuICAgICAgICBsZXQgbWVzc2FnZSA9IFwiZnJvbSBcIiArIHRoaXMuaWQgKyBcIiBcIiArIHRoaXMuY291bnRlcjtcbiAgICAgICAgJC5ldmVudC50cmlnZ2VyKHtcbiAgICAgICAgICAgIHR5cGU6ICdpbnRlcm5hbE1lc3NhZ2UnLFxuICAgICAgICAgICAgc291cmNlOiAnanF1ZXJ5MScsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgIH0pO1xuICAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIFxuICAgXG5cbn1cblxudmFyIGpxVmFyID0gbmV3IEpRdWVyeTEoJ2pxdWVyeTEnKTtcblxuXG4iXX0=
