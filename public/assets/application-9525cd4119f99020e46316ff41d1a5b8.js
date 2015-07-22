var app = function() {

    $(function() {
        toggleSettings();
        switchTheme();
        navToggleRight();
        navToggleLeft();
        navToggleSub();
        profileToggle();
        widgetToggle();
        widgetClose();
        widgetFlip();
        tooltips();
        switcheryToggle();
        fullscreenWidget();
        fullscreenMode();


    });

    var toggleSettings = function() {
        $('.config-link').click(function() {
            if ($(this).hasClass('open')) {
                $('#config').animate({
                    "right": "-205px"
                }, 150);
                $(this).removeClass('open').addClass('closed');
            } else {
                $("#config").animate({
                    "right": "0px"
                }, 150);
                $(this).removeClass('closed').addClass('open');
            }
        });
    };

    var switchTheme = function() {
        $('.theme-style-wrapper').click(function() {
            $('#main-wrapper').attr('class', '');
            var themeValue = $(this).data('theme');
            $('#main-wrapper').addClass(themeValue);
        });
    };


    var navToggleRight = function() {
        $('#toggle-right').on('click', function() {
            $('#sidebar-right').toggleClass('sidebar-right-open');
            $("#toggle-right .fa").toggleClass("fa-indent fa-dedent");

        });
    };

    var customCheckbox = function() {
        $('input.icheck').iCheck({
            checkboxClass: 'icheckbox_flat-grey',
            radioClass: 'iradio_flat-grey'
        });
    }

    var formMask = function() {
        $("#input1").mask("99/99/9999");
        $("#input2").mask('(999) 999-9999');
        $("#input3").mask("(999) 999-9999? x99999");
        $("#input4").mask("99-9999999");
        $("#input5").mask("999-99-9999");
        $("#input6").mask("a*-999-a999");
    }

    var weather = function() {
        var icons = new Skycons({
            "color": "#27B6AF"
        });

        icons.set("clear-day", Skycons.CLEAR_DAY);
        icons.set("clear-night", Skycons.CLEAR_NIGHT);
        icons.set("partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
        icons.set("partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
        icons.set("cloudy", Skycons.CLOUDY);
        icons.set("rain", Skycons.RAIN);
        icons.set("sleet", Skycons.SLEET);
        icons.set("snow", Skycons.SNOW);
        icons.set("wind", Skycons.WIND);
        icons.set("fog", Skycons.FOG);

        icons.play();
    }

    var formWizard = function() {
        $('#myWizard').wizard()
    }

    var navToggleLeft = function() {
        $('#toggle-left').on('click', function() {
            var bodyEl = $('#main-wrapper');
            ($(window).width() > 767) ? $(bodyEl).toggleClass('sidebar-mini'): $(bodyEl).toggleClass('sidebar-opened');
        });
    };

    var navToggleSub = function() {
        var subMenu = $('.sidebar .nav');
        $(subMenu).navgoco({
            caretHtml: false,
            accordion: true
        });

    };

    var profileToggle = function() {
        $('#toggle-profile').click(function() {
            $('.sidebar-profile').slideToggle();
        });
    };

    var widgetToggle = function() {
        $(".actions > .fa-chevron-down").click(function() {
            $(this).parent().parent().next().slideToggle("fast"), $(this).toggleClass("fa-chevron-down fa-chevron-up")
        });
    };

    var widgetClose = function() {
        $(".actions > .fa-times").click(function() {
            $(this).parent().parent().parent().fadeOut()
        });
    };

    var widgetFlip = function() {
        $(".actions > .fa-cog").click(function() {
            $(this).closest('.flip-wrapper').toggleClass('flipped')
        });
    };

    var dateRangePicker = function() {
        $('.reportdate').daterangepicker({
            format: 'YYYY-MM-DD',
            startDate: '2014-01-01',
            endDate: '2014-06-30'
        });
    };


    //tooltips
    var tooltips = function() {
        $('.tooltip-wrapper').tooltip({
            selector: "[data-toggle=tooltip]",
            container: "body"
        })
    };

    //Sliders
    var sliders = function() {
        $('.slider-span').slider()
    };


    //Chart.js LineChart, BarChart, DoughnutChart
    var chartJs = function() {
        //Line Charts
        var randomScalingFactor = function() {
            return Math.round(Math.random() * 100)
        };
        var lineChartData = {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: 'Network Usage',
                    fillColor: 'rgba(26,188,156,0.5)',
                    strokeColor: 'rgba(26,188,156,1)',
                    pointColor: 'rgba(220,220,220,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220,220,220,1)',
                    data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
                }, {
                    label: 'CPU Load',
                    fillColor: 'rgba(31,123,182,0.5)',
                    strokeColor: 'rgba(31,123,182,1)',
                    pointColor: 'rgba(151,187,205,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151,187,205,1)',
                    data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
                }]

            }
            //Bar Charts
        var randomScalingFactor = function() {
            return Math.round(Math.random() * 100)
        };
        var barChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                fillColor: 'rgba(26,188,156,0.5)',
                strokeColor: 'rgba(255,255,255,0.8)',
                highlightFill: 'rgba(26,188,156,1)',
                highlightStroke: 'rgba(255,255,255,0.8)',
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }, {
                label: 'CPU Load',
                fillColor: 'rgba(31,123,182,0.5)',
                strokeColor: 'rgba(255,255,255,0.8)',
                highlightFill: 'rgba(31,123,182,1)',
                highlightStroke: 'rgba(255,255,255,0.8)',
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }]

        }

        //DoughnutChart
        var doughnutData = [{
                value: 300,
                color: "#1ABC9C",
                highlight: "#1ABC9C",
                label: "Chrome"
            }, {
                value: 50,
                color: "#556B8D",
                highlight: "#556B8D",
                label: "IE"
            }, {
                value: 100,
                color: "#EDCE8C",
                highlight: "#EDCE8C",
                label: "Safari"
            }, {
                value: 40,
                color: "#CED1D3",
                highlight: "#1F7BB6",
                label: "Other"
            }, {
                value: 120,
                color: "#1F7BB6",
                highlight: "#1F7BB6",
                label: "Firefox"
            }

        ];



        window.onload = function() {
            var ctx1 = document.getElementById("canvas1").getContext("2d");
            window.myLine = new Chart(ctx1).Line(lineChartData, {
                responsive: true
            });

            var ctx2 = document.getElementById("canvas2").getContext("2d");
            window.myBar = new Chart(ctx2).Bar(barChartData, {
                responsive: true
            });

            var ctx3 = document.getElementById("doughnut-chart-area").getContext("2d");
            window.myDoughnut = new Chart(ctx3).Doughnut(doughnutData, {
                responsive: true
            });

        };

    };



    var nestedSortable = function() {
        var updateOutput = function(e) {
            var list = e.length ? e : $(e.target),
                output = list.data('output');
            if (window.JSON) {
                output.val(window.JSON.stringify(list.nestable('serialize'))); //, null, 2));
            } else {
                output.val('JSON browser support required for this demo.');
            }
        };

        // activate Nestable for list 1
        $('#nestable').nestable({
                group: 1
            })
            .on('change', updateOutput);

        // activate Nestable for list 2
        $('#nestable2').nestable({
                group: 1
            })
            .on('change', updateOutput);

        // output initial serialised data
        updateOutput($('#nestable').data('output', $('#nestable-output')));
        updateOutput($('#nestable2').data('output', $('#nestable2-output')));

        $('#nestable-menu').on('click', function(e) {
            var target = $(e.target),
                action = target.data('action');
            if (action === 'expand-all') {
                $('.dd').nestable('expandAll');
            }
            if (action === 'collapse-all') {
                $('.dd').nestable('collapseAll');
            }
        });
    };


    var formValidation = function() {
        $('#form').validate({
            rules: {
                input1: {
                    required: true
                },
                input2: {
                    minlength: 5,
                    required: true
                },
                input3: {
                    maxlength: 5,
                    required: true
                },
                input4: {
                    required: true,
                    minlength: 4,
                    maxlength: 8
                },
                input5: {
                    required: true,
                    min: 5
                },
                input6: {
                    required: true,
                    range: [5, 50]
                },
                input7: {
                    minlength: 5
                },
                input8: {
                    required: true,
                    minlength: 5,
                    equalTo: "#input7"
                },
                input9: {
                    required: true,
                    email: true
                },
                input10: {
                    required: true,
                    url: true
                },
                input11: {
                    required: true,
                    digits: true
                },
                input12: {
                    required: true,
                    phoneUS: true
                },
                input13: {
                    required: true,
                    minlength: 5
                }
            },
            highlight: function(element) {
                $(element).closest('.form-group').removeClass('success').addClass('error');
            },
            success: function(element) {
                element.text('OK!').addClass('valid')
                    .closest('.form-group').removeClass('error').addClass('success');
            }
        });
    }


    var spinStart = function(spinOn) {
        var spinFull = $('<div class="preloader"><div class="iconWrapper"><i class="fa fa-circle-o-notch fa-spin"></i></div></div>');
        var spinInner = $('<div class="preloader preloader-inner"><div class="iconWrapper"><i class="fa fa-circle-o-notch fa-spin"></i></div></div>');
        if (spinOn === undefined) {
            $('body').prepend(spinFull);
        } else {
            $(spinOn).prepend(spinInner);
        };

    };


    var spinStop = function() {
        $('.preloader').remove();
    };

    var switcheryToggle = function() {
        var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
        elems.forEach(function(html) {
            var switchery = new Switchery(html, {
                size: 'small',
                color: '#27B6AF',
                secondaryColor: '#B3B8C3'
            });
        });
    };

    var fullscreenWidget = function() {
        $('.panel .fa-expand').click(function() {
            var panel = $(this).closest('.panel');
            panel.toggleClass('widget-fullscreen');
            $(this).toggleClass('fa-expand fa-compress');
            $('body').toggleClass('fullscreen-widget-active')

        })
    };


    var fullscreenMode = function() {
       $('#toggle-fullscreen.expand').on('click',function(){
        $(document).toggleFullScreen()
        $('#toggle-fullscreen .fa').toggleClass('fa-expand fa-compress');
       });
    };



    //return functions
    return {
        dateRangePicker: dateRangePicker,
        sliders: sliders,
        nestedSortable: nestedSortable,
        chartJs: chartJs,
        customCheckbox: customCheckbox,
        formValidation: formValidation,
        formMask: formMask,
        formWizard: formWizard,
        weather: weather,
        spinStart: spinStart,
        spinStop: spinStop
    };
}();


$(window).resize(function() {
    app.chartJs();

});
/*!
 * froala_editor v1.2.7 (https://www.froala.com/wysiwyg-editor)
 * License https://www.froala.com/wysiwyg-editor/terms
 * Copyright 2014-2015 Froala Labs
 */

if("undefined"==typeof jQuery)throw new Error("Froala requires jQuery");!function(a){"use strict";var b=function(c,d){return this.options=a.extend({},b.DEFAULTS,a(c).data(),"object"==typeof d&&d),this.options.unsupportedAgents.test(navigator.userAgent)?!1:(this.valid_nodes=a.merge([],b.VALID_NODES),this.valid_nodes=a.merge(this.valid_nodes,a.map(Object.keys(this.options.blockTags),function(a){return a.toUpperCase()})),this.browser=b.browser(),this.disabledList=[],this._id=++b.count,this._events={},this.blurred=!0,this.$original_element=a(c),this.document=c.ownerDocument,this.window="defaultView"in this.document?this.document.defaultView:this.document.parentWindow,this.$document=a(this.document),this.$window=a(this.window),this.br=this.browser.msie&&a.Editable.getIEversion()<=10?"":"<br/>",this.init(c),void a(c).on("editable.focus",a.proxy(function(){for(var b=1;b<=a.Editable.count;b++)b!=this._id&&this.$window.trigger("blur."+b)},this)))};b.initializers=[],b.count=0,b.VALID_NODES=["P","DIV","LI","TD","TH"],b.LANGS=[],b.INVISIBLE_SPACE="&#x200b;",b.DEFAULTS={allowComments:!0,allowScript:!1,allowStyle:!1,allowedAttrs:["accept","accept-charset","accesskey","action","align","alt","async","autocomplete","autofocus","autoplay","autosave","background","bgcolor","border","charset","cellpadding","cellspacing","checked","cite","class","color","cols","colspan","content","contenteditable","contextmenu","controls","coords","data","data-.*","datetime","default","defer","dir","dirname","disabled","download","draggable","dropzone","enctype","for","form","formaction","headers","height","hidden","high","href","hreflang","http-equiv","icon","id","ismap","itemprop","keytype","kind","label","lang","language","list","loop","low","max","maxlength","media","method","min","multiple","name","novalidate","open","optimum","pattern","ping","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","reversed","rows","rowspan","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","span","src","srcdoc","srclang","srcset","start","step","summary","spellcheck","style","tabindex","target","title","type","translate","usemap","value","valign","width","wrap"],allowedTags:["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","br","button","canvas","caption","cite","code","col","colgroup","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meter","nav","noscript","object","ol","optgroup","option","output","p","param","pre","progress","queue","rp","rt","ruby","s","samp","script","section","select","small","source","span","strike","strong","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],alwaysBlank:!1,alwaysVisible:!1,autosave:!1,autosaveInterval:1e4,beautifyCode:!0,blockTags:{n:"Normal",blockquote:"Quote",pre:"Code",h1:"Heading 1",h2:"Heading 2",h3:"Heading 3",h4:"Heading 4",h5:"Heading 5",h6:"Heading 6"},buttons:["bold","italic","underline","strikeThrough","fontSize","fontFamily","color","sep","formatBlock","blockStyle","align","insertOrderedList","insertUnorderedList","outdent","indent","sep","createLink","insertImage","insertVideo","insertHorizontalRule","undo","redo","html"],crossDomain:!0,convertMailAddresses:!0,customButtons:{},customDropdowns:{},customText:!1,defaultTag:"P",direction:"ltr",disableRightClick:!1,editInPopup:!1,editorClass:"",formatTags:["p","pre","blockquote","h1","h2","h3","h4","h5","h6","div","ul","ol","li","table","tbody","thead","tfoot","tr","th","td","body","head","html","title","meta","link","base","script","style"],headers:{},height:"auto",icons:{},inlineMode:!0,initOnClick:!1,fullPage:!1,language:"en_us",linkList:[],linkText:!1,linkClasses:{},linkAttributes:{},linkAutoPrefix:"",maxHeight:"auto",minHeight:"auto",multiLine:!0,noFollow:!0,paragraphy:!0,placeholder:"Type something",plainPaste:!1,preloaderSrc:"",saveURL:null,saveParam:"body",saveParams:{},saveRequestType:"POST",scrollableContainer:"body",simpleAmpersand:!1,shortcuts:!0,shortcutsAvailable:["show","bold","italic","underline","createLink","insertImage","indent","outdent","html","formatBlock n","formatBlock h1","formatBlock h2","formatBlock h3","formatBlock h4","formatBlock h5","formatBlock h6","formatBlock blockquote","formatBlock pre","strikeThrough"],showNextToCursor:!1,spellcheck:!1,theme:null,toolbarFixed:!0,trackScroll:!1,unlinkButton:!0,useClasses:!0,tabSpaces:!0,typingTimer:500,pastedImagesUploadRequestType:"POST",pastedImagesUploadURL:"http://i.froala.com/upload_base64",unsupportedAgents:/Opera Mini/i,useFrTag:!1,width:"auto",withCredentials:!1,zIndex:2e3},b.prototype.destroy=function(){this.sync(),this.options.useFrTag&&this.addFrTag(),this.hide(),this.isHTML&&this.html(),this.$bttn_wrapper&&this.$bttn_wrapper.html("").removeData().remove(),this.$editor&&this.$editor.html("").removeData().remove(),this.raiseEvent("destroy"),this.$popup_editor&&this.$popup_editor.html("").removeData().remove(),this.$placeholder&&this.$placeholder.html("").removeData().remove(),clearTimeout(this.ajaxInterval),clearTimeout(this.typingTimer),this.$element.off("mousedown mouseup click keydown keyup cut copy paste focus keypress touchstart touchend touch drop"),this.$element.off("mousedown mouseup click keydown keyup cut copy paste focus keypress touchstart touchend touch drop","**"),this.$window.off("mouseup."+this._id),this.$window.off("keydown."+this._id),this.$window.off("keyup."+this._id),this.$window.off("blur."+this._id),this.$window.off("hide."+this._id),this.$window.off("scroll."+this._id),this.$window.off("resize."+this._id),this.$window.off("orientationchange."+this._id),this.$document.off("selectionchange."+this._id),this.$original_element.off("editable"),void 0!==this.$upload_frame&&this.$upload_frame.remove(),this.$textarea&&(this.$box.remove(),this.$textarea.removeData("fa.editable"),this.$textarea.show());for(var a in this._events)delete this._events[a];this.$placeholder&&this.$placeholder.remove(),this.isLink?this.$element.removeData("fa.editable"):(this.$wrapper?this.$wrapper.replaceWith(this.getHTML(!1,!1)):this.$element.replaceWith(this.getHTML(!1,!1)),this.$box&&!this.editableDisabled&&(this.$box.removeClass("froala-box f-rtl"),this.$box.find(".html-switch").remove(),this.$box.removeData("fa.editable"),clearTimeout(this.typingTimer))),this.$lb&&this.$lb.remove()},b.prototype.triggerEvent=function(b,c,d,e){void 0===d&&(d=!0),void 0===e&&(e=!1),d===!0&&(this.isResizing()||this.editableDisabled||this.imageMode||!e||this.cleanify(),this.sync());var f=!0;return c||(c=[]),f=this.$original_element.triggerHandler("editable."+b,a.merge([this],c)),void 0===f?!0:f},b.prototype.syncStyle=function(){if(this.options.fullPage){var a=this.$element.html().match(/\[style[^\]]*\].*\[\/style\]/gi);if(this.$document.find("head style[data-id]").remove(),a)for(var b=0;b<a.length;b++)this.$document.find("head").append(a[b].replace(/\[/gi,"<").replace(/\]/gi,">"))}},b.prototype.sync=function(){if(!this.isHTML){this.raiseEvent("sync"),this.disableImageResize(),this.isLink||this.isImage||this.checkPlaceholder();var a=this.getHTML();this.trackHTML!==a&&null!=this.trackHTML?(this.refreshImageList(),this.refreshButtons(),this.trackHTML=a,this.$textarea&&this.$textarea.val(a),this.doingRedo||this.saveUndoStep(),this.triggerEvent("contentChanged",[],!1)):null==this.trackHTML&&(this.trackHTML=a),this.syncStyle()}},b.prototype.emptyElement=function(b){if("IMG"==b.tagName||a(b).find("img").length>0)return!1;if(a(b).find("input, iframe, object").length>0)return!1;for(var c=a(b).text(),d=0;d<c.length;d++)if("\n"!==c[d]&&"\r"!==c[d]&&"	"!==c[d]&&8203!=c[d].charCodeAt(0))return!1;return!0},b.prototype.initEvents=function(){this.mobile()?(this.mousedown="touchstart",this.mouseup="touchend",this.move="touchmove"):(this.mousedown="mousedown",this.mouseup="mouseup",this.move="")},b.prototype.initDisable=function(){this.$element.on("keypress keydown keyup",a.proxy(function(a){return this.isDisabled?(a.stopPropagation(),a.preventDefault(),!1):void 0},this))},b.prototype.continueInit=function(){this.initDisable(),this.initEvents(),this.browserFixes(),this.handleEnter(),this.editableDisabled||(this.initUndoRedo(),this.enableTyping(),this.initShortcuts()),this.initTabs(),this.initEditor();for(var b=0;b<a.Editable.initializers.length;b++)a.Editable.initializers[b].call(this);this.initOptions(),this.initEditorSelection(),this.initAjaxSaver(),this.setLanguage(),this.setCustomText(),this.editableDisabled||this.registerPaste(),this.refreshDisabledState(),this.refreshUndo(),this.refreshRedo(),this.initPopupSubmit(),this.initialized=!0,this.triggerEvent("initialized",[],!1,!1)},b.prototype.initPopupSubmit=function(){this.$popup_editor.find(".froala-popup input").keydown(function(b){var c=b.which;13==c&&(b.preventDefault(),b.stopPropagation(),a(this).blur(),a(this).parents(".froala-popup").find("button.f-submit").click())})},b.prototype.lateInit=function(){this.saveSelectionByMarkers(),this.continueInit(),this.restoreSelectionByMarkers(),this.$element.focus(),this.hideOtherEditors()},b.prototype.init=function(b){this.options.paragraphy||(this.options.defaultTag="DIV"),this.options.allowStyle&&this.setAllowStyle(),this.options.allowScript&&this.setAllowScript(),this.initElement(b),this.initElementStyle(),(!this.isLink||this.isImage)&&(this.initImageEvents(),this.buildImageMove()),this.options.initOnClick?(this.editableDisabled||(this.$element.attr("contenteditable",!0),this.$element.attr("spellcheck",!1)),this.$element.bind("mousedown.element focus.element",a.proxy(function(a){return this.isLink||a.stopPropagation(),this.isDisabled?!1:(this.$element.unbind("mousedown.element focus.element"),this.browser.webkit&&(this.initMouseUp=!1),void this.lateInit())},this))):this.continueInit()},b.prototype.phone=function(){var a=!1;return function(b){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,4)))&&(a=!0)}(navigator.userAgent||navigator.vendor||window.opera),a},b.prototype.mobile=function(){return this.phone()||this.android()||this.iOS()||this.blackberry()},b.prototype.iOS=function(){return/(iPad|iPhone|iPod)/g.test(navigator.userAgent)},b.prototype.iOSVersion=function(){if(/iP(hone|od|ad)/.test(navigator.platform)){var a=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),b=[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3]||0,10)];if(b&&b[0])return b[0]}return 0},b.prototype.iPad=function(){return/(iPad)/g.test(navigator.userAgent)},b.prototype.iPhone=function(){return/(iPhone)/g.test(navigator.userAgent)},b.prototype.iPod=function(){return/(iPod)/g.test(navigator.userAgent)},b.prototype.android=function(){return/(Android)/g.test(navigator.userAgent)},b.prototype.blackberry=function(){return/(Blackberry)/g.test(navigator.userAgent)},b.prototype.initOnTextarea=function(b){this.$textarea=a(b),void 0!==this.$textarea.attr("placeholder")&&"Type something"==this.options.placeholder&&(this.options.placeholder=this.$textarea.attr("placeholder")),this.$element=a("<div>").html(this.clean(this.$textarea.val(),!0,!1)),this.$textarea.before(this.$element).hide(),this.$textarea.parents("form").bind("submit",a.proxy(function(){this.isHTML?this.html():this.sync()},this)),this.addListener("destroy",a.proxy(function(){this.$textarea.parents("form").unbind("submit")},this))},b.prototype.initOnLink=function(b){this.isLink=!0,this.options.linkText=!0,this.selectionDisabled=!0,this.editableDisabled=!0,this.options.buttons=[],this.$element=a(b),this.options.paragraphy=!1,this.options.countCharacters=!1,this.$box=this.$element},b.prototype.initOnImage=function(b){var c=a(b).css("float");"A"==a(b).parent().get(0).tagName&&(b=a(b).parent()),this.isImage=!0,this.editableDisabled=!0,this.imageList=[],this.options.buttons=[],this.options.paragraphy=!1,this.options.imageMargin="auto",a(b).wrap("<div>"),this.$element=a(b).parent(),this.$element.css("display","inline-block"),this.$element.css("max-width","100%"),this.$element.css("margin-left","auto"),this.$element.css("margin-right","auto"),this.$element.css("float",c),this.$element.addClass("f-image"),this.$box=a(b)},b.prototype.initForPopup=function(b){this.$element=a(b),this.$box=this.$element,this.editableDisabled=!0,this.options.countCharacters=!1,this.options.buttons=[],this.$element.on("click",a.proxy(function(a){a.preventDefault()},this))},b.prototype.initOnDefault=function(b){"DIV"!=b.tagName&&this.options.buttons.indexOf("formatBlock")>=0&&this.disabledList.push("formatBlock"),this.$element=a(b)},b.prototype.initElement=function(b){if("TEXTAREA"==b.tagName?this.initOnTextarea(b):"A"==b.tagName?this.initOnLink(b):"IMG"==b.tagName?this.initOnImage(b):this.options.editInPopup?this.initForPopup(b):this.initOnDefault(b),!this.editableDisabled){this.$box=this.$element.addClass("froala-box"),this.$wrapper=a('<div class="froala-wrapper">'),this.$element=a("<div>");var c=this.$box.html();this.$box.html(this.$wrapper.html(this.$element)),this.$element.on("keyup",a.proxy(function(){this.$element.find("ul, ol").length>1&&this.cleanupLists()},this)),this.setHTML(c,!0)}this.$element.on("drop",a.proxy(function(){setTimeout(a.proxy(function(){a("html").click(),this.$element.find(".f-img-wrap").each(function(b,c){0===a(c).find("img").length&&a(c).remove()}),this.$element.find(this.options.defaultTag+":empty").remove()},this),1)},this))},b.prototype.trim=function(a){return a=String(a).replace(/^\s+|\s+$/g,""),a=a.replace(/\u200B/gi,"")},b.prototype.unwrapText=function(){this.options.paragraphy||this.$element.find(this.options.defaultTag).each(a.proxy(function(b,c){if(0===c.attributes.length){var d=a(c).find("br:last");a(c).replaceWith(d.length&&this.isLastSibling(d.get(0))?a(c).html():a(c).html()+"<br/>")}},this))},b.prototype.wrapTextInElement=function(b,c){void 0===c&&(c=!1);var d=[],e=["SPAN","A","B","I","EM","U","S","STRONG","STRIKE","FONT","IMG","SUB","SUP","BUTTON","INPUT"],f=this;this.no_verify=!0;var g=function(){if(0===d.length)return!1;var b=a("<"+f.options.defaultTag+">"),c=a(d[0]);if(1==d.length&&"f-marker"==c.attr("class"))return void(d=[]);for(var e=0;e<d.length;e++){var g=a(d[e]);b.append(g.clone()),e==d.length-1?g.replaceWith(b):g.remove()}d=[]},h=!1,i=!1,j=!1;b.contents().filter(function(){var b=a(this);if(b.hasClass("f-marker")||b.find(".f-marker").length){var k=b;if(1==b.find(".f-marker").length||b.hasClass("f-marker")){k=b.find(".f-marker").length?a(b.find(".f-marker")[0]):b;var l=k.prev();"true"===k.attr("data-type")?l.length&&a(l[0]).hasClass("f-marker")?j=!0:(h=!0,i=!1):i=!0}else j=!0}this.nodeType==Node.TEXT_NODE&&b.text().length>0||e.indexOf(this.tagName)>=0?d.push(this):this.nodeType==Node.TEXT_NODE&&0===b.text().length&&f.options.beautifyCode?b.remove():h||c||j?("BR"===this.tagName&&(d.length>0?b.remove():d.push(this)),g(),i&&(h=!1),j=!1):d=[]}),(h||c||j)&&g(),b.find("> "+this.options.defaultTag).each(function(b,c){0===a(c).text().trim().length&&0===a(c).find("img").length&&0===a(c).find("br").length&&a(c).append(this.br)}),b.find("div:empty:not([class])").remove(),b.is(":empty")&&b.append(f.options.paragraphy===!0?"<"+this.options.defaultTag+">"+this.br+"</"+this.options.defaultTag+">":this.br),this.no_verify=!1},b.prototype.wrapText=function(b){if(this.isImage||this.isLink)return!1;this.allow_div=!0,this.removeBlankSpans();for(var c=this.getSelectionElements(),d=0;d<c.length;d++){var e=a(c[d]);["LI","TH","TD"].indexOf(e.get(0).tagName)>=0?this.wrapTextInElement(e,!0):this.parents(e,"li").length?this.wrapTextInElement(a(this.parents(e,"li")[0]),b):this.wrapTextInElement(this.$element,b)}this.allow_div=!1},b.prototype.convertNewLines=function(){this.$element.find("pre").each(function(b,c){var d=a(c),e=a(c).html();e.indexOf("\n")>=0&&d.html(e.replace(/\n/g,"<br>"))})},b.prototype.setHTML=function(b,c){this.no_verify=!0,this.allow_div=!0,void 0===c&&(c=!0),b=this.clean(b,!0,!1),b=b.replace(/>\s+</g,"><"),this.$element.html(b),this.cleanAttrs(this.$element.get(0)),this.convertNewLines(),this.imageList=[],this.refreshImageList(),this.options.paragraphy&&this.wrapText(!0),this.$element.find("li:empty").append(a.Editable.INVISIBLE_SPACE),this.cleanupLists(),this.cleanify(!1,!0,!1),c&&(this.restoreSelectionByMarkers(),this.sync()),this.$element.find("span").attr("data-fr-verified",!0),this.initialized&&(this.hide(),this.closeImageMode(),this.imageMode=!1),this.no_verify=!1,this.allow_div=!1},b.prototype.beforePaste=function(){this.saveSelectionByMarkers(),this.clipboardHTML=null,this.scrollPosition=this.$window.scrollTop(),this.$pasteDiv?this.$pasteDiv.html(""):(this.$pasteDiv=a('<div contenteditable="true" style="position: fixed; top: 0; left: -9999px; height: 100%; width: 0; z-index: 4000; line-height: 140%;" tabindex="-1"></div>'),this.$box.after(this.$pasteDiv)),this.$pasteDiv.focus(),this.window.setTimeout(a.proxy(this.processPaste,this),1)},b.prototype.processPaste=function(){var c=this.clipboardHTML;null===this.clipboardHTML&&(c=this.$pasteDiv.html(),this.restoreSelectionByMarkers(),this.$window.scrollTop(this.scrollPosition));var d,e=this.triggerEvent("onPaste",[c],!1);"string"==typeof e&&(c=e),c=c.replace(/<img /gi,'<img data-fr-image-pasted="true" '),c.match(/(class=\"?Mso|style=\"[^\"]*\bmso\-|w:WordDocument)/gi)?(d=this.wordClean(c),d=this.clean(a("<div>").append(d).html(),!1,!0),d=this.removeEmptyTags(d)):(d=this.clean(c,!1,!0),d=this.removeEmptyTags(d),b.copiedText&&a("<div>").html(d).text().replace(/\u00A0/gi," ")==b.copiedText.replace(/(\u00A0|\r|\n)/gi," ")&&(d=b.copiedHTML)),this.options.plainPaste&&(d=this.plainPasteClean(d)),e=this.triggerEvent("afterPasteCleanup",[d],!1),"string"==typeof e&&(d=e),""!==d&&(this.insertHTML(d,!0,!0),this.saveSelectionByMarkers(),this.removeBlankSpans(),this.$element.find(this.valid_nodes.join(":empty, ")+":empty").remove(),this.restoreSelectionByMarkers(),this.$element.find("li[data-indent]").each(a.proxy(function(b,c){this.indentLi?(a(c).removeAttr("data-indent"),this.indentLi(a(c))):a(c).removeAttr("data-indent")},this)),this.$element.find("li").each(a.proxy(function(b,c){this.wrapTextInElement(a(c),!0)},this)),this.options.paragraphy&&this.wrapText(!0),this.cleanupLists()),this.afterPaste()},b.prototype.afterPaste=function(){this.uploadPastedImages(),this.checkPlaceholder(),this.pasting=!1,this.triggerEvent("afterPaste",[],!0,!1)},b.prototype.getSelectedHTML=function(){function b(b,d){for(;3==d.nodeType||c.valid_nodes.indexOf(d.tagName)<0;)3!=d.nodeType&&a(b).wrapInner("<"+d.tagName+c.attrs(d)+"></"+d.tagName+">"),d=d.parentNode}var c=this,d="";if("undefined"!=typeof window.getSelection)for(var e=this.getRanges(),f=0;f<e.length;f++){var g=document.createElement("div");g.appendChild(e[f].cloneContents()),b(g,this.getSelectionParent()),d+=g.innerHTML}else"undefined"!=typeof document.selection&&"Text"==document.selection.type&&(d=document.selection.createRange().htmlText);return d},b.prototype.registerPaste=function(){this.$element.on("copy cut",a.proxy(function(){this.isHTML||(b.copiedHTML=this.getSelectedHTML(),b.copiedText=a("<div>").html(b.copiedHTML).text())},this)),this.$element.on("paste",a.proxy(function(b){if(!this.isHTML){if(b.originalEvent&&(b=b.originalEvent),!this.triggerEvent("beforePaste",[],!1))return!1;if(this.clipboardPaste(b))return!1;this.clipboardHTML="",this.pasting=!0,this.scrollPosition=this.$window.scrollTop();var c=!1;if(b&&b.clipboardData&&b.clipboardData.getData){var d="",e=b.clipboardData.types;if(a.Editable.isArray(e))for(var f=0;f<e.length;f++)d+=e[f]+";";else d=e;if(/text\/html/.test(d)?this.clipboardHTML=b.clipboardData.getData("text/html"):/text\/rtf/.test(d)&&this.browser.safari?this.clipboardHTML=b.clipboardData.getData("text/rtf"):/text\/plain/.test(d)&&!this.browser.mozilla&&(this.clipboardHTML=this.escapeEntities(b.clipboardData.getData("text/plain")).replace(/\n/g,"<br/>")),""!==this.clipboardHTML?c=!0:this.clipboardHTML=null,c)return this.processPaste(),b.preventDefault&&(b.stopPropagation(),b.preventDefault()),!1}this.beforePaste()}},this))},b.prototype.clipboardPaste=function(b){if(b&&b.clipboardData&&b.clipboardData.items&&b.clipboardData.items[0]){var c=b.clipboardData.items[0].getAsFile();if(c){var d=new FileReader;return d.onload=a.proxy(function(a){var b=a.target.result;this.insertHTML('<img data-fr-image-pasted="true" src="'+b+'" />'),this.afterPaste()},this),d.readAsDataURL(c),!0}}return!1},b.prototype.uploadPastedImages=function(){this.options.imageUpload&&this.$element.find("img[data-fr-image-pasted]").each(a.proxy(function(b,c){if(this.options.pasteImage){if(0===c.src.indexOf("data:")){if(this.options.defaultImageWidth&&a(c).attr("width",this.options.defaultImageWidth),this.options.pastedImagesUploadURL){if(!this.triggerEvent("beforeUploadPastedImage",[c],!1))return!1;setTimeout(a.proxy(function(){this.showImageLoader(),this.$progress_bar.find("span").css("width","100%").text("Please wait!"),this.showByCoordinates(a(c).offset().left+a(c).width()/2,a(c).offset().top+a(c).height()+10),this.isDisabled=!0},this),10),a.ajax({type:this.options.pastedImagesUploadRequestType,url:this.options.pastedImagesUploadURL,data:a.extend({image:decodeURIComponent(c.src)},this.options.imageUploadParams),crossDomain:this.options.crossDomain,xhrFields:{withCredentials:this.options.withCredentials},headers:this.options.headers,dataType:"json"}).done(a.proxy(function(b){try{if(b.link){var d=new Image;d.onerror=a.proxy(function(){a(c).remove(),this.hide(),this.throwImageError(1)},this),d.onload=a.proxy(function(){c.src=b.link,this.hideImageLoader(),this.hide(),this.enable(),setTimeout(function(){a(c).trigger("touchend")},50),this.triggerEvent("afterUploadPastedImage",[a(c)])},this),d.src=b.link}else b.error?(a(c).remove(),this.hide(),this.throwImageErrorWithMessage(b.error)):(a(c).remove(),this.hide(),this.throwImageError(2))}catch(e){a(c).remove(),this.hide(),this.throwImageError(4)}},this)).fail(a.proxy(function(){a(c).remove(),this.hide(),this.throwImageError(3)},this))}}else 0!==c.src.indexOf("http")&&a(c).remove();a(c).removeAttr("data-fr-image-pasted")}else a(c).remove()},this))},b.prototype.disable=function(){this.isDisabled=!0,this.$element.blur(),this.$box.addClass("fr-disabled"),this.$element.attr("contenteditable",!1)},b.prototype.enable=function(){this.isDisabled=!1,this.$box.removeClass("fr-disabled"),this.$element.attr("contenteditable",!0)},b.prototype.wordClean=function(a){a.indexOf("<body")>=0&&(a=a.replace(/[.\s\S\w\W<>]*<body[^>]*>([.\s\S\w\W<>]*)<\/body>[.\s\S\w\W<>]*/g,"$1")),a=a.replace(/<p(.*?)class="?'?MsoListParagraph"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ul><li>$3</li></ul>"),a=a.replace(/<p(.*?)class="?'?NumberedText"?'? ([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ol><li>$3</li></ol>"),a=a.replace(/<p(.*?)class="?'?MsoListParagraphCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ul><li$3>$5</li>"),a=a.replace(/<p(.*?)class="?'?NumberedTextCxSpFirst"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<ol><li$3>$5</li>"),a=a.replace(/<p(.*?)class="?'?MsoListParagraphCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li>"),a=a.replace(/<p(.*?)class="?'?NumberedTextCxSpMiddle"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li>"),a=a.replace(/<p(.*?)class="?'?MsoListParagraphCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li></ul>"),a=a.replace(/<p(.*?)class="?'?NumberedTextCxSpLast"?'?([\s\S]*?)(level\d)?([\s\S]*?)>([\s\S]*?)<\/p>/gi,"<li$3>$5</li></ol>"),a=a.replace(/<span([^<]*?)style="?'?mso-list:Ignore"?'?([\s\S]*?)>([\s\S]*?)<span/gi,"<span><span"),a=a.replace(/<!--\[if \!supportLists\]-->([\s\S]*?)<!--\[endif\]-->/gi,""),a=a.replace(/<!\[if \!supportLists\]>([\s\S]*?)<!\[endif\]>/gi,""),a=a.replace(/(\n|\r| class=(")?Mso[a-zA-Z0-9]+(")?)/gi," "),a=a.replace(/<!--[\s\S]*?-->/gi,""),a=a.replace(/<(\/)*(meta|link|span|\\?xml:|st1:|o:|font)(.*?)>/gi,"");for(var b=["style","script","applet","embed","noframes","noscript"],c=0;c<b.length;c++){var d=new RegExp("<"+b[c]+".*?"+b[c]+"(.*?)>","gi");a=a.replace(d,"")}a=a.replace(/([\w\-]*)=("[^<>"]*"|'[^<>']*'|\w+)/gi,""),a=a.replace(/&nbsp;/gi," ");var e;do e=a,a=a.replace(/<[^\/>][^>]*><\/[^>]+>/gi,"");while(a!=e);return a=a.replace(/<lilevel([^1])([^>]*)>/gi,'<li data-indent="true"$2>'),a=a.replace(/<lilevel1([^>]*)>/gi,"<li$1>"),a=this.clean(a),a=a.replace(/<a>(.[^<]+)<\/a>/gi,"$1")},b.prototype.tabs=function(a){for(var b="",c=0;a>c;c++)b+="  ";return b},b.prototype.cleanTags=function(a,b){void 0===b&&(b=!1);var c,d,e,f,g=[],h=[],i=!1,j=!1,k=this.options.formatTags;for(d=0;d<a.length;d++)if(c=a.charAt(d),"<"==c){var l=a.indexOf(">",d+1);if(-1!==l){var m=a.substring(d,l+1),n=this.tagName(m);if(0===n.indexOf("!--")&&(l=a.indexOf("-->",d+1),-1!==l)){m=a.substring(d,l+3),h.push(m),d=l+2;continue}if(0===n.indexOf("!")){h.push(m),d=l;continue}if("head"==n&&this.options.fullPage&&(j=!0),j){h.push(m),d=l,"head"==n&&this.isClosingTag(m)&&(j=!1);continue}if(this.options.allowedTags.indexOf(n)<0&&(!this.options.fullPage||["html","head","body","!doctype"].indexOf(n)<0)){d=l;continue}var o=this.isClosingTag(m);if("pre"===n&&(i=o?!1:!0),this.isSelfClosingTag(m))h.push("br"===n&&i?"\n":m);else if(o)for(e=!1,f=!0;e===!1&&void 0!==f;)f=g.pop(),void 0!==f&&f.tag_name!==n?h.splice(f.i,1):(e=!0,void 0!==f&&h.push(m));else h.push(m),g.push({tag_name:n,i:h.length-1});d=l}}else"\n"===c&&this.options.beautifyCode?b&&i?h.push("<br/>"):i?h.push(c):g.length>0&&h.push(" "):9!=c.charCodeAt(0)&&h.push(c);for(;g.length>0;)f=g.pop(),h.splice(f.i,1);var p="\n";this.options.beautifyCode||(p=""),a="",g=0;var q=!0;for(d=0;d<h.length;d++)1==h[d].length?q&&" "===h[d]||(a+=h[d],q=!1):k.indexOf(this.tagName(h[d]).toLowerCase())<0?(a+=h[d],"br"==this.tagName(h[d])&&(a+=p)):this.isSelfClosingTag(h[d])?k.indexOf(this.tagName(h[d]).toLowerCase())>=0?(a+=this.tabs(g)+h[d]+p,q=!1):a+=h[d]:this.isClosingTag(h[d])?(g-=1,0===g&&(q=!0),a.length>0&&a[a.length-1]==p&&(a+=this.tabs(g)),a+=h[d]+p):(a+=p+this.tabs(g)+h[d],g+=1,q=!1);return a[0]==p&&(a=a.substring(1,a.length)),a[a.length-1]==p&&(a=a.substring(0,a.length-1)),a},b.prototype.cleanupLists=function(){this.$element.find("ul, ol").each(function(b,c){var d=a(c);if(d.find(".close-ul, .open-ul, .close-ol, .open-ol, .open-li, .close-li").length>0){var e="<"+c.tagName.toLowerCase()+">"+d.html()+"</"+c.tagName.toLowerCase()+">";e=e.replace(new RegExp('<span class="close-ul" data-fr-verified="true"></span>',"g"),"</ul>"),e=e.replace(new RegExp('<span class="open-ul" data-fr-verified="true"></span>',"g"),"<ul>"),e=e.replace(new RegExp('<span class="close-ol" data-fr-verified="true"></span>',"g"),"</ol>"),e=e.replace(new RegExp('<span class="open-ol" data-fr-verified="true"></span>',"g"),"<ol>"),e=e.replace(new RegExp('<span class="close-li" data-fr-verified="true"></span>',"g"),"</li>"),e=e.replace(new RegExp('<span class="open-li" data-fr-verified="true"></span>',"g"),"<li>"),d.replaceWith(e)}}),this.$element.find("li > td").remove(),this.$element.find("li td:empty").append(a.Editable.INVISIBLE_SPACE),this.$element.find(" > li").wrap("<ul>"),this.$element.find("ul, ol").each(a.proxy(function(b,c){var d=a(c);0===d.find(this.valid_nodes.join(",")).length&&d.remove()},this)),this.$element.find("li > ul, li > ol").each(a.proxy(function(b,c){this.isFirstSibling(c)&&a(c).before("<br/>")},this)),this.$element.find("li:empty").remove();for(var b=this.$element.find("ol + ol, ul + ul"),c=0;c<b.length;c++){var d=a(b[c]);this.attrs(b[c])==this.attrs(d.prev().get(0))&&(d.prev().append(d.html()),d.remove())}this.$element.find("li > td").remove(),this.$element.find("li td:empty").append(a.Editable.INVISIBLE_SPACE),this.$element.find("li > "+this.options.defaultTag).each(function(b,c){0===c.attributes.length&&a(c).replaceWith(a(c).html())})},b.prototype.escapeEntities=function(a){return a.replace(/</gi,"&lt;").replace(/>/gi,"&gt;").replace(/"/gi,"&quot;").replace(/'/gi,"&apos;")},b.prototype.cleanNodeAttrs=function(a,b){var c=a.attributes;if(c)for(var d=new RegExp("^"+b.join("$|^")+"$","i"),e=0;e<c.length;e++){var f=c[e];d.test(f.nodeName)?a.setAttribute(f.nodeName,this.escapeEntities(f.nodeValue)):a.removeAttribute(f.nodeName)}},b.prototype.cleanAttrs=function(a){1==a.nodeType&&a.className.indexOf("f-marker")<0&&a!==this.$element.get(0)&&"IFRAME"!=a.tagName&&this.cleanNodeAttrs(a,this.options.allowedAttrs,!0);for(var b=a.childNodes,c=0;c<b.length;c++)this.cleanAttrs(b[c])},b.prototype.clean=function(c,d,e,f,g){this.pasting&&b.copiedText===a("<div>").html(c).text()&&(e=!1,d=!0),g||(g=a.merge([],this.options.allowedAttrs)),f||(f=a.merge([],this.options.allowedTags)),d||g.indexOf("id")>-1&&g.splice(g.indexOf("id"),1),this.options.fullPage&&(c=c.replace(/<!DOCTYPE([^>]*?)>/i,"<!-- DOCTYPE$1 -->"),c=c.replace(/<html([^>]*?)>/i,"<!-- html$1 -->"),c=c.replace(/<\/html([^>]*?)>/i,"<!-- /html$1 -->"),c=c.replace(/<body([^>]*?)>/i,"<!-- body$1 -->"),c=c.replace(/<\/body([^>]*?)>/i,"<!-- /body$1 -->"),c=c.replace(/<head>([\w\W]*)<\/head>/i,function(a,b){var c=1;return b=b.replace(/(<style)/gi,function(a,b){return b+" data-id="+c++}),"<!-- head "+b.replace(/(>)([\s|\t]*)(<)/gi,"$1$3").replace(/</gi,"[").replace(/>/gi,"]")+" -->"})),this.options.allowComments?(this.options.allowedTags.push("!--"),this.options.allowedTags.push("!")):c=c.replace(/<!--.*?-->/gi,""),this.options.allowScript||(c=c.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"")),this.options.allowStyle||(c=c.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi,""));var h=new RegExp("<\\/?((?!(?:"+f.join(" |")+" |"+f.join(">|")+">|"+f.join("/>|")+"/>))\\w+)[^>]*?>","gi");if(c=c.replace(h,""),e){var i=new RegExp("style=(\"[a-zA-Z0-9:;\\.\\s\\(\\)\\-\\,!\\/'%]*\"|'[a-zA-Z0-9:;\\.\\s\\(\\)\\-\\,!\\/\"%]*')","gi");c=c.replace(i,""),c=c.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi,"")}c=this.cleanTags(c,!0),c=c.replace(/(\r|\n)/gi,"");
var j=new RegExp("<([^>]*)( src| href)=('[^']*'|\"[^\"]*\"|[^\\s>]+)([^>]*)>","gi");if(c=c.replace(j,a.proxy(function(a,b,c,d,e){return"<"+b+c+'="'+this.sanitizeURL(d.replace(/^["'](.*)["']\/?$/gi,"$1"))+'"'+e+">"},this)),!d){var k=a("<div>").append(c);k.find('[class]:not([class^="fr-"])').each(function(b,c){a(c).removeAttr("class")}),c=k.html()}return c},b.prototype.removeBlankSpans=function(){this.no_verify=!0,this.$element.find("span").removeAttr("data-fr-verified"),this.$element.find("span").each(a.proxy(function(b,c){0===this.attrs(c).length&&a(c).replaceWith(a(c).html())},this)),this.$element.find("span").attr("data-fr-verified",!0),this.no_verify=!1},b.prototype.plainPasteClean=function(b){var c=a("<div>").html(b);c.find("p, div, h1, h2, h3, h4, h5, h6, pre, blockquote").each(a.proxy(function(b,c){a(c).replaceWith("<"+this.options.defaultTag+">"+a(c).html()+"</"+this.options.defaultTag+">")},this)),a(c.find("*").not("p, div, h1, h2, h3, h4, h5, h6, pre, blockquote, ul, ol, li, table, tbody, thead, tr, td").get().reverse()).each(function(){a(this).replaceWith(a(this).html())});var d=function(b){for(var c=b.contents(),e=0;e<c.length;e++)3!=c[e].nodeType&&1!=c[e].nodeType?a(c[e]).remove():d(a(c[e]))};return d(c),c.html()},b.prototype.removeEmptyTags=function(b){for(var c,d=a("<div>").html(b),e=d.find("*:empty:not(br, img, td, th)");e.length;){for(c=0;c<e.length;c++)a(e[c]).remove();e=d.find("*:empty:not(br, img, td, th)")}for(var f=d.find("> div, td > div, th > div, li > div");f.length;){var g=a(f[f.length-1]);g.replaceWith(g.html()+"<br/>"),f=d.find("> div, td > div, th > div, li > div")}for(f=d.find("div");f.length;){for(c=0;c<f.length;c++){var h=a(f[c]),i=h.html().replace(/\u0009/gi,"").trim();h.replaceWith(i)}f=d.find("div")}return d.html()},b.prototype.initElementStyle=function(){this.editableDisabled||this.$element.attr("contenteditable",!0);var a="froala-view froala-element "+this.options.editorClass;this.browser.msie&&b.getIEversion()<9&&(a+=" ie8"),this.$element.css("outline",0),this.browser.msie||(a+=" not-msie"),this.$element.addClass(a)},b.prototype.CJKclean=function(a){var b=/[\u3041-\u3096\u30A0-\u30FF\u4E00-\u9FFF\u3130-\u318F\uAC00-\uD7AF]/gi;return a.replace(b,"")},b.prototype.enableTyping=function(){this.typingTimer=null,this.$element.on("keydown","textarea, input",function(a){a.stopPropagation()}),this.$element.on("keydown cut",a.proxy(function(b){if(!this.isHTML){if(!this.options.multiLine&&13==b.which)return b.preventDefault(),b.stopPropagation(),!1;if("keydown"===b.type&&!this.triggerEvent("keydown",[b],!1))return!1;clearTimeout(this.typingTimer),this.ajaxSave=!1,this.oldHTML=this.getHTML(!0,!1),this.typingTimer=setTimeout(a.proxy(function(){var a=this.getHTML(!0,!1);this.ime||this.CJKclean(a)===this.CJKclean(this.oldHTML)||this.CJKclean(a)!==a||this.sync()},this),Math.max(this.options.typingTimer,500))}},this))},b.prototype.removeMarkersByRegex=function(a){return a.replace(/<span[^>]*? class\s*=\s*["']?f-marker["']?[^>]+>([\S\s][^\/])*<\/span>/gi,"")},b.prototype.getImageHTML=function(){return JSON.stringify({src:this.$element.find("img").attr("src"),style:this.$element.find("img").attr("style"),alt:this.$element.find("img").attr("alt"),width:this.$element.find("img").attr("width"),link:this.$element.find("a").attr("href"),link_title:this.$element.find("a").attr("title"),link_target:this.$element.find("a").attr("target")})},b.prototype.getLinkHTML=function(){return JSON.stringify({body:this.$element.html(),href:this.$element.attr("href"),title:this.$element.attr("title"),popout:this.$element.hasClass("popout"),nofollow:"nofollow"==this.$element.attr("ref"),blank:"_blank"==this.$element.attr("target"),cls:this.$element.attr("class")?this.$element.attr("class").replace(/froala-element ?|not-msie ?|froala-view ?/gi,"").trim():""})},b.prototype.addFrTag=function(){this.$element.find(this.valid_nodes.join(",")+", table, ul, ol, img").addClass("fr-tag")},b.prototype.removeFrTag=function(){this.$element.find(this.valid_nodes.join(",")+", table, ul, ol, img").removeClass("fr-tag")},b.prototype.getHTML=function(b,c,d){if(void 0===b&&(b=!1),void 0===c&&(c=this.options.useFrTag),void 0===d&&(d=!0),this.$element.hasClass("f-placeholder")&&!b)return"";if(this.isHTML)return this.$html_area.val();if(this.isImage)return this.getImageHTML();if(this.isLink)return this.getLinkHTML();this.$element.find("a").data("fr-link",!0),c&&this.addFrTag(),this.$element.find(".f-img-editor > img").each(a.proxy(function(b,c){a(c).removeClass("fr-fin fr-fil fr-fir fr-dib fr-dii").addClass(this.getImageClass(a(c).parent().attr("class")))},this)),this.options.useClasses||this.$element.find("img").each(a.proxy(function(b,c){var d=a(c);d.attr("data-style",this.getImageStyle(d))},this)),this.$element.find("pre").each(a.proxy(function(b,c){var d=a(c),e=d.html(),f=e.replace(/\&nbsp;/gi," ");e!=f&&(this.saveSelectionByMarkers(),d.html(f),this.restoreSelectionByMarkers())},this)),this.$element.find("pre br").addClass("fr-br"),this.$element.find('[class=""]').removeAttr("class"),this.cleanAttrs(this.$element.get(0));var e=this.$element.html();this.removeFrTag(),this.$element.find("pre br").removeAttr("class"),e=e.replace(/<a[^>]*?><\/a>/g,""),b||(e=this.removeMarkersByRegex(e)),e=e.replace(/<span[^>]*? class\s*=\s*["']?f-img-handle[^>]+><\/span>/gi,""),e=e.replace(/^([\S\s]*)<span[^>]*? class\s*=\s*["']?f-img-editor[^>]+>([\S\s]*)<\/span>([\S\s]*)$/gi,"$1$2$3"),e=e.replace(/^([\S\s]*)<span[^>]*? class\s*=\s*["']?f-img-wrap[^>]+>([\S\s]*)<\/span>([\S\s]*)$/gi,"$1$2$3"),this.options.useClasses||(e=e.replace(/data-style/gi,"style"),e=e.replace(/(<img[^>]*)( class\s*=['"]?[a-zA-Z0-9- ]+['"]?)([^>]*\/?>)/gi,"$1$3")),this.options.simpleAmpersand&&(e=e.replace(/\&amp;/gi,"&")),d&&(e=e.replace(/ data-fr-verified="true"/gi,"")),this.options.beautifyCode&&(e=e.replace(/\n/gi,"")),e=e.replace(/<br class="fr-br">/gi,"\n"),e=e.replace(/\u200B/gi,""),this.options.fullPage&&(e=e.replace(/<!-- DOCTYPE([^>]*?) -->/i,"<!DOCTYPE$1>"),e=e.replace(/<!-- html([^>]*?) -->/i,"<html$1>"),e=e.replace(/<!-- \/html([^>]*?) -->/i,"</html$1>"),e=e.replace(/<!-- body([^>]*?) -->/i,"<body$1>"),e=e.replace(/<!-- \/body([^>]*?) -->/i,"</body$1>"),e=e.replace(/<!-- head ([\w\W]*?) -->/i,function(a,b){return"<head>"+b.replace(/\[/gi,"<").replace(/\]/gi,">")+"</head>"}));var f=this.triggerEvent("getHTML",[e],!1);return"string"==typeof f?f:e},b.prototype.getText=function(){return this.$element.text()},b.prototype.setDirty=function(a){this.dirty=a,a||(clearTimeout(this.ajaxInterval),this.ajaxHTML=this.getHTML(!1,!1))},b.prototype.initAjaxSaver=function(){this.ajaxHTML=this.getHTML(!1,!1),this.ajaxSave=!0,this.ajaxInterval=setInterval(a.proxy(function(){var a=this.getHTML(!1,!1);(this.ajaxHTML!=a||this.dirty)&&this.ajaxSave&&(this.options.autosave&&this.save(),this.dirty=!1,this.ajaxHTML=a),this.ajaxSave=!0},this),Math.max(this.options.autosaveInterval,100))},b.prototype.disableBrowserUndo=function(){this.$element.keydown(a.proxy(function(a){var b=a.which,c=(a.ctrlKey||a.metaKey)&&!a.altKey;if(!this.isHTML&&c){if(90==b&&a.shiftKey)return a.preventDefault(),!1;if(90==b)return a.preventDefault(),!1}},this))},b.prototype.shortcutEnabled=function(a){return this.options.shortcutsAvailable.indexOf(a)>=0},b.prototype.shortcuts_map={69:{cmd:"show",params:[null],id:"show"},66:{cmd:"exec",params:["bold"],id:"bold"},73:{cmd:"exec",params:["italic"],id:"italic"},85:{cmd:"exec",params:["underline"],id:"underline"},83:{cmd:"exec",params:["strikeThrough"],id:"strikeThrough"},75:{cmd:"exec",params:["createLink"],id:"createLink"},80:{cmd:"exec",params:["insertImage"],id:"insertImage"},221:{cmd:"exec",params:["indent"],id:"indent"},219:{cmd:"exec",params:["outdent"],id:"outdent"},72:{cmd:"exec",params:["html"],id:"html"},48:{cmd:"exec",params:["formatBlock","n"],id:"formatBlock n"},49:{cmd:"exec",params:["formatBlock","h1"],id:"formatBlock h1"},50:{cmd:"exec",params:["formatBlock","h2"],id:"formatBlock h2"},51:{cmd:"exec",params:["formatBlock","h3"],id:"formatBlock h3"},52:{cmd:"exec",params:["formatBlock","h4"],id:"formatBlock h4"},53:{cmd:"exec",params:["formatBlock","h5"],id:"formatBlock h5"},54:{cmd:"exec",params:["formatBlock","h6"],id:"formatBlock h6"},222:{cmd:"exec",params:["formatBlock","blockquote"],id:"formatBlock blockquote"},220:{cmd:"exec",params:["formatBlock","pre"],id:"formatBlock pre"}},b.prototype.ctrlKey=function(a){if(-1!=navigator.userAgent.indexOf("Mac OS X")){if(a.metaKey&&!a.altKey)return!0}else if(a.ctrlKey&&!a.altKey)return!0;return!1},b.prototype.initShortcuts=function(){this.options.shortcuts&&this.$element.on("keydown",a.proxy(function(a){var b=a.which,c=this.ctrlKey(a);if(!this.isHTML&&c){if(this.shortcuts_map[b]&&this.shortcutEnabled(this.shortcuts_map[b].id))return this.execDefaultShortcut(this.shortcuts_map[b].cmd,this.shortcuts_map[b].params);if(90==b&&a.shiftKey)return a.preventDefault(),a.stopPropagation(),this.redo(),!1;if(90==b)return a.preventDefault(),a.stopPropagation(),this.undo(),!1}},this))},b.prototype.initTabs=function(){this.$element.on("keydown",a.proxy(function(a){var b=a.which;if(9!=b||a.shiftKey)9==b&&a.shiftKey&&(this.raiseEvent("shift+tab")?this.options.tabSpaces?a.preventDefault():this.blur():a.preventDefault());else if(this.raiseEvent("tab"))if(this.options.tabSpaces){a.preventDefault();var c="&nbsp;&nbsp;&nbsp;&nbsp;",d=this.getSelectionElements()[0];"PRE"===d.tagName&&(c="    "),this.insertHTML(c,!1)}else this.blur();else a.preventDefault()},this))},b.prototype.textEmpty=function(b){var c=a(b).text().replace(/(\r\n|\n|\r|\t)/gm,"");return(""===c||b===this.$element.get(0))&&0===a(b).find("br").length},b.prototype.inEditor=function(a){for(;a&&"BODY"!==a.tagName;){if(a===this.$element.get(0))return!0;a=a.parentNode}return!1},b.prototype.focus=function(b){if(this.isDisabled)return!1;if(void 0===b&&(b=!0),""!==this.text()&&!this.$element.is(":focus"))return void(this.browser.msie||(this.clearSelection(),this.$element.focus()));if(!this.isHTML){if(b&&!this.pasting&&this.$element.focus(),this.pasting&&!this.$element.is(":focus")&&this.$element.focus(),this.$element.hasClass("f-placeholder"))return void this.setSelection(this.$element.find(this.options.defaultTag).length>0?this.$element.find(this.options.defaultTag)[0]:this.$element.get(0));var c=this.getRange();if(""===this.text()&&c&&(0===c.startOffset||c.startContainer===this.$element.get(0)||!this.inEditor(c.startContainer))){var d,e,f=this.getSelectionElements();if(a.merge(["IMG","BR"],this.valid_nodes).indexOf(this.getSelectionElement().tagName)<0)return!1;if(c.startOffset>0&&this.valid_nodes.indexOf(this.getSelectionElement().tagName)>=0&&"BODY"!=c.startContainer.tagName||c.startContainer&&3===c.startContainer.nodeType)return;if(!this.options.paragraphy&&f.length>=1&&f[0]===this.$element.get(0)){var g=function(b){if(!b)return null;if(3==b.nodeType&&b.textContent.length>0)return b;if(1==b.nodeType&&"BR"==b.tagName)return b;for(var c=a(b).contents(),d=0;d<c.length;d++){var e=g(c[d]);if(null!=e)return e}return null};if(0===c.startOffset&&this.$element.contents().length>0&&3!=this.$element.contents()[0].nodeType){var h=g(this.$element.get(0));null!=h&&("BR"==h.tagName?this.$element.is(":focus")&&(a(h).before(this.markers_html),this.restoreSelectionByMarkers()):this.setSelection(h))}return!1}if(f.length>=1&&f[0]!==this.$element.get(0))for(d=0;d<f.length;d++){if(e=f[d],!this.textEmpty(e)||this.browser.msie)return void this.setSelection(e);if(this.textEmpty(e)&&["LI","TD"].indexOf(e.tagName)>=0)return}if(c.startContainer===this.$element.get(0)&&c.startOffset>0&&!this.options.paragraphy)return void this.setSelection(this.$element.get(0),c.startOffset);for(f=this.$element.find(this.valid_nodes.join(",")),d=0;d<f.length;d++)if(e=f[d],!this.textEmpty(e)&&0===a(e).find(this.valid_nodes.join(",")).length)return void this.setSelection(e);this.setSelection(this.$element.get(0))}}},b.prototype.addMarkersAtEnd=function(b){var c=b.find(this.valid_nodes.join(", "));0===c.length&&c.push(b.get(0));var d=c[c.length-1];a(d).append(this.markers_html)},b.prototype.setFocusAtEnd=function(a){void 0===a&&(a=this.$element),this.addMarkersAtEnd(a),this.restoreSelectionByMarkers()},b.prototype.breakHTML=function(b,c){"undefined"==typeof c&&(c=!0),this.removeMarkers(),0===this.$element.find("break").length&&this.insertSimpleHTML("<break></break>");var d=this.parents(this.$element.find("break"),a.merge(["UL","OL"],this.valid_nodes).join(","))[0];if(this.parents(a(d),"ul, ol").length&&(d=this.parents(a(d),"ul, ol")[0]),void 0===d&&(d=this.$element.get(0)),["UL","OL"].indexOf(d.tagName)>=0){var e=a("<div>").html(b);e.find("> li").wrap("<"+d.tagName+">"),b=e.html()}if(d==this.$element.get(0)){if(this.$element.find("break").next().length){this.insertSimpleHTML('<div id="inserted-div">'+b+"</div>");var f=this.$element.find("div#inserted-div");this.setFocusAtEnd(f),this.saveSelectionByMarkers(),f.replaceWith(f.contents()),this.restoreSelectionByMarkers()}else this.insertSimpleHTML(b),this.setFocusAtEnd();return this.$element.find("break").remove(),this.checkPlaceholder(),!0}if("TD"===d.tagName)return this.$element.find("break").remove(),this.insertSimpleHTML(b),!0;var g=a("<div>").html(b);if(this.addMarkersAtEnd(g),b=g.html(),this.emptyElement(a(d)))return a(d).replaceWith(b),this.restoreSelectionByMarkers(),this.checkPlaceholder(),!0;this.$element.find("li").each(a.proxy(function(b,c){this.emptyElement(c)&&a(c).addClass("empty-li")},this));for(var h,i,j=a("<div></div>").append(a(d).clone()).html(),k=[],l={},m=[],n=0,o=0;o<j.length;o++)if(i=j.charAt(o),"<"==i){var p=j.indexOf(">",o+1);if(-1!==p){h=j.substring(o,p+1);var q=this.tagName(h);if(o=p,"break"==q){if(!this.isClosingTag(h)){for(var r=!0,s=[],t=k.length-1;t>=0;t--){var u=this.tagName(k[t]);if(!c&&"LI"==u.toUpperCase()){r=!1;break}m.push("</"+u+">"),s.push(k[t])}m.push(b),r||m.push("</li><li>");for(var v=0;v<s.length;v++)m.push(s[v])}}else if(m.push(h),!this.isSelfClosingTag(h))if(this.isClosingTag(h)){var w=l[q].pop();k.splice(w,1)}else k.push(h),void 0===l[q]&&(l[q]=[]),l[q].push(k.length-1)}}else n++,m.push(i);a(d).replaceWith(m.join("")),this.$element.find("li").each(a.proxy(function(b,c){var d=a(c);d.hasClass("empty-li")?d.removeClass("empty-li"):this.emptyElement(c)&&d.remove()},this)),this.cleanupLists(),this.restoreSelectionByMarkers()},b.prototype.insertSimpleHTML=function(a){var b,c;if(this.no_verify=!0,this.window.getSelection){if(b=this.window.getSelection(),b.getRangeAt&&b.rangeCount){c=b.getRangeAt(0),this.browser.webkit?c.collapsed||document.execCommand("delete"):c.deleteContents(),this.$element.find(this.valid_nodes.join(":empty, ")+":empty").remove();var d=this.document.createElement("div");d.innerHTML=a;for(var e,f,g=this.document.createDocumentFragment();e=d.firstChild;)f=g.appendChild(e);c.insertNode(g),f&&(c=c.cloneRange(),c.setStartAfter(f),c.collapse(!0),b.removeAllRanges(),b.addRange(c))}}else if((b=this.document.selection)&&"Control"!=b.type){var h=b.createRange();h.collapse(!0),b.createRange().pasteHTML(a)}this.no_verify=!1},b.prototype.insertHTML=function(b,c,d){if(void 0===c&&(c=!0),void 0===d&&(d=!1),!this.isHTML&&c&&this.focus(),this.removeMarkers(),this.insertSimpleHTML("<break></break>"),this.checkPlaceholder(!0),this.$element.hasClass("f-placeholder"))return this.$element.html(b),this.options.paragraphy&&this.wrapText(!0),this.$element.find("p > br").each(function(){var b=this.parentNode;1==a(b).contents().length&&a(b).remove()}),this.$element.find("break").remove(),this.setFocusAtEnd(),this.checkPlaceholder(),this.convertNewLines(),!1;for(var e=a("<div>").append(b).find("*"),f=0;f<e.length;f++)if(this.valid_nodes.indexOf(e[f].tagName)>=0)return this.breakHTML(b),this.$element.find("break").remove(),this.convertNewLines(),!1;this.$element.find("break").remove(),this.insertSimpleHTML(b),this.convertNewLines()},b.prototype.execDefaultShortcut=function(a,b){return this[a].apply(this,b),!1},b.prototype.initEditor=function(){var c="froala-editor";this.mobile()&&(c+=" touch"),this.browser.msie&&b.getIEversion()<9&&(c+=" ie8"),this.$editor=a('<div class="'+c+'" style="display: none;">');var d=this.$document.find(this.options.scrollableContainer);d.append(this.$editor),this.options.inlineMode?this.initInlineEditor():this.initBasicEditor()},b.prototype.refreshToolbarPosition=function(){this.$window.scrollTop()>this.$box.offset().top&&this.$window.scrollTop()<this.$box.offset().top+this.$box.outerHeight()-this.$editor.outerHeight()?(this.$element.css("padding-top",this.$editor.outerHeight()+this.$element.data("padding-top")),this.$placeholder.css("margin-top",this.$editor.outerHeight()+this.$element.data("padding-top")),this.$editor.addClass("f-scroll").removeClass("f-scroll-abs").css("bottom","").css("left",this.$box.offset().left+parseFloat(this.$box.css("padding-left"),10)-this.$window.scrollLeft()).width(this.$box.width()-parseFloat(this.$editor.css("border-left-width"),10)-parseFloat(this.$editor.css("border-right-width"),10)),this.iOS()&&(this.$element.is(":focus")?this.$editor.css("top",this.$window.scrollTop()):this.$editor.css("top",""))):this.$window.scrollTop()<this.$box.offset().top?this.iOS()&&this.$element.is(":focus")?(this.$element.css("padding-top",this.$editor.outerHeight()+this.$element.data("padding-top")),this.$placeholder.css("margin-top",this.$editor.outerHeight()+this.$element.data("padding-top")),this.$editor.addClass("f-scroll").removeClass("f-scroll-abs").css("bottom","").css("left",this.$box.offset().left+parseFloat(this.$box.css("padding-left"),10)-this.$window.scrollLeft()).width(this.$box.width()-parseFloat(this.$editor.css("border-left-width"),10)-parseFloat(this.$editor.css("border-right-width"),10)),this.$editor.css("top",this.$box.offset().top)):(this.$editor.removeClass("f-scroll f-scroll-abs").css("bottom","").css("top","").width(""),this.$element.css("padding-top",""),this.$placeholder.css("margin-top","")):this.$window.scrollTop()>this.$box.offset().top+this.$box.outerHeight()-this.$editor.outerHeight()&&!this.$editor.hasClass("f-scroll-abs")&&(this.$element.css("padding-top",this.$editor.outerHeight()+this.$element.data("padding-top")),this.$placeholder.css("margin-top",this.$editor.outerHeight()+this.$element.data("padding-top")),this.$editor.removeClass("f-scroll").addClass("f-scroll-abs"),this.$editor.css("bottom",0).css("top","").css("left",""))},b.prototype.toolbarTop=function(){this.options.toolbarFixed||this.options.inlineMode||(this.$element.data("padding-top",parseInt(this.$element.css("padding-top"),10)),this.$window.on("scroll resize load",a.proxy(function(){this.refreshToolbarPosition()},this)),this.iOS()&&this.$element.on("focus blur",a.proxy(function(){this.refreshToolbarPosition()},this)))},b.prototype.initBasicEditor=function(){this.$element.addClass("f-basic"),this.$wrapper.addClass("f-basic"),this.$popup_editor=this.$editor.clone();var a=this.$document.find(this.options.scrollableContainer);this.$popup_editor.appendTo(a).addClass("f-inline"),this.$editor.addClass("f-basic").show(),this.$editor.insertBefore(this.$wrapper),this.toolbarTop()},b.prototype.initInlineEditor=function(){this.$editor.addClass("f-inline"),this.$element.addClass("f-inline"),this.$popup_editor=this.$editor},b.prototype.initDrag=function(){this.drag_support={filereader:"undefined"!=typeof FileReader,formdata:!!this.window.FormData,progress:"upload"in new XMLHttpRequest}},b.prototype.initOptions=function(){this.setDimensions(),this.setSpellcheck(),this.setImageUploadURL(),this.setButtons(),this.setDirection(),this.setZIndex(),this.setTheme(),this.options.editInPopup&&this.buildEditPopup(),this.editableDisabled||(this.setPlaceholder(),this.setPlaceholderEvents())},b.prototype.setAllowStyle=function(a){"undefined"==typeof a&&(a=this.options.allowStyle),a?this.options.allowedTags.push("style"):this.options.allowedTags.splice(this.options.allowedTags.indexOf("style"),1)},b.prototype.setAllowScript=function(a){"undefined"==typeof a&&(a=this.options.allowScript),a?this.options.allowedTags.push("script"):this.options.allowedTags.splice(this.options.allowedTags.indexOf("script"),1)},b.prototype.isTouch=function(){return WYSIWYGModernizr.touch&&void 0!==this.window.Touch},b.prototype.initEditorSelection=function(){this.$element.on("keyup",a.proxy(function(a){return this.triggerEvent("keyup",[a],!1)},this)),this.$element.on("focus",a.proxy(function(){this.blurred&&(this.blurred=!1,this.pasting||""!==this.text()||this.focus(!1),this.triggerEvent("focus",[],!1))},this)),this.$element.on("mousedown touchstart",a.proxy(function(){return this.isDisabled?!1:void(this.isResizing()||(this.closeImageMode(),this.hide()))},this)),this.options.disableRightClick&&this.$element.contextmenu(a.proxy(function(a){return a.preventDefault(),this.options.inlineMode&&this.$element.focus(),!1},this)),this.$element.on(this.mouseup,a.proxy(function(b){if(this.isDisabled)return!1;if(!this.isResizing()){var c=this.text();b.stopPropagation(),this.imageMode=!1,!(""!==c||this.options.alwaysVisible||this.options.editInPopup||(3==b.which||2==b.button)&&this.options.inlineMode&&!this.isImage&&this.options.disableRightClick)||this.link||this.imageMode?this.options.inlineMode||this.refreshButtons():setTimeout(a.proxy(function(){c=this.text(),!(""!==c||this.options.alwaysVisible||this.options.editInPopup||(3==b.which||2==b.button)&&this.options.inlineMode&&!this.isImage&&this.options.disableRightClick)||this.link||this.imageMode||(this.show(b),this.options.editInPopup&&this.showEditPopup())},this),0)}this.hideDropdowns(),this.hideOtherEditors()},this)),this.$editor.on(this.mouseup,a.proxy(function(a){return this.isDisabled?!1:void(this.isResizing()||(a.stopPropagation(),this.options.inlineMode===!1&&this.hide()))},this)),this.$editor.on("mousedown",".fr-dropdown-menu",a.proxy(function(a){return this.isDisabled?!1:(a.stopPropagation(),void(this.noHide=!0))},this)),this.$popup_editor.on("mousedown",".fr-dropdown-menu",a.proxy(function(a){return this.isDisabled?!1:(a.stopPropagation(),void(this.noHide=!0))},this)),this.$popup_editor.on("mouseup",a.proxy(function(a){return this.isDisabled?!1:void(this.isResizing()||a.stopPropagation())},this)),this.$edit_popup_wrapper&&this.$edit_popup_wrapper.on("mouseup",a.proxy(function(a){return this.isDisabled?!1:void(this.isResizing()||a.stopPropagation())},this)),this.setDocumentSelectionChangeEvent(),this.setWindowMouseUpEvent(),this.setWindowKeyDownEvent(),this.setWindowKeyUpEvent(),this.setWindowOrientationChangeEvent(),this.setWindowHideEvent(),this.setWindowBlurEvent(),this.options.trackScroll&&this.setWindowScrollEvent(),this.setWindowResize()},b.prototype.setWindowResize=function(){this.$window.on("resize."+this._id,a.proxy(function(){this.hide(),this.closeImageMode(),this.imageMode=!1},this))},b.prototype.blur=function(b){this.blurred||this.pasting||(this.selectionDisabled=!0,this.triggerEvent("blur",[]),b&&0===a("*:focus").length&&this.clearSelection(),this.isLink||this.isImage||(this.selectionDisabled=!1),this.blurred=!0)},b.prototype.setWindowBlurEvent=function(){this.$window.on("blur."+this._id,a.proxy(function(a,b){this.blur(b)},this))},b.prototype.setWindowHideEvent=function(){this.$window.on("hide."+this._id,a.proxy(function(){this.isResizing()?this.$element.find(".f-img-handle").trigger("moveend"):this.hide(!1)},this))},b.prototype.setWindowOrientationChangeEvent=function(){this.$window.on("orientationchange."+this._id,a.proxy(function(){setTimeout(a.proxy(function(){this.hide()},this),10)},this))},b.prototype.setDocumentSelectionChangeEvent=function(){this.$document.on("selectionchange."+this._id,a.proxy(function(b){return this.isDisabled?!1:void(this.isResizing()||this.isScrolling||(clearTimeout(this.selectionChangedTimeout),this.selectionChangedTimeout=setTimeout(a.proxy(function(){if(this.options.inlineMode&&this.selectionInEditor()&&this.link!==!0&&this.isTouch()){var a=this.text();""!==a?(this.iPod()?this.options.alwaysVisible&&this.hide():this.show(null),b.stopPropagation()):this.options.alwaysVisible?this.show(null):(this.hide(),this.closeImageMode(),this.imageMode=!1)}},this),75)))},this))},b.prototype.setWindowMouseUpEvent=function(){this.$window.on(this.mouseup+"."+this._id,a.proxy(function(){return this.browser.webkit&&!this.initMouseUp?(this.initMouseUp=!0,!1):(this.isResizing()||this.isScrolling||this.isDisabled||(this.$bttn_wrapper.find("button.fr-trigger").removeClass("active"),this.selectionInEditor()&&""!==this.text()&&!this.isTouch()?this.show(null):this.$popup_editor.is(":visible")&&(this.hide(),this.closeImageMode(),this.imageMode=!1),this.blur(!0)),void a("[data-down]").removeAttr("data-down"))},this))},b.prototype.setWindowKeyDownEvent=function(){this.$window.on("keydown."+this._id,a.proxy(function(b){var c=b.which;if(27==c&&(this.focus(),this.restoreSelection(),this.hide(),this.closeImageMode(),this.imageMode=!1),this.imageMode){if(13==c)return this.$element.find(".f-img-editor").parents(".f-img-wrap").before("<br/>"),this.sync(),this.$element.find(".f-img-editor img").click(),!1;if(46==c||8==c)return b.stopPropagation(),b.preventDefault(),setTimeout(a.proxy(function(){this.removeImage(this.$element.find(".f-img-editor img"))},this),0),!1}else if(this.selectionInEditor()){if(this.isDisabled)return!0;var d=(b.ctrlKey||b.metaKey)&&!b.altKey;!d&&this.$popup_editor.is(":visible")&&this.$bttn_wrapper.is(":visible")&&this.options.inlineMode&&(this.hide(),this.closeImageMode(),this.imageMode=!1)}},this))},b.prototype.setWindowKeyUpEvent=function(){this.$window.on("keyup."+this._id,a.proxy(function(){return this.isDisabled?!1:void(this.selectionInEditor()&&""!==this.text()&&!this.$popup_editor.is(":visible")&&this.repositionEditor())},this))},b.prototype.setWindowScrollEvent=function(){a.merge(this.$window,a(this.options.scrollableContainer)).on("scroll."+this._id,a.proxy(function(){return this.isDisabled?!1:(clearTimeout(this.scrollTimer),this.isScrolling=!0,void(this.scrollTimer=setTimeout(a.proxy(function(){this.isScrolling=!1},this),2500)))},this))},b.prototype.setPlaceholder=function(b){b&&(this.options.placeholder=b),this.$textarea&&this.$textarea.attr("placeholder",this.options.placeholder),this.$placeholder||(this.$placeholder=a('<span class="fr-placeholder" unselectable="on"></span>').bind("click",a.proxy(function(){this.focus()},this)),this.$element.after(this.$placeholder)),this.$placeholder.text(this.options.placeholder)},b.prototype.isEmpty=function(){var b=this.$element.text().replace(/(\r\n|\n|\r|\t|\u200B|\u0020)/gm,"");return""===b&&0===this.$element.find("img, table, iframe, input, textarea, hr, li, object").length&&0===this.$element.find(this.options.defaultTag+" > br, br").length&&0===this.$element.find(a.map(this.valid_nodes,a.proxy(function(a){return this.options.defaultTag==a?null:a},this)).join(", ")).length},b.prototype.checkPlaceholder=function(c){if(this.isDisabled&&!c)return!1;if(this.pasting&&!c)return!1;if(this.$element.find("td:empty, th:empty").append(a.Editable.INVISIBLE_SPACE),this.$element.find(this.valid_nodes.join(":empty, ")+":empty").append(this.br),!this.isHTML)if(this.isEmpty()&&!this.fakeEmpty()){var d,e=this.selectionInEditor()||this.$element.is(":focus");this.options.paragraphy?(d=a("<"+this.options.defaultTag+">"+this.br+"</"+this.options.defaultTag+">"),this.$element.html(d),e&&this.setSelection(d.get(0)),this.$element.addClass("f-placeholder")):(0!==this.$element.find("br").length||this.browser.msie&&b.getIEversion()<=10||(this.$element.append(this.br),e&&this.browser.msie&&this.focus()),this.$element.addClass("f-placeholder"))}else!this.$element.find(this.options.defaultTag+", li, td, th").length&&this.options.paragraphy?(this.wrapText(!0),this.$element.find(this.options.defaultTag).length&&""===this.text()?this.setSelection(this.$element.find(this.options.defaultTag)[0],this.$element.find(this.options.defaultTag).text().length,null,this.$element.find(this.options.defaultTag).text().length):this.$element.removeClass("f-placeholder")):this.fakeEmpty()===!1&&(!this.options.paragraphy||this.$element.find(this.valid_nodes.join(",")).length>=1)?this.$element.removeClass("f-placeholder"):!this.options.paragraphy&&this.$element.find(this.valid_nodes.join(",")).length>=1?this.$element.removeClass("f-placeholder"):this.$element.addClass("f-placeholder");return!0},b.prototype.fakeEmpty=function(a){void 0===a&&(a=this.$element);var b=!0;this.options.paragraphy&&(b=1==a.find(this.options.defaultTag).length?!0:!1);var c=a.text().replace(/(\r\n|\n|\r|\t|\u200B)/gm,"");return""===c&&b&&1==a.find("br, li").length&&0===a.find("img, table, iframe, input, textarea, hr, li").length},b.prototype.setPlaceholderEvents=function(){this.browser.msie&&b.getIEversion()<9||(this.$element.on("focus click",a.proxy(function(a){return this.isDisabled?!1:void(""!==this.$element.text()||this.pasting||(this.$element.data("focused")||"click"!==a.type?"focus"==a.type&&this.focus(!1):this.$element.focus(),this.$element.data("focused",!0)))},this)),this.$element.on("keyup keydown input focus placeholderCheck",a.proxy(function(){return this.checkPlaceholder()},this)),this.$element.trigger("placeholderCheck"))},b.prototype.setDimensions=function(a,b,c,d){a&&(this.options.height=a),b&&(this.options.width=b),c&&(this.options.minHeight=c),d&&(this.options.maxHeight=d),"auto"!=this.options.height&&(this.$wrapper.css("height",this.options.height),this.$element.css("minHeight",this.options.height-parseInt(this.$element.css("padding-top"),10)-parseInt(this.$element.css("padding-bottom"),10))),"auto"!=this.options.minHeight&&(this.$wrapper.css("minHeight",this.options.minHeight),this.$element.css("minHeight",this.options.minHeight)),"auto"!=this.options.maxHeight&&this.$wrapper.css("maxHeight",this.options.maxHeight),"auto"!=this.options.width&&this.$box.css("width",this.options.width)},b.prototype.setDirection=function(a){a&&(this.options.direction=a),"ltr"!=this.options.direction&&"rtl"!=this.options.direction&&(this.options.direction="ltr"),"rtl"==this.options.direction?(this.$element.removeAttr("dir"),this.$box.addClass("f-rtl"),this.$element.addClass("f-rtl"),this.$editor.addClass("f-rtl"),this.$popup_editor.addClass("f-rtl"),this.$image_modal&&this.$image_modal.addClass("f-rtl")):(this.$element.attr("dir","auto"),this.$box.removeClass("f-rtl"),this.$element.removeClass("f-rtl"),this.$editor.removeClass("f-rtl"),this.$popup_editor.removeClass("f-rtl"),this.$image_modal&&this.$image_modal.removeClass("f-rtl"))},b.prototype.setZIndex=function(a){a&&(this.options.zIndex=a),this.$editor.css("z-index",this.options.zIndex),this.$popup_editor.css("z-index",this.options.zIndex+1),this.$overlay&&this.$overlay.css("z-index",this.options.zIndex+2),this.$image_modal&&this.$image_modal.css("z-index",this.options.zIndex+3)},b.prototype.setTheme=function(a){a&&(this.options.theme=a),null!=this.options.theme&&(this.$editor.addClass(this.options.theme+"-theme"),this.$popup_editor.addClass(this.options.theme+"-theme"),this.$box&&this.$box.addClass(this.options.theme+"-theme"),this.$image_modal&&this.$image_modal.addClass(this.options.theme+"-theme"))},b.prototype.setSpellcheck=function(a){void 0!==a&&(this.options.spellcheck=a),this.$element.attr("spellcheck",this.options.spellcheck)},b.prototype.customizeText=function(b){if(b){var c=this.$editor.find("[title]").add(this.$popup_editor.find("[title]"));this.$image_modal&&(c=c.add(this.$image_modal.find("[title]"))),c.each(a.proxy(function(c,d){for(var e in b)a(d).attr("title").toLowerCase()==e.toLowerCase()&&a(d).attr("title",b[e])},this)),c=this.$editor.find('[data-text="true"]').add(this.$popup_editor.find('[data-text="true"]')),this.$image_modal&&(c=c.add(this.$image_modal.find('[data-text="true"]'))),c.each(a.proxy(function(c,d){for(var e in b)a(d).text().toLowerCase()==e.toLowerCase()&&a(d).text(b[e])},this))}},b.prototype.setLanguage=function(b){void 0!==b&&(this.options.language=b),a.Editable.LANGS[this.options.language]&&(this.customizeText(a.Editable.LANGS[this.options.language].translation),a.Editable.LANGS[this.options.language].direction&&a.Editable.LANGS[this.options.language].direction!=a.Editable.DEFAULTS.direction&&this.setDirection(a.Editable.LANGS[this.options.language].direction),a.Editable.LANGS[this.options.language].translation[this.options.placeholder]&&this.setPlaceholder(a.Editable.LANGS[this.options.language].translation[this.options.placeholder]))
},b.prototype.setCustomText=function(a){a&&(this.options.customText=a),this.options.customText&&this.customizeText(this.options.customText)},b.prototype.execHTML=function(){this.html()},b.prototype.initHTMLArea=function(){this.$html_area=a('<textarea wrap="hard">').keydown(function(b){var c=b.keyCode||b.which;if(9==c){b.preventDefault();var d=a(this).get(0).selectionStart,e=a(this).get(0).selectionEnd;a(this).val(a(this).val().substring(0,d)+"	"+a(this).val().substring(e)),a(this).get(0).selectionStart=a(this).get(0).selectionEnd=d+1}}).focus(a.proxy(function(){this.blurred&&(this.blurred=!1,this.triggerEvent("focus",[],!1))},this)).mouseup(a.proxy(function(){this.blurred&&(this.blurred=!1,this.triggerEvent("focus",[],!1))},this))},b.prototype.command_dispatcher={align:function(a){var b=this.buildDropdownAlign(a),c=this.buildDropdownButton(a,b);return c},formatBlock:function(a){var b=this.buildDropdownFormatBlock(a),c=this.buildDropdownButton(a,b);return c},html:function(b){var c=this.buildDefaultButton(b);return this.options.inlineMode&&this.$box.append(a(c).clone(!0).addClass("html-switch").attr("title","Hide HTML").click(a.proxy(this.execHTML,this))),this.initHTMLArea(),c}},b.prototype.setButtons=function(a){a&&(this.options.buttons=a),this.$editor.append('<div class="bttn-wrapper" id="bttn-wrapper-'+this._id+'">'),this.$bttn_wrapper=this.$editor.find("#bttn-wrapper-"+this._id),this.mobile()&&this.$bttn_wrapper.addClass("touch");for(var c,d,e="",f=0;f<this.options.buttons.length;f++){var g=this.options.buttons[f];if("sep"!=g){var h=b.commands[g];if(void 0!==h){h.cmd=g;var i=this.command_dispatcher[h.cmd];i?e+=i.apply(this,[h]):h.seed?(c=this.buildDefaultDropdown(h),d=this.buildDropdownButton(h,c),e+=d):(d=this.buildDefaultButton(h),e+=d,this.bindRefreshListener(h))}else{if(h=this.options.customButtons[g],void 0===h){if(h=this.options.customDropdowns[g],void 0===h)continue;d=this.buildCustomDropdown(h,g),e+=d,this.bindRefreshListener(h);continue}d=this.buildCustomButton(h,g),e+=d,this.bindRefreshListener(h)}}else e+=this.options.inlineMode?'<div class="f-clear"></div><hr/>':'<span class="f-sep"></span>'}this.$bttn_wrapper.html(e),this.$bttn_wrapper.find('button[data-cmd="undo"], button[data-cmd="redo"]').prop("disabled",!0),this.bindButtonEvents()},b.prototype.bindRefreshListener=function(b){b.refresh&&this.addListener("refresh",a.proxy(function(){b.refresh.apply(this,[b.cmd])},this))},b.prototype.buildDefaultButton=function(a){var b='<button tabIndex="-1" type="button" class="fr-bttn" title="'+a.title+'" data-cmd="'+a.cmd+'">';return b+=void 0===this.options.icons[a.cmd]?this.addButtonIcon(a):this.prepareIcon(this.options.icons[a.cmd],a.title),b+="</button>"},b.prototype.prepareIcon=function(a,b){switch(a.type){case"font":return this.addButtonIcon({icon:a.value});case"img":return this.addButtonIcon({icon_img:a.value,title:b});case"txt":return this.addButtonIcon({icon_txt:a.value})}},b.prototype.addButtonIcon=function(a){return a.icon?'<i class="'+a.icon+'"></i>':a.icon_alt?'<i class="for-text">'+a.icon_alt+"</i>":a.icon_img?'<img src="'+a.icon_img+'" alt="'+a.title+'"/>':a.icon_txt?"<i>"+a.icon_txt+"</i>":a.title},b.prototype.buildCustomButton=function(a,b){this["call_"+b]=a.callback;var c='<button tabIndex="-1" type="button" class="fr-bttn" data-callback="call_'+b+'" data-cmd="button_name" data-name="'+b+'" title="'+a.title+'">'+this.prepareIcon(a.icon,a.title)+"</button>";return c},b.prototype.callDropdown=function(b,c){this.$bttn_wrapper.on("click touch",'[data-name="'+b+'"]',a.proxy(function(a){a.preventDefault(),a.stopPropagation(),c.apply(this)},this))},b.prototype.buildCustomDropdown=function(a,b){var c='<div class="fr-bttn fr-dropdown">';c+='<button tabIndex="-1" type="button" class="fr-trigger" title="'+a.title+'" data-name="'+b+'">'+this.prepareIcon(a.icon,a.title)+"</button>",c+='<ul class="fr-dropdown-menu">';var d=0;for(var e in a.options){this["call_"+b+d]=a.options[e];var f='<li data-callback="call_'+b+d+'" data-cmd="'+b+d+'" data-name="'+b+d+'"><a href="#">'+e+"</a></li>";c+=f,d++}return c+="</ul></div>"},b.prototype.buildDropdownButton=function(a,b,c){c=c||"";var d='<div class="fr-bttn fr-dropdown '+c+'">',e="";e+=void 0===this.options.icons[a.cmd]?this.addButtonIcon(a):this.prepareIcon(this.options.icons[a.cmd],a.title);var f='<button tabIndex="-1" type="button" data-name="'+a.cmd+'" class="fr-trigger" title="'+a.title+'">'+e+"</button>";return d+=f,d+=b,d+="</div>"},b.prototype.buildDropdownAlign=function(a){this.bindRefreshListener(a);for(var b='<ul class="fr-dropdown-menu f-align">',c=0;c<a.seed.length;c++){var d=a.seed[c];b+='<li data-cmd="align" data-val="'+d.cmd+'" title="'+d.title+'"><a href="#"><i class="'+d.icon+'"></i></a></li>'}return b+="</ul>"},b.prototype.buildDropdownFormatBlock=function(a){var b='<ul class="fr-dropdown-menu">';for(var c in this.options.blockTags){var d='<li data-cmd="'+a.cmd+'" data-val="'+c+'">';d+='<a href="#" data-text="true" class="format-'+c+'" title="'+this.options.blockTags[c]+'">'+this.options.blockTags[c]+"</a></li>",b+=d}return b+="</ul>"},b.prototype.buildDefaultDropdown=function(a){for(var b='<ul class="fr-dropdown-menu">',c=0;c<a.seed.length;c++){var d=a.seed[c],e='<li data-namespace="'+a.namespace+'" data-cmd="'+(d.cmd||a.cmd)+'" data-val="'+d.value+'" data-param="'+(d.param||a.param)+'">';e+='<a href="#" data-text="true" class="'+d.value+'" title="'+d.title+'">'+d.title+"</a></li>",b+=e}return b+="</ul>"},b.prototype.createEditPopupHTML=function(){var a='<div class="froala-popup froala-text-popup" style="display:none;">';return a+='<h4><span data-text="true">Edit text</span><i title="Cancel" class="fa fa-times" id="f-text-close-'+this._id+'"></i></h4></h4>',a+='<div class="f-popup-line"><input type="text" placeholder="http://www.example.com" class="f-lu" id="f-ti-'+this._id+'">',a+='<button data-text="true" type="button" class="f-ok" id="f-edit-popup-ok-'+this._id+'">OK</button>',a+="</div>",a+="</div>"},b.prototype.buildEditPopup=function(){this.$edit_popup_wrapper=a(this.createEditPopupHTML()),this.$popup_editor.append(this.$edit_popup_wrapper),this.$edit_popup_wrapper.find("#f-ti-"+this._id).on("mouseup keydown",function(a){a.stopPropagation()}),this.addListener("hidePopups",a.proxy(function(){this.$edit_popup_wrapper.hide()},this)),this.$edit_popup_wrapper.on("click","#f-edit-popup-ok-"+this._id,a.proxy(function(){this.$element.text(this.$edit_popup_wrapper.find("#f-ti-"+this._id).val()),this.sync(),this.hide()},this)),this.$edit_popup_wrapper.on("click","i#f-text-close-"+this._id,a.proxy(function(){this.hide()},this))},b.prototype.createCORSRequest=function(a,b){var c=new XMLHttpRequest;if("withCredentials"in c){c.open(a,b,!0),this.options.withCredentials&&(c.withCredentials=!0);for(var d in this.options.headers)c.setRequestHeader(d,this.options.headers[d])}else"undefined"!=typeof XDomainRequest?(c=new XDomainRequest,c.open(a,b)):c=null;return c},b.prototype.isEnabled=function(b){return a.inArray(b,this.options.buttons)>=0},b.prototype.bindButtonEvents=function(){this.bindDropdownEvents(this.$bttn_wrapper),this.bindCommandEvents(this.$bttn_wrapper)},b.prototype.bindDropdownEvents=function(c){var d=this;c.on(this.mousedown,".fr-dropdown .fr-trigger:not([disabled])",function(b){return"mousedown"===b.type&&1!==b.which?!0:("LI"===this.tagName&&"touchstart"===b.type&&d.android()||d.iOS()||b.preventDefault(),void a(this).attr("data-down",!0))}),c.on(this.mouseup,".fr-dropdown .fr-trigger:not([disabled])",function(e){if(d.isDisabled)return!1;if(e.stopPropagation(),e.preventDefault(),!a(this).attr("data-down"))return a("[data-down]").removeAttr("data-down"),!1;a("[data-down]").removeAttr("data-down"),d.options.inlineMode===!1&&0===a(this).parents(".froala-popup").length&&(d.hide(),d.closeImageMode(),d.imageMode=!1),a(this).toggleClass("active").trigger("blur");var f,g=a(this).attr("data-name");return b.commands[g]?f=b.commands[g].refreshOnShow:d.options.customDropdowns[g]?f=d.options.customDropdowns[g].refreshOnShow:b.image_commands[g]&&(f=b.image_commands[g].refreshOnShow),f&&f.call(d),c.find("button.fr-trigger").not(this).removeClass("active"),!1}),c.on(this.mouseup,".fr-dropdown",function(a){a.stopPropagation(),a.preventDefault()}),this.$element.on("mouseup","img, a",a.proxy(function(){return this.isDisabled?!1:void c.find(".fr-dropdown .fr-trigger").removeClass("active")},this)),c.on("click","li[data-cmd] > a",function(a){a.preventDefault()})},b.prototype.bindCommandEvents=function(b){var c=this;b.on(this.mousedown,"button[data-cmd], li[data-cmd], span[data-cmd], a[data-cmd]",function(b){return"mousedown"===b.type&&1!==b.which?!0:("LI"===this.tagName&&"touchstart"===b.type&&c.android()||c.iOS()||b.preventDefault(),void a(this).attr("data-down",!0))}),b.on(this.mouseup+" "+this.move,"button[data-cmd], li[data-cmd], span[data-cmd], a[data-cmd]",a.proxy(function(b){if(c.isDisabled)return!1;if("mouseup"===b.type&&1!==b.which)return!0;var d=b.currentTarget;if("touchmove"!=b.type){if(b.stopPropagation(),b.preventDefault(),!a(d).attr("data-down"))return a("[data-down]").removeAttr("data-down"),!1;if(a("[data-down]").removeAttr("data-down"),a(d).data("dragging")||a(d).attr("disabled"))return a(d).removeData("dragging"),!1;var e=a(d).data("timeout");e&&(clearTimeout(e),a(d).removeData("timeout"));var f=a(d).attr("data-callback");if(c.options.inlineMode===!1&&0===a(d).parents(".froala-popup").length&&(c.hide(),c.closeImageMode(),c.imageMode=!1),f)a(d).parents(".fr-dropdown").find(".fr-trigger.active").removeClass("active"),c[f]();else{var g=a(d).attr("data-namespace"),h=a(d).attr("data-cmd"),i=a(d).attr("data-val"),j=a(d).attr("data-param");g?c["exec"+g](h,i,j):(c.exec(h,i,j),c.$bttn_wrapper.find(".fr-dropdown .fr-trigger").removeClass("active"))}return!1}a(d).data("timeout")||a(d).data("timeout",setTimeout(function(){a(d).data("dragging",!0)},200))},this))},b.prototype.save=function(){if(!this.triggerEvent("beforeSave",[],!1))return!1;if(this.options.saveURL){var b={};for(var c in this.options.saveParams){var d=this.options.saveParams[c];b[c]="function"==typeof d?d.call(this):d}var e={};e[this.options.saveParam]=this.getHTML(),a.ajax({type:this.options.saveRequestType,url:this.options.saveURL,data:a.extend(e,b),crossDomain:this.options.crossDomain,xhrFields:{withCredentials:this.options.withCredentials},headers:this.options.headers}).done(a.proxy(function(a){this.triggerEvent("afterSave",[a])},this)).fail(a.proxy(function(){this.triggerEvent("saveError",["Save request failed on the server."])},this))}else this.triggerEvent("saveError",["Missing save URL."])},b.prototype.isURL=function(a){if(!/^(https?:|ftps?:|)\/\//.test(a))return!1;a=String(a).replace(/</g,"%3C").replace(/>/g,"%3E").replace(/"/g,"%22").replace(/ /g,"%20");var b=/\(?(?:(https?:|ftps?:|)\/\/)?(?:((?:[^\W\s]|\.|-|[:]{1})+)@{1})?((?:www.)?(?:[^\W\s]|\.|-)+[\.][^\W\s]{2,4}|(?:www.)?(?:[^\W\s]|\.|-)|localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?::(\d*))?([\/]?[^\s\?]*[\/]{1})*(?:\/?([^\s\n\?\[\]\{\}\#]*(?:(?=\.)){1}|[^\s\n\?\[\]\{\}\.\#]*)?([\.]{1}[^\s\?\#]*)?)?(?:\?{1}([^\s\n\#\[\]]*))?([\#][^\s\n]*)?\)?/gi;return b.test(a)},b.prototype.sanitizeURL=function(a){if(/^(https?:|ftps?:|)\/\//.test(a)){if(!this.isURL(a))return""}else a=encodeURIComponent(a).replace(/%23/g,"#").replace(/%2F/g,"/").replace(/%25/g,"%").replace(/mailto%3A/g,"mailto:").replace(/tel%3A/g,"tel:").replace(/data%3Aimage/g,"data:image").replace(/webkit-fake-url%3A/g,"webkit-fake-url:").replace(/%3F/g,"?").replace(/%3D/g,"=").replace(/%26/g,"&").replace(/&amp;/g,"&").replace(/%2C/g,",").replace(/%3B/g,";").replace(/%2B/g,"+").replace(/%40/g,"@");return a},b.prototype.parents=function(a,b){return a.get(0)!=this.$element.get(0)?a.parentsUntil(this.$element,b):[]},b.prototype.option=function(b,c){if(void 0===b)return this.options;if(b instanceof Object)this.options=a.extend({},this.options,b),this.initOptions(),this.setCustomText(),this.setLanguage(),this.setAllowScript(),this.setAllowStyle();else{if(void 0===c)return this.options[b];switch(this.options[b]=c,b){case"direction":this.setDirection();break;case"height":case"width":case"minHeight":case"maxHeight":this.setDimensions();break;case"spellcheck":this.setSpellcheck();break;case"placeholder":this.setPlaceholder();break;case"customText":this.setCustomText();break;case"language":this.setLanguage();break;case"textNearImage":this.setTextNearImage();break;case"zIndex":this.setZIndex();break;case"theme":this.setTheme();break;case"allowScript":this.setAllowScript();break;case"allowStyle":this.setAllowStyle()}}};var c=a.fn.editable;a.fn.editable=function(c){for(var d=[],e=0;e<arguments.length;e++)d.push(arguments[e]);if("string"==typeof c){var f=[];return this.each(function(){var b=a(this),e=b.data("fa.editable");if(!e[c])return a.error("Method "+c+" does not exist in Froala Editor.");var g=e[c].apply(e,d.slice(1));void 0===g?f.push(this):0===f.length&&f.push(g)}),1==f.length?f[0]:f}return"object"!=typeof c&&c?void 0:this.each(function(){var d=this,e=a(d),f=e.data("fa.editable");f||e.data("fa.editable",f=new b(d,c))})},a.fn.editable.Constructor=b,a.Editable=b,a.fn.editable.noConflict=function(){return a.fn.editable=c,this}}(window.jQuery),function(a){a.Editable.prototype.initUndoRedo=function(){this.undoStack=[],this.undoIndex=0,this.saveUndoStep(),this.disableBrowserUndo()},a.Editable.prototype.undo=function(){if(this.no_verify=!0,this.undoIndex>1){clearTimeout(this.typingTimer),this.triggerEvent("beforeUndo",[],!1);var a=this.undoStack[--this.undoIndex-1];this.restoreSnapshot(a),this.doingRedo=!0,this.triggerEvent("afterUndo",[]),this.doingRedo=!1,""!==this.text()?this.repositionEditor():this.hide(),this.$element.trigger("placeholderCheck"),this.focus(),this.refreshButtons()}this.no_verify=!1},a.Editable.prototype.redo=function(){if(this.no_verify=!0,this.undoIndex<this.undoStack.length){clearTimeout(this.typingTimer),this.triggerEvent("beforeRedo",[],!1);var a=this.undoStack[this.undoIndex++];this.restoreSnapshot(a),this.doingRedo=!0,this.triggerEvent("afterRedo",[]),this.doingRedo=!1,""!==this.text()?this.repositionEditor():this.hide(),this.$element.trigger("placeholderCheck"),this.focus(),this.refreshButtons()}this.no_verify=!1},a.Editable.prototype.saveUndoStep=function(){if(!this.undoStack)return!1;for(;this.undoStack.length>this.undoIndex;)this.undoStack.pop();var a=this.getSnapshot();this.undoStack[this.undoIndex-1]&&this.identicSnapshots(this.undoStack[this.undoIndex-1],a)||(this.undoStack.push(a),this.undoIndex++),this.refreshUndo(),this.refreshRedo()},a.Editable.prototype.refreshUndo=function(){if(this.isEnabled("undo")){if(void 0===this.$editor)return;this.$bttn_wrapper.find('[data-cmd="undo"]').removeAttr("disabled"),(0===this.undoStack.length||this.undoIndex<=1||this.isHTML)&&this.$bttn_wrapper.find('[data-cmd="undo"]').attr("disabled",!0)}},a.Editable.prototype.refreshRedo=function(){if(this.isEnabled("redo")){if(void 0===this.$editor)return;this.$bttn_wrapper.find('[data-cmd="redo"]').removeAttr("disabled"),(this.undoIndex==this.undoStack.length||this.isHTML)&&this.$bttn_wrapper.find('[data-cmd="redo"]').prop("disabled",!0)}},a.Editable.prototype.getNodeIndex=function(a){for(var b=a.parentNode.childNodes,c=0,d=null,e=0;e<b.length;e++){if(d){var f=3===b[e].nodeType&&""===b[e].textContent,g=3===d.nodeType&&3===b[e].nodeType;f||g||c++}if(b[e]==a)return c;d=b[e]}},a.Editable.prototype.getNodeLocation=function(a){var b=[];if(!a.parentNode)return[];for(;a!=this.$element.get(0);)b.push(this.getNodeIndex(a)),a=a.parentNode;return b.reverse()},a.Editable.prototype.getNodeByLocation=function(a){for(var b=this.$element.get(0),c=0;c<a.length;c++)b=b.childNodes[a[c]];return b},a.Editable.prototype.getRealNodeOffset=function(a,b){for(;a&&3===a.nodeType;){var c=a.previousSibling;c&&3==c.nodeType&&(b+=c.textContent.length),a=c}return b},a.Editable.prototype.getRangeSnapshot=function(a){return{scLoc:this.getNodeLocation(a.startContainer),scOffset:this.getRealNodeOffset(a.startContainer,a.startOffset),ecLoc:this.getNodeLocation(a.endContainer),ecOffset:this.getRealNodeOffset(a.endContainer,a.endOffset)}},a.Editable.prototype.getSnapshot=function(){var a={};if(a.html=this.$element.html(),a.ranges=[],this.selectionInEditor()&&this.$element.is(":focus"))for(var b=this.getRanges(),c=0;c<b.length;c++)a.ranges.push(this.getRangeSnapshot(b[c]));return a},a.Editable.prototype.identicSnapshots=function(a,b){return a.html!=b.html?!1:JSON.stringify(a.ranges)!=JSON.stringify(b.ranges)?!1:!0},a.Editable.prototype.restoreRangeSnapshot=function(a,b){try{var c=this.getNodeByLocation(a.scLoc),d=a.scOffset,e=this.getNodeByLocation(a.ecLoc),f=a.ecOffset,g=this.document.createRange();g.setStart(c,d),g.setEnd(e,f),b.addRange(g)}catch(h){}},a.Editable.prototype.restoreSnapshot=function(b){this.$element.html()!=b.html&&this.$element.html(b.html);var c=this.getSelection();this.clearSelection(),this.$element.focus();for(var d=0;d<b.ranges.length;d++)this.restoreRangeSnapshot(b.ranges[d],c);setTimeout(a.proxy(function(){this.$element.find(".f-img-wrap img").click()},this),0)}}(jQuery),function(a){a.Editable.prototype.refreshButtons=function(b){return this.initialized&&(this.selectionInEditor()&&!this.isHTML||this.browser.msie&&a.Editable.getIEversion()<9||b)?(this.$editor.find("button[data-cmd]").removeClass("active"),this.refreshDisabledState(),void this.raiseEvent("refresh")):!1},a.Editable.prototype.refreshDisabledState=function(){if(this.isHTML)return!1;if(this.$editor){for(var b=0;b<this.options.buttons.length;b++){var c=this.options.buttons[b];if(void 0!==a.Editable.commands[c]){var d=!1;a.isFunction(a.Editable.commands[c].disabled)?d=a.Editable.commands[c].disabled.apply(this):void 0!==a.Editable.commands[c].disabled&&(d=!0),d?(this.$editor.find('button[data-cmd="'+c+'"]').prop("disabled",!0),this.$editor.find('button[data-name="'+c+'"]').prop("disabled",!0)):(this.$editor.find('button[data-cmd="'+c+'"]').removeAttr("disabled"),this.$editor.find('button[data-name="'+c+'"]').removeAttr("disabled"))}}this.refreshUndo(),this.refreshRedo()}},a.Editable.prototype.refreshFormatBlocks=function(){var a=this.getSelectionElements()[0],b=a.tagName.toLowerCase();this.options.paragraphy&&b===this.options.defaultTag.toLowerCase()&&(b="n"),this.$editor.find('.fr-bttn > button[data-name="formatBlock"] + ul li').removeClass("active"),this.$bttn_wrapper.find('.fr-bttn > button[data-name="formatBlock"] + ul li[data-val="'+b+'"]').addClass("active")},a.Editable.prototype.refreshDefault=function(a){try{this.document.queryCommandState(a)===!0&&this.$editor.find('[data-cmd="'+a+'"]').addClass("active")}catch(b){}},a.Editable.prototype.refreshAlign=function(){var b=a(this.getSelectionElements()[0]);this.$editor.find('.fr-dropdown > button[data-name="align"] + ul li').removeClass("active");var c,d=b.css("text-align");["left","right","justify","center"].indexOf(d)<0&&(d="left"),"left"==d?c="justifyLeft":"right"==d?c="justifyRight":"justify"==d?c="justifyFull":"center"==d&&(c="justifyCenter"),this.$editor.find('.fr-dropdown > button[data-name="align"].fr-trigger i').attr("class","fa fa-align-"+d),this.$editor.find('.fr-dropdown > button[data-name="align"] + ul li[data-val="'+c+'"]').addClass("active")},a.Editable.prototype.refreshHTML=function(){this.isActive("html")?this.$editor.find('[data-cmd="html"]').addClass("active"):this.$editor.find('[data-cmd="html"]').removeClass("active")}}(jQuery),function(a){a.Editable.commands={bold:{title:"Bold",icon:"fa fa-bold",shortcut:"(Ctrl + B)",refresh:a.Editable.prototype.refreshDefault,undo:!0,callbackWithoutSelection:function(a){this._startInDefault(a)}},italic:{title:"Italic",icon:"fa fa-italic",shortcut:"(Ctrl + I)",refresh:a.Editable.prototype.refreshDefault,undo:!0,callbackWithoutSelection:function(a){this._startInDefault(a)}},underline:{cmd:"underline",title:"Underline",icon:"fa fa-underline",shortcut:"(Ctrl + U)",refresh:a.Editable.prototype.refreshDefault,undo:!0,callbackWithoutSelection:function(a){this._startInDefault(a)}},strikeThrough:{title:"Strikethrough",icon:"fa fa-strikethrough",refresh:a.Editable.prototype.refreshDefault,undo:!0,callbackWithoutSelection:function(a){this._startInDefault(a)}},subscript:{title:"Subscript",icon:"fa fa-subscript",refresh:a.Editable.prototype.refreshDefault,undo:!0,callbackWithoutSelection:function(a){this._startInDefault(a)}},superscript:{title:"Superscript",icon:"fa fa-superscript",refresh:a.Editable.prototype.refreshDefault,undo:!0,callbackWithoutSelection:function(a){this._startInDefault(a)}},formatBlock:{title:"Format Block",icon:"fa fa-paragraph",refreshOnShow:a.Editable.prototype.refreshFormatBlocks,callback:function(a,b){this.formatBlock(b)},undo:!0},align:{title:"Alignment",icon:"fa fa-align-left",refresh:a.Editable.prototype.refreshAlign,refreshOnShow:a.Editable.prototype.refreshAlign,seed:[{cmd:"justifyLeft",title:"Align Left",icon:"fa fa-align-left"},{cmd:"justifyCenter",title:"Align Center",icon:"fa fa-align-center"},{cmd:"justifyRight",title:"Align Right",icon:"fa fa-align-right"},{cmd:"justifyFull",title:"Justify",icon:"fa fa-align-justify"}],callback:function(a,b){this.align(b)},undo:!0},outdent:{title:"Indent Less",icon:"fa fa-dedent",activeless:!0,shortcut:"(Ctrl + <)",callback:function(){this.outdent(!0)},undo:!0},indent:{title:"Indent More",icon:"fa fa-indent",activeless:!0,shortcut:"(Ctrl + >)",callback:function(){this.indent()},undo:!0},selectAll:{title:"Select All",icon:"fa fa-file-text",shortcut:"(Ctrl + A)",callback:function(a,b){this.$element.focus(),this.execDefault(a,b)},undo:!1},createLink:{title:"Insert Link",icon:"fa fa-link",shortcut:"(Ctrl + K)",callback:function(){this.insertLink()},undo:!1},insertImage:{title:"Insert Image",icon:"fa fa-picture-o",activeless:!0,shortcut:"(Ctrl + P)",callback:function(){this.insertImage()},undo:!1},undo:{title:"Undo",icon:"fa fa-undo",activeless:!0,shortcut:"(Ctrl+Z)",refresh:a.Editable.prototype.refreshUndo,callback:function(){this.undo()},undo:!1},redo:{title:"Redo",icon:"fa fa-repeat",activeless:!0,shortcut:"(Shift+Ctrl+Z)",refresh:a.Editable.prototype.refreshRedo,callback:function(){this.redo()},undo:!1},html:{title:"Show HTML",icon:"fa fa-code",refresh:a.Editable.prototype.refreshHTML,callback:function(){this.html()},undo:!1},save:{title:"Save",icon:"fa fa-floppy-o",callback:function(){this.save()},undo:!1},insertHorizontalRule:{title:"Insert Horizontal Line",icon:"fa fa-minus",callback:function(a){this.insertHR(a)},undo:!0},removeFormat:{title:"Clear formatting",icon:"fa fa-eraser",activeless:!0,callback:function(){this.removeFormat()},undo:!0}},a.Editable.prototype.exec=function(b,c,d){return!this.selectionInEditor()&&a.Editable.commands[b].undo&&this.focus(),this.selectionInEditor()&&""===this.text()&&a.Editable.commands[b].callbackWithoutSelection?(a.Editable.commands[b].callbackWithoutSelection.apply(this,[b,c,d]),!1):void(a.Editable.commands[b].callback?a.Editable.commands[b].callback.apply(this,[b,c,d]):this.execDefault(b,c))},a.Editable.prototype.html=function(){var a;this.isHTML?(this.isHTML=!1,a=this.$html_area.val(),this.$box.removeClass("f-html"),this.$element.attr("contenteditable",!0),this.setHTML(a,!1),this.$editor.find('.fr-bttn:not([data-cmd="html"]), .fr-trigger').removeAttr("disabled"),this.$editor.find('.fr-bttn[data-cmd="html"]').removeClass("active"),this.$element.blur(),this.focus(),this.refreshButtons(),this.triggerEvent("htmlHide",[a],!0,!1)):(this.$box.removeClass("f-placeholder"),this.clearSelection(),this.cleanify(!1,!0,!1),a=this.cleanTags(this.getHTML(!1,!1)),this.$html_area.val(a).trigger("resize"),this.$html_area.css("height",this.$element.height()-1),this.$element.html("").append(this.$html_area).removeAttr("contenteditable"),this.$box.addClass("f-html"),this.$editor.find('button.fr-bttn:not([data-cmd="html"]), button.fr-trigger').attr("disabled",!0),this.$editor.find('.fr-bttn[data-cmd="html"]').addClass("active"),this.isHTML=!0,this.hide(),this.imageMode=!1,this.$element.blur(),this.$element.removeAttr("contenteditable"),this.triggerEvent("htmlShow",[a],!0,!1))},a.Editable.prototype.insertHR=function(b){this.$element.find("hr").addClass("fr-tag"),this.$element.hasClass("f-placeholder")?a(this.$element.find("> "+this.valid_nodes.join(", >"))[0]).before("<hr/>"):this.document.execCommand(b),this.hide();var c=this.$element.find("hr:not(.fr-tag)").next(this.valid_nodes.join(","));c.length>0?a(c[0]).prepend(this.markers_html):this.$element.find("hr:not(.fr-tag)").after(this.options.paragraphy?"<p>"+this.markers_html+"<br/></p>":this.markers_html),this.restoreSelectionByMarkers(),this.triggerEvent(b,[],!0,!1)},a.Editable.prototype.formatBlock=function(b){if(this.disabledList.indexOf("formatBlock")>=0)return!1;if(this.browser.msie&&a.Editable.getIEversion()<9)return"n"==b&&(b=this.options.defaultTag),this.document.execCommand("formatBlock",!1,"<"+b+">"),this.triggerEvent("formatBlock"),!1;if(this.$element.hasClass("f-placeholder")){if(this.options.paragraphy||"n"!=b){"n"==b&&(b=this.options.defaultTag);var c=a("<"+b+"><br/></"+b+">");this.$element.html(c),this.setSelection(c.get(0),0),this.$element.removeClass("f-placeholder")}}else{this.saveSelectionByMarkers(),this.wrapText(),this.restoreSelectionByMarkers();var d=this.getSelectionElements();d[0]==this.$element.get(0)&&(d=this.$element.find("> "+this.valid_nodes.join(", >"))),this.saveSelectionByMarkers();for(var e,f=function(b){if("PRE"==b.get(0).tagName)for(;b.find("br + br").length>0;){var c=a(b.find("br + br")[0]);c.prev().remove(),c.replaceWith("\n\n")}},g=0;g<d.length;g++){var h=a(d[g]);if(!this.fakeEmpty(h)){if(f(h),!this.options.paragraphy&&this.emptyElement(h.get(0))&&h.append("<br/>"),"n"==b)if(this.options.paragraphy){var i="<"+this.options.defaultTag+this.attrs(h.get(0))+">"+h.html()+"</"+this.options.defaultTag+">";e=a(i)}else e=h.html()+"<br/>";else e=a("<"+b+this.attrs(h.get(0))+">").html(h.html());h.get(0)!=this.$element.get(0)?h.replaceWith(e):h.html(e)}}this.unwrapText(),this.$element.find("pre + pre").each(function(){a(this).prepend(a(this).prev().html()+"<br/><br/>"),a(this).prev().remove()});var j=this;this.$element.find(this.valid_nodes.join(",")).each(function(){"PRE"!=this.tagName&&a(this).replaceWith("<"+this.tagName+j.attrs(this)+">"+a(this).html().replace(/\n\n/gi,"</"+this.tagName+"><"+this.tagName+">")+"</"+this.tagName+">")}),this.$element.find(this.valid_nodes.join(":empty ,")+":empty").append("<br/>"),this.cleanupLists(),this.restoreSelectionByMarkers()}this.triggerEvent("formatBlock"),this.repositionEditor()},a.Editable.prototype.align=function(b){if(this.browser.msie&&a.Editable.getIEversion()<9)return this.document.execCommand(b,!1,!1),this.triggerEvent("align",[b]),!1;this.saveSelectionByMarkers(),this.wrapText(),this.restoreSelectionByMarkers(),this.saveSelectionByMarkers();var c=this.getSelectionElements();"justifyLeft"==b?b="left":"justifyRight"==b?b="right":"justifyCenter"==b?b="center":"justifyFull"==b&&(b="justify");for(var d=0;d<c.length;d++)this.parents(a(c[d]),"LI").length>0&&(c[d]=a(c[d]).parents("LI").get(0)),a(c[d]).css("text-align",b);this.cleanupLists(),this.unwrapText(),this.restoreSelectionByMarkers(),this.repositionEditor(),this.triggerEvent("align",[b])},a.Editable.prototype.indent=function(b,c){if(void 0===c&&(c=!0),this.browser.msie&&a.Editable.getIEversion()<9)return b?this.document.execCommand("outdent",!1,!1):this.document.execCommand("indent",!1,!1),!1;var d=20;b&&(d=-20),this.saveSelectionByMarkers(),this.wrapText(),this.restoreSelectionByMarkers();var e=this.getSelectionElements();this.saveSelectionByMarkers();for(var f=0;f<e.length;f++){var g=a(e[f]);if(g.parentsUntil(this.$element,"li").length>0&&(g=g.closest("li")),this.raiseEvent("indent",[g,b]))if(g.get(0)!=this.$element.get(0)){var h=parseInt(g.css("margin-left"),10),i=Math.max(0,h+d);g.css("marginLeft",i),0===i&&(g.css("marginLeft",""),void 0===g.css("style")&&g.removeAttr("style"))}else{var j=a("<div>").html(g.html());g.html(j),j.css("marginLeft",Math.max(0,d)),0===Math.max(0,d)&&(j.css("marginLeft",""),void 0===j.css("style")&&j.removeAttr("style"))}}this.unwrapText(),this.restoreSelectionByMarkers(),c&&this.repositionEditor(),b||this.triggerEvent("indent")},a.Editable.prototype.outdent=function(a){this.indent(!0,a),this.triggerEvent("outdent")},a.Editable.prototype.execDefault=function(a,b){this.saveUndoStep(),this.document.execCommand(a,!1,b),this.triggerEvent(a,[],!0,!0)},a.Editable.prototype._startInDefault=function(a){this.focus(),this.document.execCommand(a,!1,!1),this.refreshButtons()},a.Editable.prototype._startInFontExec=function(b,c,d){this.focus();try{var e=this.getRange(),f=e.cloneRange();f.collapse(!1);var g=a('<span data-inserted="true" data-fr-verified="true" style="'+b+": "+d+';">'+a.Editable.INVISIBLE_SPACE+"</span>",this.document);f.insertNode(g[0]),g=this.$element.find("[data-inserted]"),g.removeAttr("data-inserted"),this.setSelection(g.get(0),1)}catch(h){}},a.Editable.prototype.removeFormat=function(){this.document.execCommand("removeFormat",!1,!1),this.document.execCommand("unlink",!1,!1)},a.Editable.prototype.inlineStyle=function(b,c,d){if(this.browser.webkit&&"font-size"!=b){var e=function(a){return a.attr("style").indexOf("font-size")>=0};this.$element.find("span").each(function(b,c){var d=a(c);d.attr("style")&&e(d)&&(d.data("font-size",d.css("font-size")),d.css("font-size",""))})}this.document.execCommand("fontSize",!1,4),this.saveSelectionByMarkers(),this.browser.webkit&&"font-size"!=b&&this.$element.find("span").each(function(b,c){var d=a(c);d.data("font-size")&&(d.css("font-size",d.data("font-size")),d.removeData("font-size"))});var f=function(c){var e=a(c);e.css(b)!=d&&e.css(b,""),""===e.attr("style")&&e.replaceWith(e.html())};this.$element.find("font").each(function(c,e){var g=a('<span data-fr-verified="true" style="'+b+": "+d+';">'+a(e).html()+"</span>");a(e).replaceWith(g);for(var h=g.find("span"),i=h.length-1;i>=0;i--)f(h[i])}),this.removeBlankSpans(),this.restoreSelectionByMarkers(),this.repositionEditor(),null!=c&&this.triggerEvent(c,[d],!0,!0)}}(jQuery),function(a){a.Editable.prototype.addListener=function(a,b){var c=this._events,d=c[a]=c[a]||[];d.push(b)},a.Editable.prototype.raiseEvent=function(a,b){void 0===b&&(b=[]);var c=!0,d=this._events[a];if(d)for(var e=0,f=d.length;f>e;e++){var g=d[e].apply(this,b);void 0!==g&&c!==!1&&(c=g)}return void 0===c&&(c=!0),c}}(jQuery),function(a){a.Editable.prototype.start_marker='<span class="f-marker" data-id="0" data-fr-verified="true" data-type="true"></span>',a.Editable.prototype.end_marker='<span class="f-marker" data-id="0" data-fr-verified="true" data-type="false"></span>',a.Editable.prototype.markers_html='<span class="f-marker" data-id="0" data-fr-verified="true" data-type="false"></span><span class="f-marker" data-id="0" data-fr-verified="true" data-type="true"></span>',a.Editable.prototype.text=function(){var a="";return this.window.getSelection?a=this.window.getSelection():this.document.getSelection?a=this.document.getSelection():this.document.selection&&(a=this.document.selection.createRange().text),a.toString()},a.Editable.prototype.selectionInEditor=function(){var b=this.getSelectionParent(),c=!1;return b==this.$element.get(0)&&(c=!0),c===!1&&a(b).parents().each(a.proxy(function(a,b){b==this.$element.get(0)&&(c=!0)},this)),c},a.Editable.prototype.getSelection=function(){var a="";return a=this.window.getSelection?this.window.getSelection():this.document.getSelection?this.document.getSelection():this.document.selection.createRange()},a.Editable.prototype.getRange=function(){var a=this.getRanges();return a.length>0?a[0]:null},a.Editable.prototype.getRanges=function(){var a=this.getSelection();if(a.getRangeAt&&a.rangeCount){for(var b=[],c=0;c<a.rangeCount;c++)b.push(a.getRangeAt(c));return b}return this.document.createRange?[this.document.createRange()]:[]},a.Editable.prototype.clearSelection=function(){var a=this.getSelection();try{a.removeAllRanges?a.removeAllRanges():a.empty?a.empty():a.clear&&a.clear()
}catch(b){}},a.Editable.prototype.getSelectionElement=function(){var b=this.getSelection();if(b.rangeCount){var c=this.getRange(),d=c.startContainer;if(1==d.nodeType){var e=!1;d.childNodes.length>0&&d.childNodes[c.startOffset]&&a(d.childNodes[c.startOffset]).text()===this.text()&&(d=d.childNodes[c.startOffset],e=!0),!e&&d.childNodes.length>0&&a(d.childNodes[0]).text()===this.text()&&["BR","IMG","HR"].indexOf(d.childNodes[0].tagName)<0&&(d=d.childNodes[0])}for(;1!=d.nodeType&&d.parentNode;)d=d.parentNode;for(var f=d;f&&"BODY"!=f.tagName;){if(f==this.$element.get(0))return d;f=a(f).parent()[0]}}return this.$element.get(0)},a.Editable.prototype.getSelectionParent=function(){var b,c=null;return this.window.getSelection?(b=this.window.getSelection(),b.rangeCount&&(c=b.getRangeAt(0).commonAncestorContainer,1!=c.nodeType&&(c=c.parentNode))):(b=this.document.selection)&&"Control"!=b.type&&(c=b.createRange().parentElement()),null!=c&&(a.inArray(this.$element.get(0),a(c).parents())>=0||c==this.$element.get(0))?c:null},a.Editable.prototype.nodeInRange=function(a,b){var c;if(a.intersectsNode)return a.intersectsNode(b);c=b.ownerthis.document.createRange();try{c.selectNode(b)}catch(d){c.selectNodeContents(b)}return-1==a.compareBoundaryPoints(Range.END_TO_START,c)&&1==a.compareBoundaryPoints(Range.START_TO_END,c)},a.Editable.prototype.getElementFromNode=function(b){for(1!=b.nodeType&&(b=b.parentNode);null!==b&&this.valid_nodes.indexOf(b.tagName)<0;)b=b.parentNode;return null!=b&&"LI"==b.tagName&&a(b).find(this.valid_nodes.join(",")).not("li").length>0?null:a.makeArray(a(b).parents()).indexOf(this.$element.get(0))>=0?b:null},a.Editable.prototype.nextNode=function(a,b){if(a.hasChildNodes())return a.firstChild;for(;a&&!a.nextSibling&&a!=b;)a=a.parentNode;return a&&a!=b?a.nextSibling:null},a.Editable.prototype.getRangeSelectedNodes=function(a){var b=[],c=a.startContainer,d=a.endContainer;if(c==d&&"TR"!=c.tagName){if(c.hasChildNodes()&&0!==c.childNodes.length){for(var e=c.childNodes,f=a.startOffset;f<a.endOffset;f++)e[f]&&b.push(e[f]);return 0===b.length&&b.push(c),b}return[c]}if(c==d&&"TR"==c.tagName){var g=c.childNodes,h=a.startOffset;if(g.length>h&&h>=0){var i=g[h];if("TD"==i.tagName||"TH"==i.tagName)return[i]}}for(;c&&c!=d;)c=this.nextNode(c,d),(c!=d||a.endOffset>0)&&b.push(c);for(c=a.startContainer;c&&c!=a.commonAncestorContainer;)b.unshift(c),c=c.parentNode;return b},a.Editable.prototype.getSelectedNodes=function(){if(this.window.getSelection){var b=this.window.getSelection();if(!b.isCollapsed){for(var c=this.getRanges(),d=[],e=0;e<c.length;e++)d=a.merge(d,this.getRangeSelectedNodes(c[e]));return d}if(this.selectionInEditor()){var f=b.getRangeAt(0).startContainer;return 3==f.nodeType?[f.parentNode]:[f]}}return[]},a.Editable.prototype.getSelectionElements=function(){var b=this.getSelectedNodes(),c=[];return a.each(b,a.proxy(function(a,b){if(null!==b){var d=this.getElementFromNode(b);c.indexOf(d)<0&&d!=this.$element.get(0)&&null!==d&&c.push(d)}},this)),0===c.length&&c.push(this.$element.get(0)),c},a.Editable.prototype.getSelectionLink=function(){var b=this.getSelectionLinks();return b.length>0?a(b[0]).attr("href"):null},a.Editable.prototype.saveSelection=function(){if(!this.selectionDisabled){this.savedRanges=[];for(var a=this.getRanges(),b=0;b<a.length;b++)this.savedRanges.push(a[b].cloneRange())}},a.Editable.prototype.restoreSelection=function(){if(!this.selectionDisabled){var a,b,c=this.getSelection();if(this.savedRanges&&this.savedRanges.length)for(c.removeAllRanges(),a=0,b=this.savedRanges.length;b>a;a+=1)c.addRange(this.savedRanges[a]);this.savedRanges=null}},a.Editable.prototype.insertMarkersAtPoint=function(a){var b=a.clientX,c=a.clientY;this.removeMarkers();var d,e=null;if("undefined"!=typeof this.document.caretPositionFromPoint?(d=this.document.caretPositionFromPoint(b,c),e=this.document.createRange(),e.setStart(d.offsetNode,d.offset),e.setEnd(d.offsetNode,d.offset)):"undefined"!=typeof this.document.caretRangeFromPoint&&(d=this.document.caretRangeFromPoint(b,c),e=this.document.createRange(),e.setStart(d.startContainer,d.startOffset),e.setEnd(d.startContainer,d.startOffset)),null!==e&&"undefined"!=typeof this.window.getSelection){var f=this.window.getSelection();f.removeAllRanges(),f.addRange(e)}else if("undefined"!=typeof this.document.body.createTextRange)try{e=this.document.body.createTextRange(),e.moveToPoint(b,c);var g=e.duplicate();g.moveToPoint(b,c),e.setEndPoint("EndToEnd",g),e.select()}catch(h){}this.placeMarker(e,!0,0),this.placeMarker(e,!1,0)},a.Editable.prototype.saveSelectionByMarkers=function(){if(!this.selectionDisabled){this.selectionInEditor()||this.focus(),this.removeMarkers();for(var a=this.getRanges(),b=0;b<a.length;b++)if(a[b].startContainer!==this.document){var c=a[b];this.placeMarker(c,!0,b),this.placeMarker(c,!1,b)}}},a.Editable.prototype.hasSelectionByMarkers=function(){var a=this.$element.find('.f-marker[data-type="true"]');return a.length>0?!0:!1},a.Editable.prototype.restoreSelectionByMarkers=function(b){if(void 0===b&&(b=!0),!this.selectionDisabled){var c=this.$element.find('.f-marker[data-type="true"]');if(0===c.length)return!1;this.$element.is(":focus")||this.browser.msie||this.$element.focus();var d=this.getSelection();(b||this.getRange()&&!this.getRange().collapsed||!a(c[0]).attr("data-collapsed"))&&(this.browser.msie&&a.Editable.getIEversion()<9||(this.clearSelection(),b=!0));for(var e=0;e<c.length;e++){var f=a(c[e]).data("id"),g=c[e],h=this.$element.find('.f-marker[data-type="false"][data-id="'+f+'"]');if(this.browser.msie&&a.Editable.getIEversion()<9)return this.setSelection(g,0,h,0),this.removeMarkers(),!1;var i;if(i=b?this.document.createRange():this.getRange(),h.length>0){h=h[0];try{i.setStartAfter(g),i.setEndBefore(h)}catch(j){}}b&&d.addRange(i)}this.removeMarkers()}},a.Editable.prototype.setSelection=function(a,b,c,d){var e=this.getSelection();if(e){this.clearSelection();try{c||(c=a),void 0===b&&(b=0),void 0===d&&(d=b);var f=this.getRange();f.setStart(a,b),f.setEnd(c,d),e.addRange(f)}catch(g){}}},a.Editable.prototype.buildMarker=function(b,c,d){return void 0===d&&(d=""),a('<span class="f-marker"'+d+' style="display:none; line-height: 0;" data-fr-verified="true" data-id="'+c+'" data-type="'+b+'">',this.document)[0]},a.Editable.prototype.placeMarker=function(b,c,d){var e="";b.collapsed&&(e=' data-collapsed="true"');try{var f=b.cloneRange();f.collapse(c);var g,h,i;if(f.insertNode(this.buildMarker(c,d,e)),c===!0&&e)for(g=this.$element.find('span.f-marker[data-type="true"][data-id="'+d+'"]').get(0).nextSibling;3===g.nodeType&&0===g.data.length;)a(g).remove(),g=this.$element.find('span.f-marker[data-type="true"][data-id="'+d+'"]').get(0).nextSibling;if(c===!0&&""===e&&(i=this.$element.find('span.f-marker[data-type="true"][data-id="'+d+'"]').get(0),g=i.nextSibling,g&&g.nodeType===Node.ELEMENT_NODE&&this.valid_nodes.indexOf(g.tagName)>=0)){h=[g];do g=h[0],h=a(g).contents();while(h[0]&&this.valid_nodes.indexOf(h[0].tagName)>=0);a(g).prepend(a(i))}if(c===!1&&""===e&&(i=this.$element.find('span.f-marker[data-type="false"][data-id="'+d+'"]').get(0),g=i.previousSibling,g&&g.nodeType===Node.ELEMENT_NODE&&this.valid_nodes.indexOf(g.tagName)>=0)){h=[g];do g=h[h.length-1],h=a(g).contents();while(h[h.length-1]&&this.valid_nodes.indexOf(h[h.length-1].tagName)>=0);a(g).append(a(i))}}catch(j){}},a.Editable.prototype.removeMarkers=function(){this.$element.find(".f-marker").remove()},a.Editable.prototype.getSelectionTextInfo=function(a){var b,c,d=!1,e=!1;if(this.window.getSelection){var f=this.window.getSelection();f.rangeCount&&(b=f.getRangeAt(0),c=b.cloneRange(),c.selectNodeContents(a),c.setEnd(b.startContainer,b.startOffset),d=""===c.toString(),c.selectNodeContents(a),c.setStart(b.endContainer,b.endOffset),e=""===c.toString())}else this.document.selection&&"Control"!=this.document.selection.type&&(b=this.document.selection.createRange(),c=b.duplicate(),c.moveToElementText(a),c.setEndPoint("EndToStart",b),d=""===c.text,c.moveToElementText(a),c.setEndPoint("StartToEnd",b),e=""===c.text);return{atStart:d,atEnd:e}},a.Editable.prototype.endsWith=function(a,b){return-1!==a.indexOf(b,a.length-b.length)}}(jQuery),function(a){a.Editable.hexToRGB=function(a){var b=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;a=a.replace(b,function(a,b,c,d){return b+b+c+c+d+d});var c=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return c?{r:parseInt(c[1],16),g:parseInt(c[2],16),b:parseInt(c[3],16)}:null},a.Editable.hexToRGBString=function(a){var b=this.hexToRGB(a);return b?"rgb("+b.r+", "+b.g+", "+b.b+")":""},a.Editable.RGBToHex=function(a){function b(a){return("0"+parseInt(a,10).toString(16)).slice(-2)}try{return a&&"transparent"!==a?/^#[0-9A-F]{6}$/i.test(a)?a:(a=a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/),("#"+b(a[1])+b(a[2])+b(a[3])).toUpperCase()):""}catch(c){return null}},a.Editable.getIEversion=function(){var a,b,c=-1;return"Microsoft Internet Explorer"==navigator.appName?(a=navigator.userAgent,b=new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})"),null!==b.exec(a)&&(c=parseFloat(RegExp.$1))):"Netscape"==navigator.appName&&(a=navigator.userAgent,b=new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})"),null!==b.exec(a)&&(c=parseFloat(RegExp.$1))),c},a.Editable.browser=function(){var a={};if(this.getIEversion()>0)a.msie=!0;else{var b=navigator.userAgent.toLowerCase(),c=/(chrome)[ \/]([\w.]+)/.exec(b)||/(webkit)[ \/]([\w.]+)/.exec(b)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b)||/(msie) ([\w.]+)/.exec(b)||b.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b)||[],d={browser:c[1]||"",version:c[2]||"0"};c[1]&&(a[d.browser]=!0),parseInt(d.version,10)<9&&a.msie&&(a.oldMsie=!0),a.chrome?a.webkit=!0:a.webkit&&(a.safari=!0)}return a},a.Editable.isArray=function(a){return a&&!a.propertyIsEnumerable("length")&&"object"==typeof a&&"number"==typeof a.length},a.Editable.uniq=function(b){return a.grep(b,function(c,d){return d==a.inArray(c,b)})},a.Editable.cleanWhitespace=function(b){b.contents().filter(function(){return 1==this.nodeType&&a.Editable.cleanWhitespace(a(this)),3==this.nodeType&&!/\S/.test(this.nodeValue)}).remove()}}(jQuery),function(a){a.Editable.prototype.show=function(b){if(this.hideDropdowns(),void 0!==b){if(this.options.inlineMode||this.options.editInPopup)if(null!==b&&"touchend"!==b.type){if(this.options.showNextToCursor){var c=b.pageX,d=b.pageY;c<this.$element.offset().left&&(c=this.$element.offset().left),c>this.$element.offset().left+this.$element.width()&&(c=this.$element.offset().left+this.$element.width()),d<this.$element.offset.top&&(d=this.$element.offset().top),d>this.$element.offset().top+this.$element.height()&&(d=this.$element.offset().top+this.$element.height()),20>c&&(c=20),0>d&&(d=0),this.showByCoordinates(c,d)}else this.repositionEditor();a(".froala-editor:not(.f-basic)").hide(),this.$editor.show(),0!==this.options.buttons.length||this.options.editInPopup||this.$editor.hide()}else a(".froala-editor:not(.f-basic)").hide(),this.$editor.show(),this.repositionEditor();this.hidePopups(),this.options.editInPopup||this.showEditPopupWrapper(),this.$bttn_wrapper.show(),this.refreshButtons(),this.imageMode=!1}},a.Editable.prototype.hideDropdowns=function(){this.$bttn_wrapper.find(".fr-dropdown .fr-trigger").removeClass("active"),this.$bttn_wrapper.find(".fr-dropdown .fr-trigger")},a.Editable.prototype.hide=function(a){return this.initialized?(void 0===a&&(a=!0),a?this.hideOtherEditors():(this.closeImageMode(),this.imageMode=!1),this.$popup_editor.hide(),this.hidePopups(!1),void(this.link=!1)):!1},a.Editable.prototype.hideOtherEditors=function(){for(var b=1;b<=a.Editable.count;b++)b!=this._id&&this.$window.trigger("hide."+b)},a.Editable.prototype.hideBttnWrapper=function(){this.options.inlineMode&&this.$bttn_wrapper.hide()},a.Editable.prototype.showBttnWrapper=function(){this.options.inlineMode&&this.$bttn_wrapper.show()},a.Editable.prototype.showEditPopupWrapper=function(){this.$edit_popup_wrapper&&(this.$edit_popup_wrapper.show(),setTimeout(a.proxy(function(){this.$edit_popup_wrapper.find("input").val(this.$element.text()).focus().select()},this),1))},a.Editable.prototype.hidePopups=function(a){void 0===a&&(a=!0),a&&this.hideBttnWrapper(),this.raiseEvent("hidePopups")},a.Editable.prototype.showEditPopup=function(){this.showEditPopupWrapper()}}(jQuery),function(a){a.Editable.prototype.getBoundingRect=function(){var b;if(this.isLink){b={};var c=this.$element;b.left=c.offset().left-this.$window.scrollLeft(),b.top=c.offset().top-this.$window.scrollTop(),b.width=c.outerWidth(),b.height=parseInt(c.css("padding-top").replace("px",""),10)+c.height(),b.right=1,b.bottom=1,b.ok=!0}else if(this.getRange()&&this.getRange().collapsed){var d=a(this.getSelectionElement());this.saveSelectionByMarkers();var e=this.$element.find(".f-marker:first");e.css("display","inline");var f=e.offset();e.css("display","none"),b={},b.left=f.left-this.$window.scrollLeft(),b.width=0,b.height=(parseInt(d.css("line-height").replace("px",""),10)||10)-10-this.$window.scrollTop(),b.top=f.top,b.right=1,b.bottom=1,b.ok=!0,this.removeMarkers()}else this.getRange()&&(b=this.getRange().getBoundingClientRect());return b},a.Editable.prototype.repositionEditor=function(a){var b,c,d;if(this.options.inlineMode||a){if(b=this.getBoundingRect(),this.showBttnWrapper(),b.ok||b.left>=0&&b.top>=0&&b.right>0&&b.bottom>0)c=b.left+b.width/2,d=b.top+b.height,this.iOS()&&this.iOSVersion()<8||(c+=this.$window.scrollLeft(),d+=this.$window.scrollTop()),this.showByCoordinates(c,d);else if(this.options.alwaysVisible)this.hide();else{var e=this.$element.offset();this.showByCoordinates(e.left,e.top+10)}0===this.options.buttons.length&&this.hide()}},a.Editable.prototype.showByCoordinates=function(a,b){a-=22,b+=8;var c=this.$document.find(this.options.scrollableContainer);"body"!=this.options.scrollableContainer&&(a-=c.offset().left,b-=c.offset().top,this.iPad()||(b+=c.scrollTop(),a+=c.scrollLeft())),b>this.$box.offset().top+this.$box.outerHeight()&&(b=this.$box.offset().top+this.$box.outerHeight(),this.options.inlineMode&&(b+=10));var d=Math.max(this.$popup_editor.outerWidth(),250);a+d>=c.outerWidth()-50&&a+44-d>0?(this.$popup_editor.addClass("right-side"),a=c.outerWidth()-(a+44),"static"==c.css("position")&&(a=a+parseFloat(c.css("margin-left"),10)+parseFloat(c.css("margin-right"),10)),this.$popup_editor.css("top",b),this.$popup_editor.css("right",a),this.$popup_editor.css("left","auto")):a+d<c.outerWidth()-50?(this.$popup_editor.removeClass("right-side"),this.$popup_editor.css("top",b),this.$popup_editor.css("left",a),this.$popup_editor.css("right","auto")):(this.$popup_editor.removeClass("right-side"),this.$popup_editor.css("top",b),this.$popup_editor.css("left",Math.max(c.outerWidth()-d,10)/2),this.$popup_editor.css("right","auto")),this.$popup_editor.show()},a.Editable.prototype.positionPopup=function(b){if(a(this.$editor.find('button.fr-bttn[data-cmd="'+b+'"]')).length){var c=this.$editor.find('button.fr-bttn[data-cmd="'+b+'"]'),d=c.width(),e=c.height(),f=c.offset().left+d/2,g=c.offset().top+e;this.showByCoordinates(f,g)}}}(jQuery),function(a){a.Editable.prototype.refreshImageAlign=function(a){this.$image_editor.find('.fr-dropdown > button[data-name="align"] + ul li').removeClass("active");var b="floatImageNone",c="center";a.hasClass("fr-fil")?(c="left",b="floatImageLeft"):a.hasClass("fr-fir")&&(c="right",b="floatImageRight"),this.$image_editor.find('.fr-dropdown > button[data-name="align"].fr-trigger i').attr("class","fa fa-align-"+c),this.$image_editor.find('.fr-dropdown > button[data-name="align"] + ul li[data-val="'+b+'"]').addClass("active")},a.Editable.prototype.refreshImageDisplay=function(){var a=this.$element.find(".f-img-editor");this.$image_editor.find('.fr-dropdown > button[data-name="display"] + ul li').removeClass("active"),a.hasClass("fr-dib")?this.$image_editor.find('.fr-dropdown > button[data-name="display"] + ul li[data-val="fr-dib"]').addClass("active"):this.$image_editor.find('.fr-dropdown > button[data-name="display"] + ul li[data-val="fr-dii"]').addClass("active")},a.Editable.image_commands={align:{title:"Alignment",icon:"fa fa-align-center",refresh:a.Editable.prototype.refreshImageAlign,refreshOnShow:a.Editable.prototype.refreshImageAlign,seed:[{cmd:"floatImageLeft",title:"Align Left",icon:"fa fa-align-left"},{cmd:"floatImageNone",title:"Align Center",icon:"fa fa-align-center"},{cmd:"floatImageRight",title:"Align Right",icon:"fa fa-align-right"}],callback:function(a,b,c){this[c](a)},undo:!0},display:{title:"Text Wrap",icon:"fa fa-star",refreshOnShow:a.Editable.prototype.refreshImageDisplay,namespace:"Image",seed:[{title:"Inline",value:"fr-dii"},{title:"Break Text",value:"fr-dib"}],callback:function(a,b,c){this.displayImage(a,c)},undo:!0},linkImage:{title:"Insert Link",icon:{type:"font",value:"fa fa-link"},callback:function(a){this.linkImage(a)}},replaceImage:{title:"Replace Image",icon:{type:"font",value:"fa fa-exchange"},callback:function(a){this.replaceImage(a)}},removeImage:{title:"Remove Image",icon:{type:"font",value:"fa fa-trash-o"},callback:function(a){this.removeImage(a)}}},a.Editable.DEFAULTS=a.extend(a.Editable.DEFAULTS,{allowedImageTypes:["jpeg","jpg","png","gif"],customImageButtons:{},defaultImageTitle:"Image title",defaultImageWidth:300,defaultImageDisplay:"block",defaultImageAlignment:"center",imageButtons:["display","align","linkImage","replaceImage","removeImage"],imageDeleteConfirmation:!0,imageDeleteURL:null,imageDeleteParams:{},imageMove:!0,imageResize:!0,imageLink:!0,imageTitle:!0,imageUpload:!0,imageUploadParams:{},imageUploadParam:"file",imageUploadToS3:!1,imageUploadURL:"http://i.froala.com/upload",maxImageSize:10485760,pasteImage:!0,textNearImage:!0}),a.Editable.prototype.hideImageEditorPopup=function(){this.$image_editor&&this.$image_editor.hide()},a.Editable.prototype.showImageEditorPopup=function(){this.$image_editor&&this.$image_editor.show(),this.options.imageMove||this.$element.attr("contenteditable",!1)},a.Editable.prototype.showImageWrapper=function(){this.$image_wrapper&&this.$image_wrapper.show()},a.Editable.prototype.hideImageWrapper=function(a){this.$image_wrapper&&(this.$element.attr("data-resize")||a||(this.closeImageMode(),this.imageMode=!1),this.$image_wrapper.hide(),this.$image_wrapper.find("input").blur())},a.Editable.prototype.showInsertImage=function(){this.hidePopups(),this.showImageWrapper()},a.Editable.prototype.showImageEditor=function(){this.hidePopups(),this.showImageEditorPopup()},a.Editable.prototype.insertImageHTML=function(){var b='<div class="froala-popup froala-image-popup" style="display: none;"><h4><span data-text="true">Insert Image</span><span data-text="true">Uploading image</span><i title="Cancel" class="fa fa-times" id="f-image-close-'+this._id+'"></i></h4>';return b+='<div id="f-image-list-'+this._id+'">',this.options.imageUpload&&(b+='<div class="f-popup-line drop-upload">',b+='<div class="f-upload" id="f-upload-div-'+this._id+'"><strong data-text="true">Drop Image</strong><br>(<span data-text="true">or click</span>)<form target="frame-'+this._id+'" enctype="multipart/form-data" encoding="multipart/form-data" action="'+this.options.imageUploadURL+'" method="post" id="f-upload-form-'+this._id+'"><input id="f-file-upload-'+this._id+'" type="file" name="'+this.options.imageUploadParam+'" accept="image/*"></form></div>',this.browser.msie&&a.Editable.getIEversion()<=9&&(b+='<iframe id="frame-'+this._id+'" name="frame-'+this._id+'" src="javascript:false;" style="width:0; height:0; border:0px solid #FFF; position: fixed; z-index: -1;"></iframe>'),b+="</div>"),this.options.imageLink&&(b+='<div class="f-popup-line"><label><span data-text="true">Enter URL</span>: </label><input id="f-image-url-'+this._id+'" type="text" placeholder="http://example.com"><button class="f-browse fr-p-bttn" id="f-browser-'+this._id+'"><i class="fa fa-search"></i></button><button data-text="true" class="f-ok fr-p-bttn f-submit" id="f-image-ok-'+this._id+'">OK</button></div>'),b+="</div>",b+='<p class="f-progress" id="f-progress-'+this._id+'"><span></span></p>',b+="</div>"},a.Editable.prototype.iFrameLoad=function(){var a=this.$image_wrapper.find("iframe#frame-"+this._id);if(!a.attr("data-loaded"))return a.attr("data-loaded",!0),!1;try{var b=this.$image_wrapper.find("#f-upload-form-"+this._id);if(this.options.imageUploadToS3){var c=b.attr("action"),d=b.find('input[name="key"]').val(),e=c+d;this.writeImage(e),this.options.imageUploadToS3.callback&&this.options.imageUploadToS3.callback.call(this,e,d)}else{var f=a.contents().text();this.parseImageResponse(f)}}catch(g){this.throwImageError(7)}},a.Editable.prototype.initImage=function(){this.buildInsertImage(),(!this.isLink||this.isImage)&&this.initImagePopup(),this.addListener("destroy",this.destroyImage)},a.Editable.initializers.push(a.Editable.prototype.initImage),a.Editable.prototype.destroyImage=function(){this.$image_editor&&this.$image_editor.html("").removeData().remove(),this.$image_wrapper&&this.$image_wrapper.html("").removeData().remove()},a.Editable.prototype.buildInsertImage=function(){this.$image_wrapper=a(this.insertImageHTML()),this.$popup_editor.append(this.$image_wrapper);var b=this;if(this.$image_wrapper.on("mouseup touchend",a.proxy(function(a){this.isResizing()||a.stopPropagation()},this)),this.addListener("hidePopups",a.proxy(function(){this.hideImageWrapper(!0)},this)),this.$progress_bar=this.$image_wrapper.find("p#f-progress-"+this._id),this.options.imageUpload){if(this.browser.msie&&a.Editable.getIEversion()<=9){var c=this.$image_wrapper.find("iframe").get(0);c.attachEvent?c.attachEvent("onload",function(){b.iFrameLoad()}):c.onload=function(){b.iFrameLoad()}}this.$image_wrapper.on("change",'input[type="file"]',function(){if(void 0!==this.files)b.uploadImage(this.files);else{if(!b.triggerEvent("beforeImageUpload",[],!1))return!1;var c=a(this).parents("form");c.find('input[type="hidden"]').remove();var d;for(d in b.options.imageUploadParams)c.prepend('<input type="hidden" name="'+d+'" value="'+b.options.imageUploadParams[d]+'" />');if(b.options.imageUploadToS3!==!1){for(d in b.options.imageUploadToS3.params)c.prepend('<input type="hidden" name="'+d+'" value="'+b.options.imageUploadToS3.params[d]+'" />');c.prepend('<input type="hidden" name="success_action_status" value="201" />'),c.prepend('<input type="hidden" name="X-Requested-With" value="xhr" />'),c.prepend('<input type="hidden" name="Content-Type" value="" />'),c.prepend('<input type="hidden" name="key" value="'+b.options.imageUploadToS3.keyStart+(new Date).getTime()+"-"+a(this).val().match(/[^\/\\]+$/)+'" />')}else c.prepend('<input type="hidden" name="XHR_CORS_TRARGETORIGIN" value="'+b.window.location.href+'" />');b.showInsertImage(),b.showImageLoader(!0),b.disable(),c.submit()}a(this).val("")})}this.buildDragUpload(),this.$image_wrapper.on("mouseup keydown","#f-image-url-"+this._id,a.proxy(function(a){var b=a.which;b&&27===b||a.stopPropagation()},this)),this.$image_wrapper.on("click","#f-image-ok-"+this._id,a.proxy(function(){this.writeImage(this.$image_wrapper.find("#f-image-url-"+this._id).val(),!0)},this)),this.$image_wrapper.on(this.mouseup,"#f-image-close-"+this._id,a.proxy(function(a){return this.isDisabled?!1:(a.stopPropagation(),this.$bttn_wrapper.show(),this.hideImageWrapper(!0),this.options.inlineMode&&0===this.options.buttons.length&&(this.imageMode?this.showImageEditor():this.hide()),this.imageMode||(this.restoreSelection(),this.focus()),void(this.options.inlineMode||this.imageMode?this.imageMode&&this.showImageEditor():this.hide()))},this)),this.$image_wrapper.on("click",function(a){a.stopPropagation()}),this.$image_wrapper.on("click","*",function(a){a.stopPropagation()})},a.Editable.prototype.deleteImage=function(b){if(this.options.imageDeleteURL){var c=this.options.imageDeleteParams;c.info=b.data("info"),c.src=b.attr("src"),a.ajax({type:"POST",url:this.options.imageDeleteURL,data:c,crossDomain:this.options.crossDomain,xhrFields:{withCredentials:this.options.withCredentials},headers:this.options.headers}).done(a.proxy(function(a){b.parent().parent().hasClass("f-image-list")?b.parent().remove():b.parent().removeClass("f-img-deleting"),this.triggerEvent("imageDeleteSuccess",[a],!1)},this)).fail(a.proxy(function(){b.parent().removeClass("f-img-deleting"),this.triggerEvent("imageDeleteError",["Error during image delete."],!1)},this))}else b.parent().removeClass("f-img-deleting"),this.triggerEvent("imageDeleteError",["Missing imageDeleteURL option."],!1)},a.Editable.prototype.imageHandle=function(){var b=this,c=a('<span data-fr-verified="true">').addClass("f-img-handle").on({movestart:function(c){b.hide(),b.$element.addClass("f-non-selectable").attr("contenteditable",!1),b.$element.attr("data-resize",!0),a(this).attr("data-start-x",c.startX),a(this).attr("data-start-y",c.startY)},move:function(c){var d=a(this),e=c.pageX-parseInt(d.attr("data-start-x"),10);d.attr("data-start-x",c.pageX),d.attr("data-start-y",c.pageY);var f=d.prevAll("img"),g=f.width();d.hasClass("f-h-ne")||d.hasClass("f-h-se")?f.attr("width",g+e):f.attr("width",g-e),b.triggerEvent("imageResize",[f],!1)},moveend:function(){a(this).removeAttr("data-start-x"),a(this).removeAttr("data-start-y");var c=a(this),d=c.prevAll("img");b.$element.removeClass("f-non-selectable"),b.isImage||b.$element.attr("contenteditable",!0),b.triggerEvent("imageResizeEnd",[d]),a(this).trigger("mouseup")},touchend:function(){a(this).trigger("moveend")}});return c},a.Editable.prototype.disableImageResize=function(){if(this.browser.mozilla)try{document.execCommand("enableObjectResizing",!1,!1),document.execCommand("enableInlineTableEditing",!1,!1)}catch(a){}},a.Editable.prototype.isResizing=function(){return this.$element.attr("data-resize")},a.Editable.prototype.getImageStyle=function(a){var b="z-index: 1; position: relative; overflow: auto;",c=a,d="padding";return a.parent().hasClass("f-img-editor")&&(c=a.parent(),d="margin"),b+=" padding-left:"+c.css(d+"-left")+";",b+=" padding-right:"+c.css(d+"-right")+";",b+=" padding-bottom:"+c.css(d+"-bottom")+";",b+=" padding-top:"+c.css(d+"-top")+";",a.hasClass("fr-dib")?(b+=" vertical-align: top; display: block;",b+=a.hasClass("fr-fir")?" float: none; margin-right: 0; margin-left: auto;":a.hasClass("fr-fil")?" float: none; margin-left: 0; margin-right: auto;":" float: none; margin: auto;"):(b+=" display: inline-block;",b+=a.hasClass("fr-fir")?" float: right;":a.hasClass("fr-fil")?" float: left;":" float: none;"),b},a.Editable.prototype.getImageClass=function(a){var b=a.split(" ");return a="fr-fin",b.indexOf("fr-fir")>=0&&(a="fr-fir"),b.indexOf("fr-fil")>=0&&(a="fr-fil"),b.indexOf("fr-dib")>=0&&(a+=" fr-dib"),b.indexOf("fr-dii")>=0&&(a+=" fr-dii"),a},a.Editable.prototype.refreshImageButtons=function(a){this.$image_editor.find("button").removeClass("active");var b=a.css("float");b=a.hasClass("fr-fil")?"Left":a.hasClass("fr-fir")?"Right":"None",this.$image_editor.find('button[data-cmd="floatImage'+b+'"]').addClass("active"),this.raiseEvent("refreshImage",[a])},a.Editable.prototype.initImageEvents=function(){document.addEventListener&&!document.dropAssigned&&(document.dropAssigned=!0,document.addEventListener("drop",a.proxy(function(b){return a(".froala-element img.fr-image-move").length?(b.preventDefault(),b.stopPropagation(),a(".froala-element img.fr-image-move").removeClass("fr-image-move"),!1):void 0},this))),this.disableImageResize();var b=this;this.$element.on("mousedown",'img:not([contenteditable="false"])',function(c){return b.isDisabled?!1:void(b.isResizing()||(b.initialized&&c.stopPropagation(),b.$element.attr("contenteditable",!1),a(this).addClass("fr-image-move")))}),this.$element.on("mouseup",'img:not([contenteditable="false"])',function(){return b.isDisabled?!1:void(b.isResizing()||(b.options.imageMove||b.isImage||b.isHTML||b.$element.attr("contenteditable",!0),a(this).removeClass("fr-image-move")))}),this.$element.on("click touchend",'img:not([contenteditable="false"])',function(c){if(b.isDisabled)return!1;if(!b.isResizing()&&b.initialized){if(c.preventDefault(),c.stopPropagation(),b.closeImageMode(),b.$element.blur(),b.refreshImageButtons(a(this)),b.$image_editor.find('.f-image-alt input[type="text"]').val(a(this).attr("alt")||a(this).attr("title")),b.showImageEditor(),!a(this).parent().hasClass("f-img-editor")||"SPAN"!=a(this).parent().get(0).tagName){var d=b.getImageClass(a(this).attr("class"));a(this).wrap('<span data-fr-verified="true" class="f-img-editor '+d+'"></span>'),0!==a(this).parents(".f-img-wrap").length||b.isImage?a(this).parents(".f-img-wrap").attr("class",d+" f-img-wrap"):a(this).parents("a").length>0?a(this).parents("a:first").wrap('<span data-fr-verified="true" class="f-img-wrap '+d+'"></span>'):a(this).parent().wrap('<span data-fr-verified="true" class="f-img-wrap '+d+'"></span>')}if(a(this).parent().find(".f-img-handle").remove(),b.options.imageResize){var e=b.imageHandle();a(this).parent().append(e.clone(!0).addClass("f-h-ne")),a(this).parent().append(e.clone(!0).addClass("f-h-se")),a(this).parent().append(e.clone(!0).addClass("f-h-sw")),a(this).parent().append(e.clone(!0).addClass("f-h-nw"))}b.showByCoordinates(a(this).offset().left+a(this).width()/2,a(this).offset().top+a(this).height()),b.imageMode=!0,b.$bttn_wrapper.find(".fr-bttn").removeClass("active"),b.clearSelection()}}),this.$element.on("mousedown touchstart",".f-img-handle",a.proxy(function(){return b.isDisabled?!1:void this.$element.attr("data-resize",!0)},this)),this.$element.on("mouseup",".f-img-handle",a.proxy(function(c){if(b.isDisabled)return!1;var d=a(c.target).prevAll("img");setTimeout(a.proxy(function(){this.$element.removeAttr("data-resize"),d.click()},this),0)},this))},a.Editable.prototype.execImage=function(b,c,d){var e=this.$element.find("span.f-img-editor"),f=e.find("img"),g=a.Editable.image_commands[b]||this.options.customImageButtons[b];g&&g.callback&&g.callback.apply(this,[f,b,c,d])},a.Editable.prototype.bindImageRefreshListener=function(b){b.refresh&&this.addListener("refreshImage",a.proxy(function(a){b.refresh.apply(this,[a])},this))},a.Editable.prototype.buildImageButton=function(a,b){var c='<button class="fr-bttn" data-namespace="Image" data-cmd="'+b+'" title="'+a.title+'">';return c+=void 0!==this.options.icons[b]?this.prepareIcon(this.options.icons[b],a.title):this.prepareIcon(a.icon,a.title),c+="</button>",this.bindImageRefreshListener(a),c},a.Editable.prototype.buildImageAlignDropdown=function(a){this.bindImageRefreshListener(a);for(var b='<ul class="fr-dropdown-menu f-align">',c=0;c<a.seed.length;c++){var d=a.seed[c];b+='<li data-cmd="align" data-namespace="Image" data-val="'+d.cmd+'" title="'+d.title+'"><a href="#"><i class="'+d.icon+'"></i></a></li>'}return b+="</ul>"},a.Editable.prototype.buildImageDropdown=function(a){return dropdown=this.buildDefaultDropdown(a),btn=this.buildDropdownButton(a,dropdown),btn},a.Editable.prototype.image_command_dispatcher={align:function(a){var b=this.buildImageAlignDropdown(a),c=this.buildDropdownButton(a,b);return c}},a.Editable.prototype.buildImageButtons=function(){for(var b="",c=0;c<this.options.imageButtons.length;c++){var d=this.options.imageButtons[c];if(void 0!==a.Editable.image_commands[d]||void 0!==this.options.customImageButtons[d]){var e=a.Editable.image_commands[d]||this.options.customImageButtons[d];e.cmd=d;var f=this.image_command_dispatcher[d];b+=f?f.apply(this,[e]):e.seed?this.buildImageDropdown(e,d):this.buildImageButton(e,d)}}return b},a.Editable.prototype.initImagePopup=function(){this.$image_editor=a('<div class="froala-popup froala-image-editor-popup" style="display: none">');var b=a('<div class="f-popup-line f-popup-toolbar">').appendTo(this.$image_editor);b.append(this.buildImageButtons()),this.addListener("hidePopups",this.hideImageEditorPopup),this.options.imageTitle&&a('<div class="f-popup-line f-image-alt">').append('<label><span data-text="true">Title</span>: </label>').append(a('<input type="text">').on("mouseup keydown touchend",function(a){var b=a.which;b&&27===b||a.stopPropagation()})).append('<button class="fr-p-bttn f-ok" data-text="true" data-callback="setImageAlt" data-cmd="setImageAlt" title="OK">OK</button>').appendTo(this.$image_editor),this.$popup_editor.append(this.$image_editor),this.bindCommandEvents(this.$image_editor),this.bindDropdownEvents(this.$image_editor)
},a.Editable.prototype.displayImage=function(a,b){var c=a.parents("span.f-img-editor");c.removeClass("fr-dii fr-dib").addClass(b),this.triggerEvent("imageDisplayed",[a,b]),a.click()},a.Editable.prototype.floatImageLeft=function(a){var b=a.parents("span.f-img-editor");b.removeClass("fr-fin fr-fil fr-fir").addClass("fr-fil"),this.isImage&&this.$element.css("float","left"),this.triggerEvent("imageFloatedLeft",[a]),a.click()},a.Editable.prototype.floatImageNone=function(a){var b=a.parents("span.f-img-editor");b.removeClass("fr-fin fr-fil fr-fir").addClass("fr-fin"),this.isImage||(b.parent().get(0)==this.$element.get(0)?b.wrap('<div style="text-align: center;"></div>'):b.parents(".f-img-wrap:first").css("text-align","center")),this.isImage&&this.$element.css("float","none"),this.triggerEvent("imageFloatedNone",[a]),a.click()},a.Editable.prototype.floatImageRight=function(a){var b=a.parents("span.f-img-editor");b.removeClass("fr-fin fr-fil fr-fir").addClass("fr-fir"),this.isImage&&this.$element.css("float","right"),this.triggerEvent("imageFloatedRight",[a]),a.click()},a.Editable.prototype.linkImage=function(a){this.imageMode=!0,this.showInsertLink();var b=a.parents("span.f-img-editor");"A"==b.parent().get(0).tagName?this.updateLinkValues(b.parent()):this.resetLinkValues()},a.Editable.prototype.replaceImage=function(a){this.showInsertImage(),this.imageMode=!0,this.$image_wrapper.find('input[type="text"]').val(a.attr("src")),this.showByCoordinates(a.offset().left+a.width()/2,a.offset().top+a.height())},a.Editable.prototype.removeImage=function(b){var c=b.parents("span.f-img-editor");if(0===c.length)return!1;var d=b.get(0),e="Are you sure? Image will be deleted.";if(a.Editable.LANGS[this.options.language]&&(e=a.Editable.LANGS[this.options.language].translation[e]),!this.options.imageDeleteConfirmation||confirm(e)){if(this.triggerEvent("beforeRemoveImage",[a(d)],!1)){var f=c.parents(this.valid_nodes.join(","));c.parents(".f-img-wrap").length?c.parents(".f-img-wrap").remove():c.remove(),this.refreshImageList(!0),this.hide(),f.length&&f[0]!=this.$element.get(0)&&""===a(f[0]).text()&&1==f[0].childNodes.length&&a(f[0]).remove(),this.wrapText(),this.triggerEvent("afterRemoveImage",[b]),this.focus(),this.imageMode=!1}}else b.click()},a.Editable.prototype.setImageAlt=function(){var a=this.$element.find("span.f-img-editor"),b=a.find("img");b.attr("alt",this.$image_editor.find('.f-image-alt input[type="text"]').val()),b.attr("title",this.$image_editor.find('.f-image-alt input[type="text"]').val()),this.hide(),this.closeImageMode(),this.triggerEvent("imageAltSet",[b])},a.Editable.prototype.buildImageMove=function(){var b=this;this.isLink||this.initDrag(),b.$element.on("dragover dragenter dragend",function(a){a.preventDefault()}),b.$element.on("drop",function(c){if(b.isDisabled)return!1;if(b.closeImageMode(),b.hide(),b.imageMode=!1,b.initialized||(b.$element.unbind("mousedown.element"),b.lateInit()),!b.options.imageUpload||0!==a(".froala-element img.fr-image-move").length){if(a(".froala-element .fr-image-move").length>0&&b.options.imageMove){c.preventDefault(),c.stopPropagation(),b.insertMarkersAtPoint(c.originalEvent),b.restoreSelectionByMarkers();var d=a("<div>").append(a(".froala-element img.fr-image-move").clone().removeClass("fr-image-move").addClass("fr-image-dropped")).html();b.insertHTML(d);var e=a(".froala-element img.fr-image-move").parent();a(".froala-element img.fr-image-move").remove(),e.get(0)!=b.$element.get(0)&&e.is(":empty")&&e.remove(),b.clearSelection(),b.initialized?setTimeout(function(){b.$element.find(".fr-image-dropped").removeClass(".fr-image-dropped").click()},0):b.$element.find(".fr-image-dropped").removeClass(".fr-image-dropped"),b.sync(),b.hideOtherEditors()}else c.preventDefault(),c.stopPropagation(),a(".froala-element img.fr-image-move").removeClass("fr-image-move");return!1}if(c.originalEvent.dataTransfer&&c.originalEvent.dataTransfer.files&&c.originalEvent.dataTransfer.files.length){if(b.isDisabled)return!1;var f=c.originalEvent.dataTransfer.files;b.options.allowedImageTypes.indexOf(f[0].type.replace(/image\//g,""))>=0&&(b.insertMarkersAtPoint(c.originalEvent),b.showByCoordinates(c.originalEvent.pageX,c.originalEvent.pageY),b.uploadImage(f),c.preventDefault(),c.stopPropagation())}})},a.Editable.prototype.buildDragUpload=function(){var b=this;b.$image_wrapper.on("dragover","#f-upload-div-"+this._id,function(){return a(this).addClass("f-hover"),!1}),b.$image_wrapper.on("dragend","#f-upload-div-"+this._id,function(){return a(this).removeClass("f-hover"),!1}),b.$image_wrapper.on("drop","#f-upload-div-"+this._id,function(c){return c.preventDefault(),c.stopPropagation(),b.options.imageUpload?(a(this).removeClass("f-hover"),void b.uploadImage(c.originalEvent.dataTransfer.files)):!1})},a.Editable.prototype.showImageLoader=function(b){if(void 0===b&&(b=!1),b){var c="Please wait!";a.Editable.LANGS[this.options.language]&&(c=a.Editable.LANGS[this.options.language].translation[c]),this.$progress_bar.find("span").css("width","100%").text(c)}else this.$image_wrapper.find("h4").addClass("uploading");this.$image_wrapper.find("#f-image-list-"+this._id).hide(),this.$progress_bar.show(),this.showInsertImage()},a.Editable.prototype.hideImageLoader=function(){this.$progress_bar.hide(),this.$progress_bar.find("span").css("width","0%").text(""),this.$image_wrapper.find("#f-image-list-"+this._id).show(),this.$image_wrapper.find("h4").removeClass("uploading")},a.Editable.prototype.writeImage=function(b,c,d){if(c&&(b=this.sanitizeURL(b),""===b))return!1;var e=new Image;e.onerror=a.proxy(function(){this.hideImageLoader(),this.throwImageError(1)},this),e.onload=this.imageMode?a.proxy(function(){var a=this.$element.find(".f-img-editor > img");a.attr("src",b),this.hide(),this.hideImageLoader(),this.$image_editor.show(),this.enable(),this.triggerEvent("imageReplaced",[a,d]),setTimeout(function(){a.trigger("click")},0)},this):a.proxy(function(){this.insertLoadedImage(b,d)},this),this.showImageLoader(!0),e.src=b},a.Editable.prototype.processInsertImage=function(b,c){void 0===c&&(c=!0),this.enable(),this.focus(),this.restoreSelection();var d="";parseInt(this.options.defaultImageWidth,10)&&(d=' width="'+this.options.defaultImageWidth+'"');var e="fr-fin";"left"==this.options.defaultImageAlignment&&(e="fr-fil"),"right"==this.options.defaultImageAlignment&&(e="fr-fir"),e+=" fr-di"+this.options.defaultImageDisplay[0];var f='<img class="'+e+' fr-just-inserted" alt="'+this.options.defaultImageTitle+'" src="'+b+'"'+d+">",g=this.getSelectionElements()[0],h=this.getRange(),i=!this.browser.msie&&a.Editable.getIEversion()>8?a(h.startContainer):null;i&&i.hasClass("f-img-wrap")?(1===h.startOffset?(i.after("<"+this.options.defaultTag+'><span class="f-marker" data-type="true" data-id="0"></span><br/><span class="f-marker" data-type="false" data-id="0"></span></'+this.options.defaultTag+">"),this.restoreSelectionByMarkers(),this.getSelection().collapseToStart()):0===h.startOffset&&(i.before("<"+this.options.defaultTag+'><span class="f-marker" data-type="true" data-id="0"></span><br/><span class="f-marker" data-type="false" data-id="0"></span></'+this.options.defaultTag+">"),this.restoreSelectionByMarkers(),this.getSelection().collapseToStart()),this.insertHTML(f)):this.getSelectionTextInfo(g).atStart&&g!=this.$element.get(0)&&"TD"!=g.tagName&&"TH"!=g.tagName&&"LI"!=g.tagName?a(g).before("<"+this.options.defaultTag+">"+f+"</"+this.options.defaultTag+">"):this.insertHTML(f),this.disable()},a.Editable.prototype.insertLoadedImage=function(b,c){this.triggerEvent("imageLoaded",[b],!1),this.processInsertImage(b,!1),this.browser.msie&&this.$element.find("img").each(function(a,b){b.oncontrolselect=function(){return!1}}),this.enable(),this.hide(),this.hideImageLoader(),this.wrapText(),this.cleanupLists();var d,e=this.$element.find("img.fr-just-inserted").get(0);e&&(d=e.previousSibling),d&&3==d.nodeType&&/\u200B/gi.test(d.textContent)&&a(d).remove(),this.triggerEvent("imageInserted",[this.$element.find("img.fr-just-inserted"),c]),setTimeout(a.proxy(function(){this.$element.find("img.fr-just-inserted").removeClass("fr-just-inserted").trigger("touchend")},this),50)},a.Editable.prototype.throwImageErrorWithMessage=function(a){this.enable(),this.triggerEvent("imageError",[{message:a,code:0}],!1),this.hideImageLoader()},a.Editable.prototype.throwImageError=function(a){this.enable();var b="Unknown image upload error.";1==a?b="Bad link.":2==a?b="No link in upload response.":3==a?b="Error during file upload.":4==a?b="Parsing response failed.":5==a?b="Image too large.":6==a?b="Invalid image type.":7==a&&(b="Image can be uploaded only to same domain in IE 8 and IE 9."),this.triggerEvent("imageError",[{code:a,message:b}],!1),this.hideImageLoader()},a.Editable.prototype.uploadImage=function(b){if(!this.triggerEvent("beforeImageUpload",[b],!1))return!1;if(void 0!==b&&b.length>0){var c;if(this.drag_support.formdata&&(c=this.drag_support.formdata?new FormData:null),c){var d;for(d in this.options.imageUploadParams)c.append(d,this.options.imageUploadParams[d]);if(this.options.imageUploadToS3!==!1){for(d in this.options.imageUploadToS3.params)c.append(d,this.options.imageUploadToS3.params[d]);c.append("success_action_status","201"),c.append("X-Requested-With","xhr"),c.append("Content-Type",b[0].type),c.append("key",this.options.imageUploadToS3.keyStart+(new Date).getTime()+"-"+b[0].name)}if(c.append(this.options.imageUploadParam,b[0]),b[0].size>this.options.maxImageSize)return this.throwImageError(5),!1;if(this.options.allowedImageTypes.indexOf(b[0].type.replace(/image\//g,""))<0)return this.throwImageError(6),!1}if(c){var e;if(this.options.crossDomain)e=this.createCORSRequest("POST",this.options.imageUploadURL);else{e=new XMLHttpRequest,e.open("POST",this.options.imageUploadURL);for(var f in this.options.headers)e.setRequestHeader(f,this.options.headers[f])}e.onload=a.proxy(function(){var b="Please wait!";a.Editable.LANGS[this.options.language]&&(b=a.Editable.LANGS[this.options.language].translation[b]),this.$progress_bar.find("span").css("width","100%").text(b);try{if(this.options.imageUploadToS3)201==e.status?this.parseImageResponseXML(e.responseXML):this.throwImageError(3);else if(e.status>=200&&e.status<300)this.parseImageResponse(e.responseText);else try{var c=a.parseJSON(e.responseText);c.error?this.throwImageErrorWithMessage(c.error):this.throwImageError(3)}catch(d){this.throwImageError(3)}}catch(d){this.throwImageError(4)}},this),e.onerror=a.proxy(function(){this.throwImageError(3)},this),e.upload.onprogress=a.proxy(function(a){if(a.lengthComputable){var b=a.loaded/a.total*100|0;this.$progress_bar.find("span").css("width",b+"%")}},this),this.disable(),e.send(c),this.showImageLoader()}}},a.Editable.prototype.parseImageResponse=function(b){try{if(!this.triggerEvent("afterImageUpload",[b],!1))return!1;var c=a.parseJSON(b);c.link?this.writeImage(c.link,!1,b):c.error?this.throwImageErrorWithMessage(c.error):this.throwImageError(2)}catch(d){this.throwImageError(4)}},a.Editable.prototype.parseImageResponseXML=function(b){try{var c=a(b).find("Location").text(),d=a(b).find("Key").text();this.options.imageUploadToS3.callback&&this.options.imageUploadToS3.callback.call(this,c,d),c?this.writeImage(c):this.throwImageError(2)}catch(e){this.throwImageError(4)}},a.Editable.prototype.setImageUploadURL=function(a){a&&(this.options.imageUploadURL=a),this.options.imageUploadToS3&&(this.options.imageUploadURL="https://"+this.options.imageUploadToS3.bucket+"."+this.options.imageUploadToS3.region+".amazonaws.com/")},a.Editable.prototype.closeImageMode=function(){this.$element.find("span.f-img-editor > img").each(a.proxy(function(b,c){a(c).removeClass("fr-fin fr-fil fr-fir fr-dib fr-dii").addClass(this.getImageClass(a(c).parent().attr("class"))),a(c).parents(".f-img-wrap").length>0?"A"==a(c).parent().parent().get(0).tagName?a(c).siblings("span.f-img-handle").remove().end().unwrap().parent().unwrap():a(c).siblings("span.f-img-handle").remove().end().unwrap().unwrap():a(c).siblings("span.f-img-handle").remove().end().unwrap()},this)),this.$element.find("span.f-img-editor").length&&(this.$element.find("span.f-img-editor").remove(),this.$element.parents("span.f-img-editor").remove()),this.$element.removeClass("f-non-selectable"),this.editableDisabled||this.isHTML||this.$element.attr("contenteditable",!0),this.$image_editor&&this.$image_editor.hide(),this.$link_wrapper&&this.options.linkText&&this.$link_wrapper.find('input[type="text"].f-lt').parent().removeClass("fr-hidden")},a.Editable.prototype.refreshImageList=function(b){if(!this.isLink&&!this.options.editInPopup){var c=[],d=[],e=this;if(this.$element.find("img").each(function(b,f){var g=a(f);if(c.push(g.attr("src")),d.push(g),"false"==g.attr("contenteditable"))return!0;if(0!==g.parents(".f-img-editor").length||g.hasClass("fr-dii")||g.hasClass("fr-dib")||(e.options.textNearImage?g.addClass(g.hasClass("fr-fin")?"fr-dib":g.hasClass("fr-fil")||g.hasClass("fr-fir")?"fr-dii":"block"==g.css("display")&&"none"==g.css("float")?"fr-dib":"fr-dii"):(g.addClass("fr-dib"),e.options.imageButtons.splice(e.options.imageButtons.indexOf("display"),1))),e.options.textNearImage||g.removeClass("fr-dii").addClass("fr-dib"),0===g.parents(".f-img-editor").length&&!g.hasClass("fr-fil")&&!g.hasClass("fr-fir")&&!g.hasClass("fr-fin"))if(g.hasClass("fr-dii"))g.addClass("right"==g.css("float")?"fr-fir":"left"==g.css("float")?"fr-fil":"fr-fin");else{var h=g.attr("style");g.hide(),g.addClass(0===parseInt(g.css("margin-right"),10)&&h?"fr-fir":0===parseInt(g.css("margin-left"),10)&&h?"fr-fil":"fr-fin"),g.show()}g.css("margin",""),g.css("float",""),g.css("display",""),g.removeAttr("data-style")}),void 0===b)for(var f=0;f<this.imageList.length;f++)c.indexOf(this.imageList[f].attr("src"))<0&&this.triggerEvent("afterRemoveImage",[this.imageList[f]],!1);this.imageList=d}},a.Editable.prototype.insertImage=function(){this.options.inlineMode||(this.closeImageMode(),this.imageMode=!1,this.positionPopup("insertImage")),this.selectionInEditor()&&this.saveSelection(),this.showInsertImage(),this.imageMode=!1,this.$image_wrapper.find('input[type="text"]').val("")}}(jQuery),function(a){a.Editable.prototype.showLinkWrapper=function(){this.$link_wrapper&&(this.$link_wrapper.show(),this.$link_wrapper.trigger("hideLinkList"),this.$link_wrapper.trigger("hideLinkClassList"),this.$link_wrapper.find("input.f-lu").removeClass("fr-error"),this.imageMode||!this.options.linkText?this.$link_wrapper.find('input[type="text"].f-lt').parent().addClass("fr-hidden"):this.$link_wrapper.find('input[type="text"].f-lt').parent().removeClass("fr-hidden"),this.imageMode&&this.$link_wrapper.find('input[type="text"].f-lu').removeAttr("disabled"),this.phone()?this.$document.scrollTop(this.$link_wrapper.offset().top+30):setTimeout(a.proxy(function(){this.imageMode&&this.iPad()||this.$link_wrapper.find('input[type="text"].f-lu').focus().select()},this),0),this.link=!0),this.refreshDisabledState()},a.Editable.prototype.hideLinkWrapper=function(){this.$link_wrapper&&(this.$link_wrapper.hide(),this.$link_wrapper.find("input").blur()),this.refreshDisabledState()},a.Editable.prototype.showInsertLink=function(){this.hidePopups(),this.showLinkWrapper()},a.Editable.prototype.updateLinkValues=function(b){var c=b.attr("href")||"http://";this.$link_wrapper.find("input.f-lt").val(b.text()),this.isLink?("#"==c&&(c=""),this.$link_wrapper.find("input#f-lu-"+this._id).val(c.replace(/\&amp;/g,"&")),this.$link_wrapper.find(".f-external-link").attr("href",c||"#")):(this.$link_wrapper.find("input.f-lu").val(c.replace(/\&amp;/g,"&")),this.$link_wrapper.find(".f-external-link").attr("href",c)),this.$link_wrapper.find("input.f-target").prop("checked","_blank"==b.attr("target")),this.$link_wrapper.find("li.f-choose-link-class").each(a.proxy(function(c,d){b.hasClass(a(d).data("class"))&&a(d).click()},this));for(var d in this.options.linkAttributes){var e=b.attr(d);this.$link_wrapper.find("input.fl-"+d).val(e?e:"")}this.$link_wrapper.find("a.f-external-link, button.f-unlink").show()},a.Editable.prototype.initLinkEvents=function(){var b=this,c=function(a){a.stopPropagation(),a.preventDefault()},d=function(c){return c.stopPropagation(),c.preventDefault(),b.isDisabled?!1:""!==b.text()?(b.hide(),!1):(b.link=!0,b.clearSelection(),b.removeMarkers(),b.selectionDisabled||(a(this).before('<span class="f-marker" data-type="true" data-id="0" data-fr-verified="true"></span>'),a(this).after('<span class="f-marker" data-type="false" data-id="0" data-fr-verified="true"></span>'),b.restoreSelectionByMarkers()),b.exec("createLink"),b.updateLinkValues(a(this)),b.showByCoordinates(a(this).offset().left+a(this).outerWidth()/2,a(this).offset().top+(parseInt(a(this).css("padding-top"),10)||0)+a(this).height()),b.showInsertLink(),a(this).hasClass("fr-file")?b.$link_wrapper.find("input.f-lu").attr("disabled","disabled"):b.$link_wrapper.find("input.f-lu").removeAttr("disabled"),void b.closeImageMode())};this.$element.on("mousedown","a",a.proxy(function(a){this.isResizing()||a.stopPropagation()},this)),this.isLink?this.iOS()?(this.$element.on("touchstart",c),this.$element.on("touchend",d)):this.$element.on("click",d):this.iOS()?(this.$element.on("touchstart",'a:not([contenteditable="false"])',c),this.$element.on("touchend",'a:not([contenteditable="false"])',d),this.$element.on("touchstart",'a[contenteditable="false"]',c),this.$element.on("touchend",'a[contenteditable="false"]',c)):(this.$element.on("click",'a:not([contenteditable="false"])',d),this.$element.on("click",'a[contenteditable="false"]',c))},a.Editable.prototype.destroyLink=function(){this.$link_wrapper.html("").removeData().remove()},a.Editable.prototype.initLink=function(){this.buildCreateLink(),this.initLinkEvents(),this.addListener("destroy",this.destroyLink)},a.Editable.initializers.push(a.Editable.prototype.initLink),a.Editable.prototype.removeLink=function(){this.imageMode?("A"==this.$element.find(".f-img-editor").parent().get(0).tagName&&a(this.$element.find(".f-img-editor").get(0)).unwrap(),this.triggerEvent("imageLinkRemoved"),this.showImageEditor(),this.$element.find(".f-img-editor").find("img").click(),this.link=!1):(this.restoreSelection(),this.document.execCommand("unlink",!1,null),this.isLink||this.$element.find("a:empty").remove(),this.triggerEvent("linkRemoved"),this.hideLinkWrapper(),this.$bttn_wrapper.show(),(!this.options.inlineMode||this.isLink)&&this.hide(),this.link=!1)},a.Editable.prototype.writeLink=function(b,c,d,e,f){var g,h=this.options.noFollow;this.options.alwaysBlank&&(e=!0);var i,j="",k="",l="";h===!0&&/^https?:\/\//.test(b)&&(j='rel="nofollow"'),e===!0&&(k='target="_blank"');for(i in f)l+=" "+i+'="'+f[i]+'"';var m=b;if(b=this.sanitizeURL(b),this.options.convertMailAddresses){var n=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;n.test(b)&&0!==b.indexOf("mailto:")&&(b="mailto:"+b)}if(0===b.indexOf("mailto:")||""===this.options.linkAutoPrefix||/^(https?:|ftps?:|)\/\//.test(b)||(b=this.options.linkAutoPrefix+b),""===b)return this.$link_wrapper.find("input.f-lu").addClass("fr-error").focus(),this.triggerEvent("badLink",[m],!1),!1;if(this.$link_wrapper.find("input.f-lu").removeClass("fr-error"),this.imageMode){if("A"!=this.$element.find(".f-img-editor").parent().get(0).tagName)this.$element.find(".f-img-editor").wrap('<a data-fr-link="true" href="'+b+'" '+k+" "+j+l+"></a>");else{var o=this.$element.find(".f-img-editor").parent();e===!0?o.attr("target","_blank"):o.removeAttr("target"),h===!0?o.attr("rel","nofollow"):o.removeAttr("rel");for(i in f)f[i]?o.attr(i,f[i]):o.removeAttr(i);o.removeClass(Object.keys(this.options.linkClasses).join(" ")),o.attr("href",b).addClass(d)}this.triggerEvent("imageLinkInserted",[b]),this.showImageEditor(),this.$element.find(".f-img-editor").find("img").click(),this.link=!1}else{var p=null;this.isLink?""===c&&(c=this.$element.text()):(this.restoreSelection(),g=this.getSelectionLinks(),g.length>0&&(p=g[0].attributes,is_file=a(g[0]).hasClass("fr-file")),this.saveSelectionByMarkers(),this.document.execCommand("unlink",!1,b),this.$element.find('span[data-fr-link="true"]').each(function(b,c){a(c).replaceWith(a(c).html())}),this.restoreSelectionByMarkers()),this.isLink?(this.$element.text(c),g=[this.$element.attr("href",b).get(0)]):(this.removeMarkers(),(this.options.linkText||""===this.text())&&(this.insertHTML('<span class="f-marker" data-fr-verified="true" data-id="0" data-type="true"></span>'+(c||m)+'<span class="f-marker" data-fr-verified="true" data-id="0" data-type="false"></span>'),this.restoreSelectionByMarkers()),this.document.execCommand("createLink",!1,b),g=this.getSelectionLinks());for(var q=0;q<g.length;q++){if(p)for(var r=0;r<p.length;r++)"href"!=p[r].nodeName&&a(g[q]).attr(p[r].nodeName,p[r].value);e===!0?a(g[q]).attr("target","_blank"):a(g[q]).removeAttr("target"),h===!0&&/^https?:\/\//.test(b)?a(g[q]).attr("rel","nofollow"):a(g[q]).removeAttr("rel"),a(g[q]).data("fr-link",!0),a(g[q]).removeClass(Object.keys(this.options.linkClasses).join(" ")),a(g[q]).addClass(d);for(i in f)f[i]?a(g[q]).attr(i,f[i]):a(g[q]).removeAttr(i)}this.$element.find("a:empty").remove(),this.triggerEvent("linkInserted",[b]),this.hideLinkWrapper(),this.$bttn_wrapper.show(),(!this.options.inlineMode||this.isLink)&&this.hide(),this.link=!1}},a.Editable.prototype.createLinkHTML=function(){var a='<div class="froala-popup froala-link-popup" style="display: none;">';a+='<h4><span data-text="true">Insert Link</span><a target="_blank" title="Open Link" class="f-external-link" href="#"><i class="fa fa-external-link"></i></a><i title="Cancel" class="fa fa-times" id="f-link-close-'+this._id+'"></i></h4>',a+='<div class="f-popup-line fr-hidden"><input type="text" placeholder="Text" class="f-lt" id="f-lt-'+this._id+'"></div>';var b="";if(this.options.linkList.length&&(b="f-bi"),a+='<div class="f-popup-line"><input type="text" placeholder="http://www.example.com" class="f-lu '+b+'" id="f-lu-'+this._id+'"/>',this.options.linkList.length){a+='<button class="fr-p-bttn f-browse-links" id="f-browse-links-'+this._id+'"><i class="fa fa-chevron-down"></i></button>',a+='<ul id="f-link-list-'+this._id+'">';for(var c=0;c<this.options.linkList.length;c++){var d=this.options.linkList[c],e="";for(var f in d)e+=" data-"+f+'="'+d[f]+'"';a+='<li class="f-choose-link"'+e+">"+d.body+"</li>"}a+="</ul>"}if(a+="</div>",Object.keys(this.options.linkClasses).length){a+='<div class="f-popup-line"><input type="text" placeholder="Choose link type" class="f-bi" id="f-luc-'+this._id+'" disabled="disabled"/>',a+='<button class="fr-p-bttn f-browse-links" id="f-links-class-'+this._id+'"><i class="fa fa-chevron-down"></i></button>',a+='<ul id="f-link-class-list-'+this._id+'">';for(var g in this.options.linkClasses){var h=this.options.linkClasses[g];a+='<li class="f-choose-link-class" data-class="'+g+'">'+h+"</li>"}a+="</ul>",a+="</div>"}for(var i in this.options.linkAttributes){var j=this.options.linkAttributes[i];a+='<div class="f-popup-line"><input class="fl-'+i+'" type="text" placeholder="'+j+'" id="fl-'+i+"-"+this._id+'"/></div>'}return a+='<div class="f-popup-line"><input type="checkbox" class="f-target" id="f-target-'+this._id+'"> <label data-text="true" for="f-target-'+this._id+'">Open in new tab</label><button data-text="true" type="button" class="fr-p-bttn f-ok f-submit" id="f-ok-'+this._id+'">OK</button>',this.options.unlinkButton&&(a+='<button type="button" data-text="true" class="fr-p-bttn f-ok f-unlink" id="f-unlink-'+this._id+'">UNLINK</button>'),a+="</div></div>"},a.Editable.prototype.buildCreateLink=function(){this.$link_wrapper=a(this.createLinkHTML()),this.$popup_editor.append(this.$link_wrapper);var b=this;this.addListener("hidePopups",this.hideLinkWrapper),this.$link_wrapper.on("mouseup touchend",a.proxy(function(a){this.isResizing()||(a.stopPropagation(),this.$link_wrapper.trigger("hideLinkList"))},this)),this.$link_wrapper.on("click",function(a){a.stopPropagation()}),this.$link_wrapper.on("click","*",function(a){a.stopPropagation()}),this.options.linkText&&this.$link_wrapper.on("mouseup keydown","input#f-lt-"+this._id,a.proxy(function(a){var b=a.which;b&&27===b||a.stopPropagation(),this.$link_wrapper.trigger("hideLinkList"),this.$link_wrapper.trigger("hideLinkClassList")},this)),this.$link_wrapper.on("mouseup keydown touchend touchstart","input#f-lu-"+this._id,a.proxy(function(a){var b=a.which;b&&27===b||a.stopPropagation(),this.$link_wrapper.trigger("hideLinkList"),this.$link_wrapper.trigger("hideLinkClassList")},this)),this.$link_wrapper.on("click keydown","input#f-target-"+this._id,function(a){var b=a.which;b&&27===b||a.stopPropagation()}),this.$link_wrapper.on("touchend","button#f-ok-"+this._id,function(a){a.stopPropagation()}).on("click","button#f-ok-"+this._id,a.proxy(function(){var a,b=this.$link_wrapper.find("input#f-lt-"+this._id),c=this.$link_wrapper.find("input#f-lu-"+this._id),d=this.$link_wrapper.find("input#f-luc-"+this._id),e=this.$link_wrapper.find("input#f-target-"+this._id);a=b?b.val():"";var f=c.val();this.isLink&&""===f&&(f="#");var g="";d&&(g=d.data("class"));var h={};for(var i in this.options.linkAttributes)h[i]=this.$link_wrapper.find("input#fl-"+i+"-"+this._id).val();this.writeLink(f,a,g,e.prop("checked"),h)},this)),this.$link_wrapper.on("click touch","button#f-unlink-"+this._id,a.proxy(function(){this.link=!0,this.removeLink()},this)),this.options.linkList.length&&(this.$link_wrapper.on("click touch","li.f-choose-link",function(){b.resetLinkValues();var c=b.$link_wrapper.find("button#f-browse-links-"+b._id),d=b.$link_wrapper.find("input#f-lt-"+b._id),e=b.$link_wrapper.find("input#f-lu-"+b._id),f=b.$link_wrapper.find("input#f-target-"+b._id);d&&d.val(a(this).data("body")),e.val(a(this).data("href")),f.prop("checked",a(this).data("blank"));for(var g in b.options.linkAttributes)a(this).data(g)&&b.$link_wrapper.find("input#fl-"+g+"-"+b._id).val(a(this).data(g));c.click()}).on("mouseup","li.f-choose-link",function(a){a.stopPropagation()}),this.$link_wrapper.on("click","button#f-browse-links-"+this._id+", button#f-browse-links-"+this._id+" > i",function(c){c.stopPropagation();var d=b.$link_wrapper.find("ul#f-link-list-"+b._id);b.$link_wrapper.trigger("hideLinkClassList"),a(this).find("i").toggleClass("fa-chevron-down"),a(this).find("i").toggleClass("fa-chevron-up"),d.toggle()}).on("mouseup","button#f-browse-links-"+this._id+", button#f-browse-links-"+this._id+" > i",function(a){a.stopPropagation()}),this.$link_wrapper.bind("hideLinkList",function(){var a=b.$link_wrapper.find("ul#f-link-list-"+b._id),c=b.$link_wrapper.find("button#f-browse-links-"+b._id);a&&a.is(":visible")&&c.click()})),Object.keys(this.options.linkClasses).length&&(this.$link_wrapper.on("mouseup keydown","input#f-luc-"+this._id,a.proxy(function(a){var b=a.which;b&&27===b||a.stopPropagation(),this.$link_wrapper.trigger("hideLinkList"),this.$link_wrapper.trigger("hideLinkClassList")},this)),this.$link_wrapper.on("click touch","li.f-choose-link-class",function(){var c=b.$link_wrapper.find("input#f-luc-"+b._id);c.val(a(this).text()),c.data("class",a(this).data("class")),b.$link_wrapper.trigger("hideLinkClassList")}).on("mouseup","li.f-choose-link-class",function(a){a.stopPropagation()}),this.$link_wrapper.on("click","button#f-links-class-"+this._id,function(c){c.stopPropagation(),b.$link_wrapper.trigger("hideLinkList");var d=b.$link_wrapper.find("ul#f-link-class-list-"+b._id);a(this).find("i").toggleClass("fa-chevron-down"),a(this).find("i").toggleClass("fa-chevron-up"),d.toggle()}).on("mouseup","button#f-links-class-"+this._id,function(a){a.stopPropagation()}),this.$link_wrapper.bind("hideLinkClassList",function(){var a=b.$link_wrapper.find("ul#f-link-class-list-"+b._id),c=b.$link_wrapper.find("button#f-links-class-"+b._id);a&&a.is(":visible")&&c.click()})),this.$link_wrapper.on(this.mouseup,"i#f-link-close-"+this._id,a.proxy(function(){this.$bttn_wrapper.show(),this.hideLinkWrapper(),(!this.options.inlineMode&&!this.imageMode||this.isLink||0===this.options.buttons.length)&&this.hide(),this.imageMode?this.showImageEditor():(this.restoreSelection(),this.focus())},this))},a.Editable.prototype.getSelectionLinks=function(){var a,b,c,d,e=[];if(window.getSelection){var f=window.getSelection();if(f.getRangeAt&&f.rangeCount){d=this.document.createRange();for(var g=0;g<f.rangeCount;++g)if(a=f.getRangeAt(g),b=a.commonAncestorContainer,b&&1!=b.nodeType&&(b=b.parentNode),b&&"a"==b.nodeName.toLowerCase())e.push(b);else{c=b.getElementsByTagName("a");for(var h=0;h<c.length;++h)d.selectNodeContents(c[h]),d.compareBoundaryPoints(a.END_TO_START,a)<1&&d.compareBoundaryPoints(a.START_TO_END,a)>-1&&e.push(c[h])}}}else if(this.document.selection&&"Control"!=this.document.selection.type)if(a=this.document.selection.createRange(),b=a.parentElement(),"a"==b.nodeName.toLowerCase())e.push(b);else{c=b.getElementsByTagName("a"),d=this.document.body.createTextRange();for(var i=0;i<c.length;++i)d.moveToElementText(c[i]),d.compareEndPoints("StartToEnd",a)>-1&&d.compareEndPoints("EndToStart",a)<1&&e.push(c[i])}return e},a.Editable.prototype.resetLinkValues=function(){this.$link_wrapper.find("input").val(""),this.$link_wrapper.find('input[type="checkbox"].f-target').prop("checked",this.options.alwaysBlank),this.$link_wrapper.find('input[type="text"].f-lt').val(this.text()),this.$link_wrapper.find('input[type="text"].f-lu').val("http://"),this.$link_wrapper.find('input[type="text"].f-lu').removeAttr("disabled"),this.$link_wrapper.find("a.f-external-link, button.f-unlink").hide();for(var a in this.options.linkAttributes)this.$link_wrapper.find('input[type="text"].fl-'+a).val("")},a.Editable.prototype.insertLink=function(){this.options.inlineMode||(this.closeImageMode(),this.imageMode=!1,this.positionPopup("createLink")),this.selectionInEditor()&&this.saveSelection(),this.showInsertLink();var b=this.getSelectionLinks();b.length>0?this.updateLinkValues(a(b[0])):this.resetLinkValues()}}(jQuery),function(a){a.Editable.prototype.browserFixes=function(){this.backspaceEmpty(),this.backspaceInEmptyBlock(),this.fixHR(),this.domInsert(),this.fixIME(),this.cleanInvisibleSpace(),this.cleanBR(),this.insertSpace()},a.Editable.prototype.backspaceInEmptyBlock=function(){this.$element.on("keyup",a.proxy(function(b){var c=b.which;if(this.browser.mozilla&&!this.isHTML&&8==c){var d=a(this.getSelectionElement());this.valid_nodes.indexOf(d.get(0).tagName)>=0&&1==d.find("*").length&&""===d.text()&&1==d.find("br").length&&this.setSelection(d.get(0))}},this))},a.Editable.prototype.insertSpace=function(){this.browser.mozilla&&this.$element.on("keypress",a.proxy(function(a){var b=a.which,c=this.getSelectionElements()[0];this.isHTML||32!=b||"PRE"==c.tagName||(a.preventDefault(),this.insertSimpleHTML("&nbsp;"))},this))},a.Editable.prototype.cleanBR=function(){this.$element.on("keyup",a.proxy(function(){this.$element.find(this.valid_nodes.join(",")).each(a.proxy(function(b,c){if(["TH","TD","LI"].indexOf(c.tagName)>=0)return!0;var d=c.childNodes,e=null;if(!d.length||"BR"!=d[d.length-1].tagName)return!0;e=d[d.length-1];var f=e.previousSibling;f&&"BR"!=f.tagName&&a(e).parent().text().length>0&&this.valid_nodes.indexOf(f.tagName)<0&&a(e).remove()},this))},this))},a.Editable.prototype.replaceU200B=function(b){for(var c=0;c<b.length;c++)3==b[c].nodeType&&/\u200B/gi.test(b[c].textContent)?b[c].textContent=b[c].textContent.replace(/\u200B/gi,""):1==b[c].nodeType&&this.replaceU200B(a(b[c]).contents())},a.Editable.prototype.cleanInvisibleSpace=function(){var b=function(b){var c=a(b).text();return b&&/\u200B/.test(a(b).text())&&c.replace(/\u200B/gi,"").length>0?!0:!1};this.$element.on("keyup",a.proxy(function(){var c=this.getSelectionElement();b(c)&&0===a(c).find("li").length&&(this.saveSelectionByMarkers(),this.replaceU200B(a(c).contents()),this.restoreSelectionByMarkers())},this))},a.Editable.prototype.fixHR=function(){this.$element.on("keypress",a.proxy(function(b){var c=a(this.getSelectionElement());if(c.is("hr")||c.parents("hr").length)return!1;var d=b.which;if(8==d){var e=a(this.getSelectionElements()[0]);
e.prev().is("hr")&&this.getSelectionTextInfo(e.get(0)).atStart&&(this.saveSelectionByMarkers(),e.prev().remove(),this.restoreSelectionByMarkers(),b.preventDefault())}},this))},a.Editable.prototype.backspaceEmpty=function(){this.$element.on("keydown",a.proxy(function(a){var b=a.which;!this.isHTML&&8==b&&this.$element.hasClass("f-placeholder")&&a.preventDefault()},this))},a.Editable.prototype.domInsert=function(){this.$element.on("keydown",a.proxy(function(a){var b=a.which;13===b&&(this.add_br=!0)},this)),this.$element.on("DOMNodeInserted",a.proxy(function(b){if("SPAN"!==b.target.tagName||a(b.target).attr("data-fr-verified")||this.no_verify||this.textEmpty(b.target)||a(b.target).replaceWith(a(b.target).contents()),"BR"===b.target.tagName&&setTimeout(function(){a(b.target).removeAttr("type")},0),"A"===b.target.tagName&&setTimeout(function(){a(b.target).removeAttr("_moz_dirty")},0),this.options.paragraphy&&this.add_br&&"BR"===b.target.tagName&&(a(b.target).prev().length&&"TABLE"===a(b.target).prev().get(0).tagName||a(b.target).next().length&&"TABLE"===a(b.target).next().get(0).tagName)){a(b.target).wrap('<p class="fr-p-wrap">');var c=this.$element.find("p.fr-p-wrap").removeAttr("class");this.setSelection(c.get(0))}"BR"===b.target.tagName&&this.isLastSibling(b.target)&&"LI"==b.target.parentNode.tagName&&this.textEmpty(b.target.parentNode)&&a(b.target).remove()},this)),this.$element.on("keyup",a.proxy(function(a){var b=a.which;8===b&&this.$element.find("span:not([data-fr-verified])").attr("data-fr-verified",!0),13===b&&(this.add_br=!1)},this))},a.Editable.prototype.fixIME=function(){try{this.$element.get(0).msGetInputContext&&(this.$element.get(0).msGetInputContext().addEventListener("MSCandidateWindowShow",a.proxy(function(){this.ime=!0},this)),this.$element.get(0).msGetInputContext().addEventListener("MSCandidateWindowHide",a.proxy(function(){this.ime=!1,this.$element.trigger("keydown"),this.oldHTML=""},this)))}catch(b){}}}(jQuery),function(a){a.Editable.prototype.handleEnter=function(){var b=a.proxy(function(){var b=this.getSelectionElement();return"LI"==b.tagName||this.parents(a(b),"li").length>0?!0:!1},this);this.$element.on("keypress",a.proxy(function(a){if(!this.isHTML&&!b()){var c=a.which;if(13==c&&!a.shiftKey){a.preventDefault(),this.saveUndoStep(),this.insertSimpleHTML("<break></break>");var d=this.getSelectionElements();if(d[0]==this.$element.get(0)?this.enterInMainElement(d[0]):this.enterInElement(d[0]),this.getSelectionTextInfo(this.$element.get(0)).atEnd)this.$wrapper.scrollTop(this.$element.height());else{var e=this.getBoundingRect();this.$wrapper.offset().top+this.$wrapper.height()<e.top+e.height&&this.$wrapper.scrollTop(e.top+this.$wrapper.scrollTop()-(this.$wrapper.height()+this.$wrapper.offset().top)+e.height+10)}}}},this))},a.Editable.prototype.enterInMainElement=function(b){var c=a(b).find("break").get(0);if(a(c).parent().get(0)==b)this.isLastSibling(c)?this.insertSimpleHTML("</br>"+this.markers_html+this.br):a(b).hasClass("f-placeholder")?a(b).html("</br>"+this.markers_html+this.br):this.insertSimpleHTML("</br>"+this.markers_html),a(b).find("break").remove(),this.restoreSelectionByMarkers();else if(a(c).parents(this.$element).length){for(b=this.getSelectionElement();"BREAK"==b.tagName||0===a(b).text().length&&b.parentNode!=this.$element.get(0);)b=b.parentNode;if(this.getSelectionTextInfo(b).atEnd)a(b).after(this.breakEnd(this.getDeepParent(b),!0)),this.$element.find("break").remove(),this.restoreSelectionByMarkers();else if(this.getSelectionTextInfo(b).atStart){for(;c.parentNode!=this.$element.get(0);)c=c.parentNode;a(c).before("<br/>"),this.$element.find("break").remove(),this.$element.find("a:empty").replaceWith(this.markers_html+"<br/>"),this.restoreSelectionByMarkers()}else this.breakMiddle(this.getDeepParent(b),!0),this.restoreSelectionByMarkers()}else a(c).remove()},a.Editable.prototype.enterInElement=function(b){if(["TD","TH"].indexOf(b.tagName)<0){var c=!1;if(this.emptyElement(b)&&b.parentNode&&"BLOCKQUOTE"==b.parentNode.tagName){a(b).before(this.$element.find("break"));var d=b;b=b.parentNode,a(d).remove(),c=!0}this.getSelectionTextInfo(b).atEnd?(a(b).after(this.breakEnd(b),!1),this.$element.find("break").remove(),this.restoreSelectionByMarkers()):this.getSelectionTextInfo(b).atStart?(this.options.paragraphy?c?(a(b).before("<"+this.options.defaultTag+">"+this.markers_html+this.br+"</"+this.options.defaultTag+">"),this.restoreSelectionByMarkers()):a(b).before("<"+this.options.defaultTag+">"+this.br+"</"+this.options.defaultTag+">"):c?(a(b).before(this.markers_html+"<br/>"),this.restoreSelectionByMarkers()):a(b).before("<br/>"),this.$element.find("break").remove()):"PRE"==b.tagName?(this.$element.find("break").after("<br/>"+this.markers_html),this.$element.find("break").remove(),this.restoreSelectionByMarkers()):(this.breakMiddle(b,!1,c),this.restoreSelectionByMarkers())}else this.enterInMainElement(b)},a.Editable.prototype.breakEnd=function(b,c){if(void 0===c&&(c=!1),"BLOCKQUOTE"==b.tagName){var d=a(b).contents();d.length&&"BR"==d[d.length-1].tagName&&a(d[d.length-1]).remove()}var e=a(b).find("break").get(0),f=this.br;this.options.paragraphy||(f="<br/>");var g=this.markers_html+f;for(c&&(g=this.markers_html+a.Editable.INVISIBLE_SPACE);e!=b;)"A"!=e.tagName&&"BREAK"!=e.tagName&&(g="<"+e.tagName+this.attrs(e)+">"+g+"</"+e.tagName+">"),e=e.parentNode;return c&&"A"!=e.tagName&&"BREAK"!=e.tagName&&(g="<"+e.tagName+this.attrs(e)+">"+g+"</"+e.tagName+">"),this.options.paragraphy&&(g="<"+this.options.defaultTag+">"+g+"</"+this.options.defaultTag+">"),c&&(g=f+g),g},a.Editable.prototype.breakMiddle=function(b,c,d){void 0===c&&(c=!1),void 0===d&&(d=!1);var e=a(b).find("break").get(0),f=this.markers_html;d&&(f="");for(var g="";e!=b;)e=e.parentNode,g=g+"</"+e.tagName+">",f="<"+e.tagName+this.attrs(e)+">"+f;var h="";d&&(h=this.options.paragraphy?"<"+this.options.defaultTag+">"+this.markers_html+"<br/></"+this.options.defaultTag+">":this.markers_html+"<br/>");var i="<"+b.tagName+this.attrs(b)+">"+a(b).html()+"</"+b.tagName+">";i=i.replace(/<break><\/break>/,g+(c?this.br:"")+h+f),a(b).replaceWith(i)}}(jQuery),function(a){a.Editable.prototype.isFirstSibling=function(a){var b=a.previousSibling;return b?3==b.nodeType&&""===b.textContent?this.isFirstSibling(b):!1:!0},a.Editable.prototype.isLastSibling=function(a){var b=a.nextSibling;return b?3==b.nodeType&&""===b.textContent?this.isLastSibling(b):!1:!0},a.Editable.prototype.getDeepParent=function(a){return a.parentNode==this.$element.get(0)?a:this.getDeepParent(a.parentNode)},a.Editable.prototype.attrs=function(a){for(var b="",c=a.attributes,d=0;d<c.length;d++){var e=c[d];b+=" "+e.nodeName+'="'+e.value+'"'}return b}}(jQuery),function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a,b){function c(a){function b(){d?(c(),M(b),e=!0,d=!1):e=!1}var c=a,d=!1,e=!1;this.kick=function(){d=!0,e||b()},this.end=function(a){var b=c;a&&(e?(c=d?function(){b(),a()}:a,d=!0):a())}}function d(){return!0}function e(){return!1}function f(a){a.preventDefault()}function g(a){N[a.target.tagName.toLowerCase()]||a.preventDefault()}function h(a){return 1===a.which&&!a.ctrlKey&&!a.altKey}function i(a,b){var c,d;if(a.identifiedTouch)return a.identifiedTouch(b);for(c=-1,d=a.length;++c<d;)if(a[c].identifier===b)return a[c]}function j(a,b){var c=i(a.changedTouches,b.identifier);if(c&&(c.pageX!==b.pageX||c.pageY!==b.pageY))return c}function k(a){var b;h(a)&&(b={target:a.target,startX:a.pageX,startY:a.pageY,timeStamp:a.timeStamp},J(document,O.move,l,b),J(document,O.cancel,m,b))}function l(a){var b=a.data;s(a,b,a,n)}function m(){n()}function n(){K(document,O.move,l),K(document,O.cancel,m)}function o(a){var b,c;N[a.target.tagName.toLowerCase()]||(b=a.changedTouches[0],c={target:b.target,startX:b.pageX,startY:b.pageY,timeStamp:a.timeStamp,identifier:b.identifier},J(document,P.move+"."+b.identifier,p,c),J(document,P.cancel+"."+b.identifier,q,c))}function p(a){var b=a.data,c=j(a,b);c&&s(a,b,c,r)}function q(a){var b=a.data,c=i(a.changedTouches,b.identifier);c&&r(b.identifier)}function r(a){K(document,"."+a,p),K(document,"."+a,q)}function s(a,b,c,d){var e=c.pageX-b.startX,f=c.pageY-b.startY;I*I>e*e+f*f||v(a,b,c,e,f,d)}function t(){return this._handled=d,!1}function u(a){try{a._handled()}catch(b){return!1}}function v(a,b,c,d,e,f){{var g,h;b.target}g=a.targetTouches,h=a.timeStamp-b.timeStamp,b.type="movestart",b.distX=d,b.distY=e,b.deltaX=d,b.deltaY=e,b.pageX=c.pageX,b.pageY=c.pageY,b.velocityX=d/h,b.velocityY=e/h,b.targetTouches=g,b.finger=g?g.length:1,b._handled=t,b._preventTouchmoveDefault=function(){a.preventDefault()},L(b.target,b),f(b.identifier)}function w(a){var b=a.data.timer;a.data.touch=a,a.data.timeStamp=a.timeStamp,b.kick()}function x(a){var b=a.data.event,c=a.data.timer;y(),D(b,c,function(){setTimeout(function(){K(b.target,"click",e)},0)})}function y(){K(document,O.move,w),K(document,O.end,x)}function z(a){var b=a.data.event,c=a.data.timer,d=j(a,b);d&&(a.preventDefault(),b.targetTouches=a.targetTouches,a.data.touch=d,a.data.timeStamp=a.timeStamp,c.kick())}function A(a){var b=a.data.event,c=a.data.timer,d=i(a.changedTouches,b.identifier);d&&(B(b),D(b,c))}function B(a){K(document,"."+a.identifier,z),K(document,"."+a.identifier,A)}function C(a,b,c){var d=c-a.timeStamp;a.type="move",a.distX=b.pageX-a.startX,a.distY=b.pageY-a.startY,a.deltaX=b.pageX-a.pageX,a.deltaY=b.pageY-a.pageY,a.velocityX=.3*a.velocityX+.7*a.deltaX/d,a.velocityY=.3*a.velocityY+.7*a.deltaY/d,a.pageX=b.pageX,a.pageY=b.pageY}function D(a,b,c){b.end(function(){return a.type="moveend",L(a.target,a),c&&c()})}function E(){return J(this,"movestart.move",u),!0}function F(){return K(this,"dragstart drag",f),K(this,"mousedown touchstart",g),K(this,"movestart",u),!0}function G(a){"move"!==a.namespace&&"moveend"!==a.namespace&&(J(this,"dragstart."+a.guid+" drag."+a.guid,f,b,a.selector),J(this,"mousedown."+a.guid,g,b,a.selector))}function H(a){"move"!==a.namespace&&"moveend"!==a.namespace&&(K(this,"dragstart."+a.guid+" drag."+a.guid),K(this,"mousedown."+a.guid))}var I=6,J=a.event.add,K=a.event.remove,L=function(b,c,d){a.event.trigger(c,d,b)},M=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){return window.setTimeout(function(){a()},25)}}(),N={textarea:!0,input:!0,select:!0,button:!0},O={move:"mousemove",cancel:"mouseup dragstart",end:"mouseup"},P={move:"touchmove",cancel:"touchend",end:"touchend"};a.event.special.movestart={setup:E,teardown:F,add:G,remove:H,_default:function(a){function d(){C(f,g.touch,g.timeStamp),L(a.target,f)}var f,g;a._handled()&&(f={target:a.target,startX:a.startX,startY:a.startY,pageX:a.pageX,pageY:a.pageY,distX:a.distX,distY:a.distY,deltaX:a.deltaX,deltaY:a.deltaY,velocityX:a.velocityX,velocityY:a.velocityY,timeStamp:a.timeStamp,identifier:a.identifier,targetTouches:a.targetTouches,finger:a.finger},g={event:f,timer:new c(d),touch:b,timeStamp:b},a.identifier===b?(J(a.target,"click",e),J(document,O.move,w,g),J(document,O.end,x,g)):(a._preventTouchmoveDefault(),J(document,P.move+"."+a.identifier,z,g),J(document,P.end+"."+a.identifier,A,g)))}},a.event.special.move={setup:function(){J(this,"movestart.move",a.noop)},teardown:function(){K(this,"movestart.move",a.noop)}},a.event.special.moveend={setup:function(){J(this,"movestart.moveend",a.noop)},teardown:function(){K(this,"movestart.moveend",a.noop)}},J(document,"mousedown.move",k),J(document,"touchstart.move",o),"function"==typeof Array.prototype.indexOf&&!function(a){for(var b=["changedTouches","targetTouches"],c=b.length;c--;)-1===a.event.props.indexOf(b[c])&&a.event.props.push(b[c])}(a)}),window.WYSIWYGModernizr=function(a,b,c){function d(a){n.cssText=a}function e(a,b){return typeof a===b}var f,g,h,i="2.7.1",j={},k=b.documentElement,l="modernizr",m=b.createElement(l),n=m.style,o=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),p={},q=[],r=q.slice,s=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:l+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',l,'">',a,"</style>"].join(""),j.id=l,(m?j:n).innerHTML+=f,n.appendChild(j),m||(n.style.background="",n.style.overflow="hidden",i=k.style.overflow,k.style.overflow="hidden",k.appendChild(n)),g=c(j,a),m?j.parentNode.removeChild(j):(n.parentNode.removeChild(n),k.style.overflow=i),!!g},t=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return s("@media "+b+" { #"+l+" { position: absolute; } }",function(b){d="absolute"==(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position}),d},u={}.hasOwnProperty;h=e(u,"undefined")||e(u.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return u.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=r.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(r.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(r.call(arguments)))};return d}),p.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:s(["@media (",o.join("touch-enabled),("),l,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c};for(var v in p)h(p,v)&&(g=v.toLowerCase(),j[g]=p[v](),q.push((j[g]?"":"no-")+g));return j.addTest=function(a,b){if("object"==typeof a)for(var d in a)h(a,d)&&j.addTest(d,a[d]);else{if(a=a.toLowerCase(),j[a]!==c)return j;b="function"==typeof b?b():b,"undefined"!=typeof enableClasses&&enableClasses&&(k.className+=" "+(b?"":"no-")+a),j[a]=b}return j},d(""),m=f=null,j._version=i,j._prefixes=o,j.mq=t,j.testStyles=s,j}(this,this.document),!function(a){a.Editable.prototype.coreInit=function(){var a=this,b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=function(a){for(var b=a.toString(),c=0,d=0;d<b.length;d++)c+=parseInt(b.charAt(d),10);return c>10?c%9+1:c};if(a.options.key!==!1){var d=function(a,b,c){for(var d=Math.abs(c);d-->0;)a-=b;return 0>c&&(a+=123),a},e=function(a){return a},f=function(a){if(!a)return a;for(var f="",g=e("charCodeAt"),h=e("fromCharCode"),i=b.indexOf(a[0]),j=1;j<a.length-2;j++){for(var k=c(++i),l=a[g](j),m="";/[0-9-]/.test(a[j+1]);)m+=a[++j];m=parseInt(m,10)||0,l=d(l,k,m),l^=i-1&31,f+=String[h](l)}return f},g=e(f),h=function(a){return"none"==a.css("display")?(a.attr("style",a.attr("style")+g("zD4D2qJ-7dhuB-11bB4E1wqlhlfE4gjhkbB6C5eg1C-8h1besB-16e1==")),!0):!1},i=function(){for(var a=0,b=document.domain,c=b.split("."),d="_gd"+(new Date).getTime();a<c.length-1&&-1==document.cookie.indexOf(d+"="+d);)b=c.slice(-1-++a).join("."),document.cookie=d+"="+d+";domain="+b+";";return document.cookie=d+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+b+";",b}(),j=function(){var b=g(a.options.key)||"";return b!==g("eQZMe1NJGC1HTMVANU==")&&b.indexOf(i,b.length-i.length)<0&&[g("9qqG-7amjlwq=="),g("KA3B3C2A6D1D5H5H1A3==")].indexOf(i)<0?(a.$box.append(g("uA5kygD3g1h1lzrA7E2jtotjvooB2A5eguhdC-22C-16nC2B3lh1deA-21C-16B4A2B4gi1F4D1wyA-13jA4H5C2rA-65A1C10dhzmoyJ2A10A-21d1B-13xvC2I4enC4C2B5B4G4G4H1H4A10aA8jqacD1C3c1B-16D-13A-13B2E5A4jtxfB-13fA1pewxvzA3E-11qrB4E4qwB-16icA1B3ykohde1hF4A2E4clA4C7E6haA4D1xtmolf1F-10A1H4lhkagoD5naalB-22B8B4quvB-8pjvouxB3A-9plnpA2B6D6BD2D1C2H1C3C3A4mf1G-10C-8i1G3C5B3pqB-9E5B1oyejA3ddalvdrnggE3C3bbj1jC6B3D3gugqrlD8B2DB-9qC-7qkA10D2VjiodmgynhA4HA-9D-8pI-7rD4PrE-11lvhE3B5A-16C7A6A3ekuD1==")),a.$lb=a.$box.find("> div:last"),a.$ab=a.$lb.find("> a"),h(a.$lb)||h(a.$ab)):void 0};j()}},a.Editable.initializers.push(a.Editable.prototype.coreInit)}(jQuery),function(a){a.Editable.DEFAULTS=a.extend(a.Editable.DEFAULTS,{allowedBlankTags:["TEXTAREA"],selfClosingTags:["br","input","img","hr","param","!--","source","embed","!","meta","link","base"],doNotJoinTags:["a"],iconClasses:["fa-"]}),a.Editable.prototype.isClosingTag=function(a){return a?null!==a.match(/^<\/([a-zA-Z0-9]+)([^<]+)*>$/gi):!1},a.Editable.prototype.tagName=function(a){return a.replace(/^<\/?([a-zA-Z0-9-!]+)([^>]+)*>$/gi,"$1").toLowerCase()},a.Editable.SELF_CLOSING_AFTER=["source"],a.Editable.prototype.isSelfClosingTag=function(a){var b=this.tagName(a);return this.options.selfClosingTags.indexOf(b.toLowerCase())>=0},a.Editable.prototype.tagKey=function(a){return a.type+(a.attrs||[]).sort().join("|")},a.Editable.prototype.extendedKey=function(a){return this.tagKey(a)+JSON.stringify(a.style)},a.Editable.prototype.mapDOM=function(b){var c=[],d={},e={},f=0,g=this;a(b).find(".f-marker").html(a.Editable.INVISIBLE_SPACE);var h=function(b,c){if(3===b.nodeType)return[];if(8===b.nodeType)return[{comment:!0,attrs:{},styles:{},idx:f++,sp:c,ep:c,text:b.textContent}];var d=b.tagName;"B"==d&&(d="STRONG"),"I"!=d||b.className&&null!=b.className.match(new RegExp(g.options.iconClasses.join("|"),"gi"))||(d="EM"),b.style.display="";var e={},h={},i=null;if(b.attributes)for(var j=0;j<b.attributes.length;j++){var k=b.attributes[j];"style"==k.nodeName?i=k.value:e[k.nodeName]=k.value}if(i){var l=i.match(/([^:]*):([^:;]*(;|$))/gi);if(l)for(var m=0;m<l.length;m++){var n=l[m].split(":"),o=n.slice(1).join(":").trim();";"==o[o.length-1]&&(o=o.substr(0,o.length-1)),h[n[0].trim()]=o}}var p=[];if(a.isEmptyObject(e)&&"SPAN"==b.tagName&&!a.isEmptyObject(h)){for(var q in h){var r={};r[q]=h[q],p.push({selfClosing:!1,attrs:e,styles:r,idx:f++,sp:c,ep:c+b.textContent.length,tagName:d,noJoin:b.nextSibling&&"BR"===b.nextSibling.tagName})}return p}return[{selfClosing:g.options.selfClosingTags.indexOf(d.toLowerCase())>=0,attrs:e,styles:h,idx:f++,sp:c,ep:c+b.textContent.length,tagName:d,noJoin:b.nextSibling&&"BR"===b.nextSibling.tagName}]},i=function(a,g){var j,k,l;if(a!=b)for(k=h(a,g),j=0;j<k.length;j++)l=k[j],c.push(l),d[l.sp]||(d[l.sp]={}),e[l.ep]||(e[l.ep]={}),d[l.sp][l.tagName]||(d[l.sp][l.tagName]=[]),e[l.ep][l.tagName]||(e[l.ep][l.tagName]=[]),d[l.sp][l.tagName].push(l),e[l.ep][l.tagName].push(l);var m=a.childNodes;if(m){for(j=0;j<m.length;j++)j>0&&8!=m[j-1].nodeType&&(g+=m[j-1].textContent.length),i(m[j],g);if(k)for(j=0;j<k.length;j++)l=k[j],l.ci=f++,d[l.ep]||(d[l.ep]={}),d[l.ep][l.tagName]||(d[l.ep][l.tagName]=[]),d[l.ep][l.tagName].push({shadow:!0,ci:f-1})}},j=function(){var b,e,f,h;for(b in d)for(var i in d[b])for(f=0;f<d[b][i].length;f++)if(e=d[b][i][f],!e.selfClosing&&!(e.dirty||e.shadow||e.comment||e.noJoin))for(var j=f+1;j<d[b][i].length;j++)if(h=d[b][i][j],!h.selfClosing&&!(h.dirty||h.shadow||h.comment||h.noJoin||1!=Object.keys(e.styles).length||1!=Object.keys(h.styles).length||h.sp==h.ep)){var k=Object.keys(e.styles)[0];if(h.styles[k]){e.sp=h.ep;for(var l=0;l<d[e.sp][e.tagName].length;l++){var m=d[e.sp][e.tagName][l];if(m.shadow&&m.ci==h.ci){d[e.sp][e.tagName].splice(l,0,e);break}}d[b][i].splice(f,1),f--;break}}for(b=0;b<c.length;b++)if(e=c[b],!(e.dirty||e.selfClosing||e.comment||e.noJoin||e.shadow||g.options.doNotJoinTags.indexOf(e.tagName.toLowerCase())>=0||!a.isEmptyObject(e.attrs)))if(e.sp==e.ep&&a.isEmptyObject(e.attrs)&&a.isEmptyObject(e.styles)&&g.options.allowedBlankTags.indexOf(e.tagName)<0)e.dirty=!0;else if(d[e.ep]&&d[e.ep][e.tagName])for(f=0;f<d[e.ep][e.tagName].length;f++)if(h=d[e.ep][e.tagName][f],e!=h&&!(h.dirty||h.selfClosing||h.shadow||h.comment||h.noJoin||!a.isEmptyObject(h.attrs)||JSON.stringify(h.styles)!=JSON.stringify(e.styles))){e.ep<h.ep&&(e.ep=h.ep),e.sp>h.sp&&(e.sp=h.sp),h.dirty=!0,b--;break}for(b=0;b<c.length;b++)if(e=c[b],!(e.dirty||e.selfClosing||e.comment||e.noJoin||e.shadow||!a.isEmptyObject(e.attrs)))if(e.sp==e.ep&&a.isEmptyObject(e.attrs)&&a.isEmptyObject(e.style)&&g.options.allowedBlankTags.indexOf(e.tagName)<0)e.dirty=!0;else if(d[e.sp]&&d[e.sp][e.tagName])for(f=d[e.sp][e.tagName].length-1;f>=0;f--)h=d[e.sp][e.tagName][f],e!=h&&(h.dirty||h.selfClosing||h.shadow||h.comment||h.noJoin||e.ep==h.ep&&a.isEmptyObject(h.attrs)&&(e.styles=a.extend(e.styles,h.styles),h.dirty=!0))};i(b,0),j();for(var k=c.length-1;k>=0;k--)c.dirty&&c.splice(k,1);return c},a.Editable.prototype.sortNodes=function(a,b){if(a.comment)return 1;if(a.selfClosing||b.selfClosing)return a.idx-b.idx;var c=a.ep-a.sp,d=b.ep-b.sp;return 0===c&&0===d?a.idx-b.idx:c===d?b.ci-a.ci:d-c},a.Editable.prototype.openTag=function(a){var b,c="<"+a.tagName.toLowerCase(),d=Object.keys(a.attrs).sort();for(b=0;b<d.length;b++){var e=d[b];c+=" "+e+'="'+a.attrs[e]+'"'}var f="",g=Object.keys(a.styles).sort();for(b=0;b<g.length;b++){var h=g[b];null!=a.styles[h]&&(f+=h.replace("_","-")+": "+a.styles[h]+"; ")}return""!==f&&(c+=' style="'+f.trim()+'"'),c+=">"},a.Editable.prototype.commentTag=function(a){var b="";if(a.selfClosing){var c;b="<"+a.tagName.toLowerCase();var d=Object.keys(a.attrs).sort();for(c=0;c<d.length;c++){var e=d[c];b+=" "+e+'="'+a.attrs[e]+'"'}var f="",g=Object.keys(a.styles).sort();for(c=0;c<g.length;c++){var h=g[c];null!=a.styles[h]&&(f+=h.replace("_","-")+": "+a.styles[h]+"; ")}""!==f&&(b+=' style="'+f.trim()+'"'),b+="/>"}else a.comment&&(b="<!--"+a.text+"-->");return b},a.Editable.prototype.closeTag=function(a){return"</"+a.tagName.toLowerCase()+">"},a.Editable.prototype.nodesOpenedAt=function(a,b){for(var c=[],d=a.length-1;d>=0&&a[d].sp==b;)c.push(a.pop()),d--;return c},a.Editable.prototype.entity=function(a){return ch_map={">":"&gt;","<":"&lt;","&":"&amp;"},ch_map[a]?ch_map[a]:a},a.Editable.prototype.removeInvisibleWhitespace=function(a){for(var b=0;b<a.childNodes.length;b++){var c=a.childNodes[b];c.childNodes.length?this.removeInvisibleWhitespace(c):c.textContent=c.textContent.replace(/\u200B/gi,"")}},a.Editable.prototype.cleanOutput=function(b,c){var d,e,f,g;c&&this.removeInvisibleWhitespace(b);var h=this.mapDOM(b,c).sort(function(a,b){return b.sp-a.sp}),i=b.textContent;html="";var j=[],k=-1,l=a.proxy(function(){var b="";for(simple_nodes_to_close=[],j=j.sort(function(a,b){return a.idx-b.idx}).reverse();j.length;){for(var c=j.pop();simple_nodes_to_close.length&&simple_nodes_to_close[simple_nodes_to_close.length-1].ci<c.ci;)b+=this.closeTag(simple_nodes_to_close.pop());c.selfClosing||c.comment?b+=this.commentTag(c):(!a.isEmptyObject(c.attrs)||this.options.allowedBlankTags.indexOf(c.tagName)>=0)&&(b+=this.openTag(c),simple_nodes_to_close.push(c))}for(;simple_nodes_to_close.length;)b+=this.closeTag(simple_nodes_to_close.pop());html+=b},this),m={},n=[];for(d=0;d<=i.length;d++){if(m[d])for(e=m[d].length-1;e>=0;e--)if(n.length&&n[n.length-1].tagName==m[d][e].tagName&&JSON.stringify(n[n.length-1].styles)==JSON.stringify(m[d][e].styles))html+=this.closeTag(m[d][e]),n.pop();else{for(var o=[];n.length&&(n[n.length-1].tagName!==m[d][e].tagName||JSON.stringify(n[n.length-1].styles)!==JSON.stringify(m[d][e].styles));)g=n.pop(),html+=this.closeTag(g),o.push(g);for(html+=this.closeTag(m[d][e]),n.pop();o.length;){var p=o.pop();html+=this.openTag(p),n.push(p)}}for(var q=this.nodesOpenedAt(h,d).sort(this.sortNodes).reverse();q.length;){var r=q.pop();if(!r.dirty)if(r.selfClosing||r.comment)r.ci>k||"BR"==r.tagName?(l(),html+=this.commentTag(r),k=r.ci):j.length?(j.push(r),k<r.ci&&(k=r.ci)):(html+=this.commentTag(r),k<r.ci&&(k=r.ci));else if(r.ep>r.sp){r.ci>k&&l();var s=[];if("A"==r.tagName)for(var t=r.sp+1;t<r.ep;t++)if(m[t]&&m[t].length)for(f=0;f<m[t].length;f++)s.push(m[t][f]),html+=this.closeTag(m[t][f]),n.pop();var u=[];if("SPAN"==r.tagName&&("#123456"==r.styles["background-color"]||"#123456"===a.Editable.RGBToHex(r.styles["background-color"])||"#123456"==r.styles.color||"#123456"===a.Editable.RGBToHex(r.styles.color)))for(;n.length;){var v=n.pop();html+=this.closeTag(v),u.push(v)}for(html+=this.openTag(r),k<r.ci&&(k=r.ci),n.push(r),m[r.ep]||(m[r.ep]=[]),m[r.ep].push(r);s.length;)r=s.pop(),html+=this.openTag(r),n.push(r);for(;u.length;)r=u.pop(),html+=this.openTag(r),n.push(r)}else r.sp==r.ep&&(j.push(r),k<r.ci&&(k=r.ci))}l(),d!=i.length&&(html+=this.entity(i[d]))}return html=html.replace(/(<span[^>]*? class\s*=\s*["']?f-marker["']?[^>]+>)\u200B(<\/span>)/gi,"$1$2"),html},a.Editable.prototype.wrapDirectContent=function(){var b=a.merge(["UL","OL","TABLE"],this.valid_nodes);if(!this.options.paragraphy)for(var c=null,d=this.$element.contents(),e=0;e<d.length;e++)1!=d[e].nodeType||b.indexOf(d[e].tagName)<0?(c||(c=a('<div class="fr-wrap">'),a(d[e]).before(c)),c.append(d[e])):c=null},a.Editable.prototype.cleanify=function(b,c,d){if(this.browser.msie&&a.Editable.getIEversion()<9)return!1;var e;if(this.isHTML)return!1;void 0===b&&(b=!0),void 0===d&&(d=!0),this.no_verify=!0,this.$element.find("span").removeAttr("data-fr-verified"),d&&this.saveSelectionByMarkers(),b?e=this.getSelectionElements():(this.wrapDirectContent(),e=this.$element.find(this.valid_nodes.join(",")),0===e.length&&(e=[this.$element.get(0)]));var f,g;if(e[0]!=this.$element.get(0))for(var h=0;h<e.length;h++){var i=a(e[h]);0===i.find(this.valid_nodes.join(",")).length&&(f=i.html(),g=this.cleanOutput(i.get(0),c),g!==f&&i.html(g))}else 0===this.$element.find(this.valid_nodes.join(",")).length&&(f=this.$element.html(),g=this.cleanOutput(this.$element.get(0),c),g!==f&&this.$element.html(g));this.$element.find("[data-fr-idx]").removeAttr("data-fr-idx"),this.$element.find(".fr-wrap").each(function(){a(this).replaceWith(a(this).html())}),this.$element.find(".f-marker").html(""),d&&this.restoreSelectionByMarkers(),this.$element.find("span").attr("data-fr-verified",!0),this.no_verify=!1}}(jQuery);
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.8.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not(form button), button[data-confirm]:not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[type=file]',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // making sure that all forms have actual up-to-date token(cached forms contain old one)
    refreshCSRFTokens: function(){
      var csrfToken = $('meta[name=csrf-token]').attr('content');
      var csrfParam = $('meta[name=csrf-param]').attr('content');
      $('form input[name="' + csrfParam + '"]').val(csrfToken);
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element[0].href;
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: rails.isCrossDomain(url)
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Determines if the request is a cross domain request.
    isCrossDomain: function(url) {
      var originAnchor = document.createElement("a");
      originAnchor.href = location.href;
      var urlAnchor = document.createElement("a");

      try {
        urlAnchor.href = url;
        // This is a workaround to a IE bug.
        urlAnchor.href = urlAnchor.href;

        // Make sure that the browser parses the URL and that the protocols and hosts match.
        return !urlAnchor.protocol || !urlAnchor.host ||
          (originAnchor.protocol + "//" + originAnchor.host !==
            urlAnchor.protocol + "//" + urlAnchor.host);
      } catch (e) {
        // If there is an error parsing the URL, assume it is crossDomain.
        return true;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = $('meta[name=csrf-token]').attr('content'),
        csrfParam = $('meta[name=csrf-param]').attr('content'),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined && !rails.isCrossDomain(href)) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      element.data('ujs:enable-with', element[method]());
      if (replacement !== undefined) {
        element[method](replacement);
      }

      element.prop('disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
      element.prop('disabled', false);
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input, valueToCheck,
          selector = specifiedSelector || 'input,textarea',
          allInputs = form.find(selector);

      allInputs.each(function() {
        input = $(this);
        valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : input.val();
        // If nonBlank and valueToCheck are both truthy, or nonBlank and valueToCheck are both falsey
        if (!valueToCheck === !nonBlank) {

          // Don't count unchecked required radio if other radio with same name is checked
          if (input.is('input[type=radio]') && allInputs.filter('input[type=radio]:checked[name="' + input.attr('name') + '"]').length) {
            return true; // Skip to next input
          }

          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      element.data('ujs:enable-with', element.html()); // store enabled state
      if (replacement !== undefined) {
        element.html(replacement);
      }

      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
    },

    // restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    $document.delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($(this));
    });

    $document.delegate(rails.buttonDisableSelector, 'ajax:complete', function() {
        rails.enableFormElement($(this));
    });

    $document.delegate(rails.linkClickSelector, 'click.rails', function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (link.data('remote') !== undefined) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.error( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (link.data('method')) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.delegate(rails.buttonClickSelector, 'click.rails', function(e) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.error( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.delegate(rails.inputChangeSelector, 'change.rails', function(e) {
      var link = $(this);
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
      var form = $(this),
        remote = form.data('remote') !== undefined,
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') == undefined) {
        blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector);
        if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
          return rails.stopEverything(e);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.delegate(rails.formInputClickSelector, 'click.rails', function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      button.closest('form').data('ujs:submit-button', data);
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:send.rails', function(event) {
      if (this == event.target) rails.disableFormElements($(this));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
      if (this == event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
/*! iCheck v1.0.2 by Damir Sultanov, http://git.io/arlzeA, MIT Licensed */

(function(f){function A(a,b,d){var c=a[0],g=/er/.test(d)?_indeterminate:/bl/.test(d)?n:k,e=d==_update?{checked:c[k],disabled:c[n],indeterminate:"true"==a.attr(_indeterminate)||"false"==a.attr(_determinate)}:c[g];if(/^(ch|di|in)/.test(d)&&!e)x(a,g);else if(/^(un|en|de)/.test(d)&&e)q(a,g);else if(d==_update)for(var f in e)e[f]?x(a,f,!0):q(a,f,!0);else if(!b||"toggle"==d){if(!b)a[_callback]("ifClicked");e?c[_type]!==r&&q(a,g):x(a,g)}}function x(a,b,d){var c=a[0],g=a.parent(),e=b==k,u=b==_indeterminate,
v=b==n,s=u?_determinate:e?y:"enabled",F=l(a,s+t(c[_type])),B=l(a,b+t(c[_type]));if(!0!==c[b]){if(!d&&b==k&&c[_type]==r&&c.name){var w=a.closest("form"),p='input[name="'+c.name+'"]',p=w.length?w.find(p):f(p);p.each(function(){this!==c&&f(this).data(m)&&q(f(this),b)})}u?(c[b]=!0,c[k]&&q(a,k,"force")):(d||(c[b]=!0),e&&c[_indeterminate]&&q(a,_indeterminate,!1));D(a,e,b,d)}c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"default");g[_add](B||l(a,b)||"");g.attr("role")&&!u&&g.attr("aria-"+(v?n:k),"true");
g[_remove](F||l(a,s)||"")}function q(a,b,d){var c=a[0],g=a.parent(),e=b==k,f=b==_indeterminate,m=b==n,s=f?_determinate:e?y:"enabled",q=l(a,s+t(c[_type])),r=l(a,b+t(c[_type]));if(!1!==c[b]){if(f||!d||"force"==d)c[b]=!1;D(a,e,s,d)}!c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"pointer");g[_remove](r||l(a,b)||"");g.attr("role")&&!f&&g.attr("aria-"+(m?n:k),"false");g[_add](q||l(a,s)||"")}function E(a,b){if(a.data(m)){a.parent().html(a.attr("style",a.data(m).s||""));if(b)a[_callback](b);a.off(".i").unwrap();
f(_label+'[for="'+a[0].id+'"]').add(a.closest(_label)).off(".i")}}function l(a,b,f){if(a.data(m))return a.data(m).o[b+(f?"":"Class")]}function t(a){return a.charAt(0).toUpperCase()+a.slice(1)}function D(a,b,f,c){if(!c){if(b)a[_callback]("ifToggled");a[_callback]("ifChanged")[_callback]("if"+t(f))}}var m="iCheck",C=m+"-helper",r="radio",k="checked",y="un"+k,n="disabled";_determinate="determinate";_indeterminate="in"+_determinate;_update="update";_type="type";_click="click";_touch="touchbegin.i touchend.i";
_add="addClass";_remove="removeClass";_callback="trigger";_label="label";_cursor="cursor";_mobile=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);f.fn[m]=function(a,b){var d='input[type="checkbox"], input[type="'+r+'"]',c=f(),g=function(a){a.each(function(){var a=f(this);c=a.is(d)?c.add(a):c.add(a.find(d))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),g(this),c.each(function(){var c=
f(this);"destroy"==a?E(c,"ifDestroyed"):A(c,!0,a);f.isFunction(b)&&b()});if("object"!=typeof a&&a)return this;var e=f.extend({checkedClass:k,disabledClass:n,indeterminateClass:_indeterminate,labelHover:!0},a),l=e.handle,v=e.hoverClass||"hover",s=e.focusClass||"focus",t=e.activeClass||"active",B=!!e.labelHover,w=e.labelHoverClass||"hover",p=(""+e.increaseArea).replace("%","")|0;if("checkbox"==l||l==r)d='input[type="'+l+'"]';-50>p&&(p=-50);g(this);return c.each(function(){var a=f(this);E(a);var c=this,
b=c.id,g=-p+"%",d=100+2*p+"%",d={position:"absolute",top:g,left:g,display:"block",width:d,height:d,margin:0,padding:0,background:"#fff",border:0,opacity:0},g=_mobile?{position:"absolute",visibility:"hidden"}:p?d:{position:"absolute",opacity:0},l="checkbox"==c[_type]?e.checkboxClass||"icheckbox":e.radioClass||"i"+r,z=f(_label+'[for="'+b+'"]').add(a.closest(_label)),u=!!e.aria,y=m+"-"+Math.random().toString(36).substr(2,6),h='<div class="'+l+'" '+(u?'role="'+c[_type]+'" ':"");u&&z.each(function(){h+=
'aria-labelledby="';this.id?h+=this.id:(this.id=y,h+=y);h+='"'});h=a.wrap(h+"/>")[_callback]("ifCreated").parent().append(e.insert);d=f('<ins class="'+C+'"/>').css(d).appendTo(h);a.data(m,{o:e,s:a.attr("style")}).css(g);e.inheritClass&&h[_add](c.className||"");e.inheritID&&b&&h.attr("id",m+"-"+b);"static"==h.css("position")&&h.css("position","relative");A(a,!0,_update);if(z.length)z.on(_click+".i mouseover.i mouseout.i "+_touch,function(b){var d=b[_type],e=f(this);if(!c[n]){if(d==_click){if(f(b.target).is("a"))return;
A(a,!1,!0)}else B&&(/ut|nd/.test(d)?(h[_remove](v),e[_remove](w)):(h[_add](v),e[_add](w)));if(_mobile)b.stopPropagation();else return!1}});a.on(_click+".i focus.i blur.i keyup.i keydown.i keypress.i",function(b){var d=b[_type];b=b.keyCode;if(d==_click)return!1;if("keydown"==d&&32==b)return c[_type]==r&&c[k]||(c[k]?q(a,k):x(a,k)),!1;if("keyup"==d&&c[_type]==r)!c[k]&&x(a,k);else if(/us|ur/.test(d))h["blur"==d?_remove:_add](s)});d.on(_click+" mousedown mouseup mouseover mouseout "+_touch,function(b){var d=
b[_type],e=/wn|up/.test(d)?t:v;if(!c[n]){if(d==_click)A(a,!1,!0);else{if(/wn|er|in/.test(d))h[_add](e);else h[_remove](e+" "+t);if(z.length&&B&&e==v)z[/ut|nd/.test(d)?_remove:_add](w)}if(_mobile)b.stopPropagation();else return!1}})})}})(window.jQuery||window.Zepto);
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

var ua = navigator.userAgent,
	iPhone = /iphone/i.test(ua),
	chrome = /chrome/i.test(ua),
	android = /android/i.test(ua),
	caretTimeoutId;

$.mask = {
	//Predefined character definitions
	definitions: {
		'9': "[0-9]",
		'a': "[A-Za-z]",
		'*': "[A-Za-z0-9]"
	},
	autoclear: true,
	dataName: "rawMaskFn",
	placeholder: '_'
};

$.fn.extend({
	//Helper Function for Caret positioning
	caret: function(begin, end) {
		var range;

		if (this.length === 0 || this.is(":hidden")) {
			return;
		}

		if (typeof begin == 'number') {
			end = (typeof end === 'number') ? end : begin;
			return this.each(function() {
				if (this.setSelectionRange) {
					this.setSelectionRange(begin, end);
				} else if (this.createTextRange) {
					range = this.createTextRange();
					range.collapse(true);
					range.moveEnd('character', end);
					range.moveStart('character', begin);
					range.select();
				}
			});
		} else {
			if (this[0].setSelectionRange) {
				begin = this[0].selectionStart;
				end = this[0].selectionEnd;
			} else if (document.selection && document.selection.createRange) {
				range = document.selection.createRange();
				begin = 0 - range.duplicate().moveStart('character', -100000);
				end = begin + range.text.length;
			}
			return { begin: begin, end: end };
		}
	},
	unmask: function() {
		return this.trigger("unmask");
	},
	mask: function(mask, settings) {
		var input,
			defs,
			tests,
			partialPosition,
			firstNonMaskPos,
            lastRequiredNonMaskPos,
            len,
            oldVal;

		if (!mask && this.length > 0) {
			input = $(this[0]);
            var fn = input.data($.mask.dataName)
			return fn?fn():undefined;
		}

		settings = $.extend({
			autoclear: $.mask.autoclear,
			placeholder: $.mask.placeholder, // Load default placeholder
			completed: null
		}, settings);


		defs = $.mask.definitions;
		tests = [];
		partialPosition = len = mask.length;
		firstNonMaskPos = null;

		$.each(mask.split(""), function(i, c) {
			if (c == '?') {
				len--;
				partialPosition = i;
			} else if (defs[c]) {
				tests.push(new RegExp(defs[c]));
				if (firstNonMaskPos === null) {
					firstNonMaskPos = tests.length - 1;
				}
                if(i < partialPosition){
                    lastRequiredNonMaskPos = tests.length - 1;
                }
			} else {
				tests.push(null);
			}
		});

		return this.trigger("unmask").each(function() {
			var input = $(this),
				buffer = $.map(
    				mask.split(""),
    				function(c, i) {
    					if (c != '?') {
    						return defs[c] ? getPlaceholder(i) : c;
    					}
    				}),
				defaultBuffer = buffer.join(''),
				focusText = input.val();

            function tryFireCompleted(){
                if (!settings.completed) {
                    return;
                }

                for (var i = firstNonMaskPos; i <= lastRequiredNonMaskPos; i++) {
                    if (tests[i] && buffer[i] === getPlaceholder(i)) {
                        return;
                    }
                }
                settings.completed.call(input);
            }

            function getPlaceholder(i){
                if(i < settings.placeholder.length)
                    return settings.placeholder.charAt(i);
                return settings.placeholder.charAt(0);
            }

			function seekNext(pos) {
				while (++pos < len && !tests[pos]);
				return pos;
			}

			function seekPrev(pos) {
				while (--pos >= 0 && !tests[pos]);
				return pos;
			}

			function shiftL(begin,end) {
				var i,
					j;

				if (begin<0) {
					return;
				}

				for (i = begin, j = seekNext(end); i < len; i++) {
					if (tests[i]) {
						if (j < len && tests[i].test(buffer[j])) {
							buffer[i] = buffer[j];
							buffer[j] = getPlaceholder(j);
						} else {
							break;
						}

						j = seekNext(j);
					}
				}
				writeBuffer();
				input.caret(Math.max(firstNonMaskPos, begin));
			}

			function shiftR(pos) {
				var i,
					c,
					j,
					t;

				for (i = pos, c = getPlaceholder(pos); i < len; i++) {
					if (tests[i]) {
						j = seekNext(i);
						t = buffer[i];
						buffer[i] = c;
						if (j < len && tests[j].test(t)) {
							c = t;
						} else {
							break;
						}
					}
				}
			}

            function androidInputEvent(e) {
                var curVal = input.val();
                var pos = input.caret();
                if (curVal.length < oldVal.length) {
                    // a deletion or backspace happened
                    checkVal(true);
                    while (pos.begin > 0 && !tests[pos.begin-1])
                          pos.begin--;
                    if (pos.begin === 0)
                    {
                       while (pos.begin < firstNonMaskPos && !tests[pos.begin])
                          pos.begin++;
                    }
                    input.caret(pos.begin,pos.begin);
                } else {
                    var pos2 = checkVal(true);
                    while (pos.begin < len && !tests[pos.begin])
                          pos.begin++;

                    input.caret(pos.begin,pos.begin);
                }

                tryFireCompleted();
            }

            function blurEvent(e) {
                checkVal();

                if (input.val() != focusText)
                    input.change();
            }

			function keydownEvent(e) {
                if (input.prop("readonly")){
                    return;
                }

				var k = e.which || e.keyCode,
					pos,
					begin,
					end;
                    oldVal = input.val();
				//backspace, delete, and escape get special treatment
				if (k === 8 || k === 46 || (iPhone && k === 127)) {
					pos = input.caret();
					begin = pos.begin;
					end = pos.end;

					if (end - begin === 0) {
						begin=k!==46?seekPrev(begin):(end=seekNext(begin-1));
						end=k===46?seekNext(end):end;
					}
					clearBuffer(begin, end);
					shiftL(begin, end - 1);

					e.preventDefault();
				} else if( k === 13 ) { // enter
					blurEvent.call(this, e);
				} else if (k === 27) { // escape
					input.val(focusText);
					input.caret(0, checkVal());
					e.preventDefault();
				}
			}

			function keypressEvent(e) {
                if (input.prop("readonly")){
                    return;
                }

				var k = e.which || e.keyCode,
					pos = input.caret(),
					p,
					c,
					next;

				if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {//Ignore
					return;
				} else if ( k && k !== 13 ) {
					if (pos.end - pos.begin !== 0){
						clearBuffer(pos.begin, pos.end);
						shiftL(pos.begin, pos.end-1);
					}

					p = seekNext(pos.begin - 1);
					if (p < len) {
						c = String.fromCharCode(k);
						if (tests[p].test(c)) {
							shiftR(p);

							buffer[p] = c;
							writeBuffer();
							next = seekNext(p);

							if(android){
								//Path for CSP Violation on FireFox OS 1.1
								var proxy = function() {
									$.proxy($.fn.caret,input,next)();
								};

								setTimeout(proxy,0);
							}else{
								input.caret(next);
							}
                            if(pos.begin <= lastRequiredNonMaskPos){
		                         tryFireCompleted();
                             }
						}
					}
					e.preventDefault();
				}
			}

			function clearBuffer(start, end) {
				var i;
				for (i = start; i < end && i < len; i++) {
					if (tests[i]) {
						buffer[i] = getPlaceholder(i);
					}
				}
			}

			function writeBuffer() { input.val(buffer.join('')); }

			function checkVal(allow) {
				//try to place characters where they belong
				var test = input.val(),
					lastMatch = -1,
					i,
					c,
					pos;

				for (i = 0, pos = 0; i < len; i++) {
					if (tests[i]) {
						buffer[i] = getPlaceholder(i);
						while (pos++ < test.length) {
							c = test.charAt(pos - 1);
							if (tests[i].test(c)) {
								buffer[i] = c;
								lastMatch = i;
								break;
							}
						}
						if (pos > test.length) {
							clearBuffer(i + 1, len);
							break;
						}
					} else {
                        if (buffer[i] === test.charAt(pos)) {
                            pos++;
                        }
                        if( i < partialPosition){
                            lastMatch = i;
                        }
					}
				}
				if (allow) {
					writeBuffer();
				} else if (lastMatch + 1 < partialPosition) {
					if (settings.autoclear || buffer.join('') === defaultBuffer) {
						// Invalid value. Remove it and replace it with the
						// mask, which is the default behavior.
						if(input.val()) input.val("");
						clearBuffer(0, len);
					} else {
						// Invalid value, but we opt to show the value to the
						// user and allow them to correct their mistake.
						writeBuffer();
					}
				} else {
					writeBuffer();
					input.val(input.val().substring(0, lastMatch + 1));
				}
				return (partialPosition ? i : firstNonMaskPos);
			}

			input.data($.mask.dataName,function(){
				return $.map(buffer, function(c, i) {
					return tests[i]&&c!=getPlaceholder(i) ? c : null;
				}).join('');
			});


			input
				.one("unmask", function() {
					input
						.off(".mask")
						.removeData($.mask.dataName);
				})
				.on("focus.mask", function() {
                    if (input.prop("readonly")){
                        return;
                    }

					clearTimeout(caretTimeoutId);
					var pos;

					focusText = input.val();

					pos = checkVal();

					caretTimeoutId = setTimeout(function(){
                        if(input.get(0) !== document.activeElement){
                            return;
                        }
						writeBuffer();
						if (pos == mask.replace("?","").length) {
							input.caret(0, pos);
						} else {
							input.caret(pos);
						}
					}, 10);
				})
				.on("blur.mask", blurEvent)
				.on("keydown.mask", keydownEvent)
				.on("keypress.mask", keypressEvent)
				.on("input.mask paste.mask", function() {
                    if (input.prop("readonly")){
                        return;
                    }

					setTimeout(function() {
						var pos=checkVal(true);
						input.caret(pos);
                        tryFireCompleted();
					}, 0);
				});
                if (chrome && android)
                {
                    input
                        .off('input.mask')
                        .on('input.mask', androidInputEvent);
                }
				checkVal(); //Perform initial check for existing values
		});
	}
});
}));
/*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */
(function(t){t.extend(t.fn,{validate:function(e){if(!this.length)return e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."),void 0;var i=t.data(this[0],"validator");return i?i:(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),i.settings.onsubmit&&(this.validateDelegate(":submit","click",function(e){i.settings.submitHandler&&(i.submitButton=e.target),t(e.target).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==t(e.target).attr("formnovalidate")&&(i.cancelSubmit=!0)}),this.submit(function(e){function s(){var s;return i.settings.submitHandler?(i.submitButton&&(s=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&s.remove(),!1):!0}return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,s()):i.form()?i.pendingRequest?(i.formSubmitted=!0,!1):s():(i.focusInvalid(),!1)})),i)},valid:function(){if(t(this[0]).is("form"))return this.validate().form();var e=!0,i=t(this[0].form).validate();return this.each(function(){e=e&&i.element(this)}),e},removeAttrs:function(e){var i={},s=this;return t.each(e.split(/\s/),function(t,e){i[e]=s.attr(e),s.removeAttr(e)}),i},rules:function(e,i){var s=this[0];if(e){var r=t.data(s.form,"validator").settings,n=r.rules,a=t.validator.staticRules(s);switch(e){case"add":t.extend(a,t.validator.normalizeRule(i)),delete a.messages,n[s.name]=a,i.messages&&(r.messages[s.name]=t.extend(r.messages[s.name],i.messages));break;case"remove":if(!i)return delete n[s.name],a;var u={};return t.each(i.split(/\s/),function(t,e){u[e]=a[e],delete a[e]}),u}}var o=t.validator.normalizeRules(t.extend({},t.validator.classRules(s),t.validator.attributeRules(s),t.validator.dataRules(s),t.validator.staticRules(s)),s);if(o.required){var l=o.required;delete o.required,o=t.extend({required:l},o)}return o}}),t.extend(t.expr[":"],{blank:function(e){return!t.trim(""+t(e).val())},filled:function(e){return!!t.trim(""+t(e).val())},unchecked:function(e){return!t(e).prop("checked")}}),t.validator=function(e,i){this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init()},t.validator.format=function(e,i){return 1===arguments.length?function(){var i=t.makeArray(arguments);return i.unshift(e),t.validator.format.apply(this,i)}:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),i.constructor!==Array&&(i=[i]),t.each(i,function(t,i){e=e.replace(RegExp("\\{"+t+"\\}","g"),function(){return i})}),e)},t.extend(t.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:t([]),errorLabelContainer:t([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(t)).hide())},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(t,e){(9!==e.which||""!==this.elementValue(t))&&(t.name in this.submitted||t===this.lastElement)&&this.element(t)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(s):t(e).addClass(i).removeClass(s)},unhighlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(s):t(e).removeClass(i).addClass(s)}},setDefaults:function(e){t.extend(t.validator.defaults,e)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:t.validator.format("Please enter no more than {0} characters."),minlength:t.validator.format("Please enter at least {0} characters."),rangelength:t.validator.format("Please enter a value between {0} and {1} characters long."),range:t.validator.format("Please enter a value between {0} and {1}."),max:t.validator.format("Please enter a value less than or equal to {0}."),min:t.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(e){var i=t.data(this[0].form,"validator"),s="on"+e.type.replace(/^validate/,"");i.settings[s]&&i.settings[s].call(i,this[0],e)}this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i=this.groups={};t.each(this.settings.groups,function(e,s){"string"==typeof s&&(s=s.split(/\s/)),t.each(s,function(t,s){i[s]=e})});var s=this.settings.rules;t.each(s,function(e,i){s[e]=t.validator.normalizeRule(i)}),t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",e).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",e),this.settings.invalidHandler&&t(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(e){e=this.validationTargetFor(this.clean(e)),this.lastElement=e,this.prepareElement(e),this.currentElements=t(e);var i=this.check(e)!==!1;return i?delete this.invalid[e.name]:this.invalid[e.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),i},showErrors:function(e){if(e){t.extend(this.errorMap,e),this.errorList=[];for(var i in e)this.errorList.push({message:e[i],element:this.findByName(i)[0]});this.successList=t.grep(this.successList,function(t){return!(t.name in e)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){t.fn.resetForm&&t(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e=0;for(var i in t)e++;return e},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(e){}},findLastActive:function(){var e=this.lastActive;return e&&1===t.grep(this.errorList,function(t){return t.element.name===e.name}).length&&e},elements:function(){var e=this,i={};return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&e.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in i||!e.objectLength(t(this).rules())?!1:(i[this.name]=!0,!0)})},clean:function(e){return t(e)[0]},errors:function(){var e=this.settings.errorClass.replace(" ",".");return t(this.settings.errorElement+"."+e,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([]),this.currentElements=t([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(e){var i=t(e).attr("type"),s=t(e).val();return"radio"===i||"checkbox"===i?t("input[name='"+t(e).attr("name")+"']:checked").val():"string"==typeof s?s.replace(/\r/g,""):s},check:function(e){e=this.validationTargetFor(this.clean(e));var i,s=t(e).rules(),r=!1,n=this.elementValue(e);for(var a in s){var u={method:a,parameters:s[a]};try{if(i=t.validator.methods[a].call(this,n,e,u.parameters),"dependency-mismatch"===i){r=!0;continue}if(r=!1,"pending"===i)return this.toHide=this.toHide.not(this.errorsFor(e)),void 0;if(!i)return this.formatAndAdd(e,u),!1}catch(o){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+u.method+"' method.",o),o}}return r?void 0:(this.objectLength(s)&&this.successList.push(e),!0)},customDataMessage:function(e,i){return t(e).data("msg-"+i.toLowerCase())||e.attributes&&t(e).attr("data-msg-"+i.toLowerCase())},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e])},findDefined:function(){for(var t=0;arguments.length>t;t++)if(void 0!==arguments[t])return arguments[t];return void 0},defaultMessage:function(e,i){return this.findDefined(this.customMessage(e.name,i),this.customDataMessage(e,i),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i],"<strong>Warning: No message defined for "+e.name+"</strong>")},formatAndAdd:function(e,i){var s=this.defaultMessage(e,i.method),r=/\$?\{(\d+)\}/g;"function"==typeof s?s=s.call(this,i.parameters,e):r.test(s)&&(s=t.validator.format(s.replace(r,"{$1}"),i.parameters)),this.errorList.push({message:s,element:e}),this.errorMap[e.name]=s,this.submitted[e.name]=s},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t},defaultShowErrors:function(){var t,e;for(t=0;this.errorList[t];t++){var i=this.errorList[t];this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message)}if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return t(this.errorList).map(function(){return this.element})},showLabel:function(e,i){var s=this.errorsFor(e);s.length?(s.removeClass(this.settings.validClass).addClass(this.settings.errorClass),s.html(i)):(s=t("<"+this.settings.errorElement+">").attr("for",this.idOrName(e)).addClass(this.settings.errorClass).html(i||""),this.settings.wrapper&&(s=s.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(s).length||(this.settings.errorPlacement?this.settings.errorPlacement(s,t(e)):s.insertAfter(e))),!i&&this.settings.success&&(s.text(""),"string"==typeof this.settings.success?s.addClass(this.settings.success):this.settings.success(s,e)),this.toShow=this.toShow.add(s)},errorsFor:function(e){var i=this.idOrName(e);return this.errors().filter(function(){return t(this).attr("for")===i})},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name)},validationTargetFor:function(t){return this.checkable(t)&&(t=this.findByName(t.name).not(this.settings.ignore)[0]),t},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(e){return t(this.currentForm).find("[name='"+e+"']")},getLength:function(e,i){switch(i.nodeName.toLowerCase()){case"select":return t("option:selected",i).length;case"input":if(this.checkable(i))return this.findByName(i.name).filter(":checked").length}return e.length},depend:function(t,e){return this.dependTypes[typeof t]?this.dependTypes[typeof t](t,e):!0},dependTypes:{"boolean":function(t){return t},string:function(e,i){return!!t(e,i.form).length},"function":function(t,e){return t(e)}},optional:function(e){var i=this.elementValue(e);return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch"},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0)},stopRequest:function(e,i){this.pendingRequest--,0>this.pendingRequest&&(this.pendingRequest=0),delete this.pending[e.name],i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(e){return t.data(e,"previousValue")||t.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,i){e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e)},classRules:function(e){var i={},s=t(e).attr("class");return s&&t.each(s.split(" "),function(){this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this])}),i},attributeRules:function(e){var i={},s=t(e),r=s[0].getAttribute("type");for(var n in t.validator.methods){var a;"required"===n?(a=s.get(0).getAttribute(n),""===a&&(a=!0),a=!!a):a=s.attr(n),/min|max/.test(n)&&(null===r||/number|range|text/.test(r))&&(a=Number(a)),a?i[n]=a:r===n&&"range"!==r&&(i[n]=!0)}return i.maxlength&&/-1|2147483647|524288/.test(i.maxlength)&&delete i.maxlength,i},dataRules:function(e){var i,s,r={},n=t(e);for(i in t.validator.methods)s=n.data("rule-"+i.toLowerCase()),void 0!==s&&(r[i]=s);return r},staticRules:function(e){var i={},s=t.data(e.form,"validator");return s.settings.rules&&(i=t.validator.normalizeRule(s.settings.rules[e.name])||{}),i},normalizeRules:function(e,i){return t.each(e,function(s,r){if(r===!1)return delete e[s],void 0;if(r.param||r.depends){var n=!0;switch(typeof r.depends){case"string":n=!!t(r.depends,i.form).length;break;case"function":n=r.depends.call(i,i)}n?e[s]=void 0!==r.param?r.param:!0:delete e[s]}}),t.each(e,function(s,r){e[s]=t.isFunction(r)?r(i):r}),t.each(["minlength","maxlength"],function(){e[this]&&(e[this]=Number(e[this]))}),t.each(["rangelength","range"],function(){var i;e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(i=e[this].split(/[\s,]+/),e[this]=[Number(i[0]),Number(i[1])]))}),t.validator.autoCreateRanges&&(e.min&&e.max&&(e.range=[e.min,e.max],delete e.min,delete e.max),e.minlength&&e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],delete e.minlength,delete e.maxlength)),e},normalizeRule:function(e){if("string"==typeof e){var i={};t.each(e.split(/\s/),function(){i[this]=!0}),e=i}return e},addMethod:function(e,i,s){t.validator.methods[e]=i,t.validator.messages[e]=void 0!==s?s:t.validator.messages[e],3>i.length&&t.validator.addClassRules(e,t.validator.normalizeRule(e))},methods:{required:function(e,i,s){if(!this.depend(s,i))return"dependency-mismatch";if("select"===i.nodeName.toLowerCase()){var r=t(i).val();return r&&r.length>0}return this.checkable(i)?this.getLength(e,i)>0:t.trim(e).length>0},email:function(t,e){return this.optional(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)},url:function(t,e){return this.optional(e)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)},date:function(t,e){return this.optional(e)||!/Invalid|NaN/.test(""+new Date(t))},dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)},number:function(t,e){return this.optional(e)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t)},creditcard:function(t,e){if(this.optional(e))return"dependency-mismatch";if(/[^0-9 \-]+/.test(t))return!1;var i=0,s=0,r=!1;t=t.replace(/\D/g,"");for(var n=t.length-1;n>=0;n--){var a=t.charAt(n);s=parseInt(a,10),r&&(s*=2)>9&&(s-=9),i+=s,r=!r}return 0===i%10},minlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s},maxlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||s>=r},rangelength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s[0]&&s[1]>=r},min:function(t,e,i){return this.optional(e)||t>=i},max:function(t,e,i){return this.optional(e)||i>=t},range:function(t,e,i){return this.optional(e)||t>=i[0]&&i[1]>=t},equalTo:function(e,i,s){var r=t(s);return this.settings.onfocusout&&r.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){t(i).valid()}),e===r.val()},remote:function(e,i,s){if(this.optional(i))return"dependency-mismatch";var r=this.previousValue(i);if(this.settings.messages[i.name]||(this.settings.messages[i.name]={}),r.originalMessage=this.settings.messages[i.name].remote,this.settings.messages[i.name].remote=r.message,s="string"==typeof s&&{url:s}||s,r.old===e)return r.valid;r.old=e;var n=this;this.startRequest(i);var a={};return a[i.name]=e,t.ajax(t.extend(!0,{url:s,mode:"abort",port:"validate"+i.name,dataType:"json",data:a,success:function(s){n.settings.messages[i.name].remote=r.originalMessage;var a=s===!0||"true"===s;if(a){var u=n.formSubmitted;n.prepareElement(i),n.formSubmitted=u,n.successList.push(i),delete n.invalid[i.name],n.showErrors()}else{var o={},l=s||n.defaultMessage(i,"remote");o[i.name]=r.message=t.isFunction(l)?l(e):l,n.invalid[i.name]=!0,n.showErrors(o)}r.valid=a,n.stopRequest(i,a)}},s)),"pending"}}}),t.format=t.validator.format})(jQuery),function(t){var e={};if(t.ajaxPrefilter)t.ajaxPrefilter(function(t,i,s){var r=t.port;"abort"===t.mode&&(e[r]&&e[r].abort(),e[r]=s)});else{var i=t.ajax;t.ajax=function(s){var r=("mode"in s?s:t.ajaxSettings).mode,n=("port"in s?s:t.ajaxSettings).port;return"abort"===r?(e[n]&&e[n].abort(),e[n]=i.apply(this,arguments),e[n]):i.apply(this,arguments)}}}(jQuery),function(t){t.extend(t.fn,{validateDelegate:function(e,i,s){return this.bind(i,function(i){var r=t(i.target);return r.is(e)?s.apply(r,arguments):void 0})}})}(jQuery);
/*!
 * Nestable jQuery Plugin - Copyright (c) 2012 David Bushell - http://dbushell.com/
 * Dual-licensed under the BSD or MIT licenses
 */

;(function($, window, document, undefined)
{
    var hasTouch = 'ontouchstart' in window;

    /**
     * Detect CSS pointer-events property
     * events are normally disabled on the dragging element to avoid conflicts
     * https://github.com/ausi/Feature-detection-technique-for-pointer-events/blob/master/modernizr-pointerevents.js
     */
    var hasPointerEvents = (function()
    {
        var el    = document.createElement('div'),
            docEl = document.documentElement;
        if (!('pointerEvents' in el.style)) {
            return false;
        }
        el.style.pointerEvents = 'auto';
        el.style.pointerEvents = 'x';
        docEl.appendChild(el);
        var supports = window.getComputedStyle && window.getComputedStyle(el, '').pointerEvents === 'auto';
        docEl.removeChild(el);
        return !!supports;
    })();

    var eStart  = hasTouch ? 'touchstart'  : 'mousedown',
        eMove   = hasTouch ? 'touchmove'   : 'mousemove',
        eEnd    = hasTouch ? 'touchend'    : 'mouseup';
        eCancel = hasTouch ? 'touchcancel' : 'mouseup';

    var defaults = {
            listNodeName    : 'ol',
            itemNodeName    : 'li',
            rootClass       : 'dd',
            listClass       : 'dd-list',
            itemClass       : 'dd-item',
            dragClass       : 'dd-dragel',
            handleClass     : 'dd-handle',
            collapsedClass  : 'dd-collapsed',
            placeClass      : 'dd-placeholder',
            noDragClass     : 'dd-nodrag',
            emptyClass      : 'dd-empty',
            expandBtnHTML   : '<button data-action="expand" type="button">Expand</button>',
            collapseBtnHTML : '<button data-action="collapse" type="button">Collapse</button>',
            group           : 0,
            maxDepth        : 5,
            threshold       : 20
        };

    function Plugin(element, options)
    {
        this.w  = $(window);
        this.el = $(element);
        this.options = $.extend({}, defaults, options);
        this.init();
    }

    Plugin.prototype = {

        init: function()
        {
            var list = this;

            list.reset();

            list.el.data('nestable-group', this.options.group);

            list.placeEl = $('<div class="' + list.options.placeClass + '"/>');

            $.each(this.el.find(list.options.itemNodeName), function(k, el) {
                list.setParent($(el));
            });

            list.el.on('click', 'button', function(e) {
                if (list.dragEl || (!hasTouch && e.button !== 0)) {
                    return;
                }
                var target = $(e.currentTarget),
                    action = target.data('action'),
                    item   = target.parent(list.options.itemNodeName);
                if (action === 'collapse') {
                    list.collapseItem(item);
                }
                if (action === 'expand') {
                    list.expandItem(item);
                }
            });

            var onStartEvent = function(e)
            {
                var handle = $(e.target);
                if (!handle.hasClass(list.options.handleClass)) {
                    if (handle.closest('.' + list.options.noDragClass).length) {
                        return;
                    }
                    handle = handle.closest('.' + list.options.handleClass);
                }
                if (!handle.length || list.dragEl || (!hasTouch && e.button !== 0) || (hasTouch && e.touches.length !== 1)) {
                    return;
                }
                e.preventDefault();
                list.dragStart(hasTouch ? e.touches[0] : e);
            };

            var onMoveEvent = function(e)
            {
                if (list.dragEl) {
                    e.preventDefault();
                    list.dragMove(hasTouch ? e.touches[0] : e);
                }
            };

            var onEndEvent = function(e)
            {
                if (list.dragEl) {
                    e.preventDefault();
                    list.dragStop(hasTouch ? e.touches[0] : e);
                }
            };

            if (hasTouch) {
                list.el[0].addEventListener(eStart, onStartEvent, false);
                window.addEventListener(eMove, onMoveEvent, false);
                window.addEventListener(eEnd, onEndEvent, false);
                window.addEventListener(eCancel, onEndEvent, false);
            } else {
                list.el.on(eStart, onStartEvent);
                list.w.on(eMove, onMoveEvent);
                list.w.on(eEnd, onEndEvent);
            }

        },

        serialize: function()
        {
            var data,
                depth = 0,
                list  = this;
                step  = function(level, depth)
                {
                    var array = [ ],
                        items = level.children(list.options.itemNodeName);
                    items.each(function()
                    {
                        var li   = $(this),
                            item = $.extend({}, li.data()),
                            sub  = li.children(list.options.listNodeName);
                        if (sub.length) {
                            item.children = step(sub, depth + 1);
                        }
                        array.push(item);
                    });
                    return array;
                };
            data = step(list.el.find(list.options.listNodeName).first(), depth);
            return data;
        },

        serialise: function()
        {
            return this.serialize();
        },

        reset: function()
        {
            this.mouse = {
                offsetX   : 0,
                offsetY   : 0,
                startX    : 0,
                startY    : 0,
                lastX     : 0,
                lastY     : 0,
                nowX      : 0,
                nowY      : 0,
                distX     : 0,
                distY     : 0,
                dirAx     : 0,
                dirX      : 0,
                dirY      : 0,
                lastDirX  : 0,
                lastDirY  : 0,
                distAxX   : 0,
                distAxY   : 0
            };
            this.moving     = false;
            this.dragEl     = null;
            this.dragRootEl = null;
            this.dragDepth  = 0;
            this.hasNewRoot = false;
            this.pointEl    = null;
        },

        expandItem: function(li)
        {
            li.removeClass(this.options.collapsedClass);
            li.children('[data-action="expand"]').hide();
            li.children('[data-action="collapse"]').show();
            li.children(this.options.listNodeName).show();
        },

        collapseItem: function(li)
        {
            var lists = li.children(this.options.listNodeName);
            if (lists.length) {
                li.addClass(this.options.collapsedClass);
                li.children('[data-action="collapse"]').hide();
                li.children('[data-action="expand"]').show();
                li.children(this.options.listNodeName).hide();
            }
        },

        expandAll: function()
        {
            var list = this;
            list.el.find(list.options.itemNodeName).each(function() {
                list.expandItem($(this));
            });
        },

        collapseAll: function()
        {
            var list = this;
            list.el.find(list.options.itemNodeName).each(function() {
                list.collapseItem($(this));
            });
        },

        setParent: function(li)
        {
            if (li.children(this.options.listNodeName).length) {
                li.prepend($(this.options.expandBtnHTML));
                li.prepend($(this.options.collapseBtnHTML));
            }
            li.children('[data-action="expand"]').hide();
        },

        unsetParent: function(li)
        {
            li.removeClass(this.options.collapsedClass);
            li.children('[data-action]').remove();
            li.children(this.options.listNodeName).remove();
        },

        dragStart: function(e)
        {
            var mouse    = this.mouse,
                target   = $(e.target),
                dragItem = target.closest(this.options.itemNodeName);

            this.placeEl.css('height', dragItem.height());

            mouse.offsetX = e.offsetX !== undefined ? e.offsetX : e.pageX - target.offset().left;
            mouse.offsetY = e.offsetY !== undefined ? e.offsetY : e.pageY - target.offset().top;
            mouse.startX = mouse.lastX = e.pageX;
            mouse.startY = mouse.lastY = e.pageY;

            this.dragRootEl = this.el;

            this.dragEl = $(document.createElement(this.options.listNodeName)).addClass(this.options.listClass + ' ' + this.options.dragClass);
            this.dragEl.css('width', dragItem.width());

            // fix for zepto.js
            //dragItem.after(this.placeEl).detach().appendTo(this.dragEl);
            dragItem.after(this.placeEl);
            dragItem[0].parentNode.removeChild(dragItem[0]);
            dragItem.appendTo(this.dragEl);

            $(document.body).append(this.dragEl);
            this.dragEl.css({
                'left' : e.pageX - mouse.offsetX,
                'top'  : e.pageY - mouse.offsetY
            });
            // total depth of dragging item
            var i, depth,
                items = this.dragEl.find(this.options.itemNodeName);
            for (i = 0; i < items.length; i++) {
                depth = $(items[i]).parents(this.options.listNodeName).length;
                if (depth > this.dragDepth) {
                    this.dragDepth = depth;
                }
            }
        },

        dragStop: function(e)
        {
            // fix for zepto.js
            //this.placeEl.replaceWith(this.dragEl.children(this.options.itemNodeName + ':first').detach());
            var el = this.dragEl.children(this.options.itemNodeName).first();
            el[0].parentNode.removeChild(el[0]);
            this.placeEl.replaceWith(el);

            this.dragEl.remove();
            this.el.trigger('change');
            if (this.hasNewRoot) {
                this.dragRootEl.trigger('change');
            }
            this.reset();
        },

        dragMove: function(e)
        {
            var list, parent, prev, next, depth,
                opt   = this.options,
                mouse = this.mouse;

            this.dragEl.css({
                'left' : e.pageX - mouse.offsetX,
                'top'  : e.pageY - mouse.offsetY
            });

            // mouse position last events
            mouse.lastX = mouse.nowX;
            mouse.lastY = mouse.nowY;
            // mouse position this events
            mouse.nowX  = e.pageX;
            mouse.nowY  = e.pageY;
            // distance mouse moved between events
            mouse.distX = mouse.nowX - mouse.lastX;
            mouse.distY = mouse.nowY - mouse.lastY;
            // direction mouse was moving
            mouse.lastDirX = mouse.dirX;
            mouse.lastDirY = mouse.dirY;
            // direction mouse is now moving (on both axis)
            mouse.dirX = mouse.distX === 0 ? 0 : mouse.distX > 0 ? 1 : -1;
            mouse.dirY = mouse.distY === 0 ? 0 : mouse.distY > 0 ? 1 : -1;
            // axis mouse is now moving on
            var newAx   = Math.abs(mouse.distX) > Math.abs(mouse.distY) ? 1 : 0;

            // do nothing on first move
            if (!mouse.moving) {
                mouse.dirAx  = newAx;
                mouse.moving = true;
                return;
            }

            // calc distance moved on this axis (and direction)
            if (mouse.dirAx !== newAx) {
                mouse.distAxX = 0;
                mouse.distAxY = 0;
            } else {
                mouse.distAxX += Math.abs(mouse.distX);
                if (mouse.dirX !== 0 && mouse.dirX !== mouse.lastDirX) {
                    mouse.distAxX = 0;
                }
                mouse.distAxY += Math.abs(mouse.distY);
                if (mouse.dirY !== 0 && mouse.dirY !== mouse.lastDirY) {
                    mouse.distAxY = 0;
                }
            }
            mouse.dirAx = newAx;

            /**
             * move horizontal
             */
            if (mouse.dirAx && mouse.distAxX >= opt.threshold) {
                // reset move distance on x-axis for new phase
                mouse.distAxX = 0;
                prev = this.placeEl.prev(opt.itemNodeName);
                // increase horizontal level if previous sibling exists and is not collapsed
                if (mouse.distX > 0 && prev.length && !prev.hasClass(opt.collapsedClass)) {
                    // cannot increase level when item above is collapsed
                    list = prev.find(opt.listNodeName).last();
                    // check if depth limit has reached
                    depth = this.placeEl.parents(opt.listNodeName).length;
                    if (depth + this.dragDepth <= opt.maxDepth) {
                        // create new sub-level if one doesn't exist
                        if (!list.length) {
                            list = $('<' + opt.listNodeName + '/>').addClass(opt.listClass);
                            list.append(this.placeEl);
                            prev.append(list);
                            this.setParent(prev);
                        } else {
                            // else append to next level up
                            list = prev.children(opt.listNodeName).last();
                            list.append(this.placeEl);
                        }
                    }
                }
                // decrease horizontal level
                if (mouse.distX < 0) {
                    // we can't decrease a level if an item preceeds the current one
                    next = this.placeEl.next(opt.itemNodeName);
                    if (!next.length) {
                        parent = this.placeEl.parent();
                        this.placeEl.closest(opt.itemNodeName).after(this.placeEl);
                        if (!parent.children().length) {
                            this.unsetParent(parent.parent());
                        }
                    }
                }
            }

            var isEmpty = false;

            // find list item under cursor
            if (!hasPointerEvents) {
                this.dragEl[0].style.visibility = 'hidden';
            }
            this.pointEl = $(document.elementFromPoint(e.pageX - document.body.scrollLeft, e.pageY - (window.pageYOffset || document.documentElement.scrollTop)));
            if (!hasPointerEvents) {
                this.dragEl[0].style.visibility = 'visible';
            }
            if (this.pointEl.hasClass(opt.handleClass)) {
                this.pointEl = this.pointEl.parent(opt.itemNodeName);
            }
            if (this.pointEl.hasClass(opt.emptyClass)) {
                isEmpty = true;
            }
            else if (!this.pointEl.length || !this.pointEl.hasClass(opt.itemClass)) {
                return;
            }

            // find parent list of item under cursor
            var pointElRoot = this.pointEl.closest('.' + opt.rootClass),
                isNewRoot   = this.dragRootEl.data('nestable-id') !== pointElRoot.data('nestable-id');

            /**
             * move vertical
             */
            if (!mouse.dirAx || isNewRoot || isEmpty) {
                // check if groups match if dragging over new root
                if (isNewRoot && opt.group !== pointElRoot.data('nestable-group')) {
                    return;
                }
                // check depth limit
                depth = this.dragDepth - 1 + this.pointEl.parents(opt.listNodeName).length;
                if (depth > opt.maxDepth) {
                    return;
                }
                var before = e.pageY < (this.pointEl.offset().top + this.pointEl.height() / 2);
                    parent = this.placeEl.parent();
                // if empty create new list to replace empty placeholder
                if (isEmpty) {
                    list = $(document.createElement(opt.listNodeName)).addClass(opt.listClass);
                    list.append(this.placeEl);
                    this.pointEl.replaceWith(list);
                }
                else if (before) {
                    this.pointEl.before(this.placeEl);
                }
                else {
                    this.pointEl.after(this.placeEl);
                }
                if (!parent.children().length) {
                    this.unsetParent(parent.parent());
                }
                if (!this.dragRootEl.find(opt.itemNodeName).length) {
                    this.dragRootEl.append('<div class="' + opt.emptyClass + '"/>');
                }
                // parent root list has changed
                if (isNewRoot) {
                    this.dragRootEl = pointElRoot;
                    this.hasNewRoot = this.el[0] !== this.dragRootEl[0];
                }
            }
        }

    };

    $.fn.nestable = function(params)
    {
        var lists  = this,
            retval = this;

        lists.each(function()
        {
            var plugin = $(this).data("nestable");

            if (!plugin) {
                $(this).data("nestable", new Plugin(this, params));
                $(this).data("nestable-id", new Date().getTime());
            } else {
                if (typeof params === 'string' && typeof plugin[params] === 'function') {
                    retval = plugin[params]();
                }
            }
        });

        return retval || lists;
    };

})(window.jQuery || window.Zepto, window, document);
/*! Fuel UX - v2.3.1 - 2013-08-02
* https://github.com/ExactTarget/fuelux
* Copyright (c) 2013 ExactTarget; Licensed MIT */

(function(){var a,b,c;(function(d){function l(a,b){var c,d,e,f,g,h,j,k,l,m,n=b&&b.split("/"),o=i.map,p=o&&o["*"]||{};if(a&&a.charAt(0)==="."&&b){n=n.slice(0,n.length-1),a=n.concat(a.split("/"));for(k=0;k<a.length;k+=1){m=a[k];if(m===".")a.splice(k,1),k-=1;else if(m==="..")if(k!==1||a[2]!==".."&&a[0]!=="..")k>0&&(a.splice(k-1,2),k-=2);else break}a=a.join("/")}if((n||p)&&o){c=a.split("/");for(k=c.length;k>0;k-=1){d=c.slice(0,k).join("/");if(n)for(l=n.length;l>0;l-=1){e=o[n.slice(0,l).join("/")];if(e){e=e[d];if(e){f=e,g=k;break}}}if(f)break;!h&&p&&p[d]&&(h=p[d],j=k)}!f&&h&&(f=h,g=j),f&&(c.splice(0,g,f),a=c.join("/"))}return a}function m(a,b){return function(){return f.apply(d,k.call(arguments,0).concat([a,b]))}}function n(a){return function(b){return l(b,a)}}function o(a){return function(b){g[a]=b}}function p(a){if(h.hasOwnProperty(a)){var b=h[a];delete h[a],j[a]=!0,e.apply(d,b)}if(!g.hasOwnProperty(a))throw new Error("No "+a);return g[a]}function q(a,b){var c,d,e=a.indexOf("!");return e!==-1?(c=l(a.slice(0,e),b),a=a.slice(e+1),d=p(c),d&&d.normalize?a=d.normalize(a,n(b)):a=l(a,b)):a=l(a,b),{f:c?c+"!"+a:a,n:a,p:d}}function r(a){return function(){return i&&i.config&&i.config[a]||{}}}var e,f,g={},h={},i={},j={},k=[].slice;e=function(a,b,c,e){var f,i,k,l,n,s=[],t;e=e||a;if(typeof c=="function"){b=!b.length&&c.length?["require","exports","module"]:b;for(n=0;n<b.length;n+=1){l=q(b[n],e),i=l.f;if(i==="require")s[n]=m(a);else if(i==="exports")s[n]=g[a]={},t=!0;else if(i==="module")f=s[n]={id:a,uri:"",exports:g[a],config:r(a)};else if(g.hasOwnProperty(i)||h.hasOwnProperty(i))s[n]=p(i);else if(l.p)l.p.load(l.n,m(e,!0),o(i),{}),s[n]=g[i];else if(!j[i])throw new Error(a+" missing "+i)}k=c.apply(g[a],s);if(a)if(f&&f.exports!==d&&f.exports!==g[a])g[a]=f.exports;else if(k!==d||!t)g[a]=k}else a&&(g[a]=c)},a=b=f=function(a,b,c,g,h){return typeof a=="string"?p(q(a,b).f):(a.splice||(i=a,b.splice?(a=b,b=c,c=null):a=d),b=b||function(){},typeof c=="function"&&(c=g,g=h),g?e(d,a,b,c):setTimeout(function(){e(d,a,b,c)},15),f)},f.config=function(a){return i=a,f},c=function(a,b,c){b.splice||(c=b,b=[]),h[a]=[a,b,c]},c.amd={jQuery:!0}})(),c("almond",function(){}),function(a){var b;c("bootstrap/bootstrap-transition",["jquery"],function(){return function(){!function(a){a(function(){a.support.transition=function(){var a=function(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},c;for(c in b)if(a.style[c]!==undefined)return b[c]}();return a&&{end:a}}()})}(window.jQuery)}.call(a),b})}(this),function(a){var b;c("bootstrap/bootstrap-affix",["bootstrap/bootstrap-transition"],function(){return function(){!function(a){var b=function(b,c){this.options=a.extend({},a.fn.affix.defaults,c),this.$window=a(window).on("scroll.affix.data-api",a.proxy(this.checkPosition,this)).on("click.affix.data-api",a.proxy(function(){setTimeout(a.proxy(this.checkPosition,this),1)},this)),this.$element=a(b),this.checkPosition()};b.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var b=a(document).height(),c=this.$window.scrollTop(),d=this.$element.offset(),e=this.options.offset,f=e.bottom,g=e.top,h="affix affix-top affix-bottom",i;typeof e!="object"&&(f=g=e),typeof g=="function"&&(g=e.top()),typeof f=="function"&&(f=e.bottom()),i=this.unpin!=null&&c+this.unpin<=d.top?!1:f!=null&&d.top+this.$element.height()>=b-f?"bottom":g!=null&&c<=g?"top":!1;if(this.affixed===i)return;this.affixed=i,this.unpin=i=="bottom"?d.top-c:null,this.$element.removeClass(h).addClass("affix"+(i?"-"+i:""))};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("affix"),f=typeof c=="object"&&c;e||d.data("affix",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.defaults={offset:0},a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery)}.call(a),b})}(this),function(a){var b;c("bootstrap/bootstrap-alert",["bootstrap/bootstrap-transition"],function(){return function(){!function(a){var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function f(){e.trigger("closed").remove()}var c=a(this),d=c.attr("data-target"),e;d||(d=c.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),e=a(d),b&&b.preventDefault(),e.length||(e=c.hasClass("alert")?c:c.parent()),e.trigger(b=a.Event("close"));if(b.isDefaultPrevented())return;e.removeClass("in"),a.support.transition&&e.hasClass("fade")?e.on(a.support.transition.end,f):f()};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("alert");e||d.data("alert",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.alert.data-api",b,c.prototype.close)}(window.jQuery)}.call(a),b})}(this),function(a){var b;c("bootstrap/bootstrap-button",["bootstrap/bootstrap-transition"],function(){return function(){!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.button.defaults,c)};b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.data(),e=c.is("input")?"val":"html";a=a+"Text",d.resetText||c.data("resetText",c[e]()),c[e](d[a]||this.options[a]),setTimeout(function(){a=="loadingText"?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons-radio"]');a&&a.find(".active").removeClass("active"),this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("button"),f=typeof c=="object"&&c;e||d.data("button",e=new b(this,f)),c=="toggle"?e.toggle():c&&e.setState(c)})},a.fn.button.defaults={loadingText:"loading..."},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle")})}(window.jQuery)}.call(a),b})}(this),function(a){var b;c("bootstrap/bootstrap-carousel",["bootstrap/bootstrap-transition"],function(){return function(){!function(a){var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.options.pause=="hover"&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.prototype={cycle:function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(b){var c=this.getActiveIndex(),d=this;if(b>this.$items.length-1||b<0)return;return this.sliding?this.$element.one("slid",function(){d.to(b)}):c==b?this.pause().cycle():this.slide(b>c?"next":"prev",a(this.$items[b]))},pause:function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g=b=="next"?"left":"right",h=b=="next"?"first":"last",i=this,j;this.sliding=!0,f&&this.pause(),e=e.length?e:this.$element.find(".item")[h](),j=a.Event("slide",{relatedTarget:e[0],direction:g});if(e.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")}));if(a.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(j);if(j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),this.$element.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)})}else{this.$element.trigger(j);if(j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("carousel"),f=a.extend({},a.fn.carousel.defaults,typeof c=="object"&&c),g=typeof c=="string"?c:f.slide;e||d.data("carousel",e=new b(this,f)),typeof c=="number"?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.defaults={interval:5e3,pause:"hover"},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),c.data()),g;e.carousel(f),(g=c.attr("data-slide-to"))&&e.data("carousel").pause().to(g).cycle(),b.preventDefault()})}(window.jQuery)}.call(a),b})}(this),function(a){var b;c("bootstrap/bootstrap-collapse",["bootstrap/bootstrap-transition"],function(){return function(){!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.collapse.defaults,c),this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.prototype={constructor:b,dimension:function(){var a=this.$element.hasClass("width");return a?"width":"height"},show:function(){var b,c,d,e;if(this.transitioning||this.$element.hasClass("in"))return;b=this.dimension(),c=a.camelCase(["scroll",b].join("-")),d=this.$parent&&this.$parent.find("> .accordion-group > .in");if(d&&d.length){e=d.data("collapse");if(e&&e.transitioning)return;d.collapse("hide"),e||d.data("collapse",null)}this.$element[b](0),this.transition("addClass",a.Event("show"),"shown"),a.support.transition&&this.$element[b](this.$element[0][c])},hide:function(){var b;if(this.transitioning||!this.$element.hasClass("in"))return;b=this.dimension(),this.reset(this.$element[b]()),this.transition("removeClass",a.Event("hide"),"hidden"),this.$element[b](0)},reset:function(a){var b=this.dimension();return this.$element.removeClass("collapse")[b](a||"auto")[0].offsetWidth,this.$element[a!==null?"addClass":"removeClass"]("collapse"),this},transition:function(b,c,d){var e=this,f=function(){c.type=="show"&&e.reset(),e.transitioning=0,e.$element.trigger(d)};this.$element.trigger(c);if(c.isDefaultPrevented())return;this.transitioning=1,this.$element[b]("in"),a.support.transition&&this.$element.hasClass("collapse")?this.$element.one(a.support.transition.end,f):f()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("collapse"),f=a.extend({},a.fn.collapse.defaults,d.data(),typeof c=="object"&&c);e||d.data("collapse",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.collapse.defaults={toggle:!0},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.collapse.data-api","[data-toggle=collapse]",function(b){var c=a(this),d,e=c.attr("data-target")||b.preventDefault()||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),f=a(e).data("collapse")?"toggle":c.data();c[a(e).hasClass("in")?"addClass":"removeClass"]("collapsed"),a(e).collapse(f)})}(window.jQuery)}.call(a),b})}(this),function(a){var b;c("bootstrap/bootstrap-dropdown",["bootstrap/bootstrap-transition"],function(){return function(){!function(a){function d(){a(".dropdown-backdrop").remove(),a(b).each(function(){e(a(this)).removeClass("open")})}function e(b){var c=b.attr("data-target"),d;c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,"")),d=c&&a(c);if(!d||!d.length)d=b.parent();return d}var b="[data-toggle=dropdown]",c=function(b){var c=a(b).on("click.dropdown.data-api",this.toggle);a("html").on("click.dropdown.data-api",function(){c.parent().removeClass("open")})};c.prototype={constructor:c,toggle:function(b){var c=a(this),f,g;if(c.is(".disabled, :disabled"))return;return f=e(c),g=f.hasClass("open"),d(),g||("ontouchstart"in document.documentElement&&a('<div class="dropdown-backdrop"/>').insertBefore(a(this)).on("click",d),f.toggleClass("open")),c.focus(),!1},keydown:function(c){var d,f,g,h,i,j;if(!/(38|40|27)/.test(c.keyCode))return;d=a(this),c.preventDefault(),c.stopPropagation();if(d.is(".disabled, :disabled"))return;h=e(d),i=h.hasClass("open");if(!i||i&&c.keyCode==27)return c.which==27&&h.find(b).focus(),d.click();f=a("[role=menu] li:not(.divider):visible a",h);if(!f.length)return;j=f.index(f.filter(":focus")),c.keyCode==38&&j>0&&j--,c.keyCode==40&&j<f.length-1&&j++,~j||(j=0),f.eq(j).focus()}};var f=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var d=a(this),e=d.data("dropdown");e||d.data("dropdown",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.dropdown.Constructor=c,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=f,this},a(document).on("click.dropdown.data-api",d).on("click.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.dropdown.data-api",b,c.prototype.toggle).on("keydown.dropdown.data-api",b+", [role=menu]",c.prototype.keydown)}(window.jQuery)}.call(a),b})}(this),function(a){var b;c("bootstrap/bootstrap-modal",["bootstrap/bootstrap-transition"],function(){return function(){!function(a){var b=function(b,c){this.options=c,this.$element=a(b).delegate('[data-dismiss="modal"]',"click.dismiss.modal",a.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};b.prototype={constructor:b,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var b=this,c=a.Event("show");this.$element.trigger(c);if(this.isShown||c.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var c=a.support.transition&&b.$element.hasClass("fade");b.$element.parent().length||b.$element.appendTo(document.body),b.$element.show(),c&&b.$element[0].offsetWidth,b.$element.addClass("in").attr("aria-hidden",!1),b.enforceFocus(),c?b.$element.one(a.support.transition.end,function(){b.$element.focus().trigger("shown")}):b.$element.focus().trigger("shown")})},hide:function(b){b&&b.preventDefault();var c=this;b=a.Event("hide"),this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=!1,this.escape(),a(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),a.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var b=this;a(document).on("focusin.modal",function(a){b.$element[0]!==a.target&&!b.$element.has(a.target).length&&b.$element.focus()})},escape:function(){var a=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(b){b.which==27&&a.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var b=this,c=setTimeout(function(){b.$element.off(a.support.transition.end),b.hideModal()},500);this.$element.one(a.support.transition.end,function(){clearTimeout(c),b.hideModal()})},hideModal:function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?a.proxy(this.$element[0].focus,this.$element[0]):a.proxy(this.hide,this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!b)return;e?this.$backdrop.one(a.support.transition.end,b):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b):b()):b&&b()}};var c=a.fn.modal;a.fn.modal=function(c){return this.each(function(){var d=a(this),e=d.data("modal"),f=a.extend({},a.fn.modal.defaults,d.data(),typeof c=="object"&&c);e||d.data("modal",e=new b(this,f)),typeof c=="string"?e[c]():f.show&&e.show()})},a.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f).one("hide",function(){c.focus()})})}(window.jQuery)}.call(a),b})}(this),function(a){var b;c("bootstrap/bootstrap-tooltip",["bootstrap/bootstrap-transition"],function(){return function(){!function(a){var b=function(a,b){this.init("tooltip",a,b)};b.prototype={constructor:b,init:function(b,c,d){var e,f,g,h,i;this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.enabled=!0,g=this.options.trigger.split(" ");for(i=g.length;i--;)h=g[i],h=="click"?this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this)):h!="manual"&&(e=h=="hover"?"mouseenter":"focus",f=h=="hover"?"mouseleave":"blur",this.$element.on(e+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(f+"."+this.type,this.options.selector,a.proxy(this.leave,this)));this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(b){return b=a.extend({},a.fn[this.type].defaults,this.$element.data(),b),b.delay&&typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),b},enter:function(b){var c=a.fn[this.type].defaults,d={},e;this._options&&a.each(this._options,function(a,b){c[a]!=b&&(d[a]=b)}),e=a(b.currentTarget)[this.type](d).data(this.type);if(!e.options.delay||!e.options.delay.show)return e.show();clearTimeout(this.timeout),e.hoverState="in",this.timeout=setTimeout(function(){e.hoverState=="in"&&e.show()},e.options.delay.show)},leave:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!c.options.delay||!c.options.delay.hide)return c.hide();c.hoverState="out",this.timeout=setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide)},show:function(){var b,c,d,e,f,g,h=a.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(h);if(h.isDefaultPrevented())return;b=this.tip(),this.setContent(),this.options.animation&&b.addClass("fade"),f=typeof this.options.placement=="function"?this.options.placement.call(this,b[0],this.$element[0]):this.options.placement,b.detach().css({top:0,left:0,display:"block"}),this.options.container?b.appendTo(this.options.container):b.insertAfter(this.$element),c=this.getPosition(),d=b[0].offsetWidth,e=b[0].offsetHeight;switch(f){case"bottom":g={top:c.top+c.height,left:c.left+c.width/2-d/2};break;case"top":g={top:c.top-e,left:c.left+c.width/2-d/2};break;case"left":g={top:c.top+c.height/2-e/2,left:c.left-d};break;case"right":g={top:c.top+c.height/2-e/2,left:c.left+c.width}}this.applyPlacement(g,f),this.$element.trigger("shown")}},applyPlacement:function(a,b){var c=this.tip(),d=c[0].offsetWidth,e=c[0].offsetHeight,f,g,h,i;c.offset(a).addClass(b).addClass("in"),f=c[0].offsetWidth,g=c[0].offsetHeight,b=="top"&&g!=e&&(a.top=a.top+e-g,i=!0),b=="bottom"||b=="top"?(h=0,a.left<0&&(h=a.left*-2,a.left=0,c.offset(a),f=c[0].offsetWidth,g=c[0].offsetHeight),this.replaceArrow(h-d+f,f,"left")):this.replaceArrow(g-e,g,"top"),i&&c.offset(a)},replaceArrow:function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},setContent:function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},hide:function(){function e(){var b=setTimeout(function(){c.off(a.support.transition.end).detach()},500);c.one(a.support.transition.end,function(){clearTimeout(b),c.detach()})}var b=this,c=this.tip(),d=a.Event("hide");this.$element.trigger(d);if(d.isDefaultPrevented())return;return c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?e():c.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var b=this.$element[0];return a.extend({},typeof b.getBoundingClientRect=="function"?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},getTitle:function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title),a},tip:function(){return this.$tip=this.$tip||a(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(b){var c=b?a(b.currentTarget)[this.type](this._options).data(this.type):this;c.tip().hasClass("in")?c.hide():c.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("tooltip"),f=typeof c=="object"&&c;e||d.data("tooltip",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery)}.call(a),b})}(this),function(a){var b;c("bootstrap/bootstrap-popover",["bootstrap/bootstrap-transition","bootstrap/bootstrap-tooltip"],function(){return function(){!function(a){var b=function(a,b){this.init("popover",a,b)};b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype,{constructor:b,setContent:function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var a,b=this.$element,c=this.options;return a=(typeof c.content=="function"?c.content.call(b[0]):c.content)||b.attr("data-content"),a},tip:function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("popover"),f=typeof c=="object"&&c;e||d.data("popover",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.defaults=a.extend({},a.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery)}.call(a),b})}(this),function(a){var b;c("bootstrap/bootstrap-scrollspy",["bootstrap/bootstrap-transition"],function(){return function(){!function(a){function b(b,c){var d=a.proxy(this.process,this),e=a(b).is("body")?a(window):a(b),f;this.options=a.extend({},a.fn.scrollspy.defaults,c),this.$scrollElement=e.on("scroll.scroll-spy.data-api",d),this.selector=(this.options.target||(f=a(b).attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=a("body"),this.refresh(),this.process()}b.prototype={constructor:b,refresh:function(){var b=this,c;this.offsets=a([]),this.targets=a([]),c=this.$body.find(this.selector).map(function(){var c=a(this),d=c.data("target")||c.attr("href"),e=/^#\w/.test(d)&&a(d);return e&&e.length&&[[e.position().top+(!a.isWindow(b.$scrollElement.get(0))&&b.$scrollElement.scrollTop()),d]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},process:function(){var a=this.$scrollElement.scrollTop()+this.options.offset,b=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,c=b-this.$scrollElement.height(),d=this.offsets,e=this.targets,f=this.activeTarget,g;if(a>=c)return f!=(g=e.last()[0])&&this.activate(g);for(g=d.length;g--;)f!=e[g]&&a>=d[g]&&(!d[g+1]||a<=d[g+1])&&this.activate(e[g])},activate:function(b){var c,d;this.activeTarget=b,a(this.selector).parent(".active").removeClass("active"),d=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',c=a(d).parent("li").addClass("active"),c.parent(".dropdown-menu").length&&(c=c.closest("li.dropdown").addClass("active")),c.trigger("activate")}};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("scrollspy"),f=typeof c=="object"&&c;e||d.data("scrollspy",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.defaults={offset:10},a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery)}.call(a),b})}(this),function(a){var b;c("bootstrap/bootstrap-tab",["bootstrap/bootstrap-transition"],function(){return function(){!function(a){var b=function(b){this.element=a(b)};b.prototype={constructor:b,show:function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target"),e,f,g;d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));if(b.parent("li").hasClass("active"))return;e=c.find(".active:last a")[0],g=a.Event("show",{relatedTarget:e}),b.trigger(g);if(g.isDefaultPrevented())return;f=a(d),this.activate(b.parent("li"),c),this.activate(f,f.parent(),function(){b.trigger({type:"shown",relatedTarget:e})})},activate:function(b,c,d){function g(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),f?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var e=c.find("> .active"),f=d&&a.support.transition&&e.hasClass("fade");f?e.one(a.support.transition.end,g):g(),e.removeClass("in")}};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("tab");e||d.data("tab",e=new b(this)),typeof c=="string"&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery)}.call(a),b})}(this),function(a){var b;c("bootstrap/bootstrap-typeahead",["bootstrap/bootstrap-transition"],function(){return function(){!function(a){var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.typeahead.defaults,c),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=a(this.options.menu),this.shown=!1,this.listen()};b.prototype={constructor:b,select:function(){var a=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(a)).change(),this.hide()},updater:function(a){return a},show:function(){var b=a.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:b.top+b.height,left:b.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(b){var c;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(c=a.isFunction(this.source)?this.source(this.query,a.proxy(this.process,this)):this.source,c?this.process(c):this)},process:function(b){var c=this;return b=a.grep(b,function(a){return c.matcher(a)}),b=this.sorter(b),b.length?this.render(b.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(a){return~a.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(a){var b=[],c=[],d=[],e;while(e=a.shift())e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?c.push(e):d.push(e):b.push(e);return b.concat(c,d)},highlighter:function(a){var b=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return a.replace(new RegExp("("+b+")","ig"),function(a,b){return"<strong>"+b+"</strong>"})},render:function(b){var c=this;return b=a(b).map(function(b,d){return b=a(c.options.item).attr("data-value",d),b.find("a").html(c.highlighter(d)),b[0]}),b.first().addClass("active"),this.$menu.html(b),this},next:function(b){var c=this.$menu.find(".active").removeClass("active"),d=c.next();d.length||(d=a(this.$menu.find("li")[0])),d.addClass("active")},prev:function(a){var b=this.$menu.find(".active").removeClass("active"),c=b.prev();c.length||(c=this.$menu.find("li").last()),c.addClass("active")},listen:function(){this.$element.on("focus",a.proxy(this.focus,this)).on("blur",a.proxy(this.blur,this)).on("keypress",a.proxy(this.keypress,this)).on("keyup",a.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",a.proxy(this.keydown,this)),this.$menu.on("click",a.proxy(this.click,this)).on("mouseenter","li",a.proxy(this.mouseenter,this)).on("mouseleave","li",a.proxy(this.mouseleave,this))},eventSupported:function(a){var b=a in this.$element;return b||(this.$element.setAttribute(a,"return;"),b=typeof this.$element[a]=="function"),b},move:function(a){if(!this.shown)return;switch(a.keyCode){case 9:case 13:case 27:a.preventDefault();break;case 38:a.preventDefault(),this.prev();break;case 40:a.preventDefault(),this.next()}a.stopPropagation()},keydown:function(b){this.suppressKeyPressRepeat=~a.inArray(b.keyCode,[40,38,9,13,27]),this.move(b)},keypress:function(a){if(this.suppressKeyPressRepeat)return;this.move(a)},keyup:function(a){switch(a.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}a.stopPropagation(),a.preventDefault()},focus:function(a){this.focused=!0},blur:function(a){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(a){a.stopPropagation(),a.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(b){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),a(b.currentTarget).addClass("active")},mouseleave:function(a){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var c=a.fn.typeahead;a.fn.typeahead=function(c){return this.each(function(){var d=a(this),e=d.data("typeahead"),f=typeof c=="object"&&c;e||d.data("typeahead",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},a.fn.typeahead.Constructor=b,a.fn.typeahead.noConflict=function(){return a.fn.typeahead=c,this},a(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(b){var c=a(this);if(c.data("typeahead"))return;c.typeahead(c.data())})}(window.jQuery)}.call(a),b})}(this),c("fuelux/checkbox",["require","jquery"],function(a){var b=a("jquery"),c=function(a,c){this.$element=b(a),this.options=b.extend({},b.fn.checkbox.defaults,c),this.$label=this.$element.parent(),this.$icon=this.$label.find("i"),this.$chk=this.$label.find("input[type=checkbox]"),this.setState(this.$chk),this.$chk.on("change",b.proxy(this.itemchecked,this))};c.prototype={constructor:c,setState:function(a){var b=a.is(":checked"),c=a.is(":disabled");this.$icon.removeClass("checked").removeClass("disabled"),b===!0&&this.$icon.addClass("checked"),c===!0&&this.$icon.addClass("disabled")},enable:function(){this.$chk.attr("disabled",!1),this.$icon.removeClass("disabled")},disable:function(){this.$chk.attr("disabled",!0),this.$icon.addClass("disabled")},toggle:function(){this.$chk.click()},itemchecked:function(a){var c=b(a.target);this.setState(c)}},b.fn.checkbox=function(a,d){var e,f=this.each(function(){var f=b(this),g=f.data("checkbox"),h=typeof a=="object"&&a;g||f.data("checkbox",g=new c(this,h)),typeof a=="string"&&(e=g[a](d))});return e===undefined?f:e},b.fn.checkbox.defaults={},b.fn.checkbox.Constructor=c,b(function(){b(window).on("load",function(){b(".checkbox-custom > input[type=checkbox]").each(function(){var a=b(this);if(a.data("checkbox"))return;a.checkbox(a.data())})})})}),c("fuelux/util",["require","jquery"],function(a){function c(a,c){return(a.textContent||a.innerText||b(a).text()||"").toLowerCase()===(c||"").toLowerCase()}var b=a("jquery");b.expr[":"].fuelTextExactCI=b.expr.createPseudo?b.expr.createPseudo(function(a){return function(b){return c(b,a)}}):function(a,b,d){return c(a,d[3])}}),c("fuelux/combobox",["require","jquery","./util"],function(a){var b=a("jquery");a("./util");var c=function(a,c){this.$element=b(a),this.options=b.extend({},b.fn.combobox.defaults,c),this.$element.on("click","a",b.proxy(this.itemclicked,this)),this.$element.on("change","input",b.proxy(this.inputchanged,this)),this.$input=this.$element.find("input"),this.$button=this.$element.find(".btn"),this.setDefaultSelection()};c.prototype={constructor:c,selectedItem:function(){var a=this.$selectedItem,c={};if(a){var d=this.$selectedItem.text();c=b.extend({text:d},this.$selectedItem.data())}else c={text:this.$input.val()};return c},selectByText:function(a){var b="li:fuelTextExactCI("+a+")";this.selectBySelector(b)},selectByValue:function(a){var b='li[data-value="'+a+'"]';this.selectBySelector(b)},selectByIndex:function(a){var b="li:eq("+a+")";this.selectBySelector(b)},selectBySelector:function(a){var b=this.$element.find(a);typeof b[0]!="undefined"?(this.$selectedItem=b,this.$input.val(this.$selectedItem.text())):this.$selectedItem=null},setDefaultSelection:function(){var a="li[data-selected=true]:first",b=this.$element.find(a);b.length>0&&(this.selectBySelector(a),b.removeData("selected"),b.removeAttr("data-selected"))},enable:function(){this.$input.removeAttr("disabled"),this.$button.removeClass("disabled")},disable:function(){this.$input.attr("disabled",!0),this.$button.addClass("disabled")},itemclicked:function(a){this.$selectedItem=b(a.target).parent(),this.$input.val(this.$selectedItem.text()).trigger("change",{synthetic:!0});var c=this.selectedItem();this.$element.trigger("changed",c),a.preventDefault()},inputchanged:function(a,c){if(c&&c.synthetic)return;var d=b(a.target).val();this.selectByText(d);var e=this.selectedItem();e.text.length===0&&(e={text:d}),this.$element.trigger("changed",e)}},b.fn.combobox=function(a,d){var e,f=this.each(function(){var f=b(this),g=f.data("combobox"),h=typeof a=="object"&&a;g||f.data("combobox",g=new c(this,h)),typeof a=="string"&&(e=g[a](d))});return e===undefined?f:e},b.fn.combobox.defaults={},b.fn.combobox.Constructor=c,b(function(){b(window).on("load",function(){b(".combobox").each(function(){var a=b(this);if(a.data("combobox"))return;a.combobox(a.data())})}),b("body").on("mousedown.combobox.data-api",".combobox",function(a){var c=b(this);if(c.data("combobox"))return;c.combobox(c.data())})})}),c("fuelux/datagrid",["require","jquery"],function(a){var b=a("jquery"),c=22,d=function(a,c){this.$element=b(a),this.$thead=this.$element.find("thead"),this.$tfoot=this.$element.find("tfoot"),this.$footer=this.$element.find("tfoot th"),this.$footerchildren=this.$footer.children().show().css("visibility","hidden"),this.$topheader=this.$element.find("thead th"),this.$searchcontrol=this.$element.find(".datagrid-search"),this.$filtercontrol=this.$element.find(".filter"),this.$pagesize=this.$element.find(".grid-pagesize"),this.$pageinput=this.$element.find(".grid-pager input"),this.$pagedropdown=this.$element.find(".grid-pager .dropdown-menu"),this.$prevpagebtn=this.$element.find(".grid-prevpage"),this.$nextpagebtn=this.$element.find(".grid-nextpage"),this.$pageslabel=this.$element.find(".grid-pages"),this.$countlabel=this.$element.find(".grid-count"),this.$startlabel=this.$element.find(".grid-start"),this.$endlabel=this.$element.find(".grid-end"),this.$tbody=b("<tbody>").insertAfter(this.$thead),this.$colheader=b("<tr>").appendTo(this.$thead),this.options=b.extend(!0,{},b.fn.datagrid.defaults,c),this.$pagesize.hasClass("select")?this.options.dataOptions.pageSize=parseInt(this.$pagesize.select("selectedItem").value,10):this.options.dataOptions.pageSize=parseInt(this.$pagesize.val(),10),this.$searchcontrol.length<=0&&(this.$searchcontrol=this.$element.find(".search")),this.columns=this.options.dataSource.columns(),this.$nextpagebtn.on("click",b.proxy(this.next,this)),this.$prevpagebtn.on("click",b.proxy(this.previous,this)),this.$searchcontrol.on("searched cleared",b.proxy(this.searchChanged,this)),this.$filtercontrol.on("changed",b.proxy(this.filterChanged,this)),this.$colheader.on("click","th",b.proxy(this.headerClicked,this)),this.$pagesize.hasClass("select")?this.$pagesize.on("changed",b.proxy(this.pagesizeChanged,this)):this.$pagesize.on("change",b.proxy(this.pagesizeChanged,this)),this.$pageinput.on("change",b.proxy(this.pageChanged,this)),this.renderColumns(),this.options.stretchHeight&&this.initStretchHeight(),this.renderData()};d.prototype={constructor:d,renderColumns:function(){var a=this;this.$footer.attr("colspan",this.columns.length),this.$topheader.attr("colspan",this.columns.length);var c="";b.each(this.columns,function(a,b){c+='<th data-property="'+b.property+'"',b.sortable&&(c+=' class="sortable"'),c+=">"+b.label+"</th>"}),a.$colheader.append(c)},updateColumns:function(a,b){this._updateColumns(this.$colheader,a,b),this.$sizingHeader&&this._updateColumns(this.$sizingHeader,this.$sizingHeader.find("th").eq(a.index()),b)},_updateColumns:function(a,c,d){var e=d==="asc"?"icon-chevron-up":"icon-chevron-down";a.find("i.datagrid-sort").remove(),a.find("th").removeClass("sorted"),b("<i>").addClass(e+" datagrid-sort").appendTo(c),c.addClass("sorted")},updatePageDropdown:function(a){var b="";for(var c=1;c<=a.pages;c++)b+="<li><a>"+c+"</a></li>";this.$pagedropdown.html(b)},updatePageButtons:function(a){a.page===1?this.$prevpagebtn.attr("disabled","disabled"):this.$prevpagebtn.removeAttr("disabled"),a.page===a.pages?this.$nextpagebtn.attr("disabled","disabled"):this.$nextpagebtn.removeAttr("disabled")},renderData:function(){var a=this;this.$tbody.html(this.placeholderRowHTML(this.options.loadingHTML)),this.options.dataSource.data(this.options.dataOptions,function(c){var d=c.count===1?a.options.itemText:a.options.itemsText,e="";a.$footerchildren.css("visibility",function(){return c.count>0?"visible":"hidden"}),a.$pageinput.val(c.page),a.$pageslabel.text(c.pages),a.$countlabel.text(c.count+" "+d),a.$startlabel.text(c.start),a.$endlabel.text(c.end),a.updatePageDropdown(c),a.updatePageButtons(c),b.each(c.data,function(c,d){e+="<tr>",b.each(a.columns,function(a,b){e+="<td>"+d[b.property]+"</td>"}),e+="</tr>"}),e||(e=a.placeholderRowHTML("0 "+a.options.itemsText)),a.$tbody.html(e),a.stretchHeight(),a.$element.trigger("loaded")})},placeholderRowHTML:function(a){return'<tr><td style="text-align:center;padding:20px;border-bottom:none;" colspan="'+this.columns.length+'">'+a+"</td></tr>"},headerClicked:function(a){var c=b(a.target);if(!c.hasClass("sortable"))return;var d=this.options.dataOptions.sortDirection,e=this.options.dataOptions.sortProperty,f=c.data("property");e===f?this.options.dataOptions.sortDirection=d==="asc"?"desc":"asc":(this.options.dataOptions.sortDirection="asc",this.options.dataOptions.sortProperty=f),this.options.dataOptions.pageIndex=0,this.updateColumns(c,this.options.dataOptions.sortDirection),this.renderData()},pagesizeChanged:function(a,c){c?this.options.dataOptions.pageSize=parseInt(c.value,10):this.options.dataOptions.pageSize=parseInt(b(a.target).val(),10),this.options.dataOptions.pageIndex=0,this.renderData()},pageChanged:function(a){var c=parseInt(b(a.target).val(),10);c=isNaN(c)?1:c;var d=this.$pageslabel.text();this.options.dataOptions.pageIndex=c>d?d-1:c-1,this.renderData()},searchChanged:function(a,b){this.options.dataOptions.search=b,this.options.dataOptions.pageIndex=0,this.renderData()},filterChanged:function(a,b){this.options.dataOptions.filter=b,this.options.dataOptions.pageIndex=0,this.renderData()},previous:function(){this.$nextpagebtn.attr("disabled","disabled"),this.$prevpagebtn.attr("disabled","disabled"),this.options.dataOptions.pageIndex--,this.renderData()},next:function(){this.$nextpagebtn.attr("disabled","disabled"),this.$prevpagebtn.attr("disabled","disabled"),this.options.dataOptions.pageIndex++,this.renderData()},reload:function(){this.options.dataOptions.pageIndex=0,this.renderData()},initStretchHeight:function(){this.$gridContainer=this.$element.parent(),this.$element.wrap('<div class="datagrid-stretch-wrapper">'),this.$stretchWrapper=this.$element.parent(),this.$headerTable=b("<table>").attr("class",this.$element.attr("class")),this.$footerTable=this.$headerTable.clone(),this.$headerTable.prependTo(this.$gridContainer).addClass("datagrid-stretch-header"),this.$thead.detach().appendTo(this.$headerTable),this.$sizingHeader=this.$thead.clone(),this.$sizingHeader.find("tr:first").remove(),this.$footerTable.appendTo(this.$gridContainer).addClass("datagrid-stretch-footer"),this.$tfoot.detach().appendTo(this.$footerTable)},stretchHeight:function(){if(!this.$gridContainer)return;this.setColumnWidths();var a=this.$gridContainer.height(),b=this.$headerTable.outerHeight(),c=this.$footerTable.outerHeight(),d=b+c;this.$stretchWrapper.height(a-d)},setColumnWidths:function(){function e(e,f){if(e===d-1)return;var g=b(f),h=a.eq(e),i=h.width();h.hasClass("sorted")&&g.prop("tagName")==="TD"&&(i=i+c),g.width(i)}if(!this.$sizingHeader)return;this.$element.prepend(this.$sizingHeader);var a=this.$sizingHeader.find("th"),d=a.length;this.$colheader.find("th").each(e),this.$tbody.find("tr:first > td").each(e),this.$sizingHeader.detach()}},b.fn.datagrid=function(a){return this.each(function(){var c=b(this),e=c.data("datagrid"),f=typeof a=="object"&&a;e||c.data("datagrid",e=new d(this,f)),typeof a=="string"&&e[a]()})},b.fn.datagrid.defaults={dataOptions:{pageIndex:0,pageSize:10},loadingHTML:'<div class="progress progress-striped active" style="width:50%;margin:auto;"><div class="bar" style="width:100%;"></div></div>',itemsText:"items",itemText:"item"},b.fn.datagrid.Constructor=d}),c("fuelux/pillbox",["require","jquery"],function(a){var b=a("jquery"),c=function(a,c){this.$element=b(a),this.options=b.extend({},b.fn.pillbox.defaults,c),this.$element.on("click","li",b.proxy(this.itemclicked,this))};c.prototype={constructor:c,items:function(){return this.$element.find("li").map(function(){var a=b(this);return b.extend({text:a.text()},a.data())}).get()},itemclicked:function(a){b(a.currentTarget).remove(),a.preventDefault()}},b.fn.pillbox=function(a){var d,e=this.each(function(){var e=b(this),f=e.data("pillbox"),g=typeof a=="object"&&a;f||e.data("pillbox",f=new c(this,g)),typeof a=="string"&&(d=f[a]())});return d===undefined?e:d},b.fn.pillbox.defaults={},b.fn.pillbox.Constructor=c,b(function(){b("body").on("mousedown.pillbox.data-api",".pillbox",function(a){var c=b(this);if(c.data("pillbox"))return;c.pillbox(c.data())})})}),c("fuelux/radio",["require","jquery"],function(a){var b=a("jquery"),c=function(a,c){this.$element=b(a),this.options=b.extend({},b.fn.radio.defaults,c),this.$label=this.$element.parent(),this.$icon=this.$label.find("i"),this.$radio=this.$label.find("input[type=radio]"),this.groupName=this.$radio.attr("name"),this.setState(this.$radio),this.$radio.on("change",b.proxy(this.itemchecked,this))};c.prototype={constructor:c,setState:function(a,b){var c=a.is(":checked"),d=a.is(":disabled");c===!0&&this.$icon.addClass("checked"),d===!0&&this.$icon.addClass("disabled")},resetGroup:function(){b("input[name="+this.groupName+"]").next().removeClass("checked")},enable:function(){this.$radio.attr("disabled",!1),this.$icon.removeClass("disabled")},disable:function(){this.$radio.attr("disabled",!0),this.$icon.addClass("disabled")},itemchecked:function(a){var c=b(a.target);this.resetGroup(),this.setState(c)}},b.fn.radio=function(a,d){var e,f=this.each(function(){var f=b(this),g=f.data("radio"),h=typeof a=="object"&&a;g||f.data("radio",g=new c(this,h)),typeof a=="string"&&(e=g[a](d))});return e===undefined?f:e},b.fn.radio.defaults={},b.fn.radio.Constructor=c,b(function(){b(window).on("load",function(){b(".radio-custom > input[type=radio]").each(function(){var a=b(this);if(a.data("radio"))return;a.radio(a.data())})})})}),c("fuelux/search",["require","jquery"],function(a){var b=a("jquery"),c=function(a,c){this.$element=b(a),this.options=b.extend({},b.fn.search.defaults,c),this.$button=this.$element.find("button").on("click",b.proxy(this.buttonclicked,this)),this.$input=this.$element.find("input").on("keydown",b.proxy(this.keypress,this)).on("keyup",b.proxy(this.keypressed,this)),this.$icon=this.$element.find("i"),this.activeSearch=""};c.prototype={constructor:c,search:function(a){this.$icon.attr("class","icon-remove"),this.activeSearch=a,this.$element.trigger("searched",a)},clear:function(){this.$icon.attr("class","icon-search"),this.activeSearch="",this.$input.val(""),this.$element.trigger("cleared")},action:function(){var a=this.$input.val(),b=a===""||a===this.activeSearch;this.activeSearch&&b?this.clear():a&&this.search(a)},buttonclicked:function(a){a.preventDefault();if(b(a.currentTarget).is(".disabled, :disabled"))return;this.action()},keypress:function(a){a.which===13&&a.preventDefault()},keypressed:function(a){var b,c;a.which===13?(a.preventDefault(),this.action()):(b=this.$input.val(),c=b&&b===this.activeSearch,this.$icon.attr("class",c?"icon-remove":"icon-search"))},disable:function(){this.$input.attr("disabled","disabled"),this.$button.addClass("disabled")},enable:function(){this.$input.removeAttr("disabled"),this.$button.removeClass("disabled")}},b.fn.search=function(a){return this.each(function(){var d=b(this),e=d.data("search"),f=typeof a=="object"&&a;e||d.data("search",e=new c(this,f)),typeof a=="string"&&e[a]()})},b.fn.search.defaults={},b.fn.search.Constructor=c,b(function(){b("body").on("mousedown.search.data-api",".search",function(){var a=b(this);if(a.data("search"))return;a.search(a.data())})})}),c("fuelux/spinner",["require","jquery"],function(a){var b=a("jquery"),c=function(a,c){this.$element=b(a),this.options=b.extend({},b.fn.spinner.defaults,c),this.$input=this.$element.find(".spinner-input"),this.$element.on("keyup",this.$input,b.proxy(this.change,this)),this.options.hold?(this.$element.on("mousedown",".spinner-up",b.proxy(function(){this.startSpin(!0)},this)),this.$element.on("mouseup",".spinner-up, .spinner-down",b.proxy(this.stopSpin,this)),this.$element.on("mouseout",".spinner-up, .spinner-down",b.proxy(this.stopSpin,this)),this.$element.on("mousedown",".spinner-down",b.proxy(function(){this.startSpin(!1)},this))):(this.$element.on("click",".spinner-up",b.proxy(function(){this.step(!0)},this)),this.$element.on("click",".spinner-down",b.proxy(function(){this.step(!1)},this))),this.switches={count:1,enabled:!0},this.options.speed==="medium"?this.switches.speed=300:this.options.speed==="fast"?this.switches.speed=100:this.switches.speed=500,this.lastValue=null,this.render(),this.options.disabled&&this.disable()};c.prototype={constructor:c,render:function(){this.$input.val(this.options.value),this.$input.attr("maxlength",(this.options.max+"").split("").length)},change:function(){var a=this.$input.val();a/1?this.options.value=a/1:(a=a.replace(/[^0-9]/g,""),this.$input.val(a),this.options.value=a/1),this.triggerChangedEvent()},stopSpin:function(){clearTimeout(this.switches.timeout),this.switches.count=1,this.triggerChangedEvent()},triggerChangedEvent:function(){var a=this.value();if(a===this.lastValue)return;this.lastValue=a,this.$element.trigger("changed",a),this.$element.trigger("change")},startSpin:function(a){if(!this.options.disabled){var c=this.switches.count;c===1?(this.step(a),c=1):c<3?c=1.5:c<8?c=2.5:c=4,this.switches.timeout=setTimeout(b.proxy(function(){this.iterator(a)},this),this.switches.speed/c),this.switches.count++}},iterator:function(a){this.step(a),this.startSpin(a)},step:function(a){var b=this.options.value,c=a?this.options.max:this.options.min;if(a?b<c:b>c){var d=b+(a?1:-1)*this.options.step;(a?d>c:d<c)?this.value(c):this.value(d)}},value:function(a){return!isNaN(parseFloat(a))&&isFinite(a)?(a=parseFloat(a),this.options.value=a,this.$input.val(a),this):this.options.value},disable:function(){this.options.disabled=!0,this.$input.attr("disabled",""),this.$element.find("button").addClass("disabled")},enable:function(){this.options.disabled=!1,this.$input.removeAttr("disabled"),this.$element.find("button").removeClass("disabled")}},b.fn.spinner=function(a,d){var e,f=this.each(function(){var f=b(this),g=f.data("spinner"),h=typeof a=="object"&&a;g||f.data("spinner",g=new c(this,h)),typeof a=="string"&&(e=g[a](d))});return e===undefined?f:e},b.fn.spinner.defaults={value:1,min:1,max:999,step:1,hold:!0,speed:"medium",disabled:!1},b.fn.spinner.Constructor=c,b(function(){b("body").on("mousedown.spinner.data-api",".spinner",function(a){var c=b(this);if(c.data("spinner"))return;c.spinner(c.data())})})}),c("fuelux/select",["require","jquery","./util"],function(a){var b=a("jquery");a("./util");var c=function(a,c){this.$element=b(a),this.options=b.extend({},b.fn.select.defaults,c),this.$element.on("click","a",b.proxy(this.itemclicked,this)),this.$button=this.$element.find(".btn"),this.$label=this.$element.find(".dropdown-label"),this.setDefaultSelection(),c.resize==="auto"&&this.resize()};c.prototype={constructor:c,itemclicked:function(a){this.$selectedItem=b(a.target).parent(),this.$label.text(this.$selectedItem.text());var c=this.selectedItem();this.$element.trigger("changed",c),a.preventDefault()},resize:function(){var a=b("#selectTextSize")[0];a||b("<div/>").attr({id:"selectTextSize"}).appendTo("body");var c=0,d=0;this.$element.find("a").each(function(){var a=b(this),e=a.text(),f=b("#selectTextSize");f.text(e),d=f.outerWidth(),d>c&&(c=d)}),this.$label.width(c)},selectedItem:function(){var a=this.$selectedItem.text();return b.extend({text:a},this.$selectedItem.data())},selectByText:function(a){var b="li a:fuelTextExactCI("+a+")";this.selectBySelector(b)},selectByValue:function(a){var b='li[data-value="'+a+'"]';this.selectBySelector(b)},selectByIndex:function(a){var b="li:eq("+a+")";this.selectBySelector(b)},selectBySelector:function(a){var b=this.$element.find(a);this.$selectedItem=b,this.$label.text(this.$selectedItem.text())},setDefaultSelection:function(){var a="li[data-selected=true]:first",b=this.$element.find(a);b.length===0?this.selectByIndex(0):(this.selectBySelector(a),b.removeData("selected"),b.removeAttr("data-selected"))},enable:function(){this.$button.removeClass("disabled")},disable:function(){this.$button.addClass("disabled")}},b.fn.select=function(a,d){var e,f=this.each(function(){var f=b(this),g=f.data("select"),h=typeof a=="object"&&a;g||f.data("select",g=new c(this,h)),typeof a=="string"&&(e=g[a](d))});return e===undefined?f:e},b.fn.select.defaults={},b.fn.select.Constructor=c,b(function(){b(window).on("load",function(){b(".select").each(function(){var a=b(this);if(a.data("select"))return;a.select(a.data())})}),b("body").on("mousedown.select.data-api",".select",function(a){var c=b(this);if(c.data("select"))return;c.select(c.data())})})}),c("fuelux/tree",["require","jquery"],function(a){var b=a("jquery"),c=function(a,c){this.$element=b(a),this.options=b.extend({},b.fn.tree.defaults,c),this.$element.on("click",".tree-item",b.proxy(function(a){this.selectItem(a.currentTarget)},this)),this.$element.on("click",".tree-folder-header",b.proxy(function(a){this.selectFolder(a.currentTarget)},this)),this.render()};c.prototype={constructor:c,render:function(){this.populate(this.$element)},populate:function(a){var c=this,d=a.parent().find(".tree-loader:eq(0)");d.show(),this.options.dataSource.data(a.data(),function(e){d.hide(),b.each(e.data,function(b,d){var e;d.type==="folder"?(e=c.$element.find(".tree-folder:eq(0)").clone().show(),e.find(".tree-folder-name").html(d.name),e.find(".tree-loader").html(c.options.loadingHTML),e.find(".tree-folder-header").data(d)):d.type==="item"&&(e=c.$element.find(".tree-item:eq(0)").clone().show(),e.find(".tree-item-name").html(d.name),e.data(d)),a.hasClass("tree-folder-header")?a.parent().find(".tree-folder-content:eq(0)").append(e):a.append(e)}),c.$element.trigger("loaded")})},selectItem:function(a){var c=b(a),d=this.$element.find(".tree-selected"),e=[];this.options.multiSelect?b.each(d,function(a,d){var f=b(d);f[0]!==c[0]&&e.push(b(d).data())}):d[0]!==c[0]&&(d.removeClass("tree-selected").find("i").removeClass("icon-ok").addClass("tree-dot"),e.push(c.data())),c.hasClass("tree-selected")?(c.removeClass("tree-selected"),c.find("i").removeClass("icon-ok").addClass("tree-dot")):(c.addClass("tree-selected"),c.find("i").removeClass("tree-dot").addClass("icon-ok"),this.options.multiSelect&&e.push(c.data())),e.length&&this.$element.trigger("selected",{info:e})},selectFolder:function(a){var c=b(a),d=c.parent();c.find(".icon-folder-close").length?(d.find(".tree-folder-content").children().length?d.find(".tree-folder-content:eq(0)").show():this.populate(c),d.find(".icon-folder-close:eq(0)").removeClass("icon-folder-close").addClass("icon-folder-open"),this.$element.trigger("opened",c.data())):(this.options.cacheItems?d.find(".tree-folder-content:eq(0)").hide():d.find(".tree-folder-content:eq(0)").empty(),d.find(".icon-folder-open:eq(0)").removeClass("icon-folder-open").addClass("icon-folder-close"),this.$element.trigger("closed",c.data()))},selectedItems:function(){var a=this.$element.find(".tree-selected"),c=[];return b.each(a,function(a,d){c.push(b(d).data())}),c}},b.fn.tree=function(a,d){var e,f=this.each(function(){var f=b(this),g=f.data("tree"),h=typeof a=="object"&&a;g||f.data("tree",g=new c(this,h)),typeof a=="string"&&(e=g[a](d))});return e===undefined?f:e},b.fn.tree.defaults={multiSelect:!1,loadingHTML:"<div>Loading...</div>",cacheItems:!0},b.fn.tree.Constructor=c}),c("fuelux/wizard",["require","jquery"],function(a){var b=a("jquery"),c=function(a,c){var d;this.$element=b(a),this.options=b.extend({},b.fn.wizard.defaults,c),this.currentStep=1,this.numSteps=this.$element.find("li").length,this.$prevBtn=this.$element.find("button.btn-prev"),this.$nextBtn=this.$element.find("button.btn-next"),d=this.$nextBtn.children().detach(),this.nextText=b.trim(this.$nextBtn.text()),this.$nextBtn.append(d),this.$prevBtn.on("click",b.proxy(this.previous,this)),this.$nextBtn.on("click",b.proxy(this.next,this)),this.$element.on("click","li.complete",b.proxy(this.stepclicked,this))};c.prototype={constructor:c,setState:function(){var a=this.currentStep>1,c=this.currentStep===1,d=this.currentStep===this.numSteps;this.$prevBtn.attr("disabled",c===!0||a===!1);var e=this.$nextBtn.data();if(e&&e.last){this.lastText=e.last;if(typeof this.lastText!="undefined"){var f=d!==!0?this.nextText:this.lastText,g=this.$nextBtn.children().detach();this.$nextBtn.text(f).append(g)}}var h=this.$element.find("li");h.removeClass("active").removeClass("complete"),h.find("span.badge").removeClass("badge-info").removeClass("badge-success");var i="li:lt("+(this.currentStep-1)+")",j=this.$element.find(i);j.addClass("complete"),j.find("span.badge").addClass("badge-success");var k="li:eq("+(this.currentStep-1)+")",l=this.$element.find(k);l.addClass("active"),l.find("span.badge").addClass("badge-info");var m=l.data().target;b(".step-pane").removeClass("active"),b(m).addClass("active"),this.$element.trigger("changed")},stepclicked:function(a){var c=b(a.currentTarget),d=b(".steps li").index(c),e=b.Event("stepclick");this.$element.trigger(e,{step:d+1});if(e.isDefaultPrevented())return;this.currentStep=d+1,this.setState()},previous:function(){var a=this.currentStep>1;if(a){var c=b.Event("change");this.$element.trigger(c,{step:this.currentStep,direction:"previous"});if(c.isDefaultPrevented())return;this.currentStep-=1,this.setState()}},next:function(){var a=this.currentStep+1<=this.numSteps,c=this.currentStep===this.numSteps;if(a){var d=b.Event("change");this.$element.trigger(d,{step:this.currentStep,direction:"next"});if(d.isDefaultPrevented())return;this.currentStep+=1,this.setState()}else c&&this.$element.trigger("finished")},selectedItem:function(a){return{step:this.currentStep}}},b.fn.wizard=function(a,d){var e,f=this.each(function(){var f=b(this),g=f.data("wizard"),h=typeof a=="object"&&a;g||f.data("wizard",g=new c(this,h)),typeof a=="string"&&(e=g[a](d))});return e===undefined?f:e},b.fn.wizard.defaults={},b.fn.wizard.Constructor=c,b(function(){b("body").on("mousedown.wizard.data-api",".wizard",function(){var a=b(this);if(a.data("wizard"))return;a.wizard(a.data())})})}),c("fuelux/all",["require","jquery","bootstrap/bootstrap-affix","bootstrap/bootstrap-alert","bootstrap/bootstrap-button","bootstrap/bootstrap-carousel","bootstrap/bootstrap-collapse","bootstrap/bootstrap-dropdown","bootstrap/bootstrap-modal","bootstrap/bootstrap-popover","bootstrap/bootstrap-scrollspy","bootstrap/bootstrap-tab","bootstrap/bootstrap-tooltip","bootstrap/bootstrap-transition","bootstrap/bootstrap-typeahead","fuelux/checkbox","fuelux/combobox","fuelux/datagrid","fuelux/pillbox","fuelux/radio","fuelux/search","fuelux/spinner","fuelux/select","fuelux/tree","fuelux/wizard"],function(a){a("jquery"),a("bootstrap/bootstrap-affix"),a("bootstrap/bootstrap-alert"),a("bootstrap/bootstrap-button"),a("bootstrap/bootstrap-carousel"),a("bootstrap/bootstrap-collapse"),a("bootstrap/bootstrap-dropdown"),a("bootstrap/bootstrap-modal"),a("bootstrap/bootstrap-popover"),a("bootstrap/bootstrap-scrollspy"),a("bootstrap/bootstrap-tab"),a("bootstrap/bootstrap-tooltip"),a("bootstrap/bootstrap-transition"),a("bootstrap/bootstrap-typeahead"),a("fuelux/checkbox"),a("fuelux/combobox"),a("fuelux/datagrid"),a("fuelux/pillbox"),a("fuelux/radio"),a("fuelux/search"),a("fuelux/spinner"),a("fuelux/select"),a("fuelux/tree"),a("fuelux/wizard")}),c("jquery",[],function(){return jQuery}),c("fuelux/loader",["fuelux/all"],function(){}),b("fuelux/loader")})();
/*
 jquery.fullscreen 1.1.5
 https://github.com/kayahr/jquery-fullscreen-plugin
 Copyright (C) 2012-2013 Klaus Reimer <k@ailis.de>
 Licensed under the MIT license
 (See http://www.opensource.org/licenses/mit-license)
*/

function d(c){var b,a;if(!this.length)return this;b=this[0];b.ownerDocument?a=b.ownerDocument:(a=b,b=a.documentElement);if(null==c){if(!a.exitFullscreen&&!a.webkitExitFullscreen&&!a.webkitCancelFullScreen&&!a.msExitFullscreen&&!a.mozCancelFullScreen)return null;c=!!a.fullscreenElement||!!a.msFullscreenElement||!!a.webkitIsFullScreen||!!a.mozFullScreen;return!c?c:a.fullscreenElement||a.webkitFullscreenElement||a.webkitCurrentFullScreenElement||a.msFullscreenElement||a.mozFullScreenElement||c}c?(c=
b.requestFullscreen||b.webkitRequestFullscreen||b.webkitRequestFullScreen||b.msRequestFullscreen||b.mozRequestFullScreen)&&c.call(b):(c=a.exitFullscreen||a.webkitExitFullscreen||a.webkitCancelFullScreen||a.msExitFullscreen||a.mozCancelFullScreen)&&c.call(a);return this}jQuery.fn.fullScreen=d;jQuery.fn.toggleFullScreen=function(){return d.call(this,!d.call(this))};var e,f,g;e=document;
e.webkitCancelFullScreen?(f="webkitfullscreenchange",g="webkitfullscreenerror"):e.msExitFullscreen?(f="MSFullscreenChange",g="MSFullscreenError"):e.mozCancelFullScreen?(f="mozfullscreenchange",g="mozfullscreenerror"):(f="fullscreenchange",g="fullscreenerror");jQuery(document).bind(f,function(){jQuery(document).trigger(new jQuery.Event("fullscreenchange"))});jQuery(document).bind(g,function(){jQuery(document).trigger(new jQuery.Event("fullscreenerror"))});
/*! Respond.js v1.4.2: min/max-width media query polyfill
 * Copyright 2014 Scott Jehl
 * Licensed under MIT
 * http://j.mp/respondjs */


!function(a){"use strict";a.matchMedia=a.matchMedia||function(a){var b,c=a.documentElement,d=c.firstElementChild||c.firstChild,e=a.createElement("body"),f=a.createElement("div");return f.id="mq-test-1",f.style.cssText="position:absolute;top:-100em",e.style.background="none",e.appendChild(f),function(a){return f.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',c.insertBefore(e,d),b=42===f.offsetWidth,c.removeChild(e),{matches:b,media:a}}}(a.document)}(this),function(a){"use strict";function b(){v(!0)}var c={};a.respond=c,c.update=function(){};var d=[],e=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}(),f=function(a,b){var c=e();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},g=function(a){return a.replace(c.regex.minmaxwh,"").match(c.regex.other)};if(c.ajax=f,c.queue=d,c.unsupportedmq=g,c.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,comments:/\/\*[^*]*\*+([^/][^*]*\*+)*\//gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,maxw:/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/,minmaxwh:/\(\s*m(in|ax)\-(height|width)\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/gi,other:/\([^\)]*\)/g},c.mediaQueriesSupported=a.matchMedia&&null!==a.matchMedia("only all")&&a.matchMedia("only all").matches,!c.mediaQueriesSupported){var h,i,j,k=a.document,l=k.documentElement,m=[],n=[],o=[],p={},q=30,r=k.getElementsByTagName("head")[0]||l,s=k.getElementsByTagName("base")[0],t=r.getElementsByTagName("link"),u=function(){var a,b=k.createElement("div"),c=k.body,d=l.style.fontSize,e=c&&c.style.fontSize,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",c||(c=f=k.createElement("body"),c.style.background="none"),l.style.fontSize="100%",c.style.fontSize="100%",c.appendChild(b),f&&l.insertBefore(c,l.firstChild),a=b.offsetWidth,f?l.removeChild(c):c.removeChild(b),l.style.fontSize=d,e&&(c.style.fontSize=e),a=j=parseFloat(a)},v=function(b){var c="clientWidth",d=l[c],e="CSS1Compat"===k.compatMode&&d||k.body[c]||d,f={},g=t[t.length-1],p=(new Date).getTime();if(b&&h&&q>p-h)return a.clearTimeout(i),i=a.setTimeout(v,q),void 0;h=p;for(var s in m)if(m.hasOwnProperty(s)){var w=m[s],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?j||u():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?j||u():1)),w.hasquery&&(z&&A||!(z||e>=x)||!(A||y>=e))||(f[w.media]||(f[w.media]=[]),f[w.media].push(n[w.rules]))}for(var C in o)o.hasOwnProperty(C)&&o[C]&&o[C].parentNode===r&&r.removeChild(o[C]);o.length=0;for(var D in f)if(f.hasOwnProperty(D)){var E=k.createElement("style"),F=f[D].join("\n");E.type="text/css",E.media=D,r.insertBefore(E,g.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(k.createTextNode(F)),o.push(E)}},w=function(a,b,d){var e=a.replace(c.regex.comments,"").replace(c.regex.keyframes,"").match(c.regex.media),f=e&&e.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(c.regex.urls,"$1"+b+"$2$3")},i=!f&&d;b.length&&(b+="/"),i&&(f=1);for(var j=0;f>j;j++){var k,l,o,p;i?(k=d,n.push(h(a))):(k=e[j].match(c.regex.findStyles)&&RegExp.$1,n.push(RegExp.$2&&h(RegExp.$2))),o=k.split(","),p=o.length;for(var q=0;p>q;q++)l=o[q],g(l)||m.push({media:l.split("(")[0].match(c.regex.only)&&RegExp.$2||"all",rules:n.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(c.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(c.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}v()},x=function(){if(d.length){var b=d.shift();f(b.href,function(c){w(c,b.href,b.media),p[b.href]=!0,a.setTimeout(function(){x()},0)})}},y=function(){for(var b=0;b<t.length;b++){var c=t[b],e=c.href,f=c.media,g=c.rel&&"stylesheet"===c.rel.toLowerCase();e&&g&&!p[e]&&(c.styleSheet&&c.styleSheet.rawCssText?(w(c.styleSheet.rawCssText,e,f),p[e]=!0):(!/^([a-zA-Z:]*\/\/)/.test(e)&&!s||e.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&("//"===e.substring(0,2)&&(e=a.location.protocol+e),d.push({href:e,media:f})))}x()};y(),c.update=y,c.getEmValue=u,a.addEventListener?a.addEventListener("resize",b,!1):a.attachEvent&&a.attachEvent("onresize",b)}}(this);
/*!
 * Bootstrap v3.3.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.1",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.1",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c="prev"==a?-1:1,d=this.getItemIndex(b),e=(d+c)%this.$items.length;return this.$items.eq(e)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i="next"==b?"first":"last",j=this;if(!f.length){if(!this.options.wrap)return;f=this.$element.find(".item")[i]()}if(f.hasClass("active"))return this.sliding=!1;var k=f[0],l=a.Event("slide.bs.carousel",{relatedTarget:k,direction:h});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var m=a(this.$indicators.children()[this.getItemIndex(f)]);m&&m.addClass("active")}var n=a.Event("slid.bs.carousel",{relatedTarget:k,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),j.sliding=!1,setTimeout(function(){j.$element.trigger(n)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(n)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a(this.options.trigger).filter('[href="#'+b.id+'"], [data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.1",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":a.extend({},e.data(),{trigger:this});c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={relatedTarget:this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.1",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.options.backdrop&&d.adjustBackdrop(),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},c.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.tooltip",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=this.tip(),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.popover",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.1",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.1",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})
})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.1",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=i?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/* =========================================================
 * bootstrap-slider.js v2.0.0
 * http://www.eyecon.ro/bootstrap-slider
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */

 
!function( $ ) {

	var Slider = function(element, options) {
		this.element = $(element);
		this.picker = $('<div class="slider">'+
							'<div class="slider-track">'+
								'<div class="slider-selection"></div>'+
								'<div class="slider-handle"></div>'+
								'<div class="slider-handle"></div>'+
							'</div>'+
							'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'+
						'</div>')
							.insertBefore(this.element)
							.append(this.element);
		this.id = this.element.data('slider-id')||options.id;
		if (this.id) {
			this.picker[0].id = this.id;
		}

		if (typeof Modernizr !== 'undefined' && Modernizr.touch) {
			this.touchCapable = true;
		}

		var tooltip = this.element.data('slider-tooltip')||options.tooltip;

		this.tooltip = this.picker.find('.tooltip');
		this.tooltipInner = this.tooltip.find('div.tooltip-inner');

		this.orientation = this.element.data('slider-orientation')||options.orientation;
		switch(this.orientation) {
			case 'vertical':
				this.picker.addClass('slider-vertical');
				this.stylePos = 'top';
				this.mousePos = 'pageY';
				this.sizePos = 'offsetHeight';
				this.tooltip.addClass('right')[0].style.left = '100%';
				break;
			default:
				this.picker
					.addClass('slider-horizontal')
					.css('width', this.element.outerWidth());
				this.orientation = 'horizontal';
				this.stylePos = 'left';
				this.mousePos = 'pageX';
				this.sizePos = 'offsetWidth';
				this.tooltip.addClass('top')[0].style.top = -this.tooltip.outerHeight() - 14 + 'px';
				break;
		}

		this.min = this.element.data('slider-min')||options.min;
		this.max = this.element.data('slider-max')||options.max;
		this.step = this.element.data('slider-step')||options.step;
		this.value = this.element.data('slider-value')||options.value;
		if (this.value[1]) {
			this.range = true;
		}

		this.selection = this.element.data('slider-selection')||options.selection;
		this.selectionEl = this.picker.find('.slider-selection');
		if (this.selection === 'none') {
			this.selectionEl.addClass('hide');
		}
		this.selectionElStyle = this.selectionEl[0].style;


		this.handle1 = this.picker.find('.slider-handle:first');
		this.handle1Stype = this.handle1[0].style;
		this.handle2 = this.picker.find('.slider-handle:last');
		this.handle2Stype = this.handle2[0].style;

		var handle = this.element.data('slider-handle')||options.handle;
		switch(handle) {
			case 'round':
				this.handle1.addClass('round');
				this.handle2.addClass('round');
				break
			case 'triangle':
				this.handle1.addClass('triangle');
				this.handle2.addClass('triangle');
				break
		}

		if (this.range) {
			this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0]));
			this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]));
		} else {
			this.value = [ Math.max(this.min, Math.min(this.max, this.value))];
			this.handle2.addClass('hide');
			if (this.selection == 'after') {
				this.value[1] = this.max;
			} else {
				this.value[1] = this.min;
			}
		}
		this.diff = this.max - this.min;
		this.percentage = [
			(this.value[0]-this.min)*100/this.diff,
			(this.value[1]-this.min)*100/this.diff,
			this.step*100/this.diff
		];

		this.offset = this.picker.offset();
		this.size = this.picker[0][this.sizePos];

		this.formater = options.formater;

		this.layout();

		if (this.touchCapable) {
			// Touch: Bind touch events:
			this.picker.on({
				touchstart: $.proxy(this.mousedown, this)
			});
		} else {
			this.picker.on({
				mousedown: $.proxy(this.mousedown, this)
			});
		}

		if (tooltip === 'show') {
			this.picker.on({
				mouseenter: $.proxy(this.showTooltip, this),
				mouseleave: $.proxy(this.hideTooltip, this)
			});
		} else {
			this.tooltip.addClass('hide');
		}
	};

	Slider.prototype = {
		constructor: Slider,

		over: false,
		inDrag: false,
		
		showTooltip: function(){
			this.tooltip.addClass('in');
			//var left = Math.round(this.percent*this.width);
			//this.tooltip.css('left', left - this.tooltip.outerWidth()/2);
			this.over = true;
		},
		
		hideTooltip: function(){
			if (this.inDrag === false) {
				this.tooltip.removeClass('in');
			}
			this.over = false;
		},

		layout: function(){
			this.handle1Stype[this.stylePos] = this.percentage[0]+'%';
			this.handle2Stype[this.stylePos] = this.percentage[1]+'%';
			if (this.orientation == 'vertical') {
				this.selectionElStyle.top = Math.min(this.percentage[0], this.percentage[1]) +'%';
				this.selectionElStyle.height = Math.abs(this.percentage[0] - this.percentage[1]) +'%';
			} else {
				this.selectionElStyle.left = Math.min(this.percentage[0], this.percentage[1]) +'%';
				this.selectionElStyle.width = Math.abs(this.percentage[0] - this.percentage[1]) +'%';
			}
			if (this.range) {
				this.tooltipInner.text(
					this.formater(this.value[0]) + 
					' : ' + 
					this.formater(this.value[1])
				);
				this.tooltip[0].style[this.stylePos] = this.size * (this.percentage[0] + (this.percentage[1] - this.percentage[0])/2)/100 - (this.orientation === 'vertical' ? this.tooltip.outerHeight()/2 : this.tooltip.outerWidth()/2) +'px';
			} else {
				this.tooltipInner.text(
					this.formater(this.value[0])
				);
				this.tooltip[0].style[this.stylePos] = this.size * this.percentage[0]/100 - (this.orientation === 'vertical' ? this.tooltip.outerHeight()/2 : this.tooltip.outerWidth()/2) +'px';
			}
		},

		mousedown: function(ev) {

			// Touch: Get the original event:
			if (this.touchCapable && ev.type === 'touchstart') {
				ev = ev.originalEvent;
			}

			this.offset = this.picker.offset();
			this.size = this.picker[0][this.sizePos];

			var percentage = this.getPercentage(ev);

			if (this.range) {
				var diff1 = Math.abs(this.percentage[0] - percentage);
				var diff2 = Math.abs(this.percentage[1] - percentage);
				this.dragged = (diff1 < diff2) ? 0 : 1;
			} else {
				this.dragged = 0;
			}

			this.percentage[this.dragged] = percentage;
			this.layout();

			if (this.touchCapable) {
				// Touch: Bind touch events:
				$(document).on({
					touchmove: $.proxy(this.mousemove, this),
					touchend: $.proxy(this.mouseup, this)
				});
			} else {
				$(document).on({
					mousemove: $.proxy(this.mousemove, this),
					mouseup: $.proxy(this.mouseup, this)
				});
			}

			this.inDrag = true;
			var val = this.calculateValue();
			this.element.trigger({
					type: 'slideStart',
					value: val
				}).trigger({
					type: 'slide',
					value: val
				});
			return false;
		},

		mousemove: function(ev) {
			
			// Touch: Get the original event:
			if (this.touchCapable && ev.type === 'touchmove') {
				ev = ev.originalEvent;
			}

			var percentage = this.getPercentage(ev);
			if (this.range) {
				if (this.dragged === 0 && this.percentage[1] < percentage) {
					this.percentage[0] = this.percentage[1];
					this.dragged = 1;
				} else if (this.dragged === 1 && this.percentage[0] > percentage) {
					this.percentage[1] = this.percentage[0];
					this.dragged = 0;
				}
			}
			this.percentage[this.dragged] = percentage;
			this.layout();
			var val = this.calculateValue();
			this.element
				.trigger({
					type: 'slide',
					value: val
				})
				.data('value', val)
				.prop('value', val);
			return false;
		},

		mouseup: function(ev) {
			if (this.touchCapable) {
				// Touch: Bind touch events:
				$(document).off({
					touchmove: this.mousemove,
					touchend: this.mouseup
				});
			} else {
				$(document).off({
					mousemove: this.mousemove,
					mouseup: this.mouseup
				});
			}

			this.inDrag = false;
			if (this.over == false) {
				this.hideTooltip();
			}
			this.element;
			var val = this.calculateValue();
			this.element
				.trigger({
					type: 'slideStop',
					value: val
				})
				.data('value', val)
				.prop('value', val);
			return false;
		},

		calculateValue: function() {
			var val;
			if (this.range) {
				val = [
					(this.min + Math.round((this.diff * this.percentage[0]/100)/this.step)*this.step),
					(this.min + Math.round((this.diff * this.percentage[1]/100)/this.step)*this.step)
				];
				this.value = val;
			} else {
				val = (this.min + Math.round((this.diff * this.percentage[0]/100)/this.step)*this.step);
				this.value = [val, this.value[1]];
			}
			return val;
		},

		getPercentage: function(ev) {
			if (this.touchCapable) {
				ev = ev.touches[0];
			}
			var percentage = (ev[this.mousePos] - this.offset[this.stylePos])*100/this.size;
			percentage = Math.round(percentage/this.percentage[2])*this.percentage[2];
			return Math.max(0, Math.min(100, percentage));
		},

		getValue: function() {
			if (this.range) {
				return this.value;
			}
			return this.value[0];
		},

		setValue: function(val) {
			this.value = val;

			if (this.range) {
				this.value[0] = Math.max(this.min, Math.min(this.max, this.value[0]));
				this.value[1] = Math.max(this.min, Math.min(this.max, this.value[1]));
			} else {
				this.value = [ Math.max(this.min, Math.min(this.max, this.value))];
				this.handle2.addClass('hide');
				if (this.selection == 'after') {
					this.value[1] = this.max;
				} else {
					this.value[1] = this.min;
				}
			}
			this.diff = this.max - this.min;
			this.percentage = [
				(this.value[0]-this.min)*100/this.diff,
				(this.value[1]-this.min)*100/this.diff,
				this.step*100/this.diff
			];
			this.layout();
		}
	};

	$.fn.slider = function ( option, val ) {
		return this.each(function () {
			var $this = $(this),
				data = $this.data('slider'),
				options = typeof option === 'object' && option;
			if (!data)  {
				$this.data('slider', (data = new Slider(this, $.extend({}, $.fn.slider.defaults,options))));
			}
			if (typeof option == 'string') {
				data[option](val);
			}
		})
	};

	$.fn.slider.defaults = {
		min: 0,
		max: 10,
		step: 1,
		orientation: 'horizontal',
		value: 5,
		selection: 'before',
		tooltip: 'show',
		handle: 'round',
		formater: function(value) {
			return value;
		}
	};

	$.fn.slider.Constructor = Slider;

}( window.jQuery );
var PayolaCheckout = {
    initialize: function() {
        $(document).on('click', '.payola-checkout-button', function(e) {
            e.preventDefault();
            PayolaCheckout.handleCheckoutButtonClick($(this));
        });
    },

    handleCheckoutButtonClick: function(button) {
        var form = button.parent('form');
        var options = form.data();

        var handler = StripeCheckout.configure({
            key: options.publishable_key,
            image: options.product_image_path,
            token: function(token) { PayolaCheckout.tokenHandler(token, options); },
            name: options.name,
            description: options.description,
            amount: options.price,
            panelLabel: options.panel_label,
            allowRememberMe: options.allow_remember_me,
            zipCode: options.verify_zip_code,
            billingAddress: options.billing_address,
            shippingAddress: options.shipping_address,
            currency: options.currency,
            bitcoin: options.bitcoin,
            email: options.email || undefined
        });

        handler.open();
    },

    tokenHandler: function(token, options) {
        var form = $("#" + options.form_id);
        console.log(options.form_id);
        form.append($('<input type="hidden" name="stripeToken">').val(token.id));
        form.append($('<input type="hidden" name="stripeEmail">').val(token.email));
        if (options.signed_custom_fields) {
          form.append($('<input type="hidden" name="signed_custom_fields">').val(options.signed_custom_fields));
        }

        $(".payola-checkout-button").prop("disabled", true);
        $(".payola-checkout-button-text").hide();
        $(".payola-checkout-button-spinner").show();
        $.ajax({
            type: "POST",
            url: options.base_path + "/buy/" + options.product_class + "/" + options.product_permalink,
            data: form.serialize(),
            success: function(data) { PayolaCheckout.poll(data.guid, 60, options); },
            error: function(data) { PayolaCheckout.showError(data.responseJSON.error, options); }
        });
    },

    showError: function(error, options) {
        var error_div = $("#" + options.error_div_id);
        error_div.html(error);
        error_div.show();
        $(".payola-checkout-button").prop("disabled", false);
        $(".payola-checkout-button-spinner").hide();
        $(".payola-checkout-button-text").show();
    },

    poll: function(guid, num_retries_left, options) {
        if (num_retries_left === 0) {
            PayolaCheckout.showError("This seems to be taking too long. Please contact support and give them transaction ID: " + guid, options);
            return;
        }

        var handler = function(data) {
            if (data.status === "finished") {
                window.location = options.base_path + "/confirm/" + guid;
            } else if (data.status === "errored") {
                PayolaCheckout.showError(data.error, options);
            } else {
                setTimeout(function() { PayolaCheckout.poll(guid, num_retries_left - 1, options); }, 500);
            }
        };

        $.ajax({
            type: "GET",
            url: options.base_path + "/status/" + guid,
            success: handler,
            error: handler
        });
    }
};
$(function() { PayolaCheckout.initialize(); });
var PayolaPaymentForm = {
    initialize: function() {
        $(document).on('submit', '.payola-payment-form', function() {
            return PayolaPaymentForm.handleSubmit($(this));
        });
    },

    handleSubmit: function(form) {
        form.find(':submit').prop('disabled', true);
        $('.payola-spinner').show();
        Stripe.card.createToken(form, function(status, response) {
            PayolaPaymentForm.stripeResponseHandler(form, status, response);
        });
        return false;
    },

    stripeResponseHandler: function(form, status, response) {
        if (response.error) {
            PayolaPaymentForm.showError(form, response.error.message);
        } else {
            var email = form.find("[data-payola='email']").val();

            var base_path = form.data('payola-base-path');
            var product = form.data('payola-product');
            var permalink = form.data('payola-permalink');

            var data_form = $('<form></form>');
            data_form.append($('<input type="hidden" name="stripeToken">').val(response.id));
            data_form.append($('<input type="hidden" name="stripeEmail">').val(email));
            data_form.append(PayolaPaymentForm.authenticityTokenInput());
            
            $.ajax({
                type: "POST",
                url: base_path + "/buy/" + product + "/" + permalink,
                data: data_form.serialize(),
                success: function(data) { PayolaPaymentForm.poll(form, 60, data.guid, base_path); },
                error: function(data) { PayolaPaymentForm.showError(form, data.responseJSON.error); }
            });
        }
    },

    poll: function(form, num_retries_left, guid, base_path) {
        if (num_retries_left === 0) {
            PayolaPaymentForm.showError(form, "This seems to be taking too long. Please contact support and give them transaction ID: " + guid);
        }
        $.get(base_path + '/status/' + guid, function(data) {
            if (data.status === "finished") {
                form.append($('<input type="hidden" name="payola_sale_guid"></input>').val(guid));
                form.append(PayolaPaymentForm.authenticityTokenInput());
                form.get(0).submit();
            } else if (data.status === "errored") {
                PayolaPaymentForm.showError(form, data.error);
            } else {
                setTimeout(function() { PayolaPaymentForm.poll(form, num_retries_left - 1, guid, base_path); }, 500);
            }
        });
    },

    showError: function(form, message) {
        $('.payola-spinner').hide();
        form.find(':submit').prop('disabled', false);
        var error_selector = form.data('payola-error-selector');
        if (error_selector) {
            $(error_selector).text(message);
        } else {
            form.find('.payola-payment-error').text(message);
        }
    },

    authenticityTokenInput: function() {
        return $('<input type="hidden" name="authenticity_token"></input>').val($('meta[name="csrf-token"]').attr("content"))
    }
};

$(function() { PayolaPaymentForm.initialize(); } );
var PayolaSubscriptionCheckout = {
    initialize: function() {
        $(document).on('click', '.payola-subscription-checkout-button', function(e) {
            e.preventDefault();
            PayolaSubscriptionCheckout.handleCheckoutButtonClick($(this));
        });
    },

    handleCheckoutButtonClick: function(button) {
        var form = button.parent('form');
        var options = form.data();

        var handler = StripeCheckout.configure({
            key: options.publishable_key,
            image: options.plan_image_path,
            token: function(token) { PayolaSubscriptionCheckout.tokenHandler(token, options); },
            name: options.name,
            description: options.description,
            amount: options.price,
            panelLabel: options.panel_label,
            allowRememberMe: options.allow_remember_me,
            zipCode: options.verify_zip_code,
            billingAddress: options.billing_address,
            shippingAddress: options.shipping_address,
            currency: options.currency,
            email: options.email || undefined
        });

        handler.open();
    },

    tokenHandler: function(token, options) {
        var form = $("#" + options.form_id);
        console.log(options.form_id);
        form.append($('<input type="hidden" name="stripeToken">').val(token.id));
        form.append($('<input type="hidden" name="stripeEmail">').val(token.email));
        form.append($('<input type="hidden" name="quantity">').val(options.quantity));
        if (options.signed_custom_fields) {
          form.append($('<input type="hidden" name="signed_custom_fields">').val(options.signed_custom_fields));
        }

        $(".payola-subscription-checkout-button").prop("disabled", true);
        $(".payola-subscription-checkout-button-text").hide();
        $(".payola-subscription-checkout-button-spinner").show();
        $.ajax({
            type: "POST",
            url: form.attr('action'),
            data: form.serialize(),
            success: function(data) { PayolaSubscriptionCheckout.poll(data.guid, 60, options); },
            error: function(data) { PayolaSubscriptionCheckout.showError(data.responseJSON.error, options); }
        });
    },

    showError: function(error, options) {
        var error_div = $("#" + options.error_div_id);
        error_div.html(error);
        error_div.show();
        $(".payola-subscription-checkout-button").prop("disabled", false);
        $(".payola-subscription-checkout-button-spinner").hide();
        $(".payola-subscription-checkout-button-text").show();
    },

    poll: function(guid, num_retries_left, options) {
        if (num_retries_left === 0) {
            PayolaSubscriptionCheckout.showError("This seems to be taking too long. Please contact support and give them transaction ID: " + guid, options);
            return;
        }

        var handler = function(data) {
            if (data.status === "active") {
                window.location = options.base_path + "/confirm_subscription/" + guid;
            } else if (data.status === "errored") {
                PayolaSubscriptionCheckout.showError(data.error, options);
            } else {
                setTimeout(function() { PayolaSubscriptionCheckout.poll(guid, num_retries_left - 1, options); }, 500);
            }
        };

        $.ajax({
            type: "GET",
            url: options.base_path + "/subscription_status/" + guid,
            success: handler,
            error: handler
        });
    }
};
$(function() { PayolaSubscriptionCheckout.initialize(); });
var PayolaOnestepSubscriptionForm = {
    initialize: function() {
        $(document).on('submit', '.payola-onestep-subscription-form', function() {
            return PayolaOnestepSubscriptionForm.handleSubmit($(this));
        });
    },

    handleSubmit: function(form) {
        $(':submit').prop('disabled', true);
        $('.payola-spinner').show();
        Stripe.card.createToken(form, function(status, response) {
            PayolaOnestepSubscriptionForm.stripeResponseHandler(form, status, response);
        });
        return false;
    },

    stripeResponseHandler: function(form, status, response) {
        if (response.error) {
            PayolaOnestepSubscriptionForm.showError(form, response.error.message);
        } else {
            var email = form.find("[data-payola='email']").val();
            var coupon = form.find("[data-payola='coupon']").val();
            var quantity = form.find("[data-payola='quantity']").val();

            var base_path = form.data('payola-base-path');
            var plan_type = form.data('payola-plan-type');
            var plan_id = form.data('payola-plan-id');

            var action = $(form).attr('action');

            form.append($('<input type="hidden" name="plan_type">').val(plan_type));
            form.append($('<input type="hidden" name="plan_id">').val(plan_id));
            form.append($('<input type="hidden" name="stripeToken">').val(response.id));
            form.append($('<input type="hidden" name="stripeEmail">').val(email));
            form.append($('<input type="hidden" name="coupon">').val(coupon));
            form.append($('<input type="hidden" name="quantity">').val(quantity));
            form.append(PayolaOnestepSubscriptionForm.authenticityTokenInput());
            $.ajax({
                type: "POST",
                url: action,
                data: form.serialize(),
                success: function(data) { PayolaOnestepSubscriptionForm.poll(form, 60, data.guid, base_path); },
                error: function(data) { PayolaOnestepSubscriptionForm.showError(form, data.responseJSON.error); }
            });
        }
    },

    poll: function(form, num_retries_left, guid, base_path) {
        if (num_retries_left === 0) {
            PayolaOnestepSubscriptionForm.showError(form, "This seems to be taking too long. Please contact support and give them transaction ID: " + guid);
        }
        var handler = function(data) {
            if (data.status === "active") {
                window.location = base_path + '/confirm_subscription/' + guid;
            } else {
                setTimeout(function() { PayolaOnestepSubscriptionForm.poll(form, num_retries_left - 1, guid, base_path); }, 500);
            }
        };
        var errorHandler = function(jqXHR){
            PayolaOnestepSubscriptionForm.showError(form, jqXHR.responseJSON.error);
        };

        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: base_path + '/subscription_status/' + guid,
            success: handler,
            error: errorHandler
        });
    },

    showError: function(form, message) {
        $('.payola-spinner').hide();
        $(':submit').prop('disabled', false);
        var error_selector = form.data('payola-error-selector');
        if (error_selector) {
            $(error_selector).text(message);
            $(error_selector).show();
        } else {
            form.find('.payola-payment-error').text(message);
            form.find('.payola-payment-error').show();
        }
    },

    authenticityTokenInput: function() {
        return $('<input type="hidden" name="authenticity_token"></input>').val($('meta[name="csrf-token"]').attr("content"));
    }
};

$(function() { PayolaOnestepSubscriptionForm.initialize() } );
var PayolaSubscriptionForm = {
    initialize: function() {
        $(document).on('submit', '.payola-subscription-form', function() {
            return PayolaSubscriptionForm.handleSubmit($(this));
        });
    },

    handleSubmit: function(form) {
        $(':submit').prop('disabled', true);
        $('.payola-spinner').show();
        Stripe.card.createToken(form, function(status, response) {
            PayolaSubscriptionForm.stripeResponseHandler(form, status, response);
        });
        return false;
    },

    stripeResponseHandler: function(form, status, response) {
        if (response.error) {
            PayolaSubscriptionForm.showError(form, response.error.message);
        } else {
            var email = form.find("[data-payola='email']").val();
            var coupon = form.find("[data-payola='coupon']").val();
            var quantity = form.find("[data-payola='quantity']").val();

            var base_path = form.data('payola-base-path');
            var plan_type = form.data('payola-plan-type');
            var plan_id = form.data('payola-plan-id');

            var data_form = $('<form></form>');
            data_form.append($('<input type="hidden" name="stripeToken">').val(response.id));
            data_form.append($('<input type="hidden" name="stripeEmail">').val(email));
            data_form.append($('<input type="hidden" name="coupon">').val(coupon));
            data_form.append($('<input type="hidden" name="quantity">').val(quantity));
            data_form.append(PayolaSubscriptionForm.authenticityTokenInput());
            $.ajax({
                type: "POST",
                url: base_path + "/subscribe/" + plan_type + "/" + plan_id,
                data: data_form.serialize(),
                success: function(data) { PayolaSubscriptionForm.poll(form, 60, data.guid, base_path); },
                error: function(data) { PayolaSubscriptionForm.showError(form, data.responseJSON.error); }
            });
        }
    },

    poll: function(form, num_retries_left, guid, base_path) {
        if (num_retries_left === 0) {
            PayolaSubscriptionForm.showError(form, "This seems to be taking too long. Please contact support and give them transaction ID: " + guid);
        }
        var handler = function(data) {
            if (data.status === "active") {
                form.append($('<input type="hidden" name="payola_subscription_guid"></input>').val(guid));
                form.append(PayolaSubscriptionForm.authenticityTokenInput());
                form.get(0).submit();
            } else {
                setTimeout(function() { PayolaSubscriptionForm.poll(form, num_retries_left - 1, guid, base_path); }, 500);
            }
        };
        var errorHandler = function(jqXHR){
          if(jqXHR.responseJSON.status === "errored"){
            PayolaSubscriptionForm.showError(form, jqXHR.responseJSON.error);
          }
        };

        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: base_path + '/subscription_status/' + guid,
            success: handler,
            error: errorHandler
        });
    },

    showError: function(form, message) {
        $('.payola-spinner').hide();
        $(':submit').prop('disabled', false);
        var error_selector = form.data('payola-error-selector');
        if (error_selector) {
            $(error_selector).text(message);
            $(error_selector).show();
        } else {
            form.find('.payola-payment-error').text(message);
            form.find('.payola-payment-error').show();
        }
    },

    authenticityTokenInput: function() {
        return $('<input type="hidden" name="authenticity_token"></input>').val($('meta[name="csrf-token"]').attr("content"));
    }
};

$(function() { PayolaSubscriptionForm.initialize() } );
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//

;
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.















$(function() {

    $("#new_project").on("submit", function(event){
      // $('#project_editor').editable('save');

      var html = $('#project_editor').editable('getHTML', true, true);
      $("#project_content").val(html);

    });

      $('#project_editor')
        .editable({
          // Set the save param.
          saveParam: 'content',

          // Set the save URL.
          saveURL: '/pages/create_project',

          // HTTP request type.
          saveRequestType: 'POST',

          // Additional save params.
          // saveParams: {id: "PLACEHOLDER FOR ID" },

          inlineMode: false,

          minHeight: 300,
        })
        .on('editable.saveError', function (e, editor, error) {
          // Do something here.
        })
    });
