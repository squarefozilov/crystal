var firtPerson ="" ;
var secondPerson = "";


function fight(first,second,firstpow,secondPower){
  //console.log("---------------"+first,second, firstpow,secondPower)
    firtPerson  = parseInt(first);
    secondPerson =  parseInt(second);
    console.log('before-subtrack'+firtPerson);
    console.log('before-subtrac'+secondPerson);
    firtPerson = firtPerson - 30;
    secondPerson = secondPerson - 40;
    console.log('first-value * '+firtPerson+" * "+secondPerson);
 
update(firtPerson,secondPerson)



  /*  if(firtPerson>=0){
        return firtPerson;
      // console.log('won'+lifefirst);
            }else{
      return secondPerson;
      // console.log('2nd won'+ lifeSecond);
                }
  */
                    }


function update(fl,sl){
 console.log('----'+fl);
  //fl.
  $('#f1').text(fl)
  $('#f2').text(sl);

  
  if(fl<=0){
    $('#f1').hide()
    alert('You lost')
    firtPerson="";

  }
  if(sl<=0){
    $('#f2').hide();
    alert('You Win');
    secondPerson="";
  }
  

}



$( document ).ready(function(){


   // var Random=Math.floor(Math.random()*101+19)
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    //
    //console.log(Random + "----"); 

var operatorUser = 0
var divUclicl = 0;






  /*  $("button").click(function(){
        $("div").animate({
          left: '250px',
          opacity: '0.5',
          height: '150px',
          width: '150px'
        });
      });*/


  $('.stars').on('click',function(){
    
   // if(!firtPerson){

    if(!firtPerson){
       firtPerson = this.innerHTML;
      
      
       $(this).animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
      });

    }else{
      secondPerson = this.innerHTML;
      $(this).animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
      });
    }
    
    

   // console.log(firtPerson);
                 //   }else{
    
      //console.log(secondPerson);
       //    }
   
    
  })




      

    $('.fight-start').on('click',function(){
       console.log(firtPerson);
      if(firtPerson != "" && secondPerson !=""){
       console.log("fight----"+firtPerson,secondPerson);


                fight(firtPerson,secondPerson,40,50);

                
      }else{
        alert('Pick up the person');
      }

    
    })
  }); 