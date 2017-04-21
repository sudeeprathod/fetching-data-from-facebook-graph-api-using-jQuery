 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {

    var myFacebookToken = 'EAACEdEose0cBAPZCGsypZAm6loFlauodUoldzyeRRJlKW5clsomZCuasf9ctSkJ7Q5HwjJFQTwSUmD0QP1VmkXUSobxsZCSQnn79iBm9khnubFiDVU67S5iUfkfjjbEh5TIdHzl5yES5ZAGy6wMMQZCDWA6PwO6oWNZBaXLq5PgyTCKTImjXjG3FPeZBPnVFfRoZD';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?fields=hometown,location,birthday,feed,email,name&access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#myEmail").text(response.email);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#myHomeTown").text(response.hometown.name);
                    $("#myCurrentCity").text(response.location.name);
                    $("#myBirthDay").text(response.birthday);
                    $("#myName").text(response.name);
                    $("#myFeed").text(response.feed.data.posts);
                    var fbData = response.feed.data;
                    var html = "";
                    html+="<ul>";

                    jQuery.each(fbData,function(i,val) {
                        console.log(fbData[i].id);

                    console.log(fbData[i].story);
                    
                    html+="<li>";

                    html+='<p>'+fbData[i].story+"</p>"+"</li>";

                    html+='<p>'+fbData[i].id+"</p>"+"</li>";

                    html+='<p>'+fbData[i].message+"</p>"+"</li>";




                    });
                    $("#fbFeed").append(html);
                    html+="</ul>";




                    }
                
            }//end argument list 


        );// end ajax call 

    }// end get facebook info

    $("#facebookBtn").on('click',getFacebookInfo)



  });
  