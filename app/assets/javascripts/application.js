// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.

//= require src/app
//= require froala_editor.min.js

//= require icheck/js/icheck.min
//= require mask/js/jquery.maskedinput.min
//= require validation/js/jquery.validate.min
//= require sortNestable/js/jquery.nestable
//= require wizard/js/loader.min
//= require fullscreen/jquery.fullscreen-min
//= require respond/respond.min
// require bootstrap/js/bootstrap.min
// require bootstrap-slider/js/bootstrap-slider

$(function() {
      $('#project_editor')
        .editable({
          // Set the save param.
          saveParam: 'content',

          // Set the save URL.
          saveURL: '/pages/create_project',

          // HTTP request type.
          saveRequestType: 'POST',

          // Additional save params.
          saveParams: {id: "PLACEHOLDER FOR ID"},

          inlineMode: false,

          minHeight: 300,
        })
        .on('editable.saveError', function (e, editor, error) {
          // Do something here.
        })
    });

    $('#saveButton').click (function () {
      $('#project_editor').editable('save')
      // window.location = '/projects/show'
    })
