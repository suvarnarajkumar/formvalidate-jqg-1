/* PROGRESS_BAR VARIABLES FOR EACH FIELD VALIDATION */
progress_gender=0;
progress_isalphanumeric=0;
progress_password=0;
progress_confirmpassword=0;
progress_alphabetWOS=0;
progress_alphabetWSD=0;
progress_file=0;
progress_day=0;
progress_month=0;
progress_year=0;
progress_bar9=0;
progress_checkbox=0;
progress_multipleselect=0;
progress_password2=0;


/* GLOBAL VARIABLES TO STORE VALUE OF FORM INPUTS */
MULTIPLE_SELECT_DATA="NULL";

/* CHECKING FOR USERNAME VALID OR NOT */
(function($) {
 $.fn.isAlphanumeric = function(obj,objto,str,star,rgt,wrg,state,prog) {
var letters = /^[a-zA-Z][a-zA-Z\d]{4,7}$/;
if(!$(obj).val().match(letters))
{
	if(progress_isalphanumeric === 1)
	{
		progress_isalphanumeric=0;
		var val=$('progress').val();
		val=val-prog; $('progress').next("p").html(val+"%");
		$('progress').val(val);
	}	
$(obj).next("p").text(str+" should be "+5+" to "+8+" alphanumeric" );
$(star).css("color","red");
$(rgt).hide();
$(wrg).show();
$(obj).focus();
return;
}
else
{
	$(obj).next("p").empty();
	if(progress_isalphanumeric === 0)
	{
		progress_isalphanumeric=1;
		var val=$('progress').val();
		val=val+prog; $('progress').next("p").html(val+"%");
		$('progress').val(val);
	}
$(star).css("color","blue");
$(wrg).hide();
$(rgt).show();
if($('progress').val() === 100)
	{$(state).show();}
$(objto).focus();
return ;
}

 };
})(jQuery);



/* CHECKING FOR PASSWORD VALID OR NOT */
(function($) {
 $.fn.passwordValidation = function(obj1,obj2,objto,str1,str2,star1,star2,rgt1,rgt2,wrg1,wrg2,state,prog){
var letters = /^(?=.*\d.*)(?=.*[a-z].*)(?=.*[@#].*)(?=.*[A-Z].*)[a-zA-Z0-9@#]{4,6}$/;
if(!$(obj1).val().match(letters))
{
	if(progress_password === 1)
	{
		progress_password=0;
		var val=$('progress').val();
		val=val-prog; $('progress').next("p").html(val+"%");
		$('progress').val(val);
	}	
$(obj1).next("p").text(str1+" should be "+4+" to "+6+" atleast one lowercase, uppercase, number, special character(@,#)");
$(star1).css("color","red");
$(rgt1).hide();
$(wrg1).show();
$(obj2).prop('disabled', true);
if($(obj2).val().length !==0 )
{
$(obj2).next("p").text(str2+" should not be different from above "+str1);
if(progress_confirmpassword === 1)
		{
		progress_confirmpassword=0;
		var val=$('progress').val();
		val=val-prog; $('progress').next("p").html(val+"%");
		$('progress').val(val);
 $(star2).css("color","red");
		$(rgt2).hide();
			$(wrg2).show();
}
$(obj1).focus();
return;
}
}
else
{
	$(obj2).next("p").text(str2+" should not be different from above "+str1);
	if(progress_confirmpassword === 1)
		{
		progress_confirmpassword=0;
		var val=$('progress').val();
		val=val-prog; $('progress').next("p").html(val+"%");
		$('progress').val(val);
		}		
	$(star2).css("color","red");
		$(rgt2).hide();
			$(wrg2).show();
	$(obj1).next("p").empty();
	if(progress_password === 0)
	{
	progress_password=1;
	var val=$('progress').val();
		val=val+prog; $('progress').next("p").html(val+"%");
		$('progress').val(val);
	}
$(star1).css("color","blue");
$(rgt1).show();
$(wrg1).hide();
$(obj2).prop('disabled', false);
	if(!$(obj2).val().localeCompare($(obj1).val()) )
	{
		if(progress_confirmpassword === 0)
		{
		progress_confirmpassword=1;
		var val=$('progress').val();
		val=val+prog; $('progress').next("p").html(val+"%");
		$('progress').val(val);
		}	
		 $(star2).css("color","blue");
		$(rgt2).show();
			$(wrg2).hide();
			$(obj2).next("p").empty();
if($('progress').val() === 100)
	{$(state).show();}
	$(objto).focus();
		return
	}
	else
	{
   $(obj2).focus();
return ;
}
}

 };
})(jQuery);




/* CHECKING FOR CONFIRM PASSWORD VALID OR NOT */
(function($) {
 $.fn.confirmPasswordValidation = function(obj1,obj2,objto,str,star,rgt,wrg,state,prog) {
var fname = $('input[name=first_name]').val();
if( $(obj1).val().localeCompare( $(obj2).val()) ||  $(obj1).val().length===0 )
{
	if(progress_confirmpassword === 1)
	{
		progress_confirmpassword=0;
		var val=$('progress').val();
		val=val-prog; $('progress').next("p").html(val+"%");
		$('progress').val(val);
	}	
$(obj1).next("p").text(str +" should not be different from above password");
$(star).css("color","red");
$(rgt).hide();
$(wrg).show();
$(obj1).focus();
return;
}
else
{
	$(obj1).next("p").empty();
	if(progress_confirmpassword === 0)
	{
		progress_confirmpassword=1;
		var val=$('progress').val();
		val=val+prog; $('progress').next("p").html(val+"%");
		$('progress').val(val);
	}	
$(star).css("color","blue");
$(wrg).hide();
$(rgt).show();
if($('progress').val() === 100)
	{$(state).show();}
$(objto).focus();
return ;
}

};
})(jQuery);


/* CHECKING FOR FIRST NAME VALID OR NOT */
(function($) {
 $.fn.alphabetWOSValidation = function(obj,objto,str,star,rgt,wrg,state,prog) {
var letters = /^[a-zA-Z]{2,6}$/;
if(!$(obj).val().match(letters))
{
	if(progress_alphabetWOS === 1)
	{
		progress_alphabetWOS=0;
		var val=$('progress').val();
		val=val-prog; $('progress').next("p").html(val+"%");
		$('progress').val(val);
	}	
$(obj).next("p").text(str+" should be "+2+" to "+6+" characters without spaces.");
$(star).css("color","red");
$(rgt).hide();
$(wrg).show();
$(obj).focus();
return ;
}
else
{
$(obj).next("p").empty();
	if(progress_alphabetWOS === 0)
	{
		progress_alphabetWOS=1;
		var val=$('progress').val();
		val=val+prog; $('progress').next("p").html(val+"%");
		$('progress').val(val);
	}	
$(star).css("color","blue");
$(wrg).hide();
$(rgt).show();
if($('progress').val() === 100)
	{$(state).show();}
$(objto).focus();
return ;
}

};
})(jQuery);


/* CHECKING FOR LAST NAME VALID OR NOT */
(function($) {
 $.fn.alphabetWSDValidation = function(obj,objto,str,star,rgt,wrg,state,prog) {
var letters = /^\S[a-zA-Z\. ]{0,15}\S$/;
if(!$(obj).val().match(letters))
{
	if(progress_alphabetWSD === 1)
	{
		progress_alphabetWSD=0;
		var val=$('progress').val();
		val=val-prog; $('progress').next("p").html(val+"%");
		$('progress').val(val);
	}	
$(obj).next("p").text(str+" should be "+2+" to "+15+" characters and no spaces should be there at start or end and you can use dot'.'");
$(star).css("color","red");
$(rgt).hide();
$(wrg).show();
$(obj).focus();
return ;
}
else
{
	$(obj).next("p").empty();
	if(progress_alphabetWSD === 0)
	{
		progress_alphabetWSD=1;
		var val=$('progress').val();
		val=val+prog; $('progress').next("p").html(val+"%");
		$('progress').val(val);
	}	
$(star).css("color","blue");
$(wrg).hide();
$(rgt).show();
if($('progress').val() === 100)
	{$(state).show();}
$(objto).focus();
return;
}

};
})(jQuery);


/* CHECK THE FILE UPLOADED IS VALID FORMAT */
(function($) {
 $.fn.fileValidation = function(obj,objto,str,formats,star,rgt,wrg,state,prog) {
var f_name =$(obj).val();
var fileName = f_name.split(".");
       fileName = fileName[fileName.length-1 ];
     var format= formats.split(",");
var counts=0;
for(var j=0;j<format.length;j++)
{
if(fileName.localeCompare(format[j]) ===0 )
{
	counts=1;
	break;
}
}
	
if(counts!== 0)
{	
	if(progress_file === 0)
	{
		progress_file=1;
		var val=$('progress').val();
		val=val+prog; $('progress').next("p").html(val+"%");
		$('progress').val(val);
	}	
	$(obj).next("p").empty();
	 $(star).css("color","blue");
	 		$(wrg).hide();
$(rgt).show();
	 if($('progress').val() === 100)
	{$(state).show();}
$(objto).focus();
return;
}
else
{
	if(progress_file === 1)
	{
		progress_file=0;
		var val=$('progress').val();
		val=val-prog; $('progress').next("p").html(val+"%");
		$('progress').val(val);
	}	
$(obj).next("p").text(str+" should be "+formats+" format image");
$(star).css("color","red");
$(rgt).hide();
$(wrg).show();
$(obj).focus();
return;
}

};
})(jQuery);


/* CHECKING FOR GENDER VERIFICATION */
(function($) {
 $.fn.genderValidation = function(obj,objto,state) {
 	$(obj).siblings("p").empty();
if(progress_gender === 0)
	{
		progress_gender=1;
		var val=$('progress').val();
		val=val+prog; $('progress').next("p").html(val+"%");
		$('progress').val(val);
	}	
	progress_gender=1;
if($('progress').val() === 100)
	{$(state).show();}
$(objto).focus();
return;
};
})(jQuery);



/* CHECKING FOR DAY SELECTED OR NOT */
(function($) {
 $.fn.dateValidation = function(obj1,obj2,obj3,objto,str1,str2,str3,star,rgt,wrg,state,prog) {
	var dob1= $(obj1).val();
	var dob2= $(obj2).val();
	var dob3= $(obj3).val();
if(dob1 == "default")
{
	$(star).css("color","red");
	$(rgt).hide();
	$(wrg).show();
	if(progress_year === 1 && prog === 5 )
	{
		progress_year=0;
		var val=$('progress').val();
		val=val-prog; $('progress').siblings("p").html(val+"%");
		$('progress').val(val);
	}	
	if(progress_month === 1 && prog === 3 )
	{
		progress_month=0;
		var val=$('progress').val();
		val=val-prog; $('progress').siblings("p").html(val+"%");
		$('progress').val(val);
	}	
	if(progress_day === 1 && prog === 2 )
	{
		progress_day=0;
	var val=$('progress').val();
		val=val-prog; $('progress').siblings("p").html(val+"%");
		$('progress').val(val);
	}	
if(dob2 == "default" && dob3 == "default")
{
$(obj1).siblings("p").text('Select "'+str1+' & '+str2+' & '+str3+'" from the list');
$(obj2).focus();
return  ;
}
else
{
if(dob2 == "default")
{
$(obj2).siblings("p").text('Select "'+str1+' & '+str2+'" from the list');
$(obj2).focus();
return  ;
}
else
{
	
if(dob3 == "default")
{
$(obj3).siblings("p").text('Select "'+str1+' & '+str3+'" from the list');
$(obj3).focus();
return ;
}
else
{
$(obj1).siblings("p").text('Select "'+str1+'" from the list');
$(obj1).focus();
return;
}
}
}
}
else
{
	$(obj1).siblings("p").empty();
	$(star).css("color","red");
	$(rgt).hide();
	$(wrg).show();
	if(progress_day === 0 && prog === 2 )
	{
		progress_day=1;
		var val=$('progress').val();
		val=val+prog; $('progress').siblings("p").html(val+"%");
		$('progress').val(val);
	}	
	if(progress_month === 0 && prog === 3 )
	{
		progress_month=1;
		var val=$('progress').val();
		val=val+prog; $('progress').siblings("p").html(val+"%");
		$('progress').val(val);
	}
	if(progress_year === 0 && prog === 5 )
	{
		progress_year=1;
		var val=$('progress').val();
		val=val+prog; $('progress').siblings("p").html(val+"%");
		$('progress').val(val);
	}		
if(dob2 == "default" && dob3 == "default")
{
$(obj1).siblings("p").text('Select "'+str2+' & '+str3+'" from the list');
$(obj2).focus();
return  ;
}
else
{
if(dob2 == "default")
{
$(obj2).siblings("p").text('Select "'+str2+'" from the list');
$(obj2).focus();
return  ;
}
else
{
	
if(dob3 == "default")
{
$(obj3).siblings("p").text('Select "'+str3+'" from the list');
$(obj3).focus();
return ;
}
else
{
$(star).css("color","blue");
$(wrg).hide();
$(rgt).show();
if($('progress').val() === 100)
	{$(state).show();}
	$(objto).focus();
return;
}
}
}
}
};
})(jQuery);



/* CHECK PHONE NUMBER ENTERED OR NOT AND VALIDATE ENTERED PHONE NUMBER */
(function($) {
 $.fn.phone_validations = function(obj,str,star,rgt,wrg,state,prog) {
var letters = /^\+\d\d \(\d\d\d\)-\d\d\d-\d\d\d\d$/;
if(!$(obj).val().match(letters))
{
	if(progress_bar9 === 1)
	{
		progress_bar9=0;
		var val=$('progress').val();
		val=val-prog; $('progress').next("p").html(val+"%");
		$('progress').val(val);
	}	
$(obj).next("p").text(str+" should be in this format '+91 (990)-824-7888'" );
$(star).css("color","red");
$(rgt).hide();
$(wrg).show();
$(obj).focus();
return;
}
else
{
	$(obj).next("p").empty();
if(progress_bar9 === 0)
	{
		progress_bar9=1;
		var val=$('progress').val();
		val=val+prog; $('progress').next("p").html(val+"%");
		$('progress').val(val);
		}
		$(star).css("color","blue");
			$(wrg).hide();
$(rgt).show();
	if($('progress').val() === 100)
	{$(state).show();}
return;
}

};
})(jQuery);



/* CHECK HOBBIES SELECTED OR NOT */
list=0;
(function($) {
 $.fn.checkBoxValidations = function(obj,obj1,str,star,rgt,wrg,state,prog) {

$(obj).each(function(){
    if ($(this).prop('checked')==true){ 
        list++;	
    }
    else
    {
    	list--;	
    }
});
if(list === 0)
{
	if(progress_checkbox === 1)
	{
		progress_checkbox=0;
		var val=$('progress').val();
			val=val-prog; $('progress').siblings("p").html(val+"%");
		$('progress').val(val);
		}
	$(obj1).siblings("p:last").text("Select your "+str);
	$(star).css("color","red");
	$(rgt).hide();
	$(wrg).show();
	return;
}
	else
	{
		$(obj1).siblings("p:last").empty();
		if(progress_checkbox === 0)
	{
		progress_checkbox=1;
		var val=$('progress').val();
			val=val+prog; $('progress').siblings("p").html(val+"%");
		$('progress').val(val);
		}
		$(star).css("color","blue");
		$(wrg).hide();
		$(rgt).show();
		if($('progress').val() === 100)
		{$(state).show();}
		return;		
		}
};
})(jQuery);


/* CHECK COUNTRY SELECTED OR NOT */

(function($) {
 $.fn.multipleSelectValidation = function(obj,str,star,rgt,wrg,state,prog) {
	
   var count = 0;
	var k=0;
	$( obj+" option:selected" ).each(function() {
     		 if(k===0)
    		 {
    		 MULTIPLE_SELECT_DATA=$( this ).text();k=1;
				}
				 else
				 {
				 	 MULTIPLE_SELECT_DATA= MULTIPLE_SELECT_DATA.concat(", "+$( this ).text());
				 }         
          count++;
});	
	
    if(count === 1 && $(obj+" option:selected" ).text()==='(Select atleast country your stay-in)')
{
	if(progress_multipleselect === 1)
	{
		progress_multipleselect=0;
		var val=$('progress').val();
			val=val-prog; $('progress').next("p").html(val+"%");
		$('progress').val(val);
		}
		
	$(obj).next("p").text(str);
	$(star).css("color","red");
	$(rgt).hide();
	$(wrg).show();
	return;
}
	else
	{
		$(obj).next("p").empty();
		if(progress_multipleselect === 0)
	{
		progress_multipleselect=1;
		var val=$('progress').val();
		val=val+prog; $('progress').next("p").html(val+"%");
		$('progress').val(val);
		}
		$(star).css("color","blue");
		$(wrg).hide();
		$(rgt).show();
	if($('progress').val() === 100)
	{$(state).show();}
	return;		
		}
};
})(jQuery);

