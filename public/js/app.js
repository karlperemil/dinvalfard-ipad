function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

var copy = {
    vardcentral: {
        introtitle: 'Vill du lägga ner<br>517 av Sveriges<br>vårdcentraler?',
        introbody: '42% av Sveriges vårdcentraler drivs idag i privat regi. Men nu hotar ett politiskt förslag deras överlevnad. Blir förslaget verklighet innebär det inte bara att det blir längre till din närmsta vårdcentral. Vårdköerna kommer också att bli längre och din valfrihet kommer att minska.<br>Vill du det?',
        yestitle: 'Tråkigt att du<br>känner dig missnöjd<br>med den privata<br>vården!',
        yesbody: 'Läs mer om hur din vård och omsorg kan komma att drabbas av det politiska förslaget på <a href="http://www.dinvalfard.se">dinvalfard.se</a>',
        notitle: 'Tack för att du<br>hjälper till att rädda<br>välfärden!',
        nobody: 'Läs mer om hur det ser ut för din vård och omsorg och visa ditt stöd på<br><a href="http://www.dinvalfard.se">dinvalfard.se</a>'
    },
    aldreboenden: {
        introtitle: 'Vill du lägga ner<br>517 av Sveriges<br>äldreboenden?',
        introbody: '42% av Sveriges vårdcentraler drivs idag i privat regi. Men nu hotar ett politiskt förslag deras överlevnad. Blir förslaget verklighet innebär det inte bara att det blir längre till din närmsta vårdcentral. Vårdköerna kommer också att bli längre och din valfrihet kommer att minska.',
        yestitle: 'Tråkigt att du<br>känner dig missnöjd<br>med den privata<br>vården!',
        yesbody: 'Läs mer om hur din vård och omsorg kan<br>komma att drabbas och visa ditt stöd på<br><a href="http://www.dinvalfard.se">dinvalfard.se</a>',
        notitle: 'Tack för att du<br>hjälper till att rädda<br>välfärden!',
        nobody: 'Läs mer om hur din vård och omsorg kan komma att drabbas av det politiska förslaget och visa ditt stöd på<br><a href="http://www.dinvalfard.se">dinvalfard.se</a>'
    },
    specialistvard: {
        introtitle: 'Vill du lägga ner<br>517 av Sveriges<br>specialistvård?',
        introbody: '42% av Sveriges vårdcentraler drivs idag i privat regi. Men nu hotar ett politiskt förslag deras överlevnad. Blir förslaget verklighet innebär det inte bara att det blir längre till din närmsta vårdcentral. Vårdköerna kommer också att bli längre och din valfrihet kommer att minska.',
        yestitle: 'Tråkigt att du<br>känner dig missnöjd<br>med den privata<br>vården!',
        yesbody: 'Läs mer om hur din vård och omsorg kan<br>komma att drabbas och visa ditt stöd på<br><a href="http://www.dinvalfard.se">dinvalfard.se</a>',
        notitle: 'Tack för att du<br>hjälper till att rädda<br>välfärden!',
        nobody: 'Läs mer om hur din vård och omsorg kan komma att drabbas av det politiska förslaget och visa ditt stöd på<br><a href="http://www.dinvalfard.se">dinvalfard.se</a>'
    }
}

$(document).ready(function(){
    console.log(getUrlVars());
    var nameKey = getUrlVars()['namn'];
    console.log(nameKey);
    var pageCopy = copy[nameKey];
    console.log(pageCopy);

    window.trackingName = nameKey;
    $('#question h1').html(pageCopy.introtitle);
    $('#question p').html(pageCopy.introbody);
    $('#no h2').html(pageCopy.notitle);
    $('#no p').html(pageCopy.nobody);
    $('#yes h2').html(pageCopy.yestitle);
    $('#yes p').html(pageCopy.yesbody);

    console.log('ready');
    $('.button-yes').click(function(){
        $('#question').hide();
        $('#yes').show();
        reset();
        ga('send', {
            hitType: 'event',
            eventCategory: trackingName,
            eventAction: 'Ja'
        });
    });
    $('.button-no').click(function(){
        $('#question').hide();
        $('#no').show();
        reset();
        ga('send', {
            hitType: 'event',
            eventCategory: trackingName,
            eventAction: 'Nej'
        });
    });
})

function reset(){
    setTimeout(function(){
        $('#question').show();
        $('#no, #yes').hide();
        ga('send', {
            hitType: 'event',
            eventCategory: trackingName,
            eventAction: 'reset page'
        });
    },20000);
}