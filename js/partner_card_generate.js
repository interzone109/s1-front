


    var request = new XMLHttpRequest();
    
    request.open('GET', 'http://localhost:8080/partners', true);
    request.onload = function () {
    
      // Begin accessing JSON data here
      var data = JSON.parse(this.response);
    
      if (request.status >= 200 && request.status < 400) {
       //елемент выравнивая карточек с данными
        var partnerRow = document.createElement('div');
        partnerRow.className="row";

        data.forEach(partner => {
          // елемент с описанием данных о партнере
          var partnerData = document.createElement('div');
          partnerData.className="team-front";
          partnerData.innerHTML ="<h3>"+partner.company+"</h3><p>"
          +partner.phonNumber+"</p><p>"+partner.partnerMail+"</p> ";
          
          //елемент с функциями редактирования
          var partnerDescripion = document.createElement('div');
          partnerDescripion.className="team-back";
          partnerDescripion.innerHTML="<span>"+partner.id+"</span>";
          
          var mainContainner = document.createElement('div');
          mainContainner.className="our-team-main";
          mainContainner.appendChild(partnerData);
          mainContainner.appendChild(partnerDescripion);
          
          var partnerCol = document.createElement('div');
          partnerCol.className="col-lg-4";
          partnerCol.appendChild(mainContainner);
          
          
          partnerRow.appendChild(partnerCol);
        });
        //елемент содержащий все данные
        var partnerContainer = document.createElement('div');
        partnerContainer.className="container";
        partnerContainer.appendChild(partnerRow);
        document.getElementById('partnerCardContainer').appendChild(partnerContainer);
        
      } else {
        console.log('error');
      }
    }
    
    request.send();
    

