<script type="text/javascript">                                         
	/* <![CDATA[ */
		$(document).ready(function(){ // sends the data filled in the contact form to the php file and shows a message
		    $("#contact-form").submit(function(){
		        var str = $(this).serialize();
		        $.ajax({
		            type: "POST",
		            url: "./php/send.php",
		            data: str,
		            success: function(msg)
		            {
		                $("#formstatus").ajaxComplete(function(event, request, settings){
		                    if(msg == 'OK'){ // Message Sent? Show the 'Thank You' message and hide the form
		                        result = '<div class="formstatusok">Your message has been sent. Thank you!</div>';
		                        $("#fields").hide();
		                    }
		                    else{
		                        result = msg;
		                    }
		                    $(this).html(result);
		                });
		            }
				
		        });
		        return false;
		    });
		});
/* ]]> */	