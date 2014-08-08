/*
 2014.08.05 by wenjen
 */

var api = null;

$("document").ready(function(){
                    api = $(".sigPad").signaturePad({drawOnly:true, lineWidth:0});
                    
                    });


/*=======================================================================*/

function showSig(){
    var posAry = api.getSignatureString();
    $("#message").append("<p>"+posAry+"</p>");
}

function sig2Img(){
    var img = api.getSignatureImage();
    $("#message").append("<p>"+img+"</p>");
    $("#redraw").attr("src",img);
}
