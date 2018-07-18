'use strict';

var movies = [
    {
        id: 1,
        title: 'Drapacz Chmur',
        info: 'Akcja | od lat: 15 | 102 minuty',
        desc: 'Po wielkim sukcesie komedii „Agent i pół” (217 mln $) Rawson Marshall Thurber („Millerowie”) ponownie łączy siły z Dwaynem Johnsonem w filmie „Drapacz chumr”. Aktor wciela się w Willa Forda, weterana wojennego i byłego szefa jednostki FBI do odbijania zakładników. Teraz specjalizuje się w ochronie wieżowców. Podczas misji w Chinach największy, najbezpieczniejszy budynek świata staje w ogniu, Will wrobiony jest w odpowiedzialność za to wydarzenie. Uciekając, musi ocalić swoją rodzinę, która wciąż przebywa w budynku.',
        image: 'https://forbyen.dk/wp-content/uploads/2018/07/200x200.png',
        ticket: 'https://multikino.pl/filmy/drapacz-chmur'
    },
    {
        id: 2,
        title: 'JURASSIC WORLD: UPADŁE KRÓLESTWO',
        info: 'Przygodowy | od lat: 16 | 128 minuty',
        desc: 'Minęły trzy lata, od kiedy luksusowy park rozrywki Jurassic World został zdewastowany przez dinozaury i zamknięty. Isla Nublar jest dziś opuszczona przez ludzi, a dinozaury, które przetrwały, próbują poradzić sobie w dżungli same. Kiedy uśpiony dotąd wulkan budzi się do życia, Owen (Chris Pratt) i Claire (Bryce Dallas Howard) za wszelką cenę chcą uratować pozostałe przy życiu stwory. Owen próbuje odnaleźć Blue, zaginionego raptora, którego wychował, dla Claire ocalenie dinozaurów staje się najważniejszą misją. Kiedy przybywają na wyspę, wulkan zaczyna już wyrzucać z siebie deszcz lawy; Claire i Owen odkrywają spisek mający przywrócić Ziemię do stanu, którego nie widzieliśmy od czasów prehistorycznych.',
        image: 'http://kino.przeworsk.um.gov.pl/wp-content/uploads/jw.jpg',
        ticket: 'https://www.cinema-city.pl/filmy/jurassic-world-upadle-krolestwo#/buy-tickets-by-film?in-cinema=krakow&at=2018-07-17&for-movie=2641s2r&view-mode=list'
    },
    {
        id: 3,
        title: 'Wyszczekani',
        info: 'Komedia | od lat: 7 | 92 minuty',
        desc: 'Szalona komedia. Max, pracujący dla policji rottweiler, samotnik w typie macho, zostaje wysłany na prestiżową wystawę psów, by zbadać tajemniczą sprawę związaną z nielegalnym handlem zwierzętami. Niestety, zostaje tam wysłany wraz ze swym partnerem – człowiekiem, co rodzi mnóstwo zaskakujących i zabawnych sytuacji.',
        image: 'http://polski-dubbing.pl/wp-content/uploads/2018/05/Wyszczekani-banner.png',
        ticket: 'https://multikino.pl/filmy/wyszczekani'
    }
];

// Tworzenie elementów
var Movie = React.createClass({
    propTypes: {
        movies: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, {title: this.props.movies.title}),
                React.createElement(MovieInfo, {info: this.props.movies.info}),
                React.createElement(MovieTicket, {ticket: this.props.movies.ticket}),
                React.createElement(MovieImage, {image: this.props.movies.image}),
                React.createElement(MovieDesc, {desc:this.props.movies.desc}),
                React.createElement(HrLine)
            )
        )
    }
});

// Tworzenie klasy poszczególnych elementów
var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('h2', {}, this.props.title)
    }
});

var MovieInfo = React.createClass({
    propTypes: {
        info: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('h3', {}, this.props.info)
    },
});

var MovieTicket = React.createClass({
    propTypes: {
        ticket: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('p', {},
            React.createElement('a', {href: this.props.ticket, target: '_blank'}, 'Kup Bilet')
        )
    }
});

var MovieImage = React.createClass({
    propTypes: {
        image: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('img', {src: this.props.image})
    },
});

var MovieDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('p', {}, this.props.desc)
    },
});

var HrLine = React.createClass({
    render: function() {
        return React.createElement('hr', {})
    }
});

var MovieList = React.createClass({
    render: function() {
        return React.createElement('ul', {}, moviesElement)
    }
});

var moviesElement = movies.map(function (movie) {
    return React.createElement(Movie, {key: movie.id, movies: movie})
});

var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Lista Filmów'),
    React.createElement(MovieList, {})
);

ReactDOM.render(element, document.getElementById('app'));