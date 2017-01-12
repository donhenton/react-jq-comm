class JQuery1
{
    constructor()
    {
        let me = this;
        this.counter = 0;
        this.jqAttachmentPoint = $("#jquery1");
        this.buttonRef = $('<button  class="btn btn-primary">Hello From JQuery</button>')
                .appendTo(this.jqAttachmentPoint);
        
        let boundClick = me.onClick.bind(me);
        this.buttonRef.click(boundClick);
    }
    
    
    onClick()
    {
        this.counter ++;
        let message = "JQuery sends "+this.counter;
        console.log(message);
    }

}

 var jqVar = new JQuery1();

 
