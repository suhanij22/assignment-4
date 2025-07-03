function tipcalc(){
            let name1=document.querySelector('.bill');
            let name2=Number(name1.value);
            let name3=document.querySelector('.tip');
            let name4=Number(name3.value);
            let cal=(name2*name4)/100;
            console.log(cal);

            let dis=document.querySelector('.display');
            dis.innerHTML=`<u>Tip to be paid: $${cal}</u>`;
            name1.value='';
            name3.value='';
            let dis1=document.querySelector('.thank');
            dis1.innerHTML=`THANK YOU!`;
            return cal;

        }