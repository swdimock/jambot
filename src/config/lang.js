const lang = {
  JAMMER: {
    GET: "pick jammer",
    UPDATE: "reroll jammer",
    CURRENT: "current jammer",
  },
  JAM: {
    GET: "youtube.com",
  },
  SYSTEM: {
    STATS: "get stats",
    CHALLENGE: "get challenge",
    LISTCOMMANDS: "list commands",
    SETCHANNEL: "set channel"
  },
  CHALLENGES: [
    "Jam a classic rock song",
    "Jam a 90s alt-rock song",
    "Jam a country song",
    "Jam a k-pop song",
    "Jam a death metal song",
    "Jam a hip-hop song",
    "Jam an obnoxious dubstep song",
    "Jam an 80s power rock song",
    "Jam a meme song",
    "Jam something that isn't a song but could kind of be like a song",
    "Jam a song with a female lead singer",
    "Jam a song which doesn't have a guitar in it",
    "Jam to acapella",
    "Jam a song that lasts more that 10 minutes",
    "Jam a song that lasts less than 2 minutes",
    "Jam a song that will almost certainly make everyone else groan",
    "Jam a song that you can self-admittedly sing every word to",
    "Jam a song that you hate but you know everyone else is just gonna love",
    "Jam a jam with jam... and/or peanut butter",
    "Jam the fastest BPM song you can find",
    "Jam the absolutely most ludacriously happy song that you can find",
    "Jam the most depressing song you can find",
    "Jam something that reminds you of summer",
    "Jam something that reminds you of spring",
    "Jam something that reminds you of winter",
    "Jam something that reminds you of fall",
    "Jam a song that you've karaoked before",
  ],
  BOT: {
    JAMS: {
      NOJAMMER: [
        "Cool your jets!  We haven't even picked a jammer yet today."
      ],
      STOLENJAM: [
        "Hey human!  %s is the jammer today.  Get out of here jam-pirate!"
      ],
      JAMISTHERE: [
        "Whoa!  Hang on a minute.  We already have a jam for today.  Check yo'self.  <https://giphy.com/gifs/cMQRlCqkZ5CYU>"
      ],
      CANTFINDJAM: [
        "Shoot... couldn't find that one.  Try again? <https://giphy.com/gifs/moodman-TJawtKM6OCKkvwCIqX>"
      ],
      FOUNDJAM: [
        "Nicely done, %s.  \"%s\" is one of my favorites!  :tada: :tada:"
      ]
    },
    JAMMERS: {
      STOLENJAMMER: [
        "Whoa, whoa, whoa.  We already have a jammer selected.  Cool your jets!",
        "Quit jam pirating, human.  Wait your turn!",
      ],
      FINDJAMMERS: [
        "Jam picker initiated..."
      ],
      FINDJAMMERSTALL1: [
        "Drumroll please! :drum_with_drumsticks:"
      ],
      FINDJAMMERSTALL2: [
        ":three:... :two:... :one:..."
      ],
      PICKEDJAMMER: [
        "%s!  It's you!  The chosen one! :tada:"
      ],
      NOJAMMER: [
        "So this is embarrasing.  I couldn't find anyone at all..."
      ],
      NOTIFYJAMMER: [
        "Hey %s!  Quit slackin' and get to jammin'!  It's your turn #jam."
      ],
      REROLLJAMMER: [
        "New jammer coming right up!"
      ],
      PICKEDREROLL: [
        "It's %s!  We were saving the best for last!"
      ],
      NOREROLL: [
        "I couldn't find anyone.  I'm not taking responsibility for this.  You need more friends."
      ],
      JAMMERSET: [
        "Temporary memory loss. human? %s is today's jammer!"
      ],
      JAMMERNOTSET: [
        "What's wrong with you, human?  There's no jammer selected yet today."
      ]
    },
    SYSTEM: {
      STATS: [
        "Here are the stats..."
      ],
      NOSTATS: [
        "Syke!  Human, I don't devulge any of my secrets."
      ],
      CHALLENGE: [
        "Here's today's challenge..."
      ],
      CHALLENGESTALL1: [
        "Hang on, I need to access my long-term memory..."
      ],
      CHALLENGESTALL2: [
        "Uh... okay... whatever.  I can't find anything, so just..."
      ]
    }
  }
};

exports.lang = lang;

exports.botTalk = (array, mergeTags = []) => {
  // Select a random string from the array of options given
  let string = array[Math.floor(Math.random() * array.length)];
  
  // Replace with the merge tags
  if (string.includes('%s') && mergeTags.length > 0) {
    mergeTags.forEach(tag => string = string.replace('%s', tag));
  }
  return string;
}