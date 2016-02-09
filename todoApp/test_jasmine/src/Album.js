var Album = Backbone.Collection.extend({
  model: Song,
  url: '/api/songs',

  getPopularSong: function () {
    if (this.length == 0) {
      return undefined
    }

    var sortedSongs = this.sortBy(function (song) {
      return song.get('numberOfPlays')
    })

    return sortedSongs[sortedSongs.length - 1]
  }

  describe('getPopularSong', function () {
    it('should return undefined if the collection is empty.', function(){

    });
    it("should return the song with the highest number of plays if the collection is not empty", function() );

  });


})
