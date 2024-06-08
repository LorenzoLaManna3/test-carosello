const $ = str => document.querySelector(str); // Questa funzione restituisce il primo elemento all'interno del documento che corrisponde al selettore specificato. serve per scrivere di meno.
const $$ = str => document.querySelectorAll(str);

document.getElementById('carouselwithbuttons').innerHTML = `
  <div id="carousel" class="carousel">
    <div id='item_0'>
      <a href="https://www.youtube.com/watch?v=ywthKNqI7uI"></a>
      <img src="https://picsum.photos/300/200?random=99">
    </div>

    <div id='iten_1'>
      <a href="/test-carosello/copiatore.html"></a>
      <img src="https://picsum.photos/300/200?random=15">
    </div>

    <div id='item_2'>
      <img src="https://picsum.photos/300/200?random=16">
    </div>

    <div id='item_3'>
      <img src="https://picsum.photos/300/200?random=17">
    </div>

    <div id='item_4'>
      <img src="https://picsum.photos/300/200?random=18">
    </div>

    <div id='item_5'>
      <img src="https://picsum.photos/300/200?random=19">
    </div>

    <div id='item_6'>
      <img src="https://picsum.photos/300/200?random=20">
    </div>

    <div id='item_7'>
      <img src="https://picsum.photos/300/200?random=21">
    </div>

    <div id='item_8'>
      <img src="https://picsum.photos/300/200?random=22">
    </div>

    <div id='item_9'>
      <img src="https://picsum.photos/300/200?random=1">
    </div>

    <div id='item_10' class="selected">
      <img src="https://picsum.photos/300/200?random=2">
    </div>

    <div id='item_11'>
      <img src="https://picsum.photos/300/200?random=3">
    </div>

    <div id='item_12'>
      <img src="https://picsum.photos/300/200?random=4">
    </div>

    <div id='item_13'>
      <img src="https://picsum.photos/300/200?random=5">
    </div>

    <div id='item_14'>
      <img src="https://picsum.photos/300/200?random=6">
    </div>

    <div id='item_15'>
      <img src="https://picsum.photos/300/200?random=7">
    </div>

    <div id='item_16'>
      <img src="https://picsum.photos/300/200?random=8">
    </div>

    <div id='item_17'>
      <img src="https://picsum.photos/300/200?random=9">
    </div>

    <div id='item_18'>
      <img src="https://picsum.photos/300/200?random=10">
    </div>

    <div id='item_19'>
      <img src="https://picsum.photos/300/200?random=11">
    </div>
  </div>
  <div id="background" class="background">
    <div id='item_0'>
      <img src="https://picsum.photos/1080/720?random=98">
    </div>

    <div id='iten_1'>
      <img src="https://picsum.photos/1080/720?random=58">
    </div>

    <div id='item_2'>
      <img src="https://picsum.photos/1080/720?random=57">
    </div>

    <div id='item_3'>
      <img src="https://picsum.photos/1080/720?random=56">
    </div>

    <div id='item_4'>
      <img src="https://picsum.photos/1080/720?random=55">
    </div>

    <div id='item_5'>
      <img src="https://picsum.photos/1080/720?random=54">
    </div>

    <div id='item_6'>
      <img src="https://picsum.photos/1080/720?random=53">
    </div>

    <div id='item_7'>
      <img src="https://picsum.photos/1080/720?random=52">
    </div>

    <div id='item_8'>
      <img src="https://picsum.photos/1080/720?random=50">
    </div>

    <div id='item_9'>
      <img src="https://picsum.photos/1080/720?random=1">
    </div>

    <div id='item_10'>
      <img src="https://picsum.photos/1080/720?random=2">
    </div>

    <div id='item_11'>
      <img src="https://picsum.photos/1080/720?random=3">
    </div>

    <div id='item_12'>
      <img src="https://picsum.photos/1080/720?random=4">
    </div>

    <div id='item_13'>
      <img src="https://picsum.photos/1080/720?random=5">
    </div>

    <div id='item_14'>
      <img src="https://picsum.photos/1080/720?random=6">
    </div>

    <div id='item_15'>
      <img src="https://picsum.photos/1080/720?random=7">
    </div>

    <div id='item_16'>
      <img src="https://picsum.photos/1080/720?random=8">
    </div>

    <div id='item_17'>
      <img src="https://picsum.photos/1080/720?random=9">
    </div>

    <div id='item_18'>
      <img src="https://picsum.photos/1080/720?random=10">
    </div>

    <div id='item_19'>
      <img src="https://picsum.photos/1080/720?random=11">
    </div>
  </div>
  <div class="buttons">
    <button class="button-82-pushable" role="button" id="prev">
      <span class="button-82-shadow"></span>
      <span class="button-82-edge"></span>
      <span class="button-82-front text">Previous</span>
    </button>


    <button class="button-82-pushable" role="button" id="next">
      <span class="button-82-shadow"></span>
      <span class="button-82-edge"></span>
      <span class="button-82-front text">Next</span>
    </button>

    <button class="button-82-pushable" role="button" id="random">
      <span class="button-82-shadow"></span>
      <span class="button-82-edge"></span>
      <span class="button-82-front text">Random</span>
    </button>
  </div>
`;



if (!window.app) { // viene creato app, "window" serve per accedere e manipolare varie proprietà e metodi relativi alla finestra del browser, 
  window.app = {};
};

app.carousel = {
  removeClass: function (el, classname = '') { //Questo funzione serve per rimuovere una classe da un elemento HTML.
    if (el) { //verifica l'esistenza di el
      if (classname === '') {
        el.className = ''; // Se il parametro classname è vuoto, viene rimossa tutte le classi dall'elemento el.
      } else {
        el.classList.remove(classname); // opppure viene rimosso la classe specificata dal parametro classname dall'elemento el.
      }
      return el; // Viene ritornato l'elemento el dopo aver rimosso la classe se è stata effettivamente rimossa.
    }
    return;
  },
  superReorder: function () { // questa funzione serve per riodinare meglio il carosello, in caso del randomizzazione degli elmenti interni ad esso
    let childcnt = $("#carousel").children.length;
    let childs = $("#carousel").children;
    console.log("childcounter" + childcnt);
    let halfchilds = Math.floor(childcnt / 2);
    let prehalf = halfchilds - 1;
    let preprehalf = prehalf - 1;
    let nexhalf = halfchilds + 1;
    let nexnexhalf = nexhalf + 1;
    console.log("halfchilds" + halfchilds);
    for (let j = 0; j < childcnt; j++) {
      childs[j].dataset.pos = j;
      childs[j].classList.remove("selected", "hideLeft", "hideRight", "prevLeftSecond", "nextRightSecond", "prev", "next");
      if (j < preprehalf) {
        childs[j].classList.add("hideLeft")
      };
      if (j > nexnexhalf) {
        childs[j].classList.add("hideRight")
      };
    };
    childs[halfchilds].classList.add("selected");
    childs[prehalf].classList.add("prev");
    childs[preprehalf].classList.add("prevLeftSecond");
    childs[nexhalf].classList.add("next");
    childs[nexnexhalf].classList.add("nextRightSecond");
  },
  reorder: function () { // da un volore posizionale numerico agli elementi div (con le immagini) dentro il carosello, riordina il carosello
    let childcnt = $("#carousel").children.length; //questa variabile definisce il numero di figli dell'elemento con id "carousel" presente nell'HTML.
    let childs = $("#carousel").children; // var che contiene tutti i figli dell'elemento con id "carousel".
    console.log("childcounter" + childcnt);
    for (let j = 0; j < childcnt; j++) { // completato il ciclo, ogni figlio dell'elemento con id "carousel" avrà un attributo "data-pos" (posizione nel carosello) con il valore della sua posizione all'interno della lista.
      childs[j].dataset.pos = j;
    }
  },
  move: function (el) { //"el" come parametro
    let selected = el; //"selected" viene inizializzata con il valore dell'elemento "el".

    if (typeof el === "string") { // Viene eseguito un controllo condizionale per verificare se "el" è una stringa. Questo ciclo sia attiva solo con i tasti (sia virtuali che analogici), ma non cliccando direttamente sulle immagini
      console.log(`got string: ${el}`); //Se "el" è una stringa, verrà stampato un messaggio di log contenente la stringa "got string" seguita dal valore di "el".
      selected = (el == "next") ? $(".selected").nextElementSibling : $(".selected").previousElementSibling; // se "el" è uguale a "next", "selected" verrà impostata come l'elemento successivo all'elemento selezionato ("selected") all'interno del html ; altrimenti viene impostato come l'elemento precedente.
      console.dir(selected); //Viene stampato in console un oggetto contenente le informazioni dell'elemento "selected".
    }

    let curpos = parseInt(app.selected.dataset.pos); // posizione corrente
    let tgtpos = parseInt(selected.dataset.pos); //  posizione desiderata 

    let cnt = curpos - tgtpos; // cnt: differenza tra posizione coorente e desiderta
    let dir = (cnt < 0) ? -1 : 1; // viene determinata la direzione (dir) in base a "cnt" 
    let shift = Math.abs(cnt); // si dichiara di quante immagini spostarsi: il valore assouluto di "cnt" dato a "shift"

    for (let i = 0; i < shift; i++) { // il ciclo si attiva se "shift" è maggiore di 0 
      let el = (dir == -1) ? $("#carousel").firstElementChild : $("#carousel").lastElementChild; // se la direzione è negativa, "el" verrà impostato come il primo elemento figlio di "corousel", altrimenti l'ultimo elemento figlio
      if (dir == -1) { // si attiva se la direzione è negativa
        el.dataset.pos = $("#carousel").children.length; // la posizione dell'elemento "el" viene impostato con il valore della lunghezza dei figli di #carousel (numero di imaggini nel carosello)
        $('#carousel').append(el); // e l'elemento viene aggiunto alla fine del carosello
      } else {
        el.dataset.pos = 0; // altrimenti la posizione viene impostata a 0
        $('#carousel').prepend(el); // e l'elemento viene aggiunto all'inizio del carosello
      };
      app.carousel.reorder(); // si riattiva la funzione per riordinare il nemero posizionale degli elementi del carosello
    };


    app.selected = selected; // Viene assegnato alla variabile app.selected il valore della variabile selected.
    let next = selected.nextElementSibling;// (((? selected.nextElementSibling : selected.parentElement.firstElementChild; ))) Viene assegnato alla variabile next l'elemento successivo a quello selezionato (selected) all'interno del html.
    var prev = selected.previousElementSibling; // (((? selected.previousElementSibling : selected.parentElement.lastElementChild;))) invece quello precedente per "prev"
    var prevSecond = prev ? prev.previousElementSibling : selected.parentElement.lastElementChild; // Viene assegnato a prevSecond l'elemento precedente al precedente (prev), se esiste. Altrimenti, viene assegnato come valore l'ultimo elemento figlio
    var nextSecond = next ? next.nextElementSibling : selected.parentElement.firstElementChild;  // invece a prevSecond  si assegna l'elemento successivo del successivo (next), se esiste. Altrimenti, viene assegnato come valore il primo elemento figlo

    selected.className = ''; // Si rimuove la classe CSS attuale dalla variabile selected
    selected.classList.add("selected"); // e si aggiunge la classe CSS "selected".

    app.carousel.removeClass(prev).classList.add('prev'); // Si rimuove la classe CSS prev dalla variabile app.carousel e si aggiunge la classe "prev".
    app.carousel.removeClass(next).classList.add('next'); // Si rimuove la classe CSS next dalla variabile app.carousel e si aggiunge la classe "next".

    app.carousel.removeClass(nextSecond).classList.add("nextRightSecond"); // Si rimuove la classe CSS nextSecond dalla variabile app.carousel e si aggiunge la classe "nextRightSecond".
    app.carousel.removeClass(prevSecond).classList.add("prevLeftSecond"); // Si rimuove la classe CSS prevSecond dalla variabile app.carousel e si aggiunge la classe "prevLeftSecond".

    app.carousel.nextAll(nextSecond).forEach(item => { item.className = ''; item.classList.add('hideRight') }); //Si rimuovono tutte le classi CSS nextSecond dall'elemento successivo nella variabile app.carousel e si aggiunge la classe "hideRight".
    app.carousel.prevAll(prevSecond).forEach(item => { item.className = ''; item.classList.add('hideLeft') }); //Si rimuovono tutte le classi CSS prevSecond dall'elemento precedente nella variabile app.carousel e si aggiunge la classe "hideLeft".

    backgroundMove();
  },
  nextAll: function (el) {
    let els = []; // array

    if (el) {  // Viene verificato se el esiste e non è vuoto. 
      while (el = el.nextElementSibling) { els.push(el); } // il ciclo continua finché el ha un elemento successivo, e ogni volta si aggiunge "l'elemento successivo" a "els" tramite il metodo push.
    }

    return els; // finito il ciclo l'array els contenente tutti gli elementi successivi di el viene restituito dalla funzione.

  },
  prevAll: function (el) {
    let els = [];

    if (el) {
      while (el = el.previousElementSibling) { els.push(el); }
    }


    return els;
  },
  keypress: function (e) { //evento keypress: viene attivato quando un tasto (della tastiera dio can) viene premuto.
    switch (e.which) {
      case 37: // left
        app.carousel.move('prev');
        break;

      case 39: // right
        app.carousel.move('next');
        break;

      default: // Se viene premuto un tasto diverso da quello previsto (37 o 39), la funzione esce senza fare nulla.
        return;
    }
    e.preventDefault(); // per evitare il comportamento predefinito associato alla pressione del tasto sulla tastiera.
    return false; // per indicare che la gestione dell'evento keypress è stata completata.
  },
  select: function (e) { // evento per far muovere le immagini con il click del mouse direttamente sulle immagini del ccarosello
    console.log(`select: ${e}`); // stampato in console il messaggio "select: ${e}", dove ${e} rappresenta il valore del parametro passato alla funzione.
    let tgt = e.target; // let = immagine selezionata
    while (!tgt.parentElement.classList.contains('carousel')) { // ciclo che continua finché il genitore di "tgt" non contiene la classe 'carousel'. ????
      tgt = tgt.parentElement; //l'elemento genitore di "tgt" viene assegnato nuovamente a "tgt".
      console.log(`tgt: ${tgt}`);
    }
    app.carousel.move(tgt); //  viene chiamato il metodo "move" passando come argomento "tgt".
  },
  previous: function (e) { // per far funzionare il tasto "precedente" (non della tasstiera)
    app.carousel.move('prev');
  },
  next: function (e) { // per far funzionare il tasto "successivo" (non della tastiera)
    app.carousel.move('next');
  },
  random: function () { // usanndo il tasto random, verrà attivato netx per un numero randomico di volte
    console.log(`random`)
    let childcnt = $("#carousel").children.length;
    let randomNumber
    do { // per generare il numero randomico, affinche non riporti alla stessa immagine
      randomNumber = Math.floor(Math.random() * childcnt) + 1;  // Genera un numero randomico tra 1 e il numero di immagini nel carosello
      console.log("temprandomnumber:" + randomNumber);
    } while (randomNumber === childcnt); // per non riportare alla stessa immagine
    console.log("childcounter" + childcnt);
    console.log("finalrandomnumber:" + randomNumber);
    for (let r = 0; r < randomNumber; r++) { // Esegui il ciclo for con il valore randomico
      console.log("Iterazione numero " + r);
      app.carousel.next('e')
    };
  },
  doDown: function (e) {  // viene chiamata quando l'utente fa clic su un elemento del carosello e tiene premuto il mouse
    console.log(`down: ${e.x}`);
    app.carousel.state.downX = e.x; //Viene registrata la posizione orizzontale del mouse al momento del clic.
  },
  doUp: function (e) { // viene chiamata quando l'utente rilascia il mouse dopo aver tenuto premuto
    console.log(`up: ${e.x}`);
    let direction = 0,
      velocity = 0;

    if (app.carousel.state.downX) { // Viene verificato se è stato salvato un valore in app.carousel.state.downX.
      direction = (app.carousel.state.downX > e.x) ? -1 : 1; // viene calcolata la direzione del movimento: se la coordinata x del down è maggiore di quella dell'up viene asseganto -1 e 1 altrimenti.
      velocity = app.carousel.state.downX - e.x; // calcolata la velocità del movimento sottraendo le due coordinate una dall'altra.

      if (Math.abs(app.carousel.state.downX - e.x) < 10) { //viene verificato se la differenza tra le 2 coordinate è inferiore a 10
        app.carousel.select(e);
        return false; // viene chiamata la funzione select dell'oggetto carousel di app e viene restituito false.
      }
      if (direction === -1) { // se la direzione è negativa
        app.carousel.move('next'); // si passa alla prossima immagine
      } else {
        app.carousel.move('prev'); // altrimenti a quella precedente
      }
      // app.carousel.state.downX = 0; // si resetta il valore 
    }
  },
  init: function () { // per far funzionare i vari modi per muovere il carosello
    document.addEventListener("keydown", app.carousel.keypress); // per la tastiera
    $('#carousel').addEventListener("click", app.carousel.select, true);
    $("#carousel").addEventListener("mousedown", app.carousel.doDown);
    $("#carousel").addEventListener("touchstart", app.carousel.doDown, { passive: true }); // crhome mi ha puntato il ferro per mettere questa cosa
    $("#carousel").addEventListener("mouseup", app.carousel.doUp);
    $("#carousel").addEventListener("touchend", app.carousel.doUp);

    app.carousel.reorder(); // per richiamare la funzione per riordinare gli elementi del carosello.
    $('#prev').addEventListener("click", app.carousel.previous); // per far funzionare il pulasante indietrp
    $('#next').addEventListener("click", app.carousel.next); // per quello avanti
    $('#random').addEventListener("click", app.carousel.random);
    app.selected = $(".selected");
  },
  state: {}

}
app.carousel.init();

function backgroundMove() { //questa funzione serve per far apparire lo sofnod corrispondente all immagine del carosello
  const selectedItem = $('.selected'); // Seleziona l'elemento con classe "selected" nel primo div
  const itemId = selectedItem.getAttribute('id'); // Ottieni l'id dell'elemento selezionato
  console.log(itemId);
  let childcnt = $(".background").children.length;
  let childs = $(".background").children;
  for (let b = 0; b < childcnt; b++) { //per rimuovere show a tutti
    childs[b].classList.remove("show");
    };
  const correspondingItem = $(`.background #${itemId}`); // Mostra solo l'elemento corrispondente
  correspondingItem.classList.add("show");
}


//
//function shuffle(array) {  //per mescolare le immagini (o meglio l'array children) del carosello
//    var currentIndex = array.length, // rappresenta l'indice corrente dell'array
//        temporaryValue, randomIndex; // temporaryValue: contiene temporaneamente il valore corrente per lo scambio , randomIndex : contiene l'indice casuale generato per lo scambio.
//    while (0 !== currentIndex) { //il ciclo continua finche l'indice corrente non è zero, in questo ciclo 2 immagini vengono scambiate
//        randomIndex = Math.floor(Math.random() * currentIndex);
//        while (randomIndex === pos) {
//            randomIndex = Math.floor(Math.random() * currentIndex);
//            console.log("new random index")
//        };
//        currentIndex -= 1; //  indice corrente ridotto di uno
//        if (currentIndex !== pos) {
//            temporaryValue = array[currentIndex]; //  salvato il valore corrente dell'array in temporaryValue.
//        array[currentIndex] = array[randomIndex]; // Viene scambiato il valore corrente con il valore in posizione randomIndex.
//        array[randomIndex] = temporaryValue; // Viene salvato il valore temporaneo temporaryValue nella posizione randomIndex.
//        };
//    }
//    return array; // Una volta completato il ciclo, la funzione restituisce l'array ora mescolato.
//};
//
//const container = document.querySelector('.carousel');
//
//const children = [...container.children]; // dichiara una variabile children che contiene una copia degli elementi figli dell'elemento container.
//
//
//// Seleziona l'elemento unico con classe "selected" all'interno del div carousel
//var selectedElement = carousel.querySelector('.selected');
//
//// Ottieni il valore del dataset.pos dell'elemento selezionato
//var pos = selectedElement.dataset.pos;
//
//// Stampare il valore di dataset.pos
//console.log(pos);
//
//shuffle(children); // per attivare la funzione che mischiera array children.
//
//
//
//for (const child of children) { // per aggiungere ciascun elemento dell'array come figlio dell'elemento container.
//    container.appendChild(child);
//};




////quanche volta il randdom iniziale crea dei bug, forse causato dal fatto che si utilizza lo spostamento prima che la pagina si carichi compleatmanete //



// situzione: se si dovesse inserire nella pagina di un gioco "x" il carosello, dentro il carosello (altri giochi) ci sarebbe lo stesso gioco:
// se vorremmo levarlo dovremmo creare una fuction (che deve essere onload), che in base a un id dentro all'html, vada a rimuovere sia un div corrispondente dentro "carousel" sia dentro "background"


// dubbio: siccome le pagine dei giochi forse saranno dentro una cartello, abbiamo 2 situazioni:
// 1.:  Non farlo, e lasciarli nella cartella repository
// 2.: avere due html dello stesso carosello, uno per l'index, l'altro 
// 3.: provare questo metodo per andare alla radice (root): href:"/page.html" o href: "/cartella/page.html, aggiungendo "/" prima del file o cartella