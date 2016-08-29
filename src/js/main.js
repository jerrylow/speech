// Speech Main Script

(function($) {
  var finalTranscript = '';
  var recognitionOn = false;
  var recognition = null;
  var checkTimer;
  var checkTime = 5000;

  var capitalize = function(s) {
    return s.replace(/\S/, function(m) { return m.toUpperCase(); });
  }

  var check = function() {
    if (!recognitionOn) {
      recognition.start();
    }

    checkTimer = setTimeout(function() {
      check();
    }, checkTime);
  };

  // User Webkit Speech API
  var start = function() {
    recognition = new webkitSpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;

    // On Start Do This
    recognition.onstart = function() {
      recognitionOn = true;
    };

    // On Start Do This
    recognition.onend = function() {
      recognitionOn = false
    };

    // On Results Do This
    recognition.onresult = function(event) {
      var interimTranscript = '';

      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += capitalize(event.results[i][0].transcript) + '. ';
          $('.speech').removeClass('active');
        } else {
          interimTranscript += event.results[i][0].transcript;
          $('.speech').addClass('active');
        }
      }

      $('.final').html(finalTranscript);
      $('.interim').html(interimTranscript);
    };

    recognition.start();

    checkTimer = setTimeout(function() {
      check();
    }, checkTime);
  };

  if (!('webkitSpeechRecognition' in window)) {
    // Find alternative JS for Safari
  }
  else {
    if ($('main').hasClass('page-speech')) {
      start();

      $('.mic').click(function() {
        window.close();
      });
    }
  }

  // Main Page
  $('.start').click(function() {
    javascript:window.open('speech.html', "speech", "location=no, resizable=no, toolbar=no, scrollbars=no, menubar=no, status=no, directories=no, width=900, height=50");
  });
})(jQuery);
