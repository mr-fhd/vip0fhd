<!-- Bootstrap core JavaScript -->
    <script src="https://www.musetemplatespro.com/preview/codecan/musicplaylistjs/vendor/jquery/jquery.min.js"></script>

   
    <!-- Plugin JavaScript -->
    <script src="https://www.musetemplatespro.com/preview/codecan/musicplaylistjs/vendor/jquery-easing/jquery.easing.min.js"></script>
    
 
    <script src="https://www.musetemplatespro.com/preview/codecan/musicplaylistjs/js/musicPlaylist.min.js"></script>
    
    <script>
    $('#playlist').musicPlaylist({
 
        //Main Options
        playerWidth: '40%', // Player width. Set it in percents (%) to make it responsive or in pixels (px) to make it fixed width
        playerColor: '#000', // Player background color
        playerOpacity: '0.8', // Player and playlist background opacity: 0.1 - 1
        iconColor: '#fff', // Player icons color
        slidersBackgroundColor: '#333333', // Time and volume sliders background color
        slidersValueColor: '#FF0000', // Time and volume sliders active color
        playerSize: 'big', // Tracks artwork size: big, small
        titleSize: '15px', // Tracks title size
        titleColor: '#fff', // Tracks title color
        titleFontFamily: 'arial', // Tracks title font
        startingVolume: '100', // Initial player volume: 0 - 100
 
        //Playlist Options  
        showPlayList: 'show', // Show playlist initially: show, hide
        trackImageSize: '40px', // Tracks artwork size in the playlist
        trackTextColor: '#fff', // Tracks title color in the playlist
        trackTextSize: '14px', // Tracks title size in the playlist
        trackFontFamily: 'arial', // Tracks title font in the playlist
        playlistColor: '#4c4c4c', // Playlist background color
        activeTrackBackground: '#525252', // Active track in the playlist color
        activeTrackTextColor: '#fff', // Active track title color in the playlist
        separatorColor: '#000', // Tracks separator color
    });
	</script>
