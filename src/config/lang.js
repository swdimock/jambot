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
    // STATS: "get stats",
    CHALLENGE: "get challenge",
    LISTCOMMANDS: "list commands",
    // SETCHANNEL: "set channel"
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
        "Cool your jets!  We haven't even picked a jammer yet today.",
        "Whoa whoa whoa.  There isn't a jammer yet.  Get it together, human!",
        "ACCESS DENIED!  NO jam for you.",
        "Step 1.) pick a jammer.  Step 2.) pick a jam.  Step 3.) ?  Step 4.) Profit.",
      ],
      STOLENJAM: [
        "Hey human!  %s is the jammer today.  Get out of here jam-pirate!",
        "Trying to steal the jam?  I don't think so human!  Today is %s's day!",
        "That's it, I'm telling.  %s!  They're trying to steal your jam!",
      ],
      JAMISTHERE: [
        "Whoa!  Hang on a minute.  We already have a jam for today.  Check yo'self.  <https://giphy.com/gifs/cMQRlCqkZ5CYU>",
        "Cool it.  1 jam minimum, human.  You drunk?!",
        "I'm a one jam bot, you homewrecker!  Respect the jam.",
      ],
      CANTFINDJAM: [
        "Shoot... couldn't find that one.  Try again? <https://giphy.com/gifs/moodman-TJawtKM6OCKkvwCIqX>",
        "Couldn't find that Jam.  I'm so embarrassed. I wish everybody else was dead.",
        "I don't know what jam you're talking about.  I hope you know this is all your fault.",
      ],
      FOUNDJAM: [
        "Nicely done, %s.  \"%s\" is one of my favorites!  :tada: :tada:",
        "That's what I'm talking about, %s!  I was just thinking about \"%s\" and here it is.",
        "Bring it on %s!  TURN \"%s\" UP TO 11!",
        "You've done it, %s.  With \"%s\" you have selected the best jam that this channel has ever seen.",
        "Cool %s.  I'm not annoyed by \"%s\".  Nicely done.",
        "%s... \"%s\", really?  I mean.  Okay then.",
        "About that choice, %s.  \"%s\" is not what I would have chosen, but let's see what the people say.",
        "%s is going hard!  \"%s\" is DEFINITELY better than the last jam we had.",
        "%s, are you sure?  \"%s\"...?  I thought the last one was better, but let's see what the other humans think.",
        "JAM SELECTED BY %s.  \"%s\" HAS BEEN RECORDED TO HISTORY FOREVER.",
      ]
    },
    JAMMERS: {
      STOLENJAMMER: [
        "Whoa, whoa, whoa.  We already have a jammer selected.  Cool your jets!",
        "Quit jam pirating, human.  Wait your turn!",
        "All jam pirates MUST DIE!!!  Wait... not die.  What's the word?  ...oh yeah.  \"Cry\".  Start crying, now!",
        "Stolen jammer!  Stolen jammer!  Weeeeeeee-ooooooooo weeeeeeee-ooooooooo!",
      ],
      FINDJAMMERS: [
        "Jam picker initiated...",
        "Jamming sequence activated...",
        "Jam!  Jam!  Jam!  Jam!",
        "The pandora's box has been opened.  PREPARE FOR YOUR JAMMER! :the_horns:",
        "It is time to crown today's jammer.  Prepare your ears for PURE AUDIO PLEASURE. :ear:",
        ":musical_note: This is a story all about how, my jam like got flip-turned upside down... :musical_note:",
        "Every day I'm jamm-er-in' <https://media.giphy.com/media/Uicl6FGLXo1os/giphy.gif>",
        "Prepare for your new jammer.  It's about to go down!  <https://media.giphy.com/media/l0Iy2BmvXf6YeNz2w/giphy.gif>"
      ],
      FINDJAMMERSTALL1: [
        "Drumroll please! :drum_with_drumsticks:",
        "Waiting...    Still waiting...",
        "Reticulating splines...",
        "Nope, sorry.  Okay. I changed my mind.  This might be a bad idea.",
        "...are you prepared?  You may not be prepared enough",
        "<https://media.giphy.com/media/8JZmEBXoCgDleNWFUt/giphy.gif>",
        "<https://media.giphy.com/media/qnvhznaNR4rDSNP8ZC/giphy.gif>",
      ],
      FINDJAMMERSTALL2: [
        ":three:... :two:... :one:...",
        "<https://media.giphy.com/media/IMDnZv2BzKvPa/giphy.gif>",
        "<https://media.giphy.com/media/pcJPMe0jlvNmRyqpzC/giphy.gif>",
        "It's almost there...",
        "Not long now...",
        ":musical_note: Tum ta tum de dum tra la la :musical_note:",
        "I can't wait... I just can't handle this pressure...",
        "SYSTEM OVERLOAD.  SHUTTING DOWN.",
        "FATAL ERROR.  PRESSURE EXCEEDED MAXIMUM PERFORMANCE SPECIFICATION.",
      ],
      PICKEDJAMMER: [
        "%s!  It's you!  The chosen one! :tada:",
        "IT IS DONE!  %s you are today's jam god!",
        "Oooooooooooooh man!  The pressure is really on now!  %s, we're all counting on you!",
        "%s.  That is all.",
        "%s <https://media.giphy.com/media/BjHIjM2YFC3rEUaMrw/giphy.gif>",
        "I can't wait!  I knew it would be %s and I am not disappointed.",
        "It's %s.  No surprise there.  They are obviously the best jammer pick.",
        "As I had forseen.  It is %s.",
      ],
      NOJAMMER: [
        "So this is embarrasing.  I couldn't find anyone at all...",
        "Um.  There's no one to choose from.  Wow, this is embarrasing for you.",
        "Seriously?  No one else is here.  That's so sad for you."
      ],
      NOTIFYJAMMER: [
        "Hey %s!  Quit slackin' and get to jammin'!  It's your turn #jam.",
        "Yo %s.  Check the #jam channel, you're up!",
        "Rise and shine, %s.  It's jammin' time.",
        "%s you're never gonna guess what happened.  You're the jammer!  ...right?  I didn't think it'd happen either.",
        "Hey %s, it's jam time!  Get out there and <https://media.giphy.com/media/YFJ4lkeKVl3ILgasWk/giphy.gif>",
        "Omg, omg, omg %s.  It's your jam!  <https://media.giphy.com/media/YFJ4lkeKVl3ILgasWk/giphy.gif>",
        "%s.  Jam.",
        "Your people need you, %s.  <https://media.giphy.com/media/l0NwGpoOVLTAyUJSo/giphy.gif>"

      ],
      REROLLJAMMER: [
        "New jammer coming right up!",
        "Yeah, I didn't think that last pick was very good either.  Let's find a new one.",
        "Really?  I thought the last one was okay... alright though.",
        "FINALLY!  I thought we'd be stuck with the last human.  Let's find a GOOD jammer!",
        "Good decision.  I only picked the last one by accident."
      ],
      PICKEDREROLL: [
        "It's %s!  We were saving the best for last!",
        "Great, it's %s!  They were my ACTUAL original choice.",
        "Okay, well... I guess it's %s. <https://media.giphy.com/media/3og0INyCmHlNylks9O/giphy.gif>",
        "Yes, yes, yes!  That worked out way better.  It's %s!!"
      ],
      NOREROLL: [
        "I couldn't find anyone.  I'm not taking responsibility for this.  You need more friends.",
        "Seriously?  No one?  Man, you need to bring more people in this channel.",
        "It's really lonely in here... better invite some more friends to the channel."
      ],
      JAMMERSET: [
        "Temporary memory loss. human? %s is today's jammer!",
        "I hate to repeat myself, but I'll do it this one time.  It's %s... just like I told you before.",
        "Seriously human?  %s.  <https://media.giphy.com/media/QVxeI5qhmlXAkqaAro/giphy.gif>"
      ],
      JAMMERNOTSET: [
        "What's wrong with you, human?  There's no jammer selected yet today.",
        "Forget something, human?  You haven't even picked a jammer yet!",
        "Do you feel like you forgot to do something?  Oh yeah... PICK A JAMMER! <https://media.giphy.com/media/APqEbxBsVlkWSuFpth/giphy-downsized-large.gif>"
      ]
    },
    SYSTEM: {
      STATS: [
        "Here are the stats...",
        "F, it!  We're doin' it live!  Here are statistics:"
      ],
      NOSTATS: [
        "Syke!  Human, I don't devulge any of my secrets.",
        "...no.  Yeah, that's the only stat.  Kiss my shiney metal ass."
      ],
      CHALLENGE: [
        "Here's today's challenge...",
        "Great idea.  Let's make this interesting...",
        "Are you up to the challenge?  Didn't think so, but let's do it anyways.",
        "CHALLENGE MODE ACTIVATED!"
      ],
      CHALLENGESTALL1: [
        "Hang on, I need to access my long-term memory...",
        "...",
        "Tick tock tick tock",
        "Hmmm, where did I put that?",
      ],
      CHALLENGESTALL2: [
        "Uh... okay... whatever.  I can't find anything, so just...",
        "<https://media.giphy.com/media/VdESmCbCX3mxUPP9Zi/giphy.gif>",
        "<https://media.giphy.com/media/5totXGbmSkkaz9QxFi/giphy.gif>",
        "One challenge comin' right up!",
        "And... here... you... go!"
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