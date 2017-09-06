var movies = [
    {
        id: 1,
        title: 'Gladiator',
        desc: 'Movie about the gladiators',
        src: 'http://icons.iconarchive.com/icons/jake2456/movie-pack-12/256/Gladiator-icon.png'
    },
    {
        id: 2,
        title: 'Armaggeddon',
        desc: "Movie about end of the world",
        src: 'https://orig03.deviantart.net/bca2/f/2016/363/9/6/armageddon_folder_icon_by_dahlia069-datd46k.png'
    },
    {
        id: 3,
        title: 'Wonder Woman',
        desc: 'When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.',
        src: 'https://avatarfiles.alphacoders.com/814/81414.png'
    },
    {
        id: 4,
        title: 'Logan: Wolverine',
        desc: "'In the near future, a weary Logan cares for an ailing Professor X, somewhere on the Mexican border. However, Logan's attempts to hide from the world, and his legacy, are upended when a young mutant arrives, pursued by dark forces.'",
        src: 'https://pbs.twimg.com/profile_images/792095191893016576/VQFaEq6o.jpg'
    },
    {
        id: 5,
        title: 'Justice League',
        desc: "'Fueled by his restored faith in humanity and inspired by Superman's selfless act, Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy.'",
        src: 'https://orig13.deviantart.net/d11a/f/2017/103/1/7/justice_league_folder_icon_by_dahlia069-dahybxv.png'
    }
];

var Movie = React.createClass ({
    propTypes: {
        movieElement: React.PropTypes.object.isRequired,
    },
    render: function (){
        return (
            React.createElement('li', {},
                React.createElement(MovieTitle, {titleElement: this.props.movieElement.title}),
                React.createElement(MovieDescription, {descElement: this.props.movieElement.desc}),
                React.createElement(MovieImage, {srcElement: this.props.movieElement.src})
            )
        );
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        titleElement: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('h2', {}, this.props.titleElement);
    }
});

var MovieDescription = React.createClass ({
    propTypes: {
        descElement: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('p', {}, this.props.descElement);
    }
});

var MovieImage = React.createClass({
    propTypes: {
        srcElement: React.PropTypes.string.isRequired,
    },
    render: function () {
        return React.createElement('img', {src: this.props.srcElement});
    }
});

var MoviesList = React.createClass({
    propTypes: {
        movies: React.PropTypes.array.isRequired,
    },
    render: function() {
        var movies = this.props.movies.map(movie => {
            return React.createElement(Movie, {key: movie.id, movieElement: movie});
        });
        return (
            React.createElement('div', {},
                React.createElement('h1', {}, 'Movies List'),
                React.createElement('ul', {}, movies)
            )
        );
    },
});

var ListOfMovies = React.createElement(MoviesList, {movies: movies});
ReactDOM.render(ListOfMovies, document.getElementById('app'));