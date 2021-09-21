function IpForm() 
            {
				var name= document.forms["Form"]["Name"];
				var email =
					document.forms["Form"]["EMail"];
				var phone =
					document.forms["Form"]["phone"];
				
				var RollNo =
					document.forms["Form"]["RollNo"];

                var div =
                    document.forms["Form"]["choice"];

                var Gender=
                        document.forms["Form"]["Gender"]

                var Lang  =
                    document.forms["Form"]["Lang"];

				var Dept =
				     document.forms["Form"]["Subject"]	

                var Country=
				    document.forms["Form"]["country"]
                var txt = "";
                var i;
                for (i = 0; i < Lang.length; i++) 
                {
                    if (Lang[i].checked) {
                        txt = txt + Lang[i].value + " ";
                    }
                }
				
               
				

				if (name.value == "") {
					window.alert("Please enter your name.");
					name.focus();
					return false;
				}

				if (RollNo.value == "") {
					window.alert("Please enter your Roll No.");
					RollNo.focus();
					return false;
				}
				
				
				if (email.value == "") {
					window.alert(
					"Please enter a valid e-mail address.");
					email.focus();
					return false;
                    
				}
                

				if (phone.value == "") {
					window.alert(
					"Please enter your phone number.");
					phone.focus();
					return false;
				}

				

			    if(div.value == "") {
                    window.alert("Select Your Div");
                    choice.focus();
                    return false;
                }
				var Data=("You've entered the following details: \n Full Name: " + name.value +"\n Email :"+ email.value +"\nRoll No :" + RollNo.value +"\nDivision :" + div.value +"\nDepartment:"+Dept.value +"\nMobile Number: " + phone.value +"\nGender: " + Gender.value +"\nLanguage:" +txt +"\n Country:"+Country.value);
				
				window.alert(Data);
            }