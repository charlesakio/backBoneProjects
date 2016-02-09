describe('Album', function () {
  var album

  beforeEach(function () {
    album = new Album()
  })

  it('url should be /api/songs', function () {
    expect(album.url).toEqual('/api/songs')
  })
})
