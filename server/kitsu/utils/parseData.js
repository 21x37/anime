const parseData = ( data ) => {
    const animes = [];
    data.forEach((anime) => {
        const details = {
            name: anime.attributes.canonicalTitle,
            description: anime.attributes.synopsis,
            ageRating: anime.attributes.ageRating,
            image: anime.attributes.posterImage.large,
            episodes: anime.attributes.episodeCount
        };
        animes.push(details);
    });
    return animes;
};

module.exports = parseData;