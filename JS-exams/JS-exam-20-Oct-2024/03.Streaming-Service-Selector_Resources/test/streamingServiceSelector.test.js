import { expect } from "chai";
import { streamingServiceSelector } from "../streamingServiceSelector.js";

describe('streamingServiceSelector tests', () => {
    describe('selectingContent', () => {
        it('not supported genre throws', () => {
            expect(() => streamingServiceSelector.selectingContent('Movie', 'Netflix', 'genre1')).to.throw('We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.');
        });

        it('not supported "Movie" type throws', () => {
            expect(() => streamingServiceSelector.selectingContent('someType1', 'Netflix', 'Action')).to.throw("We currently only support 'Movie' or 'TV Show' types.");
        });

        it('not supported "TV Show" type throws', () => {
            expect(() => streamingServiceSelector.selectingContent('someType2', 'Netflix', 'Action')).to.throw("We currently only support 'Movie' or 'TV Show' types.");
        });

        it('valid inputs return valid message', () => {
            expect(streamingServiceSelector.selectingContent('Movie', 'Netflix', 'Comedy')).to.equal('You can watch this Comedy Movie on Netflix. Enjoy your Comedy-filled experience!');
        });
    });

    describe('availablePlatforms', () => {
        it('successfull platform remove', () => {
            expect(streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], 1)).to.equal('Other available platforms are: Netflix, Disney+.');
        });

        it('validate input parameters', () => {
            expect(() => streamingServiceSelector.availablePlatforms('a', 1)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(1, 0)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(null, 1)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(undefined, 1)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], 3)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], 'a')).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], [1])).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], null)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(["Netflix", "HBO", "Disney+"], undefined)).to.throw('Invalid platform selection.');
        });
    });

    describe('contentRating', () => {
        
        it('rating = 7 return valid message', () => {
            expect(streamingServiceSelector.contentRating(60, 7)).to.equal('This content is highly rated (7/10) and has a runtime of 1.00 hours. Enjoy your watch!');
        });

        it('rating > 7 return valid message', () => {
            expect(streamingServiceSelector.contentRating(60, 7)).to.equal('This content is highly rated (7/10) and has a runtime of 1.00 hours. Enjoy your watch!');
        });

        it('rating > 7 return valid message', () => {
            expect(streamingServiceSelector.contentRating(120, 4)).to.equal('This content has a lower rating (4/10) and runs for 2.00 hours. You might want to check reviews first.');
        });

        it('validate input parameters', () => {
            expect(() => streamingServiceSelector.contentRating(0, 5)).to.throw('Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating(-1, 5)).to.throw('Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating(1, 11)).to.throw('Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating(0, 11)).to.throw('Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating(-1, 11)).to.throw('Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating(2, -3)).to.throw('Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating({}, 11)).to.throw('Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating([2], 11)).to.throw('Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating(2, [11])).to.throw('Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating(3, {})).to.throw('Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating(3, [11])).to.throw('Invalid runtime or rating.');
        });
    });
});