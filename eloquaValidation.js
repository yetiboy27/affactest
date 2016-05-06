<script type="text/javascript" >
                        var dom0 = document.querySelector('#form83 #field0');
                        var field0 = new LiveValidation(dom0, {
                          validMessage: "", onlyOnBlur: true}
                                                       );
                        var dom1 = document.querySelector('#form83 #field1');
                        var field1 = new LiveValidation(dom1, {
                          validMessage: "", onlyOnBlur: true}
                                                       );
                        var dom2 = document.querySelector('#form83 #field2');
                        var field2 = new LiveValidation(dom2, {
                          validMessage: "", onlyOnBlur: true}
                                                       );
                        field2.add(Validate.Presence, {
                          failureMessage:"This field is required"}
                                  );
                        var dom3 = document.querySelector('#form83 #field3');
                        var field3 = new LiveValidation(dom3, {
                          validMessage: "", onlyOnBlur: true}
                                                       );
                        field3.add(Validate.Presence, {
                          failureMessage:"This field is required"}
                                  );
                        var dom4 = document.querySelector('#form83 #field4');
                        var field4 = new LiveValidation(dom4, {
                          validMessage: "", onlyOnBlur: true}
                                                       );
                        field4.add(Validate.Presence, {
                          failureMessage:"This field is required"}
                                  );
                        var dom5 = document.querySelector('#form83 #field5');
                        var field5 = new LiveValidation(dom5, {
                          validMessage: "", onlyOnBlur: true}
                                                       );
                        field5.add(Validate.Presence, {
                          failureMessage:"This field is required"}
                                  );
                        field5.add(Validate.Format, {
                          pattern: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i, failureMessage: "A valid email address is required"}
                                  );
                        var dom6 = document.querySelector('#form83 #field6');
                        var field6 = new LiveValidation(dom6, {
                          validMessage: "", onlyOnBlur: true}
                                                       );
                        var dom12 = document.querySelector('#form83 #field12');
                        var field12 = new LiveValidation(dom12, {
                          validMessage: "", onlyOnBlur: true}
                                                        );
                        var dom13 = document.querySelector('#form83 #field13');
                        var field13 = new LiveValidation(dom13, {
                          validMessage: "", onlyOnBlur: true}
                                                        );
                        function resetSubmitButton(e){
                          var submitButtons = e.target.form.getElementsByClassName('submit-button');
                          for(var i=0;i<submitButtons.length;i++){
                            submitButtons[i].disabled = false;
                          }
                        }
                        function addChangeHandler(elements){
                          for(var i=0; i<elements.length; i++){
                            elements[i].addEventListener('change', resetSubmitButton);
                          }
                        }
                        var form = document.getElementById('form83');
                        addChangeHandler(form.getElementsByTagName('input'));
                        addChangeHandler(form.getElementsByTagName('select'));
                        addChangeHandler(form.getElementsByTagName('textarea'));
                      </script>
                      <style type="text/css" media="screen" >
                        .LV_validation_message{
                          font-weight:bold;
                          margin: 0 0 0 5px;
                        }
                        .LV_valid{
                          color:#00CC00;
                          display:none;
                        }
                        .LV_invalid{
                          color:#CC0000;
                          font-size:10px;
                        }
                        .LV_valid_field, input.LV_valid_field:hover, input.LV_valid_field:active, textarea.LV_valid_field:hover, textarea.LV_valid_field:active {
                          outline: 1px solid #00CC00;
                        }
                        .LV_invalid_field, input.LV_invalid_field:hover, input.LV_invalid_field:active, textarea.LV_invalid_field:hover, textarea.LV_invalid_field:active {
                          outline: 1px solid #CC0000;
                        }
                      </style>

                      <script src="https://img03.en25.com/i/livevalidation_standalone.compressed.js" type="text/javascript" >
                      </script>