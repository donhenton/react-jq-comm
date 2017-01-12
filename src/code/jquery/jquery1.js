class JQuery1
{
    constructor()
    {
        let me = this;
        this.jqAttachmentPoint = $("#jquery1");
        this.jqAttachmentPoint.html("hello from jquery");
    }

}

let jqVar = new JQuery1();
export default jqVar;

