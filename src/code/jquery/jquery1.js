class JQuery1
{
    constructor()
    {
        let me = this;
        this.counter = 0;

        this.jqAttachmentPoint = $("#jquery1");
        this.jqContainer = $('<span />').appendTo(this.jqAttachmentPoint);
        this.buttonRef = $('<button  class="clear btn btn-primary">Hello From JQuery</button><br/>')
                .appendTo(this.jqContainer);
        this.textArea = $('<textarea />').appendTo(this.jqContainer);
        this.textArea.addClass("item-text");
        this.jqContainer.addClass("item-container");

        let boundClick = me.onClick.bind(me);
        this.buttonRef.click(boundClick);
    }

    onClick()
    {
        this.counter++;
        let message = "JQuery sends " + this.counter;
        console.log(message);
    }

}

var jqVar = new JQuery1();


