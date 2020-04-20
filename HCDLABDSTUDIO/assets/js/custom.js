var selectedComponentClass = '';
                    var uncheck = '';
                    var oldvalue = '';

                    function cssChecked(id) {


                        var attribute = id.replace("input", "");

                        if (uncheck == 0 || uncheck == "") {
                            oldvalue = $("#component" + attribute).val();

                            newvalue = $("#inputValue" + attribute).val();

                            $("#component" + attribute).val(newvalue);
                            $(selectedComponentClass).css(attribute, newvalue);
                            uncheck = 1;
                        } else if (uncheck == 1) {

                            $("#component" + attribute).val(oldvalue);

                            $(selectedComponentClass).css(attribute, oldvalue);
                            uncheck = 0;
                            oldvalue = '';
                        }

                    }

                    function applyCss() {
                        alert("Css had been applied!!");

                    }

                    function GenerateDesignSystem() {
                        alert("gs is being genarated!");

                    }

                    function getcss(id) {

                        var component = $("#" + id);

                        styleProps = component.css(["width", "height", "margin", "padding", "background-color", "background-image", "color", "font-size", "font-family", "border-raduis", "border-color", "border-size", "Allign-items", "Allign-Content", "Allign-text", "Allign-self",
"transform",
"transformBox",
"transformOrigin",
"transformStyle",
"transitionDelay",
"transitionDuration",
"transitionProperty",
"transitionTimingFunction",
"animationDelay",
"animationDirection",
"animationDuration",
"animationFillMode",
"animationIterationCount",
"animationName",
"animationPlayState",
"animationTimingFunction",
"fontStyle",
"fontVariantCaps",
"fontWeight",]);

                        for (const [attribute, value] of Object.entries(styleProps)) {

                            $("#component" + attribute).val(value);

                        }

                        for (const [attribute, value] of Object.entries(styleProps)) {

                            selectedComponentClass = "." + id;
                            $("#component" + attribute).on("change paste keyup", function() {
                                newvalue = $("#component" + attribute).val();

                                $("." + id).css(attribute, newvalue);
                            });

                        }

                    }











    var count = 1;

        $("#selectorBtn").click(function() {

            count++;

            if (count % 2 == 0) {
                $("#selectorBtn").css({
                    "color": "#fa5731",
                    "background": " #1e1e2e",
                    "border-color": "#fa5731",
                    "padding": "5px"
                });

                site = "#loaded-site";

                cssSelector(site);

            } else {
                $("#selectorBtn").css({
                    "color": "white",
                    "background": " #303040",
                    "border-color": "#fa5731",
                    "padding": "5px"
                });
                site = "";

            }

            function cssSelector(site) {
                var elements = {
                    top: $('#selector-top'),
                    left: $('#selector-left'),
                    right: $('#selector-right'),
                    bottom: $('#selector-bottom')
                };

                $(site).mousemove(function(event) {
                    if (event.target.id.indexOf('selector') !== -1 || event.target.tagName === 'BODY' || event.target.tagName === 'HTML') return;


                    var $target = $(event.target);

                    targetOffset = $target[0].getBoundingClientRect(),
                        targetHeight = targetOffset.height,
                        targetWidth = targetOffset.width;
                    console.log(targetOffset);

                    elements.top.css({
                        left: (targetOffset.left - 4),
                        top: (targetOffset.top - 4),
                        width: (targetWidth + 5)
                    });
                    elements.bottom.css({
                        top: (targetOffset.top + targetHeight + 1),
                        left: (targetOffset.left - 3),
                        width: (targetWidth + 4)
                    });
                    elements.left.css({
                        left: (targetOffset.left - 5),
                        top: (targetOffset.top - 4),
                        height: (targetHeight + 8)
                    });
                    elements.right.css({
                        left: (targetOffset.left + targetWidth + 1),
                        top: (targetOffset.top - 4),
                        height: (targetHeight + 8)
                    });

                });

                $("#loaded-site").click(function(event) {

                    $("#eCssSection").empty();

                    styleProps = ["width", "height", "margin", "padding", "background-color", "background-image", "color", "font-size", "font-family", "border-raduis", "border-color", "border-size", "Allign-items", "Allign-Content", "Allign-text", "fontStyle",
"fontVariantCaps",
"fontWeight",];



               


                    styles = getComputedStyle(event.target);
              
              

                    for (const attribute of styleProps) {
                        value = styles.getPropertyValue(attribute);

                        if (value !=="") {

                                id = "input" + attribute;

                                var myvar = '<li  class="extracted-list">' +


                                    '                     <input id="inputValue' + attribute + '" value="' + value + '" style="visibility: hidden;    font-size: 0px;">' +
                                    '                     <input id="input' + attribute + '"  type="checkbox" onclick="cssChecked(this.id)" style="visibility: visible;">' +
                                     '<span style="color:red;">'+attribute +'</span>'+ ": " + value +

                                    '                  </li>';

                                $("#eCssSection").append(myvar);
                            }

                    }

                     appendToggleElementState(event.target);

                });

            }
        });




function getToggleElementState(element,state,attribute){

  var classList = $(element).attr('class').split(/\s+/);
  var styles= [];



for (const element of classList) {



  let stateStyle= $( "."+element+":"+state ).css(attribute);


  if(stateStyle != "undefined"){

    styles.push([element, stateStyle ]);
     
  }
 
}



return styles[styles.length-1][1];


}



function appendToggleElementState(element){
           var toggleElementstates =['hover','focus','visited','active','focus-within'];
           var styleclasses = ["background-color","color","border-color"];
           var array = [];

           for (const att of toggleElementstates) {
            $("#eCssSection").append('<span style= "color: white;margin: 0px 10px;">:'+att+'</span>');
                for(const stclass of styleclasses){
                    value = getToggleElementState(element,att,stclass);

                          var myvar =                         '<li  class="extracted-list">' +


                                    '<input id="inputValue'+ att+ stclass + '" value="' + value + '" style="visibility: hidden;    font-size: 0px;">' +
                                    '                     <input id="input' +att+ stclass + '"  class="'+att+'" type="checkbox" onclick="cssCheckedtoggle(this.id,this.className)" style="visibility: visible;">' +
                                     '<span style="color:blue;">'+stclass +'</span>'+ ": " + value +

                                    '                  </li>';

                                $("#eCssSection").append(myvar);

                  
                }

          
           }

       
}

                    var selectedComponentClasst = '';
                    var uncheckt = '';
                    var oldvaluet = '';

                    function cssCheckedtoggle(id,att) {



                         $("#component" +att+ attribute).val("newvalue");
                        
                        var attribute = id.replace("input"+att, "");

                        if (uncheckt == 0 || uncheckt == "") {
                            oldvalue = $("#component" +att+ attribute).val();

                            newvalue = $("#inputValue"+att + attribute).val();

                            $("#component" +att+ attribute).val(newvalue);
                            $(selectedComponentClasst).css(attribute, newvalue);
                            uncheck = 1;
                        } else if (uncheckt == 1) {

                            $("#component" +att+ attribute).val(oldvalue);

                            $(selectedComponentClasst).css(attribute, oldvalue);
                            uncheckt = 0;
                            oldvalue = '';
                        }

                    }

 function hideComponent(id) {
            var x = document.getElementById(id);

            x.style.display = "none";

        }

        function showcss() {
            $("#csscode").show();
            $("#collapseExample").hide();
            $("#displayComponent").hide();

        }

        function showcom() {
            $("#csscode").hide();
            $("#collapseExample").hide();
            $("#displayComponent").show();

        }

        function showreact() {
            $("#csscode").hide();
            $("#collapseExample").show();
            $("#displayComponent").hide();

        }

        function hidemodal() {
            $('#searchModal').hide();
        }


    $('iframe').load(function() {
            $('iframe').contents().find("head")
                .append($("<style type='text/css'>  body{background-color: red;}  </style>"));
        });