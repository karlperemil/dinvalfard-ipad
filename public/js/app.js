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
    console.log('ready');
    $('.button-yes').click(function(){
        $('#question').hide();
        $('#yes').show();
        reset();
    });
    $('.button-no').click(function(){
        $('#question').hide();
        $('#no').show();
        reset();
    });

    console.log(getUrlVars());
    var nameKey = getUrlVars()['namn'];
    console.log(nameKey);
    var pageCopy = copy[nameKey];
    console.log(pageCopy);
    $('#question h1').html(pageCopy.introtitle);
    $('#question p').html(pageCopy.introbody);
    $('#no h2').html(pageCopy.notitle);
    $('#no p').html(pageCopy.nobody);
    $('#yes h2').html(pageCopy.yestitle);
    $('#yes p').html(pageCopy.yesbody);


})

function reset(){
    setTimeout(function(){
        $('#question').show();
        $('#no, #yes').hide();
    },20000);
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBnZXRVcmxWYXJzKClcbntcbiAgICB2YXIgdmFycyA9IFtdLCBoYXNoO1xuICAgIHZhciBoYXNoZXMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zbGljZSh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmRleE9mKCc/JykgKyAxKS5zcGxpdCgnJicpO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBoYXNoZXMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgICBoYXNoID0gaGFzaGVzW2ldLnNwbGl0KCc9Jyk7XG4gICAgICAgIHZhcnMucHVzaChoYXNoWzBdKTtcbiAgICAgICAgdmFyc1toYXNoWzBdXSA9IGhhc2hbMV07XG4gICAgfVxuICAgIHJldHVybiB2YXJzO1xufVxuXG52YXIgY29weSA9IHtcbiAgICB2YXJkY2VudHJhbDoge1xuICAgICAgICBpbnRyb3RpdGxlOiAnVmlsbCBkdSBsw6RnZ2EgbmVyPGJyPjUxNyBhdiBTdmVyaWdlczxicj52w6VyZGNlbnRyYWxlcj8nLFxuICAgICAgICBpbnRyb2JvZHk6ICc0MiUgYXYgU3ZlcmlnZXMgdsOlcmRjZW50cmFsZXIgZHJpdnMgaWRhZyBpIHByaXZhdCByZWdpLiBNZW4gbnUgaG90YXIgZXR0IHBvbGl0aXNrdCBmw7Zyc2xhZyBkZXJhcyDDtnZlcmxldm5hZC4gQmxpciBmw7Zyc2xhZ2V0IHZlcmtsaWdoZXQgaW5uZWLDpHIgZGV0IGludGUgYmFyYSBhdHQgZGV0IGJsaXIgbMOkbmdyZSB0aWxsIGRpbiBuw6RybXN0YSB2w6VyZGNlbnRyYWwuIFbDpXJka8O2ZXJuYSBrb21tZXIgb2Nrc8OlIGF0dCBibGkgbMOkbmdyZSBvY2ggZGluIHZhbGZyaWhldCBrb21tZXIgYXR0IG1pbnNrYS4nLFxuICAgICAgICB5ZXN0aXRsZTogJ1Ryw6VraWd0IGF0dCBkdTxicj5rw6RubmVyIGRpZyBtaXNzbsO2amQ8YnI+bWVkIGRlbiBwcml2YXRhPGJyPnbDpXJkZW4hJyxcbiAgICAgICAgeWVzYm9keTogJ0zDpHMgbWVyIG9tIGh1ciBkaW4gdsOlcmQgb2NoIG9tc29yZyBrYW48YnI+a29tbWEgYXR0IGRyYWJiYXMgb2NoIHZpc2EgZGl0dCBzdMO2ZCBww6U8YnI+PGEgaHJlZj1cImh0dHA6Ly93d3cuZGludmFsZmFyZC5zZVwiPmRpbnZhbGZhcmQuc2U8L2E+JyxcbiAgICAgICAgbm90aXRsZTogJ1RhY2sgZsO2ciBhdHQgZHU8YnI+aGrDpGxwZXIgdGlsbCBhdHQgcsOkZGRhPGJyPnbDpGxmw6RyZGVuIScsXG4gICAgICAgIG5vYm9keTogJ0zDpHMgbWVyIG9tIGh1ciBkaW4gdsOlcmQgb2NoIG9tc29yZyBrYW4ga29tbWEgYXR0IGRyYWJiYXMgYXYgZGV0IHBvbGl0aXNrYSBmw7Zyc2xhZ2V0IG9jaCB2aXNhIGRpdHQgc3TDtmQgcMOlPGJyPjxhIGhyZWY9XCJodHRwOi8vd3d3LmRpbnZhbGZhcmQuc2VcIj5kaW52YWxmYXJkLnNlPC9hPidcbiAgICB9LFxuICAgIGFsZHJlYm9lbmRlbjoge1xuICAgICAgICBpbnRyb3RpdGxlOiAnVmlsbCBkdSBsw6RnZ2EgbmVyPGJyPjUxNyBhdiBTdmVyaWdlczxicj7DpGxkcmVib2VuZGVuPycsXG4gICAgICAgIGludHJvYm9keTogJzQyJSBhdiBTdmVyaWdlcyB2w6VyZGNlbnRyYWxlciBkcml2cyBpZGFnIGkgcHJpdmF0IHJlZ2kuIE1lbiBudSBob3RhciBldHQgcG9saXRpc2t0IGbDtnJzbGFnIGRlcmFzIMO2dmVybGV2bmFkLiBCbGlyIGbDtnJzbGFnZXQgdmVya2xpZ2hldCBpbm5lYsOkciBkZXQgaW50ZSBiYXJhIGF0dCBkZXQgYmxpciBsw6RuZ3JlIHRpbGwgZGluIG7DpHJtc3RhIHbDpXJkY2VudHJhbC4gVsOlcmRrw7Zlcm5hIGtvbW1lciBvY2tzw6UgYXR0IGJsaSBsw6RuZ3JlIG9jaCBkaW4gdmFsZnJpaGV0IGtvbW1lciBhdHQgbWluc2thLicsXG4gICAgICAgIHllc3RpdGxlOiAnVHLDpWtpZ3QgYXR0IGR1PGJyPmvDpG5uZXIgZGlnIG1pc3Nuw7ZqZDxicj5tZWQgZGVuIHByaXZhdGE8YnI+dsOlcmRlbiEnLFxuICAgICAgICB5ZXNib2R5OiAnTMOkcyBtZXIgb20gaHVyIGRpbiB2w6VyZCBvY2ggb21zb3JnIGthbjxicj5rb21tYSBhdHQgZHJhYmJhcyBvY2ggdmlzYSBkaXR0IHN0w7ZkIHDDpTxicj48YSBocmVmPVwiaHR0cDovL3d3dy5kaW52YWxmYXJkLnNlXCI+ZGludmFsZmFyZC5zZTwvYT4nLFxuICAgICAgICBub3RpdGxlOiAnVGFjayBmw7ZyIGF0dCBkdTxicj5oasOkbHBlciB0aWxsIGF0dCByw6RkZGE8YnI+dsOkbGbDpHJkZW4hJyxcbiAgICAgICAgbm9ib2R5OiAnTMOkcyBtZXIgb20gaHVyIGRpbiB2w6VyZCBvY2ggb21zb3JnIGthbiBrb21tYSBhdHQgZHJhYmJhcyBhdiBkZXQgcG9saXRpc2thIGbDtnJzbGFnZXQgb2NoIHZpc2EgZGl0dCBzdMO2ZCBww6U8YnI+PGEgaHJlZj1cImh0dHA6Ly93d3cuZGludmFsZmFyZC5zZVwiPmRpbnZhbGZhcmQuc2U8L2E+J1xuICAgIH0sXG4gICAgc3BlY2lhbGlzdHZhcmQ6IHtcbiAgICAgICAgaW50cm90aXRsZTogJ1ZpbGwgZHUgbMOkZ2dhIG5lcjxicj41MTcgYXYgU3ZlcmlnZXM8YnI+c3BlY2lhbGlzdHbDpXJkPycsXG4gICAgICAgIGludHJvYm9keTogJzQyJSBhdiBTdmVyaWdlcyB2w6VyZGNlbnRyYWxlciBkcml2cyBpZGFnIGkgcHJpdmF0IHJlZ2kuIE1lbiBudSBob3RhciBldHQgcG9saXRpc2t0IGbDtnJzbGFnIGRlcmFzIMO2dmVybGV2bmFkLiBCbGlyIGbDtnJzbGFnZXQgdmVya2xpZ2hldCBpbm5lYsOkciBkZXQgaW50ZSBiYXJhIGF0dCBkZXQgYmxpciBsw6RuZ3JlIHRpbGwgZGluIG7DpHJtc3RhIHbDpXJkY2VudHJhbC4gVsOlcmRrw7Zlcm5hIGtvbW1lciBvY2tzw6UgYXR0IGJsaSBsw6RuZ3JlIG9jaCBkaW4gdmFsZnJpaGV0IGtvbW1lciBhdHQgbWluc2thLicsXG4gICAgICAgIHllc3RpdGxlOiAnVHLDpWtpZ3QgYXR0IGR1PGJyPmvDpG5uZXIgZGlnIG1pc3Nuw7ZqZDxicj5tZWQgZGVuIHByaXZhdGE8YnI+dsOlcmRlbiEnLFxuICAgICAgICB5ZXNib2R5OiAnTMOkcyBtZXIgb20gaHVyIGRpbiB2w6VyZCBvY2ggb21zb3JnIGthbjxicj5rb21tYSBhdHQgZHJhYmJhcyBvY2ggdmlzYSBkaXR0IHN0w7ZkIHDDpTxicj48YSBocmVmPVwiaHR0cDovL3d3dy5kaW52YWxmYXJkLnNlXCI+ZGludmFsZmFyZC5zZTwvYT4nLFxuICAgICAgICBub3RpdGxlOiAnVGFjayBmw7ZyIGF0dCBkdTxicj5oasOkbHBlciB0aWxsIGF0dCByw6RkZGE8YnI+dsOkbGbDpHJkZW4hJyxcbiAgICAgICAgbm9ib2R5OiAnTMOkcyBtZXIgb20gaHVyIGRpbiB2w6VyZCBvY2ggb21zb3JnIGthbiBrb21tYSBhdHQgZHJhYmJhcyBhdiBkZXQgcG9saXRpc2thIGbDtnJzbGFnZXQgb2NoIHZpc2EgZGl0dCBzdMO2ZCBww6U8YnI+PGEgaHJlZj1cImh0dHA6Ly93d3cuZGludmFsZmFyZC5zZVwiPmRpbnZhbGZhcmQuc2U8L2E+J1xuICAgIH1cbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICBjb25zb2xlLmxvZygncmVhZHknKTtcbiAgICAkKCcuYnV0dG9uLXllcycpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJyNxdWVzdGlvbicpLmhpZGUoKTtcbiAgICAgICAgJCgnI3llcycpLnNob3coKTtcbiAgICAgICAgcmVzZXQoKTtcbiAgICB9KTtcbiAgICAkKCcuYnV0dG9uLW5vJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnI3F1ZXN0aW9uJykuaGlkZSgpO1xuICAgICAgICAkKCcjbm8nKS5zaG93KCk7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhnZXRVcmxWYXJzKCkpO1xuICAgIHZhciBuYW1lS2V5ID0gZ2V0VXJsVmFycygpWyduYW1uJ107XG4gICAgY29uc29sZS5sb2cobmFtZUtleSk7XG4gICAgdmFyIHBhZ2VDb3B5ID0gY29weVtuYW1lS2V5XTtcbiAgICBjb25zb2xlLmxvZyhwYWdlQ29weSk7XG4gICAgJCgnI3F1ZXN0aW9uIGgxJykuaHRtbChwYWdlQ29weS5pbnRyb3RpdGxlKTtcbiAgICAkKCcjcXVlc3Rpb24gcCcpLmh0bWwocGFnZUNvcHkuaW50cm9ib2R5KTtcbiAgICAkKCcjbm8gaDInKS5odG1sKHBhZ2VDb3B5Lm5vdGl0bGUpO1xuICAgICQoJyNubyBwJykuaHRtbChwYWdlQ29weS5ub2JvZHkpO1xuICAgICQoJyN5ZXMgaDInKS5odG1sKHBhZ2VDb3B5Lnllc3RpdGxlKTtcbiAgICAkKCcjeWVzIHAnKS5odG1sKHBhZ2VDb3B5Lnllc2JvZHkpO1xuXG5cbn0pXG5cbmZ1bmN0aW9uIHJlc2V0KCl7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAkKCcjcXVlc3Rpb24nKS5zaG93KCk7XG4gICAgICAgICQoJyNubywgI3llcycpLmhpZGUoKTtcbiAgICB9LDIwMDAwKTtcbn0iXX0=
