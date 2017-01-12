class JQuery1
{
    constructor(id)
    {
        let me = this;
        this.counter = 0;
        this.id = id;
        this.jqAttachmentPoint = $("#jquery1");
        this.jqContainer = $('<span />').appendTo(this.jqAttachmentPoint);
        this.buttonRef = $('<button  class="clear btn btn-primary">Hello From JQuery</button><br/>')
                .appendTo(this.jqContainer);
        this.textArea = $('<textarea />').appendTo(this.jqContainer);
        this.textArea.addClass("item-text");
        this.jqContainer.addClass("item-container");
        let boundClick = me.onClick.bind(me);
        this.buttonRef.click(boundClick);
        this.combinedMessage = "";
        let handler = me.handleMessage.bind(me);
        $(document).on('internalMessage', handler);
        
        
        
        
    }
    
    handleMessage(ev)
    {
        //e.time
        // e.message
        // e.source ... whatever json props where sent

        let newText = this.combinedMessage;
        newText = newText + ev.message + "\n";
        if (ev.source !== this.id)
        {
             this.textArea.val(newText);
             this.combinedMessage = newText;
        }

    }

    onClick()
    {
        let me = this;
        this.counter++;
        let message = "from " + this.id + " " + this.counter;
        $.event.trigger({
            type: 'internalMessage',
            source: 'jquery1',
            message: message
        });
         
    }
    
    
   

}

var jqVar = new JQuery1('jquery1');


